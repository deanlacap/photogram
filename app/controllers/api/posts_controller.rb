class Api::PostsController < ApplicationController

# def index 
#   @posts = Post.all 
#   # render "api/posts/show"
# end 

def show 
  @post = Post.find(params[:id])

  render "api/posts/#{@post.id}"
end

def create 
  @post = Post.new(post_params)
  @post.user_id = current_user.id
  
  if @post.save 
    render "api/user/show"
  else 
    render json: @post.errors.full_messages, status: 422
  end 
end 

def 

private 

def post_params 
  params.require(:post).permit(:caption);
end 

end
