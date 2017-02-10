<?php require_once "php/dbconnection.php"; ?>

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
			background: #EBEBEB;
		}
	</style>

</head>

<body>
	<div id="movies-list">
		<?php include_once "views/echoMovies.php"; ?>
	</div>

	<div class="submit">
		<form id="movies-form" action="php/moviesForm.php" method="post">
			<p><label><input type="text" name="title"></label></p>
			<p><label><textarea name="review"></textarea></label></p>
			<hr>
			<p><label><input type="radio" name="order" value="id">Added</label></p>
			<p><label><input type="radio" name="order" value="title">Title</label></p>
			<p><label><input type="radio" name="order" value="review">Review</label></p>
			<p><label><input type="checkbox" name="by" value="DESC">Reverse?</label></p>
			<button type="submit">Run</button>
		</form>
	</div>

<!--**************************************************-->

	<!-- Javascript -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="dist/app.js"></script>

</body>

</html>