Rails.application.routes.draw do
  use_doorkeeper do
    controllers :applications => 'custom_applications'
    #controllers :applications => :authorizations
  end
  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      resources :dots
      get 'rig_dots/:rig_id' => 'dots#rig'
      get 'user' => 'users#show'
    end
  end

  devise_for :users
  resources :raw_crimes

  resources :people
  resources :raw_crimes

  get 'one' => 'graphs#one', as: :one
  get 'two' => 'graphs#two', as: :two
  get 'twob' => 'graphs#twob', as: :twob
  get 'three' => 'graphs#three', as: :three

  get 'wave' => 'graphs#wave', as: :wave
  get 'rome' => 'maps#rome', as: :rome
  get 'coordinates' => 'maps#coordinates', as: :coordinates

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
