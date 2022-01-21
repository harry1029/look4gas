class Api::PriceUpdatesController < ApplicationController

  require 'action_view'

  include ActionView::Helpers::DateHelper


  def index
    @price_updates = PriceUpdate.all

    @price_updates.each {|x| x.time_ago = "#{distance_of_time_in_words(Time.now)} ago"}
    render json: @price_updates
  end

  def show
    @price_update = PriceUpdate.find_by_id(params[:id])

    @time_difference = distance_of_time_in_words(Time.now, @price_update.created_at)

    #render json: @time_difference
    render :json => {
      price_update: @price_update,
      time_difference: @time_difference
    }
  end

  def create
    @price_updates = PriceUpdate.new(price_update_params)

    if @price_updates.save
        render :json => {
        success: true,
      }
    else
      render :json => {message: "Price Update not created"}
    end
  end

  def price_updates_params
    params.require(:price_update).permit(:user_id, :gas_station_id)
  end
end
