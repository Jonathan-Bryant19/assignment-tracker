class UsersController < ApplicationController
  before_action :authorize
  skip_before_action :authorize, only: [:create, :show]

  def new
    @user = User.new
  end

  def create 
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end 

  def show
    if current_user
      render json: current_user, status: :ok
    else
      redirect_to '/login'
    end
  end

  private
  def user_params
    params.permit(:username, :email, :password, :password_confirmation)
  end

end
