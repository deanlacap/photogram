class Post < ApplicationRecord 

  validates :user_id, presence: true

  validate :ensure_photo

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User 

  has_many :likes,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :PostLike 

  has_one_attached :photo
  
  def ensure_photo
    unless self.photo.attached? 
      errors[:photo] << "please add an image to your post"
    end 
  end 

  # look up dependencies to be able to delete all associated comments and likes

end 