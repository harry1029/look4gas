require 'json'
class Api::ProvincesController < ApplicationController
  def index
    @provinces = Province.all
    render json: @provinces
  end

  def show
    @province = Province.find_by_id(params[:id])
    render json: @province
  end
  
end
