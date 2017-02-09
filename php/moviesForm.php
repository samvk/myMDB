<?php

if ( $_SERVER["REQUEST_METHOD"] == "POST" ){
	$title = trim($_POST["title"]) ?? "";
	$review = trim($_POST["review"]) ?? "";
	$action = $_POST["action"] ?? "";
	//temp values
	$imdb = "99"; //might need to change type from INT to DECIMAL (or similar)
	$poster = "http://i.imgur.com/kvNi7Hj.png";
	$rank = "11";
}

if ( empty($title) || ( empty($review) && $action =="insert" ) ) {
	echo "<p class='loud'>Oops! you left some required fields blank.</p>";
	exit;
}

include "moviesClass.php";

use \samvk\Movies;

if ($action == "insert") {
	Movies::insert($title, $review, $imdb, $poster, $rank);
} elseif ($action == "delete") {
	Movies::delete($title);
} elseif ($action == "update") {
	Movies::update($title, $review);
}

exit;

//Need error handling.
//Also need a script to get (read) movies


//Is there a way to make a full CRUD (Create Read Update Destroy) functionality?
//PDOs?
//Check what bMarketPlace does.