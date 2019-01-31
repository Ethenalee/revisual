class CreateReportTemplates < ActiveRecord::Migration[5.2]
  def change
    create_table :report_templates do |t|
      t.references :user, foreign_key: true
      t.integer :primary_color
      t.string :logo_url

      t.timestamps
    end
  end
end
