document.write("<script language='javascript' src='./js/modules/config.js'></script>");

function orderUpdate(update_type, order_data){
    $.ajax({
        //请求方式
        type : "POST",
        //请求的媒体类型
        contentType: "application/json;charset=UTF-8",
        //请求地址
        url : baseUrl+"/api/order-update.php",
        //数据，json字符串
        data : {
            "type": update_type,
            "data": order_data
        },
        //请求成功
        success : function(result) {
            if (result.code == 0){
                layer.msg("更新失败!\n错误信息："+ result.msg);
            }
            console.log(result.msg);
        },
        //请求失败，包含具体的错误信息
        error : function(e){
            layer.msg("请求失败!请稍后再试！");
        }
    });
}

function addOrder(order_data){
    $.ajax({
        //请求方式
        type : "POST",
        //请求的媒体类型
        contentType: "application/json;charset=UTF-8",
        //请求地址
        url : baseUrl+"/api/add-order.php",
        //数据，json字符串
        data : {
            "data": order_data
        },
        //请求成功
        success : function(result) {
            if (result.code == 0){
                layer.msg("添加订单失败!\n错误信息："+ result.msg);
            }
            console.log(result.msg);
        },
        //请求失败，包含具体的错误信息
        error : function(e){
            layer.msg("请求失败!请稍后再试！");
        }
    });
}