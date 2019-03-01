class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :user_id, null: false
      t.text :caption, :limit => 2200

      t.timestamps 
    end

    add_index :posts, :user_id;
  end
end
