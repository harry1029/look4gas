class Api::PriceUpdatesController < ApplicationController

  require 'action_view'

  include ActionView::Helpers::DateHelper


  def index
    @price_updates = PriceUpdate.all

    @price_updates.each {|x| x[:id2] = 2 }
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
end
