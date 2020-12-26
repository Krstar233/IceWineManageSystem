document.write("<script language='javascript' src='./js/modules/config.js'></script>");

function updateTable(type, word){
    layui.use('table', function(){
        var table = layui.table;
        //第一个实例
        table.render({
          elem: '#demo'
          ,cellMinWidth: 100
          ,url: baseUrl + "/api/order-query.php?type="+type+"&word="+word //数据接口
          ,page: true //开启分页
          ,cols: [[ //表头
            {field: 'ordernumber', title: '订单编号', sort: true}
            ,{field: 'orderdate', title: '订单日期', sort: true}
            ,{field: 'orderstatus', title: '订单状态'}
            ,{field: 'CusType', title: '客户类型', sort: true}
            ,{field: 'CusId', title: '客户编号', sort: true}
            ,{field: 'wineId', title: '冰酒编号'}
            ,{field: 'commodityinfo', title: '商品信息'}
            ,{field: 'deliveryjudge', title: '是否送货'}
            ,{field: 'orderamount', title: '订单金额', sort: true}
            ,{field: 'deliveryLocation', title: '送货地址', sort: true}
            ,{field: 'deliverytime', title: '送货时间'}
            ,{field: 'deliveryamount', title: '送货金额', sort: true}
            ,{fixed: 'right', title:'操作', toolbar: '#operation-bar', width:120}
          ]]
        });
    
        //监听行工具事件
        table.on('tool(test)', function(obj){
            var data = obj.data;
            //console.log(obj)
            if(obj.event === 'del'){
            layer.confirm('真的删除行么', function(index){
                // ***************删除行********************
                obj.del();
                //console.log('操作：删除行' + JSON.stringify(obj.data));
                deleteDataById("order", obj.data.ordernumber);
                layer.close(index);
                //******************************************
            });
            } else if(obj.event === 'edit'){
                //***************编辑************** */
                layer.prompt({
                    formType: 2
                    ,value: JSON.stringify(data,null,'\t')
                }, function(value, index){
                    // console.log('操作：更新行' + JSON.stringify(obj.data));
                    $.ajax({
                        //请求方式
                        type : "POST",
                        //请求的媒体类型
                        contentType: "application/json;charset=UTF-8",
                        //请求地址
                        url : baseUrl+"/api/order-update.php",
                        //数据，json字符串
                        data : {
                            "type": 1,
                            "data": value
                        },
                        //请求成功
                        success : function(result) {
                            if (result.code == 0){
                                layer.msg("更新失败!\n错误信息："+result.msg);
                            }
                            console.log(result.msg);
                        },
                        //请求失败，包含具体的错误信息
                        error : function(e){
                            layer.msg("请求失败!请稍后再试！");
                        }
                    });
                    obj.update(JSON.parse(value));
                    layer.close(index);
                //******************************* */
                });
            }
        });
    });
}
