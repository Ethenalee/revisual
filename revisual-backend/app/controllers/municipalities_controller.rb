class MunicipalitiesController < ApplicationController

  def index
    # TODO: Implement this if we're going to feed data to the landing page
  end

  def show
    # Show detailed stats for a single municipality
    @municipality = Municipality.find params[:id]

    # TODO: Add all the stats to this json response
    json_response(@municipality)
  end

  private

  def average_sold_price(timeframe, is_sale, type)

    # Decide how far back to filter sales
    # TODO: Refactor thos out into a private helper method
    filter_datetime = case timeframe
      when "today" then DateTime.beginning_of_day()
      when "3months" then 3.months.ago.to_datetime
      when "2years" then 2.years.ago.to_datetime
      else 5.years.ago.to_datetime
    end

    Municipality.where(municipality_id: params[:id])
      .where(sale_lease: is_sale ? "sale" : "lease")
      .where("sold_date > ?", filter_datetime)
      .average(:sold_price)
  end

end
