class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  #skip_before_filter :authenticate_user! 

private
  def after_sign_out_path_for( resource_or_scope )
    root_path
  end
  def stored_location_for( resource_or_scope )
    nil
  end
end
