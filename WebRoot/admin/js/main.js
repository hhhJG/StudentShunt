$(document).ready(function() {
        var message = 0;
        student_editor = new $.fn.dataTable.Editor( {
          domTable: "#dataTables-student-example",
          fields: [ {
                label: "姓名",
                name: "name"
            }, {
                label: "性别",
                name: "sex"
            }, {
                label: "学号",
                name: "number"
            }, {
                label: "证件类型",
                name: "cardType"
            }, {
                label: "证件号码",
                name: "cardNumber"
            },{
                label: "学历",
                name: "educational"
            }, {
                label: "学制",
                name: "time"
            }, {
                label: "入学年份",
                name: "startYear"
            }, {
                label: "年级",
                name: "grade"
            }, {
                label: "院系",
                name: "collage"
            }, {
                label: "专业",
                name: "major"
            }, {
                label: "班级",
                name: "classId"
            }],
            ajax: {
                create: {
                    type: 'POST',
                    url:  'addStu.action'
                },
                edit: {
                    type: 'POST',
                    url:  'modifyStu.action'
                },
                remove: {
                    type: 'POST',
                    url:  'delStu.action'
                }
            },
            idSrc:"number"
        });
        $('#dataTables-student-example').dataTable({
            "dom": 'T<"clear">lfrtip',
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
              "processing":true,
              "bStateSave":true,
              "serverSide": true,
              "bPaginate": true,  
              "ajax": "searStus.action",
              "columns": [
                { "data": "name" },
                { "data": "sex" },
                { "data": "number" },
                { "data": "cardType" },
                { "data": "cardNumber" },
                { "data": "educational" },
                { "data": "time" },
                { "data": "startYear" },
                { "data": "grade" },
                { "data": "collage" },
                { "data": "major" },
                { "data": "classId" }
              ],
              "tableTools": {
                  sRowSelect: "os",
                  aButtons: [
                      { sExtends: "editor_create", editor: student_editor },
                      { sExtends: "editor_edit",   editor: student_editor },
                      { sExtends: "editor_remove", editor: student_editor }
                      ]
              }

        });
        
        register_editor = new $.fn.dataTable.Editor( {
          domTable: "#dataTables-register-example",
          fields: [ {
                label: "编号",
                name: "id"
            }, {
                label: "学号",
                name: "number"
            }, {
                label: "考试类型",
                name: "type"
            }, {
                label: "报名时间",
                name: "registerTime"
            }, {
                label: "报名顺序",
                name: "registerOrder"
            }],
            ajax: {
                create: {
                    type: 'POST',
                    url:  'addSign.action'
                },
                edit: {
                    type: 'POST',
                    url:  'modifySign.action'
                },
                remove: {
                    type: 'POST',
                    url:  'delSign.action'
                }
            },
            idSrc:"id"
        });
        $('#dataTables-register-example').dataTable({
            "dom": 'T<"clear">lfrtip',
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
              "processing":true,
              "bStateSave":true,
              "serverSide": true,
              "bPaginate": true,  
              "ajax": "pageSignup.action",
              "columns": [
                { "data": "id" },
                { "data": "number" },
                { "data": "type" },
                { "data": "registerTime" },
                { "data": "registerOrder" }
              ],
              "tableTools": {
                  sRowSelect: "os",
                  aButtons: [
                      { sExtends: "editor_create", editor: register_editor },
                      { sExtends: "editor_edit",   editor: register_editor },
                      { sExtends: "editor_remove", editor: register_editor }
                      ]
              }

        });

        $('#dataTables—score-example').dataTable({
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
              "processing":true,
              "bStateSave":true,
              "serverSide": true,
              "bPaginate": true,  
              "ajax": "searTran.action",
              "columns": [
                { "data": "number" },
                { "data": "type" },
                { "data": "score" }
              ],
        });
        $("#down_excel").click(function(){
            $.ajax(
                      {
                        url:"searSign.action",
                          dataType:"JSON",
                          type:"POST" ,
                          success:function(data)
                          {
                             if(data.state=="1"){
                                window.open(data.path);
                             }
                             else
                             {
                               alert("下载失败");
                             }
                          }
                      }
            );
        });
        
        $("#login_button").click(function(){
          var login_username=$("#login_userid").val();
          var login_password=$("#login_password").val();
          $.ajax(
                    {
                      url:"workerlogin.action",
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
                    	alert(data.state);
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
          var table = $('#dataTables-student-example').DataTable();
          table.draw();
          var table = $('#dataTables-register-example').DataTable();
          table.draw();
          var table = $('#dataTables—score-example').DataTable();
          table.draw();
        }
        var messageDelete = function(){
          message = 0;
          $("#adminName").html();
          var table = $('#dataTables-student-example').DataTable();
          table.clear();
          var table = $('#dataTables-register-manage').DataTable();
          table.clear();
          var table = $('#dataTables-score-manage').DataTable();
          table.clear();
        }
        var refresh = function(){
          $.ajax(
                    {
                      url:"refresh.action",
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
        $('#scfileupload').fileupload({
            url: "importInfor.action",
            dataType: 'json',
            maxFileSize: 50000000,
            done: function (e, data) {
                alert("finish");
                $.each(data.result.files, function (index, file) {
                    $('<p/>').text(file.name).appendTo('#scfiles');
                });
            },
            progressall: function (e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
                $('#scprogress .progress-bar').css(
                    'width',
                    progress + '%'
                );
            }
        }).prop('disabled', !$.support.fileInput)
            .parent().addClass($.support.fileInput ? undefined : 'disabled');
        $('#smfileupload').fileupload({
            url: "importInfor.action",
            dataType: 'json',
            maxFileSize: 50000000,
            done: function (e, data) {
                alert("finish");
                $.each(data.result.files, function (index, file) {
                    $('<p/>').text(file.name).appendTo('#smfiles');
                });
            },
            progressall: function (e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
                $('#smprogress .progress-bar').css(
                    'width',
                    progress + '%'
                );
            }
        }).prop('disabled', !$.support.fileInput)
            .parent().addClass($.support.fileInput ? undefined : 'disabled');
});
