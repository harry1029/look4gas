class Api::UsersController < ApplicationController

  def index
    @users = User.all

    # Render JSON in object format
    render :json => {
      users: @users
    }
    
  end

end