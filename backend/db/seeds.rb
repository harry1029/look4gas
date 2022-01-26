# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Generate some fake data with 'faker'
require('faker')
require('json')

toronto_records = JSON.parse(File.read('./db/data/stations_toronto.json'))
toronto_results = toronto_records["results"]

3.times do
  User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: Faker::Internet.password)
end

Province.create(name: 'Ontario')
Province.create(name: 'Quebec')

City.create(name: 'Toronto', province_id: 1)
City.create(name: 'Montreal', province_id: 2)

# Gas station dummies

# Use the json fetched from google places api to populate gas stations as dummy variables
toronto_results.each do |result|
  GasStation.create(name: result["name"], 
                    rating: 0, 
                    address: result["formatted_address"], 
                    city_id: 1, 
                    station_phone: Faker::PhoneNumber.phone_number, 
                    regular_price: Faker::Number.between(from: 80.0, to: 100.0).round(2), 
                    ultra_price: Faker::Number.between(from: 100.0, to: 130.0).round(2), 
                    premium_price: Faker::Number.between(from: 130.0, to: 150.0).round(2), 
                    lat: result["geometry"]["location"]["lat"],
                    lng: result["geometry"]["location"]["lng"]
                  )
end

# Reviews dummies
Review.create(comment: 'I am review #1', user_rating: 3.2, user_id: 1, gas_station_id: 1)
Review.create(comment: 'I am review #2', user_rating: 4.2, user_id: 1, gas_station_id: 1)
Review.create(comment: 'I am review #3', user_rating: 2.2, user_id: 2, gas_station_id: 1)
Review.create(comment: 'I am review #4', user_rating: 1.2, user_id: 2, gas_station_id: 2)
Review.create(comment: 'I am review #5', user_rating: 0.2, user_id: 3, gas_station_id: 2)
Review.create(comment: 'I am review #6', user_rating: 1.2, user_id: 3, gas_station_id: 3)
Review.create(comment: 'I am review #7', user_rating: 4.1, user_id: 1, gas_station_id: 3)

PriceUpdate.create(user_id: 1, gas_station_id: 1)
PriceUpdate.create(user_id: 2, gas_station_id: 2)
PriceUpdate.create(user_id: 3, gas_station_id: 3)
PriceUpdate.create(user_id: 1, gas_station_id: 4)
PriceUpdate.create(user_id: 2, gas_station_id: 5)