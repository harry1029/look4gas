class PriceUpdate < ApplicationRecord
  belongs_to :gas_station
  belongs_to :user

  # validates :time_ago, presence: true
end
