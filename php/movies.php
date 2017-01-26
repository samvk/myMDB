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






require_once "config.php";


class Db {
	
	private $title;
	private $review;
	private $imdb;
	private $poster;
	private $rank;
	
	function __construct($title, $review, $imdb, $poster, $rank) {
		$this->$title = $title ?? "";
		$this->$review = $review ?? "";
		$this->$imdb = $imdb ?? "";
		$this->$poster = $poster ?? "";
		$this->$rank = $rank ?? "";
	}

	//connect to database
	private $db = new PDO($dsn, $username, $password);

	//disable emulation of prepared statements (for compatibility)
	$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
	//error handling
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
	public function createMovie($title, $review, $imdb, $poster, $rank) {
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
	
	public function foreachMovie($message) {
		foreach($db->query("SELECT * FROM movies") as $movie) {
			echo $message;
		}
	}
}




//add title and review to database (create)
//also add all other imdb details to database? (or should these be dynamically generated)

//Need error handling.


//Also need a script to get (read) movies


//Is there a way to make a full CRUD (Create Read Update Destroy) functionality?
//PDOs?
//Check what bMarketPlace does.