class City < ApplicationRecord
  belongs_to :province
  has_many :gas_stations

  validates :name, presence: true
end
