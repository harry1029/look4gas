class CreateCities < ActiveRecord::Migration[7.0]
  def change
    create_table :cities do |t|
      t.references :province, foreign_key: true
      t.string :name
      

      t.timestamps
    end
  end
end
