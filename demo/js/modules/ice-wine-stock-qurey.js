document.write("<script language='javascript' src='./js/modules/config.js'></script>");

function updateTable(type, word){
    var _url = "";
    if (type == null || word == null){
        _url = baseUrl + "/api/ice-wine-query.php";
    }
    layui.use('table', function(){
        var table = layui.table;
        //第一个实例
        table.render({
          elem: '#demo'
          ,cellMinWidth: 100
          ,url: _url
          ,page: true //开启分页
          ,cols: [[ //表头
            {field: 'wineId', title: '酒品编号', sort: true}
            ,{field: 'wineName', title: '酒品名称', sort: true}
            ,{field: 'wineType', title: '酒品类型', sort: true}
            ,{field: 'stockAmount', title: '库存数目', sort: true}
            ,{field: 'stockLocation', title: '存放位置', sort: true}
            ,{field: 'stockStatus', title: '库存状态', sort: true}
            ,{field: 'stockDate', title: '入库日期', sort: true}
            ,{field: 'wineOrigin', title: '产地产区'} 
            ,{field: 'wineProductDate', title: '生产日期', sort: true}
            ,{field: 'winePurchasePrice', title: '进购价格', sort: true}
            ,{field: 'wineBasicSalePrice', title: '基础售价', sort: true}
            ,{field: 'wineCapacity', title: '单瓶容量', sort: true}
            ,{field: 'wineAlcoholDegree', title: '酒精度数', sort: true}
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
                deleteDataById("wine", obj.data.wineId);
                layer.close(index);
                //******************************************
            });
            } else if(obj.event === 'edit'){
                //***************编辑************** */
                layer.prompt({
                    formType: 2
                    ,value: JSON.stringify(data,null,'\t')
                }, function(value, index){
                    //console.log('操作：更新行' + JSON.stringify(obj.data));
                    $.ajax({
                        //请求方式
                        type : "POST",
                        //请求的媒体类型
                        contentType: "application/json;charset=UTF-8",
                        //请求地址
                        url : baseUrl+"/api/icewine-update.php",
                        //数据，json字符串
                        data : {
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

