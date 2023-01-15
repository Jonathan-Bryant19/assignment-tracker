Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'

  resources :users, only: [:create, :show, :destroy]

  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/signup', to: 'users#create'
  get '/signup', to: 'users#new'
  get '/me', to: 'users#show'
  resources :users
  
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'

  delete '/logout', to: 'sessions#destroy'

  
end
