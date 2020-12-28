<?php
include("conn.php");
header("Access-Control-Allow-Origin:*"); //跨域名
header("Access-Control-Allow-Headers:*");
header('Content-type: application/json');
if (!$conn) {
    die('Could not connect: ' . mysqli_error($conn));
}

//mysqli_select_db($conn, "iceman");
mysqli_set_charset($conn, "utf8");



if (isset($_POST)&&file_get_contents ( 'php://input' )!=null) {
    $data=json_decode(file_get_contents ( 'php://input' ),true);
    $a=array();$b=array();

    foreach($data['data'] as $key=>$value)            //获取json数组 键/值
    { array_push($a,$key);array_push($b,$value);}

    $query = 'update icewine set ';
    for($i=0; $i<count($a); $i++) {
        $query = $query . $a[$i] . '="' . $b[$i] . '",';
    }
    $query = substr($query, 0, strlen($query)-1);
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
// echo $query;
echo json_encode($output, JSON_UNESCAPED_UNICODE);//json编码

//mysqli_close($conn);
?>
