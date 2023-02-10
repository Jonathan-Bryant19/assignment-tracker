class SessionsController < ApplicationController
  skip_before_action :authorize, only: [:create, :destroy]

  def new
  end

  def create
    @user = User.find_by_username(params[:session][:username])
    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      redirect_to '/'
    else
      redirect_to 'login'
    end 
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/login'
  end

end
