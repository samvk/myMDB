/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _formSerialize = __webpack_require__(2);

	var _formSerialize2 = _interopRequireDefault(_formSerialize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

	var Movies = function () {
		function Movies() {
			_classCallCheck(this, Movies);
		}

		_createClass(Movies, null, [{
			key: "add",

			//create
			value: function add() {
				var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

				var defaults = {
					action: "insert",
					review: "Review coming soon.",
					rank: "66",
					imdb: "95",
					poster: "https://i.imgur.com/Z8QwU19.png",
					movieId: "30"
				};

				var data = Object.assign({}, defaults, options);
				console.log(data);

				return $.post({
					url: "php/moviesForm.php",
					type: "POST",
					data: data
				});
			}
			//update

		}, {
			key: "edit",
			value: function edit(movieId) {
				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				var defaults = {
					action: "update",
					movieId: movieId
				};

				var data = Object.assign({}, defaults, options);

				return $.post({
					url: "php/moviesForm.php",
					type: "POST",
					data: data
				});
			}
			//remove

		}, {
			key: "delete",
			value: function _delete(movieId) {
				var data = {
					action: "delete",
					movieId: movieId
				};

				return $.post({
					url: "php/moviesForm.php",
					type: "POST",
					data: data
				});
			}
		}]);

		return Movies;
	}();

	var $moviesForm = $("#movies-form");

	$moviesForm.submit(function (e) {
		e.preventDefault();

		$moviesForm[0].reset();
		var data = (0, _formSerialize2.default)($moviesForm[0], { hash: true });
		Movies.add(data);
	});

	function movieEl(elAttr) {
		return $(this).closest('article.movie').find(elAttr).text();;
	}

	$('[data-action="edit"]').click(function () {
		var movieId = movieEl.call(this, '.banner__id');
		var options = {
			review: 'PHP currently only accepts review. PHP needs to be rewitten to take these values as an associative array I think.'
		};
		//PHP currently only accepts review. PHP needs to be rewitten to take these values as an associative array I think.
		Movies.edit(movieId, options);
	});

	$('[data-action="delete"]').click(function () {
		var movieId = movieEl.call(this, '.banner__id');
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	// get successful control from form and assemble into object
	// http://www.w3.org/TR/html401/interact/forms.html#h-17.13.2

	// types which indicate a submit action and are not successful controls
	// these will be ignored
	var k_r_submitter = /^(?:submit|button|image|reset|file)$/i;

	// node names which could be successful controls
	var k_r_success_contrls = /^(?:input|select|textarea|keygen)/i;

	// Matches bracket notation.
	var brackets = /(\[[^\[\]]*\])/g;

	// serializes form fields
	// @param form MUST be an HTMLForm element
	// @param options is an optional argument to configure the serialization. Default output
	// with no options specified is a url encoded string
	//    - hash: [true | false] Configure the output type. If true, the output will
	//    be a js object.
	//    - serializer: [function] Optional serializer function to override the default one.
	//    The function takes 3 arguments (result, key, value) and should return new result
	//    hash and url encoded str serializers are provided with this module
	//    - disabled: [true | false]. If true serialize disabled fields.
	//    - empty: [true | false]. If true serialize empty fields
	function serialize(form, options) {
	    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) != 'object') {
	        options = { hash: !!options };
	    } else if (options.hash === undefined) {
	        options.hash = true;
	    }

	    var result = options.hash ? {} : '';
	    var serializer = options.serializer || (options.hash ? hash_serializer : str_serialize);

	    var elements = form && form.elements ? form.elements : [];

	    //Object store each radio and set if it's empty or not
	    var radio_store = Object.create(null);

	    for (var i = 0; i < elements.length; ++i) {
	        var element = elements[i];

	        // ingore disabled fields
	        if (!options.disabled && element.disabled || !element.name) {
	            continue;
	        }
	        // ignore anyhting that is not considered a success field
	        if (!k_r_success_contrls.test(element.nodeName) || k_r_submitter.test(element.type)) {
	            continue;
	        }

	        var key = element.name;
	        var val = element.value;

	        // we can't just use element.value for checkboxes cause some browsers lie to us
	        // they say "on" for value when the box isn't checked
	        if ((element.type === 'checkbox' || element.type === 'radio') && !element.checked) {
	            val = undefined;
	        }

	        // If we want empty elements
	        if (options.empty) {
	            // for checkbox
	            if (element.type === 'checkbox' && !element.checked) {
	                val = '';
	            }

	            // for radio
	            if (element.type === 'radio') {
	                if (!radio_store[element.name] && !element.checked) {
	                    radio_store[element.name] = false;
	                } else if (element.checked) {
	                    radio_store[element.name] = true;
	                }
	            }

	            // if options empty is true, continue only if its radio
	            if (!val && element.type == 'radio') {
	                continue;
	            }
	        } else {
	            // value-less fields are ignored unless options.empty is true
	            if (!val) {
	                continue;
	            }
	        }

	        // multi select boxes
	        if (element.type === 'select-multiple') {
	            val = [];

	            var selectOptions = element.options;
	            var isSelectedOptions = false;
	            for (var j = 0; j < selectOptions.length; ++j) {
	                var option = selectOptions[j];
	                var allowedEmpty = options.empty && !option.value;
	                var hasValue = option.value || allowedEmpty;
	                if (option.selected && hasValue) {
	                    isSelectedOptions = true;

	                    // If using a hash serializer be sure to add the
	                    // correct notation for an array in the multi-select
	                    // context. Here the name attribute on the select element
	                    // might be missing the trailing bracket pair. Both names
	                    // "foo" and "foo[]" should be arrays.
	                    if (options.hash && key.slice(key.length - 2) !== '[]') {
	                        result = serializer(result, key + '[]', option.value);
	                    } else {
	                        result = serializer(result, key, option.value);
	                    }
	                }
	            }

	            // Serialize if no selected options and options.empty is true
	            if (!isSelectedOptions && options.empty) {
	                result = serializer(result, key, '');
	            }

	            continue;
	        }

	        result = serializer(result, key, val);
	    }

	    // Check for all empty radio buttons and serialize them with key=""
	    if (options.empty) {
	        for (var key in radio_store) {
	            if (!radio_store[key]) {
	                result = serializer(result, key, '');
	            }
	        }
	    }

	    return result;
	}

	function parse_keys(string) {
	    var keys = [];
	    var prefix = /^([^\[\]]*)/;
	    var children = new RegExp(brackets);
	    var match = prefix.exec(string);

	    if (match[1]) {
	        keys.push(match[1]);
	    }

	    while ((match = children.exec(string)) !== null) {
	        keys.push(match[1]);
	    }

	    return keys;
	}

	function hash_assign(result, keys, value) {
	    if (keys.length === 0) {
	        result = value;
	        return result;
	    }

	    var key = keys.shift();
	    var between = key.match(/^\[(.+?)\]$/);

	    if (key === '[]') {
	        result = result || [];

	        if (Array.isArray(result)) {
	            result.push(hash_assign(null, keys, value));
	        } else {
	            // This might be the result of bad name attributes like "[][foo]",
	            // in this case the original `result` object will already be
	            // assigned to an object literal. Rather than coerce the object to
	            // an array, or cause an exception the attribute "_values" is
	            // assigned as an array.
	            result._values = result._values || [];
	            result._values.push(hash_assign(null, keys, value));
	        }

	        return result;
	    }

	    // Key is an attribute name and can be assigned directly.
	    if (!between) {
	        result[key] = hash_assign(result[key], keys, value);
	    } else {
	        var string = between[1];
	        // +var converts the variable into a number
	        // better than parseInt because it doesn't truncate away trailing
	        // letters and actually fails if whole thing is not a number
	        var index = +string;

	        // If the characters between the brackets is not a number it is an
	        // attribute name and can be assigned directly.
	        if (isNaN(index)) {
	            result = result || {};
	            result[string] = hash_assign(result[string], keys, value);
	        } else {
	            result = result || [];
	            result[index] = hash_assign(result[index], keys, value);
	        }
	    }

	    return result;
	}

	// Object/hash encoding serializer.
	function hash_serializer(result, key, value) {
	    var matches = key.match(brackets);

	    // Has brackets? Use the recursive assignment function to walk the keys,
	    // construct any missing objects in the result tree and make the assignment
	    // at the end of the chain.
	    if (matches) {
	        var keys = parse_keys(key);
	        hash_assign(result, keys, value);
	    } else {
	        // Non bracket notation can make assignments directly.
	        var existing = result[key];

	        // If the value has been assigned already (for instance when a radio and
	        // a checkbox have the same name attribute) convert the previous value
	        // into an array before pushing into it.
	        //
	        // NOTE: If this requirement were removed all hash creation and
	        // assignment could go through `hash_assign`.
	        if (existing) {
	            if (!Array.isArray(existing)) {
	                result[key] = [existing];
	            }

	            result[key].push(value);
	        } else {
	            result[key] = value;
	        }
	    }

	    return result;
	}

	// urlform encoding serializer
	function str_serialize(result, key, value) {
	    // encode newlines as \r\n cause the html spec says so
	    value = value.replace(/(\r)?\n/g, '\r\n');
	    value = encodeURIComponent(value);

	    // spaces should be '+' rather than '%20'.
	    value = value.replace(/%20/g, '+');
	    return result + (result ? '&' : '') + encodeURIComponent(key) + '=' + value;
	}

	module.exports = serialize;

/***/ }
/******/ ]);