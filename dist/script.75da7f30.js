// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"C:/Users/mussi/AppData/Roaming/npm/node_modules/parcel-bundler/node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}
(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }
  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  }
  // if setTimeout wasn't available but was latter defined
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  }
  // if clearTimeout wasn't available but was latter defined
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
};

// v8 likes predictible objects
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};
process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function (name) {
  return [];
};
process.binding = function (name) {
  throw new Error('process.binding is not supported');
};
process.cwd = function () {
  return '/';
};
process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};
process.umask = function () {
  return 0;
};
},{}],"node_modules/@daily-co/daily-js/dist/daily-esm.js":[function(require,module,exports) {
var global = arguments[3];
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DAILY_TRACK_STATE_SENDABLE = exports.DAILY_TRACK_STATE_PLAYABLE = exports.DAILY_TRACK_STATE_OFF = exports.DAILY_TRACK_STATE_LOADING = exports.DAILY_TRACK_STATE_INTERRUPTED = exports.DAILY_TRACK_STATE_BLOCKED = exports.DAILY_STATE_NEW = exports.DAILY_STATE_LEFT = exports.DAILY_STATE_JOINING = exports.DAILY_STATE_JOINED = exports.DAILY_STATE_ERROR = exports.DAILY_RECEIVE_SETTINGS_BASE_KEY = exports.DAILY_RECEIVE_SETTINGS_ALL_PARTICIPANTS_KEY = exports.DAILY_FATAL_ERROR_NO_ROOM = exports.DAILY_FATAL_ERROR_NOT_ALLOWED = exports.DAILY_FATAL_ERROR_NBF_TOKEN = exports.DAILY_FATAL_ERROR_NBF_ROOM = exports.DAILY_FATAL_ERROR_MEETING_FULL = exports.DAILY_FATAL_ERROR_EXP_TOKEN = exports.DAILY_FATAL_ERROR_EXP_ROOM = exports.DAILY_FATAL_ERROR_EOL = exports.DAILY_FATAL_ERROR_EJECTED = exports.DAILY_FATAL_ERROR_CONNECTION = exports.DAILY_EVENT_WAITING_PARTICIPANT_UPDATED = exports.DAILY_EVENT_WAITING_PARTICIPANT_REMOVED = exports.DAILY_EVENT_WAITING_PARTICIPANT_ADDED = exports.DAILY_EVENT_TRANSCRIPTION_STOPPED = exports.DAILY_EVENT_TRANSCRIPTION_STARTED = exports.DAILY_EVENT_TRANSCRIPTION_MSG = exports.DAILY_EVENT_TRANSCRIPTION_ERROR = exports.DAILY_EVENT_TRACK_STOPPED = exports.DAILY_EVENT_TRACK_STARTED = exports.DAILY_EVENT_THEME_UPDATED = exports.DAILY_EVENT_STARTED_CAMERA = exports.DAILY_EVENT_REMOTE_MEDIA_PLAYER_UPDATED = exports.DAILY_EVENT_REMOTE_MEDIA_PLAYER_STOPPED = exports.DAILY_EVENT_REMOTE_MEDIA_PLAYER_STARTED = exports.DAILY_EVENT_RECORDING_UPLOAD_COMPLETED = exports.DAILY_EVENT_RECORDING_STOPPED = exports.DAILY_EVENT_RECORDING_STATS = exports.DAILY_EVENT_RECORDING_STARTED = exports.DAILY_EVENT_RECORDING_ERROR = exports.DAILY_EVENT_RECORDING_DATA = exports.DAILY_EVENT_RECEIVE_SETTINGS_UPDATED = exports.DAILY_EVENT_PARTICIPANT_UPDATED = exports.DAILY_EVENT_PARTICIPANT_LEFT = exports.DAILY_EVENT_PARTICIPANT_JOINED = exports.DAILY_EVENT_PARTICIPANT_COUNTS_UPDATED = exports.DAILY_EVENT_NONFATAL_ERROR = exports.DAILY_EVENT_NETWORK_QUALITY_CHANGE = exports.DAILY_EVENT_NETWORK_CONNECTION = exports.DAILY_EVENT_MEETING_SESSION_SUMMARY_UPDATED = exports.DAILY_EVENT_MEETING_SESSION_STATE_UPDATED = exports.DAILY_EVENT_MEETING_SESSION_DATA_ERROR = exports.DAILY_EVENT_LOCAL_SCREEN_SHARE_STOPPED = exports.DAILY_EVENT_LOCAL_SCREEN_SHARE_STARTED = exports.DAILY_EVENT_LOCAL_SCREEN_SHARE_CANCELED = exports.DAILY_EVENT_LOAD_ATTEMPT_FAILED = exports.DAILY_EVENT_LOADING = exports.DAILY_EVENT_LOADED = exports.DAILY_EVENT_LIVE_STREAMING_UPDATED = exports.DAILY_EVENT_LIVE_STREAMING_STOPPED = exports.DAILY_EVENT_LIVE_STREAMING_STARTED = exports.DAILY_EVENT_LIVE_STREAMING_ERROR = exports.DAILY_EVENT_LEFT_MEETING = exports.DAILY_EVENT_LANG_UPDATED = exports.DAILY_EVENT_JOINING_MEETING = exports.DAILY_EVENT_JOINED_MEETING = exports.DAILY_EVENT_INPUT_SETTINGS_UPDATED = exports.DAILY_EVENT_IFRAME_READY_FOR_LAUNCH_CONFIG = exports.DAILY_EVENT_IFRAME_LAUNCH_CONFIG = exports.DAILY_EVENT_FULLSCREEN = exports.DAILY_EVENT_EXIT_FULLSCREEN = exports.DAILY_EVENT_ERROR = exports.DAILY_EVENT_CPU_LOAD_CHANGE = exports.DAILY_EVENT_CAMERA_ERROR = exports.DAILY_EVENT_APP_MSG = exports.DAILY_EVENT_ACTIVE_SPEAKER_MODE_CHANGE = exports.DAILY_EVENT_ACTIVE_SPEAKER_CHANGE = exports.DAILY_EVENT_ACCESS_STATE_UPDATED = exports.DAILY_CAMERA_ERROR_UNKNOWN = exports.DAILY_CAMERA_ERROR_UNDEF_MEDIADEVICES = exports.DAILY_CAMERA_ERROR_PERMISSIONS = exports.DAILY_CAMERA_ERROR_NOT_FOUND = exports.DAILY_CAMERA_ERROR_MIC_IN_USE = exports.DAILY_CAMERA_ERROR_CONSTRAINTS = exports.DAILY_CAMERA_ERROR_CAM_IN_USE = exports.DAILY_CAMERA_ERROR_CAM_AND_MIC_IN_USE = exports.DAILY_ACCESS_UNKNOWN = exports.DAILY_ACCESS_LEVEL_NONE = exports.DAILY_ACCESS_LEVEL_LOBBY = exports.DAILY_ACCESS_LEVEL_FULL = void 0;
function e(e, t) {
  if (null == e) return {};
  var n,
    r,
    i = function (e, t) {
      if (null == e) return {};
      var n,
        r,
        i = {},
        o = Object.keys(e);
      for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
    }(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  }
  return i;
}
function t(e, t, n, r, i, o, a) {
  try {
    var s = e[o](a),
      c = s.value;
  } catch (e) {
    return void n(e);
  }
  s.done ? t(c) : Promise.resolve(c).then(r, i);
}
function n(e) {
  return function () {
    var n = this,
      r = arguments;
    return new Promise(function (i, o) {
      var a = e.apply(n, r);
      function s(e) {
        t(a, i, o, s, c, "next", e);
      }
      function c(e) {
        t(a, i, o, s, c, "throw", e);
      }
      s(void 0);
    });
  };
}
function r(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function i(e) {
  return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, i(e);
}
function o(e) {
  var t = function (e, t) {
    if ("object" !== i(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
      var r = n.call(e, t || "default");
      if ("object" !== i(r)) return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t ? String : Number)(e);
  }(e, "string");
  return "symbol" === i(t) ? t : String(t);
}
function a(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, o(r.key), r);
  }
}
function s(e, t, n) {
  return t && a(e.prototype, t), n && a(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function c(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function l(e, t) {
  return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
    return e.__proto__ = t, e;
  }, l(e, t);
}
function u(e, t) {
  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && l(e, t);
}
function d(e, t) {
  if (t && ("object" === i(t) || "function" == typeof t)) return t;
  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
  return c(e);
}
function h(e) {
  return h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, h(e);
}
function p(e, t, n) {
  return (t = o(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function f(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function g(e, t) {
  return function (e) {
    if (Array.isArray(e)) return e;
  }(e) || function (e, t) {
    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != n) {
      var r,
        i,
        o,
        a,
        s = [],
        c = !0,
        l = !1;
      try {
        if (o = (n = n.call(e)).next, 0 === t) {
          if (Object(n) !== n) return;
          c = !1;
        } else for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
      } catch (e) {
        l = !0, i = e;
      } finally {
        try {
          if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return;
        } finally {
          if (l) throw i;
        }
      }
      return s;
    }
  }(e, t) || function (e, t) {
    if (e) {
      if ("string" == typeof e) return f(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
var m,
  v = {},
  y = {
    get exports() {
      return v;
    },
    set exports(e) {
      v = e;
    }
  },
  _ = "object" == typeof Reflect ? Reflect : null,
  b = _ && "function" == typeof _.apply ? _.apply : function (e, t, n) {
    return Function.prototype.apply.call(e, t, n);
  };
m = _ && "function" == typeof _.ownKeys ? _.ownKeys : Object.getOwnPropertySymbols ? function (e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : function (e) {
  return Object.getOwnPropertyNames(e);
};
var w = Number.isNaN || function (e) {
  return e != e;
};
function S() {
  S.init.call(this);
}
y.exports = S, v.once = function (e, t) {
  return new Promise(function (n, r) {
    function i(n) {
      e.removeListener(t, o), r(n);
    }
    function o() {
      "function" == typeof e.removeListener && e.removeListener("error", i), n([].slice.call(arguments));
    }
    j(e, t, o, {
      once: !0
    }), "error" !== t && function (e, t, n) {
      "function" == typeof e.on && j(e, "error", t, n);
    }(e, i, {
      once: !0
    });
  });
}, S.EventEmitter = S, S.prototype._events = void 0, S.prototype._eventsCount = 0, S.prototype._maxListeners = void 0;
var k = 10;
function E(e) {
  if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
function M(e) {
  return void 0 === e._maxListeners ? S.defaultMaxListeners : e._maxListeners;
}
function T(e, t, n, r) {
  var i, o, a, s;
  if (E(n), void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), a = o[t]), void 0 === a) a = o[t] = n, ++e._eventsCount;else if ("function" == typeof a ? a = o[t] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n), (i = M(e)) > 0 && a.length > i && !a.warned) {
    a.warned = !0;
    var c = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = t, c.count = a.length, s = c, console && console.warn && console.warn(s);
  }
  return e;
}
function C() {
  if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function O(e, t, n) {
  var r = {
      fired: !1,
      wrapFn: void 0,
      target: e,
      type: t,
      listener: n
    },
    i = C.bind(r);
  return i.listener = n, r.wrapFn = i, i;
}
function P(e, t, n) {
  var r = e._events;
  if (void 0 === r) return [];
  var i = r[t];
  return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? function (e) {
    for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
    return t;
  }(i) : A(i, i.length);
}
function x(e) {
  var t = this._events;
  if (void 0 !== t) {
    var n = t[e];
    if ("function" == typeof n) return 1;
    if (void 0 !== n) return n.length;
  }
  return 0;
}
function A(e, t) {
  for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
  return n;
}
function j(e, t, n, r) {
  if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);else {
    if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
    e.addEventListener(t, function i(o) {
      r.once && e.removeEventListener(t, i), n(o);
    });
  }
}
Object.defineProperty(S, "defaultMaxListeners", {
  enumerable: !0,
  get: function () {
    return k;
  },
  set: function (e) {
    if ("number" != typeof e || e < 0 || w(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    k = e;
  }
}), S.init = function () {
  void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, S.prototype.setMaxListeners = function (e) {
  if ("number" != typeof e || e < 0 || w(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
}, S.prototype.getMaxListeners = function () {
  return M(this);
}, S.prototype.emit = function (e) {
  for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
  var r = "error" === e,
    i = this._events;
  if (void 0 !== i) r = r && void 0 === i.error;else if (!r) return !1;
  if (r) {
    var o;
    if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
    var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
    throw a.context = o, a;
  }
  var s = i[e];
  if (void 0 === s) return !1;
  if ("function" == typeof s) b(s, this, t);else {
    var c = s.length,
      l = A(s, c);
    for (n = 0; n < c; ++n) b(l[n], this, t);
  }
  return !0;
}, S.prototype.addListener = function (e, t) {
  return T(this, e, t, !1);
}, S.prototype.on = S.prototype.addListener, S.prototype.prependListener = function (e, t) {
  return T(this, e, t, !0);
}, S.prototype.once = function (e, t) {
  return E(t), this.on(e, O(this, e, t)), this;
}, S.prototype.prependOnceListener = function (e, t) {
  return E(t), this.prependListener(e, O(this, e, t)), this;
}, S.prototype.removeListener = function (e, t) {
  var n, r, i, o, a;
  if (E(t), void 0 === (r = this._events)) return this;
  if (void 0 === (n = r[e])) return this;
  if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));else if ("function" != typeof n) {
    for (i = -1, o = n.length - 1; o >= 0; o--) if (n[o] === t || n[o].listener === t) {
      a = n[o].listener, i = o;
      break;
    }
    if (i < 0) return this;
    0 === i ? n.shift() : function (e, t) {
      for (; t + 1 < e.length; t++) e[t] = e[t + 1];
      e.pop();
    }(n, i), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, a || t);
  }
  return this;
}, S.prototype.off = S.prototype.removeListener, S.prototype.removeAllListeners = function (e) {
  var t, n, r;
  if (void 0 === (n = this._events)) return this;
  if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
  if (0 === arguments.length) {
    var i,
      o = Object.keys(n);
    for (r = 0; r < o.length; ++r) "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
  }
  if ("function" == typeof (t = n[e])) this.removeListener(e, t);else if (void 0 !== t) for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
  return this;
}, S.prototype.listeners = function (e) {
  return P(this, e, !0);
}, S.prototype.rawListeners = function (e) {
  return P(this, e, !1);
}, S.listenerCount = function (e, t) {
  return "function" == typeof e.listenerCount ? e.listenerCount(t) : x.call(e, t);
}, S.prototype.listenerCount = x, S.prototype.eventNames = function () {
  return this._eventsCount > 0 ? m(this._events) : [];
};
var L = Object.prototype.hasOwnProperty;
function D(e, t, n) {
  for (n of e.keys()) if (N(n, t)) return n;
}
function N(e, t) {
  var n, r, i;
  if (e === t) return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date) return e.getTime() === t.getTime();
    if (n === RegExp) return e.toString() === t.toString();
    if (n === Array) {
      if ((r = e.length) === t.length) for (; r-- && N(e[r], t[r]););
      return -1 === r;
    }
    if (n === Set) {
      if (e.size !== t.size) return !1;
      for (r of e) {
        if ((i = r) && "object" == typeof i && !(i = D(t, i))) return !1;
        if (!t.has(i)) return !1;
      }
      return !0;
    }
    if (n === Map) {
      if (e.size !== t.size) return !1;
      for (r of e) {
        if ((i = r[0]) && "object" == typeof i && !(i = D(t, i))) return !1;
        if (!N(r[1], t.get(i))) return !1;
      }
      return !0;
    }
    if (n === ArrayBuffer) e = new Uint8Array(e), t = new Uint8Array(t);else if (n === DataView) {
      if ((r = e.byteLength) === t.byteLength) for (; r-- && e.getInt8(r) === t.getInt8(r););
      return -1 === r;
    }
    if (ArrayBuffer.isView(e)) {
      if ((r = e.byteLength) === t.byteLength) for (; r-- && e[r] === t[r];);
      return -1 === r;
    }
    if (!n || "object" == typeof e) {
      for (n in r = 0, e) {
        if (L.call(e, n) && ++r && !L.call(t, n)) return !1;
        if (!(n in t) || !N(e[n], t[n])) return !1;
      }
      return Object.keys(t).length === r;
    }
  }
  return e != e && t != t;
}
const I = {
    "Amazon Silk": "amazon_silk",
    "Android Browser": "android",
    Bada: "bada",
    BlackBerry: "blackberry",
    Chrome: "chrome",
    Chromium: "chromium",
    Electron: "electron",
    Epiphany: "epiphany",
    Firefox: "firefox",
    Focus: "focus",
    Generic: "generic",
    "Google Search": "google_search",
    Googlebot: "googlebot",
    "Internet Explorer": "ie",
    "K-Meleon": "k_meleon",
    Maxthon: "maxthon",
    "Microsoft Edge": "edge",
    "MZ Browser": "mz",
    "NAVER Whale Browser": "naver",
    Opera: "opera",
    "Opera Coast": "opera_coast",
    PhantomJS: "phantomjs",
    Puffin: "puffin",
    QupZilla: "qupzilla",
    QQ: "qq",
    QQLite: "qqlite",
    Safari: "safari",
    Sailfish: "sailfish",
    "Samsung Internet for Android": "samsung_internet",
    SeaMonkey: "seamonkey",
    Sleipnir: "sleipnir",
    Swing: "swing",
    Tizen: "tizen",
    "UC Browser": "uc",
    Vivaldi: "vivaldi",
    "WebOS Browser": "webos",
    WeChat: "wechat",
    "Yandex Browser": "yandex",
    Roku: "roku"
  },
  R = {
    amazon_silk: "Amazon Silk",
    android: "Android Browser",
    bada: "Bada",
    blackberry: "BlackBerry",
    chrome: "Chrome",
    chromium: "Chromium",
    electron: "Electron",
    epiphany: "Epiphany",
    firefox: "Firefox",
    focus: "Focus",
    generic: "Generic",
    googlebot: "Googlebot",
    google_search: "Google Search",
    ie: "Internet Explorer",
    k_meleon: "K-Meleon",
    maxthon: "Maxthon",
    edge: "Microsoft Edge",
    mz: "MZ Browser",
    naver: "NAVER Whale Browser",
    opera: "Opera",
    opera_coast: "Opera Coast",
    phantomjs: "PhantomJS",
    puffin: "Puffin",
    qupzilla: "QupZilla",
    qq: "QQ Browser",
    qqlite: "QQ Browser Lite",
    safari: "Safari",
    sailfish: "Sailfish",
    samsung_internet: "Samsung Internet for Android",
    seamonkey: "SeaMonkey",
    sleipnir: "Sleipnir",
    swing: "Swing",
    tizen: "Tizen",
    uc: "UC Browser",
    vivaldi: "Vivaldi",
    webos: "WebOS Browser",
    wechat: "WeChat",
    yandex: "Yandex Browser"
  },
  B = {
    tablet: "tablet",
    mobile: "mobile",
    desktop: "desktop",
    tv: "tv"
  },
  F = {
    WindowsPhone: "Windows Phone",
    Windows: "Windows",
    MacOS: "macOS",
    iOS: "iOS",
    Android: "Android",
    WebOS: "WebOS",
    BlackBerry: "BlackBerry",
    Bada: "Bada",
    Tizen: "Tizen",
    Linux: "Linux",
    ChromeOS: "Chrome OS",
    PlayStation4: "PlayStation 4",
    Roku: "Roku"
  },
  U = {
    EdgeHTML: "EdgeHTML",
    Blink: "Blink",
    Trident: "Trident",
    Presto: "Presto",
    Gecko: "Gecko",
    WebKit: "WebKit"
  };
class V {
  static getFirstMatch(e, t) {
    const n = t.match(e);
    return n && n.length > 0 && n[1] || "";
  }
  static getSecondMatch(e, t) {
    const n = t.match(e);
    return n && n.length > 1 && n[2] || "";
  }
  static matchAndReturnConst(e, t, n) {
    if (e.test(t)) return n;
  }
  static getWindowsVersionName(e) {
    switch (e) {
      case "NT":
        return "NT";
      case "XP":
      case "NT 5.1":
        return "XP";
      case "NT 5.0":
        return "2000";
      case "NT 5.2":
        return "2003";
      case "NT 6.0":
        return "Vista";
      case "NT 6.1":
        return "7";
      case "NT 6.2":
        return "8";
      case "NT 6.3":
        return "8.1";
      case "NT 10.0":
        return "10";
      default:
        return;
    }
  }
  static getMacOSVersionName(e) {
    const t = e.split(".").splice(0, 2).map(e => parseInt(e, 10) || 0);
    if (t.push(0), 10 === t[0]) switch (t[1]) {
      case 5:
        return "Leopard";
      case 6:
        return "Snow Leopard";
      case 7:
        return "Lion";
      case 8:
        return "Mountain Lion";
      case 9:
        return "Mavericks";
      case 10:
        return "Yosemite";
      case 11:
        return "El Capitan";
      case 12:
        return "Sierra";
      case 13:
        return "High Sierra";
      case 14:
        return "Mojave";
      case 15:
        return "Catalina";
      default:
        return;
    }
  }
  static getAndroidVersionName(e) {
    const t = e.split(".").splice(0, 2).map(e => parseInt(e, 10) || 0);
    if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0;
  }
  static getVersionPrecision(e) {
    return e.split(".").length;
  }
  static compareVersions(e, t, n = !1) {
    const r = V.getVersionPrecision(e),
      i = V.getVersionPrecision(t);
    let o = Math.max(r, i),
      a = 0;
    const s = V.map([e, t], e => {
      const t = o - V.getVersionPrecision(e),
        n = e + new Array(t + 1).join(".0");
      return V.map(n.split("."), e => new Array(20 - e.length).join("0") + e).reverse();
    });
    for (n && (a = o - Math.min(r, i)), o -= 1; o >= a;) {
      if (s[0][o] > s[1][o]) return 1;
      if (s[0][o] === s[1][o]) {
        if (o === a) return 0;
        o -= 1;
      } else if (s[0][o] < s[1][o]) return -1;
    }
  }
  static map(e, t) {
    const n = [];
    let r;
    if (Array.prototype.map) return Array.prototype.map.call(e, t);
    for (r = 0; r < e.length; r += 1) n.push(t(e[r]));
    return n;
  }
  static find(e, t) {
    let n, r;
    if (Array.prototype.find) return Array.prototype.find.call(e, t);
    for (n = 0, r = e.length; n < r; n += 1) {
      const r = e[n];
      if (t(r, n)) return r;
    }
  }
  static assign(e, ...t) {
    const n = e;
    let r, i;
    if (Object.assign) return Object.assign(e, ...t);
    for (r = 0, i = t.length; r < i; r += 1) {
      const e = t[r];
      if ("object" == typeof e && null !== e) {
        Object.keys(e).forEach(t => {
          n[t] = e[t];
        });
      }
    }
    return e;
  }
  static getBrowserAlias(e) {
    return I[e];
  }
  static getBrowserTypeByAlias(e) {
    return R[e] || "";
  }
}
const $ = /version\/(\d+(\.?_?\d+)+)/i,
  G = [{
    test: [/googlebot/i],
    describe(e) {
      const t = {
          name: "Googlebot"
        },
        n = V.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || V.getFirstMatch($, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/opera/i],
    describe(e) {
      const t = {
          name: "Opera"
        },
        n = V.getFirstMatch($, e) || V.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/opr\/|opios/i],
    describe(e) {
      const t = {
          name: "Opera"
        },
        n = V.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || V.getFirstMatch($, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/SamsungBrowser/i],
    describe(e) {
      const t = {
          name: "Samsung Internet for Android"
        },
        n = V.getFirstMatch($, e) || V.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/Whale/i],
    describe(e) {
      const t = {
          name: "NAVER Whale Browser"
        },
        n = V.getFirstMatch($, e) || V.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/MZBrowser/i],
    describe(e) {
      const t = {
          name: "MZ Browser"
        },
        n = V.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || V.getFirstMatch($, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/focus/i],
    describe(e) {
      const t = {
          name: "Focus"
        },
        n = V.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || V.getFirstMatch($, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/swing/i],
    describe(e) {
      const t = {
          name: "Swing"
        },
        n = V.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || V.getFirstMatch($, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/coast/i],
    describe(e) {
      const t = {
          name: "Opera Coast"
        },
        n = V.getFirstMatch($, e) || V.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/opt\/\d+(?:.?_?\d+)+/i],
    describe(e) {
      const t = {
          name: "Opera Touch"
        },
        n = V.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || V.getFirstMatch($, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/yabrowser/i],
    describe(e) {
      const t = {
          name: "Yandex Browser"
        },
        n = V.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || V.getFirstMatch($, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/ucbrowser/i],
    describe(e) {
      const t = {
          name: "UC Browser"
        },
        n = V.getFirstMatch($, e) || V.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/Maxthon|mxios/i],
    describe(e) {
      const t = {
          name: "Maxthon"
        },
        n = V.getFirstMatch($, e) || V.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/epiphany/i],
    describe(e) {
      const t = {
          name: "Epiphany"
        },
        n = V.getFirstMatch($, e) || V.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/puffin/i],
    describe(e) {
      const t = {
          name: "Puffin"
        },
        n = V.getFirstMatch($, e) || V.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/sleipnir/i],
    describe(e) {
      const t = {
          name: "Sleipnir"
        },
        n = V.getFirstMatch($, e) || V.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/k-meleon/i],
    describe(e) {
      const t = {
          name: "K-Meleon"
        },
        n = V.getFirstMatch($, e) || V.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/micromessenger/i],
    describe(e) {
      const t = {
          name: "WeChat"
        },
        n = V.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || V.getFirstMatch($, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/qqbrowser/i],
    describe(e) {
      const t = {
          name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
        },
        n = V.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || V.getFirstMatch($, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/msie|trident/i],
    describe(e) {
      const t = {
          name: "Internet Explorer"
        },
        n = V.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/\sedg\//i],
    describe(e) {
      const t = {
          name: "Microsoft Edge"
        },
        n = V.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/edg([ea]|ios)/i],
    describe(e) {
      const t = {
          name: "Microsoft Edge"
        },
        n = V.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/vivaldi/i],
    describe(e) {
      const t = {
          name: "Vivaldi"
        },
        n = V.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/seamonkey/i],
    describe(e) {
      const t = {
          name: "SeaMonkey"
        },
        n = V.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/sailfish/i],
    describe(e) {
      const t = {
          name: "Sailfish"
        },
        n = V.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/silk/i],
    describe(e) {
      const t = {
          name: "Amazon Silk"
        },
        n = V.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/phantom/i],
    describe(e) {
      const t = {
          name: "PhantomJS"
        },
        n = V.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/slimerjs/i],
    describe(e) {
      const t = {
          name: "SlimerJS"
        },
        n = V.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(e) {
      const t = {
          name: "BlackBerry"
        },
        n = V.getFirstMatch($, e) || V.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/(web|hpw)[o0]s/i],
    describe(e) {
      const t = {
          name: "WebOS Browser"
        },
        n = V.getFirstMatch($, e) || V.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/bada/i],
    describe(e) {
      const t = {
          name: "Bada"
        },
        n = V.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/tizen/i],
    describe(e) {
      const t = {
          name: "Tizen"
        },
        n = V.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || V.getFirstMatch($, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/qupzilla/i],
    describe(e) {
      const t = {
          name: "QupZilla"
        },
        n = V.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || V.getFirstMatch($, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/firefox|iceweasel|fxios/i],
    describe(e) {
      const t = {
          name: "Firefox"
        },
        n = V.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/electron/i],
    describe(e) {
      const t = {
          name: "Electron"
        },
        n = V.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/MiuiBrowser/i],
    describe(e) {
      const t = {
          name: "Miui"
        },
        n = V.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/chromium/i],
    describe(e) {
      const t = {
          name: "Chromium"
        },
        n = V.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || V.getFirstMatch($, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/chrome|crios|crmo/i],
    describe(e) {
      const t = {
          name: "Chrome"
        },
        n = V.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/GSA/i],
    describe(e) {
      const t = {
          name: "Google Search"
        },
        n = V.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test(e) {
      const t = !e.test(/like android/i),
        n = e.test(/android/i);
      return t && n;
    },
    describe(e) {
      const t = {
          name: "Android Browser"
        },
        n = V.getFirstMatch($, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/playstation 4/i],
    describe(e) {
      const t = {
          name: "PlayStation 4"
        },
        n = V.getFirstMatch($, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/safari|applewebkit/i],
    describe(e) {
      const t = {
          name: "Safari"
        },
        n = V.getFirstMatch($, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/.*/i],
    describe(e) {
      const t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
      return {
        name: V.getFirstMatch(t, e),
        version: V.getSecondMatch(t, e)
      };
    }
  }];
var q = [{
    test: [/Roku\/DVP/],
    describe(e) {
      const t = V.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
      return {
        name: F.Roku,
        version: t
      };
    }
  }, {
    test: [/windows phone/i],
    describe(e) {
      const t = V.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
      return {
        name: F.WindowsPhone,
        version: t
      };
    }
  }, {
    test: [/windows /i],
    describe(e) {
      const t = V.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
        n = V.getWindowsVersionName(t);
      return {
        name: F.Windows,
        version: t,
        versionName: n
      };
    }
  }, {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe(e) {
      const t = {
          name: F.iOS
        },
        n = V.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/macintosh/i],
    describe(e) {
      const t = V.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
        n = V.getMacOSVersionName(t),
        r = {
          name: F.MacOS,
          version: t
        };
      return n && (r.versionName = n), r;
    }
  }, {
    test: [/(ipod|iphone|ipad)/i],
    describe(e) {
      const t = V.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
      return {
        name: F.iOS,
        version: t
      };
    }
  }, {
    test(e) {
      const t = !e.test(/like android/i),
        n = e.test(/android/i);
      return t && n;
    },
    describe(e) {
      const t = V.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
        n = V.getAndroidVersionName(t),
        r = {
          name: F.Android,
          version: t
        };
      return n && (r.versionName = n), r;
    }
  }, {
    test: [/(web|hpw)[o0]s/i],
    describe(e) {
      const t = V.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
        n = {
          name: F.WebOS
        };
      return t && t.length && (n.version = t), n;
    }
  }, {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(e) {
      const t = V.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || V.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || V.getFirstMatch(/\bbb(\d+)/i, e);
      return {
        name: F.BlackBerry,
        version: t
      };
    }
  }, {
    test: [/bada/i],
    describe(e) {
      const t = V.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
      return {
        name: F.Bada,
        version: t
      };
    }
  }, {
    test: [/tizen/i],
    describe(e) {
      const t = V.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
      return {
        name: F.Tizen,
        version: t
      };
    }
  }, {
    test: [/linux/i],
    describe: () => ({
      name: F.Linux
    })
  }, {
    test: [/CrOS/],
    describe: () => ({
      name: F.ChromeOS
    })
  }, {
    test: [/PlayStation 4/],
    describe(e) {
      const t = V.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
      return {
        name: F.PlayStation4,
        version: t
      };
    }
  }],
  Y = [{
    test: [/googlebot/i],
    describe: () => ({
      type: "bot",
      vendor: "Google"
    })
  }, {
    test: [/huawei/i],
    describe(e) {
      const t = V.getFirstMatch(/(can-l01)/i, e) && "Nova",
        n = {
          type: B.mobile,
          vendor: "Huawei"
        };
      return t && (n.model = t), n;
    }
  }, {
    test: [/nexus\s*(?:7|8|9|10).*/i],
    describe: () => ({
      type: B.tablet,
      vendor: "Nexus"
    })
  }, {
    test: [/ipad/i],
    describe: () => ({
      type: B.tablet,
      vendor: "Apple",
      model: "iPad"
    })
  }, {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe: () => ({
      type: B.tablet,
      vendor: "Apple",
      model: "iPad"
    })
  }, {
    test: [/kftt build/i],
    describe: () => ({
      type: B.tablet,
      vendor: "Amazon",
      model: "Kindle Fire HD 7"
    })
  }, {
    test: [/silk/i],
    describe: () => ({
      type: B.tablet,
      vendor: "Amazon"
    })
  }, {
    test: [/tablet(?! pc)/i],
    describe: () => ({
      type: B.tablet
    })
  }, {
    test(e) {
      const t = e.test(/ipod|iphone/i),
        n = e.test(/like (ipod|iphone)/i);
      return t && !n;
    },
    describe(e) {
      const t = V.getFirstMatch(/(ipod|iphone)/i, e);
      return {
        type: B.mobile,
        vendor: "Apple",
        model: t
      };
    }
  }, {
    test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
    describe: () => ({
      type: B.mobile,
      vendor: "Nexus"
    })
  }, {
    test: [/[^-]mobi/i],
    describe: () => ({
      type: B.mobile
    })
  }, {
    test: e => "blackberry" === e.getBrowserName(!0),
    describe: () => ({
      type: B.mobile,
      vendor: "BlackBerry"
    })
  }, {
    test: e => "bada" === e.getBrowserName(!0),
    describe: () => ({
      type: B.mobile
    })
  }, {
    test: e => "windows phone" === e.getBrowserName(),
    describe: () => ({
      type: B.mobile,
      vendor: "Microsoft"
    })
  }, {
    test(e) {
      const t = Number(String(e.getOSVersion()).split(".")[0]);
      return "android" === e.getOSName(!0) && t >= 3;
    },
    describe: () => ({
      type: B.tablet
    })
  }, {
    test: e => "android" === e.getOSName(!0),
    describe: () => ({
      type: B.mobile
    })
  }, {
    test: e => "macos" === e.getOSName(!0),
    describe: () => ({
      type: B.desktop,
      vendor: "Apple"
    })
  }, {
    test: e => "windows" === e.getOSName(!0),
    describe: () => ({
      type: B.desktop
    })
  }, {
    test: e => "linux" === e.getOSName(!0),
    describe: () => ({
      type: B.desktop
    })
  }, {
    test: e => "playstation 4" === e.getOSName(!0),
    describe: () => ({
      type: B.tv
    })
  }, {
    test: e => "roku" === e.getOSName(!0),
    describe: () => ({
      type: B.tv
    })
  }],
  J = [{
    test: e => "microsoft edge" === e.getBrowserName(!0),
    describe(e) {
      if (/\sedg\//i.test(e)) return {
        name: U.Blink
      };
      const t = V.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
      return {
        name: U.EdgeHTML,
        version: t
      };
    }
  }, {
    test: [/trident/i],
    describe(e) {
      const t = {
          name: U.Trident
        },
        n = V.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: e => e.test(/presto/i),
    describe(e) {
      const t = {
          name: U.Presto
        },
        n = V.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test(e) {
      const t = e.test(/gecko/i),
        n = e.test(/like gecko/i);
      return t && !n;
    },
    describe(e) {
      const t = {
          name: U.Gecko
        },
        n = V.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }, {
    test: [/(apple)?webkit\/537\.36/i],
    describe: () => ({
      name: U.Blink
    })
  }, {
    test: [/(apple)?webkit/i],
    describe(e) {
      const t = {
          name: U.WebKit
        },
        n = V.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }];
class W {
  constructor(e, t = !1) {
    if (null == e || "" === e) throw new Error("UserAgent parameter can't be empty");
    this._ua = e, this.parsedResult = {}, !0 !== t && this.parse();
  }
  getUA() {
    return this._ua;
  }
  test(e) {
    return e.test(this._ua);
  }
  parseBrowser() {
    this.parsedResult.browser = {};
    const e = V.find(G, e => {
      if ("function" == typeof e.test) return e.test(this);
      if (e.test instanceof Array) return e.test.some(e => this.test(e));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.browser = e.describe(this.getUA())), this.parsedResult.browser;
  }
  getBrowser() {
    return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
  }
  getBrowserName(e) {
    return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
  }
  getBrowserVersion() {
    return this.getBrowser().version;
  }
  getOS() {
    return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
  }
  parseOS() {
    this.parsedResult.os = {};
    const e = V.find(q, e => {
      if ("function" == typeof e.test) return e.test(this);
      if (e.test instanceof Array) return e.test.some(e => this.test(e));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.os = e.describe(this.getUA())), this.parsedResult.os;
  }
  getOSName(e) {
    const {
      name: t
    } = this.getOS();
    return e ? String(t).toLowerCase() || "" : t || "";
  }
  getOSVersion() {
    return this.getOS().version;
  }
  getPlatform() {
    return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
  }
  getPlatformType(e = !1) {
    const {
      type: t
    } = this.getPlatform();
    return e ? String(t).toLowerCase() || "" : t || "";
  }
  parsePlatform() {
    this.parsedResult.platform = {};
    const e = V.find(Y, e => {
      if ("function" == typeof e.test) return e.test(this);
      if (e.test instanceof Array) return e.test.some(e => this.test(e));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.platform = e.describe(this.getUA())), this.parsedResult.platform;
  }
  getEngine() {
    return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
  }
  getEngineName(e) {
    return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
  }
  parseEngine() {
    this.parsedResult.engine = {};
    const e = V.find(J, e => {
      if ("function" == typeof e.test) return e.test(this);
      if (e.test instanceof Array) return e.test.some(e => this.test(e));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.engine = e.describe(this.getUA())), this.parsedResult.engine;
  }
  parse() {
    return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
  }
  getResult() {
    return V.assign({}, this.parsedResult);
  }
  satisfies(e) {
    const t = {};
    let n = 0;
    const r = {};
    let i = 0;
    if (Object.keys(e).forEach(o => {
      const a = e[o];
      "string" == typeof a ? (r[o] = a, i += 1) : "object" == typeof a && (t[o] = a, n += 1);
    }), n > 0) {
      const e = Object.keys(t),
        n = V.find(e, e => this.isOS(e));
      if (n) {
        const e = this.satisfies(t[n]);
        if (void 0 !== e) return e;
      }
      const r = V.find(e, e => this.isPlatform(e));
      if (r) {
        const e = this.satisfies(t[r]);
        if (void 0 !== e) return e;
      }
    }
    if (i > 0) {
      const e = Object.keys(r),
        t = V.find(e, e => this.isBrowser(e, !0));
      if (void 0 !== t) return this.compareVersion(r[t]);
    }
  }
  isBrowser(e, t = !1) {
    const n = this.getBrowserName().toLowerCase();
    let r = e.toLowerCase();
    const i = V.getBrowserTypeByAlias(r);
    return t && i && (r = i.toLowerCase()), r === n;
  }
  compareVersion(e) {
    let t = [0],
      n = e,
      r = !1;
    const i = this.getBrowserVersion();
    if ("string" == typeof i) return ">" === e[0] || "<" === e[0] ? (n = e.substr(1), "=" === e[1] ? (r = !0, n = e.substr(2)) : t = [], ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? n = e.substr(1) : "~" === e[0] && (r = !0, n = e.substr(1)), t.indexOf(V.compareVersions(i, n, r)) > -1;
  }
  isOS(e) {
    return this.getOSName(!0) === String(e).toLowerCase();
  }
  isPlatform(e) {
    return this.getPlatformType(!0) === String(e).toLowerCase();
  }
  isEngine(e) {
    return this.getEngineName(!0) === String(e).toLowerCase();
  }
  is(e, t = !1) {
    return this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e);
  }
  some(e = []) {
    return e.some(e => this.is(e));
  }
}
/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */
class z {
  static getParser(e, t = !1) {
    if ("string" != typeof e) throw new Error("UserAgent should be a string");
    return new W(e, t);
  }
  static parse(e) {
    return new W(e).getResult();
  }
  static get BROWSER_MAP() {
    return R;
  }
  static get ENGINE_MAP() {
    return U;
  }
  static get OS_MAP() {
    return F;
  }
  static get PLATFORMS_MAP() {
    return B;
  }
}
function H() {
  return Date.now() + Math.random().toString();
}
function Q() {
  throw new Error("Method must be implemented in subclass");
}
function K(e) {
  return window._dailyConfig && window._dailyConfig.proxyUrl ? window._dailyConfig.proxyUrl + ("/" === window._dailyConfig.proxyUrl.slice(-1) ? "" : "/") + e.substring(8) : e;
}
function X() {
  return window._dailyConfig && window._dailyConfig.callObjectBundleUrlOverride ? window._dailyConfig.callObjectBundleUrlOverride : K("https://c.daily.co/call-machine/versioned/".concat("0.58.0", "/static/call-machine-object-bundle.js"));
}
function Z(e) {
  try {
    new URL(e);
  } catch (e) {
    return !1;
  }
  return !0;
}
const ee = Object.prototype.toString;
function te(e) {
  switch (ee.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return !0;
    default:
      return ue(e, Error);
  }
}
function ne(e, t) {
  return ee.call(e) === `[object ${t}]`;
}
function re(e) {
  return ne(e, "ErrorEvent");
}
function ie(e) {
  return ne(e, "DOMError");
}
function oe(e) {
  return ne(e, "String");
}
function ae(e) {
  return null === e || "object" != typeof e && "function" != typeof e;
}
function se(e) {
  return ne(e, "Object");
}
function ce(e) {
  return "undefined" != typeof Event && ue(e, Event);
}
function le(e) {
  return Boolean(e && e.then && "function" == typeof e.then);
}
function ue(e, t) {
  try {
    return e instanceof t;
  } catch (e) {
    return !1;
  }
}
function de(e, t = 0) {
  return "string" != typeof e || 0 === t || e.length <= t ? e : `${e.slice(0, t)}...`;
}
function he(e, t) {
  if (!Array.isArray(e)) return "";
  const n = [];
  for (let t = 0; t < e.length; t++) {
    const r = e[t];
    try {
      n.push(String(r));
    } catch (e) {
      n.push("[value cannot be serialized]");
    }
  }
  return n.join(t);
}
function pe(e, t, n = !1) {
  return !!oe(e) && (ne(t, "RegExp") ? t.test(e) : !!oe(t) && (n ? e === t : e.includes(t)));
}
function fe(e, t = [], n = !1) {
  return t.some(t => pe(e, t, n));
}
function ge(e, t, n = 250, r, i, o, a) {
  if (!(o.exception && o.exception.values && a && ue(a.originalException, Error))) return;
  const s = o.exception.values.length > 0 ? o.exception.values[o.exception.values.length - 1] : void 0;
  var c, l;
  s && (o.exception.values = (c = me(e, t, i, a.originalException, r, o.exception.values, s, 0), l = n, c.map(e => (e.value && (e.value = de(e.value, l)), e))));
}
function me(e, t, n, r, i, o, a, s) {
  if (o.length >= n + 1) return o;
  let c = [...o];
  if (ue(r[i], Error)) {
    ve(a, s);
    const o = e(t, r[i]),
      l = c.length;
    ye(o, i, l, s), c = me(e, t, n, r[i], i, [o, ...c], o, l);
  }
  return Array.isArray(r.errors) && r.errors.forEach((r, o) => {
    if (ue(r, Error)) {
      ve(a, s);
      const l = e(t, r),
        u = c.length;
      ye(l, `errors[${o}]`, u, s), c = me(e, t, n, r, i, [l, ...c], l, u);
    }
  }), c;
}
function ve(e, t) {
  e.mechanism = e.mechanism || {
    type: "generic",
    handled: !0
  }, e.mechanism = {
    ...e.mechanism,
    is_exception_group: !0,
    exception_id: t
  };
}
function ye(e, t, n, r) {
  e.mechanism = e.mechanism || {
    type: "generic",
    handled: !0
  }, e.mechanism = {
    ...e.mechanism,
    type: "chained",
    source: t,
    exception_id: n,
    parent_id: r
  };
}
function _e(e) {
  return e && e.Math == Math ? e : void 0;
}
const be = "object" == typeof globalThis && _e(globalThis) || "object" == typeof window && _e(window) || "object" == typeof self && _e(self) || "object" == typeof global && _e(global) || function () {
  return this;
}() || {};
function we() {
  return be;
}
function Se(e, t, n) {
  const r = n || be,
    i = r.__SENTRY__ = r.__SENTRY__ || {};
  return i[e] || (i[e] = t());
}
const ke = we(),
  Ee = 80;
function Me(e, t = {}) {
  try {
    let n = e;
    const r = 5,
      i = [];
    let o = 0,
      a = 0;
    const s = " > ",
      c = s.length;
    let l;
    const u = Array.isArray(t) ? t : t.keyAttrs,
      d = !Array.isArray(t) && t.maxStringLength || Ee;
    for (; n && o++ < r && (l = Te(n, u), !("html" === l || o > 1 && a + i.length * c + l.length >= d));) i.push(l), a += l.length, n = n.parentNode;
    return i.reverse().join(s);
  } catch (e) {
    return "<unknown>";
  }
}
function Te(e, t) {
  const n = e,
    r = [];
  let i, o, a, s, c;
  if (!n || !n.tagName) return "";
  r.push(n.tagName.toLowerCase());
  const l = t && t.length ? t.filter(e => n.getAttribute(e)).map(e => [e, n.getAttribute(e)]) : null;
  if (l && l.length) l.forEach(e => {
    r.push(`[${e[0]}="${e[1]}"]`);
  });else if (n.id && r.push(`#${n.id}`), i = n.className, i && oe(i)) for (o = i.split(/\s+/), c = 0; c < o.length; c++) r.push(`.${o[c]}`);
  const u = ["aria-label", "type", "name", "title", "alt"];
  for (c = 0; c < u.length; c++) a = u[c], s = n.getAttribute(a), s && r.push(`[${a}="${s}"]`);
  return r.join("");
}
const Ce = ["debug", "info", "warn", "error", "log", "assert", "trace"];
function Oe(e) {
  if (!("console" in be)) return e();
  const t = be.console,
    n = {};
  Ce.forEach(e => {
    const r = t[e] && t[e].__sentry_original__;
    e in t && r && (n[e] = t[e], t[e] = r);
  });
  try {
    return e();
  } finally {
    Object.keys(n).forEach(e => {
      t[e] = n[e];
    });
  }
}
function Pe() {
  let e = !1;
  const t = {
    enable: () => {
      e = !0;
    },
    disable: () => {
      e = !1;
    }
  };
  return "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? Ce.forEach(n => {
    t[n] = (...t) => {
      e && Oe(() => {
        be.console[n](`Sentry Logger [${n}]:`, ...t);
      });
    };
  }) : Ce.forEach(e => {
    t[e] = () => {};
  }), t;
}
let xe;
xe = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? Se("logger", Pe) : Pe();
const Ae = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function je(e, t = !1) {
  const {
    host: n,
    path: r,
    pass: i,
    port: o,
    projectId: a,
    protocol: s,
    publicKey: c
  } = e;
  return `${s}://${c}${t && i ? `:${i}` : ""}@${n}${o ? `:${o}` : ""}/${r ? `${r}/` : r}${a}`;
}
function Le(e) {
  return {
    protocol: e.protocol,
    publicKey: e.publicKey || "",
    pass: e.pass || "",
    host: e.host,
    port: e.port || "",
    path: e.path || "",
    projectId: e.projectId
  };
}
function De(e) {
  const t = "string" == typeof e ? function (e) {
    const t = Ae.exec(e);
    if (!t) return void console.error(`Invalid Sentry Dsn: ${e}`);
    const [n, r, i = "", o, a = "", s] = t.slice(1);
    let c = "",
      l = s;
    const u = l.split("/");
    if (u.length > 1 && (c = u.slice(0, -1).join("/"), l = u.pop()), l) {
      const e = l.match(/^\d+/);
      e && (l = e[0]);
    }
    return Le({
      host: o,
      pass: i,
      path: c,
      projectId: l,
      port: a,
      protocol: n,
      publicKey: r
    });
  }(e) : Le(e);
  if (t && function (e) {
    if ("undefined" != typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__) return !0;
    const {
      port: t,
      projectId: n,
      protocol: r
    } = e;
    return !(["protocol", "publicKey", "host", "projectId"].find(t => !e[t] && (xe.error(`Invalid Sentry Dsn: ${t} missing`), !0)) || (n.match(/^\d+$/) ? function (e) {
      return "http" === e || "https" === e;
    }(r) ? t && isNaN(parseInt(t, 10)) && (xe.error(`Invalid Sentry Dsn: Invalid port ${t}`), 1) : (xe.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), 1) : (xe.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), 1)));
  }(t)) return t;
}
class Ne extends Error {
  constructor(e, t = "warn") {
    super(e), this.message = e, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = t;
  }
}
function Ie(e, t, n) {
  if (!(t in e)) return;
  const r = e[t],
    i = n(r);
  if ("function" == typeof i) try {
    Be(i, r);
  } catch (e) {}
  e[t] = i;
}
function Re(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    configurable: !0
  });
}
function Be(e, t) {
  const n = t.prototype || {};
  e.prototype = t.prototype = n, Re(e, "__sentry_original__", t);
}
function Fe(e) {
  return e.__sentry_original__;
}
function Ue(e) {
  if (te(e)) return {
    message: e.message,
    name: e.name,
    stack: e.stack,
    ...$e(e)
  };
  if (ce(e)) {
    const t = {
      type: e.type,
      target: Ve(e.target),
      currentTarget: Ve(e.currentTarget),
      ...$e(e)
    };
    return "undefined" != typeof CustomEvent && ue(e, CustomEvent) && (t.detail = e.detail), t;
  }
  return e;
}
function Ve(e) {
  try {
    return t = e, "undefined" != typeof Element && ue(t, Element) ? Me(e) : Object.prototype.toString.call(e);
  } catch (e) {
    return "<unknown>";
  }
  var t;
}
function $e(e) {
  if ("object" == typeof e && null !== e) {
    const t = {};
    for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t;
  }
  return {};
}
function Ge(e) {
  return qe(e, new Map());
}
function qe(e, t) {
  if (se(e)) {
    const n = t.get(e);
    if (void 0 !== n) return n;
    const r = {};
    t.set(e, r);
    for (const n of Object.keys(e)) void 0 !== e[n] && (r[n] = qe(e[n], t));
    return r;
  }
  if (Array.isArray(e)) {
    const n = t.get(e);
    if (void 0 !== n) return n;
    const r = [];
    return t.set(e, r), e.forEach(e => {
      r.push(qe(e, t));
    }), r;
  }
  return e;
}
const Ye = "<anonymous>";
function Je(e) {
  try {
    return e && "function" == typeof e && e.name || Ye;
  } catch (e) {
    return Ye;
  }
}
const We = we();
function ze(e) {
  return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
}
function He() {
  if (!function () {
    if (!("fetch" in We)) return !1;
    try {
      return new Headers(), new Request("http://www.example.com"), new Response(), !0;
    } catch (e) {
      return !1;
    }
  }()) return !1;
  if (ze(We.fetch)) return !0;
  let e = !1;
  const t = We.document;
  if (t && "function" == typeof t.createElement) try {
    const n = t.createElement("iframe");
    n.hidden = !0, t.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (e = ze(n.contentWindow.fetch)), t.head.removeChild(n);
  } catch (e) {
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
  }
  return e;
}
const Qe = we();
const Ke = we(),
  Xe = "__sentry_xhr_v2__",
  Ze = {},
  et = {};
function tt(e) {
  if (!et[e]) switch (et[e] = !0, e) {
    case "console":
      !function () {
        if (!("console" in Ke)) return;
        Ce.forEach(function (e) {
          e in Ke.console && Ie(Ke.console, e, function (t) {
            return function (...n) {
              rt("console", {
                args: n,
                level: e
              }), t && t.apply(Ke.console, n);
            };
          });
        });
      }();
      break;
    case "dom":
      !function () {
        if (!("document" in Ke)) return;
        const e = rt.bind(null, "dom"),
          t = ut(e, !0);
        Ke.document.addEventListener("click", t, !1), Ke.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(t => {
          const n = Ke[t] && Ke[t].prototype;
          n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Ie(n, "addEventListener", function (t) {
            return function (n, r, i) {
              if ("click" === n || "keypress" == n) try {
                const r = this,
                  o = r.__sentry_instrumentation_handlers__ = r.__sentry_instrumentation_handlers__ || {},
                  a = o[n] = o[n] || {
                    refCount: 0
                  };
                if (!a.handler) {
                  const r = ut(e);
                  a.handler = r, t.call(this, n, r, i);
                }
                a.refCount++;
              } catch (e) {}
              return t.call(this, n, r, i);
            };
          }), Ie(n, "removeEventListener", function (e) {
            return function (t, n, r) {
              if ("click" === t || "keypress" == t) try {
                const n = this,
                  i = n.__sentry_instrumentation_handlers__ || {},
                  o = i[t];
                o && (o.refCount--, o.refCount <= 0 && (e.call(this, t, o.handler, r), o.handler = void 0, delete i[t]), 0 === Object.keys(i).length && delete n.__sentry_instrumentation_handlers__);
              } catch (e) {}
              return e.call(this, t, n, r);
            };
          }));
        });
      }();
      break;
    case "xhr":
      !function () {
        if (!("XMLHttpRequest" in Ke)) return;
        const e = XMLHttpRequest.prototype;
        Ie(e, "open", function (e) {
          return function (...t) {
            const n = t[1],
              r = this[Xe] = {
                method: oe(t[0]) ? t[0].toUpperCase() : t[0],
                url: t[1],
                request_headers: {}
              };
            oe(n) && "POST" === r.method && n.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
            const i = () => {
              const e = this[Xe];
              if (e && 4 === this.readyState) {
                try {
                  e.status_code = this.status;
                } catch (e) {}
                rt("xhr", {
                  args: t,
                  endTimestamp: Date.now(),
                  startTimestamp: Date.now(),
                  xhr: this
                });
              }
            };
            return "onreadystatechange" in this && "function" == typeof this.onreadystatechange ? Ie(this, "onreadystatechange", function (e) {
              return function (...t) {
                return i(), e.apply(this, t);
              };
            }) : this.addEventListener("readystatechange", i), Ie(this, "setRequestHeader", function (e) {
              return function (...t) {
                const [n, r] = t,
                  i = this[Xe];
                return i && (i.request_headers[n.toLowerCase()] = r), e.apply(this, t);
              };
            }), e.apply(this, t);
          };
        }), Ie(e, "send", function (e) {
          return function (...t) {
            const n = this[Xe];
            return n && void 0 !== t[0] && (n.body = t[0]), rt("xhr", {
              args: t,
              startTimestamp: Date.now(),
              xhr: this
            }), e.apply(this, t);
          };
        });
      }();
      break;
    case "fetch":
      !function () {
        if (!He()) return;
        Ie(Ke, "fetch", function (e) {
          return function (...t) {
            const {
                method: n,
                url: r
              } = function (e) {
                if (0 === e.length) return {
                  method: "GET",
                  url: ""
                };
                if (2 === e.length) {
                  const [t, n] = e;
                  return {
                    url: ot(t),
                    method: it(n, "method") ? String(n.method).toUpperCase() : "GET"
                  };
                }
                const t = e[0];
                return {
                  url: ot(t),
                  method: it(t, "method") ? String(t.method).toUpperCase() : "GET"
                };
              }(t),
              i = {
                args: t,
                fetchData: {
                  method: n,
                  url: r
                },
                startTimestamp: Date.now()
              };
            return rt("fetch", {
              ...i
            }), e.apply(Ke, t).then(e => (rt("fetch", {
              ...i,
              endTimestamp: Date.now(),
              response: e
            }), e), e => {
              throw rt("fetch", {
                ...i,
                endTimestamp: Date.now(),
                error: e
              }), e;
            });
          };
        });
      }();
      break;
    case "history":
      !function () {
        if (!function () {
          const e = Qe.chrome,
            t = e && e.app && e.app.runtime,
            n = "history" in Qe && !!Qe.history.pushState && !!Qe.history.replaceState;
          return !t && n;
        }()) return;
        const e = Ke.onpopstate;
        function t(e) {
          return function (...t) {
            const n = t.length > 2 ? t[2] : void 0;
            if (n) {
              const e = at,
                t = String(n);
              at = t, rt("history", {
                from: e,
                to: t
              });
            }
            return e.apply(this, t);
          };
        }
        Ke.onpopstate = function (...t) {
          const n = Ke.location.href,
            r = at;
          if (at = n, rt("history", {
            from: r,
            to: n
          }), e) try {
            return e.apply(this, t);
          } catch (e) {}
        }, Ie(Ke.history, "pushState", t), Ie(Ke.history, "replaceState", t);
      }();
      break;
    case "error":
      dt = Ke.onerror, Ke.onerror = function (e, t, n, r, i) {
        return rt("error", {
          column: r,
          error: i,
          line: n,
          msg: e,
          url: t
        }), !(!dt || dt.__SENTRY_LOADER__) && dt.apply(this, arguments);
      }, Ke.onerror.__SENTRY_INSTRUMENTED__ = !0;
      break;
    case "unhandledrejection":
      ht = Ke.onunhandledrejection, Ke.onunhandledrejection = function (e) {
        return rt("unhandledrejection", e), !(ht && !ht.__SENTRY_LOADER__) || ht.apply(this, arguments);
      }, Ke.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
      break;
    default:
      return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn("unknown instrumentation type:", e));
  }
}
function nt(e, t) {
  Ze[e] = Ze[e] || [], Ze[e].push(t), tt(e);
}
function rt(e, t) {
  if (e && Ze[e]) for (const n of Ze[e] || []) try {
    n(t);
  } catch (t) {
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${Je(n)}\nError:`, t);
  }
}
function it(e, t) {
  return !!e && "object" == typeof e && !!e[t];
}
function ot(e) {
  return "string" == typeof e ? e : e ? it(e, "url") ? e.url : e.toString ? e.toString() : "" : "";
}
let at;
const st = 1e3;
let ct, lt;
function ut(e, t = !1) {
  return n => {
    if (!n || lt === n) return;
    if (function (e) {
      if ("keypress" !== e.type) return !1;
      try {
        const t = e.target;
        if (!t || !t.tagName) return !0;
        if ("INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable) return !1;
      } catch (e) {}
      return !0;
    }(n)) return;
    const r = "keypress" === n.type ? "input" : n.type;
    (void 0 === ct || function (e, t) {
      if (!e) return !0;
      if (e.type !== t.type) return !0;
      try {
        if (e.target !== t.target) return !0;
      } catch (e) {}
      return !1;
    }(lt, n)) && (e({
      event: n,
      name: r,
      global: t
    }), lt = n), clearTimeout(ct), ct = Ke.setTimeout(() => {
      ct = void 0;
    }, st);
  };
}
let dt = null;
let ht = null;
function pt() {
  const e = be,
    t = e.crypto || e.msCrypto;
  if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
  const n = t && t.getRandomValues ? () => t.getRandomValues(new Uint8Array(1))[0] : () => 16 * Math.random();
  return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, e => (e ^ (15 & n()) >> e / 4).toString(16));
}
function ft(e) {
  return e.exception && e.exception.values ? e.exception.values[0] : void 0;
}
function gt(e) {
  const {
    message: t,
    event_id: n
  } = e;
  if (t) return t;
  const r = ft(e);
  return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>";
}
function mt(e, t, n) {
  const r = e.exception = e.exception || {},
    i = r.values = r.values || [],
    o = i[0] = i[0] || {};
  o.value || (o.value = t || ""), o.type || (o.type = n || "Error");
}
function vt(e, t) {
  const n = ft(e);
  if (!n) return;
  const r = n.mechanism;
  if (n.mechanism = {
    type: "generic",
    handled: !0,
    ...r,
    ...t
  }, t && "data" in t) {
    const e = {
      ...(r && r.data),
      ...t.data
    };
    n.mechanism.data = e;
  }
}
function yt(e) {
  if (e && e.__sentry_captured__) return !0;
  try {
    Re(e, "__sentry_captured__", !0);
  } catch (e) {}
  return !1;
}
function _t(e, t = 100, n = 1 / 0) {
  try {
    return wt("", e, t, n);
  } catch (e) {
    return {
      ERROR: `**non-serializable** (${e})`
    };
  }
}
function bt(e, t = 3, n = 102400) {
  const r = _t(e, t);
  return i = r, function (e) {
    return ~-encodeURI(e).split(/%..|./).length;
  }(JSON.stringify(i)) > n ? bt(e, t - 1, n) : r;
  var i;
}
function wt(e, t, n = 1 / 0, r = 1 / 0, i = function () {
  const e = "function" == typeof WeakSet,
    t = e ? new WeakSet() : [];
  return [function (n) {
    if (e) return !!t.has(n) || (t.add(n), !1);
    for (let e = 0; e < t.length; e++) if (t[e] === n) return !0;
    return t.push(n), !1;
  }, function (n) {
    if (e) t.delete(n);else for (let e = 0; e < t.length; e++) if (t[e] === n) {
      t.splice(e, 1);
      break;
    }
  }];
}()) {
  const [o, a] = i;
  if (null == t || ["number", "boolean", "string"].includes(typeof t) && ("number" != typeof (s = t) || s == s)) return t;
  var s;
  const c = function (e, t) {
    try {
      if ("domain" === e && t && "object" == typeof t && t._events) return "[Domain]";
      if ("domainEmitter" === e) return "[DomainEmitter]";
      if ("undefined" != typeof global && t === global) return "[Global]";
      if ("undefined" != typeof window && t === window) return "[Window]";
      if ("undefined" != typeof document && t === document) return "[Document]";
      if (function (e) {
        return se(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
      }(t)) return "[SyntheticEvent]";
      if ("number" == typeof t && t != t) return "[NaN]";
      if ("function" == typeof t) return `[Function: ${Je(t)}]`;
      if ("symbol" == typeof t) return `[${String(t)}]`;
      if ("bigint" == typeof t) return `[BigInt: ${String(t)}]`;
      const n = function (e) {
        const t = Object.getPrototypeOf(e);
        return t ? t.constructor.name : "null prototype";
      }(t);
      return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`;
    } catch (e) {
      return `**non-serializable** (${e})`;
    }
  }(e, t);
  if (!c.startsWith("[object ")) return c;
  if (t.__sentry_skip_normalization__) return t;
  const l = "number" == typeof t.__sentry_override_normalization_depth__ ? t.__sentry_override_normalization_depth__ : n;
  if (0 === l) return c.replace("object ", "");
  if (o(t)) return "[Circular ~]";
  const u = t;
  if (u && "function" == typeof u.toJSON) try {
    return wt("", u.toJSON(), l - 1, r, i);
  } catch (e) {}
  const d = Array.isArray(t) ? [] : {};
  let h = 0;
  const p = Ue(t);
  for (const e in p) {
    if (!Object.prototype.hasOwnProperty.call(p, e)) continue;
    if (h >= r) {
      d[e] = "[MaxProperties ~]";
      break;
    }
    const t = p[e];
    d[e] = wt(e, t, l - 1, r, i), h++;
  }
  return a(t), d;
}
var St;
function kt(e) {
  return new Mt(t => {
    t(e);
  });
}
function Et(e) {
  return new Mt((t, n) => {
    n(e);
  });
}
!function (e) {
  e[e.PENDING = 0] = "PENDING";
  e[e.RESOLVED = 1] = "RESOLVED";
  e[e.REJECTED = 2] = "REJECTED";
}(St || (St = {}));
class Mt {
  __init() {
    this._state = St.PENDING;
  }
  __init2() {
    this._handlers = [];
  }
  constructor(e) {
    Mt.prototype.__init.call(this), Mt.prototype.__init2.call(this), Mt.prototype.__init3.call(this), Mt.prototype.__init4.call(this), Mt.prototype.__init5.call(this), Mt.prototype.__init6.call(this);
    try {
      e(this._resolve, this._reject);
    } catch (e) {
      this._reject(e);
    }
  }
  then(e, t) {
    return new Mt((n, r) => {
      this._handlers.push([!1, t => {
        if (e) try {
          n(e(t));
        } catch (e) {
          r(e);
        } else n(t);
      }, e => {
        if (t) try {
          n(t(e));
        } catch (e) {
          r(e);
        } else r(e);
      }]), this._executeHandlers();
    });
  }
  catch(e) {
    return this.then(e => e, e);
  }
  finally(e) {
    return new Mt((t, n) => {
      let r, i;
      return this.then(t => {
        i = !1, r = t, e && e();
      }, t => {
        i = !0, r = t, e && e();
      }).then(() => {
        i ? n(r) : t(r);
      });
    });
  }
  __init3() {
    this._resolve = e => {
      this._setResult(St.RESOLVED, e);
    };
  }
  __init4() {
    this._reject = e => {
      this._setResult(St.REJECTED, e);
    };
  }
  __init5() {
    this._setResult = (e, t) => {
      this._state === St.PENDING && (le(t) ? t.then(this._resolve, this._reject) : (this._state = e, this._value = t, this._executeHandlers()));
    };
  }
  __init6() {
    this._executeHandlers = () => {
      if (this._state === St.PENDING) return;
      const e = this._handlers.slice();
      this._handlers = [], e.forEach(e => {
        e[0] || (this._state === St.RESOLVED && e[1](this._value), this._state === St.REJECTED && e[2](this._value), e[0] = !0);
      });
    };
  }
}
function Tt(e) {
  const t = [];
  function n(e) {
    return t.splice(t.indexOf(e), 1)[0];
  }
  return {
    $: t,
    add: function (r) {
      if (!(void 0 === e || t.length < e)) return Et(new Ne("Not adding Promise because buffer limit was reached."));
      const i = r();
      return -1 === t.indexOf(i) && t.push(i), i.then(() => n(i)).then(null, () => n(i).then(null, () => {})), i;
    },
    drain: function (e) {
      return new Mt((n, r) => {
        let i = t.length;
        if (!i) return n(!0);
        const o = setTimeout(() => {
          e && e > 0 && n(!1);
        }, e);
        t.forEach(e => {
          kt(e).then(() => {
            --i || (clearTimeout(o), n(!0));
          }, r);
        });
      });
    }
  };
}
function Ct(e) {
  if (!e) return {};
  const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!t) return {};
  const n = t[6] || "",
    r = t[8] || "";
  return {
    host: t[4],
    path: t[5],
    protocol: t[2],
    search: n,
    hash: r,
    relative: t[5] + n + r
  };
}
const Ot = ["fatal", "error", "warning", "log", "info", "debug"];
const Pt = we(),
  xt = {
    nowSeconds: () => Date.now() / 1e3
  };
const At = "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__ || "[object process]" !== Object.prototype.toString.call("undefined" != typeof process ? process : 0) ? function () {
    const {
      performance: e
    } = Pt;
    if (!e || !e.now) return;
    return {
      now: () => e.now(),
      timeOrigin: Date.now() - e.now()
    };
  }() : function () {
    try {
      return (e = module, t = "perf_hooks", e.require(t)).performance;
    } catch (e) {
      return;
    }
    var e, t;
  }(),
  jt = void 0 === At ? xt : {
    nowSeconds: () => (At.timeOrigin + At.now()) / 1e3
  },
  Lt = xt.nowSeconds.bind(xt),
  Dt = jt.nowSeconds.bind(jt);
function Nt(e, t = []) {
  return [e, t];
}
function It(e, t) {
  const [n, r] = e;
  return [n, [...r, t]];
}
function Rt(e, t) {
  const n = e[1];
  for (const e of n) {
    if (t(e, e[0].type)) return !0;
  }
  return !1;
}
function Bt(e, t) {
  return (t || new TextEncoder()).encode(e);
}
function Ft(e, t) {
  const [n, r] = e;
  let i = JSON.stringify(n);
  function o(e) {
    "string" == typeof i ? i = "string" == typeof e ? i + e : [Bt(i, t), e] : i.push("string" == typeof e ? Bt(e, t) : e);
  }
  for (const e of r) {
    const [t, n] = e;
    if (o(`\n${JSON.stringify(t)}\n`), "string" == typeof n || n instanceof Uint8Array) o(n);else {
      let e;
      try {
        e = JSON.stringify(n);
      } catch (t) {
        e = JSON.stringify(_t(n));
      }
      o(e);
    }
  }
  return "string" == typeof i ? i : function (e) {
    const t = e.reduce((e, t) => e + t.length, 0),
      n = new Uint8Array(t);
    let r = 0;
    for (const t of e) n.set(t, r), r += t.length;
    return n;
  }(i);
}
function Ut(e, t) {
  const n = "string" == typeof e.data ? Bt(e.data, t) : e.data;
  return [Ge({
    type: "attachment",
    length: n.length,
    filename: e.filename,
    content_type: e.contentType,
    attachment_type: e.attachmentType
  }), n];
}
(() => {
  const {
    performance: e
  } = Pt;
  if (!e || !e.now) return;
  const t = 36e5,
    n = e.now(),
    r = Date.now(),
    i = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t,
    o = i < t,
    a = e.timing && e.timing.navigationStart,
    s = "number" == typeof a ? Math.abs(a + n - r) : t;
  (o || s < t) && i <= s && e.timeOrigin;
})();
const Vt = {
  session: "session",
  sessions: "session",
  attachment: "attachment",
  transaction: "transaction",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor"
};
function $t(e) {
  return Vt[e];
}
function Gt(e) {
  if (!e || !e.sdk) return;
  const {
    name: t,
    version: n
  } = e.sdk;
  return {
    name: t,
    version: n
  };
}
const qt = 6e4;
function Yt(e, {
  statusCode: t,
  headers: n
}, r = Date.now()) {
  const i = {
      ...e
    },
    o = n && n["x-sentry-rate-limits"],
    a = n && n["retry-after"];
  if (o) for (const e of o.trim().split(",")) {
    const [t, n] = e.split(":", 2),
      o = parseInt(t, 10),
      a = 1e3 * (isNaN(o) ? 60 : o);
    if (n) for (const e of n.split(";")) i[e] = r + a;else i.all = r + a;
  } else a ? i.all = r + function (e, t = Date.now()) {
    const n = parseInt(`${e}`, 10);
    if (!isNaN(n)) return 1e3 * n;
    const r = Date.parse(`${e}`);
    return isNaN(r) ? qt : r - t;
  }(a, r) : 429 === t && (i.all = r + 6e4);
  return i;
}
const Jt = "production";
function Wt(e) {
  const t = Dt(),
    n = {
      sid: pt(),
      init: !0,
      timestamp: t,
      started: t,
      duration: 0,
      status: "ok",
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => function (e) {
        return Ge({
          sid: `${e.sid}`,
          init: e.init,
          started: new Date(1e3 * e.started).toISOString(),
          timestamp: new Date(1e3 * e.timestamp).toISOString(),
          status: e.status,
          errors: e.errors,
          did: "number" == typeof e.did || "string" == typeof e.did ? `${e.did}` : void 0,
          duration: e.duration,
          attrs: {
            release: e.release,
            environment: e.environment,
            ip_address: e.ipAddress,
            user_agent: e.userAgent
          }
        });
      }(n)
    };
  return e && zt(n, e), n;
}
function zt(e, t = {}) {
  if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || Dt(), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = 32 === t.sid.length ? t.sid : pt()), void 0 !== t.init && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), "number" == typeof t.started && (e.started = t.started), e.ignoreDuration) e.duration = void 0;else if ("number" == typeof t.duration) e.duration = t.duration;else {
    const t = e.timestamp - e.started;
    e.duration = t >= 0 ? t : 0;
  }
  t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), "number" == typeof t.errors && (e.errors = t.errors), t.status && (e.status = t.status);
}
class Ht {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = Xt();
  }
  static clone(e) {
    const t = new Ht();
    return e && (t._breadcrumbs = [...e._breadcrumbs], t._tags = {
      ...e._tags
    }, t._extra = {
      ...e._extra
    }, t._contexts = {
      ...e._contexts
    }, t._user = e._user, t._level = e._level, t._span = e._span, t._session = e._session, t._transactionName = e._transactionName, t._fingerprint = e._fingerprint, t._eventProcessors = [...e._eventProcessors], t._requestSession = e._requestSession, t._attachments = [...e._attachments], t._sdkProcessingMetadata = {
      ...e._sdkProcessingMetadata
    }, t._propagationContext = {
      ...e._propagationContext
    }), t;
  }
  addScopeListener(e) {
    this._scopeListeners.push(e);
  }
  addEventProcessor(e) {
    return this._eventProcessors.push(e), this;
  }
  setUser(e) {
    return this._user = e || {}, this._session && zt(this._session, {
      user: e
    }), this._notifyScopeListeners(), this;
  }
  getUser() {
    return this._user;
  }
  getRequestSession() {
    return this._requestSession;
  }
  setRequestSession(e) {
    return this._requestSession = e, this;
  }
  setTags(e) {
    return this._tags = {
      ...this._tags,
      ...e
    }, this._notifyScopeListeners(), this;
  }
  setTag(e, t) {
    return this._tags = {
      ...this._tags,
      [e]: t
    }, this._notifyScopeListeners(), this;
  }
  setExtras(e) {
    return this._extra = {
      ...this._extra,
      ...e
    }, this._notifyScopeListeners(), this;
  }
  setExtra(e, t) {
    return this._extra = {
      ...this._extra,
      [e]: t
    }, this._notifyScopeListeners(), this;
  }
  setFingerprint(e) {
    return this._fingerprint = e, this._notifyScopeListeners(), this;
  }
  setLevel(e) {
    return this._level = e, this._notifyScopeListeners(), this;
  }
  setTransactionName(e) {
    return this._transactionName = e, this._notifyScopeListeners(), this;
  }
  setContext(e, t) {
    return null === t ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), this;
  }
  setSpan(e) {
    return this._span = e, this._notifyScopeListeners(), this;
  }
  getSpan() {
    return this._span;
  }
  getTransaction() {
    const e = this.getSpan();
    return e && e.transaction;
  }
  setSession(e) {
    return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this;
  }
  getSession() {
    return this._session;
  }
  update(e) {
    if (!e) return this;
    if ("function" == typeof e) {
      const t = e(this);
      return t instanceof Ht ? t : this;
    }
    return e instanceof Ht ? (this._tags = {
      ...this._tags,
      ...e._tags
    }, this._extra = {
      ...this._extra,
      ...e._extra
    }, this._contexts = {
      ...this._contexts,
      ...e._contexts
    }, e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession), e._propagationContext && (this._propagationContext = e._propagationContext)) : se(e) && (this._tags = {
      ...this._tags,
      ...e.tags
    }, this._extra = {
      ...this._extra,
      ...e.extra
    }, this._contexts = {
      ...this._contexts,
      ...e.contexts
    }, e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession), e.propagationContext && (this._propagationContext = e.propagationContext)), this;
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = Xt(), this;
  }
  addBreadcrumb(e, t) {
    const n = "number" == typeof t ? t : 100;
    if (n <= 0) return this;
    const r = {
      timestamp: Lt(),
      ...e
    };
    return this._breadcrumbs = [...this._breadcrumbs, r].slice(-n), this._notifyScopeListeners(), this;
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    return this._breadcrumbs = [], this._notifyScopeListeners(), this;
  }
  addAttachment(e) {
    return this._attachments.push(e), this;
  }
  getAttachments() {
    return this._attachments;
  }
  clearAttachments() {
    return this._attachments = [], this;
  }
  applyToEvent(e, t = {}) {
    if (this._extra && Object.keys(this._extra).length && (e.extra = {
      ...this._extra,
      ...e.extra
    }), this._tags && Object.keys(this._tags).length && (e.tags = {
      ...this._tags,
      ...e.tags
    }), this._user && Object.keys(this._user).length && (e.user = {
      ...this._user,
      ...e.user
    }), this._contexts && Object.keys(this._contexts).length && (e.contexts = {
      ...this._contexts,
      ...e.contexts
    }), this._level && (e.level = this._level), this._transactionName && (e.transaction = this._transactionName), this._span) {
      e.contexts = {
        trace: this._span.getTraceContext(),
        ...e.contexts
      };
      const t = this._span.transaction;
      if (t) {
        e.sdkProcessingMetadata = {
          dynamicSamplingContext: t.getDynamicSamplingContext(),
          ...e.sdkProcessingMetadata
        };
        const n = t.name;
        n && (e.tags = {
          transaction: n,
          ...e.tags
        });
      }
    }
    return this._applyFingerprint(e), e.breadcrumbs = [...(e.breadcrumbs || []), ...this._breadcrumbs], e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0, e.sdkProcessingMetadata = {
      ...e.sdkProcessingMetadata,
      ...this._sdkProcessingMetadata,
      propagationContext: this._propagationContext
    }, this._notifyEventProcessors([...Qt(), ...this._eventProcessors], e, t);
  }
  setSDKProcessingMetadata(e) {
    return this._sdkProcessingMetadata = {
      ...this._sdkProcessingMetadata,
      ...e
    }, this;
  }
  setPropagationContext(e) {
    return this._propagationContext = e, this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  _notifyEventProcessors(e, t, n, r = 0) {
    return new Mt((i, o) => {
      const a = e[r];
      if (null === t || "function" != typeof a) i(t);else {
        const s = a({
          ...t
        }, n);
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.id && null === s && xe.log(`Event processor "${a.id}" dropped event`), le(s) ? s.then(t => this._notifyEventProcessors(e, t, n, r + 1).then(i)).then(null, o) : this._notifyEventProcessors(e, s, n, r + 1).then(i).then(null, o);
      }
    });
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
      e(this);
    }), this._notifyingListeners = !1);
  }
  _applyFingerprint(e) {
    var t;
    e.fingerprint = e.fingerprint ? (t = e.fingerprint, Array.isArray(t) ? t : [t]) : [], this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
  }
}
function Qt() {
  return Se("globalEventProcessors", () => []);
}
function Kt(e) {
  Qt().push(e);
}
function Xt() {
  return {
    traceId: pt(),
    spanId: pt().substring(16),
    sampled: !1
  };
}
const Zt = 4,
  en = 100;
class tn {
  constructor(e, t = new Ht(), n = Zt) {
    this._version = n, this._stack = [{
      scope: t
    }], e && this.bindClient(e);
  }
  isOlderThan(e) {
    return this._version < e;
  }
  bindClient(e) {
    this.getStackTop().client = e, e && e.setupIntegrations && e.setupIntegrations();
  }
  pushScope() {
    const e = Ht.clone(this.getScope());
    return this.getStack().push({
      client: this.getClient(),
      scope: e
    }), e;
  }
  popScope() {
    return !(this.getStack().length <= 1) && !!this.getStack().pop();
  }
  withScope(e) {
    const t = this.pushScope();
    try {
      e(t);
    } finally {
      this.popScope();
    }
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getStack() {
    return this._stack;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  captureException(e, t) {
    const n = this._lastEventId = t && t.event_id ? t.event_id : pt(),
      r = new Error("Sentry syntheticException");
    return this._withClient((i, o) => {
      i.captureException(e, {
        originalException: e,
        syntheticException: r,
        ...t,
        event_id: n
      }, o);
    }), n;
  }
  captureMessage(e, t, n) {
    const r = this._lastEventId = n && n.event_id ? n.event_id : pt(),
      i = new Error(e);
    return this._withClient((o, a) => {
      o.captureMessage(e, t, {
        originalException: e,
        syntheticException: i,
        ...n,
        event_id: r
      }, a);
    }), r;
  }
  captureEvent(e, t) {
    const n = t && t.event_id ? t.event_id : pt();
    return e.type || (this._lastEventId = n), this._withClient((r, i) => {
      r.captureEvent(e, {
        ...t,
        event_id: n
      }, i);
    }), n;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addBreadcrumb(e, t) {
    const {
      scope: n,
      client: r
    } = this.getStackTop();
    if (!r) return;
    const {
      beforeBreadcrumb: i = null,
      maxBreadcrumbs: o = en
    } = r.getOptions && r.getOptions() || {};
    if (o <= 0) return;
    const a = {
        timestamp: Lt(),
        ...e
      },
      s = i ? Oe(() => i(a, t)) : a;
    null !== s && (r.emit && r.emit("beforeAddBreadcrumb", s, t), n.addBreadcrumb(s, o));
  }
  setUser(e) {
    this.getScope().setUser(e);
  }
  setTags(e) {
    this.getScope().setTags(e);
  }
  setExtras(e) {
    this.getScope().setExtras(e);
  }
  setTag(e, t) {
    this.getScope().setTag(e, t);
  }
  setExtra(e, t) {
    this.getScope().setExtra(e, t);
  }
  setContext(e, t) {
    this.getScope().setContext(e, t);
  }
  configureScope(e) {
    const {
      scope: t,
      client: n
    } = this.getStackTop();
    n && e(t);
  }
  run(e) {
    const t = rn(this);
    try {
      e(this);
    } finally {
      rn(t);
    }
  }
  getIntegration(e) {
    const t = this.getClient();
    if (!t) return null;
    try {
      return t.getIntegration(e);
    } catch (t) {
      return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn(`Cannot retrieve integration ${e.id} from the current Hub`), null;
    }
  }
  startTransaction(e, t) {
    const n = this._callExtensionMethod("startTransaction", e, t);
    return "undefined" != typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__ || n || console.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n"), n;
  }
  traceHeaders() {
    return this._callExtensionMethod("traceHeaders");
  }
  captureSession(e = !1) {
    if (e) return this.endSession();
    this._sendSessionUpdate();
  }
  endSession() {
    const e = this.getStackTop().scope,
      t = e.getSession();
    t && function (e, t) {
      let n = {};
      t ? n = {
        status: t
      } : "ok" === e.status && (n = {
        status: "exited"
      }), zt(e, n);
    }(t), this._sendSessionUpdate(), e.setSession();
  }
  startSession(e) {
    const {
        scope: t,
        client: n
      } = this.getStackTop(),
      {
        release: r,
        environment: i = Jt
      } = n && n.getOptions() || {},
      {
        userAgent: o
      } = be.navigator || {},
      a = Wt({
        release: r,
        environment: i,
        user: t.getUser(),
        ...(o && {
          userAgent: o
        }),
        ...e
      }),
      s = t.getSession && t.getSession();
    return s && "ok" === s.status && zt(s, {
      status: "exited"
    }), this.endSession(), t.setSession(a), a;
  }
  shouldSendDefaultPii() {
    const e = this.getClient(),
      t = e && e.getOptions();
    return Boolean(t && t.sendDefaultPii);
  }
  _sendSessionUpdate() {
    const {
        scope: e,
        client: t
      } = this.getStackTop(),
      n = e.getSession();
    n && t && t.captureSession && t.captureSession(n);
  }
  _withClient(e) {
    const {
      scope: t,
      client: n
    } = this.getStackTop();
    n && e(n, t);
  }
  _callExtensionMethod(e, ...t) {
    const n = nn().__SENTRY__;
    if (n && n.extensions && "function" == typeof n.extensions[e]) return n.extensions[e].apply(this, t);
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn(`Extension method ${e} couldn't be found, doing nothing.`);
  }
}
function nn() {
  return be.__SENTRY__ = be.__SENTRY__ || {
    extensions: {},
    hub: void 0
  }, be;
}
function rn(e) {
  const t = nn(),
    n = an(t);
  return sn(t, e), n;
}
function on() {
  const e = nn();
  if (e.__SENTRY__ && e.__SENTRY__.acs) {
    const t = e.__SENTRY__.acs.getCurrentHub();
    if (t) return t;
  }
  return function (e = nn()) {
    t = e, t && t.__SENTRY__ && t.__SENTRY__.hub && !an(e).isOlderThan(Zt) || sn(e, new tn());
    var t;
    return an(e);
  }(e);
}
function an(e) {
  return Se("hub", () => new tn(), e);
}
function sn(e, t) {
  if (!e) return !1;
  return (e.__SENTRY__ = e.__SENTRY__ || {}).hub = t, !0;
}
const cn = "7";
function ln(e, t) {
  return n = {
    sentry_key: e.publicKey,
    sentry_version: cn,
    ...(t && {
      sentry_client: `${t.name}/${t.version}`
    })
  }, Object.keys(n).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(n[e])}`).join("&");
  var n;
}
function un(e, t, n, r) {
  const i = Gt(n),
    o = e.type && "replay_event" !== e.type ? e.type : "event";
  !function (e, t) {
    t && (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || t.name, e.sdk.version = e.sdk.version || t.version, e.sdk.integrations = [...(e.sdk.integrations || []), ...(t.integrations || [])], e.sdk.packages = [...(e.sdk.packages || []), ...(t.packages || [])]);
  }(e, n && n.sdk);
  const a = function (e, t, n, r) {
    const i = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
    return {
      event_id: e.event_id,
      sent_at: new Date().toISOString(),
      ...(t && {
        sdk: t
      }),
      ...(!!n && {
        dsn: je(r)
      }),
      ...(i && {
        trace: Ge({
          ...i
        })
      })
    };
  }(e, i, r, t);
  delete e.sdkProcessingMetadata;
  return Nt(a, [[{
    type: o
  }, e]]);
}
const dn = [];
function hn(e, t) {
  t[e.name] = e, -1 === dn.indexOf(e.name) && (e.setupOnce(Kt, on), dn.push(e.name), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.log(`Integration installed: ${e.name}`));
}
function pn(e, t, n, r) {
  const {
      normalizeDepth: i = 3,
      normalizeMaxBreadth: o = 1e3
    } = e,
    a = {
      ...t,
      event_id: t.event_id || n.event_id || pt(),
      timestamp: t.timestamp || Lt()
    },
    s = n.integrations || e.integrations.map(e => e.name);
  !function (e, t) {
    const {
      environment: n,
      release: r,
      dist: i,
      maxValueLength: o = 250
    } = t;
    "environment" in e || (e.environment = "environment" in t ? n : Jt);
    void 0 === e.release && void 0 !== r && (e.release = r);
    void 0 === e.dist && void 0 !== i && (e.dist = i);
    e.message && (e.message = de(e.message, o));
    const a = e.exception && e.exception.values && e.exception.values[0];
    a && a.value && (a.value = de(a.value, o));
    const s = e.request;
    s && s.url && (s.url = de(s.url, o));
  }(a, e), function (e, t) {
    t.length > 0 && (e.sdk = e.sdk || {}, e.sdk.integrations = [...(e.sdk.integrations || []), ...t]);
  }(a, s), void 0 === t.type && function (e, t) {
    const n = be._sentryDebugIds;
    if (!n) return;
    let r;
    const i = fn.get(t);
    i ? r = i : (r = new Map(), fn.set(t, r));
    const o = Object.keys(n).reduce((e, i) => {
      let o;
      const a = r.get(i);
      a ? o = a : (o = t(i), r.set(i, o));
      for (let t = o.length - 1; t >= 0; t--) {
        const r = o[t];
        if (r.filename) {
          e[r.filename] = n[i];
          break;
        }
      }
      return e;
    }, {});
    try {
      e.exception.values.forEach(e => {
        e.stacktrace.frames.forEach(e => {
          e.filename && (e.debug_id = o[e.filename]);
        });
      });
    } catch (e) {}
  }(a, e.stackParser);
  let c = r;
  n.captureContext && (c = Ht.clone(c).update(n.captureContext));
  let l = kt(a);
  if (c) {
    if (c.getAttachments) {
      const e = [...(n.attachments || []), ...c.getAttachments()];
      e.length && (n.attachments = e);
    }
    l = c.applyToEvent(a, n);
  }
  return l.then(e => (e && function (e) {
    const t = {};
    try {
      e.exception.values.forEach(e => {
        e.stacktrace.frames.forEach(e => {
          e.debug_id && (e.abs_path ? t[e.abs_path] = e.debug_id : e.filename && (t[e.filename] = e.debug_id), delete e.debug_id);
        });
      });
    } catch (e) {}
    if (0 === Object.keys(t).length) return;
    e.debug_meta = e.debug_meta || {}, e.debug_meta.images = e.debug_meta.images || [];
    const n = e.debug_meta.images;
    Object.keys(t).forEach(e => {
      n.push({
        type: "sourcemap",
        code_file: e,
        debug_id: t[e]
      });
    });
  }(e), "number" == typeof i && i > 0 ? function (e, t, n) {
    if (!e) return null;
    const r = {
      ...e,
      ...(e.breadcrumbs && {
        breadcrumbs: e.breadcrumbs.map(e => ({
          ...e,
          ...(e.data && {
            data: _t(e.data, t, n)
          })
        }))
      }),
      ...(e.user && {
        user: _t(e.user, t, n)
      }),
      ...(e.contexts && {
        contexts: _t(e.contexts, t, n)
      }),
      ...(e.extra && {
        extra: _t(e.extra, t, n)
      })
    };
    e.contexts && e.contexts.trace && r.contexts && (r.contexts.trace = e.contexts.trace, e.contexts.trace.data && (r.contexts.trace.data = _t(e.contexts.trace.data, t, n)));
    e.spans && (r.spans = e.spans.map(e => (e.data && (e.data = _t(e.data, t, n)), e)));
    return r;
  }(e, i, o) : e));
}
const fn = new WeakMap();
const gn = "Not capturing exception because it's already been captured.";
class mn {
  __init() {
    this._integrations = {};
  }
  __init2() {
    this._integrationsInitialized = !1;
  }
  __init3() {
    this._numProcessing = 0;
  }
  __init4() {
    this._outcomes = {};
  }
  __init5() {
    this._hooks = {};
  }
  constructor(e) {
    if (mn.prototype.__init.call(this), mn.prototype.__init2.call(this), mn.prototype.__init3.call(this), mn.prototype.__init4.call(this), mn.prototype.__init5.call(this), this._options = e, e.dsn ? this._dsn = De(e.dsn) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn("No DSN provided, client will not do anything."), this._dsn) {
      const t = function (e, t = {}) {
        const n = "string" == typeof t ? t : t.tunnel,
          r = "string" != typeof t && t._metadata ? t._metadata.sdk : void 0;
        return n || `${function (e) {
          return `${function (e) {
            const t = e.protocol ? `${e.protocol}:` : "",
              n = e.port ? `:${e.port}` : "";
            return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
          }(e)}${e.projectId}/envelope/`;
        }(e)}?${ln(e, r)}`;
      }(this._dsn, e);
      this._transport = e.transport({
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...e.transportOptions,
        url: t
      });
    }
  }
  captureException(e, t, n) {
    if (yt(e)) return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.log(gn));
    let r = t && t.event_id;
    return this._process(this.eventFromException(e, t).then(e => this._captureEvent(e, t, n)).then(e => {
      r = e;
    })), r;
  }
  captureMessage(e, t, n, r) {
    let i = n && n.event_id;
    const o = ae(e) ? this.eventFromMessage(String(e), t, n) : this.eventFromException(e, n);
    return this._process(o.then(e => this._captureEvent(e, n, r)).then(e => {
      i = e;
    })), i;
  }
  captureEvent(e, t, n) {
    if (t && t.originalException && yt(t.originalException)) return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.log(gn));
    let r = t && t.event_id;
    return this._process(this._captureEvent(e, t, n).then(e => {
      r = e;
    })), r;
  }
  captureSession(e) {
    this._isEnabled() ? "string" != typeof e.release ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), zt(e, {
      init: !1
    })) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn("SDK not enabled, will not capture session.");
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  flush(e) {
    const t = this._transport;
    return t ? this._isClientDoneProcessing(e).then(n => t.flush(e).then(e => n && e)) : kt(!0);
  }
  close(e) {
    return this.flush(e).then(e => (this.getOptions().enabled = !1, e));
  }
  setupIntegrations() {
    this._isEnabled() && !this._integrationsInitialized && (this._integrations = function (e) {
      const t = {};
      return e.forEach(e => {
        e && hn(e, t);
      }), t;
    }(this._options.integrations), this._integrationsInitialized = !0);
  }
  getIntegrationById(e) {
    return this._integrations[e];
  }
  getIntegration(e) {
    try {
      return this._integrations[e.id] || null;
    } catch (t) {
      return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn(`Cannot retrieve integration ${e.id} from the current Client`), null;
    }
  }
  addIntegration(e) {
    hn(e, this._integrations);
  }
  sendEvent(e, t = {}) {
    if (this._dsn) {
      let n = un(e, this._dsn, this._options._metadata, this._options.tunnel);
      for (const e of t.attachments || []) n = It(n, Ut(e, this._options.transportOptions && this._options.transportOptions.textEncoder));
      const r = this._sendEnvelope(n);
      r && r.then(t => this.emit("afterSendEvent", e, t), null);
    }
  }
  sendSession(e) {
    if (this._dsn) {
      const t = function (e, t, n, r) {
        const i = Gt(n);
        return Nt({
          sent_at: new Date().toISOString(),
          ...(i && {
            sdk: i
          }),
          ...(!!r && {
            dsn: je(t)
          })
        }, ["aggregates" in e ? [{
          type: "sessions"
        }, e] : [{
          type: "session"
        }, e.toJSON()]]);
      }(e, this._dsn, this._options._metadata, this._options.tunnel);
      this._sendEnvelope(t);
    }
  }
  recordDroppedEvent(e, t, n) {
    if (this._options.sendClientReports) {
      const n = `${e}:${t}`;
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.log(`Adding outcome: "${n}"`), this._outcomes[n] = this._outcomes[n] + 1 || 1;
    }
  }
  on(e, t) {
    this._hooks[e] || (this._hooks[e] = []), this._hooks[e].push(t);
  }
  emit(e, ...t) {
    this._hooks[e] && this._hooks[e].forEach(e => e(...t));
  }
  _updateSessionFromEvent(e, t) {
    let n = !1,
      r = !1;
    const i = t.exception && t.exception.values;
    if (i) {
      r = !0;
      for (const e of i) {
        const t = e.mechanism;
        if (t && !1 === t.handled) {
          n = !0;
          break;
        }
      }
    }
    const o = "ok" === e.status;
    (o && 0 === e.errors || o && n) && (zt(e, {
      ...(n && {
        status: "crashed"
      }),
      errors: e.errors || Number(r || n)
    }), this.captureSession(e));
  }
  _isClientDoneProcessing(e) {
    return new Mt(t => {
      let n = 0;
      const r = setInterval(() => {
        0 == this._numProcessing ? (clearInterval(r), t(!0)) : (n += 1, e && n >= e && (clearInterval(r), t(!1)));
      }, 1);
    });
  }
  _isEnabled() {
    return !1 !== this.getOptions().enabled && void 0 !== this._dsn;
  }
  _prepareEvent(e, t, n) {
    const r = this.getOptions(),
      i = Object.keys(this._integrations);
    return !t.integrations && i.length > 0 && (t.integrations = i), pn(r, e, t, n).then(e => {
      if (null === e) return e;
      const {
        propagationContext: t
      } = e.sdkProcessingMetadata || {};
      if (!(e.contexts && e.contexts.trace) && t) {
        const {
          traceId: r,
          spanId: i,
          parentSpanId: o,
          dsc: a
        } = t;
        e.contexts = {
          trace: {
            trace_id: r,
            span_id: i,
            parent_span_id: o
          },
          ...e.contexts
        };
        const s = a || function (e, t, n) {
          const r = t.getOptions(),
            {
              publicKey: i
            } = t.getDsn() || {},
            {
              segment: o
            } = n && n.getUser() || {},
            a = Ge({
              environment: r.environment || Jt,
              release: r.release,
              user_segment: o,
              public_key: i,
              trace_id: e
            });
          return t.emit && t.emit("createDsc", a), a;
        }(r, this, n);
        e.sdkProcessingMetadata = {
          dynamicSamplingContext: s,
          ...e.sdkProcessingMetadata
        };
      }
      return e;
    });
  }
  _captureEvent(e, t = {}, n) {
    return this._processEvent(e, t, n).then(e => e.event_id, e => {
      if ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
        const t = e;
        "log" === t.logLevel ? xe.log(t.message) : xe.warn(t);
      }
    });
  }
  _processEvent(e, t, n) {
    const r = this.getOptions(),
      {
        sampleRate: i
      } = r;
    if (!this._isEnabled()) return Et(new Ne("SDK not enabled, will not capture event.", "log"));
    const o = yn(e),
      a = vn(e),
      s = e.type || "error",
      c = `before send for type \`${s}\``;
    if (a && "number" == typeof i && Math.random() > i) return this.recordDroppedEvent("sample_rate", "error", e), Et(new Ne(`Discarding event because it's not included in the random sample (sampling rate = ${i})`, "log"));
    const l = "replay_event" === s ? "replay" : s;
    return this._prepareEvent(e, t, n).then(n => {
      if (null === n) throw this.recordDroppedEvent("event_processor", l, e), new Ne("An event processor returned `null`, will not send event.", "log");
      if (t.data && !0 === t.data.__sentry__) return n;
      const i = function (e, t, n) {
        const {
          beforeSend: r,
          beforeSendTransaction: i
        } = e;
        if (vn(t) && r) return r(t, n);
        if (yn(t) && i) return i(t, n);
        return t;
      }(r, n, t);
      return function (e, t) {
        const n = `${t} must return \`null\` or a valid event.`;
        if (le(e)) return e.then(e => {
          if (!se(e) && null !== e) throw new Ne(n);
          return e;
        }, e => {
          throw new Ne(`${t} rejected with ${e}`);
        });
        if (!se(e) && null !== e) throw new Ne(n);
        return e;
      }(i, c);
    }).then(r => {
      if (null === r) throw this.recordDroppedEvent("before_send", l, e), new Ne(`${c} returned \`null\`, will not send event.`, "log");
      const i = n && n.getSession();
      !o && i && this._updateSessionFromEvent(i, r);
      const a = r.transaction_info;
      if (o && a && r.transaction !== e.transaction) {
        const e = "custom";
        r.transaction_info = {
          ...a,
          source: e
        };
      }
      return this.sendEvent(r, t), r;
    }).then(null, e => {
      if (e instanceof Ne) throw e;
      throw this.captureException(e, {
        data: {
          __sentry__: !0
        },
        originalException: e
      }), new Ne(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`);
    });
  }
  _process(e) {
    this._numProcessing++, e.then(e => (this._numProcessing--, e), e => (this._numProcessing--, e));
  }
  _sendEnvelope(e) {
    if (this._transport && this._dsn) return this.emit("beforeEnvelope", e), this._transport.send(e).then(null, e => {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.error("Error while sending event:", e);
    });
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.error("Transport disabled");
  }
  _clearOutcomes() {
    const e = this._outcomes;
    return this._outcomes = {}, Object.keys(e).map(t => {
      const [n, r] = t.split(":");
      return {
        reason: n,
        category: r,
        quantity: e[t]
      };
    });
  }
}
function vn(e) {
  return void 0 === e.type;
}
function yn(e) {
  return "transaction" === e.type;
}
const _n = 30;
function bn(e, t, n = Tt(e.bufferSize || _n)) {
  let r = {};
  function i(i) {
    const o = [];
    if (Rt(i, (t, n) => {
      const i = $t(n);
      if (function (e, t, n = Date.now()) {
        return function (e, t) {
          return e[t] || e.all || 0;
        }(e, t) > n;
      }(r, i)) {
        const r = wn(t, n);
        e.recordDroppedEvent("ratelimit_backoff", i, r);
      } else o.push(t);
    }), 0 === o.length) return kt();
    const a = Nt(i[0], o),
      s = t => {
        Rt(a, (n, r) => {
          const i = wn(n, r);
          e.recordDroppedEvent(t, $t(r), i);
        });
      };
    return n.add(() => t({
      body: Ft(a, e.textEncoder)
    }).then(e => (void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn(`Sentry responded with status code ${e.statusCode} to sent event.`), r = Yt(r, e), e), e => {
      throw s("network_error"), e;
    })).then(e => e, e => {
      if (e instanceof Ne) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.error("Skipped sending event because buffer is full."), s("queue_overflow"), kt();
      throw e;
    });
  }
  return i.__sentry__baseTransport__ = !0, {
    send: i,
    flush: e => n.drain(e)
  };
}
function wn(e, t) {
  if ("event" === t || "transaction" === t) return Array.isArray(e) ? e[1] : void 0;
}
const Sn = "7.60.1";
let kn;
class En {
  constructor() {
    En.prototype.__init.call(this);
  }
  static __initStatic() {
    this.id = "FunctionToString";
  }
  __init() {
    this.name = En.id;
  }
  setupOnce() {
    kn = Function.prototype.toString;
    try {
      Function.prototype.toString = function (...e) {
        const t = Fe(this) || this;
        return kn.apply(t, e);
      };
    } catch (e) {}
  }
}
En.__initStatic();
const Mn = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
  Tn = [/^.*healthcheck.*$/, /^.*healthy.*$/, /^.*live.*$/, /^.*ready.*$/, /^.*heartbeat.*$/, /^.*\/health$/, /^.*\/healthz$/];
class Cn {
  static __initStatic() {
    this.id = "InboundFilters";
  }
  __init() {
    this.name = Cn.id;
  }
  constructor(e = {}) {
    this._options = e, Cn.prototype.__init.call(this);
  }
  setupOnce(e, t) {
    const n = e => {
      const n = t();
      if (n) {
        const t = n.getIntegration(Cn);
        if (t) {
          const r = n.getClient(),
            i = r ? r.getOptions() : {},
            o = function (e = {}, t = {}) {
              return {
                allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
                denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
                ignoreErrors: [...(e.ignoreErrors || []), ...(t.ignoreErrors || []), ...(e.disableErrorDefaults ? [] : Mn)],
                ignoreTransactions: [...(e.ignoreTransactions || []), ...(t.ignoreTransactions || []), ...(e.disableTransactionDefaults ? [] : Tn)],
                ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal
              };
            }(t._options, i);
          return function (e, t) {
            if (t.ignoreInternal && function (e) {
              try {
                return "SentryError" === e.exception.values[0].type;
              } catch (e) {}
              return !1;
            }(e)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${gt(e)}`), !0;
            if (function (e, t) {
              if (e.type || !t || !t.length) return !1;
              return function (e) {
                if (e.message) return [e.message];
                if (e.exception) {
                  const {
                    values: t
                  } = e.exception;
                  try {
                    const {
                      type: e = "",
                      value: n = ""
                    } = t && t[t.length - 1] || {};
                    return [`${n}`, `${e}: ${n}`];
                  } catch (t) {
                    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.error(`Cannot extract message for event ${gt(e)}`), [];
                  }
                }
                return [];
              }(e).some(e => fe(e, t));
            }(e, t.ignoreErrors)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${gt(e)}`), !0;
            if (function (e, t) {
              if ("transaction" !== e.type || !t || !t.length) return !1;
              const n = e.transaction;
              return !!n && fe(n, t);
            }(e, t.ignoreTransactions)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${gt(e)}`), !0;
            if (function (e, t) {
              if (!t || !t.length) return !1;
              const n = On(e);
              return !!n && fe(n, t);
            }(e, t.denyUrls)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${gt(e)}.\nUrl: ${On(e)}`), !0;
            if (!function (e, t) {
              if (!t || !t.length) return !0;
              const n = On(e);
              return !n || fe(n, t);
            }(e, t.allowUrls)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${gt(e)}.\nUrl: ${On(e)}`), !0;
            return !1;
          }(e, o) ? null : e;
        }
      }
      return e;
    };
    n.id = this.name, e(n);
  }
}
function On(e) {
  try {
    let t;
    try {
      t = e.exception.values[0].stacktrace.frames;
    } catch (e) {}
    return t ? function (e = []) {
      for (let t = e.length - 1; t >= 0; t--) {
        const n = e[t];
        if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null;
      }
      return null;
    }(t) : null;
  } catch (t) {
    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.error(`Cannot extract url for event ${gt(e)}`), null;
  }
}
Cn.__initStatic();
var Pn = Object.freeze({
  __proto__: null,
  FunctionToString: En,
  InboundFilters: Cn
});
const xn = be;
let An = 0;
function jn() {
  return An > 0;
}
function Ln(e, t = {}, n) {
  if ("function" != typeof e) return e;
  try {
    const t = e.__sentry_wrapped__;
    if (t) return t;
    if (Fe(e)) return e;
  } catch (t) {
    return e;
  }
  const r = function () {
    const r = Array.prototype.slice.call(arguments);
    try {
      n && "function" == typeof n && n.apply(this, arguments);
      const i = r.map(e => Ln(e, t));
      return e.apply(this, i);
    } catch (e) {
      throw An++, setTimeout(() => {
        An--;
      }), i = n => {
        var i, o;
        n.addEventProcessor(e => (t.mechanism && (mt(e, void 0, void 0), vt(e, t.mechanism)), e.extra = {
          ...e.extra,
          arguments: r
        }, e)), i = e, on().captureException(i, {
          captureContext: o
        });
      }, on().withScope(i), e;
    }
    var i;
  };
  try {
    for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
  } catch (e) {}
  Be(r, e), Re(e, "__sentry_wrapped__", r);
  try {
    Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
      get: () => e.name
    });
  } catch (e) {}
  return r;
}
function Dn(e, t) {
  const n = In(e, t),
    r = {
      type: t && t.name,
      value: Bn(t)
    };
  return n.length && (r.stacktrace = {
    frames: n
  }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r;
}
function Nn(e, t) {
  return {
    exception: {
      values: [Dn(e, t)]
    }
  };
}
function In(e, t) {
  const n = t.stacktrace || t.stack || "",
    r = function (e) {
      if (e) {
        if ("number" == typeof e.framesToPop) return e.framesToPop;
        if (Rn.test(e.message)) return 1;
      }
      return 0;
    }(t);
  try {
    return e(n, r);
  } catch (e) {}
  return [];
}
const Rn = /Minified React error #\d+;/i;
function Bn(e) {
  const t = e && e.message;
  return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message";
}
function Fn(e, t, n, r, i) {
  let o;
  if (re(t) && t.error) {
    return Nn(e, t.error);
  }
  if (ie(t) || ne(t, "DOMException")) {
    const i = t;
    if ("stack" in t) o = Nn(e, t);else {
      const t = i.name || (ie(i) ? "DOMError" : "DOMException"),
        a = i.message ? `${t}: ${i.message}` : t;
      o = Un(e, a, n, r), mt(o, a);
    }
    return "code" in i && (o.tags = {
      ...o.tags,
      "DOMException.code": `${i.code}`
    }), o;
  }
  if (te(t)) return Nn(e, t);
  if (se(t) || ce(t)) {
    return o = function (e, t, n, r) {
      const i = on().getClient(),
        o = i && i.getOptions().normalizeDepth,
        a = {
          exception: {
            values: [{
              type: ce(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
              value: Vn(t, {
                isUnhandledRejection: r
              })
            }]
          },
          extra: {
            __serialized__: bt(t, o)
          }
        };
      if (n) {
        const t = In(e, n);
        t.length && (a.exception.values[0].stacktrace = {
          frames: t
        });
      }
      return a;
    }(e, t, n, i), vt(o, {
      synthetic: !0
    }), o;
  }
  return o = Un(e, t, n, r), mt(o, `${t}`, void 0), vt(o, {
    synthetic: !0
  }), o;
}
function Un(e, t, n, r) {
  const i = {
    message: t
  };
  if (r && n) {
    const r = In(e, n);
    r.length && (i.exception = {
      values: [{
        value: t,
        stacktrace: {
          frames: r
        }
      }]
    });
  }
  return i;
}
function Vn(e, {
  isUnhandledRejection: t
}) {
  const n = function (e, t = 40) {
      const n = Object.keys(Ue(e));
      if (n.sort(), !n.length) return "[object has no keys]";
      if (n[0].length >= t) return de(n[0], t);
      for (let e = n.length; e > 0; e--) {
        const r = n.slice(0, e).join(", ");
        if (!(r.length > t)) return e === n.length ? r : de(r, t);
      }
      return "";
    }(e),
    r = t ? "promise rejection" : "exception";
  if (re(e)) return `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``;
  if (ce(e)) {
    return `Event \`${function (e) {
      try {
        const t = Object.getPrototypeOf(e);
        return t ? t.constructor.name : void 0;
      } catch (e) {}
    }(e)}\` (type=${e.type}) captured as ${r}`;
  }
  return `Object captured as ${r} with keys: ${n}`;
}
const $n = 1024,
  Gn = "Breadcrumbs";
class qn {
  static __initStatic() {
    this.id = Gn;
  }
  __init() {
    this.name = qn.id;
  }
  constructor(e) {
    qn.prototype.__init.call(this), this.options = {
      console: !0,
      dom: !0,
      fetch: !0,
      history: !0,
      sentry: !0,
      xhr: !0,
      ...e
    };
  }
  setupOnce() {
    this.options.console && nt("console", Yn), this.options.dom && nt("dom", function (e) {
      function t(t) {
        let n,
          r = "object" == typeof e ? e.serializeAttribute : void 0,
          i = "object" == typeof e && "number" == typeof e.maxStringLength ? e.maxStringLength : void 0;
        i && i > $n && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${i} was configured. Sentry will use 1024 instead.`), i = $n), "string" == typeof r && (r = [r]);
        try {
          const e = t.event;
          n = function (e) {
            return !!e && !!e.target;
          }(e) ? Me(e.target, {
            keyAttrs: r,
            maxStringLength: i
          }) : Me(e, {
            keyAttrs: r,
            maxStringLength: i
          });
        } catch (e) {
          n = "<unknown>";
        }
        0 !== n.length && on().addBreadcrumb({
          category: `ui.${t.name}`,
          message: n
        }, {
          event: t.event,
          name: t.name,
          global: t.global
        });
      }
      return t;
    }(this.options.dom)), this.options.xhr && nt("xhr", Jn), this.options.fetch && nt("fetch", Wn), this.options.history && nt("history", zn);
  }
  addSentryBreadcrumb(e) {
    this.options.sentry && on().addBreadcrumb({
      category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
      event_id: e.event_id,
      level: e.level,
      message: gt(e)
    }, {
      event: e
    });
  }
}
function Yn(e) {
  for (let t = 0; t < e.args.length; t++) if ("ref=Ref<" === e.args[t]) {
    e.args[t + 1] = "viewRef";
    break;
  }
  const t = {
    category: "console",
    data: {
      arguments: e.args,
      logger: "console"
    },
    level: (n = e.level, "warn" === n ? "warning" : Ot.includes(n) ? n : "log"),
    message: he(e.args, " ")
  };
  var n;
  if ("assert" === e.level) {
    if (!1 !== e.args[0]) return;
    t.message = `Assertion failed: ${he(e.args.slice(1), " ") || "console.assert"}`, t.data.arguments = e.args.slice(1);
  }
  on().addBreadcrumb(t, {
    input: e.args,
    level: e.level
  });
}
function Jn(e) {
  const {
      startTimestamp: t,
      endTimestamp: n
    } = e,
    r = e.xhr[Xe];
  if (!t || !n || !r) return;
  const {
      method: i,
      url: o,
      status_code: a,
      body: s
    } = r,
    c = {
      method: i,
      url: o,
      status_code: a
    },
    l = {
      xhr: e.xhr,
      input: s,
      startTimestamp: t,
      endTimestamp: n
    };
  on().addBreadcrumb({
    category: "xhr",
    data: c,
    type: "http"
  }, l);
}
function Wn(e) {
  const {
    startTimestamp: t,
    endTimestamp: n
  } = e;
  if (n && (!e.fetchData.url.match(/sentry_key/) || "POST" !== e.fetchData.method)) if (e.error) {
    const r = e.fetchData,
      i = {
        data: e.error,
        input: e.args,
        startTimestamp: t,
        endTimestamp: n
      };
    on().addBreadcrumb({
      category: "fetch",
      data: r,
      level: "error",
      type: "http"
    }, i);
  } else {
    const r = {
        ...e.fetchData,
        status_code: e.response && e.response.status
      },
      i = {
        input: e.args,
        response: e.response,
        startTimestamp: t,
        endTimestamp: n
      };
    on().addBreadcrumb({
      category: "fetch",
      data: r,
      type: "http"
    }, i);
  }
}
function zn(e) {
  let t = e.from,
    n = e.to;
  const r = Ct(xn.location.href);
  let i = Ct(t);
  const o = Ct(n);
  i.path || (i = r), r.protocol === o.protocol && r.host === o.host && (n = o.relative), r.protocol === i.protocol && r.host === i.host && (t = i.relative), on().addBreadcrumb({
    category: "navigation",
    data: {
      from: t,
      to: n
    }
  });
}
qn.__initStatic();
class Hn extends mn {
  constructor(e) {
    const t = xn.SENTRY_SDK_SOURCE || "npm";
    e._metadata = e._metadata || {}, e._metadata.sdk = e._metadata.sdk || {
      name: "sentry.javascript.browser",
      packages: [{
        name: `${t}:@sentry/browser`,
        version: Sn
      }],
      version: Sn
    }, super(e), e.sendClientReports && xn.document && xn.document.addEventListener("visibilitychange", () => {
      "hidden" === xn.document.visibilityState && this._flushOutcomes();
    });
  }
  eventFromException(e, t) {
    return function (e, t, n, r) {
      const i = Fn(e, t, n && n.syntheticException || void 0, r);
      return vt(i), i.level = "error", n && n.event_id && (i.event_id = n.event_id), kt(i);
    }(this._options.stackParser, e, t, this._options.attachStacktrace);
  }
  eventFromMessage(e, t = "info", n) {
    return function (e, t, n = "info", r, i) {
      const o = Un(e, t, r && r.syntheticException || void 0, i);
      return o.level = n, r && r.event_id && (o.event_id = r.event_id), kt(o);
    }(this._options.stackParser, e, t, n, this._options.attachStacktrace);
  }
  sendEvent(e, t) {
    const n = this.getIntegrationById(Gn);
    n && n.addSentryBreadcrumb && n.addSentryBreadcrumb(e), super.sendEvent(e, t);
  }
  captureUserFeedback(e) {
    if (!this._isEnabled()) return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn("SDK not enabled, will not capture user feedback."));
    const t = function (e, {
      metadata: t,
      tunnel: n,
      dsn: r
    }) {
      const i = {
          event_id: e.event_id,
          sent_at: new Date().toISOString(),
          ...(t && t.sdk && {
            sdk: {
              name: t.sdk.name,
              version: t.sdk.version
            }
          }),
          ...(!!n && !!r && {
            dsn: je(r)
          })
        },
        o = function (e) {
          return [{
            type: "user_report"
          }, e];
        }(e);
      return Nt(i, [o]);
    }(e, {
      metadata: this.getSdkMetadata(),
      dsn: this.getDsn(),
      tunnel: this.getOptions().tunnel
    });
    this._sendEnvelope(t);
  }
  _prepareEvent(e, t, n) {
    return e.platform = e.platform || "javascript", super._prepareEvent(e, t, n);
  }
  _flushOutcomes() {
    const e = this._clearOutcomes();
    if (0 === e.length) return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.log("No outcomes to send"));
    if (!this._dsn) return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.log("No dsn provided, will not send outcomes"));
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.log("Sending outcomes:", e);
    const t = (n = e, Nt((r = this._options.tunnel && je(this._dsn)) ? {
      dsn: r
    } : {}, [[{
      type: "client_report"
    }, {
      timestamp: i || Lt(),
      discarded_events: n
    }]]));
    var n, r, i;
    this._sendEnvelope(t);
  }
}
let Qn;
function Kn(e, t = function () {
  if (Qn) return Qn;
  if (ze(xn.fetch)) return Qn = xn.fetch.bind(xn);
  const e = xn.document;
  let t = xn.fetch;
  if (e && "function" == typeof e.createElement) try {
    const n = e.createElement("iframe");
    n.hidden = !0, e.head.appendChild(n);
    const r = n.contentWindow;
    r && r.fetch && (t = r.fetch), e.head.removeChild(n);
  } catch (e) {
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
  }
  return Qn = t.bind(xn);
}()) {
  let n = 0,
    r = 0;
  return bn(e, function (i) {
    const o = i.body.length;
    n += o, r++;
    const a = {
      body: i.body,
      method: "POST",
      referrerPolicy: "origin",
      headers: e.headers,
      keepalive: n <= 6e4 && r < 15,
      ...e.fetchOptions
    };
    try {
      return t(e.url, a).then(e => (n -= o, r--, {
        statusCode: e.status,
        headers: {
          "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
          "retry-after": e.headers.get("Retry-After")
        }
      }));
    } catch (e) {
      return Qn = void 0, n -= o, r--, Et(e);
    }
  });
}
class Xn {
  static __initStatic() {
    this.id = "GlobalHandlers";
  }
  __init() {
    this.name = Xn.id;
  }
  __init2() {
    this._installFunc = {
      onerror: Zn,
      onunhandledrejection: er
    };
  }
  constructor(e) {
    Xn.prototype.__init.call(this), Xn.prototype.__init2.call(this), this._options = {
      onerror: !0,
      onunhandledrejection: !0,
      ...e
    };
  }
  setupOnce() {
    Error.stackTraceLimit = 50;
    const e = this._options;
    for (const n in e) {
      const r = this._installFunc[n];
      r && e[n] && (t = n, ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.log(`Global Handler attached: ${t}`), r(), this._installFunc[n] = void 0);
    }
    var t;
  }
}
function Zn() {
  nt("error", e => {
    const [t, n, r] = rr();
    if (!t.getIntegration(Xn)) return;
    const {
      msg: i,
      url: o,
      line: a,
      column: s,
      error: c
    } = e;
    if (jn() || c && c.__sentry_own_request__) return;
    const l = void 0 === c && oe(i) ? function (e, t, n, r) {
      const i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
      let o = re(e) ? e.message : e,
        a = "Error";
      const s = o.match(i);
      s && (a = s[1], o = s[2]);
      const c = {
        exception: {
          values: [{
            type: a,
            value: o
          }]
        }
      };
      return tr(c, t, n, r);
    }(i, o, a, s) : tr(Fn(n, c || i, void 0, r, !1), o, a, s);
    l.level = "error", nr(t, c, l, "onerror");
  });
}
function er() {
  nt("unhandledrejection", e => {
    const [t, n, r] = rr();
    if (!t.getIntegration(Xn)) return;
    let i = e;
    try {
      "reason" in e ? i = e.reason : "detail" in e && "reason" in e.detail && (i = e.detail.reason);
    } catch (e) {}
    if (jn() || i && i.__sentry_own_request__) return !0;
    const o = ae(i) ? {
      exception: {
        values: [{
          type: "UnhandledRejection",
          value: `Non-Error promise rejection captured with value: ${String(i)}`
        }]
      }
    } : Fn(n, i, void 0, r, !0);
    o.level = "error", nr(t, i, o, "onunhandledrejection");
  });
}
function tr(e, t, n, r) {
  const i = e.exception = e.exception || {},
    o = i.values = i.values || [],
    a = o[0] = o[0] || {},
    s = a.stacktrace = a.stacktrace || {},
    c = s.frames = s.frames || [],
    l = isNaN(parseInt(r, 10)) ? void 0 : r,
    u = isNaN(parseInt(n, 10)) ? void 0 : n,
    d = oe(t) && t.length > 0 ? t : function () {
      try {
        return ke.document.location.href;
      } catch (e) {
        return "";
      }
    }();
  return 0 === c.length && c.push({
    colno: l,
    filename: d,
    function: "?",
    in_app: !0,
    lineno: u
  }), e;
}
function nr(e, t, n, r) {
  vt(n, {
    handled: !1,
    type: r
  }), e.captureEvent(n, {
    originalException: t
  });
}
function rr() {
  const e = on(),
    t = e.getClient(),
    n = t && t.getOptions() || {
      stackParser: () => [],
      attachStacktrace: !1
    };
  return [e, n.stackParser, n.attachStacktrace];
}
Xn.__initStatic();
const ir = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
class or {
  static __initStatic() {
    this.id = "TryCatch";
  }
  __init() {
    this.name = or.id;
  }
  constructor(e) {
    or.prototype.__init.call(this), this._options = {
      XMLHttpRequest: !0,
      eventTarget: !0,
      requestAnimationFrame: !0,
      setInterval: !0,
      setTimeout: !0,
      ...e
    };
  }
  setupOnce() {
    this._options.setTimeout && Ie(xn, "setTimeout", ar), this._options.setInterval && Ie(xn, "setInterval", ar), this._options.requestAnimationFrame && Ie(xn, "requestAnimationFrame", sr), this._options.XMLHttpRequest && "XMLHttpRequest" in xn && Ie(XMLHttpRequest.prototype, "send", cr);
    const e = this._options.eventTarget;
    if (e) {
      (Array.isArray(e) ? e : ir).forEach(lr);
    }
  }
}
function ar(e) {
  return function (...t) {
    const n = t[0];
    return t[0] = Ln(n, {
      mechanism: {
        data: {
          function: Je(e)
        },
        handled: !0,
        type: "instrument"
      }
    }), e.apply(this, t);
  };
}
function sr(e) {
  return function (t) {
    return e.apply(this, [Ln(t, {
      mechanism: {
        data: {
          function: "requestAnimationFrame",
          handler: Je(e)
        },
        handled: !0,
        type: "instrument"
      }
    })]);
  };
}
function cr(e) {
  return function (...t) {
    const n = this;
    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(e => {
      e in n && "function" == typeof n[e] && Ie(n, e, function (t) {
        const n = {
            mechanism: {
              data: {
                function: e,
                handler: Je(t)
              },
              handled: !0,
              type: "instrument"
            }
          },
          r = Fe(t);
        return r && (n.mechanism.data.handler = Je(r)), Ln(t, n);
      });
    }), e.apply(this, t);
  };
}
function lr(e) {
  const t = xn,
    n = t[e] && t[e].prototype;
  n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Ie(n, "addEventListener", function (t) {
    return function (n, r, i) {
      try {
        "function" == typeof r.handleEvent && (r.handleEvent = Ln(r.handleEvent, {
          mechanism: {
            data: {
              function: "handleEvent",
              handler: Je(r),
              target: e
            },
            handled: !0,
            type: "instrument"
          }
        }));
      } catch (e) {}
      return t.apply(this, [n, Ln(r, {
        mechanism: {
          data: {
            function: "addEventListener",
            handler: Je(r),
            target: e
          },
          handled: !0,
          type: "instrument"
        }
      }), i]);
    };
  }), Ie(n, "removeEventListener", function (e) {
    return function (t, n, r) {
      const i = n;
      try {
        const n = i && i.__sentry_wrapped__;
        n && e.call(this, t, n, r);
      } catch (e) {}
      return e.call(this, t, i, r);
    };
  }));
}
or.__initStatic();
class ur {
  static __initStatic() {
    this.id = "LinkedErrors";
  }
  __init() {
    this.name = ur.id;
  }
  constructor(e = {}) {
    ur.prototype.__init.call(this), this._key = e.key || "cause", this._limit = e.limit || 5;
  }
  setupOnce(e, t) {
    e((e, n) => {
      const r = t(),
        i = r.getClient(),
        o = r.getIntegration(ur);
      if (!i || !o) return e;
      const a = i.getOptions();
      return ge(Dn, a.stackParser, a.maxValueLength, o._key, o._limit, e, n), e;
    });
  }
}
ur.__initStatic();
class dr {
  constructor() {
    dr.prototype.__init.call(this);
  }
  static __initStatic() {
    this.id = "HttpContext";
  }
  __init() {
    this.name = dr.id;
  }
  setupOnce() {
    Kt(e => {
      if (on().getIntegration(dr)) {
        if (!xn.navigator && !xn.location && !xn.document) return e;
        const t = e.request && e.request.url || xn.location && xn.location.href,
          {
            referrer: n
          } = xn.document || {},
          {
            userAgent: r
          } = xn.navigator || {},
          i = {
            ...(e.request && e.request.headers),
            ...(n && {
              Referer: n
            }),
            ...(r && {
              "User-Agent": r
            })
          },
          o = {
            ...e.request,
            ...(t && {
              url: t
            }),
            headers: i
          };
        return {
          ...e,
          request: o
        };
      }
      return e;
    });
  }
}
dr.__initStatic();
class hr {
  constructor() {
    hr.prototype.__init.call(this);
  }
  static __initStatic() {
    this.id = "Dedupe";
  }
  __init() {
    this.name = hr.id;
  }
  setupOnce(e, t) {
    const n = e => {
      if (e.type) return e;
      const n = t().getIntegration(hr);
      if (n) {
        try {
          if (function (e, t) {
            if (!t) return !1;
            if (function (e, t) {
              const n = e.message,
                r = t.message;
              if (!n && !r) return !1;
              if (n && !r || !n && r) return !1;
              if (n !== r) return !1;
              if (!fr(e, t)) return !1;
              if (!pr(e, t)) return !1;
              return !0;
            }(e, t)) return !0;
            if (function (e, t) {
              const n = gr(t),
                r = gr(e);
              if (!n || !r) return !1;
              if (n.type !== r.type || n.value !== r.value) return !1;
              if (!fr(e, t)) return !1;
              if (!pr(e, t)) return !1;
              return !0;
            }(e, t)) return !0;
            return !1;
          }(e, n._previousEvent)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn("Event dropped due to being a duplicate of previously captured event."), null;
        } catch (t) {
          return n._previousEvent = e;
        }
        return n._previousEvent = e;
      }
      return e;
    };
    n.id = this.name, e(n);
  }
}
function pr(e, t) {
  let n = mr(e),
    r = mr(t);
  if (!n && !r) return !0;
  if (n && !r || !n && r) return !1;
  if (r.length !== n.length) return !1;
  for (let e = 0; e < r.length; e++) {
    const t = r[e],
      i = n[e];
    if (t.filename !== i.filename || t.lineno !== i.lineno || t.colno !== i.colno || t.function !== i.function) return !1;
  }
  return !0;
}
function fr(e, t) {
  let n = e.fingerprint,
    r = t.fingerprint;
  if (!n && !r) return !0;
  if (n && !r || !n && r) return !1;
  try {
    return !(n.join("") !== r.join(""));
  } catch (e) {
    return !1;
  }
}
function gr(e) {
  return e.exception && e.exception.values && e.exception.values[0];
}
function mr(e) {
  const t = e.exception;
  if (t) try {
    return t.values[0].stacktrace.frames;
  } catch (e) {
    return;
  }
}
hr.__initStatic();
var vr = Object.freeze({
  __proto__: null,
  Breadcrumbs: qn,
  Dedupe: hr,
  GlobalHandlers: Xn,
  HttpContext: dr,
  LinkedErrors: ur,
  TryCatch: or
});
let yr = {};
xn.Sentry && xn.Sentry.Integrations && (yr = xn.Sentry.Integrations);
const _r = {
  ...yr,
  ...Pn,
  ...vr
};
var br = exports.DAILY_STATE_NEW = "new",
  wr = "loading",
  Sr = "loaded",
  kr = exports.DAILY_STATE_JOINING = "joining-meeting",
  Er = exports.DAILY_STATE_JOINED = "joined-meeting",
  Mr = exports.DAILY_STATE_LEFT = "left-meeting",
  Tr = exports.DAILY_STATE_ERROR = "error",
  Cr = exports.DAILY_TRACK_STATE_BLOCKED = "blocked",
  Or = exports.DAILY_TRACK_STATE_OFF = "off",
  Pr = exports.DAILY_TRACK_STATE_SENDABLE = "sendable",
  xr = exports.DAILY_TRACK_STATE_LOADING = "loading",
  Ar = exports.DAILY_TRACK_STATE_INTERRUPTED = "interrupted",
  jr = exports.DAILY_TRACK_STATE_PLAYABLE = "playable",
  Lr = exports.DAILY_ACCESS_UNKNOWN = "unknown",
  Dr = exports.DAILY_ACCESS_LEVEL_FULL = "full",
  Nr = exports.DAILY_ACCESS_LEVEL_LOBBY = "lobby",
  Ir = exports.DAILY_ACCESS_LEVEL_NONE = "none",
  Rr = exports.DAILY_RECEIVE_SETTINGS_BASE_KEY = "base",
  Br = exports.DAILY_RECEIVE_SETTINGS_ALL_PARTICIPANTS_KEY = "*",
  Fr = exports.DAILY_FATAL_ERROR_EJECTED = "ejected",
  Ur = exports.DAILY_FATAL_ERROR_NBF_ROOM = "nbf-room",
  Vr = exports.DAILY_FATAL_ERROR_NBF_TOKEN = "nbf-token",
  $r = exports.DAILY_FATAL_ERROR_EXP_ROOM = "exp-room",
  Gr = exports.DAILY_FATAL_ERROR_EXP_TOKEN = "exp-token",
  qr = exports.DAILY_FATAL_ERROR_NO_ROOM = "no-room",
  Yr = exports.DAILY_FATAL_ERROR_MEETING_FULL = "meeting-full",
  Jr = exports.DAILY_FATAL_ERROR_EOL = "end-of-life",
  Wr = exports.DAILY_FATAL_ERROR_NOT_ALLOWED = "not-allowed",
  zr = exports.DAILY_FATAL_ERROR_CONNECTION = "connection-error",
  Hr = exports.DAILY_CAMERA_ERROR_CAM_IN_USE = "cam-in-use",
  Qr = exports.DAILY_CAMERA_ERROR_MIC_IN_USE = "mic-in-use",
  Kr = exports.DAILY_CAMERA_ERROR_CAM_AND_MIC_IN_USE = "cam-mic-in-use",
  Xr = exports.DAILY_CAMERA_ERROR_PERMISSIONS = "permissions",
  Zr = exports.DAILY_CAMERA_ERROR_UNDEF_MEDIADEVICES = "undefined-mediadevices",
  ei = exports.DAILY_CAMERA_ERROR_NOT_FOUND = "not-found",
  ti = exports.DAILY_CAMERA_ERROR_CONSTRAINTS = "constraints",
  ni = exports.DAILY_CAMERA_ERROR_UNKNOWN = "unknown",
  ri = exports.DAILY_EVENT_IFRAME_READY_FOR_LAUNCH_CONFIG = "iframe-ready-for-launch-config",
  ii = exports.DAILY_EVENT_IFRAME_LAUNCH_CONFIG = "iframe-launch-config",
  oi = exports.DAILY_EVENT_THEME_UPDATED = "theme-updated",
  ai = exports.DAILY_EVENT_LOADING = "loading",
  si = exports.DAILY_EVENT_LOAD_ATTEMPT_FAILED = "load-attempt-failed",
  ci = exports.DAILY_EVENT_LOADED = "loaded",
  li = exports.DAILY_EVENT_STARTED_CAMERA = "started-camera",
  ui = exports.DAILY_EVENT_CAMERA_ERROR = "camera-error",
  di = exports.DAILY_EVENT_JOINING_MEETING = "joining-meeting",
  hi = exports.DAILY_EVENT_JOINED_MEETING = "joined-meeting",
  pi = exports.DAILY_EVENT_LEFT_MEETING = "left-meeting",
  fi = "available-devices-updated",
  gi = exports.DAILY_EVENT_PARTICIPANT_JOINED = "participant-joined",
  mi = exports.DAILY_EVENT_PARTICIPANT_UPDATED = "participant-updated",
  vi = exports.DAILY_EVENT_PARTICIPANT_LEFT = "participant-left",
  yi = exports.DAILY_EVENT_PARTICIPANT_COUNTS_UPDATED = "participant-counts-updated",
  _i = exports.DAILY_EVENT_ACCESS_STATE_UPDATED = "access-state-updated",
  bi = exports.DAILY_EVENT_MEETING_SESSION_SUMMARY_UPDATED = "meeting-session-summary-updated",
  wi = exports.DAILY_EVENT_MEETING_SESSION_STATE_UPDATED = "meeting-session-state-updated",
  Si = exports.DAILY_EVENT_MEETING_SESSION_DATA_ERROR = "meeting-session-data-error",
  ki = exports.DAILY_EVENT_WAITING_PARTICIPANT_ADDED = "waiting-participant-added",
  Ei = exports.DAILY_EVENT_WAITING_PARTICIPANT_UPDATED = "waiting-participant-updated",
  Mi = exports.DAILY_EVENT_WAITING_PARTICIPANT_REMOVED = "waiting-participant-removed",
  Ti = exports.DAILY_EVENT_TRACK_STARTED = "track-started",
  Ci = exports.DAILY_EVENT_TRACK_STOPPED = "track-stopped",
  Oi = exports.DAILY_EVENT_TRANSCRIPTION_STARTED = "transcription-started",
  Pi = exports.DAILY_EVENT_TRANSCRIPTION_STOPPED = "transcription-stopped",
  xi = exports.DAILY_EVENT_TRANSCRIPTION_ERROR = "transcription-error",
  Ai = exports.DAILY_EVENT_RECORDING_STARTED = "recording-started",
  ji = exports.DAILY_EVENT_RECORDING_STOPPED = "recording-stopped",
  Li = exports.DAILY_EVENT_RECORDING_STATS = "recording-stats",
  Di = exports.DAILY_EVENT_RECORDING_ERROR = "recording-error",
  Ni = exports.DAILY_EVENT_RECORDING_UPLOAD_COMPLETED = "recording-upload-completed",
  Ii = exports.DAILY_EVENT_RECORDING_DATA = "recording-data",
  Ri = exports.DAILY_EVENT_APP_MSG = "app-message",
  Bi = exports.DAILY_EVENT_TRANSCRIPTION_MSG = "transcription-message",
  Fi = exports.DAILY_EVENT_REMOTE_MEDIA_PLAYER_STARTED = "remote-media-player-started",
  Ui = exports.DAILY_EVENT_REMOTE_MEDIA_PLAYER_UPDATED = "remote-media-player-updated",
  Vi = exports.DAILY_EVENT_REMOTE_MEDIA_PLAYER_STOPPED = "remote-media-player-stopped",
  $i = exports.DAILY_EVENT_LOCAL_SCREEN_SHARE_STARTED = "local-screen-share-started",
  Gi = exports.DAILY_EVENT_LOCAL_SCREEN_SHARE_STOPPED = "local-screen-share-stopped",
  qi = exports.DAILY_EVENT_LOCAL_SCREEN_SHARE_CANCELED = "local-screen-share-canceled",
  Yi = exports.DAILY_EVENT_ACTIVE_SPEAKER_CHANGE = "active-speaker-change",
  Ji = exports.DAILY_EVENT_ACTIVE_SPEAKER_MODE_CHANGE = "active-speaker-mode-change",
  Wi = exports.DAILY_EVENT_NETWORK_QUALITY_CHANGE = "network-quality-change",
  zi = exports.DAILY_EVENT_NETWORK_CONNECTION = "network-connection",
  Hi = exports.DAILY_EVENT_CPU_LOAD_CHANGE = "cpu-load-change",
  Qi = exports.DAILY_EVENT_FULLSCREEN = "fullscreen",
  Ki = exports.DAILY_EVENT_EXIT_FULLSCREEN = "exited-fullscreen",
  Xi = exports.DAILY_EVENT_LIVE_STREAMING_STARTED = "live-streaming-started",
  Zi = exports.DAILY_EVENT_LIVE_STREAMING_UPDATED = "live-streaming-updated",
  eo = exports.DAILY_EVENT_LIVE_STREAMING_STOPPED = "live-streaming-stopped",
  to = exports.DAILY_EVENT_LIVE_STREAMING_ERROR = "live-streaming-error",
  no = exports.DAILY_EVENT_LANG_UPDATED = "lang-updated",
  ro = exports.DAILY_EVENT_RECEIVE_SETTINGS_UPDATED = "receive-settings-updated",
  io = exports.DAILY_EVENT_INPUT_SETTINGS_UPDATED = "input-settings-updated",
  oo = exports.DAILY_EVENT_NONFATAL_ERROR = "nonfatal-error",
  ao = exports.DAILY_EVENT_ERROR = "error",
  so = 102400,
  co = "iframe-call-message",
  lo = "local-screen-start",
  uo = "register-input-handler",
  ho = "daily-method-update-live-streaming-endpoints",
  po = "transmit-log",
  fo = "daily-custom-track",
  go = {
    NONE: "none",
    BGBLUR: "background-blur",
    BGIMAGE: "background-image"
  },
  mo = {
    NONE: "none",
    NOISE_CANCELLATION: "noise-cancellation"
  },
  vo = {
    PLAY: "play",
    PAUSE: "pause"
  },
  yo = 10,
  _o = ["jpg", "png", "jpeg"],
  bo = "add-endpoints",
  wo = "remove-endpoints";
function So() {
  return !ko() && "undefined" != typeof window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : "";
}
function ko() {
  return "undefined" != typeof navigator && navigator.product && "ReactNative" === navigator.product;
}
function Eo() {
  return !!So().match(/iPad|iPhone|iPod/i);
}
function Mo() {
  return navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
}
function To() {
  return !!(navigator && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) && (function (e, t) {
    if (!e || !t) return !0;
    switch (e) {
      case "Chrome":
        return t.major >= 75;
      case "Safari":
        return RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection") && !(13 === t.major && 0 === t.minor && 0 === t.point);
      case "Firefox":
        return t.major >= 67;
    }
    return !0;
  }(Lo(), Do()) || ko());
}
function Co() {
  if (ko()) return !1;
  if (!document) return !1;
  var e = document.createElement("iframe");
  return !!e.requestFullscreen || !!e.webkitRequestFullscreen;
}
function Oo() {
  var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return !ko() && (e ? function () {
    if (jo()) return !1;
    return ["Chrome", "Firefox"].includes(Lo());
  }() : function () {
    if (jo()) return !1;
    var e = Lo();
    if (Eo() && "Safari" === e) {
      var t = Ro();
      if (15 === t.major && t.minor < 4) return !1;
    }
    return ["Chrome", "Firefox", "Safari"].includes(e);
  }());
}
var Po = ["Chrome", "Firefox"];
function xo() {
  return !ko() && !jo() && "undefined" != typeof AudioWorkletNode && Po.includes(Lo());
}
function Ao() {
  return Mo() && !function () {
    var e,
      t = Lo();
    if (!So()) return !0;
    switch (t) {
      case "Chrome":
        return (e = No()).major && e.major > 0 && e.major < 61;
      case "Firefox":
        return (e = Bo()).major < 78;
      case "Safari":
        return (e = Ro()).major < 12;
      default:
        return !0;
    }
  }();
}
function jo() {
  var e,
    t,
    n = So(),
    r = n.match(/Mac/) && (!ko() && "undefined" != typeof window && null !== (e = window) && void 0 !== e && null !== (t = e.navigator) && void 0 !== t && t.maxTouchPoints ? window.navigator.maxTouchPoints : 0) >= 5;
  return !!(n.match(/Mobi/) || n.match(/Android/) || r) || !!So().match(/DailyAnd\//) || void 0;
}
function Lo() {
  if ("undefined" != typeof window) {
    var e = So();
    return Io() ? "Safari" : e.indexOf("Edge") > -1 ? "Edge" : e.match(/Chrome\//) ? "Chrome" : e.indexOf("Safari") > -1 ? "Safari" : e.indexOf("Firefox") > -1 ? "Firefox" : e.indexOf("MSIE") > -1 || e.indexOf(".NET") > -1 ? "IE" : "Unknown Browser";
  }
}
function Do() {
  switch (Lo()) {
    case "Chrome":
      return No();
    case "Safari":
      return Ro();
    case "Firefox":
      return Bo();
    case "Edge":
      return function () {
        var e = 0,
          t = 0;
        if ("undefined" != typeof window) {
          var n = So().match(/Edge\/(\d+).(\d+)/);
          if (n) try {
            e = parseInt(n[1]), t = parseInt(n[2]);
          } catch (e) {}
        }
        return {
          major: e,
          minor: t
        };
      }();
  }
}
function No() {
  var e = 0,
    t = 0,
    n = 0,
    r = 0,
    i = !1;
  if ("undefined" != typeof window) {
    var o = So(),
      a = o.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);
    if (a) try {
      e = parseInt(a[1]), t = parseInt(a[2]), n = parseInt(a[3]), r = parseInt(a[4]), i = o.indexOf("OPR/") > -1;
    } catch (e) {}
  }
  return {
    major: e,
    minor: t,
    build: n,
    patch: r,
    opera: i
  };
}
function Io() {
  return Eo() && Mo();
}
function Ro() {
  var e = 0,
    t = 0,
    n = 0;
  if ("undefined" != typeof window) {
    var r = So().match(/Version\/(\d+).(\d+)(.(\d+))?/);
    if (r) try {
      e = parseInt(r[1]), t = parseInt(r[2]), n = parseInt(r[4]);
    } catch (e) {} else Io() && (e = 14, t = 0, n = 3);
  }
  return {
    major: e,
    minor: t,
    point: n
  };
}
function Bo() {
  var e = 0,
    t = 0;
  if ("undefined" != typeof window) {
    var n = So().match(/Firefox\/(\d+).(\d+)/);
    if (n) try {
      e = parseInt(n[1]), t = parseInt(n[2]);
    } catch (e) {}
  }
  return {
    major: e,
    minor: t
  };
}
var Fo = function () {
  function e() {
    r(this, e);
  }
  return s(e, [{
    key: "addListenerForMessagesFromCallMachine",
    value: function (e, t, n) {
      Q();
    }
  }, {
    key: "addListenerForMessagesFromDailyJs",
    value: function (e, t, n) {
      Q();
    }
  }, {
    key: "sendMessageToCallMachine",
    value: function (e, t, n, r) {
      Q();
    }
  }, {
    key: "sendMessageToDailyJs",
    value: function (e, t) {
      Q();
    }
  }, {
    key: "removeListener",
    value: function (e) {
      Q();
    }
  }]), e;
}();
function Uo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Vo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? Uo(Object(n), !0).forEach(function (t) {
      p(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Uo(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function $o(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();
  return function () {
    var n,
      r = h(e);
    if (t) {
      var i = h(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else n = r.apply(this, arguments);
    return d(this, n);
  };
}
var Go = function (e) {
  u(n, Fo);
  var t = $o(n);
  function n() {
    var e;
    return r(this, n), (e = t.call(this))._wrappedListeners = {}, e._messageCallbacks = {}, e;
  }
  return s(n, [{
    key: "addListenerForMessagesFromCallMachine",
    value: function (e, t, n) {
      var r = this,
        i = function (i) {
          if (i.data && "iframe-call-message" === i.data.what && (!i.data.callFrameId || i.data.callFrameId === t) && (!i.data.from || "module" !== i.data.from)) {
            var o = Vo({}, i.data);
            if (delete o.from, o.callbackStamp && r._messageCallbacks[o.callbackStamp]) {
              var a = o.callbackStamp;
              r._messageCallbacks[a].call(n, o), delete r._messageCallbacks[a];
            }
            delete o.what, delete o.callbackStamp, e.call(n, o);
          }
        };
      this._wrappedListeners[e] = i, window.addEventListener("message", i);
    }
  }, {
    key: "addListenerForMessagesFromDailyJs",
    value: function (e, t, n) {
      var r = function (r) {
        if (!(!r.data || r.data.what !== co || !r.data.action || r.data.from && "module" !== r.data.from || r.data.callFrameId && t && r.data.callFrameId !== t)) {
          var i = r.data;
          e.call(n, i);
        }
      };
      this._wrappedListeners[e] = r, window.addEventListener("message", r);
    }
  }, {
    key: "sendMessageToCallMachine",
    value: function (e, t, n, r) {
      if (!r) throw new Error("undefined callFrameId. Are you trying to use a DailyCall instance previously destroyed?");
      var i = Vo({}, e);
      if (i.what = co, i.from = "module", i.callFrameId = r, t) {
        var o = H();
        this._messageCallbacks[o] = t, i.callbackStamp = o;
      }
      var a = n ? n.contentWindow : window,
        s = this._callMachineTargetOrigin(n);
      s && a.postMessage(i, s);
    }
  }, {
    key: "sendMessageToDailyJs",
    value: function (e, t) {
      e.what = co, e.callFrameId = t, e.from = "embedded", window.postMessage(e, this._targetOriginFromWindowLocation());
    }
  }, {
    key: "removeListener",
    value: function (e) {
      var t = this._wrappedListeners[e];
      t && (window.removeEventListener("message", t), delete this._wrappedListeners[e]);
    }
  }, {
    key: "forwardPackagedMessageToCallMachine",
    value: function (e, t, n) {
      var r = Vo({}, e);
      r.callFrameId = n;
      var i = t ? t.contentWindow : window,
        o = this._callMachineTargetOrigin(t);
      o && i.postMessage(r, o);
    }
  }, {
    key: "addListenerForPackagedMessagesFromCallMachine",
    value: function (e, t) {
      var n = function (n) {
        if (n.data && "iframe-call-message" === n.data.what && (!n.data.callFrameId || n.data.callFrameId === t) && (!n.data.from || "module" !== n.data.from)) {
          var r = n.data;
          e(r);
        }
      };
      return this._wrappedListeners[e] = n, window.addEventListener("message", n), e;
    }
  }, {
    key: "removeListenerForPackagedMessagesFromCallMachine",
    value: function (e) {
      var t = this._wrappedListeners[e];
      t && (window.removeEventListener("message", t), delete this._wrappedListeners[e]);
    }
  }, {
    key: "_callMachineTargetOrigin",
    value: function (e) {
      return e ? e.src ? new URL(e.src).origin : void 0 : this._targetOriginFromWindowLocation();
    }
  }, {
    key: "_targetOriginFromWindowLocation",
    value: function () {
      return "file:" === window.location.protocol ? "*" : window.location.origin;
    }
  }]), n;
}();
function qo(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();
  return function () {
    var n,
      r = h(e);
    if (t) {
      var i = h(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else n = r.apply(this, arguments);
    return d(this, n);
  };
}
var Yo = function (e) {
    u(n, Fo);
    var t = qo(n);
    function n() {
      var e;
      return r(this, n), e = t.call(this), global.callMachineToDailyJsEmitter = global.callMachineToDailyJsEmitter || new v.EventEmitter(), global.dailyJsToCallMachineEmitter = global.dailyJsToCallMachineEmitter || new v.EventEmitter(), e._wrappedListeners = {}, e._messageCallbacks = {}, e;
    }
    return s(n, [{
      key: "addListenerForMessagesFromCallMachine",
      value: function (e, t, n) {
        this._addListener(e, global.callMachineToDailyJsEmitter, n, "received call machine message");
      }
    }, {
      key: "addListenerForMessagesFromDailyJs",
      value: function (e, t, n) {
        this._addListener(e, global.dailyJsToCallMachineEmitter, n, "received daily-js message");
      }
    }, {
      key: "sendMessageToCallMachine",
      value: function (e, t) {
        this._sendMessage(e, global.dailyJsToCallMachineEmitter, "sending message to call machine", t);
      }
    }, {
      key: "sendMessageToDailyJs",
      value: function (e) {
        this._sendMessage(e, global.callMachineToDailyJsEmitter, "sending message to daily-js");
      }
    }, {
      key: "removeListener",
      value: function (e) {
        var t = this._wrappedListeners[e];
        t && (global.callMachineToDailyJsEmitter.removeListener("message", t), global.dailyJsToCallMachineEmitter.removeListener("message", t), delete this._wrappedListeners[e]);
      }
    }, {
      key: "_addListener",
      value: function (e, t, n, r) {
        var i = this,
          o = function (t) {
            if (t.callbackStamp && i._messageCallbacks[t.callbackStamp]) {
              var r = t.callbackStamp;
              i._messageCallbacks[r].call(n, t), delete i._messageCallbacks[r];
            }
            e.call(n, t);
          };
        this._wrappedListeners[e] = o, t.addListener("message", o);
      }
    }, {
      key: "_sendMessage",
      value: function (e, t, n, r) {
        if (r) {
          var i = H();
          this._messageCallbacks[i] = r, e.callbackStamp = i;
        }
        t.emit("message", e);
      }
    }]), n;
  }(),
  Jo = "replace",
  Wo = "shallow-merge",
  zo = [Jo, Wo];
var Ho = function () {
  function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      n = t.data,
      i = t.mergeStrategy,
      o = void 0 === i ? Jo : i;
    r(this, e), e._validateMergeStrategy(o), e._validateData(n, o), this.mergeStrategy = o, this.data = n;
  }
  return s(e, [{
    key: "isNoOp",
    value: function () {
      return e.isNoOpUpdate(this.data, this.mergeStrategy);
    }
  }], [{
    key: "isNoOpUpdate",
    value: function (e, t) {
      return 0 === Object.keys(e).length && t === Wo;
    }
  }, {
    key: "_validateMergeStrategy",
    value: function (e) {
      if (!zo.includes(e)) throw Error("Unrecognized mergeStrategy provided. Options are: [".concat(zo, "]"));
    }
  }, {
    key: "_validateData",
    value: function (e, t) {
      if (!function (e) {
        if (null == e || "object" !== i(e)) return !1;
        var t = Object.getPrototypeOf(e);
        return null == t || t === Object.prototype;
      }(e)) throw Error("Meeting session data must be a plain (map-like) object");
      var n;
      try {
        if (n = JSON.stringify(e), t === Jo) {
          var r = JSON.parse(n);
          N(r, e) || console.warn("The meeting session data provided will be modified when serialized.", r, e);
        } else if (t === Wo) for (var o in e) if (Object.hasOwnProperty.call(e, o) && void 0 !== e[o]) {
          var a = JSON.parse(JSON.stringify(e[o]));
          N(e[o], a) || console.warn("At least one key in the meeting session data provided will be modified when serialized.", a, e[o]);
        }
      } catch (e) {
        throw Error("Meeting session data must be serializable to JSON: ".concat(e));
      }
      if (n.length > so) throw Error("Meeting session data is too large (".concat(n.length, " characters). Maximum size suppported is ").concat(so, "."));
    }
  }]), e;
}();
function Qo(e, t, n) {
  return Qo = function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }() ? Reflect.construct.bind() : function (e, t, n) {
    var r = [null];
    r.push.apply(r, t);
    var i = new (Function.bind.apply(e, r))();
    return n && l(i, n.prototype), i;
  }, Qo.apply(null, arguments);
}
function Ko(e) {
  var t = "function" == typeof Map ? new Map() : void 0;
  return Ko = function (e) {
    if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
    var n;
    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== t) {
      if (t.has(e)) return t.get(e);
      t.set(e, r);
    }
    function r() {
      return Qo(e, arguments, h(this).constructor);
    }
    return r.prototype = Object.create(e.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), l(r, e);
  }, Ko(e);
}
function Xo(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();
  return function () {
    var n,
      r = h(e);
    if (t) {
      var i = h(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else n = r.apply(this, arguments);
    return d(this, n);
  };
}
var Zo = function () {
    function e() {
      r(this, e), this._currentLoad = null;
    }
    return s(e, [{
      key: "load",
      value: function (e, t, n, r) {
        if (this.loaded) return window._dailyCallObjectSetup(e), void n(!0);
        !function (e, t) {
          window._dailyConfig || (window._dailyConfig = {}), window._dailyConfig.callFrameId = e, window._dailyConfig.avoidEval = t;
        }(e, t), this._currentLoad && this._currentLoad.cancel(), this._currentLoad = new ea(function () {
          n(!1);
        }, r), this._currentLoad.start();
      }
    }, {
      key: "cancel",
      value: function () {
        this._currentLoad && this._currentLoad.cancel();
      }
    }, {
      key: "loaded",
      get: function () {
        return this._currentLoad && this._currentLoad.succeeded;
      }
    }]), e;
  }(),
  ea = function () {
    function e(t, n) {
      r(this, e), this._attemptsRemaining = 3, this._currentAttempt = null, this._successCallback = t, this._failureCallback = n;
    }
    return s(e, [{
      key: "start",
      value: function () {
        var e = this;
        if (!this._currentAttempt) {
          this._currentAttempt = new ra(this._successCallback, function t(n) {
            e._currentAttempt.cancelled || (e._attemptsRemaining--, e._failureCallback(n, e._attemptsRemaining > 0), e._attemptsRemaining <= 0 || setTimeout(function () {
              e._currentAttempt.cancelled || (e._currentAttempt = new ra(e._successCallback, t), e._currentAttempt.start());
            }, 3e3));
          }), this._currentAttempt.start();
        }
      }
    }, {
      key: "cancel",
      value: function () {
        this._currentAttempt && this._currentAttempt.cancel();
      }
    }, {
      key: "cancelled",
      get: function () {
        return this._currentAttempt && this._currentAttempt.cancelled;
      }
    }, {
      key: "succeeded",
      get: function () {
        return this._currentAttempt && this._currentAttempt.succeeded;
      }
    }]), e;
  }(),
  ta = function (e) {
    u(n, Ko(Error));
    var t = Xo(n);
    function n() {
      return r(this, n), t.apply(this, arguments);
    }
    return s(n);
  }(),
  na = 2e4,
  ra = function () {
    function e(t, n) {
      r(this, e), this._loadAttemptImpl = ko() || !_dailyConfig.avoidEval ? new ia(t, n) : new oa(t, n);
    }
    var t;
    return s(e, [{
      key: "start",
      value: (t = n(function* () {
        return this._loadAttemptImpl.start();
      }), function () {
        return t.apply(this, arguments);
      })
    }, {
      key: "cancel",
      value: function () {
        this._loadAttemptImpl.cancel();
      }
    }, {
      key: "cancelled",
      get: function () {
        return this._loadAttemptImpl.cancelled;
      }
    }, {
      key: "succeeded",
      get: function () {
        return this._loadAttemptImpl.succeeded;
      }
    }]), e;
  }(),
  ia = function () {
    function e(t, n) {
      r(this, e), this.cancelled = !1, this.succeeded = !1, this._networkTimedOut = !1, this._networkTimeout = null, this._iosCache = "undefined" != typeof iOSCallObjectBundleCache && iOSCallObjectBundleCache, this._refetchHeaders = null, this._successCallback = t, this._failureCallback = n;
    }
    var t, i, o, a;
    return s(e, [{
      key: "start",
      value: (a = n(function* () {
        var e = X();
        !(yield this._tryLoadFromIOSCache(e)) && this._loadFromNetwork(e);
      }), function () {
        return a.apply(this, arguments);
      })
    }, {
      key: "cancel",
      value: function () {
        clearTimeout(this._networkTimeout), this.cancelled = !0;
      }
    }, {
      key: "_tryLoadFromIOSCache",
      value: (o = n(function* (e) {
        if (!this._iosCache) return !1;
        try {
          var t = yield this._iosCache.get(e);
          return !!this.cancelled || !!t && (t.code ? (Function('"use strict";' + t.code)(), this.succeeded = !0, this._successCallback(), !0) : (this._refetchHeaders = t.refetchHeaders, !1));
        } catch (e) {
          return !1;
        }
      }), function (e) {
        return o.apply(this, arguments);
      })
    }, {
      key: "_loadFromNetwork",
      value: (i = n(function* (e) {
        var t = this;
        this._networkTimeout = setTimeout(function () {
          t._networkTimedOut = !0, t._failureCallback("Timed out (>".concat(na, " ms) when loading call object bundle ").concat(e));
        }, na);
        try {
          var n = this._refetchHeaders ? {
              headers: this._refetchHeaders
            } : {},
            r = yield fetch(e, n);
          if (clearTimeout(this._networkTimeout), this.cancelled || this._networkTimedOut) throw new ta();
          var i = yield this._getBundleCodeFromResponse(e, r);
          if (this.cancelled) throw new ta();
          Function('"use strict";' + i)(), this._iosCache && this._iosCache.set(e, i, r.headers), this.succeeded = !0, this._successCallback();
        } catch (t) {
          if (clearTimeout(this._networkTimeout), t instanceof ta || this.cancelled || this._networkTimedOut) return;
          this._failureCallback("Failed to load call object bundle ".concat(e, ": ").concat(t));
        }
      }), function (e) {
        return i.apply(this, arguments);
      })
    }, {
      key: "_getBundleCodeFromResponse",
      value: (t = n(function* (e, t) {
        if (t.ok) return yield t.text();
        if (this._iosCache && 304 === t.status) return (yield this._iosCache.renew(e, t.headers)).code;
        throw new Error("Received ".concat(t.status, " response"));
      }), function (e, n) {
        return t.apply(this, arguments);
      })
    }]), e;
  }(),
  oa = function () {
    function e(t, n) {
      r(this, e), this.cancelled = !1, this.succeeded = !1, this._successCallback = t, this._failureCallback = n, this._attemptId = H(), this._networkTimeout = null, this._scriptElement = null;
    }
    var t;
    return s(e, [{
      key: "start",
      value: (t = n(function* () {
        window._dailyCallMachineLoadWaitlist || (window._dailyCallMachineLoadWaitlist = new Set());
        var e = X();
        "object" === ("undefined" == typeof document ? "undefined" : i(document)) ? this._startLoading(e) : this._failureCallback("Call object bundle must be loaded in a DOM/web context");
      }), function () {
        return t.apply(this, arguments);
      })
    }, {
      key: "cancel",
      value: function () {
        this._stopLoading(), this.cancelled = !0;
      }
    }, {
      key: "_startLoading",
      value: function (e) {
        var t = this;
        this._signUpForCallMachineLoadWaitlist(), this._networkTimeout = setTimeout(function () {
          t._stopLoading(), t._failureCallback("Timed out (>".concat(na, " ms) when loading call object bundle ").concat(e));
        }, na);
        var r = document.getElementsByTagName("head")[0],
          i = document.createElement("script");
        this._scriptElement = i, i.onload = n(function* () {
          t._stopLoading(), t.succeeded = !0, t._successCallback();
        }), i.onerror = function () {
          var e = n(function* (e) {
            t._stopLoading(), t._failureCallback("Failed to load call object bundle ".concat(e.target.src));
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        }(), i.src = e, r.appendChild(i);
      }
    }, {
      key: "_stopLoading",
      value: function () {
        this._withdrawFromCallMachineLoadWaitlist(), clearTimeout(this._networkTimeout), this._scriptElement && (this._scriptElement.onload = null, this._scriptElement.onerror = null);
      }
    }, {
      key: "_signUpForCallMachineLoadWaitlist",
      value: function () {
        window._dailyCallMachineLoadWaitlist.add(this._attemptId);
      }
    }, {
      key: "_withdrawFromCallMachineLoadWaitlist",
      value: function () {
        window._dailyCallMachineLoadWaitlist.delete(this._attemptId);
      }
    }]), e;
  }(),
  aa = function (e, t, n) {
    return !0 === la(e.local, t, n);
  },
  sa = function (e, t, n) {
    return e.local.streams && e.local.streams[t] && e.local.streams[t].stream && e.local.streams[t].stream["get".concat("video" === n ? "Video" : "Audio", "Tracks")]()[0];
  },
  ca = function (e, t, n, r) {
    var i = ua(e, t, n, r);
    return i && i.pendingTrack;
  },
  la = function (e, t, n) {
    if (!e) return !1;
    var r = function (e) {
        switch (e) {
          case "avatar":
            return !0;
          case "staged":
            return e;
          default:
            return !!e;
        }
      },
      i = e.public.subscribedTracks;
    return i && i[t] ? -1 === ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo"].indexOf(n) && i[t].custom ? [!0, "staged"].includes(i[t].custom) ? r(i[t].custom) : r(i[t].custom[n]) : r(i[t][n]) : !i || r(i.ALL);
  },
  ua = function (e, t, n, r) {
    var i = Object.values(e.streams || {}).filter(function (e) {
      return e.participantId === t && e.type === n && e.pendingTrack && e.pendingTrack.kind === r;
    }).sort(function (e, t) {
      return new Date(t.starttime) - new Date(e.starttime);
    });
    return i && i[0];
  },
  da = function (e, t) {
    var n = e.local.public.customTracks;
    if (n && n[t]) return n[t].track;
  };
function ha(e) {
  for (var t = store.getState(), n = 0, r = ["cam", "screen"]; n < r.length; n++) for (var i = r[n], o = 0, a = ["video", "audio"]; o < a.length; o++) {
    var s = a[o],
      c = "cam" === i ? s : "screen".concat(s.charAt(0).toUpperCase() + s.slice(1)),
      l = e.tracks[c];
    if (l) {
      var u = e.local ? sa(t, i, s) : ca(t, e.session_id, i, s);
      "playable" === l.state && (l.track = u), l.persistentTrack = u;
    }
  }
}
function pa(e) {
  try {
    var t = store.getState();
    for (var n in e.tracks) if (!fa(n)) {
      var r = e.tracks[n].kind;
      if (r) {
        var i = e.tracks[n];
        if (i) {
          var o = e.local ? da(t, n) : ca(t, e.session_id, n, r);
          "playable" === i.state && (e.tracks[n].track = o), i.persistentTrack = o;
        }
      } else console.error("unknown type for custom track");
    }
  } catch (e) {
    console.error(e);
  }
}
function fa(e) {
  return ["video", "audio", "screenVideo", "screenAudio"].includes(e);
}
function ga(e, t) {
  var n = store.getState();
  if (e.local) {
    if (e.audio) try {
      e.audioTrack = n.local.streams.cam.stream.getAudioTracks()[0], e.audioTrack || (e.audio = !1);
    } catch (e) {}
    if (e.video) try {
      e.videoTrack = n.local.streams.cam.stream.getVideoTracks()[0], e.videoTrack || (e.video = !1);
    } catch (e) {}
    if (e.screen) try {
      e.screenVideoTrack = n.local.streams.screen.stream.getVideoTracks()[0], e.screenAudioTrack = n.local.streams.screen.stream.getAudioTracks()[0], e.screenVideoTrack || e.screenAudioTrack || (e.screen = !1);
    } catch (e) {}
  } else {
    var r = !0;
    try {
      var i = n.participants[e.session_id];
      i && i.public && i.public.rtcType && "peer-to-peer" === i.public.rtcType.impl && i.private && !["connected", "completed"].includes(i.private.peeringState) && (r = !1);
    } catch (e) {
      console.error(e);
    }
    if (!r) return e.audio = !1, e.audioTrack = !1, e.video = !1, e.videoTrack = !1, e.screen = !1, void (e.screenTrack = !1);
    try {
      n.streams;
      if (e.audio && aa(n, e.session_id, "cam-audio")) {
        var o = ca(n, e.session_id, "cam", "audio");
        o && (t && t.audioTrack && t.audioTrack.id === o.id ? e.audioTrack = o : o.muted || (e.audioTrack = o)), e.audioTrack || (e.audio = !1);
      }
      if (e.video && aa(n, e.session_id, "cam-video")) {
        var a = ca(n, e.session_id, "cam", "video");
        a && (t && t.videoTrack && t.videoTrack.id === a.id ? e.videoTrack = a : a.muted || (e.videoTrack = a)), e.videoTrack || (e.video = !1);
      }
      if (e.screen && aa(n, e.session_id, "screen-audio")) {
        var s = ca(n, e.session_id, "screen", "audio");
        s && (t && t.screenAudioTrack && t.screenAudioTrack.id === s.id ? e.screenAudioTrack = s : s.muted || (e.screenAudioTrack = s));
      }
      if (e.screen && aa(n, e.session_id, "screen-video")) {
        var c = ca(n, e.session_id, "screen", "video");
        c && (t && t.screenVideoTrack && t.screenVideoTrack.id === c.id ? e.screenVideoTrack = c : c.muted || (e.screenVideoTrack = c));
      }
      e.screenVideoTrack || e.screenAudioTrack || (e.screen = !1);
    } catch (e) {
      console.error("unexpected error matching up tracks", e);
    }
  }
}
function ma(e, t) {
  var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return va(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return va(e, t);
    }(e)) || t && e && "number" == typeof e.length) {
      n && (e = n);
      var r = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return r >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[r++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: i
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    s = !1;
  return {
    s: function () {
      n = n.call(e);
    },
    n: function () {
      var e = n.next();
      return a = e.done, e;
    },
    e: function (e) {
      s = !0, o = e;
    },
    f: function () {
      try {
        a || null == n.return || n.return();
      } finally {
        if (s) throw o;
      }
    }
  };
}
function va(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var ya = new Map(),
  _a = null;
function ba(e, t) {
  var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return wa(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return wa(e, t);
    }(e)) || t && e && "number" == typeof e.length) {
      n && (e = n);
      var r = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return r >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[r++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: i
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    s = !1;
  return {
    s: function () {
      n = n.call(e);
    },
    n: function () {
      var e = n.next();
      return a = e.done, e;
    },
    e: function (e) {
      s = !0, o = e;
    },
    f: function () {
      try {
        a || null == n.return || n.return();
      } finally {
        if (s) throw o;
      }
    }
  };
}
function wa(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var Sa = new Map(),
  ka = null,
  Ea = 3e3;
function Ma(e) {
  Ca() ? function (e) {
    ya.has(e) || (ya.set(e, {}), navigator.mediaDevices.enumerateDevices().then(function (t) {
      ya.has(e) && (ya.get(e).lastDevicesString = JSON.stringify(t), _a || (_a = function () {
        var e = n(function* () {
          var e,
            t = yield navigator.mediaDevices.enumerateDevices(),
            n = ma(ya.keys());
          try {
            for (n.s(); !(e = n.n()).done;) {
              var r = e.value,
                i = JSON.stringify(t);
              i !== ya.get(r).lastDevicesString && (ya.get(r).lastDevicesString = i, r(t));
            }
          } catch (e) {
            n.e(e);
          } finally {
            n.f();
          }
        });
        return function () {
          return e.apply(this, arguments);
        };
      }(), navigator.mediaDevices.addEventListener("devicechange", _a)));
    }));
  }(e) : function (e) {
    Sa.has(e) || (Sa.set(e, {}), navigator.mediaDevices.enumerateDevices().then(function (t) {
      Sa.has(e) && (Sa.get(e).lastDevicesString = JSON.stringify(t), ka || (ka = setInterval(n(function* () {
        var e,
          t = yield navigator.mediaDevices.enumerateDevices(),
          n = ba(Sa.keys());
        try {
          for (n.s(); !(e = n.n()).done;) {
            var r = e.value,
              i = JSON.stringify(t);
            i !== Sa.get(r).lastDevicesString && (Sa.get(r).lastDevicesString = i, r(t));
          }
        } catch (e) {
          n.e(e);
        } finally {
          n.f();
        }
      }), Ea)));
    }));
  }(e);
}
function Ta(e) {
  Ca() ? function (e) {
    ya.has(e) && (ya.delete(e), 0 === ya.size && _a && (navigator.mediaDevices.removeEventListener("devicechange", _a), _a = null));
  }(e) : function (e) {
    Sa.has(e) && (Sa.delete(e), 0 === Sa.size && ka && (clearInterval(ka), ka = null));
  }(e);
}
function Ca() {
  return ko() || void 0 !== navigator.mediaDevices.ondevicechange;
}
var Oa = new Set();
function Pa(e, t) {
  var n = t.isLocalScreenVideo;
  return e && "live" === e.readyState && !function (e, t) {
    return (!t.isLocalScreenVideo || "Chrome" !== Lo()) && e.muted && !Oa.has(e.id);
  }(e, {
    isLocalScreenVideo: n
  });
}
var xa,
  Aa = ["videoTrack"],
  ja = ["result"],
  La = ["preserveIframe"];
function Da(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Na(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? Da(Object(n), !0).forEach(function (t) {
      p(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Da(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function Ia(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();
  return function () {
    var n,
      r = h(e);
    if (t) {
      var i = h(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else n = r.apply(this, arguments);
    return d(this, n);
  };
}
function Ra(e, t) {
  var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return Ba(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ba(e, t);
    }(e)) || t && e && "number" == typeof e.length) {
      n && (e = n);
      var r = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return r >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[r++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: i
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    s = !1;
  return {
    s: function () {
      n = n.call(e);
    },
    n: function () {
      var e = n.next();
      return a = e.done, e;
    },
    e: function (e) {
      s = !0, o = e;
    },
    f: function () {
      try {
        a || null == n.return || n.return();
      } finally {
        if (s) throw o;
      }
    }
  };
}
function Ba(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var Fa = "video",
  Ua = "voice",
  Va = ko() ? {
    data: {}
  } : {
    data: {},
    topology: "none"
  },
  $a = {
    present: 0,
    hidden: 0
  },
  Ga = {
    maxBitrate: {
      min: 1e5,
      max: 25e5
    },
    maxFramerate: {
      min: 1,
      max: 30
    },
    scaleResolutionDownBy: {
      min: 1,
      max: 8
    }
  },
  qa = Object.keys(Ga),
  Ya = ["state", "volume", "simulcastEncodings"],
  Ja = {
    androidInCallNotification: {
      title: "string",
      subtitle: "string",
      iconName: "string",
      disableForCustomOverride: "boolean"
    },
    disableAutoDeviceManagement: {
      audio: "boolean",
      video: "boolean"
    }
  },
  Wa = {
    id: {
      iconPath: "string",
      iconPathDarkMode: "string",
      label: "string",
      tooltip: "string"
    }
  },
  za = {
    id: {
      allow: "string",
      controlledBy: "'*' | 'owners' | string[]",
      csp: "string",
      iconURL: "string",
      label: "string",
      loading: "'eager' | 'lazy'",
      location: "'main' | 'sidebar'",
      name: "string",
      referrerPolicy: "string",
      sandbox: "string",
      src: "string",
      srcdoc: "string",
      shared: "string[] | 'owners' | boolean"
    }
  },
  Ha = {
    customIntegrations: {
      validate: ms,
      help: fs()
    },
    customTrayButtons: {
      validate: gs,
      help: "customTrayButtons should be a dictionary of the type ".concat(JSON.stringify(Wa))
    },
    url: {
      validate: function (e) {
        return "string" == typeof e;
      },
      help: "url should be a string"
    },
    baseUrl: {
      validate: function (e) {
        return "string" == typeof e;
      },
      help: "baseUrl should be a string"
    },
    token: {
      validate: function (e) {
        return "string" == typeof e;
      },
      help: "token should be a string",
      queryString: "t"
    },
    dailyConfig: {
      validate: function (e, t) {
        try {
          return t.validateDailyConfig(e), window._dailyConfig || (window._dailyConfig = {}), window._dailyConfig.experimentalGetUserMediaConstraintsModify = e.experimentalGetUserMediaConstraintsModify, window._dailyConfig.userMediaVideoConstraints = e.userMediaVideoConstraints, window._dailyConfig.userMediaAudioConstraints = e.userMediaAudioConstraints, window._dailyConfig.callObjectBundleUrlOverride = e.callObjectBundleUrlOverride, window._dailyConfig.proxyUrl = e.proxyUrl, window._dailyConfig.iceConfig = e.iceConfig, !0;
        } catch (e) {
          console.error("Failed to validate dailyConfig", e);
        }
        return !1;
      },
      help: "Unsupported dailyConfig. Check error logs for detailed info."
    },
    reactNativeConfig: {
      validate: function (e) {
        return vs(e, Ja);
      },
      help: "reactNativeConfig should look like ".concat(JSON.stringify(Ja), ", all fields optional")
    },
    lang: {
      validate: function (e) {
        return ["de", "en-us", "en", "es", "fi", "fr", "it", "jp", "ka", "nl", "no", "pl", "pt", "pt-BR", "ru", "sv", "tr", "user"].includes(e);
      },
      help: "language not supported. Options are: de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, pt-BR, ru, sv, tr, user"
    },
    userName: !0,
    userData: {
      validate: function (e) {
        try {
          return cs(e), !0;
        } catch (e) {
          return console.error(e), !1;
        }
      },
      help: "invalid userData type provided"
    },
    startVideoOff: !0,
    startAudioOff: !0,
    activeSpeakerMode: !0,
    showLeaveButton: !0,
    showLocalVideo: !0,
    showParticipantsBar: !0,
    showFullscreenButton: !0,
    showUserNameChangeUI: !0,
    iframeStyle: !0,
    customLayout: !0,
    cssFile: !0,
    cssText: !0,
    bodyClass: !0,
    videoSource: {
      validate: function (e, t) {
        return t._preloadCache.videoDeviceId = e, !0;
      }
    },
    audioSource: {
      validate: function (e, t) {
        return t._preloadCache.audioDeviceId = e, !0;
      }
    },
    subscribeToTracksAutomatically: {
      validate: function (e, t) {
        return t._preloadCache.subscribeToTracksAutomatically = e, !0;
      }
    },
    theme: {
      validate: function (e) {
        var t = ["accent", "accentText", "background", "backgroundAccent", "baseText", "border", "mainAreaBg", "mainAreaBgAccent", "mainAreaText", "supportiveText"],
          n = function (e) {
            for (var n = 0, r = Object.keys(e); n < r.length; n++) {
              var i = r[n];
              if (!t.includes(i)) return console.error('unsupported color "'.concat(i, '". Valid colors: ').concat(t.join(", "))), !1;
              if (!e[i].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i)) return console.error("".concat(i, ' theme color should be provided in valid hex color format. Received: "').concat(e[i], '"')), !1;
            }
            return !0;
          };
        return "object" === i(e) && ("light" in e && "dark" in e || "colors" in e) ? "light" in e && "dark" in e ? "colors" in e.light ? "colors" in e.dark ? n(e.light.colors) && n(e.dark.colors) : (console.error('Dark theme is missing "colors" property.', e), !1) : (console.error('Light theme is missing "colors" property.', e), !1) : n(e.colors) : (console.error('Theme must contain either both "light" and "dark" properties, or "colors".', e), !1);
      },
      help: "unsupported theme configuration. Check error logs for detailed info."
    },
    layoutConfig: {
      validate: function (e) {
        if ("grid" in e) {
          var t = e.grid;
          if ("maxTilesPerPage" in t) {
            if (!Number.isInteger(t.maxTilesPerPage)) return console.error("grid.maxTilesPerPage should be an integer. You passed ".concat(t.maxTilesPerPage, ".")), !1;
            if (t.maxTilesPerPage > 49) return console.error("grid.maxTilesPerPage can't be larger than 49 without sacrificing browser performance. Please contact us at https://www.daily.co/contact to talk about your use case."), !1;
          }
          if ("minTilesPerPage" in t) {
            if (!Number.isInteger(t.minTilesPerPage)) return console.error("grid.minTilesPerPage should be an integer. You passed ".concat(t.minTilesPerPage, ".")), !1;
            if (t.minTilesPerPage < 1) return console.error("grid.minTilesPerPage can't be lower than 1."), !1;
            if ("maxTilesPerPage" in t && t.minTilesPerPage > t.maxTilesPerPage) return console.error("grid.minTilesPerPage can't be higher than grid.maxTilesPerPage."), !1;
          }
        }
        return !0;
      },
      help: "unsupported layoutConfig. Check error logs for detailed info."
    },
    receiveSettings: {
      validate: function (e) {
        return ls(e, {
          allowAllParticipantsKey: !1
        });
      },
      help: ps({
        allowAllParticipantsKey: !1
      })
    },
    sendSettings: {
      validate: function (e, t) {
        return !!function (e, t) {
          try {
            return t.validateUpdateSendSettings(e), !0;
          } catch (e) {
            return console.error("Failed to validate send settings", e), !1;
          }
        }(e, t) && (t._preloadCache.sendSettings = e, !0);
      },
      help: "Invalid sendSettings provided. Check error logs for detailed info."
    },
    inputSettings: {
      validate: function (e, t) {
        return !!us(e) && (t._preloadCache.inputSettings || (t._preloadCache.inputSettings = {}), ds(e), e.audio && (t._preloadCache.inputSettings.audio = e.audio), e.video && (t._preloadCache.inputSettings.video = e.video), !0);
      },
      help: hs()
    },
    layout: {
      validate: function (e) {
        return "custom-v1" === e || "browser" === e || "none" === e;
      },
      help: 'layout may only be set to "custom-v1"',
      queryString: "layout"
    },
    emb: {
      queryString: "emb"
    },
    embHref: {
      queryString: "embHref"
    },
    dailyJsVersion: {
      queryString: "dailyJsVersion"
    },
    proxy: {
      queryString: "proxy"
    },
    strictMode: !0
  },
  Qa = {
    styles: {
      validate: function (e) {
        for (var t in e) if ("cam" !== t && "screen" !== t) return !1;
        if (e.cam) for (var n in e.cam) if ("div" !== n && "video" !== n) return !1;
        if (e.screen) for (var r in e.screen) if ("div" !== r && "video" !== r) return !1;
        return !0;
      },
      help: "styles format should be a subset of: { cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }"
    },
    setSubscribedTracks: {
      validate: function (e, t) {
        if (t._preloadCache.subscribeToTracksAutomatically) return !1;
        var n = [!0, !1, "staged"];
        if (n.includes(e) || !ko() && "avatar" === e) return !0;
        var r = ["audio", "video", "screenAudio", "screenVideo", "rmpAudio", "rmpVideo"];
        return function e(t) {
          var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (var o in t) if ("custom" === o) {
            if (!n.includes(t[o]) && !e(t[o], !0)) return !1;
          } else {
            var a = !i && !r.includes(o),
              s = !n.includes(t[o]);
            if (a || s) return !1;
          }
          return !0;
        }(e);
      },
      help: "setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: " + "true".concat(ko() ? "" : " | 'avatar'", " | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }")
    },
    setAudio: !0,
    setVideo: !0,
    setScreenShare: {
      validate: function (e) {
        return !1 === e;
      },
      help: "setScreenShare must be false, as it's only meant for stopping remote participants' screen shares"
    },
    eject: !0,
    updatePermissions: {
      validate: function (e) {
        for (var t = 0, n = Object.entries(e); t < n.length; t++) {
          var r = g(n[t], 2),
            i = r[0],
            o = r[1];
          switch (i) {
            case "hasPresence":
              if ("boolean" != typeof o) return !1;
              break;
            case "canSend":
              if (o instanceof Set || o instanceof Array) {
                var a,
                  s = ["video", "audio", "screenVideo", "screenAudio", "customVideo", "customAudio"],
                  c = Ra(o);
                try {
                  for (c.s(); !(a = c.n()).done;) {
                    var l = a.value;
                    if (!s.includes(l)) return !1;
                  }
                } catch (e) {
                  c.e(e);
                } finally {
                  c.f();
                }
              } else if ("boolean" != typeof o) return !1;
              o instanceof Array && (e.canSend = new Set(o));
              break;
            case "canAdmin":
              if (o instanceof Set || o instanceof Array) {
                var u,
                  d = ["participants", "streaming", "transcription"],
                  h = Ra(o);
                try {
                  for (h.s(); !(u = h.n()).done;) {
                    var p = u.value;
                    if (!d.includes(p)) return !1;
                  }
                } catch (e) {
                  h.e(e);
                } finally {
                  h.f();
                }
              } else if ("boolean" != typeof o) return !1;
              o instanceof Array && (e.canAdmin = new Set(o));
              break;
            default:
              return !1;
          }
        }
        return !0;
      },
      help: "updatePermissions can take hasPresence, canSend, and canAdmin permissions. hasPresence must be a boolean. canSend can be a boolean or an Array or Set of media types (video, audio, screenVideo, screenAudio, customVideo, customAudio). canAdmin can be a boolean or an Array or Set of admin types (participants, streaming, transcription)."
    }
  },
  Ka = exports.default = function (t) {
    u(te, v);
    var o,
      a,
      l,
      d,
      h,
      f,
      m,
      y,
      _,
      b,
      w,
      S,
      k,
      E,
      M,
      T,
      C,
      O,
      P,
      x,
      A,
      j,
      L,
      D,
      I,
      R,
      B,
      F,
      U,
      V,
      $,
      G,
      q,
      Y,
      J,
      W,
      Q,
      Z,
      ee = Ia(te);
    function te(e) {
      var t,
        n,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (r(this, te), p(c(t = ee.call(this)), "startListeningForDeviceChanges", function () {
        Ma(t.handleDeviceChange);
      }), p(c(t), "stopListeningForDeviceChanges", function () {
        Ta(t.handleDeviceChange);
      }), p(c(t), "handleDeviceChange", function (e) {
        e = e.map(function (e) {
          return JSON.parse(JSON.stringify(e));
        }), t.emit(fi, {
          action: fi,
          availableDevices: e
        });
      }), p(c(t), "handleNativeAppActiveStateChange", function (e) {
        t.disableReactNativeAutoDeviceManagement("video") || (e ? t.camUnmutedBeforeLosingNativeActiveState && t.setLocalVideo(!0) : (t.camUnmutedBeforeLosingNativeActiveState = t.localVideo(), t.camUnmutedBeforeLosingNativeActiveState && t.setLocalVideo(!1)));
      }), p(c(t), "handleNativeAudioFocusChange", function (e) {
        t.disableReactNativeAutoDeviceManagement("audio") || (t._hasNativeAudioFocus = e, t.toggleParticipantAudioBasedOnNativeAudioFocus(), t._hasNativeAudioFocus ? t.micUnmutedBeforeLosingNativeAudioFocus && t.setLocalAudio(!0) : (t.micUnmutedBeforeLosingNativeAudioFocus = t.localAudio(), t.setLocalAudio(!1)));
      }), p(c(t), "handleNativeSystemScreenCaptureStop", function () {
        t.stopScreenShare();
      }), t.strictMode = void 0 === i.strictMode || i.strictMode, xa) {
        if (t._logDuplicateInstanceAttempt(), t.strictMode) throw new Error("Duplicate DailyIframe instances are not allowed");
      } else n = c(t), xa = n;
      if (i.dailyJsVersion = te.version(), t._iframe = e, t._callObjectMode = "none" === i.layout && !t._iframe, t._preloadCache = {
        subscribeToTracksAutomatically: !0,
        audioDeviceId: null,
        videoDeviceId: null,
        outputDeviceId: null,
        inputSettings: null,
        sendSettings: null,
        videoTrackForNetworkConnectivityTest: null,
        videoTrackForConnectionQualityTest: null
      }, t._callObjectMode && (window._dailyPreloadCache = t._preloadCache), void 0 !== i.showLocalVideo ? t._callObjectMode ? console.error("showLocalVideo is not available in call object mode") : t._showLocalVideo = !!i.showLocalVideo : t._showLocalVideo = !0, void 0 !== i.showParticipantsBar ? t._callObjectMode ? console.error("showParticipantsBar is not available in call object mode") : t._showParticipantsBar = !!i.showParticipantsBar : t._showParticipantsBar = !0, void 0 !== i.customIntegrations ? t._callObjectMode ? console.error("customIntegrations is not available in call object mode") : t._customIntegrations = i.customIntegrations : t._customIntegrations = {}, void 0 !== i.customTrayButtons ? t._callObjectMode ? console.error("customTrayButtons is not available in call object mode") : t._customTrayButtons = i.customTrayButtons : t._customTrayButtons = {}, void 0 !== i.activeSpeakerMode ? t._callObjectMode ? console.error("activeSpeakerMode is not available in call object mode") : t._activeSpeakerMode = !!i.activeSpeakerMode : t._activeSpeakerMode = !1, i.receiveSettings ? t._callObjectMode ? t._receiveSettings = i.receiveSettings : console.error("receiveSettings is only available in call object mode") : t._receiveSettings = {}, t.validateProperties(i), t.properties = Na({}, i), t._preloadCache.inputSettings || (t._preloadCache.inputSettings = {}), i.inputSettings && i.inputSettings.audio && (t._preloadCache.inputSettings.audio = i.inputSettings.audio), i.inputSettings && i.inputSettings.video && (t._preloadCache.inputSettings.video = i.inputSettings.video), t._callObjectLoader = t._callObjectMode ? new Zo() : null, t._callState = br, t._isPreparingToJoin = !1, t._accessState = {
        access: Lr
      }, t._meetingSessionSummary = {}, t._finalSummaryOfPrevSession = {}, t._meetingSessionState = bs(Va, t._callObjectMode), t._nativeInCallAudioMode = Fa, t._participants = {}, t._participantCounts = $a, t._rmpPlayerState = {}, t._waitingParticipants = {}, t._inputEventsOn = {}, t._network = {
        threshold: "good",
        quality: 100
      }, t._activeSpeaker = {}, t._callFrameId = H(), t._localAudioLevel = 0, t._remoteParticipantsAudioLevel = {}, t._messageChannel = ko() ? new Yo() : new Go(), t._iframe && (t._iframe.requestFullscreen ? t._iframe.addEventListener("fullscreenchange", function () {
        document.fullscreenElement === t._iframe ? (t.emit(Qi, {
          action: Qi
        }), t.sendMessageToCallMachine({
          action: Qi
        })) : (t.emit(Ki, {
          action: Ki
        }), t.sendMessageToCallMachine({
          action: Ki
        }));
      }) : t._iframe.webkitRequestFullscreen && t._iframe.addEventListener("webkitfullscreenchange", function () {
        document.webkitFullscreenElement === t._iframe ? (t.emit(Qi, {
          action: Qi
        }), t.sendMessageToCallMachine({
          action: Qi
        })) : (t.emit(Ki, {
          action: Ki
        }), t.sendMessageToCallMachine({
          action: Ki
        }));
      })), ko()) {
        var o = t.nativeUtils();
        o.addAudioFocusChangeListener && o.removeAudioFocusChangeListener && o.addAppActiveStateChangeListener && o.removeAppActiveStateChangeListener && o.addSystemScreenCaptureStopListener && o.removeSystemScreenCaptureStopListener || console.warn("expected (add|remove)(AudioFocusChange|AppActiveStateChange|SystemScreenCaptureStop)Listener to be available in React Native"), t._hasNativeAudioFocus = !0, o.addAudioFocusChangeListener(t.handleNativeAudioFocusChange), o.addAppActiveStateChangeListener(t.handleNativeAppActiveStateChange), o.addSystemScreenCaptureStopListener(t.handleNativeSystemScreenCaptureStop);
      }
      return t._callObjectMode && t.startListeningForDeviceChanges(), t._messageChannel.addListenerForMessagesFromCallMachine(t.handleMessageFromCallMachine, t._callFrameId, c(t)), t;
    }
    return s(te, [{
      key: "destroy",
      value: (Z = n(function* () {
        try {
          yield this.leave();
        } catch (e) {}
        var e = this._iframe;
        if (e) {
          var t = e.parentElement;
          t && t.removeChild(e);
        }
        if (this._messageChannel.removeListener(this.handleMessageFromCallMachine), ko()) {
          var n = this.nativeUtils();
          n.removeAudioFocusChangeListener(this.handleNativeAudioFocusChange), n.removeAppActiveStateChangeListener(this.handleNativeAppActiveStateChange), n.removeSystemScreenCaptureStopListener(this.handleNativeSystemScreenCaptureStop);
        }
        this._callObjectMode && this.stopListeningForDeviceChanges(), this.resetMeetingDependentVars(), this._destroyed = !0;
        try {
          this.emit("call-instance-destroyed", {
            action: "call-instance-destroyed"
          });
        } catch (e) {
          console.log("could not emit call-instance-destroyed");
        }
        this.strictMode && (this._callFrameId = void 0), xa = void 0;
      }), function () {
        return Z.apply(this, arguments);
      })
    }, {
      key: "isDestroyed",
      value: function () {
        return !!this._destroyed;
      }
    }, {
      key: "loadCss",
      value: function (e) {
        var t = e.bodyClass,
          n = e.cssFile,
          r = e.cssText;
        return as(), this.sendMessageToCallMachine({
          action: "load-css",
          cssFile: this.absoluteUrl(n),
          bodyClass: t,
          cssText: r
        }), this;
      }
    }, {
      key: "iframe",
      value: function () {
        return as(), this._iframe;
      }
    }, {
      key: "meetingState",
      value: function () {
        return this._callState;
      }
    }, {
      key: "accessState",
      value: function () {
        return is(this._callObjectMode, "accessState()"), this._accessState;
      }
    }, {
      key: "participants",
      value: function () {
        return this._participants;
      }
    }, {
      key: "participantCounts",
      value: function () {
        return this._participantCounts;
      }
    }, {
      key: "waitingParticipants",
      value: function () {
        return is(this._callObjectMode, "waitingParticipants()"), this._waitingParticipants;
      }
    }, {
      key: "validateParticipantProperties",
      value: function (e, t) {
        for (var n in t) {
          if (!Qa[n]) throw new Error("unrecognized updateParticipant property ".concat(n));
          if (Qa[n].validate && !Qa[n].validate(t[n], this, this._participants[e])) throw new Error(Qa[n].help);
        }
      }
    }, {
      key: "updateParticipant",
      value: function (e, t) {
        return this._participants.local && this._participants.local.session_id === e && (e = "local"), e && t && (this.validateParticipantProperties(e, t), this.sendMessageToCallMachine({
          action: "update-participant",
          id: e,
          properties: t
        })), this;
      }
    }, {
      key: "updateParticipants",
      value: function (e) {
        var t = this._participants.local && this._participants.local.session_id;
        for (var n in e) n === t && (n = "local"), n && e[n] && this.validateParticipantProperties(n, e[n]);
        return this.sendMessageToCallMachine({
          action: "update-participants",
          participants: e
        }), this;
      }
    }, {
      key: "updateWaitingParticipant",
      value: (Q = n(function* () {
        var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (is(this._callObjectMode, "updateWaitingParticipant()"), Za(this._callState, "updateWaitingParticipant()"), "string" != typeof t || "object" !== i(n)) throw new Error("updateWaitingParticipant() must take an id string and a updates object");
        return new Promise(function (r, i) {
          e.sendMessageToCallMachine({
            action: "daily-method-update-waiting-participant",
            id: t,
            updates: n
          }, function (e) {
            e.error && i(e.error), e.id || i(new Error("unknown error in updateWaitingParticipant()")), r({
              id: e.id
            });
          });
        });
      }), function () {
        return Q.apply(this, arguments);
      })
    }, {
      key: "updateWaitingParticipants",
      value: (W = n(function* () {
        var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (is(this._callObjectMode, "updateWaitingParticipants()"), Za(this._callState, "updateWaitingParticipants()"), "object" !== i(t)) throw new Error("updateWaitingParticipants() must take a mapping between ids and update objects");
        return new Promise(function (n, r) {
          e.sendMessageToCallMachine({
            action: "daily-method-update-waiting-participants",
            updatesById: t
          }, function (e) {
            e.error && r(e.error), e.ids || r(new Error("unknown error in updateWaitingParticipants()")), n({
              ids: e.ids
            });
          });
        });
      }), function () {
        return W.apply(this, arguments);
      })
    }, {
      key: "requestAccess",
      value: (J = n(function* () {
        var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = t.access,
          r = void 0 === n ? {
            level: Dr
          } : n,
          i = t.name,
          o = void 0 === i ? "" : i;
        return is(this._callObjectMode, "requestAccess()"), Za(this._callState, "requestAccess()"), new Promise(function (t, n) {
          e.sendMessageToCallMachine({
            action: "daily-method-request-access",
            access: r,
            name: o
          }, function (e) {
            e.error && n(e.error), e.access || n(new Error("unknown error in requestAccess()")), t({
              access: e.access,
              granted: e.granted
            });
          });
        });
      }), function () {
        return J.apply(this, arguments);
      })
    }, {
      key: "localAudio",
      value: function () {
        return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.audio.state) : null;
      }
    }, {
      key: "localVideo",
      value: function () {
        return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.video.state) : null;
      }
    }, {
      key: "setLocalAudio",
      value: function (e) {
        return this.sendMessageToCallMachine({
          action: "local-audio",
          state: e
        }), this;
      }
    }, {
      key: "setLocalVideo",
      value: function (e) {
        return this.sendMessageToCallMachine({
          action: "local-video",
          state: e
        }), this;
      }
    }, {
      key: "getReceiveSettings",
      value: (Y = n(function* (e) {
        var t = this,
          n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).showInheritedValues,
          r = void 0 !== n && n;
        if (is(this._callObjectMode, "getReceiveSettings()"), !this._dailyMainExecuted) return this._receiveSettings;
        switch (i(e)) {
          case "string":
            return new Promise(function (n) {
              t.sendMessageToCallMachine({
                action: "get-single-participant-receive-settings",
                id: e,
                showInheritedValues: r
              }, function (e) {
                n(e.receiveSettings);
              });
            });
          case "undefined":
            return this._receiveSettings;
          default:
            throw new Error('first argument to getReceiveSettings() must be a participant id (or "base"), or there should be no arguments');
        }
      }), function (e) {
        return Y.apply(this, arguments);
      })
    }, {
      key: "updateReceiveSettings",
      value: (q = n(function* (e) {
        var t = this;
        if (is(this._callObjectMode, "updateReceiveSettings()"), !ls(e, {
          allowAllParticipantsKey: !0
        })) throw new Error(ps({
          allowAllParticipantsKey: !0
        }));
        return Za(this._callState, "updateReceiveSettings()", "To specify receive settings earlier, use the receiveSettings config property."), new Promise(function (n) {
          t.sendMessageToCallMachine({
            action: "update-receive-settings",
            receiveSettings: e
          }, function (e) {
            n({
              receiveSettings: e.receiveSettings
            });
          });
        });
      }), function (e) {
        return q.apply(this, arguments);
      })
    }, {
      key: "_prepInputSettingsToPresentToUser",
      value: function (e) {
        var t, n, r, i, o, a, s, c;
        if (e) {
          var l = {},
            u = "none" === (null === (t = e.audio) || void 0 === t || null === (n = t.processor) || void 0 === n ? void 0 : n.type) && (null === (r = e.audio) || void 0 === r || null === (i = r.processor) || void 0 === i ? void 0 : i._isDefaultWhenNone);
          if (e.audio && !u) {
            var d = Na({}, e.audio.processor);
            delete d._isDefaultWhenNone, l.audio = Na(Na({}, e.audio), {}, {
              processor: d
            });
          }
          var h = "none" === (null === (o = e.video) || void 0 === o || null === (a = o.processor) || void 0 === a ? void 0 : a.type) && (null === (s = e.video) || void 0 === s || null === (c = s.processor) || void 0 === c ? void 0 : c._isDefaultWhenNone);
          if (e.video && !h) {
            var p = Na({}, e.video.processor);
            delete p._isDefaultWhenNone, l.video = Na(Na({}, e.video), {}, {
              processor: p
            });
          }
          return l;
        }
      }
    }, {
      key: "getInputSettings",
      value: function () {
        var e = this;
        return new Promise(function (t) {
          t(e._getInputSettings());
        });
      }
    }, {
      key: "_getInputSettings",
      value: function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a,
          s,
          c = {
            processor: {
              type: "none",
              _isDefaultWhenNone: !0
            }
          };
        this._inputSettings ? (e = (null === (n = this._inputSettings) || void 0 === n ? void 0 : n.video) || c, t = (null === (r = this._inputSettings) || void 0 === r ? void 0 : r.audio) || c) : (e = (null === (i = this._preloadCache) || void 0 === i || null === (o = i.inputSettings) || void 0 === o ? void 0 : o.video) || c, t = (null === (a = this._preloadCache) || void 0 === a || null === (s = a.inputSettings) || void 0 === s ? void 0 : s.audio) || c);
        var l = {
          audio: t,
          video: e
        };
        return this._prepInputSettingsToPresentToUser(l);
      }
    }, {
      key: "updateInputSettings",
      value: (G = n(function* (e) {
        var t = this;
        return us(e) ? (e && (this._preloadCache.inputSettings || (this._preloadCache.inputSettings = {}), ds(e), e.audio && (this._preloadCache.inputSettings.audio = e.audio), e.video && (this._preloadCache.inputSettings.video = e.video)), us(e) ? this._callObjectMode && this.needsLoad() ? this._getInputSettings() : new Promise(function (n, r) {
          t.sendMessageToCallMachine({
            action: "update-input-settings",
            inputSettings: e
          }, function (e) {
            e.error ? r(e.error) : n({
              inputSettings: t._prepInputSettingsToPresentToUser(e.inputSettings)
            });
          });
        }) : this._getInputSettings()) : (console.error(hs()), Promise.reject(hs()));
      }), function (e) {
        return G.apply(this, arguments);
      })
    }, {
      key: "setBandwidth",
      value: function (e) {
        var t = e.kbs,
          n = e.trackConstraints;
        if (as(), this._dailyMainExecuted) return this.sendMessageToCallMachine({
          action: "set-bandwidth",
          kbs: t,
          trackConstraints: n
        }), this;
      }
    }, {
      key: "getDailyLang",
      value: function () {
        var e = this;
        if (as(), this._dailyMainExecuted) return new Promise(function (t) {
          e.sendMessageToCallMachine({
            action: "get-daily-lang"
          }, function (e) {
            delete e.action, delete e.callbackStamp, t(e);
          });
        });
      }
    }, {
      key: "setDailyLang",
      value: function (e) {
        return as(), this.sendMessageToCallMachine({
          action: "set-daily-lang",
          lang: e
        }), this;
      }
    }, {
      key: "setProxyUrl",
      value: function (e) {
        return this.sendMessageToCallMachine({
          action: "set-proxy-url",
          proxyUrl: e
        }), this;
      }
    }, {
      key: "setIceConfig",
      value: function (e) {
        return this.sendMessageToCallMachine({
          action: "set-ice-config",
          iceConfig: e
        }), this;
      }
    }, {
      key: "meetingSessionSummary",
      value: function () {
        return [Mr, Tr].includes(this._callState) ? this._finalSummaryOfPrevSession : this._meetingSessionSummary;
      }
    }, {
      key: "getMeetingSession",
      value: ($ = n(function* () {
        var e = this;
        return console.warn("getMeetingSession() is deprecated: use meetingSessionSummary(), which will return immediately"), Za(this._callState, "getMeetingSession()"), new Promise(function (t) {
          e.sendMessageToCallMachine({
            action: "get-meeting-session"
          }, function (e) {
            delete e.action, delete e.callbackStamp, delete e.callFrameId, t(e);
          });
        });
      }), function () {
        return $.apply(this, arguments);
      })
    }, {
      key: "meetingSessionState",
      value: function () {
        return Za(this._callState, "meetingSessionState"), this._meetingSessionState;
      }
    }, {
      key: "setMeetingSessionData",
      value: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "replace";
        is(this._callObjectMode, "setMeetingSessionData()"), Za(this._callState, "setMeetingSessionData");
        try {
          !function (e, t) {
            new Ho({
              data: e,
              mergeStrategy: t
            });
          }(e, t);
        } catch (e) {
          throw console.error(e), e;
        }
        try {
          this.sendMessageToCallMachine({
            action: "set-session-data",
            data: e,
            mergeStrategy: t
          });
        } catch (e) {
          throw new Error("Error setting meeting session data: ".concat(e));
        }
      }
    }, {
      key: "setUserName",
      value: function (e, t) {
        var n = this;
        return this.properties.userName = e, new Promise(function (r) {
          n.sendMessageToCallMachine({
            action: "set-user-name",
            name: null != e ? e : "",
            thisMeetingOnly: ko() || !!t && !!t.thisMeetingOnly
          }, function (e) {
            delete e.action, delete e.callbackStamp, r(e);
          });
        });
      }
    }, {
      key: "setUserData",
      value: (V = n(function* (e) {
        var t = this;
        try {
          cs(e);
        } catch (e) {
          throw console.error(e), e;
        }
        if (this.properties.userData = e, this._dailyMainExecuted) return new Promise(function (n) {
          try {
            t.sendMessageToCallMachine({
              action: "set-user-data",
              userData: e
            }, function (e) {
              delete e.action, delete e.callbackStamp, delete e.callFrameId, n(e);
            });
          } catch (e) {
            throw new Error("Error setting user data: ".concat(e));
          }
        });
      }), function (e) {
        return V.apply(this, arguments);
      })
    }, {
      key: "validateAudioLevelInterval",
      value: function (e) {
        if (e && (e < 100 || "number" != typeof e)) throw new Error("The interval must be a number greater than or equal to 100 milliseconds.");
      }
    }, {
      key: "startLocalAudioLevelObserver",
      value: function (e) {
        var t = this;
        if (as(), this.validateAudioLevelInterval(e), this._dailyMainExecuted) return new Promise(function (n, r) {
          t.sendMessageToCallMachine({
            action: "start-local-audio-level-observer",
            interval: e
          }, function (e) {
            e.error ? r({
              error: e.error
            }) : n();
          });
        });
        this._preloadCache.localAudioLevelObserver = {
          enabled: !0,
          interval: e
        };
      }
    }, {
      key: "stopLocalAudioLevelObserver",
      value: (U = n(function* () {
        as(), this._preloadCache.localAudioLevelObserver = null, this._localAudioLevel = 0, this.sendMessageToCallMachine({
          action: "stop-local-audio-level-observer"
        });
      }), function () {
        return U.apply(this, arguments);
      })
    }, {
      key: "startRemoteParticipantsAudioLevelObserver",
      value: function (e) {
        var t = this;
        if (as(), this.validateAudioLevelInterval(e), this._dailyMainExecuted) return new Promise(function (n, r) {
          t.sendMessageToCallMachine({
            action: "start-remote-participants-audio-level-observer",
            interval: e
          }, function (e) {
            e.error ? r({
              error: e.error
            }) : n();
          });
        });
        this._preloadCache.remoteParticipantsAudioLevelObserver = {
          enabled: !0,
          interval: e
        };
      }
    }, {
      key: "stopRemoteParticipantsAudioLevelObserver",
      value: (F = n(function* () {
        as(), this._preloadCache.remoteParticipantsAudioLevelObserver = null, this._remoteParticipantsAudioLevel = {}, this.sendMessageToCallMachine({
          action: "stop-remote-participants-audio-level-observer"
        });
      }), function () {
        return F.apply(this, arguments);
      })
    }, {
      key: "startCamera",
      value: (B = n(function* () {
        var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (is(this._callObjectMode, "startCamera()"), ts(this._callState, this._isPreparingToJoin, "startCamera()", "Did you mean to use setLocalAudio() and/or setLocalVideo() instead?"), rs(this._testCallInProgress, "startCamera()"), this.needsLoad()) try {
          yield this.load(t);
        } catch (e) {
          return Promise.reject(e);
        } else {
          if (this._didPreAuth) {
            if (t.url && t.url !== this.properties.url) return console.error("url in startCamera() is different than the one used in preAuth()"), Promise.reject();
            if (t.token && t.token !== this.properties.token) return console.error("token in startCamera() is different than the one used in preAuth()"), Promise.reject();
          }
          this.validateProperties(t), this.properties = Na(Na({}, this.properties), t);
        }
        return new Promise(function (t) {
          e.sendMessageToCallMachine({
            action: "start-camera",
            properties: Xa(e.properties),
            preloadCache: Xa(e._preloadCache)
          }, function (e) {
            delete e.action, delete e.callbackStamp, t(e);
          });
        });
      }), function () {
        return B.apply(this, arguments);
      })
    }, {
      key: "validateCustomTrack",
      value: function (e, t, n) {
        if (n && n.length > 50) throw new Error("Custom track `trackName` must not be more than 50 characters");
        if (t && "music" !== t && "speech" !== t && !(t instanceof Object)) throw new Error("Custom track `mode` must be either `music` | `speech` | `DailyMicAudioModeSettings` or `undefined`");
        if (!!n && ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo", "customVideoDefaults"].includes(n)) throw new Error("Custom track `trackName` must not match a track name already used by daily: cam-audio, cam-video, customVideoDefaults, screen-video, screen-audio, rmpAudio, rmpVideo");
        if (!(e instanceof MediaStreamTrack)) throw new Error("Custom tracks provided must be instances of MediaStreamTrack");
      }
    }, {
      key: "startCustomTrack",
      value: function () {
        var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            track: track,
            mode: mode,
            trackName: trackName
          };
        return as(), Za(this._callState, "startCustomTrack()"), this.validateCustomTrack(t.track, t.mode, t.trackName), new Promise(function (n, r) {
          window._dailyPreloadCache.customTrack = t.track, t.track = fo, e.sendMessageToCallMachine({
            action: "start-custom-track",
            properties: t
          }, function (e) {
            e.error ? r({
              error: e.error
            }) : n(e.mediaTag);
          });
        });
      }
    }, {
      key: "stopCustomTrack",
      value: function (e) {
        var t = this;
        return as(), Za(this._callState, "stopCustomTrack()"), new Promise(function (n) {
          t.sendMessageToCallMachine({
            action: "stop-custom-track",
            mediaTag: e
          }, function (e) {
            n(e.mediaTag);
          });
        });
      }
    }, {
      key: "setCamera",
      value: function (e) {
        var t = this;
        return ss(), ns(this._dailyMainExecuted, "setCamera()"), new Promise(function (n) {
          t.sendMessageToCallMachine({
            action: "set-camera",
            cameraDeviceId: e
          }, function (e) {
            n({
              device: e.device
            });
          });
        });
      }
    }, {
      key: "setAudioDevice",
      value: (R = n(function* (e) {
        return ss(), this.nativeUtils().setAudioDevice(e), {
          deviceId: yield this.nativeUtils().getAudioDevice()
        };
      }), function (e) {
        return R.apply(this, arguments);
      })
    }, {
      key: "cycleCamera",
      value: function () {
        var e = this;
        return new Promise(function (t) {
          e.sendMessageToCallMachine({
            action: "cycle-camera"
          }, function (e) {
            t({
              device: e.device
            });
          });
        });
      }
    }, {
      key: "cycleMic",
      value: function () {
        var e = this;
        return as(), new Promise(function (t) {
          e.sendMessageToCallMachine({
            action: "cycle-mic"
          }, function (e) {
            t({
              device: e.device
            });
          });
        });
      }
    }, {
      key: "getCameraFacingMode",
      value: function () {
        var e = this;
        return ss(), new Promise(function (t) {
          e.sendMessageToCallMachine({
            action: "get-camera-facing-mode"
          }, function (e) {
            t(e.facingMode);
          });
        });
      }
    }, {
      key: "setInputDevicesAsync",
      value: (I = n(function* (e) {
        var t = this,
          n = e.audioDeviceId,
          r = e.videoDeviceId,
          i = e.audioSource,
          o = e.videoSource;
        return as(), void 0 !== i && (n = i), void 0 !== o && (r = o), n && (this._preloadCache.audioDeviceId = n), r && (this._preloadCache.videoDeviceId = r), this._callObjectMode && this.needsLoad() ? {
          camera: {
            deviceId: this._preloadCache.videoDeviceId
          },
          mic: {
            deviceId: this._preloadCache.audioDeviceId
          },
          speaker: {
            deviceId: this._preloadCache.outputDeviceId
          }
        } : (n instanceof MediaStreamTrack && (n = fo), r instanceof MediaStreamTrack && (r = fo), new Promise(function (e) {
          t.sendMessageToCallMachine({
            action: "set-input-devices",
            audioDeviceId: n,
            videoDeviceId: r
          }, function (n) {
            delete n.action, delete n.callbackStamp, n.returnPreloadCache ? e({
              camera: {
                deviceId: t._preloadCache.videoDeviceId
              },
              mic: {
                deviceId: t._preloadCache.audioDeviceId
              },
              speaker: {
                deviceId: t._preloadCache.outputDeviceId
              }
            }) : e(n);
          });
        }));
      }), function (e) {
        return I.apply(this, arguments);
      })
    }, {
      key: "setOutputDeviceAsync",
      value: (D = n(function* (e) {
        var t = this,
          n = e.outputDeviceId;
        return as(), n && (this._preloadCache.outputDeviceId = n), this._callObjectMode && this.needsLoad() ? {
          camera: {
            deviceId: this._preloadCache.videoDeviceId
          },
          mic: {
            deviceId: this._preloadCache.audioDeviceId
          },
          speaker: {
            deviceId: this._preloadCache.outputDeviceId
          }
        } : new Promise(function (e) {
          t.sendMessageToCallMachine({
            action: "set-output-device",
            outputDeviceId: n
          }, function (n) {
            delete n.action, delete n.callbackStamp, n.returnPreloadCache ? e({
              camera: {
                deviceId: t._preloadCache.videoDeviceId
              },
              mic: {
                deviceId: t._preloadCache.audioDeviceId
              },
              speaker: {
                deviceId: t._preloadCache.outputDeviceId
              }
            }) : e(n);
          });
        });
      }), function (e) {
        return D.apply(this, arguments);
      })
    }, {
      key: "getInputDevices",
      value: (L = n(function* () {
        var e = this;
        return this._callObjectMode && this.needsLoad() ? {
          camera: {
            deviceId: this._preloadCache.videoDeviceId
          },
          mic: {
            deviceId: this._preloadCache.audioDeviceId
          },
          speaker: {
            deviceId: this._preloadCache.outputDeviceId
          }
        } : new Promise(function (t) {
          e.sendMessageToCallMachine({
            action: "get-input-devices"
          }, function (n) {
            delete n.action, delete n.callbackStamp, n.returnPreloadCache ? t({
              camera: {
                deviceId: e._preloadCache.videoDeviceId
              },
              mic: {
                deviceId: e._preloadCache.audioDeviceId
              },
              speaker: {
                deviceId: e._preloadCache.outputDeviceId
              }
            }) : t(n);
          });
        });
      }), function () {
        return L.apply(this, arguments);
      })
    }, {
      key: "nativeInCallAudioMode",
      value: function () {
        return ss(), this._nativeInCallAudioMode;
      }
    }, {
      key: "setNativeInCallAudioMode",
      value: function (e) {
        if (ss(), [Fa, Ua].includes(e)) {
          if (e !== this._nativeInCallAudioMode) return this._nativeInCallAudioMode = e, !this.disableReactNativeAutoDeviceManagement("audio") && es(this._callState, this._isPreparingToJoin) && this.nativeUtils().setAudioMode(this._nativeInCallAudioMode), this;
        } else console.error("invalid in-call audio mode specified: ", e);
      }
    }, {
      key: "preAuth",
      value: (j = n(function* () {
        var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (is(this._callObjectMode, "preAuth()"), ts(this._callState, this._isPreparingToJoin, "preAuth()"), rs(this._testCallInProgress, "preAuth()"), this.needsLoad() && (yield this.load(t)), !t.url) throw new Error("preAuth() requires at least a url to be provided");
        return this.validateProperties(t), this.properties = Na(Na({}, this.properties), t), new Promise(function (t, n) {
          e.sendMessageToCallMachine({
            action: "daily-method-preauth",
            properties: Xa(e.properties),
            preloadCache: Xa(e._preloadCache)
          }, function (r) {
            return r.error ? n(r.error) : r.access ? (e._didPreAuth = !0, void t({
              access: r.access
            })) : n(new Error("unknown error in preAuth()"));
          });
        });
      }), function () {
        return j.apply(this, arguments);
      })
    }, {
      key: "load",
      value: (A = n(function* (e) {
        var t = this;
        if (this.needsLoad()) {
          if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
          if (e && (this.validateProperties(e), this.properties = Na(Na({}, this.properties), e)), !this._callObjectMode && !this.properties.url) throw new Error("can't load iframe meeting because url property isn't set");
          this._updateCallState(wr);
          try {
            this.emit(ai, {
              action: ai
            });
          } catch (e) {
            console.log("could not emit 'loading'", e);
          }
          return this._callObjectMode ? new Promise(function (e, n) {
            t._callObjectLoader.cancel();
            var r = Date.now();
            t._callObjectLoader.load(t._callFrameId, t.properties.dailyConfig && t.properties.dailyConfig.avoidEval, function (n) {
              t._bundleLoadTime = n ? "no-op" : Date.now() - r, t._updateCallState(Sr), n && t.emit(ci, {
                action: ci
              }), e();
            }, function (e, r) {
              if (t.emit(si, {
                action: si,
                errorMsg: e
              }), !r) {
                t._updateCallState(Tr), t.resetMeetingDependentVars();
                var i = {
                  action: ao,
                  errorMsg: e,
                  error: {
                    type: "connection-error",
                    msg: "Failed to load call object bundle.",
                    details: {
                      on: "load",
                      sourceError: new Error(e),
                      bundleUrl: X()
                    }
                  }
                };
                t._maybeSendToSentry(i), t.emit(ao, i), n(e);
              }
            });
          }) : (this._iframe.src = K(this.assembleMeetingUrl()), new Promise(function (e, n) {
            t._loadedCallback = function (r) {
              if (t._callState !== Tr) {
                for (var i in t._updateCallState(Sr), (t.properties.cssFile || t.properties.cssText) && t.loadCss(t.properties), t._inputEventsOn) t.sendMessageToCallMachine({
                  action: uo,
                  on: i
                });
                e();
              } else n(r);
            };
          }));
        }
      }), function (e) {
        return A.apply(this, arguments);
      })
    }, {
      key: "join",
      value: (x = n(function* () {
        var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        rs(this._testCallInProgress, "join()");
        var n = !1;
        if (this.needsLoad()) {
          this.updateIsPreparingToJoin(!0);
          try {
            yield this.load(t);
          } catch (e) {
            return this.updateIsPreparingToJoin(!1), Promise.reject(e);
          }
        } else {
          if (n = !(!this.properties.cssFile && !this.properties.cssText), this._didPreAuth) {
            if (t.url && t.url !== this.properties.url) return console.error("url in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject();
            if (t.token && t.token !== this.properties.token) return console.error("token in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject();
          }
          if (t.url && !this._callObjectMode && t.url && t.url !== this.properties.url) return console.error("url in join() is different than the one used in load() (".concat(this.properties.url, " -> ").concat(t.url, ")")), this.updateIsPreparingToJoin(!1), Promise.reject();
          this.validateProperties(t), this.properties = Na(Na({}, this.properties), t);
        }
        if (void 0 !== t.showLocalVideo && (this._callObjectMode ? console.error("showLocalVideo is not available in callObject mode") : this._showLocalVideo = !!t.showLocalVideo), void 0 !== t.showParticipantsBar && (this._callObjectMode ? console.error("showParticipantsBar is not available in callObject mode") : this._showParticipantsBar = !!t.showParticipantsBar), this._callState === Er || this._callState === kr) return console.warn("already joined meeting, call leave() before joining again"), void this.updateIsPreparingToJoin(!1);
        this._updateCallState(kr, !1);
        try {
          this.emit(di, {
            action: di
          });
        } catch (e) {
          console.log("could not emit 'joining-meeting'", e);
        }
        return this._preloadCache.inputSettings || (this._preloadCache.inputSettings = {}), t.inputSettings && t.inputSettings.audio && (this._preloadCache.inputSettings.audio = t.inputSettings.audio), t.inputSettings && t.inputSettings.video && (this._preloadCache.inputSettings.video = t.inputSettings.video), this.sendMessageToCallMachine({
          action: "join-meeting",
          properties: Xa(this.properties),
          preloadCache: Xa(this._preloadCache)
        }), new Promise(function (t, r) {
          e._joinedCallback = function (i, o) {
            if (e._callState !== Tr) {
              if (e._updateCallState(Er), i) for (var a in i) e._callObjectMode && (ha(i[a]), pa(i[a]), ga(i[a], e._participants[a])), e._participants[a] = Na({}, i[a]), e.toggleParticipantAudioBasedOnNativeAudioFocus();
              n && e.loadCss(e.properties), t(i);
            } else r(o);
          };
        });
      }), function () {
        return x.apply(this, arguments);
      })
    }, {
      key: "leave",
      value: (P = n(function* () {
        var e = this;
        return rs(this._testCallInProgress, "leave()"), new Promise(function (t) {
          if (e._callState === Mr || e._callState === Tr) t();else if (e._callObjectLoader && !e._callObjectLoader.loaded) {
            e._callObjectLoader.cancel(), e._updateCallState(Mr), e.resetMeetingDependentVars();
            try {
              e.emit(Mr, {
                action: Mr
              });
            } catch (e) {
              console.log("could not emit 'left-meeting'", e);
            }
            t();
          } else e._resolveLeave = t, e.sendMessageToCallMachine({
            action: "leave-meeting"
          });
        });
      }), function () {
        return P.apply(this, arguments);
      })
    }, {
      key: "startScreenShare",
      value: (O = n(function* () {
        var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (ns(this._dailyMainExecuted, "startScreenShare()"), t.screenVideoSendSettings && this._validateVideoSendSettings("screenVideo", t.screenVideoSendSettings), t.mediaStream && (this._preloadCache.screenMediaStream = t.mediaStream, t.mediaStream = fo), "undefined" != typeof DailyNativeUtils && void 0 !== DailyNativeUtils.isIOS && DailyNativeUtils.isIOS) {
          var n = this.nativeUtils();
          if (yield n.isScreenBeingCaptured()) return void this.emit(oo, {
            action: oo,
            type: "screen-share-error",
            errorMsg: "Could not start the screen sharing. The screen is already been captured!"
          });
          n.setSystemScreenCaptureStartCallback(function () {
            n.setSystemScreenCaptureStartCallback(null), e.sendMessageToCallMachine({
              action: lo,
              captureOptions: t
            });
          }), n.presentSystemScreenCapturePrompt();
        } else this.sendMessageToCallMachine({
          action: lo,
          captureOptions: t
        });
      }), function () {
        return O.apply(this, arguments);
      })
    }, {
      key: "stopScreenShare",
      value: function () {
        ns(this._dailyMainExecuted, "stopScreenShare()"), this.sendMessageToCallMachine({
          action: "local-screen-stop"
        });
      }
    }, {
      key: "startRecording",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sendMessageToCallMachine(Na({
          action: "local-recording-start"
        }, e));
      }
    }, {
      key: "updateRecording",
      value: function (e) {
        var t = e.layout,
          n = void 0 === t ? {
            preset: "default"
          } : t,
          r = e.instanceId;
        this.sendMessageToCallMachine({
          action: "daily-method-update-recording",
          layout: n,
          instanceId: r
        });
      }
    }, {
      key: "stopRecording",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sendMessageToCallMachine(Na({
          action: "local-recording-stop"
        }, e));
      }
    }, {
      key: "startLiveStreaming",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sendMessageToCallMachine(Na({
          action: "daily-method-start-live-streaming"
        }, e));
      }
    }, {
      key: "updateLiveStreaming",
      value: function (e) {
        var t = e.layout,
          n = void 0 === t ? {
            preset: "default"
          } : t,
          r = e.instanceId;
        this.sendMessageToCallMachine({
          action: "daily-method-update-live-streaming",
          layout: n,
          instanceId: r
        });
      }
    }, {
      key: "addLiveStreamingEndpoints",
      value: function (e) {
        var t = e.endpoints,
          n = e.instanceId;
        this.sendMessageToCallMachine({
          action: ho,
          endpointsOp: bo,
          endpoints: t,
          instanceId: n
        });
      }
    }, {
      key: "removeLiveStreamingEndpoints",
      value: function (e) {
        var t = e.endpoints,
          n = e.instanceId;
        this.sendMessageToCallMachine({
          action: ho,
          endpointsOp: wo,
          endpoints: t,
          instanceId: n
        });
      }
    }, {
      key: "stopLiveStreaming",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sendMessageToCallMachine(Na({
          action: "daily-method-stop-live-streaming"
        }, e));
      }
    }, {
      key: "validateDailyConfig",
      value: function (e) {
        e.camSimulcastEncodings && (console.warn("camSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide camera simulcast settings."), this.validateSimulcastEncodings(e.camSimulcastEncodings)), e.screenSimulcastEncodings && console.warn("screenSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide screen simulcast settings.");
      }
    }, {
      key: "validateSimulcastEncodings",
      value: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (e) {
          if (!(e instanceof Array)) throw new Error("encodings must be an Array");
          if (!_s(e.length, 1, 3)) throw new Error("encodings must be an Array with between 1 to ".concat(3, " layers"));
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            for (var o in this._validateEncodingLayerHasValidProperties(i), i) {
              if (!qa.includes(o)) throw new Error("Invalid key ".concat(o, ", valid keys are:") + Object.values(qa));
              if ("number" != typeof i[o]) throw new Error("".concat(o, " must be a number"));
              if (t) {
                var a = t[o],
                  s = a.min,
                  c = a.max;
                if (!_s(i[o], s, c)) throw new Error("".concat(o, " value not in range. valid range: ").concat(s, " to ").concat(c));
              }
            }
            if (n && !i.hasOwnProperty("maxBitrate")) throw new Error("maxBitrate is not specified");
          }
        }
      }
    }, {
      key: "startRemoteMediaPlayer",
      value: (C = n(function* (e) {
        var t = this,
          n = e.url,
          r = e.settings,
          i = void 0 === r ? {
            state: vo.PLAY
          } : r;
        try {
          !function (e) {
            if ("string" != typeof e) throw new Error('url parameter must be "string" type');
          }(n), ys(i), function (e) {
            for (var t in e) if (!Ya.includes(t)) throw new Error("Invalid key ".concat(t, ", valid keys are: ").concat(Ya));
            e.simulcastEncodings && this.validateSimulcastEncodings(e.simulcastEncodings, Ga, !0);
          }(i);
        } catch (e) {
          throw console.error("invalid argument Error: ".concat(e)), console.error('startRemoteMediaPlayer arguments must be of the form:\n  { url: "playback url",\n  settings?:\n  {state: "play"|"pause", simulcastEncodings?: [{}] } }'), e;
        }
        return new Promise(function (e, r) {
          t.sendMessageToCallMachine({
            action: "daily-method-start-remote-media-player",
            url: n,
            settings: i
          }, function (t) {
            t.error ? r({
              error: t.error,
              errorMsg: t.errorMsg
            }) : e({
              session_id: t.session_id,
              remoteMediaPlayerState: {
                state: t.state,
                settings: t.settings
              }
            });
          });
        });
      }), function (e) {
        return C.apply(this, arguments);
      })
    }, {
      key: "stopRemoteMediaPlayer",
      value: (T = n(function* (e) {
        var t = this;
        if ("string" != typeof e) throw new Error(" remotePlayerID must be of type string");
        return new Promise(function (n, r) {
          t.sendMessageToCallMachine({
            action: "daily-method-stop-remote-media-player",
            session_id: e
          }, function (e) {
            e.error ? r({
              error: e.error,
              errorMsg: e.errorMsg
            }) : n();
          });
        });
      }), function (e) {
        return T.apply(this, arguments);
      })
    }, {
      key: "updateRemoteMediaPlayer",
      value: (M = n(function* (e) {
        var t = this,
          n = e.session_id,
          r = e.settings;
        try {
          ys(r);
        } catch (e) {
          throw console.error("invalid argument Error: ".concat(e)), console.error('updateRemoteMediaPlayer arguments must be of the form:\n  session_id: "participant session",\n  { settings?: {state: "play"|"pause"} }'), e;
        }
        return new Promise(function (e, i) {
          t.sendMessageToCallMachine({
            action: "daily-method-update-remote-media-player",
            session_id: n,
            settings: r
          }, function (t) {
            t.error ? i({
              error: t.error,
              errorMsg: t.errorMsg
            }) : e({
              session_id: t.session_id,
              remoteMediaPlayerState: {
                state: t.state,
                settings: t.settings
              }
            });
          });
        });
      }), function (e) {
        return M.apply(this, arguments);
      })
    }, {
      key: "startTranscription",
      value: function (e) {
        this.sendMessageToCallMachine(Na({
          action: "daily-method-start-transcription"
        }, e));
      }
    }, {
      key: "stopTranscription",
      value: function () {
        this.sendMessageToCallMachine({
          action: "daily-method-stop-transcription"
        });
      }
    }, {
      key: "startDialOut",
      value: (E = n(function* (e) {
        var t = this;
        Za(this._callState, "startDialOut()");
        var n = function (e) {
          if (e) {
            if (!Array.isArray(e)) throw new Error("Error starting dial out: audio codec must be an array");
            if (e.length <= 0) throw new Error("Error starting dial out: audio codec array specified but empty");
            e.forEach(function (e) {
              if ("string" != typeof e) throw new Error("Error starting dial out: audio codec must be a string");
              if ("OPUS" !== e && "PCMU" !== e && "PCMA" !== e && "G722" !== e) throw new Error("Error starting dial out: audio codec must be one of OPUS, PCMU, PCMA, G722");
            });
          }
        };
        if (!e.sipUri && !e.phoneNumber) throw new Error("Error starting dial out: either a sip uri or phone number must be provided");
        if (e.sipUri && e.phoneNumber) throw new Error("Error starting dial out: only one of sip uri or phone number must be provided");
        if (e.sipUri) {
          if ("string" != typeof e.sipUri) throw new Error("Error starting dial out: sipUri must be a string");
          if (!e.sipUri.startsWith("sip:")) throw new Error("Error starting dial out: Invalid SIP URI, must start with 'sip:'");
          if (e.video && "boolean" != typeof e.video) throw new Error("Error starting dial out: video must be a boolean value");
          !function (e) {
            if (e && (n(e.audio), e.video)) {
              if (!Array.isArray(e.video)) throw new Error("Error starting dial out: video codec must be an array");
              if (e.video.length <= 0) throw new Error("Error starting dial out: video codec array specified but empty");
              e.video.forEach(function (e) {
                if ("string" != typeof e) throw new Error("Error starting dial out: video codec must be a string");
                if ("H264" !== e && "VP8" !== e) throw new Error("Error starting dial out: video codec must be H264 or VP8");
              });
            }
          }(e.codecs);
        }
        if (e.phoneNumber) {
          if ("string" != typeof e.phoneNumber) throw new Error("Error starting dial out: phoneNumber must be a string");
          if (!/^\+\d{1,}$/.test(e.phoneNumber)) throw new Error("Error starting dial out: Invalid phone number, must be valid phone number as per E.164");
          e.codecs && n(e.codecs.audio);
        }
        return new Promise(function (n, r) {
          t.sendMessageToCallMachine(Na({
            action: "dialout-start"
          }, e), function (e) {
            e.error ? r(e.error) : n(e);
          });
        });
      }), function (e) {
        return E.apply(this, arguments);
      })
    }, {
      key: "stopDialOut",
      value: function (e) {
        var t = this;
        return Za(this._callState, "stopDialOut()"), new Promise(function (n, r) {
          t.sendMessageToCallMachine(Na({
            action: "dialout-stop"
          }, e), function (e) {
            e.error ? r(e.error) : n(e);
          });
        });
      }
    }, {
      key: "sendDTMF",
      value: (k = n(function* (e) {
        var t = this;
        return Za(this._callState, "sendDTMF()"), function (e) {
          var t = e.sessionId,
            n = e.tones;
          if (!t || !n) throw new Error("sessionId and tones are mandatory parameter");
          if ("string" != typeof t || "string" != typeof n) throw new Error("sessionId and tones should be of string type");
          if (n.length > 20) throw new Error("tones string must be upto 20 characters");
          var r = /[^0-9A-D*#]/g,
            i = n.match(r);
          if (i && i[0]) throw new Error("".concat(i[0], " is not valid DTMF tone"));
        }(e), new Promise(function (n, r) {
          t.sendMessageToCallMachine(Na({
            action: "send-dtmf"
          }, e), function (e) {
            e.error ? r(e.error) : n(e);
          });
        });
      }), function (e) {
        return k.apply(this, arguments);
      })
    }, {
      key: "getNetworkStats",
      value: function () {
        var e = this;
        if (this._callState !== Er) {
          return {
            stats: {
              latest: {}
            }
          };
        }
        return new Promise(function (t) {
          e.sendMessageToCallMachine({
            action: "get-calc-stats"
          }, function (n) {
            t(Na({
              stats: n.stats
            }, e._network));
          });
        });
      }
    }, {
      key: "testWebsocketConnectivity",
      value: (S = n(function* () {
        var e = this;
        if (rs(this._testCallInProgress, "testWebsocketConnectivity()"), this.needsLoad()) try {
          yield this.load();
        } catch (e) {
          return Promise.reject(e);
        }
        return new Promise(function (t, n) {
          e.sendMessageToCallMachine({
            action: "test-websocket-connectivity"
          }, function (e) {
            e.error ? n(e.error) : t(e.results);
          });
        });
      }), function () {
        return S.apply(this, arguments);
      })
    }, {
      key: "abortTestWebsocketConnectivity",
      value: function () {
        this.sendMessageToCallMachine({
          action: "abort-test-websocket-connectivity"
        });
      }
    }, {
      key: "_validateVideoTrackForNetworkTests",
      value: function (e) {
        return e ? e instanceof MediaStreamTrack ? !!Pa(e, {
          isLocalScreenVideo: !1
        }) || (console.error("Video track is not playable. This test needs a live video track."), !1) : (console.error("Video track needs to be of type `MediaStreamTrack`."), !1) : (console.error("Missing video track. You must provide a video track in order to run this test."), !1);
      }
    }, {
      key: "testCallQuality",
      value: (w = n(function* (t) {
        var n = this;
        if (function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method",
            n = arguments.length > 2 ? arguments[2] : void 0;
          if (e) {
            var r = "".concat(t, " can not be called after preAuth(), startCamera(), or join() and call state has been initialized.");
            throw n && (r += " ".concat(n)), console.error(r), new Error(r);
          }
        }(this._dailyMainExecuted, "testCallQuality()"), t.videoTrack && !this._validateVideoTrackForNetworkTests(t.videoTrack)) throw new Error("Video track error");
        var r = this._testCallAlreadyInProgress,
          i = function (e) {
            r || (n._testCallInProgress = e);
          };
        i(!0);
        var o = t.videoTrack,
          a = e(t, Aa);
        if (this._preloadCache.videoTrackForConnectionQualityTest = o, this.needsLoad()) try {
          var s = this._callState;
          yield this.load(), this._callState = s;
        } catch (e) {
          return i(!1), Promise.reject(e);
        }
        return new Promise(function (t) {
          n.sendMessageToCallMachine(Na(Na({
            action: "test-call-quality"
          }, a), {}, {
            dailyJsVersion: n.properties.dailyJsVersion
          }), function (r) {
            var o = r.results,
              a = o.result,
              s = e(o, ja);
            if ("failed" === a) {
              var c,
                l = Na({}, s);
              null !== (c = s.error) && void 0 !== c && c.details ? (s.error.details = JSON.parse(s.error.details), l.error = Na(Na({}, l.error), {}, {
                details: Na({}, l.error.details)
              }), l.error.details.duringTest = "testCallQuality") : (l.error = l.error ? Na({}, l.error) : {}, l.error.details = {
                duringTest: "testCallQuality"
              }), n._maybeSendToSentry(l);
            }
            i(!1), t(Na({
              result: a
            }, s));
          });
        });
      }), function (e) {
        return w.apply(this, arguments);
      })
    }, {
      key: "stopTestCallQuality",
      value: function () {
        this.sendMessageToCallMachine({
          action: "stop-test-call-quality"
        });
      }
    }, {
      key: "testConnectionQuality",
      value: (b = n(function* (e) {
        console.warn("testConnectionQuality() is deprecated: use testPeerToPeerCallQuality() instead");
        var t = yield this.testPeerToPeerCallQuality(e),
          n = {
            result: t.result,
            secondsElapsed: t.secondsElapsed
          };
        return t.data && (n.data = {
          maxRTT: t.data.maxRoundTripTime,
          packetLoss: t.data.avgRecvPacketLoss
        }), n;
      }), function (e) {
        return b.apply(this, arguments);
      })
    }, {
      key: "testPeerToPeerCallQuality",
      value: (_ = n(function* (e) {
        var t = this;
        if (rs(this._testCallInProgress, "testConnectionQuality()"), this.needsLoad()) try {
          yield this.load();
        } catch (e) {
          return Promise.reject(e);
        }
        var n = e.videoTrack,
          r = e.duration;
        if (!this._validateVideoTrackForNetworkTests(n)) throw new Error("Video track error");
        return this._preloadCache.videoTrackForConnectionQualityTest = n, new Promise(function (e, n) {
          t.sendMessageToCallMachine({
            action: "test-p2p-call-quality",
            duration: r
          }, function (t) {
            t.error ? n(t.error) : e(t.results);
          });
        });
      }), function (e) {
        return _.apply(this, arguments);
      })
    }, {
      key: "stopTestConnectionQuality",
      value: function () {
        console.warn("stopTestConnectionQuality() is deprecated: use stopTestPeerToPeerCallQuality() instead"), this.stopTestPeerToPeerCallQuality();
      }
    }, {
      key: "stopTestPeerToPeerCallQuality",
      value: function () {
        this.sendMessageToCallMachine({
          action: "stop-test-p2p-call-quality"
        });
      }
    }, {
      key: "testNetworkConnectivity",
      value: (y = n(function* (e) {
        var t = this;
        if (rs(this._testCallInProgress, "testNetworkConnectivity()"), this.needsLoad()) try {
          yield this.load();
        } catch (e) {
          return Promise.reject(e);
        }
        if (!this._validateVideoTrackForNetworkTests(e)) throw new Error("Video track error");
        return this._preloadCache.videoTrackForNetworkConnectivityTest = e, new Promise(function (e, n) {
          t.sendMessageToCallMachine({
            action: "test-network-connectivity"
          }, function (t) {
            t.error ? n(t.error) : e(t.results);
          });
        });
      }), function (e) {
        return y.apply(this, arguments);
      })
    }, {
      key: "abortTestNetworkConnectivity",
      value: function () {
        this.sendMessageToCallMachine({
          action: "abort-test-network-connectivity"
        });
      }
    }, {
      key: "getCpuLoadStats",
      value: function () {
        var e = this;
        return new Promise(function (t, n) {
          if (e._callState === Er) {
            e.sendMessageToCallMachine({
              action: "get-cpu-load-stats"
            }, function (e) {
              t(e.cpuStats);
            });
          } else t({
            cpuLoadState: void 0,
            cpuLoadStateReason: void 0,
            stats: {}
          });
        });
      }
    }, {
      key: "_validateEncodingLayerHasValidProperties",
      value: function (e) {
        var t;
        if (!((null === (t = Object.keys(e)) || void 0 === t ? void 0 : t.length) > 0)) throw new Error("Empty encoding is not allowed. At least one of these valid keys should be specified:" + Object.values(qa));
      }
    }, {
      key: "_validateVideoSendSettings",
      value: function (e, t) {
        var n = "screenVideo" === e ? ["default-screen-video", "detail-optimized", "motion-optimized", "motion-and-detail-balanced"] : ["default-video", "bandwidth-optimized", "bandwidth-and-quality-balanced", "quality-optimized", "adaptive-2-layers", "adaptive-3-layers"],
          r = "Video send settings should be either an object or one of the supported presets: ".concat(n.join());
        if ("string" == typeof t) {
          if (!n.includes(t)) throw new Error(r);
        } else {
          if ("object" !== i(t)) throw new Error(r);
          if (!t.maxQuality && !t.encodings && void 0 === t.allowAdaptiveLayers) throw new Error("Video send settings must contain at least maxQuality, allowAdaptiveLayers or encodings attribute");
          if (t.maxQuality && -1 === ["low", "medium", "high"].indexOf(t.maxQuality)) throw new Error("maxQuality must be either low, medium or high");
          if (t.encodings) {
            var o = !1;
            switch (Object.keys(t.encodings).length) {
              case 1:
                o = !t.encodings.low;
                break;
              case 2:
                o = !t.encodings.low || !t.encodings.medium;
                break;
              case 3:
                o = !t.encodings.low || !t.encodings.medium || !t.encodings.high;
                break;
              default:
                o = !0;
            }
            if (o) throw new Error("Encodings must be defined as: low, low and medium, or low, medium and high.");
            t.encodings.low && this._validateEncodingLayerHasValidProperties(t.encodings.low), t.encodings.medium && this._validateEncodingLayerHasValidProperties(t.encodings.medium), t.encodings.high && this._validateEncodingLayerHasValidProperties(t.encodings.high);
          }
        }
      }
    }, {
      key: "validateUpdateSendSettings",
      value: function (e) {
        var t = this;
        if (!e || 0 === Object.keys(e).length) throw new Error("Send settings must contain at least information for one track!");
        Object.entries(e).forEach(function (e) {
          var n = g(e, 2),
            r = n[0],
            i = n[1];
          t._validateVideoSendSettings(r, i);
        });
      }
    }, {
      key: "updateSendSettings",
      value: function (e) {
        var t = this;
        return this.validateUpdateSendSettings(e), this.needsLoad() ? (this._preloadCache.sendSettings = e, {
          sendSettings: this._preloadCache.sendSettings
        }) : new Promise(function (n, r) {
          t.sendMessageToCallMachine({
            action: "update-send-settings",
            sendSettings: e
          }, function (e) {
            e.error ? r(e.error) : n(e.sendSettings);
          });
        });
      }
    }, {
      key: "getSendSettings",
      value: function () {
        return this._sendSettings || this._preloadCache.sendSettings;
      }
    }, {
      key: "getLocalAudioLevel",
      value: function () {
        return this._localAudioLevel;
      }
    }, {
      key: "getRemoteParticipantsAudioLevel",
      value: function () {
        return this._remoteParticipantsAudioLevel;
      }
    }, {
      key: "getActiveSpeaker",
      value: function () {
        return as(), this._activeSpeaker;
      }
    }, {
      key: "setActiveSpeakerMode",
      value: function (e) {
        return as(), this.sendMessageToCallMachine({
          action: "set-active-speaker-mode",
          enabled: e
        }), this;
      }
    }, {
      key: "activeSpeakerMode",
      value: function () {
        return as(), this._activeSpeakerMode;
      }
    }, {
      key: "subscribeToTracksAutomatically",
      value: function () {
        return this._preloadCache.subscribeToTracksAutomatically;
      }
    }, {
      key: "setSubscribeToTracksAutomatically",
      value: function (e) {
        return Za(this._callState, "setSubscribeToTracksAutomatically()", "Use the subscribeToTracksAutomatically configuration property."), this._preloadCache.subscribeToTracksAutomatically = e, this.sendMessageToCallMachine({
          action: "daily-method-subscribe-to-tracks-automatically",
          enabled: e
        }), this;
      }
    }, {
      key: "enumerateDevices",
      value: (m = n(function* () {
        var e = this;
        if (this._callObjectMode) {
          var t = yield navigator.mediaDevices.enumerateDevices();
          return "Firefox" === Lo() && Do().major > 115 && (t = t.filter(function (e) {
            return "audiooutput" !== e.kind;
          })), {
            devices: t.map(function (e) {
              return JSON.parse(JSON.stringify(e));
            })
          };
        }
        return new Promise(function (t) {
          e.sendMessageToCallMachine({
            action: "enumerate-devices"
          }, function (e) {
            t({
              devices: e.devices
            });
          });
        });
      }), function () {
        return m.apply(this, arguments);
      })
    }, {
      key: "sendAppMessage",
      value: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "*";
        if (Za(this._callState, "sendAppMessage()"), JSON.stringify(e).length > 4096) throw new Error("Message data too large. Max size is 4096");
        return this.sendMessageToCallMachine({
          action: "app-msg",
          data: e,
          to: t
        }), this;
      }
    }, {
      key: "addFakeParticipant",
      value: function (e) {
        return as(), Za(this._callState, "addFakeParticipant()"), this.sendMessageToCallMachine(Na({
          action: "add-fake-participant"
        }, e)), this;
      }
    }, {
      key: "setShowNamesMode",
      value: function (e) {
        return os(this._callObjectMode, "setShowNamesMode()"), as(), e && "always" !== e && "never" !== e ? (console.error('setShowNamesMode argument should be "always", "never", or false'), this) : (this.sendMessageToCallMachine({
          action: "set-show-names",
          mode: e
        }), this);
      }
    }, {
      key: "setShowLocalVideo",
      value: function () {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return os(this._callObjectMode, "setShowLocalVideo()"), as(), Za(this._callState, "setShowLocalVideo()"), "boolean" != typeof e ? (console.error("setShowLocalVideo only accepts a boolean value"), this) : (this.sendMessageToCallMachine({
          action: "set-show-local-video",
          show: e
        }), this._showLocalVideo = e, this);
      }
    }, {
      key: "showLocalVideo",
      value: function () {
        return os(this._callObjectMode, "showLocalVideo()"), as(), this._showLocalVideo;
      }
    }, {
      key: "setShowParticipantsBar",
      value: function () {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return os(this._callObjectMode, "setShowParticipantsBar()"), as(), Za(this._callState, "setShowParticipantsBar()"), "boolean" != typeof e ? (console.error("setShowParticipantsBar only accepts a boolean value"), this) : (this.sendMessageToCallMachine({
          action: "set-show-participants-bar",
          show: e
        }), this._showParticipantsBar = e, this);
      }
    }, {
      key: "showParticipantsBar",
      value: function () {
        return os(this._callObjectMode, "showParticipantsBar()"), as(), this._showParticipantsBar;
      }
    }, {
      key: "customIntegrations",
      value: function () {
        return as(), os(this._callObjectMode, "customIntegrations()"), this._customIntegrations;
      }
    }, {
      key: "setCustomIntegrations",
      value: function (e) {
        return as(), os(this._callObjectMode, "setCustomIntegrations()"), Za(this._callState, "setCustomIntegrations()"), ms(e) ? (this.sendMessageToCallMachine({
          action: "set-custom-integrations",
          integrations: e
        }), this._customIntegrations = e, this) : this;
      }
    }, {
      key: "startCustomIntegrations",
      value: function (e) {
        var t = this;
        if (as(), os(this._callObjectMode, "startCustomIntegrations()"), Za(this._callState, "startCustomIntegrations()"), Array.isArray(e) && e.some(function (e) {
          return "string" != typeof e;
        }) || !Array.isArray(e) && "string" != typeof e) return console.error("startCustomIntegrations() only accepts string | string[]"), this;
        var n = "string" == typeof e ? [e] : e,
          r = n.filter(function (e) {
            return !(e in t._customIntegrations);
          });
        return r.length ? (console.error("Can't find custom integration(s): \"".concat(r.join(", "), '"')), this) : (this.sendMessageToCallMachine({
          action: "start-custom-integrations",
          ids: n
        }), this);
      }
    }, {
      key: "stopCustomIntegrations",
      value: function (e) {
        var t = this;
        if (as(), os(this._callObjectMode, "stopCustomIntegrations()"), Za(this._callState, "stopCustomIntegrations()"), Array.isArray(e) && e.some(function (e) {
          return "string" != typeof e;
        }) || !Array.isArray(e) && "string" != typeof e) return console.error("stopCustomIntegrations() only accepts string | string[]"), this;
        var n = "string" == typeof e ? [e] : e,
          r = n.filter(function (e) {
            return !(e in t._customIntegrations);
          });
        return r.length ? (console.error("Can't find custom integration(s): \"".concat(r.join(", "), '"')), this) : (this.sendMessageToCallMachine({
          action: "stop-custom-integrations",
          ids: n
        }), this);
      }
    }, {
      key: "customTrayButtons",
      value: function () {
        return os(this._callObjectMode, "customTrayButtons()"), as(), this._customTrayButtons;
      }
    }, {
      key: "updateCustomTrayButtons",
      value: function (e) {
        return os(this._callObjectMode, "updateCustomTrayButtons()"), as(), Za(this._callState, "updateCustomTrayButtons()"), gs(e) ? (this.sendMessageToCallMachine({
          action: "update-custom-tray-buttons",
          btns: e
        }), this._customTrayButtons = e, this) : (console.error("updateCustomTrayButtons only accepts a dictionary of the type ".concat(JSON.stringify(Wa))), this);
      }
    }, {
      key: "theme",
      value: function () {
        return os(this._callObjectMode, "theme()"), this.properties.theme;
      }
    }, {
      key: "setTheme",
      value: function (e) {
        var t = this;
        return os(this._callObjectMode, "setTheme()"), new Promise(function (n, r) {
          try {
            t.validateProperties({
              theme: e
            }), t.properties.theme = Na({}, e), t.sendMessageToCallMachine({
              action: "set-theme",
              theme: t.properties.theme
            });
            try {
              t.emit(oi, {
                action: oi,
                theme: t.properties.theme
              });
            } catch (e) {
              console.log("could not emit 'theme-updated'", e);
            }
            n(t.properties.theme);
          } catch (e) {
            r(e);
          }
        });
      }
    }, {
      key: "requestFullscreen",
      value: (f = n(function* () {
        if (as(), this._iframe && !document.fullscreenElement && Co()) try {
          (yield this._iframe.requestFullscreen) ? this._iframe.requestFullscreen() : this._iframe.webkitRequestFullscreen();
        } catch (e) {
          console.log("could not make video call fullscreen", e);
        }
      }), function () {
        return f.apply(this, arguments);
      })
    }, {
      key: "exitFullscreen",
      value: function () {
        as(), document.fullscreenElement ? document.exitFullscreen() : document.webkitFullscreenElement && document.webkitExitFullscreen();
      }
    }, {
      key: "getSidebarView",
      value: (h = n(function* () {
        var e = this;
        return this._callObjectMode ? (console.error("getSidebarView is not available in callObject mode"), Promise.resolve(null)) : new Promise(function (t) {
          e.sendMessageToCallMachine({
            action: "get-sidebar-view"
          }, function (e) {
            t(e.view);
          });
        });
      }), function () {
        return h.apply(this, arguments);
      })
    }, {
      key: "setSidebarView",
      value: function (e) {
        return this._callObjectMode ? (console.error("setSidebarView is not available in callObject mode"), this) : (this.sendMessageToCallMachine({
          action: "set-sidebar-view",
          view: e
        }), this);
      }
    }, {
      key: "room",
      value: (d = n(function* () {
        var e = this,
          t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).includeRoomConfigDefaults,
          n = void 0 === t || t;
        return this._accessState.access === Lr || this.needsLoad() ? this.properties.url ? {
          roomUrlPendingJoin: this.properties.url
        } : null : new Promise(function (t) {
          e.sendMessageToCallMachine({
            action: "lib-room-info",
            includeRoomConfigDefaults: n
          }, function (e) {
            delete e.action, delete e.callbackStamp, t(e);
          });
        });
      }), function () {
        return d.apply(this, arguments);
      })
    }, {
      key: "geo",
      value: (l = n(function* () {
        try {
          var e = yield fetch("https://gs.daily.co/_ks_/x-swsl/:");
          return {
            current: (yield e.json()).geo
          };
        } catch (e) {
          return console.error("geo lookup failed", e), {
            current: ""
          };
        }
      }), function () {
        return l.apply(this, arguments);
      })
    }, {
      key: "setNetworkTopology",
      value: (a = n(function* (e) {
        var t = this;
        return as(), Za(this._callState, "setNetworkTopology()"), new Promise(function (n, r) {
          t.sendMessageToCallMachine({
            action: "set-network-topology",
            opts: e
          }, function (e) {
            e.error ? r({
              error: e.error
            }) : n({
              workerId: e.workerId
            });
          });
        });
      }), function (e) {
        return a.apply(this, arguments);
      })
    }, {
      key: "getNetworkTopology",
      value: (o = n(function* () {
        var e = this;
        return new Promise(function (t, n) {
          e.needsLoad() && t({
            topology: "none"
          }), e.sendMessageToCallMachine({
            action: "get-network-topology"
          }, function (e) {
            e.error ? n({
              error: e.error
            }) : t({
              topology: e.topology
            });
          });
        });
      }), function () {
        return o.apply(this, arguments);
      })
    }, {
      key: "setPlayNewParticipantSound",
      value: function (e) {
        if (as(), "number" != typeof e && !0 !== e && !1 !== e) throw new Error("argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(e));
        this.sendMessageToCallMachine({
          action: "daily-method-set-play-ding",
          arg: e
        });
      }
    }, {
      key: "on",
      value: function (e, t) {
        return this._inputEventsOn[e] = {}, this.sendMessageToCallMachine({
          action: uo,
          on: e
        }), v.prototype.on.call(this, e, t);
      }
    }, {
      key: "once",
      value: function (e, t) {
        return this._inputEventsOn[e] = {}, this.sendMessageToCallMachine({
          action: uo,
          on: e
        }), v.prototype.once.call(this, e, t);
      }
    }, {
      key: "off",
      value: function (e, t) {
        return delete this._inputEventsOn[e], this.isDestroyed() || this.sendMessageToCallMachine({
          action: uo,
          off: e
        }), v.prototype.off.call(this, e, t);
      }
    }, {
      key: "validateProperties",
      value: function (e) {
        for (var t in e) {
          if (!Ha[t]) throw new Error("unrecognized property '".concat(t, "'"));
          if (Ha[t].validate && !Ha[t].validate(e[t], this)) throw new Error("property '".concat(t, "': ").concat(Ha[t].help));
        }
      }
    }, {
      key: "assembleMeetingUrl",
      value: function () {
        var e,
          t,
          n = Na(Na({}, this.properties), {}, {
            emb: this._callFrameId,
            embHref: encodeURIComponent(window.location.href),
            proxy: null !== (e = window._dailyConfig) && void 0 !== e && e.proxyUrl ? encodeURIComponent(null === (t = window._dailyConfig) || void 0 === t ? void 0 : t.proxyUrl) : void 0
          }),
          r = n.url.match(/\?/) ? "&" : "?";
        return n.url + r + Object.keys(Ha).filter(function (e) {
          return Ha[e].queryString && void 0 !== n[e];
        }).map(function (e) {
          return "".concat(Ha[e].queryString, "=").concat(n[e]);
        }).join("&");
      }
    }, {
      key: "needsLoad",
      value: function () {
        return [br, wr, Mr, Tr].includes(this._callState);
      }
    }, {
      key: "sendMessageToCallMachine",
      value: function (e, t) {
        if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
        this._messageChannel.sendMessageToCallMachine(e, t, this._iframe, this._callFrameId);
      }
    }, {
      key: "forwardPackagedMessageToCallMachine",
      value: function (e) {
        this._messageChannel.forwardPackagedMessageToCallMachine(e, this._iframe, this._callFrameId);
      }
    }, {
      key: "addListenerForPackagedMessagesFromCallMachine",
      value: function (e) {
        return this._messageChannel.addListenerForPackagedMessagesFromCallMachine(e, this._callFrameId);
      }
    }, {
      key: "removeListenerForPackagedMessagesFromCallMachine",
      value: function (e) {
        this._messageChannel.removeListenerForPackagedMessagesFromCallMachine(e);
      }
    }, {
      key: "handleMessageFromCallMachine",
      value: function (t) {
        switch (t.action) {
          case ri:
            this.sendMessageToCallMachine(Na({
              action: ii
            }, this.properties));
            break;
          case "daily-main-executed":
            this._dailyMainExecuted = !0;
            var n = {
              action: po,
              level: "log",
              code: 1011,
              stats: {
                event: "bundle load",
                time: "no-op" === this._bundleLoadTime ? 0 : this._bundleLoadTime,
                preLoaded: "no-op" === this._bundleLoadTime,
                url: X()
              }
            };
            this.sendMessageToCallMachine(n), this._delayDuplicateInstanceLog && this._logDuplicateInstanceAttempt();
            break;
          case ci:
            this._loadedCallback && (this._loadedCallback(), this._loadedCallback = null);
            try {
              this.emit(t.action, t);
            } catch (e) {
              console.log("could not emit", t, e);
            }
            break;
          case hi:
            this._joinedCallback && (this._joinedCallback(t.participants), this._joinedCallback = null);
            try {
              this.emit(t.action, t);
            } catch (e) {
              console.log("could not emit", t, e);
            }
            break;
          case gi:
          case mi:
            if (this._callState === Mr) return;
            if (t.participant && t.participant.session_id) {
              var r = t.participant.local ? "local" : t.participant.session_id;
              this._callObjectMode && (ha(t.participant), pa(t.participant), ga(t.participant, this._participants[r]));
              try {
                this.maybeParticipantTracksStopped(this._participants[r], t.participant), this.maybeParticipantTracksStarted(this._participants[r], t.participant), this.maybeEventRecordingStopped(this._participants[r], t.participant), this.maybeEventRecordingStarted(this._participants[r], t.participant);
              } catch (e) {
                console.error("track events error", e);
              }
              if (!this.compareEqualForParticipantUpdateEvent(t.participant, this._participants[r])) {
                this._participants[r] = Na({}, t.participant), this.toggleParticipantAudioBasedOnNativeAudioFocus();
                try {
                  this.emit(t.action, t);
                } catch (e) {
                  console.log("could not emit", t, e);
                }
              }
            }
            break;
          case vi:
            if (t.participant && t.participant.session_id) {
              var i = this._participants[t.participant.session_id];
              i && this.maybeParticipantTracksStopped(i, null), delete this._participants[t.participant.session_id];
              try {
                this.emit(t.action, t);
              } catch (e) {
                console.log("could not emit", t, e);
              }
            }
            break;
          case yi:
            if (!N(this._participantCounts, t.participantCounts)) {
              this._participantCounts = t.participantCounts;
              try {
                this.emit(t.action, t);
              } catch (e) {
                console.log("could not emit", t, e);
              }
            }
            break;
          case _i:
            var o = {
              access: t.access
            };
            if (t.awaitingAccess && (o.awaitingAccess = t.awaitingAccess), !N(this._accessState, o)) {
              this._accessState = o;
              try {
                this.emit(t.action, t);
              } catch (e) {
                console.log("could not emit", t, e);
              }
            }
            break;
          case bi:
            if (t.meetingSession) {
              this._meetingSessionSummary = t.meetingSession;
              try {
                delete t.callFrameId, this.emit(t.action, t);
                var a = Na(Na({}, t), {}, {
                  action: "meeting-session-updated"
                });
                this.emit(a.action, a);
              } catch (e) {
                console.log("could not emit", t, e);
              }
            }
            break;
          case ao:
            var s;
            this._iframe && !t.preserveIframe && (this._iframe.src = ""), this._updateCallState(Tr), this.resetMeetingDependentVars(), this._loadedCallback && (this._loadedCallback(t.errorMsg), this._loadedCallback = null), t.preserveIframe;
            var c = e(t, La);
            null != c && null !== (s = c.error) && void 0 !== s && s.details && (c.error.details = JSON.parse(c.error.details)), this._maybeSendToSentry(t), this._joinedCallback && (this._joinedCallback(null, c), this._joinedCallback = null);
            try {
              this.emit(t.action, c);
            } catch (e) {
              console.log("could not emit", t, e);
            }
            break;
          case pi:
            this._callState !== Tr && this._updateCallState(Mr), this.resetMeetingDependentVars(), this._resolveLeave && (this._resolveLeave(), this._resolveLeave = null);
            try {
              this.emit(t.action, t);
            } catch (e) {
              console.log("could not emit", t, e);
            }
            break;
          case "selected-devices-updated":
            if (t.devices) try {
              this.emit(t.action, t);
            } catch (e) {
              console.log("could not emit", t, e);
            }
            break;
          case Wi:
            var l = t.threshold,
              u = t.quality;
            if (l !== this._network.threshold || u !== this._network.quality) {
              this._network.quality = u, this._network.threshold = l;
              try {
                this.emit(t.action, t);
              } catch (e) {
                console.log("could not emit", t, e);
              }
            }
            break;
          case Hi:
            if (t && t.cpuLoadState) try {
              this.emit(t.action, t);
            } catch (e) {
              console.log("could not emit", t, e);
            }
            break;
          case Yi:
            var d = t.activeSpeaker;
            if (this._activeSpeaker.peerId !== d.peerId) {
              this._activeSpeaker.peerId = d.peerId;
              try {
                this.emit(t.action, {
                  action: t.action,
                  activeSpeaker: this._activeSpeaker
                });
              } catch (e) {
                console.log("could not emit", t, e);
              }
            }
            break;
          case "show-local-video-changed":
            if (this._callObjectMode) return;
            var h = t.show;
            this._showLocalVideo = h;
            try {
              this.emit(t.action, {
                action: t.action,
                show: h
              });
            } catch (e) {
              console.log("could not emit", t, e);
            }
            break;
          case Ji:
            var p = t.enabled;
            if (this._activeSpeakerMode !== p) {
              this._activeSpeakerMode = p;
              try {
                this.emit(t.action, {
                  action: t.action,
                  enabled: this._activeSpeakerMode
                });
              } catch (e) {
                console.log("could not emit", t, e);
              }
            }
            break;
          case ki:
          case Ei:
          case Mi:
            this._waitingParticipants = t.allWaitingParticipants;
            try {
              this.emit(t.action, {
                action: t.action,
                participant: t.participant
              });
            } catch (e) {
              console.log("could not emit", t, e);
            }
            break;
          case ro:
            if (!N(this._receiveSettings, t.receiveSettings)) {
              this._receiveSettings = t.receiveSettings;
              try {
                this.emit(t.action, {
                  action: t.action,
                  receiveSettings: t.receiveSettings
                });
              } catch (e) {
                console.log("could not emit", t, e);
              }
            }
            break;
          case io:
            if (!N(this._inputSettings, t.inputSettings)) {
              var f = this._getInputSettings();
              if (this._inputSettings = t.inputSettings, this._preloadCache.inputSettings = {}, !N(f, this._getInputSettings())) try {
                this.emit(t.action, {
                  action: t.action,
                  inputSettings: this._getInputSettings()
                });
              } catch (e) {
                console.log("could not emit", t, e);
              }
            }
            break;
          case "send-settings-updated":
            if (!N(this._sendSettings, t.sendSettings)) {
              this._sendSettings = t.sendSettings, this._preloadCache.sendSettings = null;
              try {
                this.emit(t.action, {
                  action: t.action,
                  sendSettings: t.sendSettings
                });
              } catch (e) {
                console.log("could not emit", t, e);
              }
            }
            break;
          case "local-audio-level":
            this._localAudioLevel = t.audioLevel, this.emitDailyJSEvent(t);
            break;
          case "remote-participants-audio-level":
            this._remoteParticipantsAudioLevel = t.participantsAudioLevel, this.emitDailyJSEvent(t);
            break;
          case Fi:
            var g = t.session_id;
            this._rmpPlayerState[g] = t.playerState, this.emitDailyJSEvent(t);
            break;
          case Vi:
            delete this._rmpPlayerState[t.session_id], this.emitDailyJSEvent(t);
            break;
          case Ui:
            var m = t.session_id,
              v = this._rmpPlayerState[m];
            v && this.compareEqualForRMPUpdateEvent(v, t.remoteMediaPlayerState) || (this._rmpPlayerState[m] = t.remoteMediaPlayerState, this.emitDailyJSEvent(t));
            break;
          case "custom-button-click":
          case "sidebar-view-changed":
            this.emitDailyJSEvent(t);
            break;
          case wi:
            var y = this._meetingSessionState.topology !== (t.meetingSessionState && t.meetingSessionState.topology);
            this._meetingSessionState = bs(t.meetingSessionState, this._callObjectMode), (this._callObjectMode || y) && this.emitDailyJSEvent(t);
            break;
          case Ai:
          case ji:
          case Li:
          case Di:
          case Ni:
          case Oi:
          case Pi:
          case xi:
          case li:
          case ui:
          case Ri:
          case Bi:
          case $i:
          case Gi:
          case qi:
          case zi:
          case Ii:
          case Xi:
          case Zi:
          case eo:
          case to:
          case oo:
          case no:
          case "dialin-connected":
          case "dialin-error":
          case "dialin-stopped":
          case "dialin-warning":
          case "dialout-connected":
          case "dialout-error":
          case "dialout-stopped":
          case "dialout-warning":
            try {
              this.emit(t.action, t);
            } catch (e) {
              console.log("could not emit", t, e);
            }
            break;
          case "request-fullscreen":
            this.requestFullscreen();
            break;
          case "request-exit-fullscreen":
            this.exitFullscreen();
        }
      }
    }, {
      key: "maybeEventRecordingStopped",
      value: function (e, t) {
        var n = "record";
        if (e && !t.local && !1 === t[n] && e[n] !== t[n]) try {
          this.emit(ji, {
            action: ji
          });
        } catch (e) {
          console.log("could not emit", e);
        }
      }
    }, {
      key: "maybeEventRecordingStarted",
      value: function (e, t) {
        var n = "record";
        if (e && !t.local && !0 === t[n] && e[n] !== t[n]) try {
          this.emit(Ai, {
            action: Ai
          });
        } catch (e) {
          console.log("could not emit", e);
        }
      }
    }, {
      key: "maybeEventTrackStopped",
      value: function (e, t, n, r) {
        if (e && ("ended" === e.readyState || !t || e.id !== t.id)) try {
          this.emit(Ci, {
            action: Ci,
            track: e,
            participant: n,
            type: r
          });
        } catch (e) {
          console.log("maybeEventTrackStopped: could not emit", e);
        }
      }
    }, {
      key: "maybeEventTrackStarted",
      value: function (e, t, n, r) {
        if (t && (!e || "ended" === e.readyState || t.id !== e.id)) try {
          this.emit(Ti, {
            action: Ti,
            track: t,
            participant: n,
            type: r
          });
        } catch (e) {
          console.log("maybeEventTrackStarted: could not emit", e);
        }
      }
    }, {
      key: "maybeParticipantTracksStopped",
      value: function (e, t) {
        if (e) for (var n in e.tracks) this.maybeEventTrackStopped(e.tracks[n].track, t && t.tracks[n] ? t.tracks[n].track : null, t, n);
      }
    }, {
      key: "maybeParticipantTracksStarted",
      value: function (e, t) {
        if (t) for (var n in t.tracks) this.maybeEventTrackStarted(e && e.tracks[n] ? e.tracks[n].track : null, t.tracks[n].track, t, n);
      }
    }, {
      key: "compareEqualForRMPUpdateEvent",
      value: function (e, t) {
        var n, r;
        return e.state === t.state && (null === (n = e.settings) || void 0 === n ? void 0 : n.volume) === (null === (r = t.settings) || void 0 === r ? void 0 : r.volume);
      }
    }, {
      key: "emitDailyJSEvent",
      value: function (e) {
        try {
          this.emit(e.action, e);
        } catch (t) {
          console.log("could not emit", e, t);
        }
      }
    }, {
      key: "compareEqualForParticipantUpdateEvent",
      value: function (e, t) {
        return !!N(e, t) && (!e.videoTrack || !t.videoTrack || e.videoTrack.id === t.videoTrack.id && e.videoTrack.muted === t.videoTrack.muted && e.videoTrack.enabled === t.videoTrack.enabled) && (!e.audioTrack || !t.audioTrack || e.audioTrack.id === t.audioTrack.id && e.audioTrack.muted === t.audioTrack.muted && e.audioTrack.enabled === t.audioTrack.enabled);
      }
    }, {
      key: "nativeUtils",
      value: function () {
        return ko() ? "undefined" == typeof DailyNativeUtils ? (console.warn("in React Native, DailyNativeUtils is expected to be available"), null) : DailyNativeUtils : null;
      }
    }, {
      key: "updateIsPreparingToJoin",
      value: function (e) {
        this._updateCallState(this._callState, e);
      }
    }, {
      key: "_updateCallState",
      value: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._isPreparingToJoin;
        if (e !== this._callState || t !== this._isPreparingToJoin) {
          var n = this._callState,
            r = this._isPreparingToJoin;
          this._callState = e, this._isPreparingToJoin = t;
          var i = es(n, r),
            o = es(this._callState, this._isPreparingToJoin);
          i !== o && (this.updateKeepDeviceAwake(o), this.updateDeviceAudioMode(o), this.updateShowAndroidOngoingMeetingNotification(o), this.updateNoOpRecordingEnsuringBackgroundContinuity(o));
        }
      }
    }, {
      key: "resetMeetingDependentVars",
      value: function () {
        this._participants = {}, this._participantCounts = $a, this._waitingParticipants = {}, this._activeSpeaker = {}, this._activeSpeakerMode = !1, this._didPreAuth = !1, this._accessState = {
          access: Lr
        }, this._finalSummaryOfPrevSession = this._meetingSessionSummary, this._meetingSessionSummary = {}, this._meetingSessionState = bs(Va, this._callObjectMode), this._receiveSettings = {}, this._inputSettings = void 0, this._sendSettings = {}, this._localAudioLevel = 0, this._remoteParticipantsAudioLevel = {}, this._dailyMainExecuted = !1, this._bundleLoadTime = void 0, this._preloadCache;
      }
    }, {
      key: "updateKeepDeviceAwake",
      value: function (e) {
        ko() && this.nativeUtils().setKeepDeviceAwake(e, this._callFrameId);
      }
    }, {
      key: "updateDeviceAudioMode",
      value: function (e) {
        if (ko() && !this.disableReactNativeAutoDeviceManagement("audio")) {
          var t = e ? this._nativeInCallAudioMode : "idle";
          this.nativeUtils().setAudioMode(t);
        }
      }
    }, {
      key: "updateShowAndroidOngoingMeetingNotification",
      value: function (e) {
        if (ko() && this.nativeUtils().setShowOngoingMeetingNotification) {
          var t, n, r, i;
          if (this.properties.reactNativeConfig && this.properties.reactNativeConfig.androidInCallNotification) {
            var o = this.properties.reactNativeConfig.androidInCallNotification;
            t = o.title, n = o.subtitle, r = o.iconName, i = o.disableForCustomOverride;
          }
          i && (e = !1), this.nativeUtils().setShowOngoingMeetingNotification(e, t, n, r, this._callFrameId);
        }
      }
    }, {
      key: "updateNoOpRecordingEnsuringBackgroundContinuity",
      value: function (e) {
        ko() && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(e);
      }
    }, {
      key: "toggleParticipantAudioBasedOnNativeAudioFocus",
      value: function () {
        if (ko()) {
          var e = window.store.getState();
          for (var t in e.streams) {
            var n = e.streams[t];
            n && n.pendingTrack && "audio" === n.pendingTrack.kind && (n.pendingTrack.enabled = this._hasNativeAudioFocus);
          }
        }
      }
    }, {
      key: "disableReactNativeAutoDeviceManagement",
      value: function (e) {
        return this.properties.reactNativeConfig && this.properties.reactNativeConfig.disableAutoDeviceManagement && this.properties.reactNativeConfig.disableAutoDeviceManagement[e];
      }
    }, {
      key: "absoluteUrl",
      value: function (e) {
        if (void 0 !== e) {
          var t = document.createElement("a");
          return t.href = e, t.href;
        }
      }
    }, {
      key: "sayHello",
      value: function () {
        var e = "hello, world.";
        return console.log(e), e;
      }
    }, {
      key: "_logCallQualityTestResults",
      value: function (e) {
        if (this._dailyMainExecuted) {
          var t = {
            action: po,
            level: "info",
            code: 1012,
            results: e
          };
          this.sendMessageToCallMachine(t);
        } else console.warn("_logCallQualityTestResults() must be called after daily initialization");
      }
    }, {
      key: "_logUseAfterDestroy",
      value: function () {
        if (this.needsLoad()) {
          if (xa && !xa.needsLoad()) {
            var e = {
              action: po,
              level: "error",
              code: this.strictMode ? 9995 : 9997
            };
            xa.sendMessageToCallMachine(e);
          } else if (!this.strictMode) {
            console.error("You are are attempting to use a call instance that was previously destroyed, which is unsupported. Please remove `strictMode: false` from your constructor properties to enable strict mode to track down and fix this unsupported usage.");
          }
        } else {
          var t = {
            action: po,
            level: "error",
            code: this.strictMode ? 9995 : 9997
          };
          this._messageChannel.sendMessageToCallMachine(t, null, this._iframe, this._callFrameId);
        }
      }
    }, {
      key: "_logDuplicateInstanceAttempt",
      value: function () {
        var e = xa._dailyMainExecuted ? xa : this._dailyMainExecuted ? this : void 0;
        e ? e.sendMessageToCallMachine({
          action: po,
          level: "error",
          code: this.strictMode ? 9990 : 9992
        }) : (this._delayDuplicateInstanceLog = !0, xa._delayDuplicateInstanceLog = !0);
      }
    }, {
      key: "_maybeSendToSentry",
      value: function (e) {
        var t, n, r, i, o, a;
        if (null !== (t = e.error) && void 0 !== t && t.type) {
          if (!["connection-error", "end-of-life", "no-room"].includes(e.error.type)) return;
        }
        var s = null !== (n = this.properties) && void 0 !== n && n.url ? new URL(this.properties.url) : void 0,
          c = "production";
        s && s.host.includes(".staging.daily") && (c = "staging");
        var l,
          u,
          d,
          h,
          p,
          f = new Hn({
            dsn: "https://f10f1c81e5d44a4098416c0867a8b740@o77906.ingest.sentry.io/168844",
            transport: Kn,
            integrations: [new _r.GlobalHandlers({
              onunhandledrejection: !1
            })],
            environment: c
          }),
          g = new tn(f, void 0, te.version());
        if (this.session_id && g.setExtra("sessionId", this.session_id), this.properties) {
          var m = Na({}, this.properties);
          m.userName = m.userName ? "[Filtered]" : void 0, m.userData = m.userData ? "[Filtered]" : void 0, m.token = m.token ? "[Filtered]" : void 0, g.setExtra("properties", m);
        }
        if (s) {
          var v = s.searchParams.get("domain");
          if (!v) {
            var y = s.host.match(/(.*?)\./);
            v = y && y[1] || "";
          }
          v && g.setTag("domain", v);
        }
        e.error && (g.setTag("fatalErrorType", e.error.type), g.setExtra("errorDetails", e.error.details), (null === (l = e.error.details) || void 0 === l ? void 0 : l.uri) && g.setTag("serverAddress", e.error.details.uri), (null === (u = e.error.details) || void 0 === u ? void 0 : u.workerGroup) && g.setTag("workerGroup", e.error.details.workerGroup), (null === (d = e.error.details) || void 0 === d ? void 0 : d.geoGroup) && g.setTag("geoGroup", e.error.details.geoGroup), (null === (h = e.error.details) || void 0 === h ? void 0 : h.bundleUrl) && g.setTag("bundleUrl", e.error.details.bundleUrl), (null === (p = e.error.details) || void 0 === p ? void 0 : p.on) && g.setTag("connectionAttempt", e.error.details.on));
        g.setTags({
          callMode: this._callObjectMode ? ko() ? "reactNative" : null !== (r = this.properties) && void 0 !== r && null !== (i = r.dailyConfig) && void 0 !== i && null !== (o = i.callMode) && void 0 !== o && o.includes("prebuilt") ? this.properties.dailyConfig.callMode : "custom" : "prebuilt-frame",
          version: te.version()
        });
        var _ = (null === (a = e.error) || void 0 === a ? void 0 : a.msg) || e.errorMsg;
        g.run(function (e) {
          e.captureException(new Error(_));
        });
      }
    }], [{
      key: "supportedBrowser",
      value: function () {
        if (ko()) return {
          supported: !0,
          mobile: !0,
          name: "React Native",
          version: null,
          supportsScreenShare: !0,
          supportsSfu: !0,
          supportsVideoProcessing: !1,
          supportsAudioProcessing: !1
        };
        var e = z.getParser(So());
        return {
          supported: !!Ao(),
          mobile: "mobile" === e.getPlatformType(),
          name: e.getBrowserName(),
          version: e.getBrowserVersion(),
          supportsFullscreen: !!Co(),
          supportsScreenShare: !!To(),
          supportsSfu: !!Ao(),
          supportsVideoProcessing: Oo(),
          supportsAudioProcessing: xo()
        };
      }
    }, {
      key: "version",
      value: function () {
        return "0.58.0";
      }
    }, {
      key: "createCallObject",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.layout = "none", new te(null, e);
      }
    }, {
      key: "wrap",
      value: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (as(), !e || !e.contentWindow || "string" != typeof e.src) throw new Error("DailyIframe::Wrap needs an iframe-like first argument");
        return t.layout || (t.customLayout ? t.layout = "custom-v1" : t.layout = "browser"), new te(e, t);
      }
    }, {
      key: "createFrame",
      value: function (e, t) {
        var n, r;
        as(), e && t ? (n = e, r = t) : e && e.append ? (n = e, r = {}) : (n = document.body, r = e || {});
        var i = r.iframeStyle;
        i || (i = n === document.body ? {
          position: "fixed",
          border: "1px solid black",
          backgroundColor: "white",
          width: "375px",
          height: "450px",
          right: "1em",
          bottom: "1em"
        } : {
          border: 0,
          width: "100%",
          height: "100%"
        });
        var o = document.createElement("iframe");
        window.navigator && window.navigator.userAgent.match(/Chrome\/61\./) ? o.allow = "microphone, camera" : o.allow = "microphone; camera; autoplay; display-capture; screen-wake-lock", o.style.visibility = "hidden", n.appendChild(o), o.style.visibility = null, Object.keys(i).forEach(function (e) {
          return o.style[e] = i[e];
        }), r.layout || (r.customLayout ? r.layout = "custom-v1" : r.layout = "browser");
        try {
          return new te(o, r);
        } catch (e) {
          throw n.removeChild(o), e;
        }
      }
    }, {
      key: "createTransparentFrame",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        as();
        var t = document.createElement("iframe");
        return t.allow = "microphone; camera; autoplay", t.style.cssText = "\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      border: 0;\n      pointer-events: none;\n    ", document.body.appendChild(t), e.layout || (e.layout = "custom-v1"), te.wrap(t, e);
      }
    }, {
      key: "getCallInstance",
      value: function () {
        return xa;
      }
    }]), te;
  }();
function Xa(e) {
  var t = {};
  for (var n in e) e[n] instanceof MediaStreamTrack ? t[n] = fo : "dailyConfig" === n ? (e[n].modifyLocalSdpHook && (window._dailyConfig && (window._dailyConfig.modifyLocalSdpHook = e[n].modifyLocalSdpHook), delete e[n].modifyLocalSdpHook), e[n].modifyRemoteSdpHook && (window._dailyConfig && (window._dailyConfig.modifyRemoteSdpHook = e[n].modifyRemoteSdpHook), delete e[n].modifyRemoteSdpHook), t[n] = e[n]) : t[n] = e[n];
  return t;
}
function Za(e) {
  var t = arguments.length > 2 ? arguments[2] : void 0;
  if (e !== Er) {
    var n = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " only supported after join.");
    throw t && (n += " ".concat(t)), console.error(n), new Error(n);
  }
}
function es(e, t) {
  return [kr, Er].includes(e) || t;
}
function ts(e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "This daily-js method",
    r = arguments.length > 3 ? arguments[3] : void 0;
  if (es(e, t)) {
    var i = "".concat(n, " not supported after joining a meeting.");
    throw r && (i += " ".concat(r)), console.error(i), new Error(i);
  }
}
function ns(e) {
  var t = arguments.length > 2 ? arguments[2] : void 0;
  if (!e) {
    var n = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " requires preAuth(), startCamera(), or join() to initialize call state.");
    throw t && (n += " ".concat(t)), console.error(n), new Error(n);
  }
}
function rs(e) {
  if (e) {
    var t = "A pre-call quality test is in progress. Please try ".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " again once testing has completed. Use stopTestCallQuality() to end it early.");
    throw console.error(t), new Error(t);
  }
}
function is(e) {
  if (!e) {
    var t = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " is only supported on custom callObject instances");
    throw console.error(t), new Error(t);
  }
}
function os(e) {
  if (e) {
    var t = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " is only supported as part of Daily's Prebuilt");
    throw console.error(t), new Error(t);
  }
}
function as() {
  if (ko()) throw new Error("This daily-js method is not currently supported in React Native");
}
function ss() {
  if (!ko()) throw new Error("This daily-js method is only supported in React Native");
}
function cs(e) {
  if (void 0 === e) return !0;
  var t;
  if ("string" == typeof e) t = e;else try {
    t = JSON.stringify(e), N(JSON.parse(t), e) || console.warn("The userData provided will be modified when serialized.");
  } catch (e) {
    throw Error("userData must be serializable to JSON: ".concat(e));
  }
  if (t.length > 4096) throw Error("userData is too large (".concat(t.length, " characters). Maximum size suppported is ").concat(4096, "."));
  return !0;
}
function ls(e, t) {
  for (var n = t.allowAllParticipantsKey, r = function (e) {
      var t = ["local"];
      return n || t.push("*"), e && !t.includes(e);
    }, i = function (e) {
      return !!(void 0 === e.layer || Number.isInteger(e.layer) && e.layer >= 0 || "inherit" === e.layer);
    }, o = function (e) {
      return !!e && !(e.video && !i(e.video)) && !(e.screenVideo && !i(e.screenVideo));
    }, a = 0, s = Object.entries(e); a < s.length; a++) {
    var c = g(s[a], 2),
      l = c[0],
      u = c[1];
    if (!r(l) || !o(u)) return !1;
  }
  return !0;
}
function us(e) {
  return "object" === i(e) && !!(e.video && "object" === i(e.video) || e.audio && "object" === i(e.audio)) && !(e.video && !function (e) {
    var t = ["type", "config"];
    if (!e) return !1;
    if ("object" !== i(e)) return !1;
    if (!function (e) {
      if ("string" != typeof e) return !1;
      if (!Object.values(go).includes(e)) return console.error("inputSettings video processor type invalid"), !1;
      return !0;
    }(e.type)) return !1;
    if (e.config) {
      if ("object" !== i(e.config)) return !1;
      if (!function (e, t) {
        var n = Object.keys(t);
        if (0 === n.length) return !0;
        var r = "invalid object in inputSettings -> video -> processor -> config";
        switch (e) {
          case go.BGBLUR:
            return n.length > 1 || "strength" !== n[0] ? (console.error(r), !1) : !("number" != typeof t.strength || t.strength <= 0 || t.strength > 1 || isNaN(t.strength)) || (console.error("".concat(r, "; expected: {0 < strength <= 1}, got: ").concat(t.strength)), !1);
          case go.BGIMAGE:
            return !(void 0 !== t.source && !function (e) {
              if ("default" === e.source) return e.type = "default", !0;
              if (e.source instanceof ArrayBuffer) return !0;
              if (Z(e.source)) return e.type = "url", !!function (e) {
                var t = new URL(e),
                  n = t.pathname;
                if ("data:" === t.protocol) try {
                  var r = n.substring(n.indexOf(":") + 1, n.indexOf(";")).split("/")[1];
                  return _o.includes(r);
                } catch (e) {
                  return console.error("failed to deduce blob content type", e), !1;
                }
                var i = n.split(".").at(-1).toLowerCase().trim();
                return _o.includes(i);
              }(e.source) || (console.error("invalid image type; supported types: [".concat(_o.join(", "), "]")), !1);
              return t = e.source, n = Number(t), isNaN(n) || !Number.isInteger(n) || n <= 0 || n > yo ? (console.error("invalid image selection; must be an int, > 0, <= ".concat(yo)), !1) : (e.type = "daily-preselect", !0);
              var t, n;
            }(t));
          default:
            return !0;
        }
      }(e.type, e.config)) return !1;
    }
    return Object.keys(e).filter(function (e) {
      return !t.includes(e);
    }).forEach(function (t) {
      console.warn("invalid key inputSettings -> video -> processor : ".concat(t)), delete e[t];
    }), !0;
  }(e.video.processor)) && !(e.audio && (n = e.audio.processor, r = ["type"], !n || "object" !== i(n) || (Object.keys(n).filter(function (e) {
    return !r.includes(e);
  }).forEach(function (e) {
    console.warn("invalid key inputSettings -> audio -> processor : ".concat(e)), delete n[e];
  }), t = n.type, "string" != typeof t || !Object.values(mo).includes(t) && (console.error("inputSettings audio processor type invalid"), 1))));
  var t, n, r;
}
function ds(e) {
  var t,
    n,
    r = [];
  e.video && !Oo(null !== (t = null === (n = window._dailyConfig) || void 0 === n ? void 0 : n.useLegacyVideoProcessor) && void 0 !== t && t) && (delete e.video, r.push("video")), e.audio && !xo() && (delete e.audio, r.push("audio")), r.length > 0 && console.error("Ignoring settings for browser- or platform-unsupported input processor(s): ".concat(r.join(", ")));
}
function hs() {
  var e = Object.values(go).join(" | "),
    t = Object.values(mo).join(" | ");
  return "inputSettings must be of the form: { video?: { processor: { type: [ ".concat(e, " ], config?: {} } }, audio?: { processor: {type: [ ").concat(t, " ] } } }");
}
function ps(e) {
  var t = e.allowAllParticipantsKey;
  return "receiveSettings must be of the form { [<remote participant id> | ".concat(Rr).concat(t ? ' | "'.concat(Br, '"') : "", "]: ") + '{ [video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], [screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] }}}';
}
function fs() {
  return "customIntegrations should be an object of type ".concat(JSON.stringify(za), ".");
}
function gs(e) {
  if (e && "object" !== i(e) || Array.isArray(e)) return console.error("customTrayButtons should be an Object of the type ".concat(JSON.stringify(Wa), ".")), !1;
  if (e) for (var t = 0, n = Object.entries(e); t < n.length; t++) for (var r = g(n[t], 1)[0], o = 0, a = Object.entries(e[r]); o < a.length; o++) {
    var s = g(a[o], 2),
      c = s[0],
      l = s[1];
    if ("iconPath" === c && !Z(l)) return console.error("customTrayButton ".concat(c, " should be a url.")), !1;
    if ("iconPathDarkMode" === c && !Z(l)) return console.error("customTrayButton ".concat(c, " should be a url.")), !1;
    var u = Wa.id[c];
    if (!u) return console.error("customTrayButton does not support key ".concat(c)), !1;
    if (i(l) !== u) return console.error("customTrayButton ".concat(c, " should be a ").concat(u, ".")), !1;
  }
  return !0;
}
function ms(e) {
  if (!e || e && "object" !== i(e) || Array.isArray(e)) return console.error(fs()), !1;
  for (var t = function (e) {
      return "".concat(e, " should be ").concat(za.id[e]);
    }, n = function (e, t) {
      return console.error("customIntegration ".concat(e, ": ").concat(t));
    }, r = 0, o = Object.entries(e); r < o.length; r++) {
    var a = g(o[r], 1)[0];
    if (!("label" in e[a])) return n(a, "label is required"), !1;
    if (!("location" in e[a])) return n(a, "location is required"), !1;
    if (!("src" in e[a]) && !("srcdoc" in e[a])) return n(a, "src or srcdoc is required"), !1;
    for (var s = 0, c = Object.entries(e[a]); s < c.length; s++) {
      var l = g(c[s], 2),
        u = l[0],
        d = l[1];
      switch (u) {
        case "allow":
        case "csp":
        case "name":
        case "referrerPolicy":
        case "sandbox":
          if ("string" != typeof d) return n(a, t(u)), !1;
          break;
        case "iconURL":
          if (!Z(d)) return n(a, "".concat(u, " should be a url")), !1;
          break;
        case "src":
          if ("srcdoc" in e[a]) return n(a, "cannot have both src and srcdoc"), !1;
          if (!Z(d)) return n(a, 'src "'.concat(d, '" is not a valid URL')), !1;
          break;
        case "srcdoc":
          if ("src" in e[a]) return n(a, "cannot have both src and srcdoc"), !1;
          if ("string" != typeof d) return n(a, t(u)), !1;
          break;
        case "location":
          if (!["main", "sidebar"].includes(d)) return n(a, t(u)), !1;
          break;
        case "controlledBy":
          if ("*" !== d && "owners" !== d && (!Array.isArray(d) || d.some(function (e) {
            return "string" != typeof e;
          }))) return n(a, t(u)), !1;
          break;
        case "shared":
          if ((!Array.isArray(d) || d.some(function (e) {
            return "string" != typeof e;
          })) && "owners" !== d && "boolean" != typeof d) return n(a, t(u)), !1;
          break;
        default:
          if (!za.id[u]) return console.error("customIntegration does not support key ".concat(u)), !1;
      }
    }
  }
  return !0;
}
function vs(e, t) {
  if (void 0 === t) return !1;
  switch (i(t)) {
    case "string":
      return i(e) === t;
    case "object":
      if ("object" !== i(e)) return !1;
      for (var n in e) if (!vs(e[n], t[n])) return !1;
      return !0;
    default:
      return !1;
  }
}
function ys(e) {
  if ("object" !== i(e)) throw new Error('RemoteMediaPlayerSettings: must be "object" type');
  if (e.state && !Object.values(vo).includes(e.state)) throw new Error("Invalid value for RemoteMediaPlayerSettings.state, valid values are: " + JSON.stringify(vo));
  if (e.volume) {
    if ("number" != typeof e.volume) throw new Error('RemoteMediaPlayerSettings.volume: must be "number" type');
    if (e.volume < 0 || e.volume > 2) throw new Error("RemoteMediaPlayerSettings.volume: must be between 0.0 - 2.0");
  }
}
function _s(e, t, n) {
  return !("number" != typeof e || e < t || e > n);
}
function bs(e, t) {
  return e && !t && delete e.data, e;
}
},{"process":"C:/Users/mussi/AppData/Roaming/npm/node_modules/parcel-bundler/node_modules/process/browser.js"}],"C:/Users/mussi/AppData/Roaming/npm/node_modules/parcel-bundler/node_modules/events/events.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}
function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}
var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};
function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;
function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}
Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function () {
    return defaultMaxListeners;
  },
  set: function (arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});
EventEmitter.init = function () {
  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }
  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};
function _getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = type === 'error';
  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0) er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }
  var handler = events[type];
  if (handler === undefined) return false;
  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
  }
  return true;
};
function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;
  checkListener(listener);
  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }
  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }
  return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};
function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0) return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}
function _onceWrap(target, type, listener) {
  var state = {
    fired: false,
    wrapFn: undefined,
    target: target,
    type: type,
    listener: listener
  };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}
EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  checkListener(listener);
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
};

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;
  checkListener(listener);
  events = this._events;
  if (events === undefined) return this;
  list = events[type];
  if (list === undefined) return this;
  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;
    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }
    if (position < 0) return this;
    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }
    if (list.length === 1) events[type] = list[0];
    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }
  return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;
  events = this._events;
  if (events === undefined) return this;

  // not listening for removeListener, no need to emit
  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;
    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }
  listeners = events[type];
  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }
  return this;
};
function _listeners(target, type, unwrap) {
  var events = target._events;
  if (events === undefined) return [];
  var evlistener = events[type];
  if (evlistener === undefined) return [];
  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};
EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;
  if (events !== undefined) {
    var evlistener = events[type];
    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }
  return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};
function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i) copy[i] = arr[i];
  return copy;
}
function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) list[index] = list[index + 1];
  list.pop();
}
function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}
function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }
    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    }
    ;
    eventTargetAgnosticAddListener(emitter, name, resolver, {
      once: true
    });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, {
        once: true
      });
    }
  });
}
function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}
},{}],"node_modules/@vapi-ai/web/dist/api.js":[function(require,module,exports) {
"use strict";
/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = exports.HttpClient = exports.ContentType = exports.CreateWebCallDTO = void 0;
class CreateWebCallDTO {
    /**
     * This is the assistant that will be used for the call. To use a transient assistant, use `assistant` instead.
     */
    assistantId;
    /**
     * Overrides for the assistant's settings and template variables.
     */
    assistantOverrides;
    /**
     * This is the assistant that will be used for the call. To use an existing assistant, use `assistantId` instead.
     */
    assistant;
    /**
     * This will expose SIP URI you can use to connect to the call. Disabled by default.
     */
    sipEnabled;
    /**
     * This is the metadata associated with the call.
     */
    metadata;
}
exports.CreateWebCallDTO = CreateWebCallDTO;
var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
    ContentType["Text"] = "text/plain";
})(ContentType || (exports.ContentType = ContentType = {}));
class HttpClient {
    baseUrl = 'https://api.vapi.ai';
    securityData = null;
    securityWorker;
    abortControllers = new Map();
    customFetch = (...fetchParams) => fetch(...fetchParams);
    baseApiParams = {
        credentials: 'same-origin',
        headers: {},
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    };
    constructor(apiConfig = {}) {
        Object.assign(this, apiConfig);
    }
    setSecurityData = (data) => {
        this.securityData = data;
    };
    encodeQueryParam(key, value) {
        const encodedKey = encodeURIComponent(key);
        return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
    }
    addQueryParam(query, key) {
        return this.encodeQueryParam(key, query[key]);
    }
    addArrayQueryParam(query, key) {
        const value = query[key];
        return value.map((v) => this.encodeQueryParam(key, v)).join('&');
    }
    toQueryString(rawQuery) {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
        return keys
            .map((key) => Array.isArray(query[key])
            ? this.addArrayQueryParam(query, key)
            : this.addQueryParam(query, key))
            .join('&');
    }
    addQueryParams(rawQuery) {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : '';
    }
    contentFormatters = {
        [ContentType.Json]: (input) => input !== null && (typeof input === 'object' || typeof input === 'string')
            ? JSON.stringify(input)
            : input,
        [ContentType.Text]: (input) => input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
        [ContentType.FormData]: (input) => Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            formData.append(key, property instanceof Blob
                ? property
                : typeof property === 'object' && property !== null
                    ? JSON.stringify(property)
                    : `${property}`);
            return formData;
        }, new FormData()),
        [ContentType.UrlEncoded]: (input) => this.toQueryString(input),
    };
    mergeRequestParams(params1, params2) {
        return {
            ...this.baseApiParams,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...(this.baseApiParams.headers || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }
    createAbortSignal = (cancelToken) => {
        if (this.abortControllers.has(cancelToken)) {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                return abortController.signal;
            }
            return void 0;
        }
        const abortController = new AbortController();
        this.abortControllers.set(cancelToken, abortController);
        return abortController.signal;
    };
    abortRequest = (cancelToken) => {
        const abortController = this.abortControllers.get(cancelToken);
        if (abortController) {
            abortController.abort();
            this.abortControllers.delete(cancelToken);
        }
    };
    request = async ({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }) => {
        const secureParams = ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
            this.securityWorker &&
            (await this.securityWorker(this.securityData))) ||
            {};
        const requestParams = this.mergeRequestParams(params, secureParams);
        const queryString = query && this.toQueryString(query);
        const payloadFormatter = this.contentFormatters[type || ContentType.Json];
        const responseFormat = format || requestParams.format;
        return this.customFetch(`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`, {
            ...requestParams,
            headers: {
                ...(requestParams.headers || {}),
                ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
            },
            signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
            body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
        }).then(async (response) => {
            const r = response;
            r.data = null;
            r.error = null;
            const data = !responseFormat
                ? r
                : await response[responseFormat]()
                    .then((data) => {
                    if (r.ok) {
                        r.data = data;
                    }
                    else {
                        r.error = data;
                    }
                    return r;
                })
                    .catch((e) => {
                    r.error = e;
                    return r;
                });
            if (cancelToken) {
                this.abortControllers.delete(cancelToken);
            }
            if (!response.ok)
                throw data;
            return data;
        });
    };
}
exports.HttpClient = HttpClient;
/**
 * @title Vapi API
 * @version 1.0
 * @baseUrl https://api.vapi.ai
 * @contact
 *
 * API for building voice assistants
 */
class Api extends HttpClient {
    assistant = {
        /**
         * No description
         *
         * @tags Assistants
         * @name AssistantControllerCreate
         * @summary Create Assistant
         * @request POST:/assistant
         * @secure
         */
        assistantControllerCreate: (data, params = {}) => this.request({
            path: `/assistant`,
            method: 'POST',
            body: data,
            secure: true,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Assistants
         * @name AssistantControllerFindAll
         * @summary List Assistants
         * @request GET:/assistant
         * @secure
         */
        assistantControllerFindAll: (query, params = {}) => this.request({
            path: `/assistant`,
            method: 'GET',
            query: query,
            secure: true,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Assistants
         * @name AssistantControllerFindOne
         * @summary Get Assistant
         * @request GET:/assistant/{id}
         * @secure
         */
        assistantControllerFindOne: (id, params = {}) => this.request({
            path: `/assistant/${id}`,
            method: 'GET',
            secure: true,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Assistants
         * @name AssistantControllerUpdate
         * @summary Update Assistant
         * @request PATCH:/assistant/{id}
         * @secure
         */
        assistantControllerUpdate: (id, data, params = {}) => this.request({
            path: `/assistant/${id}`,
            method: 'PATCH',
            body: data,
            secure: true,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Assistants
         * @name AssistantControllerReplace
         * @summary Replace Assistant
         * @request PUT:/assistant/{id}
         * @secure
         */
        assistantControllerReplace: (id, data, params = {}) => this.request({
            path: `/assistant/${id}`,
            method: 'PUT',
            body: data,
            secure: true,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Assistants
         * @name AssistantControllerRemove
         * @summary Delete Assistant
         * @request DELETE:/assistant/{id}
         * @secure
         */
        assistantControllerRemove: (id, params = {}) => this.request({
            path: `/assistant/${id}`,
            method: 'DELETE',
            secure: true,
            format: 'json',
            ...params,
        }),
    };
    call = {
        /**
         * No description
         *
         * @tags Calls
         * @name CallControllerFindAll
         * @summary List Calls
         * @request GET:/call
         * @secure
         */
        callControllerFindAll: (query, params = {}) => this.request({
            path: `/call`,
            method: 'GET',
            query: query,
            secure: true,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Calls
         * @name CallControllerFindOne
         * @summary Get Call
         * @request GET:/call/{id}
         * @secure
         */
        callControllerFindOne: (id, params = {}) => this.request({
            path: `/call/${id}`,
            method: 'GET',
            secure: true,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Calls
         * @name CallControllerCreatePhoneCall
         * @summary Create Phone Call
         * @request POST:/call/phone
         * @secure
         */
        callControllerCreatePhoneCall: (data, params = {}) => this.request({
            path: `/call/phone`,
            method: 'POST',
            body: data,
            secure: true,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Calls
         * @name CallControllerCreateWebCall
         * @summary Create Web Call
         * @request POST:/call/web
         * @secure
         */
        callControllerCreateWebCall: (data, params = {}) => this.request({
            path: `/call/web`,
            method: 'POST',
            body: data,
            secure: true,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
    };
    credential = {
        /**
         * No description
         *
         * @tags Credentials
         * @name CredentialControllerCreate
         * @summary Create Credential
         * @request POST:/credential
         * @secure
         */
        credentialControllerCreate: (data, params = {}) => this.request({
            path: `/credential`,
            method: 'POST',
            body: data,
            secure: true,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Credentials
         * @name CredentialControllerFindAll
         * @summary List Credentials
         * @request GET:/credential
         * @secure
         */
        credentialControllerFindAll: (query, params = {}) => this.request({
            path: `/credential`,
            method: 'GET',
            query: query,
            secure: true,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Credentials
         * @name CredentialControllerFindOne
         * @summary Get Credential
         * @request GET:/credential/{id}
         * @secure
         */
        credentialControllerFindOne: (id, params = {}) => this.request({
            path: `/credential/${id}`,
            method: 'GET',
            secure: true,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Credentials
         * @name CredentialControllerUpdate
         * @summary Update Credential
         * @request PUT:/credential/{id}
         * @secure
         */
        credentialControllerUpdate: (id, data, params = {}) => this.request({
            path: `/credential/${id}`,
            method: 'PUT',
            body: data,
            secure: true,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Credentials
         * @name CredentialControllerRemove
         * @summary Delete Credential
         * @request DELETE:/credential/{id}
         * @secure
         */
        credentialControllerRemove: (id, params = {}) => this.request({
            path: `/credential/${id}`,
            method: 'DELETE',
            secure: true,
            format: 'json',
            ...params,
        }),
    };
    phoneNumber = {
        /**
         * No description
         *
         * @tags Phone Numbers
         * @name PhoneNumberControllerBuy
         * @summary Buy Phone Number
         * @request POST:/phone-number/buy
         * @secure
         */
        phoneNumberControllerBuy: (data, params = {}) => this.request({
            path: `/phone-number/buy`,
            method: 'POST',
            body: data,
            secure: true,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Phone Numbers
         * @name PhoneNumberControllerImportTwilio
         * @summary Import Twilio Number
         * @request POST:/phone-number/import/twilio
         * @secure
         */
        phoneNumberControllerImportTwilio: (data, params = {}) => this.request({
            path: `/phone-number/import/twilio`,
            method: 'POST',
            body: data,
            secure: true,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Phone Numbers
         * @name PhoneNumberControllerImportVonage
         * @summary Import Vonage Number
         * @request POST:/phone-number/import/vonage
         * @secure
         */
        phoneNumberControllerImportVonage: (data, params = {}) => this.request({
            path: `/phone-number/import/vonage`,
            method: 'POST',
            body: data,
            secure: true,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Phone Numbers
         * @name PhoneNumberControllerFindAll
         * @summary List Phone Numbers
         * @request GET:/phone-number
         * @secure
         */
        phoneNumberControllerFindAll: (query, params = {}) => this.request({
            path: `/phone-number`,
            method: 'GET',
            query: query,
            secure: true,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Phone Numbers
         * @name PhoneNumberControllerFindOne
         * @summary Get Phone Number
         * @request GET:/phone-number/{id}
         * @secure
         */
        phoneNumberControllerFindOne: (id, params = {}) => this.request({
            path: `/phone-number/${id}`,
            method: 'GET',
            secure: true,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Phone Numbers
         * @name PhoneNumberControllerUpdate
         * @summary Update Phone Number
         * @request PATCH:/phone-number/{id}
         * @secure
         */
        phoneNumberControllerUpdate: (id, data, params = {}) => this.request({
            path: `/phone-number/${id}`,
            method: 'PATCH',
            body: data,
            secure: true,
            type: ContentType.Json,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Phone Numbers
         * @name PhoneNumberControllerRemove
         * @summary Delete Phone Number
         * @request DELETE:/phone-number/{id}
         * @secure
         */
        phoneNumberControllerRemove: (id, params = {}) => this.request({
            path: `/phone-number/${id}`,
            method: 'DELETE',
            secure: true,
            format: 'json',
            ...params,
        }),
    };
    metrics = {
        /**
         * No description
         *
         * @tags Metrics
         * @name MetricsControllerFindAll
         * @summary List Metrics
         * @request GET:/metrics
         * @secure
         */
        metricsControllerFindAll: (query, params = {}) => this.request({
            path: `/metrics`,
            method: 'GET',
            query: query,
            secure: true,
            format: 'json',
            ...params,
        }),
    };
    voiceLibrary = {
        /**
         * No description
         *
         * @tags Voice Library
         * @name VoiceLibraryControllerVoiceGetByProvider
         * @summary Get voices in Voice Library by Providers
         * @request GET:/voice-library/{provider}
         * @secure
         */
        voiceLibraryControllerVoiceGetByProvider: (provider, params = {}) => this.request({
            path: `/voice-library/${provider}`,
            method: 'GET',
            secure: true,
            format: 'json',
            ...params,
        }),
        /**
         * No description
         *
         * @tags Voice Library
         * @name VoiceLibraryControllerVoiceLibrarySyncByProvider
         * @summary Sync voices in Voice Library by Providers
         * @request POST:/voice-library/sync/{provider}
         * @secure
         */
        voiceLibraryControllerVoiceLibrarySyncByProvider: (provider, params = {}) => this.request({
            path: `/voice-library/sync/${provider}`,
            method: 'POST',
            secure: true,
            format: 'json',
            ...params,
        }),
    };
    logging = {
        /**
         * No description
         *
         * @tags Logging
         * @name LoggingControllerGetLogs
         * @summary Get Logging Logs
         * @request GET:/logging
         * @secure
         */
        loggingControllerGetLogs: (query, params = {}) => this.request({
            path: `/logging`,
            method: 'GET',
            query: query,
            secure: true,
            format: 'json',
            ...params,
        }),
    };
}
exports.Api = Api;

},{}],"node_modules/@vapi-ai/web/dist/client.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const api_1 = require("./api");
const api = new api_1.Api({
    baseUrl: "https://api.vapi.ai",
    baseApiParams: {
        secure: true,
    },
    securityWorker: async (securityData) => {
        if (securityData) {
            return {
                headers: {
                    Authorization: `Bearer ${securityData}`,
                },
            };
        }
    },
});
exports.client = api;

},{"./api":"node_modules/@vapi-ai/web/dist/api.js"}],"node_modules/@vapi-ai/web/dist/vapi.js":[function(require,module,exports) {
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const daily_js_1 = __importDefault(require("@daily-co/daily-js"));
const events_1 = __importDefault(require("events"));
const client_1 = require("./client");
function destroyAudioPlayer(participantId) {
    const player = document.querySelector(`audio[data-participant-id="${participantId}"]`);
    player?.remove();
}
async function startPlayer(player, track) {
    player.muted = false;
    player.autoplay = true;
    if (track != null) {
        player.srcObject = new MediaStream([track]);
        await player.play();
    }
}
async function buildAudioPlayer(track, participantId) {
    const player = document.createElement('audio');
    player.dataset.participantId = participantId;
    document.body.appendChild(player);
    await startPlayer(player, track);
    return player;
}
function subscribeToTracks(e, call) {
    if (e.participant.local)
        return;
    call.updateParticipant(e.participant.session_id, {
        setSubscribedTracks: {
            audio: true,
            video: false,
        },
    });
}
class VapiEventEmitter extends events_1.default {
    on(event, listener) {
        super.on(event, listener);
        return this;
    }
    once(event, listener) {
        super.once(event, listener);
        return this;
    }
    emit(event, ...args) {
        return super.emit(event, ...args);
    }
    removeListener(event, listener) {
        super.removeListener(event, listener);
        return this;
    }
    removeAllListeners(event) {
        super.removeAllListeners(event);
        return this;
    }
}
class Vapi extends VapiEventEmitter {
    started = false;
    call = null;
    speakingTimeout = null;
    averageSpeechLevel = 0;
    constructor(apiToken, apiBaseUrl) {
        super();
        client_1.client.baseUrl = apiBaseUrl ?? 'https://api.vapi.ai';
        client_1.client.setSecurityData(apiToken);
    }
    cleanup() {
        this.started = false;
        this.call?.destroy();
        this.call = null;
        this.speakingTimeout = null;
    }
    async start(assistant, assistantOverrides) {
        if (this.started) {
            return null;
        }
        this.started = true;
        try {
            const webCall = (await client_1.client.call.callControllerCreateWebCall({
                assistant: typeof assistant === 'string' ? undefined : assistant,
                assistantId: typeof assistant === 'string' ? assistant : undefined,
                assistantOverrides,
            })).data;
            if (this.call) {
                this.cleanup();
            }
            this.call = daily_js_1.default.createCallObject({
                audioSource: true,
                videoSource: false,
            });
            this.call.iframe()?.style.setProperty('display', 'none');
            this.call.on('left-meeting', () => {
                this.emit('call-end');
                this.cleanup();
            });
            this.call.on('participant-left', (e) => {
                if (!e)
                    return;
                destroyAudioPlayer(e.participant.session_id);
            });
            this.call.on('error', (error) => {
                this.emit('error', error);
            });
            this.call.on('camera-error', (error) => {
                this.emit('error', error);
            });
            this.call.on('track-started', async (e) => {
                if (!e || !e.participant)
                    return;
                if (e.participant?.local)
                    return;
                if (e.track.kind !== 'audio')
                    return;
                await buildAudioPlayer(e.track, e.participant.session_id);
                if (e?.participant?.user_name !== 'Vapi Speaker')
                    return;
                this.call?.sendAppMessage('playable');
            });
            this.call.on('participant-joined', (e) => {
                if (!e || !this.call)
                    return;
                subscribeToTracks(e, this.call);
            });
            await this.call.join({
                url: webCall.webCallUrl,
                subscribeToTracksAutomatically: false,
            });
            this.call.startRemoteParticipantsAudioLevelObserver(100);
            this.call.on('remote-participants-audio-level', (e) => {
                if (e)
                    this.handleRemoteParticipantsAudioLevel(e);
            });
            this.call.on('app-message', (e) => this.onAppMessage(e));
            this.call.updateInputSettings({
                audio: {
                    processor: {
                        type: 'noise-cancellation',
                    },
                },
            });
            return webCall;
        }
        catch (e) {
            console.error(e);
            this.emit('error', e);
            this.cleanup();
            return null;
        }
    }
    onAppMessage(e) {
        if (!e)
            return;
        try {
            if (e.data === 'listening') {
                return this.emit('call-start');
            }
            else {
                try {
                    const parsedMessage = JSON.parse(e.data);
                    this.emit('message', parsedMessage);
                }
                catch (parseError) {
                    console.log('Error parsing message data: ', parseError);
                }
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    handleRemoteParticipantsAudioLevel(e) {
        const speechLevel = Object.values(e.participantsAudioLevel).reduce((a, b) => a + b, 0);
        this.emit('volume-level', Math.min(1, speechLevel / 0.15));
        const isSpeaking = speechLevel > 0.01;
        if (!isSpeaking)
            return;
        if (this.speakingTimeout) {
            clearTimeout(this.speakingTimeout);
            this.speakingTimeout = null;
        }
        else {
            this.emit('speech-start');
        }
        this.speakingTimeout = setTimeout(() => {
            this.emit('speech-end');
            this.speakingTimeout = null;
        }, 1000);
    }
    stop() {
        this.started = false;
        this.call?.destroy();
        this.call = null;
    }
    send(message) {
        this.call?.sendAppMessage(JSON.stringify(message));
    }
    setMuted(mute) {
        try {
            if (!this.call) {
                throw new Error('Call object is not available.');
            }
            this.call.setLocalAudio(!mute);
        }
        catch (error) {
            throw error;
        }
    }
    isMuted() {
        try {
            if (!this.call) {
                return false;
            }
            return this.call.localAudio() === false;
        }
        catch (error) {
            throw error;
        }
    }
    say(message, endCallAfterSpoken) {
        this.send({
            type: 'say',
            message,
            endCallAfterSpoken
        });
    }
}
exports.default = Vapi;

},{"@daily-co/daily-js":"node_modules/@daily-co/daily-js/dist/daily-esm.js","events":"C:/Users/mussi/AppData/Roaming/npm/node_modules/parcel-bundler/node_modules/events/events.js","./client":"node_modules/@vapi-ai/web/dist/client.js"}],"script.js":[function(require,module,exports) {
"use strict";

var _web = _interopRequireDefault(require("@vapi-ai/web"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Import the Vapi class from the package

// Create an instance of Vapi
var vapi = new _web.default("7388cbf1-3f35-45c5-abe6-f42a0abb12a9");

// Set up the microphone button click event
document.getElementById('microphone-btn').addEventListener('click', function () {
  // Start the VAPI session with the persistent assistant's ID
  console.log('Microphone button clicked'); // Test log
  vapi.start("9b225f0f-ad17-4977-b59a-cf341aba48fa"); // 78a85399-9fcb-4dd3-8007-633a7f26da6d Cargo Trans

  // You can add event listeners if needed
  vapi.on('audioStart', function () {
    return console.log('Audio recording started');
  });
  vapi.on('audioEnd', function () {
    return console.log('Audio recording ended');
  });
  vapi.on('response', function (response) {
    return console.log('Assistant response:', response);
  });
});
},{"@vapi-ai/web":"node_modules/@vapi-ai/web/dist/vapi.js"}],"C:/Users/mussi/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57581" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["C:/Users/mussi/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map