layui.use('table', function(){
    var table = layui.table;
    //第一个实例
    table.render({
      elem: '#demo'
      ,cellMinWidth: 100
      //,url: "##" //数据接口
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
      ]] ,minWidth:80
      ,data: [{
        "ordernumber": "1",
        "orderdate": "20201201",
        "orderstatus": "已完成",
        "CusType": "个人",
        "CusId": "10001",
        "wineId": "00010",
        "commodityinfo": "香蚁",
        "deliveryjudge": "是",
        "orderamount": "50",
        "deliveryLocation": "深圳市南山区第一街道xx小区",
        "deliverytime": "20201201",
        "deliveryamount": "10"
    }, {
        "ordernumber": "2",
        "orderdate": "20201201",
        "orderstatus": "已完成",
        "CusType": "商店",
        "CusId": "20001",
        "wineId": "00011",
        "commodityinfo": "浮蚁",
        "deliveryjudge": "是",
        "orderamount": "1000",
        "deliveryLocation": "深圳市南山区第二街道xx商店",
        "deliverytime": "20201201",
        "deliveryamount": "20"
    }, {
        "ordernumber": "3",
        "orderdate": "20201201",
        "orderstatus": "已完成",
        "CusType": "个人",
        "CusId": "10002",
        "wineId": "00012",
        "commodityinfo": "椒浆",
        "deliveryjudge": "否",
        "orderamount": "70",
        "deliveryLocation": "",
        "deliverytime": "",
        "deliveryamount": ""
    }, {
        "ordernumber": "4",
        "orderdate": "20201202",
        "orderstatus": "已完成",
        "CusType": "超市",
        "CusId": "30001",
        "wineId": "00013",
        "commodityinfo": "醇酎",
        "deliveryjudge": "是",
        "orderamount": "700",
        "deliveryLocation": "深圳市南山区第三街道xx超市",
        "deliverytime": "20201202",
        "deliveryamount": "40"
    }, {
        "ordernumber": "5",
        "orderdate": "20201202",
        "orderstatus": "已完成",
        "CusType": "个人",
        "CusId": "10002",
        "wineId": "00014",
        "commodityinfo": "金波",
        "deliveryjudge": "否",
        "orderamount": "66",
        "deliveryLocation": "",
        "deliverytime": "",
        "deliveryamount": ""
    }, {
        "ordernumber": "6",
        "orderdate": "20201202",
        "orderstatus": "已完成",
        "CusType": "超市",
        "CusId": "30002",
        "wineId": "00015",
        "commodityinfo": "秬鬯",
        "deliveryjudge": "是",
        "orderamount": "2200",
        "deliveryLocation": "深圳市南山区第二街道xx小区",
        "deliverytime": "20201202",
        "deliveryamount": "60"
    }, {
        "ordernumber": "7",
        "orderdate": "20201202",
        "orderstatus": "已完成",
        "CusType": "商店",
        "CusId": "20001",
        "wineId": "00016",
        "commodityinfo": "白堕",
        "deliveryjudge": "否",
        "orderamount": "2000",
        "deliveryLocation": "",
        "deliverytime": "",
        "deliveryamount": ""
    }, {
        "ordernumber": "8",
        "orderdate": "20201202",
        "orderstatus": "已完成",
        "CusType": "超市",
        "CusId": "30002",
        "wineId": "00017",
        "commodityinfo": "冻醪",
        "deliveryjudge": "是",
        "orderamount": "1000",
        "deliveryLocation": "深圳市南山区第三街道xx小区",
        "deliverytime": "20201203",
        "deliveryamount": "80"
    }, {
        "ordernumber": "9",
        "orderdate": "20201202",
        "orderstatus": "已完成",
        "CusType": "个人",
        "CusId": "10001",
        "wineId": "00018",
        "commodityinfo": "壶觞",
        "deliveryjudge": "是",
        "orderamount": "120",
        "deliveryLocation": "深圳市南山区第二街道xx小区",
        "deliverytime": "20201203",
        "deliveryamount": "90"
    }, {
        "ordernumber": "10",
        "orderdate": "20201202",
        "orderstatus": "已完成",
        "CusType": "商店",
        "CusId": "20003",
        "wineId": "00019",
        "commodityinfo": "壶中物",
        "deliveryjudge": "是",
        "orderamount": "1500",
        "deliveryLocation": "深圳市南山区第三街道xx超市",
        "deliverytime": "20201203",
        "deliveryamount": "100"
    }, {
        "ordernumber": "11",
        "orderdate": "20201203",
        "orderstatus": "已完成",
        "CusType": "超市",
        "CusId": "30003",
        "wineId": "00020",
        "commodityinfo": "威代尔",
        "deliveryjudge": "否",
        "orderamount": "546",
        "deliveryLocation": "",
        "deliverytime": "",
        "deliveryamount": ""
    }, {
        "ordernumber": "12",
        "orderdate": "20201203",
        "orderstatus": "已完成",
        "CusType": "个人",
        "CusId": "10003",
        "wineId": "00021",
        "commodityinfo": "品丽珠",
        "deliveryjudge": "是",
        "orderamount": "207",
        "deliveryLocation": "深圳市南山区第二街道xx超市",
        "deliverytime": "20201202",
        "deliveryamount": "30"
    }, {
        "ordernumber": "13",
        "orderdate": "20201203",
        "orderstatus": "已完成",
        "CusType": "商店",
        "CusId": "20004",
        "wineId": "00022",
        "commodityinfo": "雷司令",
        "deliveryjudge": "否",
        "orderamount": "1700",
        "deliveryLocation": "",
        "deliverytime": "",
        "deliveryamount": ""
    }, {
        "ordernumber": "14",
        "orderdate": "20201203",
        "orderstatus": "已完成",
        "CusType": "商店",
        "CusId": "20005",
        "wineId": "00023",
        "commodityinfo": "琼瑶浆",
        "deliveryjudge": "否",
        "orderamount": "450",
        "deliveryLocation": "",
        "deliverytime": "",
        "deliveryamount": ""
    }, {
        "ordernumber": "15",
        "orderdate": "20201203",
        "orderstatus": "已完成",
        "CusType": "超市",
        "CusId": "30003",
        "wineId": "00024",
        "commodityinfo": "霞多丽",
        "deliveryjudge": "否",
        "orderamount": "777",
        "deliveryLocation": "",
        "deliverytime": "",
        "deliveryamount": ""
    }, {
        "ordernumber": "16",
        "orderdate": "20201203",
        "orderstatus": "进行中",
        "CusType": "个人",
        "CusId": "10004",
        "wineId": "00025",
        "commodityinfo": "梅乐",
        "deliveryjudge": "是",
        "orderamount": "888",
        "deliveryLocation": "深圳市南山区第一街道xx超市",
        "deliverytime": "20201202",
        "deliveryamount": "50"
    }, {
        "ordernumber": "17",
        "orderdate": "20201203",
        "orderstatus": "进行中",
        "CusType": "超市",
        "CusId": "30004",
        "wineId": "00026",
        "commodityinfo": "施埃博",
        "deliveryjudge": "否",
        "orderamount": "2000",
        "deliveryLocation": "",
        "deliverytime": "",
        "deliveryamount": ""
    }, {
        "ordernumber": "18",
        "orderdate": "20201203",
        "orderstatus": "进行中",
        "CusType": "商店",
        "CusId": "20005",
        "wineId": "00027",
        "commodityinfo": "穆思卡得",
        "deliveryjudge": "否",
        "orderamount": "4010",
        "deliveryLocation": "",
        "deliverytime": "",
        "deliveryamount": ""
    }, {
        "ordernumber": "19",
        "orderdate": "20201203",
        "orderstatus": "进行中",
        "CusType": "超市",
        "CusId": "30004",
        "wineId": "00028",
        "commodityinfo": "米勒",
        "deliveryjudge": "是",
        "orderamount": "780",
        "deliveryLocation": "深圳市南山区第一街道xx商店",
        "deliverytime": "20201203",
        "deliveryamount": "70"
    }, {
        "ordernumber": "20",
        "orderdate": "20201204",
        "orderstatus": "进行中",
        "CusType": "个人",
        "CusId": "10005",
        "wineId": "00029",
        "commodityinfo": "奥特加",
        "deliveryjudge": "否",
        "orderamount": "69",
        "deliveryLocation": "",
        "deliverytime": "",
        "deliveryamount": ""
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