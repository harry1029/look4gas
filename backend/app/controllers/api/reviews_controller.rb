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
end
