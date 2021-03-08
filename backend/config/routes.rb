Rails.application.routes.draw do
 
  resources :scores
  resources :users
  get '/topten', to: 'scores#topten'
  root 'scores#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
