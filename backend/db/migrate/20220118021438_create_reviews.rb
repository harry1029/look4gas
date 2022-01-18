class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :comment
      t.decimal :user_rating
      t.references :user, foreign_key: true
      t.references :gas_station, foreign_key: true

      t.timestamps
    end
  end
end
