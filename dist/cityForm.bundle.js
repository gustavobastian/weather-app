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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const api = __webpack_require__(/*! ./env */ \"./src/env.js\")\nconst weather = __webpack_require__(/*! ./weatherService.js */ \"./src/weatherService.js\")\n\nconst cityForm= function(){\n    let city=\" \";\n    let state=\" \";\n    let country=\" \";\n\n    function createForm(localW){        \n        \n        console.log(\"here\");\n        let content=document.getElementById(\"innerPlace\")\n        \n        let contentForm=document.createElement('div')\n        contentForm.className=\"contentForm\";\n\n\n        let localCity = document.createElement('div')\n        localCity.className=\"cityClass\";\n        let cityText= document.createElement('p');\n        cityText.textContent=\"City:\";\n        localCity.appendChild(cityText);\n\n        let localState = document.createElement('div')\n        localState.className=\"cityClass\";\n        let stateText= document.createElement('p');\n        stateText.textContent=\"State:\";\n        localState.appendChild(stateText);\n\n        let localCountry =document.createElement('div');\n        localCountry.className=\"cityClass\";\n        let countryText= document.createElement('p');\n        countryText.textContent=\"Country:\";\n        localCountry.appendChild(countryText);\n\n        let sendButton =document.createElement('button');\n        sendButton.className=\"sendButton\";\n        sendButton.id=\"sendButton\";\n        sendButton.innerText=\"SEND\";\n\n\n        let localCityInput = document.createElement('input')\n        localCityInput.className=\"cityClass\";\n        localCityInput.type=\"text\";\n        localCityInput.id=\"localCityInput\";\n \n\n        let localStateInput = document.createElement('input')\n        localStateInput.className=\"cityClass\";\n        localStateInput.type=\"text\";\n        localStateInput.id=\"localStateInput\";\n        \n        let localCountryInput =document.createElement('input');\n        localCountryInput.className=\"cityClass\";\n        localCountryInput.type=\"text\";\n        localCountryInput.id=\"localCountryInput\";\n\n\n        contentForm.appendChild(localCity)\n        contentForm.appendChild(localState)\n        contentForm.appendChild(localCountry)\n        contentForm.appendChild(sendButton)\n        contentForm.appendChild(localCityInput)\n        contentForm.appendChild(localStateInput)\n        contentForm.appendChild(localCountryInput)\n\n        content.appendChild(contentForm)\n\n        //adding event listeners\n\n        let localSendButton = document.getElementById('sendButton');\n        localSendButton.addEventListener(\"click\",async ()=>{\n            console.log(\"clicked\")\n            let location= city +\",\"+state+\",\"+country;\n            if(city==null || city==\" \")\n            { \n                window.alert(\"no city, please check\");\n                return;\n            }\n            \n            let localdata;\n            try {\n            localdata = await(localW.getData(location));\n            console.log(localdata);\n            }\n            catch(e)\n            {\n                window.alert(e)\n            }\n\n        })\n\n        let localCityInputListener = document.getElementById('localCityInput');\n        localCityInputListener.addEventListener(\"change\",()=>{\n            console.log(\"city change\");\n            city=localCityInputListener.value;\n            console.log(\"city:\"+city);\n        })\n\n        let localStateInputListener = document.getElementById('localStateInput');\n        localStateInputListener.addEventListener(\"change\",()=>{\n            console.log(\"state change\")            \n            state=localStateInputListener.value;\n            console.log(\"state:\"+state);\n        })\n\n        let localCountryInputListener = document.getElementById('localCountryInput');\n        localCountryInputListener.addEventListener(\"change\",()=>{\n            console.log(\"country change\");\n            country=localCountryInputListener.value;\n            console.log(\"country:\"+country);\n        })\n\n    }   \n    \n    return {\n        createForm\n    }\n}\n\nmodule.exports={cityForm};\n\n//# sourceURL=webpack://weather-app/./src/cityForm.js?");

/***/ }),

/***/ "./src/env.js":
/*!********************!*\
  !*** ./src/env.js ***!
  \********************/
/***/ ((module) => {

eval("const apiWeather=\"330a9685004747ae8e6112536230504\"\n\nconst apiGif=\"jrrd2bk04YAL9YbBmxprv1p9dnNdRUhE\"\n    \n\nmodule.exports={apiWeather,apiGif}\n\n//# sourceURL=webpack://weather-app/./src/env.js?");

/***/ }),

/***/ "./src/weatherService.js":
/*!*******************************!*\
  !*** ./src/weatherService.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const api = __webpack_require__(/*! ./env */ \"./src/env.js\")\n\n\n\nconst weather = function () {\n    let Data=\"noData\";\n    const getData = async function(location){\n        \n        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=' + api.apiWeather + '&q='+location,\n            { mode: 'cors' });        \n        \n        Data = await (response.json());\n        return Data.current;\n        \n    }\n    const getTempC = function(){\n        if(this.Data==\"noData\"){\n            return;\n        }\n        else{\n            return this.Data.temp_c;\n        }\n    }\n    const getTempF = function(){\n        if(this.Data==\"noData\"){\n            return;\n        }\n        else{\n            return this.Data.temp_F;\n        }\n    }\n    const getHumidity = function(){\n        if(this.Data==\"noData\"){\n            return;\n        }\n        else{\n            return this.Data.humidity;\n        }\n    }\n\n    const getCloud = function(){\n        if(this.Data==\"noData\"){\n            return;\n        }\n        else{\n            return this.Data.cloud;\n        }\n    }\n    const getPressureMB = function(){\n        if(this.Data==\"noData\"){\n            return;\n        }\n        else{\n            return this.Data.pressure_mb;\n        }\n    }\n\n    return {\n        Data,\n        getTempC,\n        getTempF,\n        getHumidity,\n        getCloud,\n        getPressureMB,\n        getData\n    };\n};\nmodule.exports={weather}\n\n//# sourceURL=webpack://weather-app/./src/weatherService.js?");

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