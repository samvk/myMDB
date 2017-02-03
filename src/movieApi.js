//delete //insert //update //forevery
import Ajax from "simple-ajax";

//CONFIG
let deleteURL = "php/moviesForm.php";
let insertURL = "php/moviesForm.php";


function deleter(data){

	data.action = "delete";

	$.ajax({
		url: deleteURL,
		data: data,
		method: "POST"
	});
}

function insert(data) {

	data.action = "insert";

	$.ajax({
		url: insertURL,
		data: data,
		method: "POST"
	});
}

function update(data) {

	data.action = "update";

	$.ajax({
		url: updateURL,
		data: data,
		method: "POST"
	});
}


//private
//options.action
//options.url
//options.data
//options.method
function ajaxCall(options){
	let method = options.method || "GET";

	return function(data){

		let requiredOptions = ["action", "url"];
		if ( Object.keys(options).sort().join() != requiredOptions.sort().join() ) {
			//make into error?
			console.log("You must supply the following properties: " + requiredOptions.join(", "));
		}

		data.action = options.action;

		$.ajax({
			url: options.url,
			data: data,
			method: method
		});

	}

};

let deleter = ajaxCall({
	action: "delete",
	url: "php/moviesForm.php",
	method: "POST"
});

let insert = ajaxCall({
	action: "insert",
	url: "php/moviesForm.php",
	method: "POST"
});

let update = ajaxCall({
	action: "update",
	url: "php/moviesForm.php",
	method: "POST"
});