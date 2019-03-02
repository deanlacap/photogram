class Api::PostsController < ApplicationController

def index 
  @posts = Post.all 
  # render "api/posts/show"
end 

def show 
  @post = Post.find(params[:id])

  if post
    render "api/user/show"
  else
    render json: ["please include a photo in your post"], status: 422
  end
end 

def create 
  @post = Post.new(post_params)
end 



private 

def post_params 
  params.require(:post).permit(:caption);
end 

end
