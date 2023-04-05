/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["weatherService"],{

/***/ "./src/weatherService.js":
/*!*******************************!*\
  !*** ./src/weatherService.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const api = __webpack_require__(/*! ./env */ \"./src/env.js\")\n\n\n\nconst weather = function () {\n    let Data=\"noData\";\n    const getData = async function(location){\n        \n        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=' + api.apiWeather + '&q='+location,\n            { mode: 'cors' });        \n        \n        Data = await (response.json());\n        return Data.current;\n        \n    }\n    const getTempC = function(){\n        if(this.Data==\"noData\"){\n            return;\n        }\n        else{\n            return this.Data.temp_c;\n        }\n    }\n    const getTempF = function(){\n        if(this.Data==\"noData\"){\n            return;\n        }\n        else{\n            return this.Data.temp_F;\n        }\n    }\n    const getHumidity = function(){\n        if(this.Data==\"noData\"){\n            return;\n        }\n        else{\n            return this.Data.humidity;\n        }\n    }\n\n    const getCloud = function(){\n        if(this.Data==\"noData\"){\n            return;\n        }\n        else{\n            return this.Data.cloud;\n        }\n    }\n    const getPressureMB = function(){\n        if(this.Data==\"noData\"){\n            return;\n        }\n        else{\n            return this.Data.pressure_mb;\n        }\n    }\n\n    return {\n        Data,\n        getTempC,\n        getTempF,\n        getHumidity,\n        getCloud,\n        getPressureMB,\n        getData\n    };\n};\nmodule.exports={weather}\n\n//# sourceURL=webpack://weather-app/./src/weatherService.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/weatherService.js"));
/******/ }
]);