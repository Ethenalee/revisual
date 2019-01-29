require 'csv'

namespace :import do
  desc "TODO adds API data to DB"
  task listings: :environment do
    CSV.foreach('./rets/sample_data/test_sample.csv', headers: true) do |row|
      Listing.create(row.to_h)
    end
  end

end
