class Api::CitiesController < ApplicationController
  def index
    @cities = City.all
    render :json => {
      cities: @cities
    }
  end
end
