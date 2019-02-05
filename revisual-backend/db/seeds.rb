# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding Data ..."

# Helper functions
def open_asset(file_name)
  File.open(Rails.root.join('db', 'seed_assets', file_name))
end

# Only run on development (local) instances not on production, etc.
unless Rails.env.development?
  puts "Development seeds only (for now)!"
  exit 0
end

# Let's do this ...

## Municipalities

puts "Finding or Creating Municipalities ..."

c14 = Municipality.find_or_create_by! municipality: 'C14'
w01 = Municipality.find_or_create_by! municipality: 'W01'
c01 = Municipality.find_or_create_by! municipality: 'C01'

## Listings

puts "Dropping Listings ..."

Listing.destroy_all

# c14.listings.create!({
#   days_on_market: 10,
#   list_price: 500_000,
#   sold_price: 600_000,
#   listing_type: 'townhouse',
#   sale_lease: 'sale',
#   sold_date: DateTime.new(2019,1,20),
#   list_date: DateTime.new(2019,1,11)
# })

# c14.listings.create!({
#   days_on_market: 20,
#   list_price: 400_000,
#   sold_price: 500_000,
#   listing_type: 'semi-detached',
#   sale_lease: 'sale',
#   sold_date: DateTime.new(2019,1,10),
#   list_date: DateTime.new(2019,1,1)
# })

# w01.listings.create!({
#   days_on_market: 14,
#   list_price: 600_000,
#   sold_price: 1_000_000,
#   listing_type: 'detached',
#   sale_lease: 'sale',
#   sold_date: DateTime.new(2019,1,20),
#   list_date: DateTime.new(2019,1,10)
# })

# w01.listings.create!({
#   days_on_market: 2,
#   list_price: 1_500,
#   sold_price: 1_500,
#   listing_type: 'condo',
#   sale_lease: 'lease',
#   sold_date: DateTime.new(2019,1,11),
#   list_date: DateTime.new(2019,1,11)
# })

# c01.listings.create!({
#   days_on_market: 1,
#   list_price: 2_500,
#   sold_price: 2_500,
#   listing_type: 'condo',
#   sale_lease: 'lease',
#   sold_date: DateTime.new(2019,1,21),
#   list_date: DateTime.new(2019,1,21)
# })

# c01.listings.create!({
#   days_on_market: 4,
#   list_price: 4_500,
#   sold_price: 4_500,
#   listing_type: 'condo',
#   sale_lease: 'lease',
#   sold_date: DateTime.new(2019,1,20),
#   list_date: DateTime.new(2019,1,20)
# })

## USERS

puts "Creating Users ..."

user1 = User.find_or_create_by!(
  name: "Bobert Thompkins",
  phone_cell: "555 555 5555",
  phone_office: "555 555 5556",
  phone_fax: "555 555 5557",
  address_1: "35 Rawlings Ave",
  address_2: "Apt. 101",
  city: "Richmond Hill",
  state: "ON",
  zip_code: "L4S 1B5",
  email: "bobthompkins@gmail.com",
  website_url: "github.com/zixialu"
)

## REPORT TEMPLATES
puts "Creating Report Templates ..."

user1.report_templates.find_or_create_by!(
  primary_color: "#555555",
  logo_url: "https://i.imgur.com/u3KSh5I.png"
)