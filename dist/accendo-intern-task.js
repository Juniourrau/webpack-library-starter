(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("accendo-intern-task", [], factory);
	else if(typeof exports === 'object')
		exports["accendo-intern-task"] = factory();
	else
		root["accendo-intern-task"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var templateCard = function templateCard(data) {
  return ['<div style="width: 50%">\n    <div class="cardView layout" >\n    <img class="card-img-top" src="../src/img/card-bg.jpg" alt="Card Image">\n    <div class="card-body center">\n    <img src="../src/img/profile.svg" alt="profile photo" class="rounded-circle profile">\n    <p class="card-text name">' + data.name + '</p>\n    <p class="card-text ">' + data.gender + ',' + data.age + '</p>\n    <a data-toggle="collapse" href="#seeMore" role="button"\n    aria-expanded="false" aria-controls="seeMore" >\n    <img class="dropDown " src="../src/img/view-more.svg">\n    </a> \n    <div class="collapse" id="seeMore">\n    <p class="h5 ">Relationship</p>\n    <p class="card-text " style="">' + data.friends[0].relationship + '</p>\n    <p class="h5 ">Biography</p>\n    <p class="card-text ">' + data.biography + '</p>\n    </div>\n    </div>\n    </div>\n    </div>'].join('');
};

var templateList = function templateList(data) {
  return ['<ul class="list-group list-group-flush" style="width: 100%">\n    <li class="list-group-item" style="padding : 15px 0px;">\n    <div class="d-flex" >\n    <img src="../src/img/profile.svg" alt="profile photo" class="p-2 listProfile">\n    <p class="p-2 listName">' + data.name + '</p>\n    <p class="p-2 listAge">' + data.gender + ',' + data.age + '</p>\n    <img class="listDrop p-2 " src="../src/img/view-more.svg">\n    <div class="collapse" id="seeMore">\n    <p class="h5 ">Relationship</p>\n    <p class="card-text " style="">' + data.friends[0].relationship + '</p>\n    <p class="h5 ">Biography</p>\n    <p class="card-text ">' + data.biography + '</p>\n    </div>\n    </div>\n    </li>\n    </ul>'].join('');
};

function Profile(data) {
  var containerHtml = '';

  for (var i = 0; i < data.friends.length; i++) {
    containerHtml += templateCard(data.friends[i]);
  }
  document.getElementById('peopleList').innerHTML = containerHtml;
}

fetch('http://www.json-generator.com/api/json/get/cqHzMtkErS?indent=2').then(function (response) {
  return response.json();
}).then(function (res) {
  Profile(res.data);
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=accendo-intern-task.js.map