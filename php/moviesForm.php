<?php

if ( $_SERVER["REQUEST_METHOD"] == "POST" ){
	$action = $_POST["action"] ?? "";
	$movieId = trim($_POST["movieId"]) ?? "";
	$movieData = array_map('trim', $_POST["movieData"]);

	//temp values
	$movieData["imdb"] = "99"; //might need to change type from INT to DECIMAL (or similar)
	$movieData["poster"] = "https://i.imgur.com/kvNi7Hj.png";
	$movieData["rank"] = "11";
}

include "moviesClass.php";

use \samvk\Movies;

if ($action == "insert") {
	//Movies::insert($title, $review, $imdb, $poster, $rank);
	Movies::insert($movieData);
} elseif ($action == "delete") {
	Movies::delete($movieId);
} elseif ($action == "update") {
	//Movies::update($movieId, $movieData["review"]);
	Movies::update($movieId, $movieData);
}

exit;

//Need error handling.
//Also need a script to get (read) movies


//Is there a way to make a full CRUD (Create Read Update Destroy) functionality?
//PDOs?
//Check what bMarketPlace does.