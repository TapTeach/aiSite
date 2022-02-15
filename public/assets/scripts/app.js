/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./_src/scripts/app.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_src/scripts/app.js":
/*!*****************************!*\
  !*** ./_src/scripts/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./modules/global.js */ \"./_src/scripts/modules/global.js\");\n\n__webpack_require__(/*! ./modules/modal.js */ \"./_src/scripts/modules/modal.js\");\n\n__webpack_require__(/*! ./modules/header.js */ \"./_src/scripts/modules/header.js\");\n\n__webpack_require__(/*! ./modules/contentful.js */ \"./_src/scripts/modules/contentful.js\");\n\n__webpack_require__(/*! ./modules/gallery.js */ \"./_src/scripts/modules/gallery.js\");\n\n__webpack_require__(/*! ./modules/masonry.js */ \"./_src/scripts/modules/masonry.js\");\n\n__webpack_require__(/*! ./modules/masonry-search.js */ \"./_src/scripts/modules/masonry-search.js\");\n\n__webpack_require__(/*! ./modules/carousel.js */ \"./_src/scripts/modules/carousel.js\");\n\n__webpack_require__(/*! ./modules/video.js */ \"./_src/scripts/modules/video.js\");\n\n__webpack_require__(/*! ./modules/tabs.js */ \"./_src/scripts/modules/tabs.js\");\n\n__webpack_require__(/*! ./modules/maps.js */ \"./_src/scripts/modules/maps.js\");\n\n__webpack_require__(/*! ./modules/accordion.js */ \"./_src/scripts/modules/accordion.js\");\n\n//# sourceURL=webpack:///./_src/scripts/app.js?");

/***/ }),

/***/ "./_src/scripts/libs/magnific.js":
/*!***************************************!*\
  !*** ./_src/scripts/libs/magnific.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n// Magnific Popup v1.1.0 by Dmitry Semenov\n// http://bit.ly/magnific-popup#build=inline+image+ajax+iframe+gallery+retina+imagezoom\n(function (a) {\n   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ \"jquery\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;\n})(function (a) {\n  var b = \"Close\",\n      c = \"BeforeClose\",\n      d = \"AfterClose\",\n      e = \"BeforeAppend\",\n      f = \"MarkupParse\",\n      g = \"Open\",\n      h = \"Change\",\n      i = \"mfp\",\n      j = \".\" + i,\n      k = \"mfp-ready\",\n      l = \"mfp-removing\",\n      m = \"mfp-prevent-close\",\n      n,\n      o = function o() {},\n      p = !!window.jQuery,\n      q,\n      r = a(window),\n      s,\n      t,\n      u,\n      v,\n      w = function w(a, b) {\n    n.ev.on(i + a + j, b);\n  },\n      x = function x(b, c, d, e) {\n    var f = document.createElement(\"div\");\n    return f.className = \"mfp-\" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f;\n  },\n      y = function y(b, c) {\n    n.ev.triggerHandler(i + b, c), n.st.callbacks && (b = b.charAt(0).toLowerCase() + b.slice(1), n.st.callbacks[b] && n.st.callbacks[b].apply(n, a.isArray(c) ? c : [c]));\n  },\n      z = function z(b) {\n    if (b !== v || !n.currTemplate.closeBtn) n.currTemplate.closeBtn = a(n.st.closeMarkup.replace(\"%title%\", n.st.tClose)), v = b;\n    return n.currTemplate.closeBtn;\n  },\n      A = function A() {\n    a.magnificPopup.instance || (n = new o(), n.init(), a.magnificPopup.instance = n);\n  },\n      B = function B() {\n    var a = document.createElement(\"p\").style,\n        b = [\"ms\", \"O\", \"Moz\", \"Webkit\"];\n    if (a.transition !== undefined) return !0;\n\n    while (b.length) {\n      if (b.pop() + \"Transition\" in a) return !0;\n    }\n\n    return !1;\n  };\n\n  o.prototype = {\n    constructor: o,\n    init: function init() {\n      var b = navigator.appVersion;\n      n.isLowIE = n.isIE8 = document.all && !document.addEventListener, n.isAndroid = /android/gi.test(b), n.isIOS = /iphone|ipad|ipod/gi.test(b), n.supportsTransition = B(), n.probablyMobile = n.isAndroid || n.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), s = a(document), n.popupsCache = {};\n    },\n    open: function open(b) {\n      var c;\n\n      if (b.isObj === !1) {\n        n.items = b.items.toArray(), n.index = 0;\n        var d = b.items,\n            e;\n\n        for (c = 0; c < d.length; c++) {\n          e = d[c], e.parsed && (e = e.el[0]);\n\n          if (e === b.el[0]) {\n            n.index = c;\n            break;\n          }\n        }\n      } else n.items = a.isArray(b.items) ? b.items : [b.items], n.index = b.index || 0;\n\n      if (n.isOpen) {\n        n.updateItemHTML();\n        return;\n      }\n\n      n.types = [], u = \"\", b.mainEl && b.mainEl.length ? n.ev = b.mainEl.eq(0) : n.ev = s, b.key ? (n.popupsCache[b.key] || (n.popupsCache[b.key] = {}), n.currTemplate = n.popupsCache[b.key]) : n.currTemplate = {}, n.st = a.extend(!0, {}, a.magnificPopup.defaults, b), n.fixedContentPos = n.st.fixedContentPos === \"auto\" ? !n.probablyMobile : n.st.fixedContentPos, n.st.modal && (n.st.closeOnContentClick = !1, n.st.closeOnBgClick = !1, n.st.showCloseBtn = !1, n.st.enableEscapeKey = !1), n.bgOverlay || (n.bgOverlay = x(\"bg\").on(\"click\" + j, function () {\n        n.close();\n      }), n.wrap = x(\"wrap\").attr(\"tabindex\", -1).on(\"click\" + j, function (a) {\n        n._checkIfClose(a.target) && n.close();\n      }), n.container = x(\"container\", n.wrap)), n.contentContainer = x(\"content\"), n.st.preloader && (n.preloader = x(\"preloader\", n.container, n.st.tLoading));\n      var h = a.magnificPopup.modules;\n\n      for (c = 0; c < h.length; c++) {\n        var i = h[c];\n        i = i.charAt(0).toUpperCase() + i.slice(1), n[\"init\" + i].call(n);\n      }\n\n      y(\"BeforeOpen\"), n.st.showCloseBtn && (n.st.closeBtnInside ? (w(f, function (a, b, c, d) {\n        c.close_replaceWith = z(d.type);\n      }), u += \" mfp-close-btn-in\") : n.wrap.append(z())), n.st.alignTop && (u += \" mfp-align-top\"), n.fixedContentPos ? n.wrap.css({\n        overflow: n.st.overflowY,\n        overflowX: \"hidden\",\n        overflowY: n.st.overflowY\n      }) : n.wrap.css({\n        top: r.scrollTop(),\n        position: \"absolute\"\n      }), (n.st.fixedBgPos === !1 || n.st.fixedBgPos === \"auto\" && !n.fixedContentPos) && n.bgOverlay.css({\n        height: s.height(),\n        position: \"absolute\"\n      }), n.st.enableEscapeKey && s.on(\"keyup\" + j, function (a) {\n        a.keyCode === 27 && n.close();\n      }), r.on(\"resize\" + j, function () {\n        n.updateSize();\n      }), n.st.closeOnContentClick || (u += \" mfp-auto-cursor\"), u && n.wrap.addClass(u);\n      var l = n.wH = r.height(),\n          m = {};\n\n      if (n.fixedContentPos && n._hasScrollBar(l)) {\n        var o = n._getScrollbarSize();\n\n        o && (m.marginRight = o);\n      }\n\n      n.fixedContentPos && (n.isIE7 ? a(\"body, html\").css(\"overflow\", \"hidden\") : m.overflow = \"hidden\");\n      var p = n.st.mainClass;\n      return n.isIE7 && (p += \" mfp-ie7\"), p && n._addClassToMFP(p), n.updateItemHTML(), y(\"BuildControls\"), a(\"html\").css(m), n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo || a(document.body)), n._lastFocusedEl = document.activeElement, setTimeout(function () {\n        n.content ? (n._addClassToMFP(k), n._setFocus()) : n.bgOverlay.addClass(k), s.on(\"focusin\" + j, n._onFocusIn);\n      }, 16), n.isOpen = !0, n.updateSize(l), y(g), b;\n    },\n    close: function close() {\n      if (!n.isOpen) return;\n      y(c), n.isOpen = !1, n.st.removalDelay && !n.isLowIE && n.supportsTransition ? (n._addClassToMFP(l), setTimeout(function () {\n        n._close();\n      }, n.st.removalDelay)) : n._close();\n    },\n    _close: function _close() {\n      y(b);\n      var c = l + \" \" + k + \" \";\n      n.bgOverlay.detach(), n.wrap.detach(), n.container.empty(), n.st.mainClass && (c += n.st.mainClass + \" \"), n._removeClassFromMFP(c);\n\n      if (n.fixedContentPos) {\n        var e = {\n          marginRight: \"\"\n        };\n        n.isIE7 ? a(\"body, html\").css(\"overflow\", \"\") : e.overflow = \"\", a(\"html\").css(e);\n      }\n\n      s.off(\"keyup\" + j + \" focusin\" + j), n.ev.off(j), n.wrap.attr(\"class\", \"mfp-wrap\").removeAttr(\"style\"), n.bgOverlay.attr(\"class\", \"mfp-bg\"), n.container.attr(\"class\", \"mfp-container\"), n.st.showCloseBtn && (!n.st.closeBtnInside || n.currTemplate[n.currItem.type] === !0) && n.currTemplate.closeBtn && n.currTemplate.closeBtn.detach(), n.st.autoFocusLast && n._lastFocusedEl && a(n._lastFocusedEl).focus(), n.currItem = null, n.content = null, n.currTemplate = null, n.prevHeight = 0, y(d);\n    },\n    updateSize: function updateSize(a) {\n      if (n.isIOS) {\n        var b = document.documentElement.clientWidth / window.innerWidth,\n            c = window.innerHeight * b;\n        n.wrap.css(\"height\", c), n.wH = c;\n      } else n.wH = a || r.height();\n\n      n.fixedContentPos || n.wrap.css(\"height\", n.wH), y(\"Resize\");\n    },\n    updateItemHTML: function updateItemHTML() {\n      var b = n.items[n.index];\n      n.contentContainer.detach(), n.content && n.content.detach(), b.parsed || (b = n.parseEl(n.index));\n      var c = b.type;\n      y(\"BeforeChange\", [n.currItem ? n.currItem.type : \"\", c]), n.currItem = b;\n\n      if (!n.currTemplate[c]) {\n        var d = n.st[c] ? n.st[c].markup : !1;\n        y(\"FirstMarkupParse\", d), d ? n.currTemplate[c] = a(d) : n.currTemplate[c] = !0;\n      }\n\n      t && t !== b.type && n.container.removeClass(\"mfp-\" + t + \"-holder\");\n      var e = n[\"get\" + c.charAt(0).toUpperCase() + c.slice(1)](b, n.currTemplate[c]);\n      n.appendContent(e, c), b.preloaded = !0, y(h, b), t = b.type, n.container.prepend(n.contentContainer), y(\"AfterChange\");\n    },\n    appendContent: function appendContent(a, b) {\n      n.content = a, a ? n.st.showCloseBtn && n.st.closeBtnInside && n.currTemplate[b] === !0 ? n.content.find(\".mfp-close\").length || n.content.append(z()) : n.content = a : n.content = \"\", y(e), n.container.addClass(\"mfp-\" + b + \"-holder\"), n.contentContainer.append(n.content);\n    },\n    parseEl: function parseEl(b) {\n      var c = n.items[b],\n          d;\n      c.tagName ? c = {\n        el: a(c)\n      } : (d = c.type, c = {\n        data: c,\n        src: c.src\n      });\n\n      if (c.el) {\n        var e = n.types;\n\n        for (var f = 0; f < e.length; f++) {\n          if (c.el.hasClass(\"mfp-\" + e[f])) {\n            d = e[f];\n            break;\n          }\n        }\n\n        c.src = c.el.attr(\"data-mfp-src\"), c.src || (c.src = c.el.attr(\"href\"));\n      }\n\n      return c.type = d || n.st.type || \"inline\", c.index = b, c.parsed = !0, n.items[b] = c, y(\"ElementParse\", c), n.items[b];\n    },\n    addGroup: function addGroup(a, b) {\n      var c = function c(_c) {\n        _c.mfpEl = this, n._openClick(_c, a, b);\n      };\n\n      b || (b = {});\n      var d = \"click.magnificPopup\";\n      b.mainEl = a, b.items ? (b.isObj = !0, a.off(d).on(d, c)) : (b.isObj = !1, b.delegate ? a.off(d).on(d, b.delegate, c) : (b.items = a, a.off(d).on(d, c)));\n    },\n    _openClick: function _openClick(b, c, d) {\n      var e = d.midClick !== undefined ? d.midClick : a.magnificPopup.defaults.midClick;\n      if (!e && (b.which === 2 || b.ctrlKey || b.metaKey || b.altKey || b.shiftKey)) return;\n      var f = d.disableOn !== undefined ? d.disableOn : a.magnificPopup.defaults.disableOn;\n      if (f) if (a.isFunction(f)) {\n        if (!f.call(n)) return !0;\n      } else if (r.width() < f) return !0;\n      b.type && (b.preventDefault(), n.isOpen && b.stopPropagation()), d.el = a(b.mfpEl), d.delegate && (d.items = c.find(d.delegate)), n.open(d);\n    },\n    updateStatus: function updateStatus(a, b) {\n      if (n.preloader) {\n        q !== a && n.container.removeClass(\"mfp-s-\" + q), !b && a === \"loading\" && (b = n.st.tLoading);\n        var c = {\n          status: a,\n          text: b\n        };\n        y(\"UpdateStatus\", c), a = c.status, b = c.text, n.preloader.html(b), n.preloader.find(\"a\").on(\"click\", function (a) {\n          a.stopImmediatePropagation();\n        }), n.container.addClass(\"mfp-s-\" + a), q = a;\n      }\n    },\n    _checkIfClose: function _checkIfClose(b) {\n      if (a(b).hasClass(m)) return;\n      var c = n.st.closeOnContentClick,\n          d = n.st.closeOnBgClick;\n      if (c && d) return !0;\n      if (!n.content || a(b).hasClass(\"mfp-close\") || n.preloader && b === n.preloader[0]) return !0;\n\n      if (b !== n.content[0] && !a.contains(n.content[0], b)) {\n        if (d && a.contains(document, b)) return !0;\n      } else if (c) return !0;\n\n      return !1;\n    },\n    _addClassToMFP: function _addClassToMFP(a) {\n      n.bgOverlay.addClass(a), n.wrap.addClass(a);\n    },\n    _removeClassFromMFP: function _removeClassFromMFP(a) {\n      this.bgOverlay.removeClass(a), n.wrap.removeClass(a);\n    },\n    _hasScrollBar: function _hasScrollBar(a) {\n      return (n.isIE7 ? s.height() : document.body.scrollHeight) > (a || r.height());\n    },\n    _setFocus: function _setFocus() {\n      (n.st.focus ? n.content.find(n.st.focus).eq(0) : n.wrap).focus();\n    },\n    _onFocusIn: function _onFocusIn(b) {\n      if (b.target !== n.wrap[0] && !a.contains(n.wrap[0], b.target)) return n._setFocus(), !1;\n    },\n    _parseMarkup: function _parseMarkup(b, c, d) {\n      var e;\n      d.data && (c = a.extend(d.data, c)), y(f, [b, c, d]), a.each(c, function (c, d) {\n        if (d === undefined || d === !1) return !0;\n        e = c.split(\"_\");\n\n        if (e.length > 1) {\n          var f = b.find(j + \"-\" + e[0]);\n\n          if (f.length > 0) {\n            var g = e[1];\n            g === \"replaceWith\" ? f[0] !== d[0] && f.replaceWith(d) : g === \"img\" ? f.is(\"img\") ? f.attr(\"src\", d) : f.replaceWith(a(\"<img>\").attr(\"src\", d).attr(\"class\", f.attr(\"class\"))) : f.attr(e[1], d);\n          }\n        } else b.find(j + \"-\" + c).html(d);\n      });\n    },\n    _getScrollbarSize: function _getScrollbarSize() {\n      if (n.scrollbarSize === undefined) {\n        var a = document.createElement(\"div\");\n        a.style.cssText = \"width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;\", document.body.appendChild(a), n.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a);\n      }\n\n      return n.scrollbarSize;\n    }\n  }, a.magnificPopup = {\n    instance: null,\n    proto: o.prototype,\n    modules: [],\n    open: function open(b, c) {\n      return A(), b ? b = a.extend(!0, {}, b) : b = {}, b.isObj = !0, b.index = c || 0, this.instance.open(b);\n    },\n    close: function close() {\n      return a.magnificPopup.instance && a.magnificPopup.instance.close();\n    },\n    registerModule: function registerModule(b, c) {\n      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);\n    },\n    defaults: {\n      disableOn: 0,\n      key: null,\n      midClick: !1,\n      mainClass: \"\",\n      preloader: !0,\n      focus: \"\",\n      closeOnContentClick: !1,\n      closeOnBgClick: !0,\n      closeBtnInside: !0,\n      showCloseBtn: !0,\n      enableEscapeKey: !0,\n      modal: !1,\n      alignTop: !1,\n      removalDelay: 0,\n      prependTo: null,\n      fixedContentPos: \"auto\",\n      fixedBgPos: \"auto\",\n      overflowY: \"auto\",\n      closeMarkup: '<button title=\"%title%\" type=\"button\" class=\"mfp-close\">&#215;</button>',\n      tClose: \"Close (Esc)\",\n      tLoading: \"Loading...\",\n      autoFocusLast: !0\n    }\n  }, a.fn.magnificPopup = function (b) {\n    A();\n    var c = a(this);\n    if (typeof b == \"string\") {\n      if (b === \"open\") {\n        var d,\n            e = p ? c.data(\"magnificPopup\") : c[0].magnificPopup,\n            f = parseInt(arguments[1], 10) || 0;\n        e.items ? d = e.items[f] : (d = c, e.delegate && (d = d.find(e.delegate)), d = d.eq(f)), n._openClick({\n          mfpEl: d\n        }, c, e);\n      } else n.isOpen && n[b].apply(n, Array.prototype.slice.call(arguments, 1));\n    } else b = a.extend(!0, {}, b), p ? c.data(\"magnificPopup\", b) : c[0].magnificPopup = b, n.addGroup(c, b);\n    return c;\n  };\n\n  var C = \"inline\",\n      D,\n      E,\n      F,\n      G = function G() {\n    F && (E.after(F.addClass(D)).detach(), F = null);\n  };\n\n  a.magnificPopup.registerModule(C, {\n    options: {\n      hiddenClass: \"hide\",\n      markup: \"\",\n      tNotFound: \"Content not found\"\n    },\n    proto: {\n      initInline: function initInline() {\n        n.types.push(C), w(b + \".\" + C, function () {\n          G();\n        });\n      },\n      getInline: function getInline(b, c) {\n        G();\n\n        if (b.src) {\n          var d = n.st.inline,\n              e = a(b.src);\n\n          if (e.length) {\n            var f = e[0].parentNode;\n            f && f.tagName && (E || (D = d.hiddenClass, E = x(D), D = \"mfp-\" + D), F = e.after(E).detach().removeClass(D)), n.updateStatus(\"ready\");\n          } else n.updateStatus(\"error\", d.tNotFound), e = a(\"<div>\");\n\n          return b.inlineElement = e, e;\n        }\n\n        return n.updateStatus(\"ready\"), n._parseMarkup(c, {}, b), c;\n      }\n    }\n  });\n\n  var H = \"ajax\",\n      I,\n      J = function J() {\n    I && a(document.body).removeClass(I);\n  },\n      K = function K() {\n    J(), n.req && n.req.abort();\n  };\n\n  a.magnificPopup.registerModule(H, {\n    options: {\n      settings: null,\n      cursor: \"mfp-ajax-cur\",\n      tError: '<a href=\"%url%\">The content</a> could not be loaded.'\n    },\n    proto: {\n      initAjax: function initAjax() {\n        n.types.push(H), I = n.st.ajax.cursor, w(b + \".\" + H, K), w(\"BeforeChange.\" + H, K);\n      },\n      getAjax: function getAjax(b) {\n        I && a(document.body).addClass(I), n.updateStatus(\"loading\");\n        var c = a.extend({\n          url: b.src,\n          success: function success(c, d, e) {\n            var f = {\n              data: c,\n              xhr: e\n            };\n            y(\"ParseAjax\", f), n.appendContent(a(f.data), H), b.finished = !0, J(), n._setFocus(), setTimeout(function () {\n              n.wrap.addClass(k);\n            }, 16), n.updateStatus(\"ready\"), y(\"AjaxContentAdded\");\n          },\n          error: function error() {\n            J(), b.finished = b.loadError = !0, n.updateStatus(\"error\", n.st.ajax.tError.replace(\"%url%\", b.src));\n          }\n        }, n.st.ajax.settings);\n        return n.req = a.ajax(c), \"\";\n      }\n    }\n  });\n\n  var L,\n      M = function M(b) {\n    if (b.data && b.data.title !== undefined) return b.data.title;\n    var c = n.st.image.titleSrc;\n\n    if (c) {\n      if (a.isFunction(c)) return c.call(n, b);\n      if (b.el) return b.el.attr(c) || \"\";\n    }\n\n    return \"\";\n  };\n\n  a.magnificPopup.registerModule(\"image\", {\n    options: {\n      markup: '<div class=\"mfp-figure\"><div class=\"mfp-close\"></div><figure><div class=\"mfp-img\"></div><figcaption><div class=\"mfp-bottom-bar\"><div class=\"mfp-title\"></div><div class=\"mfp-counter\"></div></div></figcaption></figure></div>',\n      cursor: \"mfp-zoom-out-cur\",\n      titleSrc: \"title\",\n      verticalFit: !0,\n      tError: '<a href=\"%url%\">The image</a> could not be loaded.'\n    },\n    proto: {\n      initImage: function initImage() {\n        var c = n.st.image,\n            d = \".image\";\n        n.types.push(\"image\"), w(g + d, function () {\n          n.currItem.type === \"image\" && c.cursor && a(document.body).addClass(c.cursor);\n        }), w(b + d, function () {\n          c.cursor && a(document.body).removeClass(c.cursor), r.off(\"resize\" + j);\n        }), w(\"Resize\" + d, n.resizeImage), n.isLowIE && w(\"AfterChange\", n.resizeImage);\n      },\n      resizeImage: function resizeImage() {\n        var a = n.currItem;\n        if (!a || !a.img) return;\n\n        if (n.st.image.verticalFit) {\n          var b = 0;\n          n.isLowIE && (b = parseInt(a.img.css(\"padding-top\"), 10) + parseInt(a.img.css(\"padding-bottom\"), 10)), a.img.css(\"max-height\", n.wH - b);\n        }\n      },\n      _onImageHasSize: function _onImageHasSize(a) {\n        a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y(\"ImageHasSize\", a), a.imgHidden && (n.content && n.content.removeClass(\"mfp-loading\"), a.imgHidden = !1));\n      },\n      findImageSize: function findImageSize(a) {\n        var b = 0,\n            c = a.img[0],\n            d = function d(e) {\n          L && clearInterval(L), L = setInterval(function () {\n            if (c.naturalWidth > 0) {\n              n._onImageHasSize(a);\n\n              return;\n            }\n\n            b > 200 && clearInterval(L), b++, b === 3 ? d(10) : b === 40 ? d(50) : b === 100 && d(500);\n          }, e);\n        };\n\n        d(1);\n      },\n      getImage: function getImage(b, c) {\n        var d = 0,\n            e = function e() {\n          b && (b.img[0].complete ? (b.img.off(\".mfploader\"), b === n.currItem && (n._onImageHasSize(b), n.updateStatus(\"ready\")), b.hasSize = !0, b.loaded = !0, y(\"ImageLoadComplete\")) : (d++, d < 200 ? setTimeout(e, 100) : f()));\n        },\n            f = function f() {\n          b && (b.img.off(\".mfploader\"), b === n.currItem && (n._onImageHasSize(b), n.updateStatus(\"error\", g.tError.replace(\"%url%\", b.src))), b.hasSize = !0, b.loaded = !0, b.loadError = !0);\n        },\n            g = n.st.image,\n            h = c.find(\".mfp-img\");\n\n        if (h.length) {\n          var i = document.createElement(\"img\");\n          i.className = \"mfp-img\", b.el && b.el.find(\"img\").length && (i.alt = b.el.find(\"img\").attr(\"alt\")), b.img = a(i).on(\"load.mfploader\", e).on(\"error.mfploader\", f), i.src = b.src, h.is(\"img\") && (b.img = b.img.clone()), i = b.img[0], i.naturalWidth > 0 ? b.hasSize = !0 : i.width || (b.hasSize = !1);\n        }\n\n        return n._parseMarkup(c, {\n          title: M(b),\n          img_replaceWith: b.img\n        }, b), n.resizeImage(), b.hasSize ? (L && clearInterval(L), b.loadError ? (c.addClass(\"mfp-loading\"), n.updateStatus(\"error\", g.tError.replace(\"%url%\", b.src))) : (c.removeClass(\"mfp-loading\"), n.updateStatus(\"ready\")), c) : (n.updateStatus(\"loading\"), b.loading = !0, b.hasSize || (b.imgHidden = !0, c.addClass(\"mfp-loading\"), n.findImageSize(b)), c);\n      }\n    }\n  });\n\n  var N,\n      O = function O() {\n    return N === undefined && (N = document.createElement(\"p\").style.MozTransform !== undefined), N;\n  };\n\n  a.magnificPopup.registerModule(\"zoom\", {\n    options: {\n      enabled: !1,\n      easing: \"ease-in-out\",\n      duration: 300,\n      opener: function opener(a) {\n        return a.is(\"img\") ? a : a.find(\"img\");\n      }\n    },\n    proto: {\n      initZoom: function initZoom() {\n        var a = n.st.zoom,\n            d = \".zoom\",\n            e;\n        if (!a.enabled || !n.supportsTransition) return;\n\n        var f = a.duration,\n            g = function g(b) {\n          var c = b.clone().removeAttr(\"style\").removeAttr(\"class\").addClass(\"mfp-animated-image\"),\n              d = \"all \" + a.duration / 1e3 + \"s \" + a.easing,\n              e = {\n            position: \"fixed\",\n            zIndex: 9999,\n            left: 0,\n            top: 0,\n            \"-webkit-backface-visibility\": \"hidden\"\n          },\n              f = \"transition\";\n          return e[\"-webkit-\" + f] = e[\"-moz-\" + f] = e[\"-o-\" + f] = e[f] = d, c.css(e), c;\n        },\n            h = function h() {\n          n.content.css(\"visibility\", \"visible\");\n        },\n            i,\n            j;\n\n        w(\"BuildControls\" + d, function () {\n          if (n._allowZoom()) {\n            clearTimeout(i), n.content.css(\"visibility\", \"hidden\"), e = n._getItemToZoom();\n\n            if (!e) {\n              h();\n              return;\n            }\n\n            j = g(e), j.css(n._getOffset()), n.wrap.append(j), i = setTimeout(function () {\n              j.css(n._getOffset(!0)), i = setTimeout(function () {\n                h(), setTimeout(function () {\n                  j.remove(), e = j = null, y(\"ZoomAnimationEnded\");\n                }, 16);\n              }, f);\n            }, 16);\n          }\n        }), w(c + d, function () {\n          if (n._allowZoom()) {\n            clearTimeout(i), n.st.removalDelay = f;\n\n            if (!e) {\n              e = n._getItemToZoom();\n              if (!e) return;\n              j = g(e);\n            }\n\n            j.css(n._getOffset(!0)), n.wrap.append(j), n.content.css(\"visibility\", \"hidden\"), setTimeout(function () {\n              j.css(n._getOffset());\n            }, 16);\n          }\n        }), w(b + d, function () {\n          n._allowZoom() && (h(), j && j.remove(), e = null);\n        });\n      },\n      _allowZoom: function _allowZoom() {\n        return n.currItem.type === \"image\";\n      },\n      _getItemToZoom: function _getItemToZoom() {\n        return n.currItem.hasSize ? n.currItem.img : !1;\n      },\n      _getOffset: function _getOffset(b) {\n        var c;\n        b ? c = n.currItem.img : c = n.st.zoom.opener(n.currItem.el || n.currItem);\n        var d = c.offset(),\n            e = parseInt(c.css(\"padding-top\"), 10),\n            f = parseInt(c.css(\"padding-bottom\"), 10);\n        d.top -= a(window).scrollTop() - e;\n        var g = {\n          width: c.width(),\n          height: (p ? c.innerHeight() : c[0].offsetHeight) - f - e\n        };\n        return O() ? g[\"-moz-transform\"] = g.transform = \"translate(\" + d.left + \"px,\" + d.top + \"px)\" : (g.left = d.left, g.top = d.top), g;\n      }\n    }\n  });\n\n  var P = \"iframe\",\n      Q = \"//about:blank\",\n      R = function R(a) {\n    if (n.currTemplate[P]) {\n      var b = n.currTemplate[P].find(\"iframe\");\n      b.length && (a || (b[0].src = Q), n.isIE8 && b.css(\"display\", a ? \"block\" : \"none\"));\n    }\n  };\n\n  a.magnificPopup.registerModule(P, {\n    options: {\n      markup: '<div class=\"mfp-iframe-scaler\"><div class=\"mfp-close\"></div><iframe class=\"mfp-iframe\" src=\"//about:blank\" frameborder=\"0\" allowfullscreen></iframe></div>',\n      srcAction: \"iframe_src\",\n      patterns: {\n        youtube: {\n          index: \"youtube.com\",\n          id: \"v=\",\n          src: \"//www.youtube.com/embed/%id%?autoplay=1\"\n        },\n        vimeo: {\n          index: \"vimeo.com/\",\n          id: \"/\",\n          src: \"//player.vimeo.com/video/%id%?autoplay=1\"\n        },\n        gmaps: {\n          index: \"//maps.google.\",\n          src: \"%id%&output=embed\"\n        }\n      }\n    },\n    proto: {\n      initIframe: function initIframe() {\n        n.types.push(P), w(\"BeforeChange\", function (a, b, c) {\n          b !== c && (b === P ? R() : c === P && R(!0));\n        }), w(b + \".\" + P, function () {\n          R();\n        });\n      },\n      getIframe: function getIframe(b, c) {\n        var d = b.src,\n            e = n.st.iframe;\n        a.each(e.patterns, function () {\n          if (d.indexOf(this.index) > -1) return this.id && (typeof this.id == \"string\" ? d = d.substr(d.lastIndexOf(this.id) + this.id.length, d.length) : d = this.id.call(this, d)), d = this.src.replace(\"%id%\", d), !1;\n        });\n        var f = {};\n        return e.srcAction && (f[e.srcAction] = d), n._parseMarkup(c, f, b), n.updateStatus(\"ready\"), c;\n      }\n    }\n  });\n\n  var S = function S(a) {\n    var b = n.items.length;\n    return a > b - 1 ? a - b : a < 0 ? b + a : a;\n  },\n      T = function T(a, b, c) {\n    return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);\n  };\n\n  a.magnificPopup.registerModule(\"gallery\", {\n    options: {\n      enabled: !1,\n      arrowMarkup: '<button title=\"%title%\" type=\"button\" class=\"mfp-arrow mfp-arrow-%dir%\"></button>',\n      preload: [0, 2],\n      navigateByImgClick: !0,\n      arrows: !0,\n      tPrev: \"Previous (Left arrow key)\",\n      tNext: \"Next (Right arrow key)\",\n      tCounter: \"%curr% of %total%\"\n    },\n    proto: {\n      initGallery: function initGallery() {\n        var c = n.st.gallery,\n            d = \".mfp-gallery\";\n        n.direction = !0;\n        if (!c || !c.enabled) return !1;\n        u += \" mfp-gallery\", w(g + d, function () {\n          c.navigateByImgClick && n.wrap.on(\"click\" + d, \".mfp-img\", function () {\n            if (n.items.length > 1) return n.next(), !1;\n          }), s.on(\"keydown\" + d, function (a) {\n            a.keyCode === 37 ? n.prev() : a.keyCode === 39 && n.next();\n          });\n        }), w(\"UpdateStatus\" + d, function (a, b) {\n          b.text && (b.text = T(b.text, n.currItem.index, n.items.length));\n        }), w(f + d, function (a, b, d, e) {\n          var f = n.items.length;\n          d.counter = f > 1 ? T(c.tCounter, e.index, f) : \"\";\n        }), w(\"BuildControls\" + d, function () {\n          if (n.items.length > 1 && c.arrows && !n.arrowLeft) {\n            var b = c.arrowMarkup,\n                d = n.arrowLeft = a(b.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, \"left\")).addClass(m),\n                e = n.arrowRight = a(b.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, \"right\")).addClass(m);\n            d.click(function () {\n              n.prev();\n            }), e.click(function () {\n              n.next();\n            }), n.container.append(d.add(e));\n          }\n        }), w(h + d, function () {\n          n._preloadTimeout && clearTimeout(n._preloadTimeout), n._preloadTimeout = setTimeout(function () {\n            n.preloadNearbyImages(), n._preloadTimeout = null;\n          }, 16);\n        }), w(b + d, function () {\n          s.off(d), n.wrap.off(\"click\" + d), n.arrowRight = n.arrowLeft = null;\n        });\n      },\n      next: function next() {\n        n.direction = !0, n.index = S(n.index + 1), n.updateItemHTML();\n      },\n      prev: function prev() {\n        n.direction = !1, n.index = S(n.index - 1), n.updateItemHTML();\n      },\n      goTo: function goTo(a) {\n        n.direction = a >= n.index, n.index = a, n.updateItemHTML();\n      },\n      preloadNearbyImages: function preloadNearbyImages() {\n        var a = n.st.gallery.preload,\n            b = Math.min(a[0], n.items.length),\n            c = Math.min(a[1], n.items.length),\n            d;\n\n        for (d = 1; d <= (n.direction ? c : b); d++) {\n          n._preloadItem(n.index + d);\n        }\n\n        for (d = 1; d <= (n.direction ? b : c); d++) {\n          n._preloadItem(n.index - d);\n        }\n      },\n      _preloadItem: function _preloadItem(b) {\n        b = S(b);\n        if (n.items[b].preloaded) return;\n        var c = n.items[b];\n        c.parsed || (c = n.parseEl(b)), y(\"LazyLoad\", c), c.type === \"image\" && (c.img = a('<img class=\"mfp-img\" />').on(\"load.mfploader\", function () {\n          c.hasSize = !0;\n        }).on(\"error.mfploader\", function () {\n          c.hasSize = !0, c.loadError = !0, y(\"LazyLoadError\", c);\n        }).attr(\"src\", c.src)), c.preloaded = !0;\n      }\n    }\n  });\n  var U = \"retina\";\n  a.magnificPopup.registerModule(U, {\n    options: {\n      replaceSrc: function replaceSrc(a) {\n        return a.src.replace(/\\.\\w+$/, function (a) {\n          return \"@2x\" + a;\n        });\n      },\n      ratio: 1\n    },\n    proto: {\n      initRetina: function initRetina() {\n        if (window.devicePixelRatio > 1) {\n          var a = n.st.retina,\n              b = a.ratio;\n          b = isNaN(b) ? b() : b, b > 1 && (w(\"ImageHasSize.\" + U, function (a, c) {\n            c.img.css({\n              \"max-width\": c.img[0].naturalWidth / b,\n              width: \"100%\"\n            });\n          }), w(\"ElementParse.\" + U, function (c, d) {\n            d.src = a.replaceSrc(d, b);\n          }));\n        }\n      }\n    }\n  }), A();\n});\n\n//# sourceURL=webpack:///./_src/scripts/libs/magnific.js?");

/***/ }),

/***/ "./_src/scripts/modules/accordion.js":
/*!*******************************************!*\
  !*** ./_src/scripts/modules/accordion.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("document.addEventListener('DOMContentLoaded', function () {\n  var debounce = __webpack_require__(/*! ../utils/debounce */ \"./_src/scripts/utils/debounce.js\");\n\n  var body = document.getElementsByTagName('body')[0];\n  var accordions = document.querySelectorAll('[data-faq-dt]');\n  var header = document.querySelector('[data-header]');\n\n  if (accordions) {\n    var headerHeight = function headerHeight() {\n      var height = header.clientHeight;\n      return height;\n    };\n\n    accordions.forEach(function (dt) {\n      dt.addEventListener('click', function () {\n        dt.classList.toggle('is-expanded'); // moves window up to top of accordion\n        //window.nbApp.utils.scrollToSelector(dt, headerHeight());\n        // remove class off other accordions so only 1 can be open at a time\n\n        accordions.forEach(function (accordion) {\n          if (accordion !== dt && accordion.classList.contains('is-expanded')) {\n            accordion.classList.remove('is-expanded');\n          }\n        });\n      }, false);\n    });\n  }\n});\n\n//# sourceURL=webpack:///./_src/scripts/modules/accordion.js?");

/***/ }),

/***/ "./_src/scripts/modules/carousel.js":
/*!******************************************!*\
  !*** ./_src/scripts/modules/carousel.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-slider/src/tiny-slider */ \"./node_modules/tiny-slider/src/tiny-slider.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var extend = __webpack_require__(/*! ../utils/extend */ \"./_src/scripts/utils/extend.js\");\n\n  var carousels = document.querySelectorAll('[data-carousel]');\n\n  if (carousels) {\n    carousels.forEach(function (carousel) {\n      var mergedSettings = {};\n      var slides = carousel.querySelector('[data-carousel-slides]');\n      var eleCarouselCounter = carousel.querySelector('[data-carousel-counter]');\n      var eleSlideIndex = carousel.querySelector('[data-carousel-index]');\n      var eleSlideTotal = carousel.querySelector('[data-carousel-total]');\n      var settingsOnCarousel = JSON.parse(carousel.getAttribute('data-carousel-options'));\n      var carouselControls = carousel.querySelector('[data-carousel-controls]');\n      var settingsDefault = {\n        container: slides,\n        // controlsText: ['<span>Previous Slide</span>', '<span>Next Slide</span>'],\n        controlsContainer: carouselControls,\n        nav: false,\n        speed: 500\n      };\n\n      function updateSlideIndex(info) {\n        var indexCurrent = info.index + 1;\n        eleSlideIndex.innerHTML = indexCurrent;\n      } // combine settings\n\n\n      mergedSettings = extend(settingsDefault, settingsOnCarousel); // initialize tiny-slider\n\n      carousel = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__[\"tns\"])(mergedSettings); // show total slides\n\n      if (eleSlideTotal && carousel) {\n        var slidesTotal = carousel.getInfo().slideCount;\n        eleSlideTotal.innerHTML = slidesTotal;\n      } // update slide index\n\n\n      if (eleCarouselCounter && eleSlideIndex && carousel) {\n        var carouselInfo = carousel.getInfo();\n\n        if (carouselInfo.slideBy > 1) {\n          eleCarouselCounter.setAttribute('aria-hidden', true);\n        } else {\n          carousel.events.on('indexChanged', updateSlideIndex);\n        }\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./_src/scripts/modules/carousel.js?");

/***/ }),

/***/ "./_src/scripts/modules/contentful.js":
/*!********************************************!*\
  !*** ./_src/scripts/modules/contentful.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("document.addEventListener('DOMContentLoaded', function () {\n  var contentful = __webpack_require__(/*! contentful */ \"./node_modules/contentful/dist/es-modules/contentful.js\");\n\n  var lazySizes = __webpack_require__(/*! lazysizes */ \"./node_modules/lazysizes/lazysizes.js\");\n\n  var SPACE_ID = 'kdudvxp32u1w';\n  var ACCESS_TOKEN = '2d283163c2b6a729a1294d941d2b84872199dd05c1e71a04d68fcbdf557676e8';\n  var contentfulPicture = document.querySelectorAll('[data-contenful-picture]');\n  var galleries = document.querySelectorAll('[data-contentful-gallery]');\n  var client = contentful.createClient({\n    space: SPACE_ID,\n    accessToken: ACCESS_TOKEN\n  }); // Template: Gallery => render single thumbnail\n\n  function renderSingleThumbnail(item) {\n    return \"<a href=\\\"\".concat(item.fields.file.url, \"?fit=fill&w=1400\\\" class=\\\"gallery__permalink\\\">\\n      <figure class=\\\"gallery__figure\\\">\\n        <div><img data-src=\\\"\").concat(item.fields.file.url, \"?fit=fill&h=200&w=200\\\" class=\\\"gallery__img lazyload thumb\\\"></div>\\n      </figure>\\n    </a>\");\n  } // Template: Gallery => render list of thumbnails\n\n\n  function renderThumbnails(list) {\n    var galleryList = [];\n    list.forEach(function (item) {\n      galleryList.push(renderSingleThumbnail(item));\n    });\n    return galleryList.join('\\n');\n  } // Contentful Picture\n\n\n  if (contentfulPicture) {\n    contentfulPicture.forEach(function (image) {\n      var source = image.querySelector('[data-contentful-img]');\n\n      if (source) {\n        var sourceImgId = source.getAttribute('data-img-id');\n        var sourceImgHeight = source.getAttribute('data-img-height');\n        var sourceImgWidth = source.getAttribute('data-img-width'); // Gets the id from the image element then returns the url\n\n        client.getAsset(sourceImgId).then(function (asset) {\n          var assetFile = asset.fields.file;\n          var assetImgUrl = assetFile.url;\n          var setImgHeight = sourceImgHeight || assetFile.details.image.height;\n          var setImgWidth = sourceImgWidth || assetFile.details.image.width;\n          var sourceFile = \"https:\".concat(assetImgUrl, \"?fit=fill&h=\").concat(setImgHeight, \"&w=\").concat(setImgWidth);\n          source.setAttribute('data-src', sourceFile);\n          lazySizes.loader.unveil(source);\n        }).catch(function () {\n          image.classList.add('hide');\n        });\n      }\n    });\n  } // Contentful Galleries\n\n\n  if (galleries) {\n    galleries.forEach(function (gallery) {\n      var galleryId = gallery.getAttribute('data-contentful-gallery-id');\n      client.getEntry(galleryId).then(function (entry) {\n        var photos = entry.fields.photos;\n        gallery.innerHTML = renderThumbnails(photos);\n        lightGallery(gallery, {\n          enableDrag: false,\n          download: true,\n          videoMaxWidth: '1200px'\n        });\n      }).catch();\n    });\n  }\n});\n\n//# sourceURL=webpack:///./_src/scripts/modules/contentful.js?");

/***/ }),

/***/ "./_src/scripts/modules/gallery.js":
/*!*****************************************!*\
  !*** ./_src/scripts/modules/gallery.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("document.addEventListener('DOMContentLoaded', function () {\n  var lazySizes = __webpack_require__(/*! lazysizes */ \"./node_modules/lazysizes/lazysizes.js\");\n\n  var galleries = document.querySelectorAll('[data-gallery]');\n\n  if (galleries) {\n    galleries.forEach(function (gallery) {\n      lightGallery(gallery, {\n        enableDrag: false,\n        download: true,\n        videoMaxWidth: '1200px'\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack:///./_src/scripts/modules/gallery.js?");

/***/ }),

/***/ "./_src/scripts/modules/global.js":
/*!****************************************!*\
  !*** ./_src/scripts/modules/global.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libs_magnific__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/magnific */ \"./_src/scripts/libs/magnific.js\");\n/* harmony import */ var _libs_magnific__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_magnific__WEBPACK_IMPORTED_MODULE_0__);\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var i = null;\n\n  var verge = __webpack_require__(/*! verge */ \"./node_modules/verge/verge.js\");\n\n  var hkjs = __webpack_require__(/*! hookahjs */ \"./node_modules/hookahjs/dist/hookah.umd.js\");\n\n  var lazySizes = __webpack_require__(/*! lazysizes */ \"./node_modules/lazysizes/lazysizes.js\");\n\n  var inview = document.querySelectorAll('[inview]');\n  var videobg = document.querySelectorAll('[data-video-bg]');\n  var triggerPoint = Math.abs(verge.viewportH()) * -1 * 0.1; // Turn off lazy loading images script\n  // window.lazySizesConfig = window.lazySizesConfig || {};\n  // window.lazySizesConfig.init = false;\n  // window.lazySizesConfig.customMedia = {\n  //   '--default': '(min-width: 310px)',\n  //   '--medium': '(min-width: 48em)',\n  //   '--large': '(min-width: 80em)'\n  // };\n\n  lazySizes.init();\n  hkjs.init(); // animate elements into view\n\n  function inviewAnimated() {\n    for (i = 0; i < inview.length; i += 1) {\n      if (verge.inViewport(inview[i], triggerPoint)) {\n        inview[i].classList.add('on');\n      }\n    }\n  } // play video when in view otherwise pause\n\n\n  function videoInView() {\n    if (videobg) {\n      videobg.forEach(function (bg) {\n        var video = bg.querySelector('[data-video-bgfile]');\n\n        if (verge.inViewport(bg, triggerPoint)) {\n          video.play();\n        } else {\n          video.pause();\n        }\n      });\n    }\n  }\n\n  function init() {\n    inviewAnimated();\n    videoInView();\n  } // Lazy loading script initializing when dom is loaded\n  // document.onreadystatechange = () => {\n  //   if (document.readyState === 'complete') {\n  //     // Initialize image lazy-loading with a slight delay to prevent <picture> element from not loading\n  //     setTimeout(() => {\n  //       lazySizes.init();\n  //     }, 500);\n  //   }\n  // };\n\n\n  init();\n  window.addEventListener('scroll', inviewAnimated);\n  window.addEventListener('scroll', videoInView);\n});\n\n//# sourceURL=webpack:///./_src/scripts/modules/global.js?");

/***/ }),

/***/ "./_src/scripts/modules/header.js":
/*!****************************************!*\
  !*** ./_src/scripts/modules/header.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("document.addEventListener('DOMContentLoaded', function () {\n  var verge = __webpack_require__(/*! verge */ \"./node_modules/verge/verge.js\");\n\n  var debounce = __webpack_require__(/*! ../utils/debounce */ \"./_src/scripts/utils/debounce.js\");\n\n  var body = document.getElementsByTagName('body')[0];\n  var hamburgerOpen = document.querySelectorAll('[data-hamburger-open]');\n  var hamburgerClose = document.querySelectorAll('[data-hamburger-close]');\n  var scrollMenuItems = document.querySelectorAll('[data-menu-scroll]');\n  var closeMenuItems = document.querySelectorAll('.js-close-menu');\n  var header = document.querySelector('[data-header]');\n  var navOpenClass = 'has-open-nav';\n\n  function navOpen() {\n    body.classList.add(navOpenClass);\n  }\n\n  function navClose() {\n    body.classList.remove(navOpenClass);\n  }\n\n  function headerHeight() {\n    var height = header.clientHeight;\n    header.style.setProperty('--headerHeight', \"\".concat(height, \"px\"));\n    return height;\n  }\n\n  function scrolledHeader() {\n    var offset = 0;\n    var lastPosition = 0;\n    var elementHeight = header.clientHeight;\n\n    function showHide() {\n      var newPosition = verge.scrollY();\n      var position = newPosition - lastPosition; // If we scrolled more than the element's height\n\n      if (offset + position > elementHeight) {\n        offset = elementHeight;\n        if (!header.classList.contains('is-scrolled')) header.classList.add('is-scrolled');\n      } else {\n        offset += position;\n        if (header.classList.contains('is-scrolled')) header.classList.remove('is-scrolled');\n      }\n\n      if (offset < 0) {\n        offset = 0;\n      }\n\n      lastPosition = newPosition;\n    }\n\n    showHide();\n  }\n\n  hamburgerOpen.forEach(function (element) {\n    element.addEventListener('click', function () {\n      navOpen();\n    }, false);\n  });\n  hamburgerClose.forEach(function (element) {\n    element.addEventListener('click', function () {\n      navClose();\n    }, false);\n  });\n  scrollMenuItems.forEach(function (element) {\n    element.addEventListener('click', function (event) {\n      event.preventDefault();\n      var panelId = element.getAttribute('href');\n      navClose();\n      window.nbApp.utils.scrollToSelector(panelId, headerHeight());\n    }, false);\n  });\n  closeMenuItems.forEach(function (element) {\n    element.addEventListener('click', function (event) {\n      event.preventDefault();\n      navClose();\n    }, false);\n  });\n\n  if (header) {\n    scrolledHeader();\n    headerHeight();\n    window.addEventListener('scroll', scrolledHeader);\n    window.addEventListener('resize', debounce(headerHeight, 250));\n  }\n});\n\n//# sourceURL=webpack:///./_src/scripts/modules/header.js?");

/***/ }),

/***/ "./_src/scripts/modules/maps.js":
/*!**************************************!*\
  !*** ./_src/scripts/modules/maps.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var google_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-maps */ \"./node_modules/google-maps/lib/index.js\");\n/* harmony import */ var google_maps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_maps__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_magnific__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/magnific */ \"./_src/scripts/libs/magnific.js\");\n/* harmony import */ var _libs_magnific__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_libs_magnific__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var options = {};\n  var loader = new google_maps__WEBPACK_IMPORTED_MODULE_0__[\"Loader\"]('AIzaSyBQLDZJiQA8SU8vtBN75PsRtbyu3hwWNes', options);\n  var mapContainers = document.querySelectorAll('.googleMap');\n\n  if (mapContainers) {\n    loader.load().then(function (google) {\n      function centerMap(map) {\n        var bounds = new google.maps.LatLngBounds(); // loop through all markers and create bounds\n\n        map.markers.forEach(function (marker) {\n          var latlng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());\n          bounds.extend(latlng);\n        });\n\n        if (map.markers.length === 1) {\n          map.setCenter(bounds.getCenter());\n          map.setZoom(15);\n        } else {\n          map.setCenter(bounds.getCenter());\n          map.setZoom(2.5);\n        }\n      }\n\n      function newMap(ele) {\n        var markers = document.querySelectorAll('.marker');\n        var locations = [];\n        var args = {\n          zoom: 5,\n          center: new google.maps.LatLng(0, 0),\n          streetViewControl: false,\n          mapTypeControl: false,\n          scrollwheel: false,\n          zoomControl: false,\n          gestureHandling: 'none',\n          fullscreenControl: false,\n          mapTypeId: google.maps.MapTypeId.ROADMAP,\n          styles: [{\n            elementType: 'geometry',\n            stylers: [{\n              color: '#f5f5f5'\n            }]\n          }, {\n            elementType: 'labels.icon',\n            stylers: [{\n              visibility: 'off'\n            }]\n          }, {\n            elementType: 'labels.text.fill',\n            stylers: [{\n              color: '#616161'\n            }]\n          }, {\n            elementType: 'labels.text.stroke',\n            stylers: [{\n              color: '#f5f5f5'\n            }]\n          }, {\n            featureType: 'administrative.land_parcel',\n            elementType: 'labels.text.fill',\n            stylers: [{\n              color: '#bdbdbd'\n            }]\n          }, {\n            featureType: 'poi',\n            elementType: 'geometry',\n            stylers: [{\n              color: '#eeeeee'\n            }]\n          }, {\n            featureType: 'poi',\n            elementType: 'labels.text.fill',\n            stylers: [{\n              color: '#757575'\n            }]\n          }, {\n            featureType: 'poi.park',\n            elementType: 'geometry',\n            stylers: [{\n              color: '#e5e5e5'\n            }]\n          }, {\n            featureType: 'poi.park',\n            elementType: 'labels.text.fill',\n            stylers: [{\n              color: '#9e9e9e'\n            }]\n          }, {\n            featureType: 'road',\n            elementType: 'geometry',\n            stylers: [{\n              color: '#ffffff'\n            }]\n          }, {\n            featureType: 'road.arterial',\n            elementType: 'labels.text.fill',\n            stylers: [{\n              color: '#757575'\n            }]\n          }, {\n            featureType: 'road.highway',\n            elementType: 'geometry',\n            stylers: [{\n              color: '#dadada'\n            }]\n          }, {\n            featureType: 'road.highway',\n            elementType: 'labels.text.fill',\n            stylers: [{\n              color: '#616161'\n            }]\n          }, {\n            featureType: 'road.local',\n            elementType: 'labels.text.fill',\n            stylers: [{\n              color: '#9e9e9e'\n            }]\n          }, {\n            featureType: 'transit.line',\n            elementType: 'geometry',\n            stylers: [{\n              color: '#e5e5e5'\n            }]\n          }, {\n            featureType: 'transit.station',\n            elementType: 'geometry',\n            stylers: [{\n              color: '#eeeeee'\n            }]\n          }, {\n            featureType: 'water',\n            elementType: 'geometry',\n            stylers: [{\n              color: '#c9c9c9'\n            }]\n          }, {\n            featureType: 'water',\n            elementType: 'labels.text.fill',\n            stylers: [{\n              color: '#9e9e9e'\n            }]\n          }]\n        };\n        markers.forEach(function (marker) {\n          locations.push({\n            coordinates: {\n              lat: parseFloat(marker.getAttribute('data-lat')),\n              lng: parseFloat(marker.getAttribute('data-lng'))\n            },\n            marker: marker.getAttribute('data-marker'),\n            id: marker.getAttribute('data-id')\n          });\n        }); // create map\n\n        var map = new google.maps.Map(ele, args); // add a markers reference\n\n        map.markers = []; // build out map markers\n\n        map.markers = locations.map(function (location, i) {\n          var completeMarker = new google.maps.Marker({\n            position: location.coordinates,\n            icon: location.marker,\n            id: location.id,\n            map: map\n          });\n          return completeMarker;\n        }); // open modal with details\n\n        map.markers.forEach(function (marker) {\n          google.maps.event.addListener(marker, 'click', function () {\n            if (marker.id) {\n              $.magnificPopup.open({\n                items: {\n                  src: \"#\".concat(marker.id)\n                },\n                type: 'inline',\n                removalDelay: 600,\n                preloader: false,\n                midClick: true,\n                closeOnContentClick: false,\n                closeBtnInside: true,\n                closeMarkup: '<button title=\"%title%\" type=\"button\" class=\"mfp-close\">&#215;</button>',\n                callbacks: {\n                  beforeOpen: function beforeOpen() {\n                    this.st.mainClass = 'mfp-zoom-in';\n                  }\n                }\n              });\n            }\n          });\n        }); // marker clustering\n\n        centerMap(map);\n        return map;\n      }\n\n      var map;\n      mapContainers.forEach(function (container) {\n        map = newMap(container);\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack:///./_src/scripts/modules/maps.js?");

/***/ }),

/***/ "./_src/scripts/modules/masonry-search.js":
/*!************************************************!*\
  !*** ./_src/scripts/modules/masonry-search.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _this = this;\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var throttle = __webpack_require__(/*! ../utils/throttle */ \"./_src/scripts/utils/throttle.js\");\n\n  var debounce = __webpack_require__(/*! ../utils/debounce */ \"./_src/scripts/utils/debounce.js\");\n\n  var browserCanUseCssVariables = __webpack_require__(/*! ../utils/supports-css-variables */ \"./_src/scripts/utils/supports-css-variables.js\");\n\n  var masonryWall = document.querySelector('[data-masonry-search-wall]');\n  var masonryLoader = document.querySelector('[data-masonry-loader]');\n  var header = document.querySelector('[data-header]');\n\n  if (masonryWall) {\n    var qsRegex;\n    var shuffleState = JSON.parse(masonryWall.getAttribute('data-masonry-search-shuffle'));\n    var elemSearch = document.querySelector('[data-masonry-search]');\n    var elemSearchInput = document.querySelector('[data-masonry-search-input]');\n    var btnClearSearch = document.querySelectorAll('[data-masonry-clear-search]');\n    var eleNoResults = document.querySelector('[data-masonry-noresults]');\n    var isoTope = new Isotope(masonryWall, {\n      itemSelector: '[data-masonry-search-item]',\n      layoutMode: 'packery',\n      packery: {\n        gutter: 0\n      },\n      percentPosition: true,\n      visibleStyle: {\n        transform: 'translateY(0)',\n        opacity: 1\n      },\n      hiddenStyle: {\n        transform: 'translateY(100px)',\n        opacity: 0\n      }\n    });\n\n    var searchStickyOffset = function searchStickyOffset() {\n      var offset = header.clientHeight;\n\n      if (browserCanUseCssVariables()) {\n        elemSearch.style.setProperty('--headerOffset', \"\".concat(offset, \"px\"));\n      } else {\n        elemSearch.style.top = \"\".concat(offset, \"px\");\n      }\n    };\n\n    var arangeComplete = function arangeComplete() {\n      isoTope.once('arrangeComplete', function (filteredItems) {\n        if (filteredItems.length < 1) {\n          eleNoResults.setAttribute('aria-hidden', false);\n        } else {\n          eleNoResults.setAttribute('aria-hidden', true);\n        }\n      });\n    };\n\n    var masonrySearch = function masonrySearch() {\n      qsRegex = new RegExp(elemSearchInput.value, 'gi');\n      isoTope.arrange({\n        filter: function filter() {\n          return qsRegex ? $(this).text().match(qsRegex) : true;\n        }\n      });\n      arangeComplete();\n    };\n\n    var masonrySearchClose = function masonrySearchClose() {\n      elemSearchInput.value = '';\n      elemSearchInput.classList.remove('hkjs--not-empty');\n      isoTope.arrange({\n        filter: '*'\n      });\n      arangeComplete();\n    };\n\n    if (shuffleState === true) {\n      isoTope.shuffle();\n    }\n\n    elemSearchInput.addEventListener('keyup', function () {\n      throttle(masonrySearch(_this), 250);\n    }, false);\n    btnClearSearch.forEach(function (btn) {\n      btn.addEventListener('click', function () {\n        masonrySearchClose();\n      }, false);\n    });\n    masonryLoader.classList.add('hide');\n    masonryWall.classList.add('is-loaded');\n    searchStickyOffset();\n    window.addEventListener('resize', debounce(searchStickyOffset, 250));\n  }\n});\n\n//# sourceURL=webpack:///./_src/scripts/modules/masonry-search.js?");

/***/ }),

/***/ "./_src/scripts/modules/masonry.js":
/*!*****************************************!*\
  !*** ./_src/scripts/modules/masonry.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', function () {\n  var masonryWall = document.querySelector('[data-masonry-wall]');\n  var masonryLoader = document.querySelector('[data-masonry-loader]');\n  var masonrySelect = document.querySelector('[data-masonry-select]');\n\n  if (masonryWall) {\n    var shuffleState = JSON.parse(masonryWall.getAttribute('data-masonry-shuffle'));\n    var isoTope = new Isotope('.masonry', {\n      itemSelector: '.masonry__item',\n      layoutMode: 'packery',\n      packery: {\n        gutter: 0\n      },\n      percentPosition: true,\n      visibleStyle: {\n        transform: 'translateY(0)',\n        opacity: 1\n      },\n      hiddenStyle: {\n        transform: 'translateY(100px)',\n        opacity: 0\n      }\n    });\n\n    var filterMasonry = function filterMasonry() {\n      var filterValue = masonrySelect.value;\n      isoTope.arrange({\n        filter: filterValue\n      });\n    };\n\n    if (shuffleState === true) {\n      isoTope.shuffle();\n    }\n\n    masonryLoader.classList.add('hide');\n    masonryWall.classList.add('is-loaded'); // bind filter on select change\n\n    masonrySelect.addEventListener('change', filterMasonry, false);\n  }\n});\n\n//# sourceURL=webpack:///./_src/scripts/modules/masonry.js?");

/***/ }),

/***/ "./_src/scripts/modules/modal.js":
/*!***************************************!*\
  !*** ./_src/scripts/modules/modal.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libs_magnific__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/magnific */ \"./_src/scripts/libs/magnific.js\");\n/* harmony import */ var _libs_magnific__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_magnific__WEBPACK_IMPORTED_MODULE_0__);\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var body = document.getElementsByTagName('body')[0];\n  var locationModals = document.querySelectorAll('[data-location-modal]');\n  $('.js-modal-video').magnificPopup({\n    type: 'iframe',\n    overflowY: 'scroll',\n    preloader: true,\n    midClick: true,\n    closeOnContentClick: false,\n    closeBtnInside: true,\n    callbacks: {\n      beforeOpen: function beforeOpen() {\n        this.st.mainClass = this.st.el.attr('data-effect');\n      }\n    }\n  });\n  $('.js-modal-inline').magnificPopup({\n    type: 'inline',\n    removalDelay: 100,\n    preloader: false,\n    midClick: true,\n    closeOnContentClick: false,\n    closeBtnInside: true,\n    closeMarkup: '<button title=\"%title%\" type=\"button\" class=\"mfp-close\">&#215;</button>',\n    callbacks: {\n      beforeOpen: function beforeOpen() {\n        this.st.mainClass = this.st.el.attr('data-effect');\n      }\n    }\n  });\n\n  if (locationModals) {\n    locationModals.forEach(function (modal) {\n      var showDetails = modal.querySelector('[data-location-show-detail]');\n      var hideDetails = modal.querySelector('[data-location-hide-detail]');\n\n      if (showDetails) {\n        showDetails.addEventListener('click', function () {\n          modal.classList.add('is-expanded');\n        }, false);\n      }\n\n      if (hideDetails) {\n        hideDetails.addEventListener('click', function () {\n          modal.classList.remove('is-expanded');\n        }, false);\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./_src/scripts/modules/modal.js?");

/***/ }),

/***/ "./_src/scripts/modules/tabs.js":
/*!**************************************!*\
  !*** ./_src/scripts/modules/tabs.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("document.addEventListener('DOMContentLoaded', function () {\n  var waitFor = __webpack_require__(/*! ../utils/wait-for */ \"./_src/scripts/utils/wait-for.js\");\n\n  var debounce = __webpack_require__(/*! ../utils/debounce */ \"./_src/scripts/utils/debounce.js\");\n\n  var getSiblings = __webpack_require__(/*! ../utils/get-siblings */ \"./_src/scripts/utils/get-siblings.js\");\n\n  var browserCanUseCssVariables = __webpack_require__(/*! ../utils/supports-css-variables */ \"./_src/scripts/utils/supports-css-variables.js\");\n\n  var lookingFor = '[data-tabs]';\n  waitFor(lookingFor, function () {\n    var header = document.querySelector('[data-header]');\n    var attrTablist = '[data-tabs--tablist]';\n    var attrPanels = '[data-tabs--panels]';\n    var tabs = document.querySelectorAll('[data-tabs]');\n    var tabsNav = document.querySelector('[data-tabs--nav]');\n    var tabsTablist = document.querySelectorAll(attrTablist);\n    var tabsTabs = document.querySelectorAll('[data-tabs--tab]');\n    var tabsPanels = document.querySelectorAll('[data-tabs--panel]');\n    var tabsSelect = document.querySelector('[data-tabs--select]');\n    var tabList = [];\n\n    function headerHeight() {\n      var height = header.clientHeight;\n      return height;\n    }\n\n    var tabsNavOffset = function tabsNavOffset() {\n      var offset = headerHeight();\n\n      if (browserCanUseCssVariables()) {\n        tabsNav.style.setProperty('--headerOffset', \"\".concat(offset, \"px\"));\n      } else {\n        tabsNav.style.top = \"\".concat(offset, \"px\");\n      }\n    }; // deactivate sibling tabs and panels\n\n\n    function deactivateSiblings(tab, panel) {\n      var tabSiblings = getSiblings(tab);\n      var panelSiblings = getSiblings(panel);\n      tabSiblings.forEach(function (sibling) {\n        sibling.setAttribute('aria-selected', 'false');\n        sibling.setAttribute('tabindex', -1);\n      });\n      panelSiblings.forEach(function (sibling) {\n        sibling.setAttribute('aria-hidden', 'true');\n      });\n    } // make sure first tab and panel are visible\n\n\n    function getFirstTabPanel() {\n      tabs.forEach(function (element) {\n        var firstTab = element.querySelector(attrTablist).children[0];\n        var firstPanel = element.querySelector(attrPanels).children[0];\n        firstTab.setAttribute('aria-selected', true);\n        firstTab.setAttribute('tabindex', 0);\n        firstPanel.setAttribute('aria-hidden', false);\n        deactivateSiblings(firstTab, firstPanel);\n      });\n    } // activate appropriate panel\n\n\n    function activatePanel(elem, lookForId) {\n      lookForId = typeof lookForId !== 'undefined' ? lookForId : true;\n      var panelId = lookForId ? elem.getAttribute('aria-controls') : elem;\n      var activatedTab = document.querySelector(\"[aria-controls=\\\"\".concat(panelId, \"\\\"]\"));\n      var activatedPanel = document.getElementById(panelId); // push hash change\n\n      window.history.replaceState('', '', \"#\".concat(panelId));\n      deactivateSiblings(activatedTab, activatedPanel);\n\n      if (activatedTab && activatedPanel) {\n        activatedPanel.setAttribute('aria-hidden', 'false');\n        activatedTab.setAttribute('aria-selected', 'true');\n        activatedTab.setAttribute('tabindex', 0);\n      } // activate appropriate select option\n\n\n      if (tabsSelect) {\n        tabsSelect.value = panelId;\n      } // smooth scroll to selection\n\n\n      window.nbApp.utils.scrollToSelector(tabs, headerHeight());\n    } // navigate through tabs via keys\n\n\n    function activatePanelByKey(event) {\n      var target = null;\n      var original = this;\n      var prev = this.previousElementSibling;\n      var next = this.nextElementSibling;\n\n      switch (event.keyCode) {\n        case 37:\n          target = prev;\n          break;\n\n        case 39:\n          target = next;\n          break;\n\n        default:\n          target = false;\n          break;\n      }\n\n      if (target) {\n        original.setAttribute('aria-selected', false);\n        original.setAttribute('tabindex', -1);\n        target.setAttribute('aria-selected', true);\n        target.setAttribute('tabindex', 0);\n        target.focus();\n        activatePanel(target);\n      }\n    } // when navigating with select\n\n\n    function activatePanelBySelect() {\n      var panelId = this.value;\n      activatePanel(panelId, false);\n    } // load appropriate panel by hash ID\n\n\n    function activatePanelByHash() {\n      var hash = document.location.hash;\n      var panelId = hash.replace('#', '');\n\n      if (hash && window.nbApp.utils.arrayIncludes(tabList, panelId)) {\n        activatePanel(panelId, false);\n      }\n    } // make sure all tablists have appropriate role\n\n\n    tabsTablist.forEach(function (list) {\n      list.setAttribute('role', 'tablist');\n    }); // iterate over tabs\n\n    tabsTabs.forEach(function (tab) {\n      tabList.push(tab.getAttribute('aria-controls'));\n      tab.setAttribute('role', 'tab');\n      tab.setAttribute('aria-selected', false);\n      tab.setAttribute('tabindex', -1);\n      tab.addEventListener('keydown', activatePanelByKey, false);\n      tab.addEventListener('click', function () {\n        activatePanel(tab);\n      }, false);\n    }); // iterate over tab-panels\n\n    tabsPanels.forEach(function (panel) {\n      panel.setAttribute('role', 'tabpanel');\n      panel.setAttribute('aria-hidden', true);\n    }); // initialize first tab and panel for each tabs component\n\n    getFirstTabPanel(); // on load activate a tab panel by hashtag if hashtag present\n\n    activatePanelByHash(); // for mobile select clicks\n\n    if (tabsSelect) {\n      tabsSelect.addEventListener('change', activatePanelBySelect, false);\n    } // activate panel as users browser forward/backwards\n\n\n    window.onpopstate = function () {\n      if (!window.nbApp.utils.hasHash()) getFirstTabPanel();\n    }; // on a hash changes, activate appropriate panel\n\n\n    window.onhashchange = activatePanelByHash;\n    tabsNavOffset();\n    window.addEventListener('resize', debounce(tabsNavOffset, 250));\n  });\n});\n\n//# sourceURL=webpack:///./_src/scripts/modules/tabs.js?");

/***/ }),

/***/ "./_src/scripts/modules/video.js":
/*!***************************************!*\
  !*** ./_src/scripts/modules/video.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', function () {\n  var videos = document.querySelectorAll('[data-video]');\n\n  if (videos.length >= 1) {\n    Plyr.setup(videos);\n  }\n});\n\n//# sourceURL=webpack:///./_src/scripts/modules/video.js?");

/***/ }),

/***/ "./_src/scripts/utils/debounce.js":
/*!****************************************!*\
  !*** ./_src/scripts/utils/debounce.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var _this = this;\n\nmodule.exports = function (func, wait, immediate) {\n  var timeout;\n  return function () {\n    var context = _this;\n\n    var later = function later() {\n      timeout = null;\n      if (!immediate) func.apply(context);\n    };\n\n    var callNow = immediate && !timeout;\n    clearTimeout(timeout);\n    timeout = setTimeout(later, wait);\n    if (callNow) func.apply(context);\n  };\n};\n\n//# sourceURL=webpack:///./_src/scripts/utils/debounce.js?");

/***/ }),

/***/ "./_src/scripts/utils/extend.js":
/*!**************************************!*\
  !*** ./_src/scripts/utils/extend.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\n * Merge two or more objects together.\n * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com\n * @param   {Boolean}  deep     If true, do a deep (or recursive) merge [optional]\n * @param   {Object}   objects  The objects to merge together\n * @returns {Object}            Merged values of defaults and options\n */\nmodule.exports = function extend() {\n  // Variables\n  var extended = {};\n  var deep = false;\n  var i = 0; // Check if a deep merge\n\n  if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {\n    deep = arguments[0];\n    i += 1;\n  } // Merge the object into the extended object\n\n\n  function merge(obj) {\n    Object.keys(obj).forEach(function (prop) {\n      if (Object.prototype.hasOwnProperty.call(obj, prop)) {\n        var property = obj[prop];\n\n        if (deep && Object.prototype.toString.call(property) === '[object Object]') {\n          extended[prop] = extend(extended[prop], property);\n        } else {\n          extended[prop] = property;\n        }\n      }\n    });\n  } // Loop through each object and conduct a merge\n\n\n  for (; i < arguments.length; i += 1) {\n    var obj = arguments[i];\n    merge(obj);\n  }\n\n  return extended;\n};\n\n//# sourceURL=webpack:///./_src/scripts/utils/extend.js?");

/***/ }),

/***/ "./_src/scripts/utils/get-siblings.js":
/*!********************************************!*\
  !*** ./_src/scripts/utils/get-siblings.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * getSiblings\n * @param  {String}   selector DOM element to find sibling elements\n * @return {Object}\n */\nmodule.exports = function (elem) {\n  var sibling = elem.parentNode.firstChild;\n  var siblings = [];\n\n  for (; sibling; sibling = sibling.nextSibling) {\n    if (sibling.nodeType === 1 && sibling !== elem) {\n      siblings.push(sibling);\n    }\n  }\n\n  return siblings;\n};\n\n//# sourceURL=webpack:///./_src/scripts/utils/get-siblings.js?");

/***/ }),

/***/ "./_src/scripts/utils/supports-css-variables.js":
/*!******************************************************!*\
  !*** ./_src/scripts/utils/supports-css-variables.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () {\n  var cssVarTest = window.CSS && window.CSS.supports && window.CSS.supports('--fake-var', 0);\n  return cssVarTest;\n};\n\n//# sourceURL=webpack:///./_src/scripts/utils/supports-css-variables.js?");

/***/ }),

/***/ "./_src/scripts/utils/throttle.js":
/*!****************************************!*\
  !*** ./_src/scripts/utils/throttle.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (fn, wait) {\n  var time = Date.now();\n  return function () {\n    if (time + wait - Date.now() < 0) {\n      fn();\n      time = Date.now();\n    }\n  };\n};\n\n//# sourceURL=webpack:///./_src/scripts/utils/throttle.js?");

/***/ }),

/***/ "./_src/scripts/utils/wait-for.js":
/*!****************************************!*\
  !*** ./_src/scripts/utils/wait-for.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * waitFor\n * @param  {String}   selector DOM element to check for on every page load\n * @param  {Function} callback The code to execute when the element is on the page\n * @return {Boolean}\n */\nmodule.exports = function (selector, callback) {\n  if (document.querySelectorAll(selector).length > 0) {\n    callback();\n  }\n};\n\n//# sourceURL=webpack:///./_src/scripts/utils/wait-for.js?");

/***/ }),

/***/ 0:
/*!********************!*\
  !*** os (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///os_(ignored)?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;\n\n//# sourceURL=webpack:///external_%22jQuery%22?");

/***/ })

/******/ });