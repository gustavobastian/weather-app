/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/env.js":
/*!********************!*\
  !*** ./src/env.js ***!
  \********************/
/***/ ((module) => {

eval("const apiWeather=\"330a9685004747ae8e6112536230504\"\n\nconst apiGif=\"jrrd2bk04YAL9YbBmxprv1p9dnNdRUhE\"\n    \n\nmodule.exports={apiWeather,apiGif}\n\n//# sourceURL=webpack://weather-app/./src/env.js?");

/***/ }),

/***/ "./src/imgService.js":
/*!***************************!*\
  !*** ./src/imgService.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const api = __webpack_require__(/*! ./env */ \"./src/env.js\")\n\n\n\nconst imgService = function () {\n    let Data=\"noData\";\n    const getImage = async function(word){\n        \n        const response = await fetch('https://api.giphy.com/v1/stickers/translate?api_key=jrrd2bk04YAL9YbBmxprv1p9dnNdRUhE&s='+word,\n        { mode: 'cors' });        \n        \n        Data = await (response.json());\n        return Data;\n        \n    }\n    return{\n        getImage\n    }\n}\n\nmodule.exports={imgService}\n\n\n//# sourceURL=webpack://weather-app/./src/imgService.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/imgService.js");
/******/ 	
/******/ })()
;