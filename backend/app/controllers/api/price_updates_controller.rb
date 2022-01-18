class Api::PriceUpdatesController < ApplicationController
  def index
    @price_updates = PriceUpdate.all
    render json: @price_updates
  end

  def show
    @price_update = PriceUpdate.find_by_id(params[:id])
    render json: @price_update
  end
end
