<?php
$username = "root";
$password = "saltytuna814";
$hostname = "localhost"; 
$databaseName = "TeamTrack";

//connection to the database
// $dbhandle = mysqli_connect($hostname, $username, $password, $databaseName) 
//   or die("Unable to connect to MySQL");
// echo "Connected to MySQL<br>";

$conn = new mysqli("localhost", "colin", "saltytuna814", "TeamTrack");

if(!$conn)
{
	echo 'failure!';
	die('error connecting to database');
}

echo 'success2!'


?>