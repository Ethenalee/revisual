class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :phone_cell
      t.string :phone_office
      t.string :phone_fax
      t.string :address_1
      t.string :address_2
      t.string :city
      t.string :state
      t.string :zip_code
      t.string :email
      t.string :website_url

      t.timestamps
    end
  end
end
