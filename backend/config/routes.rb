Rails.application.routes.draw do
  namespace :api do
    # Routes for api fetching
    resources :users, :gas_stations, :reviews, :provinces, :cities, :price_updates
    
    #resource :persons, only: [:create]
    #post "/login", to: "persons#login"
    #get "/auto_login", to: "persons#auto_login"


    post '/login' => 'sessions#create'
    delete '/logout' => 'sessions#destroy'
  end
end
