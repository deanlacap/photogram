Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    namespace :api, defaults: {format: :json} do
      resource :user, only: [:create]
      resource :session, only: [:create, :destroy]

  end

  root to: 'static_pages#root'

  match "*path", to: redirect('/login'), via: :all
end
