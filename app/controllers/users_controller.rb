class UsersController < ApplicationController
  
  def new
    @user = User.new
  end

  def create 
    puts("create action started")
    @user = User.new(user_params) 
    puts("user created")
    puts("user: ", @user)
    if @user.save 
      puts("user saved...attempting redirect to home")
      session[:user_id] = @user.id 
      redirect_to '/' 
    else 
      puts("did not save...")
      redirect_to '/signup' 
    end 
  end 

  def show
    render json: current_user, status: :ok
  end

  private
  def user_params
    params.permit(:username, :email, :password, :password_confirmation)
  end

end
