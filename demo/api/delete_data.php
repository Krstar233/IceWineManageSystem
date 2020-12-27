<?php
include("conn.php");
header("Access-Control-Allow-Origin:*"); //跨域名
header("Access-Control-Allow-Headers:*");
header("Content-type:text/html;charset=utf-8");
if (!$conn) {
    die('Could not connect: ' . mysqli_error($conn));
}
mysqli_set_charset($conn, "utf8");

if (!isset($_POST['type'])) {
    $output = array(
        'code' => 0,
        'msg' => '',
    );
}

if (isset($_POST['type'])) {
    $sql = "select column_name FROM INFORMATION_SCHEMA.`KEY_COLUMN_USAGE` WHERE table_name='$_POST[type]' AND constraint_name='PRIMARY'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
    $primaryKey = $row[0];
    $query = 'delete from ' . $_POST[type] . ' where ' . $primaryKey . '=' . $_POST[id];

// 执行删除语句
    $res = mysqli_query($conn, $query);
    if ($res)
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
echo json_encode($output, JSON_UNESCAPED_UNICODE);//json编码
?>