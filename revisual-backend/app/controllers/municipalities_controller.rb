class MunicipalitiesController < ApplicationController

  def index
    # TODO: Implement this if we're going to feed data to the landing page
  end

  def show
    # Show detailed stats for a single municipality
    # Default query params are timeframe=5years&sale_lease=sale
    # By default, data is not filtered by listing type
    @municipality = Municipality.find params[:id]
    @timeframe = params[:timeframe]
    @sale_lease = params[:sale_lease]
    @type = params[:type]

    puts("Query params:")
    puts(@timeframe, @sale_lease, @type)

    # TODO: Add all the stats to this json response
    json_response({
      municipality: @municipality,
      average_sold_price: average_sold_price(
        @timeframe,
        @sale_lease,
        @type
      ),
      number_of_listings: number_of_listings(
        @timeframe,
        @sale_lease,
        @type
      ),
      average_days_on_market: average_days_on_market(
        @timeframe,
        @sale_lease,
        @type
      )
    })
  end

  private

  # Returns the average sale price of sold properties that match the filter.
  def average_sold_price(timeframe, sale_lease, type)
    filter = filter_listings(timeframe, sale_lease, type)
    filter.where.not(sold_date: [nil, ""]).average(:sold_price).to_f
  end

  # Returns the number of listings that match the filter
  def number_of_listings(timeframe, sale_lease, type)
    filter = filter_listings(timeframe, sale_lease, type)
    filter.count
  end

  def average_days_on_market(timeframe, sale_lease, type)
    filter = filter_listings(timeframe, sale_lease, type)
    filter.where.not(sold_date: [nil, ""]).average(:days_on_market).to_f
  end

  def filter_listings(timeframe, sale_lease, type)
    # Choose timeframe to filter sales by
    # TODO: Refactor this into a dict?
    filter_datetime = case timeframe
      when "Today" then 1.day.ago.to_datetime
      when "3months" then 3.months.ago.to_datetime
      when "2years" then 2.years.ago.to_datetime
      else 5.years.ago.to_datetime
    end

    # Filter listings by required fields
    filter = Listing.where(municipality_id: params[:id])
      .where(sale_lease: sale_lease || "sale")
      .where("sold_date > ?", filter_datetime)

    # Further filter by type, if provided
    filter = filter.where(listing_type: type) if type

    return filter
  end

end
