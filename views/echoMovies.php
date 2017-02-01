<?php
include_once __DIR__ . "/../php/moviesClass.php";

$order = $_GET["order"] ?? "id";

function echoMovies() {
	global $order;

	\samvk\Movies::forevery(function ($error, $movie) {
		if ($error) {
			echo "<div><p class='bold'>Time to add your first movie!</p></div>";
			return;
		}
		echo
			"<article class='movie' style='outline: 4px dashed red'>
				<section class='movie__banner'>
					<div class='banner__id'><p>{$movie['id']}</div>
					<div class='banner__rank'><p>{$movie['rank']}</div>
					<div class='banner__title'><p>{$movie['title']}</p></div>
					<div class='banner__imdb'>{$movie['imdb']}</div>
				</section>

				<section class='movie__details'>
					<div class='details__poster'>
						<img src='{$movie['poster']}' alt='Poster not found!' title='{$movie['title']} (poster)'>
				</div>
				<div class='details__review'>
					<p>{$movie['review']}</p>
				</div>
				</section>
			</article>";
	}, $order);
}

echo "<div id='movies-list'>";
echoMovies();
echo "</div>";