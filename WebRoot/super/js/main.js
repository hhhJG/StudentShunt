$(document).ready(function() {
        var message = 0;

        teacher_editor = new $.fn.dataTable.Editor( {
          domTable: "#dataTables-teacher-message",
          fields: [ {
                label: "职工号",
                name: "number"
            }, {
                label: "学院",
                name: "colname"
            }, {
                label: "姓名",
                name: "name"
            }, {
                label: "性别",
                name: "sex"
            }, {
                label: "身份证号",
                name: "cardid"
            }],
            ajax: {
                create: {
                    type: 'POST',
                    url:  'addWorker.action'
                },
                edit: {
                    type: 'POST',
                    url:  'modifyWorker.action'
                },
                remove: {
                    type: 'POST',
                    url:  'delWorker.action'
                }
            },
            idSrc:"number"
        });
        $('#dataTables-teacher-message').dataTable({
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
              "bProcessing":true,
              "bStateSave":true,
              "columns": [
                { "data": "number" },
                { "data": "colname" },
                { "data": "name" },
                { "data": "sex" },
                { "data": "cardid" }
              ],
              "tableTools": {
                  sRowSelect: "os",
                  aButtons: [
                      { sExtends: "editor_create", editor: teacher_editor },
                      { sExtends: "editor_edit",   editor: teacher_editor },
                      { sExtends: "editor_remove", editor: teacher_editor }
                      ]
              }

        });

        profession_editor = new $.fn.dataTable.Editor( {
          domTable: "#dataTables-profession-manage",
          fields: [ {
                label: "编号",
                name: "id"
            }, {
                label: "学院",
                name: "colname"
            }, {
                label: "专业编号",
                name: "sort"
            }, {
                label: "专业简称",
                name: "tempname"
            }, {
                label: "专业全称",
                name: "longname"
            }, {
                label: "报名开始时间",
                name: "firsttime"
            }, {
                label: "报名截止时间",
                name: "secondtime"
            }],
            ajax: {
                create: {
                    type: 'POST',
                    url:  'addColPro.action'
                },
                edit: {
                    type: 'POST',
                    url:  'modifyColPro.action'
                },
                remove: {
                    type: 'POST',
                    url:  'delColPro.action'
                }
            },
            idSrc:"id"
        });
        $('#dataTables-profession-manage').dataTable({
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
              "bProcessing":true,
              "bStateSave":true,
              "columns": [
                { "data": "id" },
                { "data": "colname" },
                { "data": "sort" },
                { "data": "tempname" },
                { "data": "longname" },
                { "data": "firsttime" },
                { "data": "secondtime" }
              ],
              "tableTools": {
                  sRowSelect: "os",
                  aButtons: [
                      { sExtends: "editor_create", editor: profession_editor },
                      { sExtends: "editor_edit",   editor: profession_editor },
                      { sExtends: "editor_remove", editor: profession_editor }
                      ]
              }             
        });

        exam_editor = new $.fn.dataTable.Editor( {
          domTable: "#dataTables-exam-manage",
          fields: [ {
                label: "编号",
                name: "id"
            }, {
                label: "考试类型",
                name: "name"
            }, {
                label: "考试级别",
                name: "level"
            }, {
                label: "费用",
                name: "cost"
            }],
            ajax: {
                create: {
                    type: 'POST',
                    url:  'addTest.action'
                },
                edit: {
                    type: 'POST',
                    url:  'modifyTest.action'
                },
                remove: {
                    type: 'POST',
                    url:  'delTest.action'
                }
            },
            idSrc:"id"
        });
        $('#dataTables-exam-manage').dataTable({
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
              "bProcessing":true,
              "bStateSave":true,
              "columns": [
                { "data": "id" },
                { "data": "name" },
                { "data": "level" },
                { "data": "cost" }
              ],
              "tableTools": {
                  sRowSelect: "os",
                  aButtons: [
                      { sExtends: "editor_create", editor: exam_editor },
                      { sExtends: "editor_edit",   editor: exam_editor },
                      { sExtends: "editor_remove", editor: exam_editor }
                      ]
              }
        });

        $("#login_button").click(function(){
          var login_username=$("#login_userid").val();
          var login_password=$("#login_password").val();
          $.ajax(
                    {
                      url:"superlogin.action",
                        dataType:"JSON",
                        data:{login_username:login_username,
                             login_password:login_password},
                        type:"POST" ,
                        success:function(data)
                        {
                           if(data.state=="1"){
                              message = new Message(data);
                              messageInit(message);
                              $("#login_userid").html();
                              $("#login_password").html();
                              $("#wrapper").removeClass('hidden');
                              $("#login").addClass('hidden');
                           }
                           else
                           {
                             alert("登陆失败");
                             //$("#wrapper").removeClass('hidden');
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
          $("#adminName").html("超级用户");
          var table = $('#dataTables-teacher-message').DataTable();
          for (var temp in tempmessage.getWorkersInforData())
          {
              table.row.add(tempmessage.getWorkersInforData()[temp]).draw();
          }
          var table = $('#dataTables-profession-manage').DataTable();
          for (var temp in tempmessage.getColproInforData())
          {
              table.row.add(tempmessage.getColproInforData()[temp]).draw();
          }
          var table = $('#dataTables-exam-manage').DataTable();
          for (var temp in tempmessage.geTestInforData())
          {
              table.row.add(tempmessage.geTestInforData()[temp]).draw();
          }
        }
        var messageDelete = function(){
          message = 0;
          $("#adminName").html();
          var table = $('#dataTables-teacher-message').DataTable();
          table.clear();
          var table = $('#dataTables-profession-manage').DataTable();
          table.clear();
          var table = $('#dataTables-exam-manage').DataTable();
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

        $('#fileupload').fileupload({
            url: "importInfor.action",
            dataType: 'json',
            maxFileSize: 50000000,
            done: function (e, data) {
                alert("finish");
                $.each(data.result.files, function (index, file) {
                    $('<p/>').text(file.name).appendTo('#files');
                });
            },
            progressall: function (e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
                $('#progress .progress-bar').css(
                    'width',
                    progress + '%'
                );
            }
        }).prop('disabled', !$.support.fileInput)
            .parent().addClass($.support.fileInput ? undefined : 'disabled');

});
