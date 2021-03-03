<?php

  ini_set('display_errors', 1);
	error_reporting(~0);

  // $url = parse_url(getenv("CLEARDB_DATABASE_URL"));

  // $server = "localhost";
	// $username = "root";
	// $password = "";
  // $db = "auc";

  // $server = "localhost";
	// $username = "auc_user";
	// $password = "p@ssw0rd";
  // $db = "auc_db";

  $server = "us-cdbr-east-03.cleardb.com";
	$username = "b68aa37aa44af0";
	$password = "401c709d";
  $db = "heroku_17e8eebbc1fc36b";
  
 
	
  $conn = new mysqli($server, $username, $password, $db, 3306);

	// $conn = mysqli_connect($serverName, $userName, $userPassword, $dbName, $db_port) or die('Unable to establish a CRM_BU connection');
  $conn->set_charset("utf8");
