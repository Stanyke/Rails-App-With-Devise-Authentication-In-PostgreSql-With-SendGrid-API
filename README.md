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

7. Now we have to create our index.html.erb file in app/views/pages/ that should be our homepage after registeration or login and would be protected before login or registeration.

8. Go to config/routes.rb from the root directory and place in *root to: 'pages#index'* and this is to notify the rails app that the index.html.erb is now our official homepage.

9. 