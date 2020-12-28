<?php
header("Access-Control-Allow-Origin:*"); //跨域名
header("Access-Control-Allow-Headers:*");
header('Content-type: application/json');
$con = mysqli_connect('localhost', 'root','','iceman');
if (!$con)
{
    die('Could not connect: ' . mysqli_error($con));
}

//mysqli_select_db($con,"test");
mysqli_set_charset($con, "utf8");

if(!isset($_GET['type'])||!isset($_GET['word'])) {
    $sql = "select * from client";
    $result = mysqli_query($con,$sql);
    $count=mysqli_num_rows($result);
    $arr = array();
// 输出每行数据
    while($row = $result->fetch_assoc()) {
        $rongyu=count($row);//不能在循环语句中，由于每次删除row数组长度都减小
        for($i=0;$i<$rongyu;$i++){
            unset($row[$i]);//删除冗余数据
        }
        array_push($arr,$row);

    }
    $output = array(
        'code' => 0,
        'msg' =>'',
        'count' => $count,
        'data' => $arr
    );
}
else if($_GET['type']=='null'||$_GET['word']=='null'||$_GET['type']==''||$_GET['word']=='')
{
    $output = array(
    'code' => 0,
    'msg' =>'',
    'count' => 0,
    'data' =>''
    );
}
else if(isset($_GET['type'])&&isset($_GET['word'])){
if($_GET['type']==1)
{$ID=$_GET['word'];   $sql="select *from client where CusID = $ID";}
if($_GET['type']==2)
{$name=$_GET['word'];  $sql="select *from client where CusName like'%$name%'";}

//wqeyu
$result = mysqli_query($con,$sql);
$count=mysqli_num_rows($result);
$arr = array();
// 输出每行数据
while($row = $result->fetch_assoc()) {
    $rongyu=count($row);//不能在循环语句中，由于每次删除row数组长度都减小
    for($i=0;$i<$rongyu;$i++){
        unset($row[$i]);//删除冗余数据
    }
    array_push($arr,$row);

}
$output = array(
    'code' => 0,
    'msg' =>'',
    'count' => $count,
    'data' => $arr
);
}

//print_r($arr);
echo json_encode($output, JSON_UNESCAPED_UNICODE);//json编码


//mysqli_close($con);

?>
