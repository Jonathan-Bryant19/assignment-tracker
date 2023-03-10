class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  before_action :authorize
 
  def current_user 
    @current_user ||= User.find(session[:user_id]) if session[:user_id] 
  end 

  # def authorize 
  #   return render json: {error: "You are not logged in"}, status: :unauthorized unless current_user
  # end

  # FIGURE OUT A WAY TO REDIRECT TO LOGIN UNLESS current_user. I'M NOT SURE HOW THE unless OPERATOR WORKS. 
  def authorize 
    if !current_user
      redirect_to '/login' 
    end
  end

  private

  def render_unprocessable_entity(invalid)
      render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def render_not_found(error)
      render json: {error: "#{error.model} Not Found"}, status: :not_found
  end

end
