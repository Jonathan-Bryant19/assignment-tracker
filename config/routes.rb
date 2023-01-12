Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'

  resources :users, only: [:create, :show, :destroy]

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/signup', to: 'users#create'
  resources :users, only: [:create, :show, :destroy]
  get '/me', to: 'users#show'
end
