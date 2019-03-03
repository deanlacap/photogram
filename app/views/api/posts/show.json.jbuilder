json.post do 
  json.set! @post.id do 
    json.extract! @post, :id, :caption, :user_id
    if @post.photo.attached?
      json.photoUrl url_for(@post.photo) 
    end 
  end 
end 