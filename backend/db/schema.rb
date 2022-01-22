# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_18_034637) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.bigint "province_id"
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["province_id"], name: "index_cities_on_province_id"
  end

  create_table "gas_stations", force: :cascade do |t|
    t.string "name"
    t.decimal "rating"
    t.string "address"
    t.bigint "city_id"
    t.string "station_phone"
    t.decimal "regular_price"
    t.decimal "ultra_price"
    t.decimal "premium_price"
    t.string "img_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["city_id"], name: "index_gas_stations_on_city_id"
  end

  create_table "price_updates", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "gas_station_id"
    t.string "time_ago"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["gas_station_id"], name: "index_price_updates_on_gas_station_id"
    t.index ["user_id"], name: "index_price_updates_on_user_id"
  end

  create_table "provinces", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.string "comment"
    t.decimal "user_rating"
    t.bigint "user_id"
    t.bigint "gas_station_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["gas_station_id"], name: "index_reviews_on_gas_station_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "password"
    t.string "email"
    t.string "phone"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "cities", "provinces"
  add_foreign_key "gas_stations", "cities"
  add_foreign_key "price_updates", "gas_stations"
  add_foreign_key "price_updates", "users"
  add_foreign_key "reviews", "gas_stations"
  add_foreign_key "reviews", "users"
end
