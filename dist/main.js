"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: rgb(235, 231, 231);\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\n#list {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  margin-top: 96px;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: #fff;\\r\\n  width: 60%;\\r\\n  border: 4px solid rgb(215, 213, 213);\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  font-size: 18px;\\r\\n  border-bottom: 1px solid rgb(235, 231, 231);\\r\\n  height: 48px;\\r\\n  margin: 0;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding-left: 24px;\\r\\n}\\r\\n\\r\\n.addTask {\\r\\n  border-top: 0;\\r\\n  border-left: 0;\\r\\n  border-right: 0;\\r\\n  border-bottom: 1px solid rgb(235, 231, 231);\\r\\n  height: 48px;\\r\\n  width: 90%;\\r\\n  padding-left: 24px;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.addBtn {\\r\\n  width: 10%;\\r\\n  height: 51px;\\r\\n  font-size: 24px;\\r\\n  background-color: rgb(235, 231, 231);\\r\\n}\\r\\n\\r\\n.addTaskDiv {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n}\\r\\n\\r\\nul {\\r\\n  margin: 0;\\r\\n  padding-left: 0;\\r\\n}\\r\\n\\r\\nli {\\r\\n  border-bottom: 1px solid rgb(235, 231, 231);\\r\\n  height: 48px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding-left: 24px;\\r\\n}\\r\\n\\r\\n.editing {\\r\\n  background-color: #fffeca;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  padding-left: 12px;\\r\\n  width: 80%;\\r\\n  height: 90%;\\r\\n  border: none;\\r\\n  font-size: 18px;\\r\\n  background: transparent;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.description.check {\\r\\n  text-decoration: line-through;\\r\\n  color: #a0a0a0;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  border-top: 0;\\r\\n  border-left: 0;\\r\\n  border-right: 0;\\r\\n  border-bottom: 1px solid rgb(235, 231, 231);\\r\\n  height: 48px;\\r\\n  font-size: 18px;\\r\\n  color: rgb(156, 154, 154);\\r\\n  background-color: rgb(235, 231, 231);\\r\\n}\\r\\n\\r\\nlabel {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.divMenu {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-around;\\r\\n  cursor: pointer;\\r\\n  padding-right: 12px;\\r\\n  justify-self: end;\\r\\n  margin-left: auto;\\r\\n}\\r\\n\\r\\n.divMenu.none {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.menu {\\r\\n  width: 2px;\\r\\n  height: 2px;\\r\\n  margin-bottom: 2px;\\r\\n  border: 1px solid black;\\r\\n  background: black;\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\n.deleteDiv {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.deleteDiv.active {\\r\\n  display: block;\\r\\n  cursor: pointer;\\r\\n  padding-right: 12px;\\r\\n  justify-self: end;\\r\\n  margin-left: auto;\\r\\n}\\r\\n\\r\\n.deleteDiv img {\\r\\n  width: 12px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_addFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addFunction.js */ \"./src/modules/addFunction.js\");\n/* harmony import */ var _modules_deleteFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/deleteFunction.js */ \"./src/modules/deleteFunction.js\");\n/* harmony import */ var _modules_editFunction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/editFunction.js */ \"./src/modules/editFunction.js\");\n/* harmony import */ var _modules_clearButton_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/clearButton.js */ \"./src/modules/clearButton.js\");\n/* harmony import */ var _modules_checkStatus_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/checkStatus.js */ \"./src/modules/checkStatus.js\");\n\n\n\n\n\n\n\nlet tasks = [];\n\nconst list = document.getElementById('list');\nconst container = document.createElement('div');\ncontainer.classList.add('container');\nconst title = document.createElement('h2');\ntitle.innerHTML = \"Today's To Do\";\nconst ulList = document.createElement('ul');\nconst addTaskDiv = document.createElement('div');\naddTaskDiv.classList.add('addTaskDiv');\nconst addTask = document.createElement('input');\naddTask.type = 'text';\naddTask.classList.add('addTask');\naddTask.placeholder = 'Add to your list ...';\nconst addBtn = document.createElement('button');\naddBtn.classList.add('addBtn');\naddBtn.innerText = '↵';\nconst clearBtn = document.createElement('button');\nclearBtn.innerHTML = 'Clear all completed';\nlist.appendChild(container);\ncontainer.appendChild(title);\ncontainer.appendChild(addTaskDiv);\ncontainer.appendChild(ulList);\ncontainer.appendChild(clearBtn);\naddTaskDiv.appendChild(addTask);\naddTaskDiv.appendChild(addBtn);\n\nconst display = (taskObj) => {\n  const liTask = document.createElement('li');\n  liTask.classList.add('index');\n  liTask.dataset.index = taskObj.index;\n  const check = document.createElement('input');\n  check.type = 'checkbox';\n  check.classList.add('checkbox');\n  const descriptionTask = document.createElement('input');\n  descriptionTask.classList.add('description');\n  descriptionTask.value = `${taskObj.description}`;\n  const divMenu = document.createElement('div');\n  divMenu.classList.add('divMenu');\n  const circle1 = document.createElement('circle');\n  circle1.classList.add('menu');\n  const circle2 = document.createElement('circle');\n  circle2.classList.add('menu');\n  const circle3 = document.createElement('circle');\n  circle3.classList.add('menu');\n  const divMenu2 = document.createElement('i');\n  divMenu2.classList.add('deleteDiv');\n  divMenu2.classList.add('fa-regular');\n  divMenu2.classList.add('fa-trash-can');\n\n  divMenu.appendChild(circle1);\n  divMenu.appendChild(circle2);\n  divMenu.appendChild(circle3);\n  liTask.appendChild(check);\n  liTask.appendChild(descriptionTask);\n  liTask.appendChild(divMenu);\n  liTask.appendChild(divMenu2);\n  ulList.appendChild(liTask);\n\n  divMenu.addEventListener('click', () => {\n    divMenu.classList.add('none');\n    divMenu2.classList.add('active');\n  });\n\n  (0,_modules_editFunction_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(descriptionTask, liTask, divMenu, divMenu2, taskObj, tasks);\n\n  divMenu2.addEventListener('click', () => {\n    (0,_modules_deleteFunction_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(liTask, tasks);\n  });\n\n  if (taskObj.completed === true) {\n    descriptionTask.classList.add('check');\n    check.checked = true;\n  }\n\n  (0,_modules_checkStatus_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(check, descriptionTask, taskObj, tasks);\n};\nclearBtn.addEventListener('click', () => {\n  const checkContainers = document.querySelectorAll('.index');\n  (0,_modules_clearButton_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(tasks, checkContainers);\n});\n\nwindow.addEventListener('load', () => {\n  tasks = JSON.parse(localStorage.getItem('taskList' || 0));\n  if (tasks === null) {\n    tasks = [];\n    return;\n  }\n  tasks.forEach((task) => display(task));\n});\n\naddTask.addEventListener('keypress', (e) => {\n  if (e.key === 'Enter') {\n    display((0,_modules_addFunction_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tasks, addTask));\n  }\n});\n\naddBtn.addEventListener('click', () => {\n  if (addTask.value !== '') {\n    display((0,_modules_addFunction_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tasks, addTask));\n  }\n});\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/addFunction.js":
/*!************************************!*\
  !*** ./src/modules/addFunction.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addToDo)\n/* harmony export */ });\nfunction addToDo(array, input) {\n  const task = {\n    description: input.value,\n    completed: false,\n    index: array.length + 1,\n  };\n  array.push(task);\n  input.value = '';\n  localStorage.setItem('taskList', JSON.stringify(array));\n  return task;\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/addFunction.js?");

/***/ }),

/***/ "./src/modules/checkStatus.js":
/*!************************************!*\
  !*** ./src/modules/checkStatus.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkStatus)\n/* harmony export */ });\nfunction checkStatus(box, description, object, array) {\n  box.addEventListener('change', () => {\n    if (box.checked) {\n      description.classList.add('check');\n      object.completed = true;\n    } else {\n      description.classList.remove('check');\n      object.completed = false;\n    }\n    localStorage.setItem('taskList', JSON.stringify(array));\n  });\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/checkStatus.js?");

/***/ }),

/***/ "./src/modules/clearButton.js":
/*!************************************!*\
  !*** ./src/modules/clearButton.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearAllCheck)\n/* harmony export */ });\n/* harmony import */ var _deleteFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteFunction.js */ \"./src/modules/deleteFunction.js\");\n\n\nfunction clearAllCheck(array, containers) {\n  containers.forEach((container) => {\n    if (container.children[0].checked) {\n      (0,_deleteFunction_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(container, array);\n    }\n  });\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/clearButton.js?");

/***/ }),

/***/ "./src/modules/deleteFunction.js":
/*!***************************************!*\
  !*** ./src/modules/deleteFunction.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ deleteTask)\n/* harmony export */ });\nfunction deleteTask(list, array) {\n  const number = list.dataset.index;\n  array.splice(number - 1, 1);\n  for (let i = number - 1; i < array.length; i += 1) {\n    array[i].index -= 1;\n  }\n  list.remove();\n  const indexElements = document.querySelectorAll('.index');\n  indexElements.forEach((element) => {\n    if (element.dataset.index >= number) {\n      element.dataset.index -= 1;\n    }\n  });\n  localStorage.setItem('taskList', JSON.stringify(array));\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/deleteFunction.js?");

/***/ }),

/***/ "./src/modules/editFunction.js":
/*!*************************************!*\
  !*** ./src/modules/editFunction.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ editTask)\n/* harmony export */ });\nfunction editTask(content, list, menu1, menu2, object, array) {\n  content.onfocus = () => {\n    list.classList.toggle('editing');\n    menu1.classList.add('none');\n    menu2.classList.add('active');\n  };\n\n  content.onblur = () => {\n    list.classList.toggle('editing');\n    object.description = content.value;\n    localStorage.setItem('taskList', JSON.stringify(array));\n    setTimeout(() => {\n      menu1.classList.remove('none');\n      menu2.classList.remove('active');\n    }, 100);\n  };\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/editFunction.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);