/*jshint esnext: true */
/* global $*/

/*import Ajax from "simple-ajax";

const $moviesForm = $("#movies-form");

function listMovies(data) {
	let getMovie = new Ajax({
		url: `views/echoMovies.php?${data}`,
		method: "GET"
	});

	getMovie.on("success", event => {
		//$("#movies-list").replaceWith(event.target.response);
		$("#movies-list").html(event.target.response);
	}).on("error", console.error
	).send();
}

const url = $moviesForm.attr("action");
const method = $moviesForm.attr("method");

function addAndListMovies(data){
	let postMovie = new Ajax({
		url: url,
		method: method,
		data: data,
		contentType: "application/x-www-form-urlencoded"
	});

	postMovie.on("success", event => {
		console.log(event.target.response);
	}).on("error", console.error
		 ).on("complete", ()=> {
		$moviesForm[0].reset();
		listMovies(data);
	}).send();
}

$moviesForm.submit(function(e){
	e.preventDefault();

	let data = $(this).serialize();
	addAndListMovies(data);
});*/

/*let options = {
	title: "",
	review: "",
	rank: "",
	imdb: "",
	id: ""
};



static add(options) {
	if ( !options.title ) {
		throw Error("You must supply a movie title.");
	}
	let action = "insert";

	let title = options.title;
	let review = options.review || "Review coming soon.";
	let rank = options.rank || "66";
	let imdb = options.imdb || "95";
	let id = id;

	return $.post({

	});

}*/

class Movies {
	//create
	static add(movieData = {}) {
		let data = {
			action: "insert",
			movieData: movieData
		};
		console.log(data);

		return $.post({
			url: "php/moviesForm.php",
			type: "POST",
			data: data
		});

	}
	//update
	static edit(movieId, options = {}) {
		let data = {
			action: "update",
			movieId: movieId
		}

		return $.post({
			url: "php/moviesForm.php",
			type: "POST",
			data: data
		});

	}
	//remove
	static delete(movieId) {
		let data = {
			action: "delete",
			movieId: movieId
		};

		return $.post({
			url: "php/moviesForm.php",
			type: "POST",
			data: data
		});
	}
}



import serialize from "form-serialize";

const $moviesForm = $("#movies-form");

$moviesForm.submit(function(e){
	e.preventDefault();

	let data = serialize($moviesForm[0], {hash: true});
	Movies.add(data);

	$moviesForm[0].reset();
});


function movieEl(elAttr){
	return $(this).closest('article.movie').find(elAttr).text();;
}

$('[data-action="edit"]').click(function(){
	let movieId = movieEl.call(this, '.banner__id');
	let options = {
		review: 'PHP currently only accepts review. PHP needs to be rewitten to take these values as an associative array I think.'
	};
	//PHP currently only accepts review. PHP needs to be rewitten to take these values as an associative array I think.
	Movies.edit(movieId, options);
});

$('[data-action="delete"]').click(function(){
	let movieId = movieEl.call(this, '.banner__id');
	Movies.delete(movieId);
});







/*
function listMovies(data) {
	let getMovie = new Ajax({
		url: `views/echoMovies.php?${data}`,
		method: "GET"
	});

	getMovie.on("success", event => {
		//$("#movies-list").replaceWith(event.target.response);
		$("#movies-list").html(event.target.response);
	}).on("error", console.error
		 ).send();
}

const url = $moviesForm.attr("action");
const method = $moviesForm.attr("method");

function addAndListMovies(data){
	let postMovie = new Ajax({
		url: url,
		method: method,
		data: data,
		contentType: "application/x-www-form-urlencoded"
	});

	postMovie.on("success", event => {
		console.log(event.target.response);
	}).on("error", console.error
		 ).on("complete", ()=> {
		$moviesForm[0].reset();
		listMovies(data);
	}).send();
}

$moviesForm.submit(function(e){
	e.preventDefault();

	let data = $(this).serialize();
	addAndListMovies(data);
});
*/