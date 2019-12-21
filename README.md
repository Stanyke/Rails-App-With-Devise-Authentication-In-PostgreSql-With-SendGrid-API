# README

This is a ruby on rails web application built with Devise gem file that is used for Authorization and Authentication which would be verified using SendGrid API to The user's Email and PostgreSql database.



*Steps Taken To Make This App*

1. rails new railswithdevise --database=postgresql   (To create a ruby on rails app named "railswithdevise", with a postgresql database) *Before this command, you should already be in your 'C:\Sites' directory*

NB: There's no much difference between MySQl and PostgreSql

2. cd railswithdevise

3. rails s (then hit Enter key, to start your rails app which runs locally on http://localhost:3000)

4. After successfully opening your rails app, close it with *ctrl c* with a yes command (y)

5. Then generate a view layout with its controller called *pages* with 'rails g controller pages' command without the quotes

6. Go to pages_controller.rb located at app/controllers/pages_controller.rb and add *def index
   end*, this is to enable the rails app to recognize the index.html.erb which would be use as our homepage just after login.

7. Now we have to create our index.html.erb file in app/views/pages/ that should be our homepage after registration or login and would be protected before login or registration.

8. Go to config/routes.rb from the root directory and place in *root to: 'pages#index'* and this is to notify the rails app that the index.html.erb is now our official homepage.

9. Now lets make our website more responsive with bootstrap, go to *Gemfile* located in the root directory and added gem 'bootstrap-sass'
gem 'devise' and save it

10. now go to the command prompt and run 'bundle install' command, without the qoute to get new added gemfiles.

11. Go to app/assets/stylesheets/stylesheets/application.css file from root directory and remove *= require_tree .
 *= require_self, also add @import "bootstrap-sprockets"; @import "bootstrap"; @import 'bootstrap/theme'; and finally change the name from application.css to application.scss to enable the app to run a SASS or bootstrap file.

12. Now go back to Gemfile and add gem 'jquery-rails' to insall jquery for rails and run bundle install.

13. Go to app/assets/javascript/application.js and add //= require jquery
//= require bootstrap-sprockets to enable the jquery installed to work

14. Now got to app/views/layouts/application.html.erb and replace <%= yield %> with *<div class="container">
  <% flash.each do |key, value| %>
    <div class="alert alert-<%= key %>">
      <%= value %>
    </div>
  <% end %>
</div>

<%= yield :top_content %>

<div class="container">
    <h1><%= yield :header %></h1>
  <%= yield %>
</div>* this is a bootstrap alert that would run when making use of Devise gemfile

15. Go to app/views/layouts/application_helper.rb and insert *def header(text)
  content_for(:header) { text.to_s }
end* within the module ApplicationHelper and its ending

16. Now goto config/environments/development.rb and insert config.action_mailer.default_url_options = { host: 'localhost', port: 3000 } because it is required to properly generate links inside the e-mail views which would be used alongside the Devise.

17. Goto Command terminal and run 'rails generate devise:install' without the quote to generate neccessary settings that the Devise which was intialy installed, needed and can be located at config/initializers/devise.rb.

18. Now after successfully running previous command, run 'rails generate devise User' with the quote and this is what helps in creating (registering) and logining in of users. This command is going to create a user.rb model file and a migration that adds all the necessary fields. If the User model already exists, it will be updated.

19. In the routes.rb which is located at config/routes.rb has been modified and also created a file named in the app/models/ named 'user.rb'.

20. Now let's understand what we can see inside the app/models/user.rb

	This is the list of Devise modules that are active for this model.

	database_authenticatable – Users will be able to authenticate with a login and password that are stored in the database. (password is stored in a form of a digest).
	registerable – Users will be able to register, update, and destroy their profiles.
	recoverable – Provides mechanism to reset forgotten passwords.
	rememberable – Enables “remember me” functionality that involves cookies.
	trackable – Tracks sign in count, timestamps, and IP address.
	validatable – Validates e-mail and password (custom validators can be used).

	The below commands were disabled automatically but we need them to make sure users made a successful registration...

	confirmable – Users will have to confirm their e-mails after registration before being allowed to sign in.
	lockable – Users’ accounts will be locked out after a number of unsuccessful authentication attempts.

	So we would be enabling them to make use of it.

21. 