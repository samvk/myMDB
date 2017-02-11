<?php
namespace samvk;
use \PDO;

require_once 'dbconnection.php';

class Movies {

	//CREATE
	public static function insert($movieData) {
		global $db;

		$stmt = $db->prepare(
			'INSERT INTO movies(title, review, imdb, poster, rank)
			VALUES (:title, :review, :imdb, :poster, :rank)'
		);

		$stmt->execute([
			':title' => $movieData['title'],
			':review' => $movieData['review'],
			':imdb' => $movieData['imdb'],
			':poster' => $movieData['poster'],
			':rank' => $movieData['rank']
		]);
	}

	//READ
	public static function forevery($callback, $order = "id", $by = "ASC") {
		global $db;

		//validation
		if ( !preg_match('/id|title|review/', $order) || !preg_match('/ASC|DESC/', $by) ) {
			echo 'You cannot send this value.';
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

		if ($movieData['title']) {
			$stmt = $db->prepare(
				'UPDATE movies SET title = ? WHERE id = ?'
			);
			$stmt->execute([$movieData['title'], $movieId]);
		}
		if ($movieData['review']) {
			$stmt = $db->prepare(
				'UPDATE movies SET review = ? WHERE id = ?'
			);
			$stmt->execute([$movieData['review'], $movieId]);
		}
		if ($movieData['imdb']) {
			$stmt = $db->prepare(
				'UPDATE movies SET imdb = ? WHERE id = ?'
			);
			$stmt->execute([$movieData['imdb'], $movieId]);
		}
		if ($movieData['poster']) {
			$stmt = $db->prepare(
				'UPDATE movies SET poster = ? WHERE id = ?'
			);
			$stmt->execute([$movieData['poster'], $movieId]);
		}
		if ($movieData['rank']) {
			$stmt = $db->prepare(
				'UPDATE movies SET rank = ? WHERE id = ?'
			);
			$stmt->execute([$movieData['rank'], $movieId]);
		}
	}

	//DELETE
	public static function delete($movieId) {
		global $db;

		$stmt = $db->prepare(
			'DELETE FROM movies
			WHERE id = ?'
		);

		$stmt->execute([$movieId]);
	}
}