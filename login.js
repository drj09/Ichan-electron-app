const { ipcRenderer } = require('electron')

$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  })
;

$('.tabular.menu .item').tab();





function login(){
  let user = new Object();
  user.email = $('.login_email').val();
  user.password = $('.login_password').val();
  if(user.email==''){
    console.log('empty USername')
    $(".error_field").html('<div class="ui red message">Empty email field</div>');
  }
  else if(user.password==''){
    console.log('empty password')
    $(".error_field").html('<div class="ui red message">Empty password field</div>');
  }
  
  else{
    $(".error_field").html('<div class="ui icon message"><i class="notched circle loading icon"></i><div class="content"><div class="header">Just one second</div><p>Were fetching that content for you.</p></div></div>');
    console.log(user.email,user.password)
    z=ipcRenderer.sendSync('user_login', user)
    if(z==151){
      $(".error_field").html('<div class="ui red message">Invalid user id password Combination</div>');
    }
    else{
      $(".error_field").html('<div class="ui red message">INTERNAL ERROR OCCURRED</div>');
    }
  }
  
}



function register(){
  let user = new Object();
  user.name = $('.register_username').val();
  user.email = $('.register_email').val();
  user.password = $('.register_password').val();
  if(user.name==''){
    console.log('empty username')
    $(".error_field").html('<div class="ui red message">Empty username field</div>');
  }
  else if(user.email==''){
    console.log('empty email')
    $(".error_field").html('<div class="ui red message">Empty email field</div>');
  }
  else if(user.password==''){
    console.log('empty password')
    $(".error_field").html('<div class="ui red message">Empty password field</div>');
  }
  else{
    $(".error_field").html('<div class="ui icon message"><i class="notched circle loading icon"></i><div class="content"><div class="header">Just one second</div><p>Were fetching that content for you.</p></div></div>');
    console.log(user.name,user.email,user.password)
    z=ipcRenderer.sendSync('user_register', user)
    if(z==141){
      $(".error_field").html('<div class="ui red message">HERE WE GO</div>');
    }
    else{
      $(".error_field").html('<div class="ui red message">INTERNAL ERROR OCCURRED</div>');
    }
  }
  
}