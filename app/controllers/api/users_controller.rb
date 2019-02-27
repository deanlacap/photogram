class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end


# class UsersController < ApplicationController

#   def new 
#     @user = User.new 
#   end 

#   def create 
#     @user = User.new(user_params)

#     if @user.save 
#       login(@user)
#     else 
#       # flash[:errors] = @user.errors.full_messages 
#       # render :new 
#     end 
#   end 

#   private 

#   def user_params
#     params.require(:user).permit(:username, :password)
#   end

# end

