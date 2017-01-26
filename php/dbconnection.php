<?php

require_once "config.php";

//connect to database
$db = new PDO($dsn, $username, $password);

//disable emulation of prepared statements (for compatibility)
$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
//error handling
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);