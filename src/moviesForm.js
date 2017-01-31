/*jshint esnext: true */
/* global $*/

import Ajax from "simple-ajax";

const $moviesForm = $("#movies-form");

function listMovies() {
	let getMovie = new Ajax({
		url: "views/movie.php",
		method: "GET"
	});

	getMovie.on("success", event => {
		$("#movies-list").replaceWith(event.target.response);
	}).on("error", console.error
	).send();
};

const url = $moviesForm.attr("action");
const method = $moviesForm.attr("method");

function addAndListMovies(data){
	let postMovie = new Ajax({
		url: url,
		method: method,
		data: data,
		contentType: "application/x-www-form-urlencoded",
	});

	postMovie.on("success", event => {
		console.log(event.target.response);
	}).on("error", console.error
		 ).on("complete", ()=> {
		$moviesForm[0].reset();
		listMovies();
	}).send();
}

$moviesForm.submit(function(e){
	e.preventDefault();

	let data = $(this).serialize();
	addAndListMovies(data);
});