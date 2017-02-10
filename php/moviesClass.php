<?php
namespace samvk;
use \PDO;

require_once "dbconnection.php";

class Movies {

	//CREATE
	public static function insert($movieData) {
		global $db;

		$stmt = $db->prepare(
			"INSERT INTO movies(title, review, imdb, poster, rank)
			VALUES (:title, :review, :imdb, :poster, :rank)"
		);

		$stmt->execute([
			":title" => $movieData["title"],
			":review" => $movieData["review"],
			":imdb" => $movieData["imdb"],
			":poster" => $movieData["poster"],
			":rank" => $movieData["rank"]
		]);
	}

	//READ
	public static function forevery($callback, $order = "id", $by = "ASC") {
		global $db;

		//validation
		if ( !preg_match('/id|title|review/', $order) || !preg_match('/ASC|DESC/', $by) ) {
			echo "You cannot send this value.";
			exit;
		}

		$stmt = $db->query("SELECT * FROM movies ORDER BY $order $by");
		$movies = $stmt->fetchAll(PDO::FETCH_ASSOC);

		if (!$movies) {
			$callback(true, null);
		} else {
			foreach($movies as $movie) {
				$callback(null, $movie);
			}
		}
	}

	//UPDATE
	public static function update($movieId, $movieData){
		global $db;

		$stmt = $db->prepare(
			"UPDATE movies
			SET review = :review
			WHERE id = :movieId"
		);
		$stmt->execute([
			":review" => $review,
			":movieId" => $movieId
		]);
	}

	//DELETE
	public static function delete($movieId) {
		global $db;

		$stmt = $db->prepare(
			"DELETE FROM movies
			WHERE id = ?"
		);

		$stmt->execute([$movieId]);
	}
}