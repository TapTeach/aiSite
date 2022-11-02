/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./_src/scripts/polyfill.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_src/scripts/libs/polyfill.js":
/*!***************************************!*\
  !*** ./_src/scripts/libs/polyfill.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// forEach polyfill\nif ('NodeList' in window && !NodeList.prototype.forEach) {\n  console.info('polyfill for IE11');\n\n  NodeList.prototype.forEach = function (callback, thisArg) {\n    thisArg = thisArg || window;\n\n    for (var i = 0; i < this.length; i++) {\n      callback.call(thisArg, this[i], i, this);\n    }\n  };\n} // .find array polyfill\n\n\nif (!Array.prototype.find) {\n  Object.defineProperty(Array.prototype, 'find', {\n    value: function value(predicate) {\n      // 1. Let O be ? ToObject(this value).\n      if (this == null) {\n        throw new TypeError('\"this\" is null or not defined');\n      }\n\n      var o = Object(this); // 2. Let len be ? ToLength(? Get(O, \"length\")).\n\n      var len = o.length >>> 0; // 3. If IsCallable(predicate) is false, throw a TypeError exception.\n\n      if (typeof predicate !== 'function') {\n        throw new TypeError('predicate must be a function');\n      } // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.\n\n\n      var thisArg = arguments[1]; // 5. Let k be 0.\n\n      var k = 0; // 6. Repeat, while k < len\n\n      while (k < len) {\n        // a. Let Pk be ! ToString(k).\n        // b. Let kValue be ? Get(O, Pk).\n        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).\n        // d. If testResult is true, return kValue.\n        var kValue = o[k];\n\n        if (predicate.call(thisArg, kValue, k, o)) {\n          return kValue;\n        } // e. Increase k by 1.\n\n\n        k++;\n      } // 7. Return undefined.\n\n\n      return undefined;\n    },\n    configurable: true,\n    writable: true\n  });\n} // .from array polyfill\n\n\nif (!Array.from) {\n  Array.from = function () {\n    var toStr = Object.prototype.toString;\n\n    var isCallable = function isCallable(fn) {\n      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';\n    };\n\n    var toInteger = function toInteger(value) {\n      var number = Number(value);\n\n      if (isNaN(number)) {\n        return 0;\n      }\n\n      if (number === 0 || !isFinite(number)) {\n        return number;\n      }\n\n      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));\n    };\n\n    var maxSafeInteger = Math.pow(2, 53) - 1;\n\n    var toLength = function toLength(value) {\n      var len = toInteger(value);\n      return Math.min(Math.max(len, 0), maxSafeInteger);\n    }; // The length property of the from method is 1.\n\n\n    return function from(arrayLike\n    /*, mapFn, thisArg */\n    ) {\n      // 1. Let C be the this value.\n      var C = this; // 2. Let items be ToObject(arrayLike).\n\n      var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).\n\n      if (arrayLike == null) {\n        throw new TypeError('Array.from requires an array-like object - not null or undefined');\n      } // 4. If mapfn is undefined, then let mapping be false.\n\n\n      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;\n      var T;\n\n      if (typeof mapFn !== 'undefined') {\n        // 5. else\n        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.\n        if (!isCallable(mapFn)) {\n          throw new TypeError('Array.from: when provided, the second argument must be a function');\n        } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.\n\n\n        if (arguments.length > 2) {\n          T = arguments[2];\n        }\n      } // 10. Let lenValue be Get(items, \"length\").\n      // 11. Let len be ToLength(lenValue).\n\n\n      var len = toLength(items.length); // 13. If IsConstructor(C) is true, then\n      // 13. a. Let A be the result of calling the [[Construct]] internal method\n      // of C with an argument list containing the single item len.\n      // 14. a. Else, Let A be ArrayCreate(len).\n\n      var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.\n\n      var k = 0; // 17. Repeat, while k < len… (also steps a - h)\n\n      var kValue;\n\n      while (k < len) {\n        kValue = items[k];\n\n        if (mapFn) {\n          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);\n        } else {\n          A[k] = kValue;\n        }\n\n        k += 1;\n      } // 18. Let putStatus be Put(A, \"length\", len, true).\n\n\n      A.length = len; // 20. Return A.\n\n      return A;\n    };\n  }();\n} //method assign\n\n\nif (typeof Object.assign != 'function') {\n  // Must be writable: true, enumerable: false, configurable: true\n  Object.defineProperty(Object, \"assign\", {\n    value: function assign(target, varArgs) {\n      // .length of function is 2\n      'use strict';\n\n      if (target == null) {\n        // TypeError if undefined or null\n        throw new TypeError('Cannot convert undefined or null to object');\n      }\n\n      var to = Object(target);\n\n      for (var index = 1; index < arguments.length; index++) {\n        var nextSource = arguments[index];\n\n        if (nextSource != null) {\n          // Skip over if undefined or null\n          for (var nextKey in nextSource) {\n            // Avoid bugs when hasOwnProperty is shadowed\n            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {\n              to[nextKey] = nextSource[nextKey];\n            }\n          }\n        }\n      }\n\n      return to;\n    },\n    writable: true,\n    configurable: true\n  });\n} //.includes\n\n\nif (!String.prototype.includes) {\n  String.prototype.includes = function (search, start) {\n    if (typeof start !== 'number') {\n      start = 0;\n    }\n\n    if (start + search.length > this.length) {\n      return false;\n    } else {\n      return this.indexOf(search, start) !== -1;\n    }\n  };\n}\n\n//# sourceURL=webpack:///./_src/scripts/libs/polyfill.js?");

/***/ }),

/***/ "./_src/scripts/polyfill.js":
/*!**********************************!*\
  !*** ./_src/scripts/polyfill.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./libs/polyfill.js */ \"./_src/scripts/libs/polyfill.js\");\n\n//# sourceURL=webpack:///./_src/scripts/polyfill.js?");

/***/ })

/******/ });