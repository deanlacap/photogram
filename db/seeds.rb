# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  # Users
  User.destroy_all
  user1 = User.create!(username: "slackHQ", email: "info@slack.com", password: "password")
  user2 = User.create!(username: "beachBum", email: "greg@appacademy.io", password: "password")
  user3 = User.create!(username: "chelsea", email: "chelsea@appacademy.io", password: "password")
  user4 = User.create!(username: "Subway", email: "crew@subway.com", password: "password")
  user5 = User.create!(username: "margaret", email: "margaret@appacademy.io", password: "password")
  user6 = User.create!(username: "sally", email: "sally@appacademy.io", password: "password")
  user7 = User.create!(username: "demo", email: "demo@appacademy.io", password: "password")
  user8 = User.create!(username: "SoulCycle", email: "info@soulcycle.com", password: "password")
  user9 = User.create!(username: "rupert", email: "rupert@appacademy.io", password: "password")

  # Photos
  Post.destroy_all
  # Photo Creation
    photo1 = Post.new(caption: "rsvp to our upcoming event at Slack HQ!!", user_id: user1.id)
    photo1.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/coding+ad.jpg"), filename: "coding+ad.jpg")
    photo1.save!

    photo2 = Post.new(caption: "decorated living room", user_id: user3.id)
    photo2.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/BSC-CW-2.jpeg"), filename: "BSC-CW-2.jpeg")
    photo2.save!

    photo3 = Post.new(caption: "breakfast set up", user_id: user5.id)
    photo3.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/DSCF7253.jpeg"), filename: "DSCF7253.jpeg")
    photo3.save!

    photo4 = Post.new(caption: "island life", user_id: user2.id)
    photo4.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/IMG_3879.JPG"), filename: "IMG_3879.JPG")
    photo4.save!

    photo5 = Post.new(caption: "bought a new plant", user_id: user3.id)
    photo5.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/XOXO1294.jpeg"), filename: "XOXO1294.jpeg")
    photo5.save!

    photo6 = Post.new(caption: "come visit us on Union Street!!", user_id: user8.id)
    photo6.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/XOXO2553.jpeg"), filename: "XOXO2553.jpeg")
    photo6.save!

    photo7 = Post.new(caption: "prepping vase for flowers", user_id: user6.id)
    photo7.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/XOXO3081.jpeg"), filename: "XOXO3081.jpeg")
    photo7.save!

    photo8 = Post.new(caption: "bought a new cabinet for the living room", user_id: user9.id)
    photo8.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/XOXO6194.jpeg"), filename: "XOXO6194.jpeg")
    photo8.save!

    photo9 = Post.new(caption: "cool door", user_id: user2.id)
    photo9.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/XOXO6226.jpeg"), filename: "XOXO6226.jpeg")
    photo9.save!

    photo10 = Post.new(caption: "cool steps", user_id: user2.id)
    photo10.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/XOXO6880.jpeg"), filename: "XOXO6880.jpeg")
    photo10.save!

    photo11 = Post.new(caption: "wheat field", user_id: user5.id)
    photo11.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/XOXO7086.jpeg"), filename: "XOXO7086.jpeg")
    photo11.save!

    photo12 = Post.new(caption: "cutting some fruits", user_id: user6.id)
    photo12.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/XOXO8865-2.jpeg"), filename: "XOXO8865-2.jpeg")
    photo12.save!

    photo13 = Post.new(caption: "cutting some fruits", user_id: user6.id)
    photo13.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/XOXO8865-2.jpeg"), filename: "XOXO8865-2.jpeg")
    photo13.save!

    photo14 = Post.new(caption: "coffee before code", user_id: user3.id)
    photo14.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/DSCF7308.jpeg"), filename: "DSCF7308.jpeg")
    photo14.save!

    photo15 = Post.new(caption: "a lot of stuff planned for today", user_id: user9.id)
    photo15.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/DSCF7327.jpeg"), filename: "DSCF7327.jpeg")
    photo15.save!

    photo16 = Post.new(caption: "more island life", user_id: user2.id)
    photo16.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/IMG_3156.jpeg"), filename: "IMG_3156.jpeg")
    photo16.save!

    photo17 = Post.new(caption: "i'm the first one in the office", user_id: user5.id)
    photo17.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/XOXO2610.jpeg"), filename: "XOXO2610.jpeg")
    photo17.save!

    photo18 = Post.new(caption: "bought some new crafts", user_id: user3.id)
    photo18.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/XOXO2934.jpeg"), filename: "XOXO2934.jpeg")
    photo18.save!

    photo24 = Post.new(caption: "branch at the beach", user_id: user2.id)
    photo24.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/XOXO9923.jpeg"), filename: "XOXO9923.jpeg")
    photo24.save!

    photo19 = Post.new(caption: "come visit us at broadway & battery!!", user_id: user4.id)
    photo19.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/subway+adv.jpg"), filename: "subway+adv.jpg")
    photo19.save!

    photo29 = Post.new(caption: "more instax photos", user_id: user5.id)
    photo29.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/XOXO5193.jpeg"), filename: "XOXO5193.jpeg")
    photo29.save!

    photo20 = Post.new(caption: "more decorating", user_id: user3.id)
    photo20.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/XOXO5761.jpeg"), filename: "XOXO5761.jpeg")
    photo20.save!

    photo21 = Post.new(caption: "this is a cup and a book", user_id: user6.id)
    photo21.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/XOXO5790.jpeg"), filename: "XOXO5790.jpeg")
    photo21.save!

    photo22 = Post.new(caption: "christmas wreath", user_id: user9.id)
    photo22.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/XOXO6190.jpeg"), filename: "XOXO6190.jpeg")
    photo22.save!

    photo23 = Post.new(caption: "tree stump at the beach", user_id: user2.id)
    photo23.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/XOXO9904.jpeg"), filename: "XOXO9904.jpeg")
    photo23.save!

    photo25 = Post.new(caption: "finally put decorations on the shelves", user_id: user3.id)
    photo25.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/XOXO4220.jpeg"), filename: "XOXO4220.jpeg")
    photo25.save!

    photo26 = Post.new(caption: "antique store finds", user_id: user2.id)
    photo26.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/XOXO4147.jpeg"), filename: "XOXO4147.jpeg")
    photo26.save!

    photo27 = Post.new(caption: "breakfast platter", user_id: user6.id)
    photo27.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/XOXO9813.jpeg"), filename: "XOXO9813.jpeg")
    photo27.save!

    photo28 = Post.new(caption: "instax photos", user_id: user5.id)
    photo28.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/photogram-fsp-seed/XOXO5131.jpeg"), filename: "XOXO5131.jpeg")
    photo28.save!

end
    
    