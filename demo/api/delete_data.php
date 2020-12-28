<?php
include("conn.php");
header("Access-Control-Allow-Origin:*"); //跨域名
header("Access-Control-Allow-Headers:*");
// header("Content-type:text/html;charset=utf-8");
header('Content-type: application/json');

$GLOBALS['HTTP_RAW_POST_DATA'];

if (!$conn) {
    die('Could not connect: ' . mysqli_error($conn));
}
mysqli_set_charset($conn, "utf8");
//http://localhost/IceWineManageSystem/demo/api/delete_data.php

 if (isset($_POST)&&file_get_contents ( 'php://input' )!=null) {
    $data=json_decode(file_get_contents ( 'php://input' ),true);
    $type=$data['type'];$id=$data['id'];
    $sql = "select column_name FROM INFORMATION_SCHEMA.`KEY_COLUMN_USAGE` WHERE table_name='".$type."' AND constraint_name='PRIMARY'";
    $result = mysqli_query($conn, $sql);
    $primaryKey = mysqli_fetch_array($result)[0];
    $query = 'delete from ' . $type . ' where ' . $primaryKey . '=' . $id;

// 执行删除语句
    $res = mysqli_query($conn, $query);
    if ($res)
        $output = array(
            'code' => 0,
            'msg' => '数据删除成功',
        );
    else
        $output = array(
            'code' => 1,
            'msg' => '数据删除失败',
        );
}
else  {
     $output = array(
         'code' => 0,
         'msg' => '',
     );
 }
echo json_encode($output, JSON_UNESCAPED_UNICODE);//json编码
?>