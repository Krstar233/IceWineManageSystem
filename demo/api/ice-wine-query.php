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

if (!isset($_GET['type'])) {
    $sql = "select * from icewine";
}
if (isset($_GET['type']) && $_GET['type'] == 0) {
    $ID = $_GET['word'];
    $sql = "select *from icewine where CusID=$ID";
}
if (isset($_GET['type']) && $_GET['type'] == 1) {
    $name = $_GET['word'];
    $sql = "select *from icewine where CusName='$name'";
}


$result = mysqli_query($conn, $sql);
$count = mysqli_num_rows($result);

$arr = array();
// 输出每行数据
while ($row = $result->fetch_assoc()) {
    $rongyu = count($row);//不能在循环语句中，由于每次删除row数组长度都减小
    for ($i = 0; $i < $rongyu; $i++) {
        unset($row[$i]);//删除冗余数据
    }
    array_push($arr, $row);

}

$output = array(
    'code' => 1,
    'msg' => '',
    'count' => $count,
    'data' => $arr
);
//print_r($arr);
echo json_encode($output, JSON_UNESCAPED_UNICODE);//json编码


//mysqli_close($conn);
?>
