class CreatePostLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :post_likes do |t|
      t.integer :liker_id, null: false 
      t.integer :post_id, null: false

      t.timestamps 
    end

    add_index :post_likes, :liker_id 
    add_index :post_likes, :post_id 
    add_index :post_likes, [:liker_id, :post_id], unique: true
  end
end
