# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_01_31_172828) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.bigint "municipality_id"
    t.integer "days_on_market"
    t.integer "list_price"
    t.integer "sold_price"
    t.string "listing_type"
    t.string "sale_lease"
    t.datetime "sold_date"
    t.datetime "list_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["municipality_id"], name: "index_listings_on_municipality_id"
  end

  create_table "municipalities", force: :cascade do |t|
    t.string "municipality"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "report_templates", force: :cascade do |t|
    t.bigint "user_id"
    t.integer "primary_color"
    t.string "logo_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_report_templates_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "phone_cell"
    t.string "phone_office"
    t.string "phone_fax"
    t.string "address_1"
    t.string "address_2"
    t.string "city"
    t.string "state"
    t.string "zip_code"
    t.string "email"
    t.string "website_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "listings", "municipalities"
  add_foreign_key "report_templates", "users"
end
