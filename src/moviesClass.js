export default class Movies {
	//create
	static add(movieData = {}) {
		let data = {
			action: "insert",
			movieData: movieData
		};

		return $.post({
			url: "php/moviesForm.php",
			type: "POST",
			data: data
		});

	}
	//update
	static edit(movieId, movieData = {}) {
		let data = {
			action: "update",
			movieId: movieId,
			movieData: movieData
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