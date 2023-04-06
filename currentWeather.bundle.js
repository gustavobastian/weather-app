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

/***/ "./src/currentWeather.js":
/*!*******************************!*\
  !*** ./src/currentWeather.js ***!
  \*******************************/
/***/ ((module) => {

eval("\n\nconst currentWeather= function(imageService){\n    \n    async function upGradeValues(data,mode,location){\n        console.log(\"inside current\")  \n        console.log(JSON.stringify(data));\n\n        \n        \n        //variables for background\n        let localTemperature=data.temp_c;\n\n        let content=document.getElementById('weatherPlace')\n        content.innerHTML=\" \";\n        content.className=\"weatherPlace\";\n\n        let mylocation=location.split(\",\");\n\n        let locationElement=document.createElement('div')\n        locationElement.nameClass=\"temperature\";\n        let locationText=document.createTextNode(mylocation[0].toUpperCase())\n        locationElement.appendChild(locationText);\n\n        let temperature=document.createElement('div')\n        temperature.nameClass=\"temperature\";\n        let temperatureText;\n\n        if(mode==0)\n            temperatureText=document.createTextNode(\"TEMP:\"+data.temp_c+\"ºC\")\n        else    \n            temperatureText=document.createTextNode(\"TEMP:\"+data.temp_f+\"ºC\")\n\n        temperature.appendChild(temperatureText);\n\n        let pressure=document.createElement('div')\n        pressure.nameClass=\"temperature\";\n        let pressureText=document.createTextNode(\"AtmPress: \"+data.pressure_mb+\" mb\")\n        pressure.appendChild(pressureText);\n\n        let condition=document.createElement('div')\n        condition.nameClass=\"temperature\";\n        let conditionText=document.createTextNode(\"Condition: \"+data.condition.text)\n        condition.appendChild(conditionText);\n\n\n        let latestUpdate=document.createElement('div')\n        latestUpdate.nameClass=\"temperature\";\n        let latestUpdateText=document.createTextNode(\"Latest update: \"+data.last_updated)\n        latestUpdate.appendChild(latestUpdateText);\n\n        content.appendChild(locationElement);\n        content.appendChild(temperature);\n        content.appendChild(pressure);\n        content.appendChild(condition);\n        content.appendChild(latestUpdate);\n\n        let contentGeneral=document.getElementById('mainContent')\n        if(localTemperature<0){\n            contentGeneral.style.backgroundColor=\"white\";\n        }\n        if(localTemperature>=0 && localTemperature<=25){\n            contentGeneral.style.backgroundColor=\"rgb(155, 155, 154)\";\n        }\n        if(localTemperature>25){\n            contentGeneral.style.backgroundColor=\"red\";\n        }\n\n        let contentImage=document.getElementById('imgPlace')\n        contentImage.innerHTML=\" \";\n        let dataImage =await imageService.getImage(data.condition.text);\n        console.log(JSON.stringify(dataImage));\n        contentImage.src=(dataImage).data.images.original.url;\n        contentImage.style.height=\"200px\";\n        contentImage.style.marginTop=\"20px\";\n        \n    }\n\n    return{\n        upGradeValues\n    }\n\n}\n\nmodule.exports={currentWeather};\n\n//# sourceURL=webpack://weather-app/./src/currentWeather.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/currentWeather.js");
/******/ 	
/******/ })()
;