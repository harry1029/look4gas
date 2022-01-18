class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
    render json: @reviews
  end

  def show
    @review = Review.find_by_id(params[:id])
    render json: @review
  end
end
