class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
	  t.string :fname
	  t.string :lname
	  t.string :username
      t.string :user_id
      t.string :post_title
      t.string :post_content
      t.string :attachment
      t.timestamps
    end
  end
end
