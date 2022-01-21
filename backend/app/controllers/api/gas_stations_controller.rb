class Api::GasStationsController < ApplicationController

  def index
    @gas_stations = GasStation.all
    puts "session UserID" , session[:user_id]
    render json: @gas_stations
  end

  def show
    @gas_station = GasStation.find_by_id(params[:id])
    render json: @gas_station
  end
  
end
