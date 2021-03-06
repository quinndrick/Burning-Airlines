Rails.application.routes.draw do

  get 'login_static/show'

  root to: 'login_static#show'

  get '/app' => 'pages#app'

  get '/login'  => 'session#new' # login form
  post '/login' => 'session#create' # check credentials and attempt login (set session)
  delete '/login' => 'session#destroy' # log out destroy the session

  resources :reservations
  resources :flights
  resources :airplanes
  resources :users
end
