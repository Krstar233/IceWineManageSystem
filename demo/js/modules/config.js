document.write("<script language='javascript' src='./js/modules/jQuery.js'></script>");

var baseUrl = "http://localhost/IceWineManageSystem/demo";

function deleteDataById(type, id){

    var jsonData = {"type": type,"id": id};
    var json = JSON.stringify(jsonData);

    $.ajax({
        //请求方式
        type : "POST",
        //请求的媒体类型
        contentType: "application/json;charset=UTF-8",
        //请求地址
        url : baseUrl+"/api/delete_data.php",
        //数据，json字符串
        data : json,
        //请求成功
        success : function(result) {
            layer.msg(result.msg);
        },
        //请求失败，包含具体的错误信息
        error : function(e){
            layer.msg("请求失败!请稍后再试！");
        }
    });
}