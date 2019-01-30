class MunicipalitiesController < ApplicationController

  def index
    # TODO: Implement this if we're going to feed data to the landing page
  end

  def show
    # Show detailed stats for a single municipality
    # Default query params are timeframe=5years&sale_lease=sale
    # By default, data is not filtered by listing type
    @municipality = Municipality.find params[:id]

    # Caculate start and end dates to filter by
    @start = start_datetime(params[:timeframe])
    @now = DateTime.now

    @timeframe = params[:timeframe]
    @sale_lease = params[:sale_lease]
    @type = params[:type]

    # TODO: Add all the stats to this json response
    json_response({
      municipality: @municipality,
      average_sold_price: average_sold_price(
        @start,
        @now,
        @sale_lease,
        @type
      ),
      number_of_listings: number_of_listings(
        @start,
        @now,
        @sale_lease,
        @type
      ),
      number_of_sold: number_of_sold(
        @start,
        @now,
        @sale_lease,
        @type
      ),
      average_days_on_market: average_days_on_market(
        @start,
        @now,
        @sale_lease,
        @type
      ),
      highest_priced_sale: highest_priced_sale(
        @start,
        @now,
        @sale_lease,
        @type
      ),
      lowest_priced_sale: lowest_priced_sale(
        @start,
        @now,
        @sale_lease,
        @type
      ),

      # Monthly stats through the duration of the timeframe
      monthly_average_sold_price: monthly_stats(
        @timeframe,
        @now,
        @sale_lease,
        @type,
        &method(:average_sold_price)
      ),
      monthly_number_of_listings: monthly_stats(
        @timeframe,
        @now,
        @sale_lease,
        @type,
        &method(:number_of_listings)
      ),
      monthly_number_of_sold: monthly_stats(
        @timeframe,
        @now,
        @sale_lease,
        @type,
        &method(:number_of_sold)
      ),
      monthly_average_days_on_market: monthly_stats(
        @timeframe,
        @now,
        @sale_lease,
        @type,
        &method(:average_days_on_market)
      ),
      monthly_highest_priced_sale: monthly_stats(
        @timeframe,
        @now,
        @sale_lease,
        @type,
        &method(:highest_priced_sale)
      ),
      monthly_lowest_priced_sale: monthly_stats(
        @timeframe,
        @now,
        @sale_lease,
        @type,
        &method(:lowest_priced_sale)
      )
    })
  end

  private

  # Returns the average sale price of sold properties that match the filter.
  def average_sold_price(start_datetime, end_datetime, sale_lease, type)
    filter = filter_listings(start_datetime, end_datetime, sale_lease, type)
    filter.where.not(sold_date: nil).average(:sold_price).to_f
  end

  # Returns the number of listings that match the filter
  def number_of_listings(start_datetime, end_datetime, sale_lease, type)
    filter = filter_listings(start_datetime, end_datetime, sale_lease, type)
    filter.count
  end

  def number_of_sold(start_datetime, end_datetime, sale_lease, type)
    filter = filter_listings(start_datetime, end_datetime, sale_lease, type)
    filter.where.not(sold_date: nil).count
  end

  def average_days_on_market(start_datetime, end_datetime, sale_lease, type)
    filter = filter_listings(start_datetime, end_datetime, sale_lease, type)
    filter.where.not(sold_date: nil).average(:days_on_market).to_f
  end

  def highest_priced_sale(start_datetime, end_datetime, sale_lease, type)
    filter = filter_listings(start_datetime, end_datetime, sale_lease, type)
    filter.where.not(sold_date: nil).maximum(:sold_price).to_f
  end

  def lowest_priced_sale(start_datetime, end_datetime, sale_lease, type)
    filter = filter_listings(start_datetime, end_datetime, sale_lease, type)
    filter.where.not(sold_date: nil).minimum(:sold_price).to_f
  end


  # The base filter to find a list of listings, to be further processed.
  def filter_listings(start_datetime, end_datetime, sale_lease, type)
    # Filter listings by required fields
    filter = Listing.where(municipality_id: params[:id])
      .where(sale_lease: sale_lease || "Sale")
      .where(
        "(sold_date > ? OR sold_date IS NULL) AND list_date < ?",
        start_datetime,
        end_datetime
      )

    # Further filter by type, if provided
    filter = filter.where(listing_type: type) if type

    return filter
  end

  # Calculate a start datetime given a timeframe string
  def start_datetime(timeframe = nil)
    case timeframe
      when "1month" then 1.month.ago.to_datetime
      when "3months" then 3.months.ago.to_datetime
      when "2years" then 2.years.ago.to_datetime
      else 5.years.ago.to_datetime
    end
  end

  # Returns the number of months that fall within in a given timeframe string
  def number_of_months(timeframe = nil)
    case timeframe
      # 1month is a special case, need same month's data from last year as well
      when "1month" then 13
      when "3months" then 3
      when "2years" then 24
      else 60
    end
  end

  # Generate an array of monthly stats for any query provided as a yield
  def monthly_stats(timeframe, end_datetime, sale_lease, type, &block)
    puts "Monthly stats"

    history = Array.new

    (1..number_of_months(timeframe)).each do |months_back|
      # Compute the month interval to search
      month_start = end_datetime - months_back.month
      month_end = month_start + 1.month

      # Push month's data to history
      puts "Push"
      history << block.call(month_start, month_end, sale_lease, type)
    end

    return history
  end

end
