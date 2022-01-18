class Api::UsersController < ApplicationController

  def index
    @users = User.all
    # Render JSON in object format
    render json: @reviews
    
  end

  def show
    @city = City.find_by_id(params[:id])
    render json: @city
  end

end