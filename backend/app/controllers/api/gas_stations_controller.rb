class Api::GasStationsController < ApplicationController

  def index
    gas_stations = GasStation.all
    render json: gas_stations
  end
  
end
