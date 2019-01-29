require 'csv'


task :upload_listing do

    target = 'test_sample.csv'

    csv_text = File.read(target)
    csv = CSV.parse(csv_text, headers: true)
    csv.each do |row|
        Listings.create!(row.to_hash)
    end

end
# CSV.foreach(target, headers: true) do |row|
#     Listings.create(row.to_h)
# end


# def self.import(filepath)
#     CSV.foreach(filepath, headers: true) do |row|
#         my_object = Listings.find_or_initialize_by_code(code)
#         my_object.update_attributes(row.to_hash)
# end