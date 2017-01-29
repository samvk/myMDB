<?php
require_once "php/dbconnection.php";
?>

<!DOCTYPE html>
<html lang="en">

<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"> <!-- disable zoom on mobile -->
    <meta name="author" content="Sam Kauffman">
	<meta name="description" content="The &quot;my Movie Database.&quot; An online movie-ranking database that's perfect - because they're your rankings.">
	<meta name="theme-color" content="#386D9B">

	<title>myMDB - The "my Movie Database"</title>

    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="manifest.json">
    <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5BBAD5">

	<!-- Custom CSS -->
	<link href="css/style.css" rel="stylesheet">

	<style>
		body {
			background: lightgrey;
		}
	</style>

</head>

<body>

	<div class="app">

		<!-- temp example -->
		<article class="movie">
			<section class="movie__banner">
				<div class="banner__rank"><p>12</p></div>
				<div class="banner__title"><p>Monty Python and the Holy Grail</p></div>
				<div class="banner__imdb">97</div>
			</section>

			<section class="movie__details">
				<div class="details__poster">
					<img src="https://images-na.ssl-images-amazon.com/images/M/MV5BYzgyYzc4Y2QtNDcyZS00NDdmLWI5ZTYtMTQ2YWU5MWFhOTE4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" alt="Poster not found!" title="Monty Python and the Holy Grail">
				</div>
				<div class="details__review">
					<p>
					Most comedies don't age well -- the jokes, gags, and even the actors all become dated; that can't be said of "Monty Python and the Holy Grail", which is still every bit as hilarious.
					</p>
				</div>
			</section>
		</article>



		<?php foreach($db->query("SELECT * FROM movies") as $movie): ?>

		<article class="movie" style="outline: 4px dashed red">
			<section class="movie__banner">
				<div class="banner__rank"><p><?php echo $movie["rank"] ?></p></div>
				<div class="banner__title"><p><?php echo $movie["title"] ?></p></div>
				<div class="banner__imdb"><?php echo $movie["imdb"] ?></div>
			</section>

			<section class="movie__details">
				<div class="details__poster">
					<img src="<?php echo $movie["poster"] ?>" alt="Poster not found!" title="<?php echo $movie["title"] ?>">
				</div>
				<div class="details__review">
					<p><?php echo $movie["review"] ?></p>
				</div>
			</section>
		</article>

		<?php endforeach; ?>


	</div>

	<div class="submit">
		<form action="php/moviesForm.php" method="post">
			<p><label><input type="text" name="title"></label></p>
			<p><label><textarea name="review"></textarea></label></p>
			<p><label><input type="radio" name="action" value="insert" checked>Add</label></p>
			<p><label><input type="radio" name="action" value="delete">Delete</label></p>
			<p><label><input type="radio" name="action" value="update">Update</label></p>
			<button type="submit">Run</button>
		</form>
	</div>

<!--**************************************************-->

	<!-- Javascript -->
	<script src="dist/app.js"></script>

</body>

</html>