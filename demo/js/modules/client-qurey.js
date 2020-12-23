layui.use('table', function(){
    var table = layui.table;
    //第一个实例
    table.render({
      elem: '#demo'
      ,cellMinWidth: 100
      //,url: "##" //数据接口
      ,page: true //开启分页
      ,cols: [[ //表头
        {field: 'CusName', title: '姓名', sort: true}
        ,{field: 'CusID', title: '编号', sort: true}
        ,{field: 'CusType', title: '客户类型', sort: true}
        ,{field: 'CusTel', title: '电话'}
        ,{field: 'CusAddr', title: '地址', sort: true}
        ,{field: 'CusCost', title: '消费额', sort: true},
        ,{fixed: 'right', title:'操作', toolbar: '#operation-bar', width:120}
      ]]
      ,data: [{
        "CusName": "Krits",
        "CusID": "10001",
        "CusType": "个人",
        "CusTel": "400840820",
        "CusAddr": "深圳市南山区第一街道xx小区",
        "CusCost": "50"
    }, {
        "CusName": "Messi",
        "CusID": "10002",
        "CusType": "商店",
        "CusTel": "258622333",
        "CusAddr": "深圳市南山区第二街道xx商店",
        "CusCost": "1000"
    }, {
        "CusName": "Leonard",
        "CusID": "10003",
        "CusType": "超市",
        "CusTel": "747235878",
        "CusAddr": "深圳市南山区第二街道xx超市",
        "CusCost": "70"
    }, {
        "CusName": "Smith",
        "CusID": "10004",
        "CusType": "超市",
        "CusTel": "332432565",
        "CusAddr": "深圳市南山区第三街道xx超市",
        "CusCost": "700"
    }, {
        "CusName": "Jenny",
        "CusID": "10005",
        "CusType": "超市",
        "CusTel": "325457768",
        "CusAddr": "深圳市南山区第一街道xx超市",
        "CusCost": "66"
    }, {
        "CusName": "Bob",
        "CusID": "20001",
        "CusType": "个人",
        "CusTel": "323421233",
        "CusAddr": "深圳市南山区第二街道xx小区",
        "CusCost": "2200"
    }, {
        "CusName": "Mary",
        "CusID": "20003",
        "CusType": "商店",
        "CusTel": "974367657",
        "CusAddr": "深圳市南山区第一街道xx商店",
        "CusCost": "2000"
    }, {
        "CusName": "xxx",
        "CusID": "20004",
        "CusType": "个人",
        "CusTel": "765767865",
        "CusAddr": "深圳市南山区第三街道xx小区",
        "CusCost": "1000"
    }, {
        "CusName": "xxx",
        "CusID": "20005",
        "CusType": "个人",
        "CusTel": "232465445",
        "CusAddr": "深圳市南山区第二街道xx小区",
        "CusCost": "120"
    }, {
        "CusName": "xxx",
        "CusID": "30001",
        "CusType": "超市",
        "CusTel": "454567652",
        "CusAddr": "深圳市南山区第三街道xx超市",
        "CusCost": "1500"
    }, {
        "CusName": "xxx",
        "CusID": "30002",
        "CusType": "超市",
        "CusTel": "353455345",
        "CusAddr": "xxxxxxxxxxxx",
        "CusCost": "546"
    }, {
        "CusName": "xxx",
        "CusID": "30003",
        "CusType": "个人",
        "CusTel": "243534543",
        "CusAddr": "xxxxxxxxxxxx",
        "CusCost": "207"
    }, {
        "CusName": "xxx",
        "CusID": "30004",
        "CusType": "商店",
        "CusTel": "768786754",
        "CusAddr": "xxxxxxxxxxxx",
        "CusCost": "1700"
    }]
    });

    //监听行工具事件
    table.on('tool(test)', function(obj){
        var data = obj.data;
        //console.log(obj)
        if(obj.event === 'del'){
        layer.confirm('真的删除行么', function(index){
            // ***************删除行********************
            obj.del();
            console.log('操作：删除行' + JSON.stringify(obj.data));
            layer.close(index);
            //******************************************
        });
        } else if(obj.event === 'edit'){
            //***************编辑************** */
            layer.prompt({
                formType: 2
                ,value: JSON.stringify(data,null,'\t')
            }, function(value, index){
                console.log('操作：更新行' + JSON.stringify(obj.data));
                obj.update(JSON.parse(value));
                layer.close(index);
            //******************************* */
            });
        }
    });
});

