Rails.application.routes.draw do
  get 'errors/file_not_found'

  get 'errors/unprocessable'

  get 'errors/internal_server_error'

  devise_for :users
  resources :posts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root to: 'posts#index'
  
  match '/404', to: 'errors#file_not_found', via: :all
match '/422', to: 'errors#unprocessable', via: :all
match '/500', to: 'errors#internal_server_error', via: :all
end
