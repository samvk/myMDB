<?php
include_once __DIR__ . "/../php/moviesClass.php";

$order = $_GET["order"] ?? "id";
$by = $_GET["by"] ?? "ASC";

function echoMovies() {
	global $order;
	global $by;

	\samvk\Movies::forevery(function ($error, $movie) {
		if ($error) {
			echo "<div><p class='bold'>Time to add your first movie!</p></div>";
			return;
		}
		echo
			"<article class='movie' style='outline: 4px dashed red; display: flex'>
				<section class='movie__banner'>
					<div class='banner__id'><p>{$movie['id']}[id]</div>
					<div class='banner__rank'><p>{$movie['rank']}[rank]</div>
					<div class='banner__title'><p>{$movie['title']}</p></div>
					<div class='banner__imdb'>{$movie['imdb']}[imdb]</div>
				</section>

				<section class='movie__details'>
					<div class='details__poster'>
						<img src='{$movie['poster']}' alt='Poster not found!' title='{$movie['title']} (poster)'>
				</div>
				<div class='details__review'>
					<p>{$movie['review']}</p>
				</div>
				<button data-action='edit'>&#9998;</button>
				<button data-action='delete'>&#10006;</button>
				</section>
			</article>";
	}, $order, $by);
}

echoMovies();