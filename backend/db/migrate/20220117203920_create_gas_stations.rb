class CreateGasStations < ActiveRecord::Migration[7.0]
  def change
    create_table :gas_stations do |t|
      t.string :name
      t.decimal :rating
      t.string :address
      t.references :city, foreign_key: true
      t.string :station_phone
      t.decimal :regular_price
      t.decimal :ultra_price
      t.decimal :premium_price

      t.string :img_url
      t.decimal :lat
      t.decimal :lng


      t.timestamps
    end
  end
end
