$(document).ready(function() {
        var message = 0;
        $('#dataTables-class-signin').dataTable({
            "oLanguage": {
                  "sProcessing": "正在加载中......",
                  "sLengthMenu": "每页显示 _MENU_ 条记录",
                  "sZeroRecords": "对不起，查询不到相关数据！",
                  "sEmptyTable": "表中无数据存在！",
                  "sInfo": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
                  "sInfoFiltered": "数据表中共为 _MAX_ 条记录",
                  "sSearch": "搜索",
                  "oPaginate": {
                      "sFirst": "首页",
                      "sPrevious": "上一页",
                      "sNext": "下一页",
                      "sLast": "末页"
                  }
              },
              "bLengthChange": false,
              "bProcessing":true,
              "bStateSave":true,
              "columns": [
                { "data": "name" },
                { "data": "testName" },
                { "data": "signTime" }
              ],

        });
        
       $("#login_button").click(function(){
          var login_username=$("#login_userid").val();
          var login_password=$("#login_password").val();
          $.ajax(
                    {
                      url:"monitorLogin.action",
                        dataType:"JSON",
                        data:{login_username:login_username,
                             login_password:login_password},
                        type:"POST" ,
                        success:function(data)
                        {
                           if(data.state=="1"){
                              message = new Message(data);
                              messageInit(message);
                             $("#wrapper").removeClass('hidden');
                             $("#login").addClass('hidden');
                           }
                           else
                           {
                             alert("登陆失败");
                           }
                        }
                    }
          );
        });

        $("#logout_button").click(function(){
          $.ajax(
                    {
                      url:"loginout.action",
                      dataType:"JSON",
                        type:"POST" ,
                        success:function(data)
                        {
                           if(data.state=="1"){
                             messageDelete();
                             $("#wrapper").addClass('hidden');
                             $("#login").removeClass('hidden');
                           }
                           else
                           {
                             alert("注销失败");
                           }
                        }
                    }
          );
        });
        var messageInit = function(tempmessage){
          $("#adminName").html(tempmessage.adminInfor.adminName);
          $("#adminClass").html(tempmessage.adminInfor.adminClass);
          var table = $('#dataTables-class-signin').DataTable();
          for (var temp in tempmessage.getClassMateSignData())
          {
              table.row.add(tempmessage.getClassMateSignData()[temp]).draw();
          }
        }
        var messageDelete = function(){
          message = 0;
          $("#adminName").html();
          $("#adminClass").html();
          var table = $('#dataTables-class-signin').DataTable();
          table.clear();
        }
        var refresh = function(){
          $.ajax(
                    {
                      url:"monitorRefresh.action",
                      dataType:"JSON",
                      type:"POST" ,
                      success:function(data)
                      {
                         if(data.state=="1"){
                              message = new Message(data);
                              messageInit(message);
                              $("#wrapper").removeClass('hidden');
                              $("#login").addClass('hidden');
                          }
                          else
                          {
                              messageDelete();
                              $("#wrapper").addClass('hidden');
                              $("#login").removeClass('hidden');
                          }
                      }
                    }
          );
        }
        refresh();
});
