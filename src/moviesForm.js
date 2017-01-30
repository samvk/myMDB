/*jshint esnext: true */
/* global $*/

import Ajax from "simple-ajax";

const $moviesForm = $("#movies-form");

const url = $moviesForm.attr("action");
const method = $moviesForm.attr("method");

//let data = {};



$moviesForm.submit(function(e){
	e.preventDefault();

	let data = $(this).serialize();

	let ajax = new Ajax({
		url: url,
		method: method,
		data: data
	});

	ajax.on("success", event => {
		console.log(event);
	}).on("error", event => {
		console.log("error");
		console.table(event);
	}).on("complete", event => {
		console.log("complete");
	}).send();
});