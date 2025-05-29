/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["cityForm"],{

/***/ "./src/cityForm.js":
/*!*************************!*\
  !*** ./src/cityForm.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const api = __webpack_require__(/*! ./env */ \"./src/env.js\")\nconst weather = __webpack_require__(/*! ./weatherService.js */ \"./src/weatherService.js\")\n\nconst cityForm= function(update){\n    let city=\" \";\n    let state=\" \";\n    let country=\" \";\n    let localdata;\n    let localUpdate=update;\n\n    function createForm(localW){                \n        \n        let content=document.getElementById(\"innerPlace\")\n        \n        let contentForm=document.createElement('div')\n        contentForm.className=\"contentForm\";\n\n\n        let localCity = document.createElement('div')\n        localCity.className=\"cityClass\";\n        let cityText= document.createElement('p');\n        cityText.textContent=\"City:\";\n        localCity.appendChild(cityText);\n\n        let localState = document.createElement('div')\n        localState.className=\"cityClass\";\n        let stateText= document.createElement('p');\n        stateText.textContent=\"State:\";\n        localState.appendChild(stateText);\n\n        let localCountry =document.createElement('div');\n        localCountry.className=\"cityClass\";\n        let countryText= document.createElement('p');\n        countryText.textContent=\"Country:\";\n        localCountry.appendChild(countryText);\n\n        let sendButton =document.createElement('button');\n        sendButton.className=\"sendButton\";\n        sendButton.id=\"sendButton\";\n        sendButton.innerText=\"SEND\";\n\n\n        let localCityInput = document.createElement('input')\n        localCityInput.className=\"cityClass\";\n        localCityInput.type=\"text\";\n        localCityInput.id=\"localCityInput\";\n \n\n        let localStateInput = document.createElement('input')\n        localStateInput.className=\"cityClass\";\n        localStateInput.type=\"text\";\n        localStateInput.id=\"localStateInput\";\n        \n        let localCountryInput =document.createElement('input');\n        localCountryInput.className=\"cityClass\";\n        localCountryInput.type=\"text\";\n        localCountryInput.id=\"localCountryInput\";\n\n\n        contentForm.appendChild(localCity)\n        contentForm.appendChild(localState)\n        contentForm.appendChild(localCountry)\n        contentForm.appendChild(sendButton)\n        contentForm.appendChild(localCityInput)\n        contentForm.appendChild(localStateInput)\n        contentForm.appendChild(localCountryInput)\n\n        content.appendChild(contentForm)\n\n        //adding event listeners\n\n        let localSendButton = document.getElementById('sendButton');\n        localSendButton.addEventListener(\"click\", () => {\n            (async () => {\n                let location = city + \",\" + state + \",\" + country;\n                if (city == null || city == \" \") {\n                    location = \"london\";\n                }\n                localdata = await (localW.getData(location));\n                localUpdate.upGradeValues(localdata, 0, location)\n            })();\n        }\n        )\n\n        let localCityInputListener = document.getElementById('localCityInput');\n        localCityInputListener.addEventListener(\"change\",()=>{\n            city=localCityInputListener.value;           \n        })\n\n        let localStateInputListener = document.getElementById('localStateInput');\n        localStateInputListener.addEventListener(\"change\",()=>{\n                    state=localStateInputListener.value;            \n        })\n\n        let localCountryInputListener = document.getElementById('localCountryInput');\n        localCountryInputListener.addEventListener(\"change\",()=>{\n            country=localCountryInputListener.value;            \n        })\n\n    }   \n    \n    return {\n        createForm,\n        localdata\n    }\n}\n\nmodule.exports={cityForm};\n\n//# sourceURL=webpack://weather-app/./src/cityForm.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["weatherService"], () => (__webpack_exec__("./src/cityForm.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);