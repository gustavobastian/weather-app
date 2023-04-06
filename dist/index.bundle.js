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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.mainContent{\\n    display: flex;\\n    resize: both;\\n    flex-direction: column;    \\n    background: rgb(59, 151, 59);\\n    height: 100vh;    \\n    position: relative;\\n    width: 100%;\\n    align-items: center;\\n}\\n.footer{\\n    display: flex;\\n    resize: both;\\n    flex-direction: row;    \\n    background: transparent;    \\n    width: 100%;    \\n    margin-bottom: 10%;\\n    padding-left: 5%;    \\n}\\n#headerPlace{\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    font-size: 25px;\\n    font-weight: bold;\\n    text-align: center;\\n    width: 100%;\\n    background: transparent;\\n}\\n.headerContent{\\n    display:flex;\\n}\\n#innerPlace{\\n    display: grid;    \\n    resize: both;\\n    grid-template-columns: 100%;\\n    grid-template-rows: 100%;    \\n    width: 80%;\\n    margin-left:10%;\\n    margin-right:10%;\\n    height: auto;\\n}\\n.contentForm{\\n    display:grid;    \\n    margin-top: 10px;\\n    grid-template-columns:  25% 25% 25% 25%;\\n    grid-row: 50% 50%;\\n    column-gap: 10px;    \\n    height: auto;\\n}\\n\\n.sendButton{\\n    display:flex;\\n    margin-top: 15px;\\n    margin-bottom: 10px;\\n    margin-left: 10px;\\n    margin-right: 10px;\\n    background: gold;\\n    text-align: center;\\n    align-items: center;\\n    height: 20px;\\n    width: 50%;\\n    border-radius: 50px;\\n}\\n\\n.cityClass{\\n    padding-left: 5px;\\n    margin-top: 0;\\n    padding-top: 0;\\n    height: 20px;\\n}\\n.weatherPlace{\\n    display:flex;\\n    flex-direction: column;\\n    margin-top: 50px;\\n    justify-content: center;\\n    align-items: center;\\n\\n    font-size: 35px;\\n    font-weight: bold;\\n    \\n\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/cityForm.js":
/*!*************************!*\
  !*** ./src/cityForm.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const api = __webpack_require__(/*! ./env */ \"./src/env.js\")\nconst weather = __webpack_require__(/*! ./weatherService.js */ \"./src/weatherService.js\")\n\nconst cityForm= function(update){\n    let city=\" \";\n    let state=\" \";\n    let country=\" \";\n    let localdata;\n    let localUpdate=update;\n\n    function createForm(localW){        \n        \n        console.log(\"here\");\n        let content=document.getElementById(\"innerPlace\")\n        \n        let contentForm=document.createElement('div')\n        contentForm.className=\"contentForm\";\n\n\n        let localCity = document.createElement('div')\n        localCity.className=\"cityClass\";\n        let cityText= document.createElement('p');\n        cityText.textContent=\"City:\";\n        localCity.appendChild(cityText);\n\n        let localState = document.createElement('div')\n        localState.className=\"cityClass\";\n        let stateText= document.createElement('p');\n        stateText.textContent=\"State:\";\n        localState.appendChild(stateText);\n\n        let localCountry =document.createElement('div');\n        localCountry.className=\"cityClass\";\n        let countryText= document.createElement('p');\n        countryText.textContent=\"Country:\";\n        localCountry.appendChild(countryText);\n\n        let sendButton =document.createElement('button');\n        sendButton.className=\"sendButton\";\n        sendButton.id=\"sendButton\";\n        sendButton.innerText=\"SEND\";\n\n\n        let localCityInput = document.createElement('input')\n        localCityInput.className=\"cityClass\";\n        localCityInput.type=\"text\";\n        localCityInput.id=\"localCityInput\";\n \n\n        let localStateInput = document.createElement('input')\n        localStateInput.className=\"cityClass\";\n        localStateInput.type=\"text\";\n        localStateInput.id=\"localStateInput\";\n        \n        let localCountryInput =document.createElement('input');\n        localCountryInput.className=\"cityClass\";\n        localCountryInput.type=\"text\";\n        localCountryInput.id=\"localCountryInput\";\n\n\n        contentForm.appendChild(localCity)\n        contentForm.appendChild(localState)\n        contentForm.appendChild(localCountry)\n        contentForm.appendChild(sendButton)\n        contentForm.appendChild(localCityInput)\n        contentForm.appendChild(localStateInput)\n        contentForm.appendChild(localCountryInput)\n\n        content.appendChild(contentForm)\n\n        //adding event listeners\n\n        let localSendButton = document.getElementById('sendButton');\n        localSendButton.addEventListener(\"click\",async ()=>{\n            console.log(\"clicked\")\n            let location= city +\",\"+state+\",\"+country;\n            \n            if(city==null || city==\" \")\n            { \n                location=\"london\";                \n            }\n            \n            \n            \n            localdata = await(localW.getData(location));\n            console.log(localdata);\n            \n            localUpdate.upGradeValues(localdata,0,location)\n        })\n\n        let localCityInputListener = document.getElementById('localCityInput');\n        localCityInputListener.addEventListener(\"change\",()=>{\n            console.log(\"city change\");\n            city=localCityInputListener.value;\n            console.log(\"city:\"+city);\n        })\n\n        let localStateInputListener = document.getElementById('localStateInput');\n        localStateInputListener.addEventListener(\"change\",()=>{\n            console.log(\"state change\")            \n            state=localStateInputListener.value;\n            console.log(\"state:\"+state);\n        })\n\n        let localCountryInputListener = document.getElementById('localCountryInput');\n        localCountryInputListener.addEventListener(\"change\",()=>{\n            console.log(\"country change\");\n            country=localCountryInputListener.value;\n            console.log(\"country:\"+country);\n        })\n\n    }   \n    \n    return {\n        createForm,\n        localdata\n    }\n}\n\nmodule.exports={cityForm};\n\n//# sourceURL=webpack://weather-app/./src/cityForm.js?");

/***/ }),

/***/ "./src/currentWeather.js":
/*!*******************************!*\
  !*** ./src/currentWeather.js ***!
  \*******************************/
/***/ ((module) => {

eval("\n\nconst currentWeather= function(imageService){\n    \n    async function upGradeValues(data,mode,location){\n        console.log(\"inside current\")  \n        console.log(JSON.stringify(data));\n\n        \n        \n        //variables for background\n        let localTemperature=data.temp_c;\n\n        let content=document.getElementById('weatherPlace')\n        content.innerHTML=\" \";\n        content.className=\"weatherPlace\";\n\n        let mylocation=location.split(\",\");\n\n        let locationElement=document.createElement('div')\n        locationElement.nameClass=\"temperature\";\n        let locationText=document.createTextNode(mylocation[0].toUpperCase())\n        locationElement.appendChild(locationText);\n\n        let temperature=document.createElement('div')\n        temperature.nameClass=\"temperature\";\n        let temperatureText;\n\n        if(mode==0)\n            temperatureText=document.createTextNode(\"TEMP:\"+data.temp_c+\"ºC\")\n        else    \n            temperatureText=document.createTextNode(\"TEMP:\"+data.temp_f+\"ºC\")\n\n        temperature.appendChild(temperatureText);\n\n        let pressure=document.createElement('div')\n        pressure.nameClass=\"temperature\";\n        let pressureText=document.createTextNode(\"AtmPress: \"+data.pressure_mb+\" mb\")\n        pressure.appendChild(pressureText);\n\n        let condition=document.createElement('div')\n        condition.nameClass=\"temperature\";\n        let conditionText=document.createTextNode(\"Condition: \"+data.condition.text)\n        condition.appendChild(conditionText);\n\n\n        let latestUpdate=document.createElement('div')\n        latestUpdate.nameClass=\"temperature\";\n        let latestUpdateText=document.createTextNode(\"Latest update: \"+data.last_updated)\n        latestUpdate.appendChild(latestUpdateText);\n\n        content.appendChild(locationElement);\n        content.appendChild(temperature);\n        content.appendChild(pressure);\n        content.appendChild(condition);\n        content.appendChild(latestUpdate);\n\n        let contentGeneral=document.getElementById('mainContent')\n        if(localTemperature<0){\n            contentGeneral.style.backgroundColor=\"white\";\n        }\n        if(localTemperature>=0 && localTemperature<=25){\n            contentGeneral.style.backgroundColor=\"rgb(0, 255, 234)\";\n        }\n        if(localTemperature>25){\n            contentGeneral.style.backgroundColor=\"red\";\n        }\n\n        let contentImage=document.getElementById('imgPlace')\n        contentImage.innerHTML=\" \";\n        let dataImage =await imageService.getImage(data.condition.text);\n        console.log(JSON.stringify(dataImage));\n        contentImage.src=(dataImage).data.images.original.url;\n        contentImage.style.height=\"200px\";\n        contentImage.style.marginTop=\"20px\";\n        \n    }\n\n    return{\n        upGradeValues\n    }\n\n}\n\nmodule.exports={currentWeather};\n\n//# sourceURL=webpack://weather-app/./src/currentWeather.js?");

/***/ }),

/***/ "./src/env.js":
/*!********************!*\
  !*** ./src/env.js ***!
  \********************/
/***/ ((module) => {

eval("const apiWeather=\"330a9685004747ae8e6112536230504\"\n\nconst apiGif=\"jrrd2bk04YAL9YbBmxprv1p9dnNdRUhE\"\n    \n\nmodule.exports={apiWeather,apiGif}\n\n//# sourceURL=webpack://weather-app/./src/env.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((module) => {

eval("const headerList= function(){\n    let content=document.getElementById(\"headerPlace\")        \n    let contentHeader=document.createElement('div')\n    contentHeader.className=\"headerContent\";\n    let textHeader=document.createElement('p')\n    textHeader.innerText=\"The Weather app\"\n    contentHeader.appendChild(textHeader);\n    content.appendChild(contentHeader);\n    return content;\n}\n\nmodule.exports={headerList}\n\n\n//# sourceURL=webpack://weather-app/./src/header.js?");

/***/ }),

/***/ "./src/imgService.js":
/*!***************************!*\
  !*** ./src/imgService.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const api = __webpack_require__(/*! ./env */ \"./src/env.js\")\n\n\n\nconst imgService = function () {\n    let Data=\"noData\";\n    const getImage = async function(word){\n        \n        const response = await fetch('https://api.giphy.com/v1/stickers/translate?api_key=jrrd2bk04YAL9YbBmxprv1p9dnNdRUhE&s='+word,\n        { mode: 'cors' });        \n        \n        Data = await (response.json());\n        return Data;\n        \n    }\n    return{\n        getImage\n    }\n}\n\nmodule.exports={imgService}\n\n\n//# sourceURL=webpack://weather-app/./src/imgService.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ \"./src/env.js\");\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_env__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _weatherService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherService.js */ \"./src/weatherService.js\");\n/* harmony import */ var _weatherService_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_weatherService_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _cityForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cityForm.js */ \"./src/cityForm.js\");\n/* harmony import */ var _cityForm_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cityForm_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_header_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _currentWeather_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./currentWeather.js */ \"./src/currentWeather.js\");\n/* harmony import */ var _currentWeather_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_currentWeather_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _imgService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgService */ \"./src/imgService.js\");\n/* harmony import */ var _imgService__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_imgService__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n \n\n\nlet mainContent=document.createElement('div')\nmainContent.id=\"mainContent\"\nmainContent.className=\"mainContent\";\n\nlet headerPlace=document.createElement('div');\nheaderPlace.id=\"headerPlace\";\nmainContent.appendChild(headerPlace);\n\nlet innerPlace=document.createElement('div');\ninnerPlace.id=\"innerPlace\";\nmainContent.appendChild(innerPlace);\n\nlet imgPlace=document.createElement('img');\nimgPlace.id=\"imgPlace\";\nmainContent.appendChild(imgPlace);\n\nlet weatherPlace=document.createElement('div');\nweatherPlace.id=\"weatherPlace\";\nmainContent.appendChild(weatherPlace);\n\n\n\ndocument.body.appendChild(mainContent);\n\nlet localW=(0,_weatherService_js__WEBPACK_IMPORTED_MODULE_1__.weather)();\nlet localHeader=(0,_header_js__WEBPACK_IMPORTED_MODULE_3__.headerList)();\nlet imageService=(0,_imgService__WEBPACK_IMPORTED_MODULE_5__.imgService)();\nlet update=(0,_currentWeather_js__WEBPACK_IMPORTED_MODULE_4__.currentWeather)(imageService);\n\n\n\nasync function intialCondition(){\n\n\n    let myCity= (0,_cityForm_js__WEBPACK_IMPORTED_MODULE_2__.cityForm)(update);\n    myCity.createForm(localW);\n    let mode=0;//mode = 0 ºC\n\n    let localdata = await(localW.getData(location));\n    \n    update.upGradeValues(localdata,mode,\"london\")\n\n    let content=document.getElementById('imgPlace')\n    content.innerHTML=\" \";\n    let dataImage =await imageService.getImage(\"hot\");\n    console.log(JSON.stringify(dataImage));\n    content.src=(dataImage).data.images.original.url;\n    content.style.height=\"200px\";\n    content.style.marginTop=\"20px\";\n    \n    \n\n}\n\nintialCondition();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;