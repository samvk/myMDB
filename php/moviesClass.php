<?php
require_once "dbconnection.php";

class Movies {

	//CREATE
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

	//READ
	public static function forevery($callback) {
		global $db;

		foreach($db->query("SELECT * FROM movies") as $movie) {
			$callback($movie);
		}
	}

	//UPDATE
	public static function update($title, $review){
		global $db;

		$stmt = $db->prepare(
			"UPDATE movies
			SET review = :review
			WHERE title = :title"
		);
		$stmt->execute([
			":review" => $review,
			":title" => $title
		]);
	}

	//DELETE
	public static function delete($title) {
		global $db;

		$stmt = $db->prepare(
			"DELETE FROM movies
			WHERE title = ?"
		);

		$stmt->execute([$title]);
	}
}