Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :update, :destroy, :show]
    resources :post_likes, only: [:create, :destroy]
  end
  # resources :posts, only: :show 

  root to: 'static_pages#root'

  # match "*path", to: redirect('/login'), via: :all
end
 