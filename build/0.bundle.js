webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _help = __webpack_require__(4);

var _help2 = _interopRequireDefault(_help);

var _notifications = __webpack_require__(5);

var _notifications2 = _interopRequireDefault(_notifications);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var image = document.createElement('img');
  image.src = _notifications2.default;

  document.body.appendChild(image);
};

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function () {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for (var i = 0; i < this.length; i++) {
			var item = this[i];
			if (item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "img {\n  border: 10px solid black;\n}\n", ""]);

// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAkFBMVEVHcEzMzs7GyMjNz8/09PT39/fExsb19fXR09P////09PRqcHBnbW3///91e3vx8fHy8vLz8/OKj49+g4Pv7++EiYmcoKDw8PB/hITLzc2anp6IjY2KkJC8v792fHz8/PyLkJD4+Phkamqbn5+doaF3fX3Fx8d4fX11enrDxcVnbm719fW9v7+Pk5OGjIz9/PxDVHhKAAAACnRSTlMA/v7+k2X+af4CfJrnaAAAAMpJREFUGNNtUdlygzAQWygEKnvB3NA0kKN3c/z/39XHDp1OoydZtryyTET0SAkqU5amQmIXARmG+DRqPb48tMiCliKvleA5R+q8GTaFWlFskNkbkAet64KagygZvPd9x7x79Te0CSH2B84HxuHT0whUPTky822/X3h2vK/INH57mtR14Q9HR0OllrkX4O3oiC5X8Yu/p8CsKHalmcXSGBlksd0KsYMkklKAEBtJwv+KtQ1/95n3C/lTXR2q8yW3Ud9o3fTRWvL/7/gBPEkTG0eqLvsAAAAASUVORK5CYII="

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAz1BMVEVHcEz19fX29vb19fX19fX4+Pjy8vL////09PTs7Oz6+vr////////9/f319fX19fX5+fn5+Pj4+Pj6+vr39/f29vZqcHDi4+N5f3/19fX29vbz8/N6gIDy8vKvsrLl5ubm5+fx8vK4u7t1e3vx8fG1uLh7gICQlJSjp6fo6enk5eXCxMR6f393fX3p6up2fHzh4uKws7OytbW0t7fn5+eTl5fk5OSanp7q6+vGyMjv7++coKDQ0dGIjY3s7Oz39/ft7u6Pk5OFiYmPlJSFiopbVIPCAAAAFnRSTlMAG/A18eoUM/UOMxQqoIcz5OTk5Ojojgm6MQAAAMhJREFUGNN10dcSgjAQQNFVERBFrCkggopiA3vv5f+/yUSUCc54n5IzO3nIAkSpVqtlqZBIMpsIzUxJoFyWthGrTbO5r8ml5bzDsbMYlOXPXGXto08rp/qeTdW2GxTX39dTDDPmDgkdLxmG2vkgYv+qMVTck4j+QOGIGyI2cIRERPIfC79YACjqw+SbQ70INByhRKOQgn0Lkhg8bLDvkzEhvQh6hIwnTxuoO8UYO11uXYcdpy4FQ2Hl0/yTm2Y6z28GxOvwvHgdL8udH08rHZTpAAAAAElFTkSuQmCC"

/***/ }
]);