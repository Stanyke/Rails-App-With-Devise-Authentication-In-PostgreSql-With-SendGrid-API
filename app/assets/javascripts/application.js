// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

//= require jquery3
//= require bootstrap-sprockets

function viewPassword()
	{
		var passwordInput = document.getElementById('pwd1');
		var passStatus = document.getElementById('pass_status');
 
		if (passwordInput.type == 'password')
		{
			passwordInput.type='text';
			passStatus.className='glyphicon glyphicon-eye-close';
		}
			
		else
		{
			passwordInput.type='password';
			passStatus.className='glyphicon glyphicon-eye-open';
		}
	}
		
function RCB()
	{
		$("#title").val("");
		$("#article").val("");
		$("#attachment").val("");
	}
		
function relocate_home()
{
    location.href = "/posts";
}


$(function(){
  $(".limitxt3").each(function(i){
    len=$(this).text().length;
    if(len>50)
    {
      $(this).text($(this).text().substr(0,150)+'...');
    }
  });       
});

$(function(){
  $(".limitxt2").each(function(i){
    len=$(this).text().length;
    if(len>50)
    {
      $(this).text($(this).text().substr(0,70)+'...');
    }
  });       
});
