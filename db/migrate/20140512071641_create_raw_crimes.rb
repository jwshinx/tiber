class CreateRawCrimes < ActiveRecord::Migration
  def change
    create_table :raw_crimes do |t|
      t.string :case_number
      t.string :description
      t.datetime :timestamp
      t.string :beat
      t.string :crime_type
      t.string :zip
      t.string :address_description
      t.float :latitude
      t.float :longitude
      t.string :accuracy
      t.string :url
      t.boolean :processed

      t.timestamps
    end
    add_index :raw_crimes, :case_number
  end
end
