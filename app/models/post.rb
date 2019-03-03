class Post < ApplicationRecord 

  validates :user_id, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User 

  has_one_attached :photo

  # look up dependencies to be able to delete all associated comments and likes

end 