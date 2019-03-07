class Api::PostLikesController < ApplicationController

before_action :require_login 

def create 
  # debugger 
  # @post = Post.find_by(params[:post_id])
  # @post_like = PostLike.new 
  @post_like = current_user.likes.new(post_id: params[:post_like][:post_id])
  # @post_like.liker_id = params[:post_like][:user_id]
  # @post_like.post_id = params[:post_like][:post_id]
  # debugger 
  if @post_like.save!
    render "api/post_likes/show"
  else 
    render json: @post_like.errors.full_messages, status: 422 
  end 
end 

def destroy 
  @post_like = PostLike.find(params[:id])
  @post_like.destroy 
end 

end