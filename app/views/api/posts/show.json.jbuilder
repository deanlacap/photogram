
    json.extract! @post, :id, :caption, :user_id
    json.username @post.user.username
    if @post.photo.attached?
      json.photoUrl url_for(@post.photo) 
    end 