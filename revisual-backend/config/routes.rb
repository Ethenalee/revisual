Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :municipalities, only: [:index, :show]
  resources :report_templates, only: [:show]
end
