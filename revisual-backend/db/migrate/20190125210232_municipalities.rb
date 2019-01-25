class Municipalities < ActiveRecord::Migration[5.2]
  def change
    create_table :municipalities do |t|
      t.string :municipality
      t.timestamps
    end  
  end
end
