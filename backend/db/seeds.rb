# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Generate some fake data with 'faker'
require('faker')

3.times do
  User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: Faker::Internet.password)
end

GasStation.create(name: '123 GasStation', rating: 5.0, address: '123 Test street', city_id: 1, station_phone: '#123', regular_price: 10, ultra_price: 20, premium_price: 30)
GasStation.create(name: '456 GasStation', rating: 4.0, address: '456 Test street', city_id: 2, station_phone: '#456', regular_price: 40, ultra_price: 50, premium_price: 60)
GasStation.create(name: '789 GasStation', rating: 3.0, address: '789 Test street', city_id: 3, station_phone: '#789', regular_price: 70, ultra_price: 80, premium_price: 90)
GasStation.create(name: 'BrandNew GasStation', address: 'BrandNew Test street', city_id: 4)