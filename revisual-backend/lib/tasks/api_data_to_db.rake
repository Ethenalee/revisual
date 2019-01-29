require 'csv'

namespace :api_data_to_db do
  
  desc "Import listings from CSV file"
  
  task listing: :environment do
    CSV.foreach('./rets/test_sample.csv', headers: true) do |row|
      Listing.create(row.to_h)
    end
  end

end
