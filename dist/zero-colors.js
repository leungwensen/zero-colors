(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Color"] = factory();
	else
		root["Color"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  burntsienna: '#ea7e5d',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  gold: '#ffd700',
  goldenrod: '#daa520',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavender: '#e6e6fa',
  lavenderblush: '#fff0f5',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32'
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var namedColor = __webpack_require__(0);

var round = Math.round;

function isString(obj) {
  return typeof obj === 'string';
}
function lc(str) {
  return str.toLowerCase();
}

function confine(c, low, high) {
  c = Number(c);
  if (isFinite(c)) {
    if (c < low) {
      return low;
    }
    return c > high ? high : c;
  }
  return high;
}
function hue2rgb(m1, m2, h) {
  if (h < 0) {
    ++h;
  }
  if (h > 1) {
    --h;
  }
  var h6 = 6 * h;
  if (h6 < 1) {
    return m1 + (m2 - m1) * h6;
  }
  if (2 * h < 1) {
    return m2;
  }
  if (3 * h < 2) {
    return m1 + (m2 - m1) * (2 / 3 - h) * 6;
  }
  return m1;
}
function rgb2hsl(r, g, b, a) {
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = void 0;
  var s = void 0;
  var l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }
  return [h, s, l, a];
}

var Color = function () {
  // init props
  // r: 255,
  // g: 255,
  // b: 255,
  // a: 1,

  function Color( /* Array|String|Object */color) {
    _classCallCheck(this, Color);

    var me = this;
    if (color) {
      if (isString(color)) {
        me = Color.fromString(color);
      } else if (Array.isArray(color)) {
        me = Color.fromArray(color, me);
      } else {
        me.set(color.r, color.g, color.b, color.a);
        if (!(color instanceof Color)) {
          me.sanitize();
        }
      }
    } else {
      me.set(255, 255, 255, 1);
    }
    return me;
  }

  _createClass(Color, [{
    key: 'set',
    value: function set(r, g, b, a) {
      var me = this;
      me.r = r;
      me.g = g;
      me.b = b;
      me.a = a;
    }
  }, {
    key: 'sanitize',
    value: function sanitize() {
      var me = this;
      me.r = round(confine(me.r, 0, 255));
      me.g = round(confine(me.g, 0, 255));
      me.b = round(confine(me.b, 0, 255));
      me.a = confine(me.a, 0, 1);
      return me;
    }
  }, {
    key: 'toRgba',
    value: function toRgba() {
      var me = this;
      return [me.r, me.g, me.b, me.a];
    }
  }, {
    key: 'toHsla',
    value: function toHsla() {
      var me = this;
      return rgb2hsl(me.r, me.g, me.b, me.a);
    }
  }, {
    key: 'toHex',
    value: function toHex() {
      var me = this;
      var arr = ['r', 'g', 'b'].map(function (x) {
        var str = me[x].toString(16);
        return str.length < 2 ? '0' + str : str;
      });
      return '#' + arr.join('');
    }
  }, {
    key: 'toCss',
    value: function toCss( /* Boolean? */includeAlpha) {
      var me = this;
      var rgb = me.r + ',' + me.g + ',' + me.b;
      return includeAlpha ? 'rgba(' + rgb + ',' + me.a + ')' : 'rgb(' + rgb + ')';
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.toCss(true);
    }
  }, {
    key: 'toGrey',
    value: function toGrey() {
      var me = this;
      var g = round((me.r + me.g + me.b) / 3);
      return Color.makeGrey(g, me.a);
    }
  }]);

  return Color;
}();

Object.assign(Color, {
  hexByName: namedColor,

  makeGrey: function makeGrey( /* Number */g, /* Number? */a) {
    return Color.fromArray([g, g, g, a]);
  },
  blendColors: function blendColors( /* Color */start, /* Color */end, /* Number */weight, /* Color? */obj) {
    var t = obj || new Color();
    ['r', 'g', 'b', 'a'].forEach(function (x) {
      t[x] = start[x] + (end[x] - start[x]) * weight;
      if (x !== 'a') {
        t[x] = Math.round(t[x]);
      }
    });
    return t.sanitize();
  },
  fromHex: function fromHex( /* String */color) {
    var result = new Color();
    var bits = color.length === 4 ? 4 : 8;
    var mask = (1 << bits) - 1;

    color = Number('0x' + color.substr(1));

    if (isNaN(color)) {
      return null;
    }
    ['b', 'g', 'r'].forEach(function (x) {
      var c = color & mask;
      color >>= bits;
      result[x] = bits === 4 ? 17 * c : c;
    });
    return result;
  },
  fromRgb: function fromRgb( /* String */color) {
    var matches = lc(color).match(/^rgba?\(([\s.,0-9]+)\)/);
    return matches && Color.fromArray(matches[1].split(/\s*,\s*/));
  },
  fromHsl: function fromHsl( /* String */color) {
    var matches = lc(color).match(/^hsla?\(([\s.,0-9]+)\)/);
    if (matches) {
      var c = matches[2].split(/\s*,\s*/);
      var l = c.length;
      var H = (parseFloat(c[0]) % 360 + 360) % 360 / 360;
      var S = parseFloat(c[1]) / 100;
      var L = parseFloat(c[2]) / 100;
      var m2 = L <= 0.5 ? L * (S + 1) : L + S - L * S;
      var m1 = 2 * L - m2;
      var a = [hue2rgb(m1, m2, H + 1 / 3) * 256, hue2rgb(m1, m2, H) * 256, hue2rgb(m1, m2, H - 1 / 3) * 256, 1];
      if (l === 4) {
        a[3] = c[3];
      }
      return Color.fromArray(a);
    }
    return null;
  },
  fromArray: function fromArray( /* Array */arr) {
    var result = new Color();
    result.set(Number(arr[0]), Number(arr[1]), Number(arr[2]), Number(arr[3]));
    if (isNaN(result.a)) {
      result.a = 1;
    }
    return result.sanitize();
  },
  fromString: function fromString( /* String */str) {
    var s = Color.hexByName[str];
    return s && Color.fromHex(s) || Color.fromRgb(str) || Color.fromHex(str) || Color.fromHsl(str);
  }
});

Color.named = Color.namedColor = namedColor;

module.exports = Color;

/***/ })
/******/ ]);
});