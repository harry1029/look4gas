class GasStation < ApplicationRecord
  has_many :reviews
  has_one :price_update
  belongs_to :city

  validates :name, presence: true
  validates :address, presence: true

  def avg_rating
    return 0 unless reviews.count.positive?
    reviews.average(:user_rating).round(2).to_f
  end
end
