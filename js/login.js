/**
 * Created by Hibiscus_xuan on 2016/11/17.
 */

$(function () {
    var email = $("#email");
    // 注册鼠标失去焦点事件
    email.on("blur", function () {
        var rex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (rex.test(email.val())) {
            return true;
        } else {
            layer.msg("邮箱出错啦a", function () {
            });
            return false;
        }
    });
    // 点击按钮发送ajax,
    var btn = $("#btn");
    btn.on("click", function () {
        // 序列化获取参数
        //var params = $("form").serialize();
        var email = $('#email').val();
        var pwd = $('#pwd').val();
        var d = {"email":email,"pwd":pwd};
        var data = JSON.stringify(d);
        alert(data);
        console.log(data);
        $.ajax({
                //url:"http://103.20.249.126/api/investManage/login",
                type:"post",
                dataType:"json",
                data:data,
                success: function (data) {
                    if (data.success == true){
                        layer.msg("登录成功");
                    }
                },
                error: function(){
                    layer.msg("账号出错啦~~~~~~~~~~", function () {

                    })
                }
            })
    });

});