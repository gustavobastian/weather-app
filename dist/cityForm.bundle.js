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

/***/ "./src/cityForm.js":
/*!*************************!*\
  !*** ./src/cityForm.js ***!
  \*************************/
/***/ ((module) => {

eval("const cityForm= function(){\n\n    function createForm(){\n        console.log(\"here\");\n        let content=document.getElementById(\"innerPlace\")\n        \n        let contentForm=document.createElement('div')\n        contentForm.className=\"contentForm\";\n\n\n        let localCity = document.createElement('div')\n        localCity.className=\"cityClass\";\n        let cityText= document.createElement('p');\n        cityText.textContent=\"city\";\n        localCity.appendChild(cityText);\n\n        let localState = document.createElement('div')\n        localState.className=\"cityClass\";\n        let stateText= document.createElement('p');\n        stateText.textContent=\"state\";\n        localState.appendChild(stateText);\n\n        let localCountry =document.createElement('div');\n        localCountry.className=\"cityClass\";\n        let countryText= document.createElement('p');\n        countryText.textContent=\"country\";\n        localCountry.appendChild(countryText);\n\n        contentForm.appendChild(localCity)\n        contentForm.appendChild(localState)\n        contentForm.appendChild(localCountry)\n        content.appendChild(contentForm)\n    }   \n    \n    return {\n        createForm\n    }\n}\n\nmodule.exports={cityForm};\n\n//# sourceURL=webpack://weather-app/./src/cityForm.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/cityForm.js");
/******/ 	
/******/ })()
;