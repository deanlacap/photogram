
  @posts.each do |post|
    json.set! post.id do 
      json.extract! post, :id, :user_id, :caption, :created_at 
      json.username post.user.username 
      if post.photo.attached?
        json.photoUrl url_for(post.photo)
      end 
    end 
  end 