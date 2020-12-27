<?php
$hostname = "localhost";
$username = "root";
$database = "iceman";
$password = "";
$conn = mysqli_connect($hostname, $username, $password);
$db = mysqli_select_db($conn, $database);
?>