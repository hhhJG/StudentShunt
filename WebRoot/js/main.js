$(function() {
  var message, examinfo, selectAutio;
  $('.collapse').collapse('show');
  $('[data-toggle="popover"]').popover();
  $("#login_button").click(function() {
    if (/msie/.test(navigator.userAgent.toLowerCase())) {
      binfo = "本系统暂不支持IE浏览器，请更换其他浏览器！";
      alert(binfo);
    } else {
      var login_username = $("#login_studentid").val();
      var login_password = $("#login_password").val();
      $("#login_password").attr("placeholder", "密 码");
      $("#login_studentid").attr("placeholder", "学 号");
      $("#login_studentid").removeClass("form-warning animated shake");
      $("#login_password").removeClass("form-warning animated shake");
      $('#login_button .button_pre_text').addClass('hidden');
      $('#login_button .button_pre_lodding').removeClass('hidden');
      $('#login_button').attr('disabled', 'disabled');
      if (checkoutLogin(login_username, login_password)) {
        $("#login_password").attr('disabled', 'disabled');
        $("#login_studentid").attr('disabled', 'disabled');
        $("#collapseExample").collapse("hide");
        setTimeout(function() {
          $.ajax({
            url: "login.action",
            dataType: "JSON",
            data: {
              login_username: login_username,
              login_password: login_password
            },
            type: "POST",
            success: function(data) {
              if (data.status == "1") {
                message = new Message(data.baseInfor);
                messageInit(message);

                $('#login_studentid').removeAttr('disabled');
                $('#login_password').removeAttr('disabled');
                $("#login_password").val("");
                changeActive();
                setTimeout(function() {
                  $('#login_button').removeAttr('disabled');
                  $("#login").addClass("hidden");
                  $("body").removeClass("login_bg");
                  $(".navbar").removeClass('hidden');
                  $(".content").removeClass('hidden');
                  $('#login_button .button_pre_text').removeClass('hidden');
                  $('#login_button .button_pre_lodding').addClass('hidden');
                  $("#collapseExample").collapse("show");

                }, 2400);
              } else {
                $("#login_wrong").addClass('animated flipInX');
                $("#login_wrong").removeClass('hidden');
                setTimeout(function() {
                  $('#login_button .button_pre_text').removeClass('hidden');
                  $('#login_button .button_pre_lodding').addClass('hidden');
                  $('#login_button').removeAttr('disabled');
                  $('#login_studentid').removeAttr('disabled');
                  $('#login_password').removeAttr('disabled');
                  $("#login_password").val("");
                  $("#login_wrong").addClass("hidden");
                  $("#login_wrong").removeClass("animated flipInX");
                  $("#collapseExample").collapse("show");
                }, 2400);
              }
            }
          });
        }, 1500);

      } else {
        $('#login_button .button_pre_text').removeClass('hidden');
        $('#login_button .button_pre_lodding').addClass('hidden');
        $('#login_button').removeAttr('disabled');
      }
    }

  });
  var checkoutLogin = function(login_username, login_password) {
    if (login_username == "" || login_password == "") {
      if (login_username == "") {
        $("#login_studentid").attr("placeholder", "账号不能为空");
        $("#login_studentid").focus();
        $("#login_studentid").addClass("form-warning animated shake");
      } else {
        $("#login_password").focus();
      }
      if (login_password == "") {
        $("#login_password").attr("placeholder", "密码不能为空");
        $("#login_password").addClass("form-warning animated shake");
      }
      return 0;
    } else if (login_password.length < 6) {
      $("#login_password").focus();
      $("#login_password").val('');
      $("#login_password").attr("placeholder", "密码位数不够");
      $("#login_password").addClass("form-warning animated shake");
      return 0;
    } else if (login_password.length > 15) {
      $("#login_password").focus();
      $("#login_password").val('');
      $("#login_password").attr("placeholder", "密码位数过长");
      $("#login_password").addClass("form-warning animated shake");
      return 0;
    } else if (login_username.length > 8) {
      $("#login_studentid").attr("placeholder", "账号位数过长");
      $("#login_studentid").focus();
      $("#login_studentid").val('');
      $("#login_studentid").addClass("form-warning animated shake");
      return 0;
    }
    return 1;
  }
  $(".login_focus").focus(function() {
    /* Act on the event */
    $(this).popover('show');
  });

  $(".login_focus").blur(function() {
    /* #login_passwordAct on the event */
    $(this).popover('hide');
  });
  $("#logout_button").click(function() {
    $.ajax({
      url: "loginout.action",
      dataType: "JSON",
      type: "POST",
      success: function(data) {
        if (data.state == "1") {
          messageDelete();
          $("#login").removeClass("hidden");
          $(".navbar").addClass('hidden');
          $(".content").addClass('hidden');
          $(".collapse").collapse("show");
        } else {
          alert("注销失败");
        }
      }
    });
  });

  $("#mes_ensure").click(function() {

    $('#mes_ensure').removeClass('animated infinite pulse');
    $("#mes_ensure .button_pre_text").addClass('hidden');
    $("#mes_ensure .button_pre_lodding").removeClass('hidden');
    $("#mes_ensure").attr('disabled', 'disabled');
    $.ajax({
      url: "confirminfor.action",
      dataType: "JSON",
      type: "POST",
      success: function(data) {
        if (data.state == "1") {
          $('#mes_ensure .button_pre_text').html("信息已确认");
          $('#mes_ensure .button_pre_text').removeClass('hidden');
          $('#mes_ensure .button_pre_lodding').addClass('hidden');
          $(".radioSelect").removeAttr("disabled");
          $("#telphone").removeAttr("disabled");
          $(".radioSelect").parent().removeClass('disabled');
          $("#exam-signup-btn").removeAttr('disabled');
          $(".content").moveTo(2);
        } else {
          alert("确认失败!");
          $('#mes_ensure').addClass('animated infinite pulse');
          $('#mes_ensure .button_pre_text').html("请重新确认");
          $('#mes_ensure .button_pre_text').removeClass('hidden');
          $('#mes_ensure .button_pre_lodding').addClass('hidden');
          $("#mes_ensure").removeAttr('disabled');
        }
      }
    });
  });
  $("#exam-signup-btn").click(function() {
    var exam_type1 = $("#sign_result1").html();
    var exam_type2 = $("#sign_result2").html();
    var exam_type3 = $("#sign_result3").html();
    var has_test = $("#sign_result4").html();
    if (has_test == "是")
    {
      var test_type = $("#sign_result5").html();
      var test_score = $("#test_score").val();
    } 
    else{
      var test_type = "无";
      var test_score = 0;
    }
    var tel = $("#telphone").val();
    var testResult = testSelect(exam_type1, exam_type2, exam_type3, tel);
    if (testResult == 0) {
      $("#modal_message").html("信息不完整，请补全。");
      $("#signin_result_table").addClass("hidden");
      $("#modal_message").removeClass("hidden");
      $("#exam-sign-up-ensure-btn").addClass('hidden');
    } else if (testResult == 1) {
      $("#modal_message").html("不同志愿不能相同，请重新选择。");
      $("#signin_result_table").addClass("hidden");
      $("#modal_message").removeClass("hidden");
      $("#exam-sign-up-ensure-btn").addClass('hidden');
    } else if (testResult == 2) {
      $("#modal_message").html("自动化和自动化强化班只能选一个，请重新选择。");
      $("#signin_result_table").addClass("hidden");
      $("#modal_message").removeClass("hidden");
      $("#exam-sign-up-ensure-btn").addClass('hidden');
    } else {
      var str = "";
      str = "<tr>" + "<td>" + exam_type1 + "</td>" + "<td>" + exam_type2 + "</td>" + "<td>" + exam_type3 + "</td>" + "<td>" + test_type + "</td>" + "<td>" + test_score + "</td>" + "<td>" + tel + "</td>" + "</tr>";
      $('#signin_result_table').find("tbody").html(str);
      $("#signin_result_table").removeClass("hidden");
      $("#modal_message").addClass("hidden");
      $("#exam-sign-up-ensure-btn").removeClass('hidden');
      $('#myModal').modal('show');
    }

  });
  var testSelect = function(first, second, third, tel) {
    if (first != "" && second != "" && third != "" && tel != "") {
      if (message.profession == "自动化类") {
        if (first != second && second != third && first != third) {
          if ((first == "自动化" || second == "自动化" || third == "自动化") && (first == "自动化实验班" || second == "自动化实验班" || third == "自动化实验班")) {
            return 2;
          } else {
            return 3;
          }
        } else {
          return 1;
        }
      } else if (message.profession == "电子信息类") {
        if (first != second && second != third && first != third) {
          return 3;
        } else {
          return 1;
        }
      }
    }
    else {
      return 0;
    }
    return 3;
  }

  $("input:checkbox").click(function(event) {
    $(this).parent().parent().addClass('hidden');
    var result1 = $(this).parent().parent().parent().find('.sign_result');
    result1.find('.selectValue').html($(this).val());
    result1.removeClass('hidden');
    // var result2 = $(this).parent().parent().parent().find('.test_result');
    // result2.find('.selectValue').html($(this).val());
    result1.find('.typeValue').attr('placeholder', "在此输入"+ $(this).val() + '成绩');
    // result2.removeClass('hidden');

    for (var i = 0; i < $("input:checkbox").size(); i++) {
      if ($("input:checkbox").eq(i).val() == $(this).val()) {
        $("input:checkbox").eq(i).parent().addClass('disabled');
        $("input:checkbox").eq(i).attr("disabled", "disabled");
      }
    }
    if($(this).val() == "是")
    {
      $(".test_select_panel").removeClass("hidden");
    }
    else if($(this).val() == "否")
    {
      $(".test_select_panel").addClass("hidden");
    }
    else if($(this).val() == "自动化")
    {
      $('#selectModal').modal('show');
      selectAutio = $(this);
    }
  });
  $("#selectAutioType").click(function(event){
    var result1 = selectAutio.parent().parent().parent().find('.sign_result');
    result1.find('.selectValue').html($("input[name='optionsRadios']:checked").val());
    $('#selectModal').modal('hide');
  });

  $(".sign_result_del").click(function(event) {
    $(this).parent().parent().addClass('hidden');
    var lastSelect = $(this).parent().find(".selectValue").html();
    if (lastSelect == "自动化实验班")
    {
        lastSelect = "自动化";
    }
    else if(lastSelect == "是")
    {
      
    }
    for (var i = 0; i < $("input:checkbox").size(); i++) {
      if ($("input:checkbox").eq(i).val() == lastSelect) {
        $("input:checkbox").eq(i).attr("checked", false);
        $("input:checkbox").eq(i).parent().removeClass('disabled');
        $("input:checkbox").eq(i).removeAttr("disabled");
      }
    }
    $(this).parent().parent().parent().find('.sign_select').removeClass("hidden");
  });

  $("#exam-sign-up-ensure-btn").click(function() {
    $('#myModal').modal('hide');
    var first = $("#sign_result1").html();
    var second = $("#sign_result2").html();
    var third = $("#sign_result3").html();
    var has_test = $("#sign_result4").html();
    if (has_test == "是")
    {
      var test_type = $("#sign_result5").html();
      var test_score = $("#test_score").val();
    } 
    else{
      var test_type = "无";
      var test_score = 0;
    }
    var tel = $("#telphone").val();
    $("#exam-signup-btn .button_pre_text").addClass('hidden');
    $("#exam-signup-btn .button_pre_lodding").removeClass('hidden');
    $("#exam-signup-btn").attr('disabled', 'disabled');
    $(".radioSelect").attr("disabled","disabled");
    $("#telphone").attr("disabled","disabled");
    $(".radioSelect").parent().addClass('disabled');
    $.ajax({
      url: "shunt.action",
      dataType: "JSON",
      data: {
        first: first,
        second: second,
        third: third,
        telphone: tel,
        language: test_type,
        score: test_score
      },
      type: "POST",
      success: function(data) {
        if (data.status == "1") {
          $('#exam-signup-btn .button_pre_text').removeClass('hidden');
          $('#exam-signup-btn .button_pre_lodding').addClass('hidden');
          $("#exam-signup-btn").removeAttr('disabled');
          var examstr = "";
          examstr = examstr + "<tr>" + "<td>" + first + "</td>" + "<td>" + second + "</td>" + "<td>" + third + "</td>" + "<td>" + test_type + "</td>" + "<td>" + test_score + "</td>" + "<td>" + tel + "</td>" + "</tr>"
          $("#signin_table tbody").html(examstr);
          $("#signin_table").removeClass("hidden");
          $("#signin_form").addClass("hidden");
          $(".select_change").removeClass("hidden");
        } else {
          alert("申报失败");
          $('#exam-signup-btn .button_pre_text').removeClass('hidden');
          $('#exam-signup-btn .button_pre_lodding').addClass('hidden');
          $("#exam-signup-btn").removeAttr('disabled');
          $(".radioSelect").removeAttr("disabled");
          $("#telphone").removeAttr("disabled");
          $(".radioSelect").parent().removeClass('disabled');
          $("#signin_table").addClass("hidden");
          $("#signin_form").removeClass("hidden");
          $(".select_change").addClass("hidden");
        }
      }
    });
  });
  $(".content").onepage_scroll({
    sectionContainer: "section",
    responsiveFallback: 600,
    pagination: false,
    loop: false,
    direction: 'horizontal',
    beforeMove: function(index) {
      switch (index) {
        case 1:
          $("#nav li").removeClass("active");
          $("#go-person-message").addClass("active");
          break;
        case 2:
          $("#nav li").removeClass("active");
          $("#go-exam-signup").addClass("active");
          break;
        case 3:
          $("#nav li").removeClass("active");
          $("#go-password-change").addClass("active");
          break;
      }
    }
  });
  $("#go-person-message a").click(function() {
    $(".content").moveTo(1);
  });
  $("#go-exam-signup a").click(function() {
    $(".content").moveTo(2);
  });
  $("#go-password-change a").click(function() {
    $(".content").moveTo(3);
  });
  var changeActive = function() {
    $(".content>section").each(function(index, val) {
      /* iterate through array or object */
      if ($(val).hasClass('active')) {
        var tempId = $(val).find(">div").attr('id');
        var tempId2 = "go-" + tempId;
        $("#nav li").removeClass("active");
        $('#' + tempId2).addClass('active');
      }
    });
  }
  var messageInit = function(tempmessage) {
    $(".sign_result").addClass("hidden");
    $(".sign_select").removeClass("hidden");
    $("#telphone").val("");
    $("input:checkbox").attr("checked", false);
    $("#username").html(tempmessage.pname);
    $("#studentId").html(tempmessage.pnumber);
    $("#profession").html(tempmessage.profession);
    $("#gpa").html(tempmessage.gpa);
    $("#rank").html(tempmessage.rank);
    $("#username_result").html(tempmessage.pname);
    $("#userid_result").html(tempmessage.pnumber);
    if (tempmessage.profession == "自动化类") {
      examinfoInit(1);
    } else if (tempmessage.profession == "电子信息类") {
      examinfoInit(0);
    }
    if (tempmessage.hasensure == 1) {
      $('#mes_ensure').removeClass('animated infinite pulse');
      $("#mes_ensure").find('.button_pre_text').html("信息已确认");
      $("#mes_ensure").attr('disabled', 'disabled');
      $("#exam-signup-btn").removeAttr('disabled');
      $(".radioSelect").removeAttr("disabled");
      $("#telphone").removeAttr("disabled");
      $(".radioSelect").parent().removeClass('disabled');
    } else {
      $('#mes_ensure').addClass('animated infinite pulse');
      $("#mes_ensure").find('.button_pre_text').html("确认");
      $("#mes_ensure").removeAttr('disabled');
      $(".radioSelect").attr("disabled","disabled");
      $("#telphone").attr("disabled","disabled");
      $(".radioSelect").parent().addClass('disabled');
    }
    if (tempmessage.hassignin == "1") {
      var examstr = "";
      examstr = examstr + "<tr>" + "<td>" + tempmessage.first + "</td>" + "<td>" + tempmessage.second + "</td>" + "<td>" + tempmessage.third + "</td>" + "<td>" + tempmessage.language + "</td>" + "<td>" + tempmessage.score + "</td>"  + "<td>" + tempmessage.phoneNum + "</td>" + "</tr>"
      $("#signin_table tbody").html(examstr);
      $("#signin_table").removeClass("hidden");
      $("#signin_form").addClass("hidden");
      $(".select_change").removeClass("hidden");
      
    } else {
      $("#signin_table").addClass("hidden");
      $("#signin_form").removeClass("hidden");
      $(".select_change").addClass("hidden");
    }
    if(tempmessage.apply == 0)
    {
      $("#select_change").removeAttr("disabled");
      $("#select_change").find(".button_pre_text").html("申请修改");
    }
    else if(tempmessage.apply == 1)
    {
      $("#select_change").attr("disabled","disabled");
      $("#select_change").find(".button_pre_text").html("申请已提交");
    }
    else if(tempmessage.apply == 2)
    {
      $("#select_change").attr("disabled","disabled");
      $("#select_change").find(".button_pre_text").html("申请被拒绝");
    }
    else if(tempmessage.apply == 3)
    {
      $("#select_change").attr("disabled","disabled");
      $("#select_change").find(".button_pre_text").html("申请已使用");
    }
  }
  $("#select_change").click(function() {
    $("#selectChangeModal").modal('show');
  });
  $("#select_change_ensure").click(function() {
    $("#select_change .button_pre_text").addClass('hidden');
    $("#select_change .button_pre_lodding").removeClass('hidden');
    $("#select_change").attr('disabled', 'disabled');
    $("#selectChangeModal").modal('hide');
    $.ajax({
      url: "apply.action",
      dataType: "JSON",
      type: "POST",
      success: function(data) {
        if (data.status == 1) {
          $('#select_change .button_pre_text').html("申请已提交");
          $('#select_change .button_pre_text').removeClass('hidden');
          $('#select_change .button_pre_lodding').addClass('hidden');
          $("#select_change").attr('disabled', 'disabled');
        } else {
          alert("申请失败!");
          $('#select_change .button_pre_text').html("请重新申请");
          $('#select_change .button_pre_text').removeClass('hidden');
          $('#select_change .button_pre_lodding').addClass('hidden');
          $("#select_change").removeAttr('disabled');
        }
      }
    });
  });

  var messageDelete = function() {
      $("#username").html("");
      $("#username_result").html("");
      $("#userid_result").html("");
      $("#studentId").html("");
      $("#profession").html("");
      $("#mes_ensure").find('.button_pre_text').html("确认");
      $("#mes_ensure").removeAttr('disabled');
      $("#mes_ensure").removeClass('animated infinite pulse');
      $("#exam-signup-btn").attr('disabled', 'disabled');
      $("#signin_table tbody").html("");
      $("#signin_result_table tbody").html("");
      $("body").addClass("login_bg");
    }
  var examinfoInit = function(tempmessage) {
    if (tempmessage == 1) {
      $(".radioSelect1").val("自动化");
      $(".radioSelect2").val("测控技术与仪器");
      $(".radioSelect3").val("电气工程及其自动化");
      $(".radioSelect1").parent().find("span").html("自动化");
      $(".radioSelect2").parent().find("span").html("测控技术与仪器");
      $(".radioSelect3").parent().find("span").html("电气工程及其自动化");
    } else if (tempmessage == 0) {
      $(".radioSelect1").val("电子科学与技术");
      $(".radioSelect2").val("电子信息工程");
      $(".radioSelect3").val("通信工程");
      $(".radioSelect1").parent().find("span").html("电子科学与技术");
      $(".radioSelect2").parent().find("span").html("电子信息工程");
      $(".radioSelect3").parent().find("span").html("通信工程");
    }
  }
  var refresh = function() {
    if (/msie/.test(navigator.userAgent.toLowerCase())) {
      binfo = "本系统暂不支持IE浏览器，请更换其他浏览器！";
      alert(binfo);
    }

    $.ajax({
      url: "refresh.action",
      dataType: "JSON",
      type: "POST",
      success: function(data) {
        if (data.status == "1") {
          message = new Message(data.baseInfor);
          messageInit(message);
          $("body").removeClass("login_bg");
          $("#login").addClass("hidden");
          $(".content").removeClass('hidden');
          $(".navbar").removeClass('hidden');
        } else {
          messageDelete();
          $("#login").removeClass("hidden");
          $(".content").addClass("hidden");
          $(".navbar").addClass('hidden');
        }
      }
    });
  }
  var fortest = function()
  {
    $(".radioSelect").removeAttr('disabled');
    $(".radioSelect").parent().removeClass('disabled');
    $("#telphone").removeAttr('disabled');
  }
  refresh();
  changeActive();
  // fortest();
});