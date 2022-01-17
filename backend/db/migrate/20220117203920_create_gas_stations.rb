class CreateGasStations < ActiveRecord::Migration[7.0]
  def change
    create_table :gas_stations do |t|
      t.string :name
      t.decimal :rating
      t.string :address
      t.integer :city_id
      t.string :station_phone
      t.decimal :regular_price
      t.decimal :ultra_price
      t.decimal :premium_price


      t.timestamps
    end
  end
end
