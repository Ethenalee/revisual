class ReportTemplatesController < ApplicationController

  def show
    # Get data from model and referenced user
    @report_template = ReportTemplate.find params[:id]
    @user = User.find @report_template.user_id

    json_response({
      primary_color: @report_template.primary_color,
      logo_url: @report_template.logo_url,

      user: {
        name: @user.name,
        phone_cell: @user.phone_cell,
        phone_office: @user.phone_office,
        phone_fax: @user.phone_fax,
        address_1: @user.address_1,
        address_2: @user.address_2,
        city: @user.city,
        state: @user.state,
        zip_code: @user.zip_code,
        email: @user.email,
        website_url: @user.website_url,
      }
    })
  end

end
