class UsersController < ApplicationController
  skip_before_action :authorize, only: [:new, :create]

  def new
    @user = User.new
  end

  def create 
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end 

  def show
    puts('SHOW HIT!!!!!!!!')
    byebug
    if current_user
      render json: current_user, status: :ok
    else
      puts("")
    end
  end

  private
  def user_params
    params.permit(:username, :email, :password, :password_confirmation)
  end

end
