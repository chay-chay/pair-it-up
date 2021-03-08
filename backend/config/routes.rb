Rails.application.routes.draw do
  root "pairitup"
  resources :scores
  resources :users
  get '/topten', to: 'scores#topten'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
