class Api::UsersController < ApplicationController

  def index
    @users = User.all
    # Render JSON in object format
    render json: @users
    
  end

  def show
    @user = User.find_by_id(params[:id])
    render json: @user
  end

  def create
    @user = User.new(user_params)

    if @user.save
      session[:user_id] = @user.id
      render :json => {
        success: true,
        user_id: @user.id,
        first_name: @user.first_name
      }
    else
      render :json => {message: "account not created"}
    end
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :phone)
  end

end