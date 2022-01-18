class CreatePriceUpdates < ActiveRecord::Migration[7.0]
  def change
    create_table :price_updates do |t|
      t.references :user, foreign_key: true
      t.references :gas_station, foreign_key: true

      t.datetime :time_ago
    end
  end
end
