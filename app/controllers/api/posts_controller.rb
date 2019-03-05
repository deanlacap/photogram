class Api::PostsController < ApplicationController

before_action :require_login 

def index 
  # @user = current_user 
  # @posts = @user.posts
  # testing with all posts, not actualy feed with follow's posts 
  @posts = Post.all

  render "api/posts/user_index"
end 

def show 
  @post = Post.find(params[:id])

  render :show
end

def create 
  @post = Post.new(post_params)
  @post.user_id = current_user.id
  # @username = User.find_by(id: Post.user_id).username;
  
  if @post.save 
    render :index 
  else 
    render json: @post.errors.full_messages, status: 422
  end 
end 

def update 
  @post = Post.find(params[:id])

  if @post.update_attributes(post_params) 
    render "api/posts/show"
  else 
    render json: @post.errors.full_messages, status: 422
  end 
end

def destroy 
  @post = Post.find(params[:id])
  @post.destroy 
  # render :index 
end 

private 

def post_params 
  params.require(:post).permit(:caption, :user_id);
end 

end
