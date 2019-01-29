class MunicipalitiesController < ApplicationController

  def index
    # TODO: Implement this if we're going to feed data to the landing page
  end

  def show
    # Show detailed stats for a single municipality
    @municipality = Municipality.find params[:id]
    @timeframe = params[:timeframe]
    @is_sale = ActiveRecord::Type::Boolean.new.cast(params[:is_sale])
    @type = params[:type]

    puts("Query params:")
    puts(@timeframe, @is_sale, @type)

    # TODO: Add all the stats to this json response
    json_response({
      municipality: @municipality,
      average_sold_price: average_sold_price(@timeframe, @is_sale, @type)
    })
  end

  private

  # Returns the average sale price of sold properties that match the filter.
  # TODO: Implement optional type filtering
  def average_sold_price(timeframe, is_sale, type)
    # Choose timeframe to filter sales by
    # TODO: Refactor this out into a private helper method
    filter_datetime = case timeframe
      when "today" then 1.day.ago.to_datetime
      when "3months" then 3.months.ago.to_datetime
      when "2years" then 2.years.ago.to_datetime
      else 5.years.ago.to_datetime
    end

    # Filter listings by required fields
    filter = Listing.where(municipality_id: params[:id])
      .where(sale_lease: is_sale ? "sale" : "lease")
      .where("sold_date > ?", filter_datetime) # TODO: Make sure this works

    # Further filter by type, if provided
    filter = filter.where(listing_type: type) if type

    # Find the average sold price of filtered listings
    filter.average(:sold_price)
  end

  def number_of_listings(timeframe, is_sale, type)
  end

  def average_days_on_market(timeframe, is_sale, type)
  end

end
