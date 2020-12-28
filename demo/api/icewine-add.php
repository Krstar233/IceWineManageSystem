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

    foreach($data['data'] as $key=>$value)
    { array_push($a,$key);array_push($b,$value);}

    $query = 'insert into icewine (';
    for($i=0; $i<count($a); $i++) {
        $query = $query . $a[$i] . ',';
    }
    $query = substr($query, 0, strlen($query)-1);   // 去除逗号
    $query = $query . ') values (';

    for($i=0; $i<count($b); $i++) {
        $query = $query . '"' . $b[$i] . '",';
    }
    $query = substr($query, 0, strlen($query)-1);
    $query = $query . ')';

    // 执行sql
    $res = mysqli_query($conn, $query);

    if($res)
        $output = array(
            'code' => 0,
            'msg' => '数据添加成功',
        );
    else
        $output = array(
            'code' => 1,
            'msg' => '数据添加失败',
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
