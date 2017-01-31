/*jshint esnext: true */
/* global $*/

import Ajax from "simple-ajax";

const $moviesForm = $("#movies-form");

const url = $moviesForm.attr("action");
const method = $moviesForm.attr("method");

$moviesForm.submit(function(e){
	e.preventDefault();

	let data = $(this).serialize();

	let ajax = new Ajax({
		url: url,
		method: method,
		data: data,
		contentType: "application/x-www-form-urlencoded",
	});

	ajax.on("success", event => {
		console.log(event.target.response);
		$("body").append(event.target.response);
	})
		.on("error", console.error
	)
		.send();
});