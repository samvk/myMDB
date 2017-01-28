<?php

require_once "dbconnection.php";

$title = trim($_POST["title"]) ?? "";
$review = trim($_POST["review"]) ?? "";
//temp values
$imdb = "82"; //might need to change type from INT to DECIMAL (or similar)
$poster = "https://images-na.ssl-images-amazon.com/images/M/MV5BYzgyYzc4Y2QtNDcyZS00NDdmLWI5ZTYtMTQ2YWU5MWFhOTE4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg";
$rank = "6";

if ( empty($title) || empty($review) ) {
	echo "<p class='loud'>Oops! you left some required fields blank.</p>";
	exit;
}


class moviesList {
	public static function insert($title, $review, $imdb, $poster, $rank) {
		global $db;
		
		$stmt = $db->prepare(
			"INSERT INTO movies(title, review, imdb, poster, rank)
			VALUES (:title, :review, :imdb, :poster, :rank)"
		);
		
		$stmt->execute([
			":title" => $title,
			":review" => $review,
			":imdb" => $imdb,
			":poster" => $poster,
			":rank" => $rank
		]);
	}
}

moviesList::insert($title, $review, $imdb, $poster, $rank);

echo "<br><a href='https://localhost/myMDB/'>GO HOME</a>";

/*
$stmt = $db->prepare(
	"INSERT INTO movies(title, review, imdb, poster, rank)
	VALUES (:title, :review, :imdb, :poster, :rank)"
);

$stmt->execute([
	":title" => $title,
	":review" => $review,
	":imdb" => $imdb,
	":poster" => $poster,
	":rank" => $rank
]);
*/

//add title and review to database (create)
//also add all other imdb details to database? (or should these be dynamically generated)

//Need error handling.


//Also need a script to get (read) movies


//Is there a way to make a full CRUD (Create Read Update Destroy) functionality?
//PDOs?
//Check what bMarketPlace does.