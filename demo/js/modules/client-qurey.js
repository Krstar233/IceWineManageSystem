layui.use('table', function(){
    var table = layui.table;
    //var a=document.getElementByName("title").value;
    //var b=document.getElementByName("city").value;
    //if(a==null||b==null)
    var c='http://localhost/php_files/client_test.php';
    //else var c='http://localhost/php_files/client_test.php?title='+a+'&city='+b;
    //第一个实例
    table.render({
      elem: '#demo'
      ,cellMinWidth: 100
      ,url:c //数据接口
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
      ,limits: [5,10,20]  //一页选择显示3,5或10条数据
            ,limit: 10  //一页显示10条数据
            ,parseData: function(res){ //将原始数据解析成 table 组件所规定的数据，res为从url中get到的数据
                var result;
                console.log(this);
                console.log(JSON.stringify(res));
                if(this.page.curr){
                    result = res.data.slice(this.limit*(this.page.curr-1),this.limit*this.page.curr);
                }
                else{
                    result=res.data.slice(0,this.limit);
                }
                return {
                    "code": res.code, //解析接口状态
                    "msg": res.msg, //解析提示文本
                    "count": res.count, //解析数据长度
                    "data": result //解析数据列表
                };
            }
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

