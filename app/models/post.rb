class Post < ApplicationRecord
	mount_uploader :attachment, AttachmentUploader # Tells rails to use this uploader for this model.
	validates :fname, :lname, :username, :user_id, :note_title, :note_text, presence: { message: "All Fields Are Not Filled!" }
	
end
