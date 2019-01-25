class Listings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.references :municipality, index: true, foreign_key: true
      t.integer :days_on_market
      t.integer :list_price
      t.integer :sold_price
      t.string :type
      t.string :sale_lease
      t.datetime :sold_date
      t.datetime :list_date
      t.timestamps
    end  
  end
end
