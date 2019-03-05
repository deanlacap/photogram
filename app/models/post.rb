class Post < ApplicationRecord 

  validates :user_id, presence: true

  validate :ensure_photo

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User 

  has_one_attached :photo
  
  def ensure_photo
    unless self.photo.attached? 
      errors[:photo] << "must be attached"
    end 
  end 

  # look up dependencies to be able to delete all associated comments and likes

end 