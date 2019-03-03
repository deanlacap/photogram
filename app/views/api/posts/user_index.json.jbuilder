
  @posts.each do |post|
    json.set! post.id do 
      json.extract! post, :id, :user_id, :caption, :created_at 
      if post.photo.attached?
        json.photoUrl url_for(post.photo)
      end 
    end 
  end 