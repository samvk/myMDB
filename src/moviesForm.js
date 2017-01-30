/*jshint esnext: true */
/* global $*/

import Ajax from "simple-ajax";

const $moviesForm = $("#movies-form");

const url = $moviesForm.attr("action");
const method = $moviesForm.attr("method");

//let data = {};

let ajaxHandler = {
	url: url,
	method: method,
	data: $moviesForm.serialize()
};

let ajax = new Ajax(ajaxHandler);

$moviesForm.submit(function(e){
	e.preventDefault();

	ajax.on("success", event => {
		console.log(event);
		console.log(event.response);
		console.log(event.responseText);
	}).on("error", event => {
		console.log("error");
		console.table(event);
	}).on("complete", event => {
		console.log("complete");
		console.log(event.response);
		console.log(event.responseText);
	}).send();
});