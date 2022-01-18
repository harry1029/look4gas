class GasStation < ApplicationRecord
  has_many :reviews
  has_one :price_update
  belongs_to :city

  validates :name, presence: true
  validates :address, presence: true
end
