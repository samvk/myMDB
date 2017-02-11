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
					id:<div class='banner__id'><p>{$movie['id']}</div>
					rank:<div class='banner__rank'><p>{$movie['rank']}</div>
					title:<div class='banner__title'><p>{$movie['title']}</div>
					imdb:<div class='banner__imdb'>{$movie['imdb']}</div>
				</section>

				<section class='movie__details'>
					<div class='details__poster'>
						<img src='{$movie['poster']}' alt='Poster not found!' title='{$movie['title']} (poster)'>
				</div>
				<div class='details__review'>
					<p>{$movie['review']}</p>
				</div>
				<button data-action='show-edit'>&#9998;</button><form class='edit-form is-hidden'><input type='text' class='new-review'><button type='submit' data-action='show-edit'>Submit</button></form>
				<button data-action='delete'>&#10006;</button>
				</section>
			</article>";
	}, $order, $by);
}

echoMovies();