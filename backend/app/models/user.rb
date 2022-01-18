class User < ApplicationRecord
  has_many :reviews
  has_many :price_updates
end
