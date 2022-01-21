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

  def update
    @gas_station = GasStation.find_by_id(params[:id])

    if @gas_station.update(gas_stations_update_params)
        render :json => {
        success: true,
      }
    else
      render :json => {message: "Gas Station price not updated"}
    end

  end

  def gas_stations_update_params
    params.require(:gas_station).permit(:regular_price, :ultra_price, :premium_price)
  end
  
end
