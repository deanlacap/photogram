class User < ApplicationRecord 

  before_validation :ensure_session_token 
  validates :username, :session_token, :password_digest, :email, presence: true
  validates :username, :session_token, uniqueness: true 
  validates :password, length: {minimum: 6}, allow_nil: true 

  attr_reader :password 

  has_many :posts,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Post

  has_many :likes,
    primary_key: :id,
    foreign_key: :liker_id,
    class_name: :PostLike 


  def password=(password)
    @password = password 

    self.password_digest = BCrypt::Password.create(password)
  end 

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    user && user.is_password?(password) ? user : nil 
  end 

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end 

  def ensure_session_token 
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end 

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end 

end 