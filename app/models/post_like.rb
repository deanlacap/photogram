class PostLike < ApplicationRecord

  validates :liker_id, :post_id, presence: true
  validates :liker_id, uniqueness: {scope: :post_id}

  belongs_to :user,
    primary_key: :id,
    foreign_key: :liker_id,
    class_name: :User

  belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Post 

end 