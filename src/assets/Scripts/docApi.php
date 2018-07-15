<?php
///$servername = "https://gator3082.hostgator.com:2083";
//$username = "unchartreal_unchartr_admin";
//$password = "un@dR11290";

$servername = "localhost";
$username = "root";
$password = "1234";

$dbh=mysql_connect ($servername, $username, $password) or die ('I cannot connect to the database because: ' . mysql_error());
mysql_select_db ("cpuser_db");

?>