// { "framework": "Vue"} 

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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {
  "container1": {
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10",
    "width": "730",
    "height": "200",
    "alignItems": "center",
    "justifyContent": "center",
    "border": "solid",
    "borderRadius": "10"
  },
  "container2": {
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10",
    "width": "300",
    "height": "300",
    "alignItems": "center",
    "justifyContent": "center",
    "border": "solid",
    "borderRadius": "10"
  },
  "direction": {
    "fontSize": "40",
    "color": "#FFFFFF"
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticStyle: {
      backgroundColor: "#3a3a3a"
    }
  }, [_c('div', {
    staticClass: ["container1"],
    staticStyle: {
      backgroundImage: "linear-gradient(to right,#a80077,#66ff00)"
    }
  }, [_c('text', {
    staticClass: ["direction"]
  }, [_vm._v("to right")])]), _c('div', {
    staticClass: ["container1"],
    staticStyle: {
      backgroundImage: "linear-gradient(to left,#a80077,#66ff00)"
    }
  }, [_c('text', {
    staticClass: ["direction"]
  }, [_vm._v("to left")])]), _c('div', {
    staticClass: ["container1"],
    staticStyle: {
      backgroundImage: "linear-gradient(to bottom,#a80077,#66ff00)"
    }
  }, [_c('text', {
    staticClass: ["direction"]
  }, [_vm._v("to bottom")])]), _c('div', {
    staticClass: ["container1"],
    staticStyle: {
      backgroundImage: "linear-gradient(to top,#a80077,#66ff00)"
    }
  }, [_c('text', {
    staticClass: ["direction"]
  }, [_vm._v("to top")])]), _c('div', {
    staticStyle: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    }
  }, [_c('div', {
    staticClass: ["container2"],
    staticStyle: {
      backgroundImage: "linear-gradient(to bottom right,#a80077,#66ff00)"
    }
  }, [_c('text', {
    staticClass: ["direction"]
  }, [_vm._v("to bottom right")])]), _c('div', {
    staticClass: ["container2"],
    staticStyle: {
      backgroundImage: "linear-gradient(to top left,#a80077,#66ff00)"
    }
  }, [_c('text', {
    staticClass: ["direction"]
  }, [_vm._v("to top left")])])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(0)
)

/* template */
var __vue_template__ = __webpack_require__(1)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/ponymuch/Documents/WeexDemoSwift/weexswift/src/components/HelloWorld.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e996428c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ })
/******/ ]);