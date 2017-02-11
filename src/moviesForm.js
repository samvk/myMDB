/*jshint esnext: true */
/* global $*/

import Movies from "moviesClass";
import serialize from "form-serialize";

const $moviesForm = $("#movies-form");

//closest element grabber helper function
function movieEl(elAttr){
	return $(this).closest('article.movie').find(elAttr);
}

$moviesForm.submit(function(e){
	e.preventDefault();

	let movieData = serialize($moviesForm[0], {hash: true});
	Movies.add(movieData);
	this.reset();
});

$('[data-action="show-edit"]').click(function(){
	let $editForm = movieEl.call(this, '.edit-form');
	$editForm.toggleClass('is-hidden');
});

$('.edit-form').submit(function(e){
	e.preventDefault();

	let movieId = movieEl.call(this, '.banner__id').text();
	let review = movieEl.call(this, '.new-review').val();
	let movieData = {
		review: review
	};
	//PHP currently only accepts review. PHP needs to be rewitten to take these values as an associative array I think.
	Movies.edit(movieId, movieData);
	this.reset();
});

$('[data-action="delete"]').click(function(){
	let movieId = movieEl.call(this, '.banner__id');
	Movies.delete(movieId);
});