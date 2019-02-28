class ApplicationController < ActionController::Base

  skip_before_action :verify_authenticity_token, raise: false
  helper_method :require_login, :current_user, :logged_in? 

  def login(user)
    session[:session_token] = user.reset_session_token!

    @current_user = user 
  end 

  def current_user 
    @current_user ||= User.find_by(session_token: session[:session_token])
  end 

  def require_login 
    redirect_to "/login" unless logged_in? 
  end 

  def logged_in? 
    !!current_user 
  end 

  def logout 
    current_user.reset_session_token!
    session[:session_token] = nil 
  end 

end
