<?php

if ( $_SERVER["REQUEST_METHOD"] == "POST" ){
	$action = $_POST["action"] ?? "";
	$movieId = trim($_POST["movieId"]) ?? "";
	$title = trim($_POST["title"]) ?? "";
	$review = trim($_POST["review"]) ?? "";
	//temp values
	$imdb = "99"; //might need to change type from INT to DECIMAL (or similar)
	$poster = "https://i.imgur.com/kvNi7Hj.png";
	$rank = "11";
}

include "moviesClass.php";

use \samvk\Movies;

if ($action == "insert") {
	Movies::insert($title, $review, $imdb, $poster, $rank);
} elseif ($action == "delete") {
	Movies::delete($movieId);
} elseif ($action == "update") {
	Movies::update($movieId, $review);
}

exit;

//Need error handling.
//Also need a script to get (read) movies


//Is there a way to make a full CRUD (Create Read Update Destroy) functionality?
//PDOs?
//Check what bMarketPlace does.