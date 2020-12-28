<?php
/*$json = '{
    "data": {
        "wineId": "00001",
        "wineName": "杜康",
        "wineType": "白冰酒",
        "wineOrigin": "广东省汕头市",
        "wineProductDate": "20201020",
        "winePurchasePrice": "10",
        "wineBasicSalePrice": "20",
        "wineCapacity": "500ml",
        "wineAlcoholDegree": "12"
    }
}';
$json_Array=json_decode($json, true);
//print_r($json_Array['data']);
//echo $json_Array['a'];
$a=array();$b=array();
foreach($json_Array['data'] as $key=>$value)
{ array_push($b,$value);array_push($a,$key);}
for($i=0;$i<count($a);$i++)
echo $a[$i].'  ';echo $b[0];
include("conn.php");
$sql="SELECT stockamount FROM icewine WHERE wineId=1";
$res = mysqli_query($conn, $sql);
$row = mysqli_fetch_array($res);
$id=$row[0];echo $id;*/
/*if (isset($_POST)&&file_get_contents ( 'php://input' )!=null)
{$data=file_get_contents ( 'php://input' );
$json_Array=json_decode($data, true);
print_r($json_Array['data']);
//echo $json_Array['a'];
$a=array();$b=array();
foreach($json_Array['data'] as $key=>$value)
{ array_push($b,$value);array_push($a,$key);}
for($i=0;$i<count($a);$i++)
    echo $a[$i].'  ';echo $b[0];
}
else echo 'fail msg';*/
if (isset($_POST)&&file_get_contents ( 'php://input' )!=null)
{$data=file_get_contents ( 'php://input' );
    $data=json_decode($data, true);
    print_r($data);
//echo $json_Array['a'];
    $a=$data['type'];
    $b=$data['id'];
    echo $a.'  '; echo$b;
}
else echo 'fail msg';
?>