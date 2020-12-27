document.write("<script language='javascript' src='./js/modules/jQuery.js'></script>");

var baseUrl = "http://localhost/IceWineManageSystem/demo";

function deleteDataById(type, id){
    $.ajax({
        //请求方式
        type : "POST",
        //请求的媒体类型
        contentType: "application/json;charset=UTF-8",
        //请求地址
        url : baseUrl+"/api/delete_data.php",
        //数据，json字符串
        data : {
            "type": type,
            "id": id
        },
        //请求成功
        success : function(result) {
            if (result.code == 0){
                layer.msg("数据删除失败!\n错误信息："+result.msg);
            }
            console.log(result.msg);
        },
        //请求失败，包含具体的错误信息
        error : function(e){
            layer.msg("请求失败!请稍后再试！");
        }
    });
}