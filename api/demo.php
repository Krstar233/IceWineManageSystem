<?php
/*$json = '{"a":"php","b":"mysql","c":3}';
$json_Class=json_decode($json);
$json_Array=json_decode($json, true);
print_r($json_Array);
//echo $json_Array['a'];
$a=array();$b=array();
foreach($json_Array as $key=>$value)
{ array_push($b,$value);array_push($a,$key);}
//for($i=0;$i<count($a);$i++)
echo $a[0];echo $b[0];*/
include("conn.php");
$sql="SELECT stockamount FROM icewine WHERE wineId=1";
$res = mysqli_query($conn, $sql);
$row = mysqli_fetch_array($res);
$id=$row[0];echo $id;
?>