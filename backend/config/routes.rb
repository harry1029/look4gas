Rails.application.routes.draw do
  namespace :api do
    resources :users
    resource :persons, only: [:create]
    post "/login", to: "persons#login"
    get "/auto_login", to: "persons#auto_login"
  end
end
