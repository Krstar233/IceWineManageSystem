<?php
include("conn.php");
header("Access-Control-Allow-Origin:*"); //跨域名
header("Access-Control-Allow-Headers:*");
header("Content-type:text/html;charset=utf-8");
if (!$conn) {
    die('Could not connect: ' . mysqli_error($conn));
}

//mysqli_select_db($conn, "iceman");
mysqli_set_charset($conn, "utf8");



if (isset($_POST)&&file_get_contents ( 'php://input' )!=null) {
    $data=json_decode(file_get_contents ( 'php://input' ),true);
    $a=array();$b=array();

    foreach($data['data'] as $key=>$value)
    { array_push($a,$key);array_push($b,$value);}

    $sql = "SELECT stockamount FROM icewine WHERE wineId=$b[0]";//获取冰酒库存量
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
    $amount = $row[0];

    if($b[4]=='入库')     $amount+=$b[5];
    if($b[4]=='出库')     $amount=$amount-$b[5];

    $query = 'update icewine set stockamount=';
    $query = $query . $amount ;                   //库存数量更改
    $query = $query . ' where ' . $a[0] . '=' . $b[0];

    //$query = $query . ' where ' . $primaryKeyName . '=' . $primaryKeyValue;

    // 执行修改sql
    $res = mysqli_query($conn, $query);
    if($res)
        $output = array(
            'code' => 0,
            'msg' => '数据更新成功',
        );
    else
        $output = array(
            'code' => 1,
            'msg' => '数据更新失败',
        );
}
else  {
    $output = array(
        'code' => 0,
        'msg' => '',
    );
}
//echo $query;
echo json_encode($output, JSON_UNESCAPED_UNICODE);//json编码

//mysqli_close($conn);
?>
