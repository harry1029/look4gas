class Api::GasStationsController < ApplicationController

  def index
    @gas_stations = GasStation.all
    render json: @gas_station
  end

  def show
    @gas_station = GasStation.find_by_id(params[:id])
    render json: @gas_station
  end
  
end
