class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false 
      t.string :email, null: false 
      t.string :session_token, null: false 
      t.string :password_digest, null: false 
      t.string :website, null: false 
      t.string :bio, :limit => 150
      t.string :display_name, :limit => 30
      t.string :gender 
      t.string :phone_number, :limit => 15

      t.timestamps 
    end

    add_index :users, :username, unique: true 
    add_index :users, :email, unique: true 
    add_index :users, :session_token, unique: true 
  end
end
