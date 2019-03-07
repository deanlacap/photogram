class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: ["invalid sign up credentials; email/username/password required"], status: 422
    end
  end

  def update 
    @user = User.find(params[:id])

    if @user.update_attributes(user_params) 
      render "api/users/show"
    end 
  end 

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :bio, :display_name, :gender, :phone_number, :location, :website)
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

