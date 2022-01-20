class Api::ReviewsController < ApplicationController
  require 'date'

  def index
    @reviews = Review.all

    # @reviews.map {|x| x.created_at = "#{x.created_at.strftime('%a, %e %b %Y')}"}
    render json: @reviews
  end

  def show
    @review = Review.find_by_id(params[:id])
    render json: @review
  end
  
  def create
    @reviews = Review.new(review_params)

    if @reviews.save
        render :json => {
        success: true,
      }
    else
      render :json => {message: "Review not created"}
    end
  end

  def review_params
    params.require(:review).permit(:comment, :user_rating, :user_id, :gas_station_id)
  end

  
end
