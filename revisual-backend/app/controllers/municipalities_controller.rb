class MunicipalitiesController < ApplicationController

  def index
    # TODO: Implement this if we're going to feed data to the landing page
  end

  def show
    # Show detailed stats for a single municipality
    @municipality = Municipality.find params[:id]
    json_response(@municipality)
  end
end
