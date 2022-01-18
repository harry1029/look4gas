class Api::PriceUpdatesController < ApplicationController
  def index
    @price_updates = PriceUpdate.all
    render :json => {
      price_updates: @price_updates
    }
  end
end
