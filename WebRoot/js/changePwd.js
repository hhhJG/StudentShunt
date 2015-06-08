$(function(){
  $("#change_password_button").click(function(){
  		var old_password=$("#old_password").val();
  		var new_password=$("#new_password").val();
  		var repeat_new_password=$("#repeat_new_password").val();
      $("#old_password").attr("placeholder","密 码");
      $("#new_password").attr("placeholder","新 密 码");
      $("#repeat_new_password").attr("placeholder","重 复 新 密 码");
      $("#old_password").removeClass("form-warning animated shake");
      $("#new_password").removeClass("form-warning animated shake");
      $("#repeat_new_password").removeClass("form-warning animated shake");
  		if(checkoutLogin(old_password, new_password , repeat_new_password))
      {
        $("#change_password_button .button_pre_text").addClass('hidden');
        $("#change_password_button .button_pre_lodding").removeClass('hidden');
        $("#change_password_button").attr('disabled', 'disabled');
          $(".form-signin >input").each(function(index, val) {
             $(val).attr('disabled', 'disabled');
          });
        $.ajax(
                  {
                      url:"ModifyPassAction.action",
                      dataType:"JSON",
                      data:{old_password:old_password,
                           new_password:new_password,
                           repeat_new_password:repeat_new_password
                       },
                      type:"POST" ,
                      success:function(data)
                      {
                	     if(data.state=="3"){ 
                      	   $("#change_wrong0").removeClass('hidden');
                      	   setTimeout(function(){
                               $('#change_wrong0').addClass("hidden");
                             },3000);
                         }
                         if(data.state=="2"){ 
                        	 $("#change_success").removeClass('hidden');
                        	 setTimeout(function(){
                               $('#change_success').addClass("hidden");
                             },3000);
                         }                     
                         else if(data.state=="1")
                         {
                          $("#change_wrong1").removeClass('hidden');
                            setTimeout(function(){
                               $('#change_wrong1').addClass("hidden");
                             },3000);
                         }
                         else if(data.state=="0")
                         {
                        	$("#change_wrong0").removeClass('hidden');
                            setTimeout(function(){
                               $('#change_wrong0').addClass("hidden");
                             },3000);
                         }
                         $("#old_password").val("");
                         $("#new_password").val("");
                         $("#repeat_new_password").val("");
                         $("#change_password_button").removeAttr("disabled"); 
                         $(".form_change_password >input").each(function(index, val) {
                           $(val).removeAttr("disabled");
                         });
                         $("#change_password_button .button_pre_text").removeClass('hidden');
                         $("#change_password_button .button_pre_lodding").addClass('hidden');                     
                      }
                  }
        );
      }
      
  	});
  var checkoutLogin = function(old_password, new_password , repeat_new_password)
  {
    if(old_password == "" || new_password == "" || repeat_new_password == "" )
    {
      if(old_password == "")
      {
        $("#old_password").attr("placeholder","不能为空");
        $("#old_password").focus();
        $("#old_password").addClass("form-warning animated shake");
      }
      else if(new_password == "")
      {
        $("#new_password").focus();
      }
      else
      {
        $("#repeat_new_password").focus();
      }

      if(new_password == "")
      {
        $("#new_password").attr("placeholder","不能为空");
        $("#new_password").addClass("form-warning animated shake");
      }
      if (repeat_new_password == "") 
      {
        $("#repeat_new_password").attr("placeholder","不能为空");
        $("#repeat_new_password").addClass("form-warning animated shake");
      }
      return 0;
    }
    else if(old_password.length < 6 || new_password.length < 6 || repeat_new_password.length < 6 || 
    		old_password.length > 15 || new_password.length > 15 || repeat_new_password.length > 15)
    {
      if(old_password.length < 6 || old_password.length > 15)
      {
        $("#old_password").focus();
        $("#old_password").val('');
        if(old_password.length < 6)
        {
        	$("#old_password").attr("placeholder","位数不够");
        }
        else
        {
        	$("#old_password").attr("placeholder","位数过长");
        }
        $("#old_password").addClass("form-warning animated shake");
      }
      else if(new_password.length < 6 || new_password.length > 15)
      {
        $("#new_password").focus();
      }
      else
      {
        $("#repeat_new_password").focus();
      }
      
      if(new_password.length < 6)
      {
        $("#new_password").val('');
        $("#new_password").attr("placeholder","位数不够");
        $("#new_password").addClass("form-warning animated shake");
      }
      if(new_password.length > 15)
      {
        $("#new_password").val('');
        $("#new_password").attr("placeholder","位数过长");
        $("#new_password").addClass("form-warning animated shake");
      }
      if(repeat_new_password.length < 6)
      {
        $("#repeat_new_password").val('');
        $("#repeat_new_password").attr("placeholder","位数不够");
        $("#repeat_new_password").addClass("form-warning animated shake");
      }
      if(repeat_new_password.length > 15)
      {
        $("#repeat_new_password").val('');
        $("#repeat_new_password").attr("placeholder","位数过长");
        $("#repeat_new_password").addClass("form-warning animated shake");
      }
      return 0;
    }
    else if(new_password != repeat_new_password)
    {
      $("#repeat_new_password").focus();
      $("#repeat_new_password").val('');
      $("#repeat_new_password").attr("placeholder","新密码输入不一致");
      $("#repeat_new_password").addClass("form-warning animated shake");
      return 0;
    }
    return 1;
  }
  $(".new_password").focus(function() {
    /* Act on the event */
    $(this).popover('show');
  });
  
  $(".new_password").blur(function() {
    /* #login_passwordAct on the event */
    $(this).popover('hide');
  });
});