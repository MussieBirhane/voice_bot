// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"86oZd":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6rimH":[function(require,module,exports) {
// Import the Vapi class from the package
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _web = require("@vapi-ai/web");
var _webDefault = parcelHelpers.interopDefault(_web);
// Create an instance of Vapi
const vapi = new (0, _webDefault.default)("7388cbf1-3f35-45c5-abe6-f42a0abb12a9");
// Set up the microphone button click event
document.getElementById("microphone-btn").addEventListener("click", ()=>{
    // Start the VAPI session with the persistent assistant's ID
    console.log("Microphone button clicked"); // Test log
    vapi.start("78a85399-9fcb-4dd3-8007-633a7f26da6d"); // 78a85399-9fcb-4dd3-8007-633a7f26da6d Cargo Trans
    // You can add event listeners if needed
    vapi.on("audioStart", ()=>console.log("Audio recording started"));
    vapi.on("audioEnd", ()=>console.log("Audio recording ended"));
    vapi.on("response", (response)=>console.log("Assistant response:", response));
});

},{"@vapi-ai/web":"9YU7O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9YU7O":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const daily_js_1 = __importDefault(require("6c8cbaa13362be6f"));
const events_1 = __importDefault(require("5bcdce9f06b95e90"));
const client_1 = require("195ecf92d7c09a11");
function destroyAudioPlayer(participantId) {
    const player = document.querySelector(`audio[data-participant-id="${participantId}"]`);
    player?.remove();
}
async function startPlayer(player, track) {
    player.muted = false;
    player.autoplay = true;
    if (track != null) {
        player.srcObject = new MediaStream([
            track
        ]);
        await player.play();
    }
}
async function buildAudioPlayer(track, participantId) {
    const player = document.createElement("audio");
    player.dataset.participantId = participantId;
    document.body.appendChild(player);
    await startPlayer(player, track);
    return player;
}
function subscribeToTracks(e, call) {
    if (e.participant.local) return;
    call.updateParticipant(e.participant.session_id, {
        setSubscribedTracks: {
            audio: true,
            video: false
        }
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
    constructor(apiToken, apiBaseUrl){
        super();
        client_1.client.baseUrl = apiBaseUrl ?? "https://api.vapi.ai";
        client_1.client.setSecurityData(apiToken);
    }
    cleanup() {
        this.started = false;
        this.call?.destroy();
        this.call = null;
        this.speakingTimeout = null;
    }
    async start(assistant, assistantOverrides) {
        if (this.started) return null;
        this.started = true;
        try {
            const webCall = (await client_1.client.call.callControllerCreateWebCall({
                assistant: typeof assistant === "string" ? undefined : assistant,
                assistantId: typeof assistant === "string" ? assistant : undefined,
                assistantOverrides
            })).data;
            if (this.call) this.cleanup();
            this.call = daily_js_1.default.createCallObject({
                audioSource: true,
                videoSource: false
            });
            this.call.iframe()?.style.setProperty("display", "none");
            this.call.on("left-meeting", ()=>{
                this.emit("call-end");
                this.cleanup();
            });
            this.call.on("participant-left", (e)=>{
                if (!e) return;
                destroyAudioPlayer(e.participant.session_id);
            });
            this.call.on("error", (error)=>{
                this.emit("error", error);
            });
            this.call.on("camera-error", (error)=>{
                this.emit("error", error);
            });
            this.call.on("track-started", async (e)=>{
                if (!e || !e.participant) return;
                if (e.participant?.local) return;
                if (e.track.kind !== "audio") return;
                await buildAudioPlayer(e.track, e.participant.session_id);
                if (e?.participant?.user_name !== "Vapi Speaker") return;
                this.call?.sendAppMessage("playable");
            });
            this.call.on("participant-joined", (e)=>{
                if (!e || !this.call) return;
                subscribeToTracks(e, this.call);
            });
            await this.call.join({
                url: webCall.webCallUrl,
                subscribeToTracksAutomatically: false
            });
            this.call.startRemoteParticipantsAudioLevelObserver(100);
            this.call.on("remote-participants-audio-level", (e)=>{
                if (e) this.handleRemoteParticipantsAudioLevel(e);
            });
            this.call.on("app-message", (e)=>this.onAppMessage(e));
            this.call.updateInputSettings({
                audio: {
                    processor: {
                        type: "noise-cancellation"
                    }
                }
            });
            return webCall;
        } catch (e) {
            console.error(e);
            this.emit("error", e);
            this.cleanup();
            return null;
        }
    }
    onAppMessage(e) {
        if (!e) return;
        try {
            if (e.data === "listening") return this.emit("call-start");
            else try {
                const parsedMessage = JSON.parse(e.data);
                this.emit("message", parsedMessage);
            } catch (parseError) {
                console.log("Error parsing message data: ", parseError);
            }
        } catch (e) {
            console.error(e);
        }
    }
    handleRemoteParticipantsAudioLevel(e) {
        const speechLevel = Object.values(e.participantsAudioLevel).reduce((a, b)=>a + b, 0);
        this.emit("volume-level", Math.min(1, speechLevel / 0.15));
        const isSpeaking = speechLevel > 0.01;
        if (!isSpeaking) return;
        if (this.speakingTimeout) {
            clearTimeout(this.speakingTimeout);
            this.speakingTimeout = null;
        } else this.emit("speech-start");
        this.speakingTimeout = setTimeout(()=>{
            this.emit("speech-end");
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
            if (!this.call) throw new Error("Call object is not available.");
            this.call.setLocalAudio(!mute);
        } catch (error) {
            throw error;
        }
    }
    isMuted() {
        try {
            if (!this.call) return false;
            return this.call.localAudio() === false;
        } catch (error) {
            throw error;
        }
    }
    say(message, endCallAfterSpoken) {
        this.send({
            type: "say",
            message,
            endCallAfterSpoken
        });
    }
}
exports.default = Vapi;

},{"6c8cbaa13362be6f":"9YAhC","5bcdce9f06b95e90":"1VQLm","195ecf92d7c09a11":"pbG0X"}],"9YAhC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DAILY_ACCESS_LEVEL_FULL", ()=>Dr);
parcelHelpers.export(exports, "DAILY_ACCESS_LEVEL_LOBBY", ()=>Nr);
parcelHelpers.export(exports, "DAILY_ACCESS_LEVEL_NONE", ()=>Ir);
parcelHelpers.export(exports, "DAILY_ACCESS_UNKNOWN", ()=>Lr);
parcelHelpers.export(exports, "DAILY_CAMERA_ERROR_CAM_AND_MIC_IN_USE", ()=>Kr);
parcelHelpers.export(exports, "DAILY_CAMERA_ERROR_CAM_IN_USE", ()=>Hr);
parcelHelpers.export(exports, "DAILY_CAMERA_ERROR_CONSTRAINTS", ()=>ti);
parcelHelpers.export(exports, "DAILY_CAMERA_ERROR_MIC_IN_USE", ()=>Qr);
parcelHelpers.export(exports, "DAILY_CAMERA_ERROR_NOT_FOUND", ()=>ei);
parcelHelpers.export(exports, "DAILY_CAMERA_ERROR_PERMISSIONS", ()=>Xr);
parcelHelpers.export(exports, "DAILY_CAMERA_ERROR_UNDEF_MEDIADEVICES", ()=>Zr);
parcelHelpers.export(exports, "DAILY_CAMERA_ERROR_UNKNOWN", ()=>ni);
parcelHelpers.export(exports, "DAILY_EVENT_ACCESS_STATE_UPDATED", ()=>_i);
parcelHelpers.export(exports, "DAILY_EVENT_ACTIVE_SPEAKER_CHANGE", ()=>Yi);
parcelHelpers.export(exports, "DAILY_EVENT_ACTIVE_SPEAKER_MODE_CHANGE", ()=>Ji);
parcelHelpers.export(exports, "DAILY_EVENT_APP_MSG", ()=>Ri);
parcelHelpers.export(exports, "DAILY_EVENT_CAMERA_ERROR", ()=>ui);
parcelHelpers.export(exports, "DAILY_EVENT_CPU_LOAD_CHANGE", ()=>Hi);
parcelHelpers.export(exports, "DAILY_EVENT_ERROR", ()=>ao);
parcelHelpers.export(exports, "DAILY_EVENT_EXIT_FULLSCREEN", ()=>Ki);
parcelHelpers.export(exports, "DAILY_EVENT_FULLSCREEN", ()=>Qi);
parcelHelpers.export(exports, "DAILY_EVENT_IFRAME_LAUNCH_CONFIG", ()=>ii);
parcelHelpers.export(exports, "DAILY_EVENT_IFRAME_READY_FOR_LAUNCH_CONFIG", ()=>ri);
parcelHelpers.export(exports, "DAILY_EVENT_INPUT_SETTINGS_UPDATED", ()=>io);
parcelHelpers.export(exports, "DAILY_EVENT_JOINED_MEETING", ()=>hi);
parcelHelpers.export(exports, "DAILY_EVENT_JOINING_MEETING", ()=>di);
parcelHelpers.export(exports, "DAILY_EVENT_LANG_UPDATED", ()=>no);
parcelHelpers.export(exports, "DAILY_EVENT_LEFT_MEETING", ()=>pi);
parcelHelpers.export(exports, "DAILY_EVENT_LIVE_STREAMING_ERROR", ()=>to);
parcelHelpers.export(exports, "DAILY_EVENT_LIVE_STREAMING_STARTED", ()=>Xi);
parcelHelpers.export(exports, "DAILY_EVENT_LIVE_STREAMING_STOPPED", ()=>eo);
parcelHelpers.export(exports, "DAILY_EVENT_LIVE_STREAMING_UPDATED", ()=>Zi);
parcelHelpers.export(exports, "DAILY_EVENT_LOADED", ()=>ci);
parcelHelpers.export(exports, "DAILY_EVENT_LOADING", ()=>ai);
parcelHelpers.export(exports, "DAILY_EVENT_LOAD_ATTEMPT_FAILED", ()=>si);
parcelHelpers.export(exports, "DAILY_EVENT_LOCAL_SCREEN_SHARE_CANCELED", ()=>qi);
parcelHelpers.export(exports, "DAILY_EVENT_LOCAL_SCREEN_SHARE_STARTED", ()=>$i);
parcelHelpers.export(exports, "DAILY_EVENT_LOCAL_SCREEN_SHARE_STOPPED", ()=>Gi);
parcelHelpers.export(exports, "DAILY_EVENT_MEETING_SESSION_DATA_ERROR", ()=>Si);
parcelHelpers.export(exports, "DAILY_EVENT_MEETING_SESSION_STATE_UPDATED", ()=>wi);
parcelHelpers.export(exports, "DAILY_EVENT_MEETING_SESSION_SUMMARY_UPDATED", ()=>bi);
parcelHelpers.export(exports, "DAILY_EVENT_NETWORK_CONNECTION", ()=>zi);
parcelHelpers.export(exports, "DAILY_EVENT_NETWORK_QUALITY_CHANGE", ()=>Wi);
parcelHelpers.export(exports, "DAILY_EVENT_NONFATAL_ERROR", ()=>oo);
parcelHelpers.export(exports, "DAILY_EVENT_PARTICIPANT_COUNTS_UPDATED", ()=>yi);
parcelHelpers.export(exports, "DAILY_EVENT_PARTICIPANT_JOINED", ()=>gi);
parcelHelpers.export(exports, "DAILY_EVENT_PARTICIPANT_LEFT", ()=>vi);
parcelHelpers.export(exports, "DAILY_EVENT_PARTICIPANT_UPDATED", ()=>mi);
parcelHelpers.export(exports, "DAILY_EVENT_RECEIVE_SETTINGS_UPDATED", ()=>ro);
parcelHelpers.export(exports, "DAILY_EVENT_RECORDING_DATA", ()=>Ii);
parcelHelpers.export(exports, "DAILY_EVENT_RECORDING_ERROR", ()=>Di);
parcelHelpers.export(exports, "DAILY_EVENT_RECORDING_STARTED", ()=>Ai);
parcelHelpers.export(exports, "DAILY_EVENT_RECORDING_STATS", ()=>Li);
parcelHelpers.export(exports, "DAILY_EVENT_RECORDING_STOPPED", ()=>ji);
parcelHelpers.export(exports, "DAILY_EVENT_RECORDING_UPLOAD_COMPLETED", ()=>Ni);
parcelHelpers.export(exports, "DAILY_EVENT_REMOTE_MEDIA_PLAYER_STARTED", ()=>Fi);
parcelHelpers.export(exports, "DAILY_EVENT_REMOTE_MEDIA_PLAYER_STOPPED", ()=>Vi);
parcelHelpers.export(exports, "DAILY_EVENT_REMOTE_MEDIA_PLAYER_UPDATED", ()=>Ui);
parcelHelpers.export(exports, "DAILY_EVENT_STARTED_CAMERA", ()=>li);
parcelHelpers.export(exports, "DAILY_EVENT_THEME_UPDATED", ()=>oi);
parcelHelpers.export(exports, "DAILY_EVENT_TRACK_STARTED", ()=>Ti);
parcelHelpers.export(exports, "DAILY_EVENT_TRACK_STOPPED", ()=>Ci);
parcelHelpers.export(exports, "DAILY_EVENT_TRANSCRIPTION_ERROR", ()=>xi);
parcelHelpers.export(exports, "DAILY_EVENT_TRANSCRIPTION_MSG", ()=>Bi);
parcelHelpers.export(exports, "DAILY_EVENT_TRANSCRIPTION_STARTED", ()=>Oi);
parcelHelpers.export(exports, "DAILY_EVENT_TRANSCRIPTION_STOPPED", ()=>Pi);
parcelHelpers.export(exports, "DAILY_EVENT_WAITING_PARTICIPANT_ADDED", ()=>ki);
parcelHelpers.export(exports, "DAILY_EVENT_WAITING_PARTICIPANT_REMOVED", ()=>Mi);
parcelHelpers.export(exports, "DAILY_EVENT_WAITING_PARTICIPANT_UPDATED", ()=>Ei);
parcelHelpers.export(exports, "DAILY_FATAL_ERROR_CONNECTION", ()=>zr);
parcelHelpers.export(exports, "DAILY_FATAL_ERROR_EJECTED", ()=>Fr);
parcelHelpers.export(exports, "DAILY_FATAL_ERROR_EOL", ()=>Jr);
parcelHelpers.export(exports, "DAILY_FATAL_ERROR_EXP_ROOM", ()=>$r);
parcelHelpers.export(exports, "DAILY_FATAL_ERROR_EXP_TOKEN", ()=>Gr);
parcelHelpers.export(exports, "DAILY_FATAL_ERROR_MEETING_FULL", ()=>Yr);
parcelHelpers.export(exports, "DAILY_FATAL_ERROR_NBF_ROOM", ()=>Ur);
parcelHelpers.export(exports, "DAILY_FATAL_ERROR_NBF_TOKEN", ()=>Vr);
parcelHelpers.export(exports, "DAILY_FATAL_ERROR_NOT_ALLOWED", ()=>Wr);
parcelHelpers.export(exports, "DAILY_FATAL_ERROR_NO_ROOM", ()=>qr);
parcelHelpers.export(exports, "DAILY_RECEIVE_SETTINGS_ALL_PARTICIPANTS_KEY", ()=>Br);
parcelHelpers.export(exports, "DAILY_RECEIVE_SETTINGS_BASE_KEY", ()=>Rr);
parcelHelpers.export(exports, "DAILY_STATE_ERROR", ()=>Tr);
parcelHelpers.export(exports, "DAILY_STATE_JOINED", ()=>Er);
parcelHelpers.export(exports, "DAILY_STATE_JOINING", ()=>kr);
parcelHelpers.export(exports, "DAILY_STATE_LEFT", ()=>Mr);
parcelHelpers.export(exports, "DAILY_STATE_NEW", ()=>br);
parcelHelpers.export(exports, "DAILY_TRACK_STATE_BLOCKED", ()=>Cr);
parcelHelpers.export(exports, "DAILY_TRACK_STATE_INTERRUPTED", ()=>Ar);
parcelHelpers.export(exports, "DAILY_TRACK_STATE_LOADING", ()=>xr);
parcelHelpers.export(exports, "DAILY_TRACK_STATE_OFF", ()=>Or);
parcelHelpers.export(exports, "DAILY_TRACK_STATE_PLAYABLE", ()=>jr);
parcelHelpers.export(exports, "DAILY_TRACK_STATE_SENDABLE", ()=>Pr);
parcelHelpers.export(exports, "default", ()=>Ka);
var global = arguments[3];
var process = require("81db1979691107e");
function e1(e1, t) {
    if (null == e1) return {};
    var n, r, i = function(e1, t) {
        if (null == e1) return {};
        var n, r, i = {}, o = Object.keys(e1);
        for(r = 0; r < o.length; r++)n = o[r], t.indexOf(n) >= 0 || (i[n] = e1[n]);
        return i;
    }(e1, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e1);
        for(r = 0; r < o.length; r++)n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e1, n) && (i[n] = e1[n]);
    }
    return i;
}
function t(e1, t, n, r, i, o, a) {
    try {
        var s = e1[o](a), c = s.value;
    } catch (e1) {
        return void n(e1);
    }
    s.done ? t(c) : Promise.resolve(c).then(r, i);
}
function n(e1) {
    return function() {
        var n = this, r = arguments;
        return new Promise(function(i, o) {
            var a = e1.apply(n, r);
            function s(e1) {
                t(a, i, o, s, c, "next", e1);
            }
            function c(e1) {
                t(a, i, o, s, c, "throw", e1);
            }
            s(void 0);
        });
    };
}
function r(e1, t) {
    if (!(e1 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function i(e1) {
    return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e1) {
        return typeof e1;
    } : function(e1) {
        return e1 && "function" == typeof Symbol && e1.constructor === Symbol && e1 !== Symbol.prototype ? "symbol" : typeof e1;
    }, i(e1);
}
function o(e1) {
    var t = function(e1, t) {
        if ("object" !== i(e1) || null === e1) return e1;
        var n = e1[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e1, t || "default");
            if ("object" !== i(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e1);
    }(e1, "string");
    return "symbol" === i(t) ? t : String(t);
}
function a(e1, t) {
    for(var n = 0; n < t.length; n++){
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e1, o(r.key), r);
    }
}
function s(e1, t, n) {
    return t && a(e1.prototype, t), n && a(e1, n), Object.defineProperty(e1, "prototype", {
        writable: !1
    }), e1;
}
function c(e1) {
    if (void 0 === e1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e1;
}
function l(e1, t) {
    return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e1, t) {
        return e1.__proto__ = t, e1;
    }, l(e1, t);
}
function u(e1, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e1.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e1,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e1, "prototype", {
        writable: !1
    }), t && l(e1, t);
}
function d(e1, t) {
    if (t && ("object" === i(t) || "function" == typeof t)) return t;
    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
    return c(e1);
}
function h(e1) {
    return h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e1) {
        return e1.__proto__ || Object.getPrototypeOf(e1);
    }, h(e1);
}
function p(e1, t, n) {
    return (t = o(t)) in e1 ? Object.defineProperty(e1, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e1[t] = n, e1;
}
function f(e1, t) {
    (null == t || t > e1.length) && (t = e1.length);
    for(var n = 0, r = new Array(t); n < t; n++)r[n] = e1[n];
    return r;
}
function g(e1, t) {
    return function(e1) {
        if (Array.isArray(e1)) return e1;
    }(e1) || function(e1, t) {
        var n = null == e1 ? null : "undefined" != typeof Symbol && e1[Symbol.iterator] || e1["@@iterator"];
        if (null != n) {
            var r, i, o, a, s = [], c = !0, l = !1;
            try {
                if (o = (n = n.call(e1)).next, 0 === t) {
                    if (Object(n) !== n) return;
                    c = !1;
                } else for(; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
            } catch (e1) {
                l = !0, i = e1;
            } finally{
                try {
                    if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return;
                } finally{
                    if (l) throw i;
                }
            }
            return s;
        }
    }(e1, t) || function(e1, t) {
        if (e1) {
            if ("string" == typeof e1) return f(e1, t);
            var n = Object.prototype.toString.call(e1).slice(8, -1);
            return "Object" === n && e1.constructor && (n = e1.constructor.name), "Map" === n || "Set" === n ? Array.from(e1) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e1, t) : void 0;
        }
    }(e1, t) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}
var m, v = {}, y = {
    get exports () {
        return v;
    },
    set exports (e){
        v = e;
    }
}, _ = "object" == typeof Reflect ? Reflect : null, b = _ && "function" == typeof _.apply ? _.apply : function(e1, t, n) {
    return Function.prototype.apply.call(e1, t, n);
};
m = _ && "function" == typeof _.ownKeys ? _.ownKeys : Object.getOwnPropertySymbols ? function(e1) {
    return Object.getOwnPropertyNames(e1).concat(Object.getOwnPropertySymbols(e1));
} : function(e1) {
    return Object.getOwnPropertyNames(e1);
};
var w = Number.isNaN || function(e1) {
    return e1 != e1;
};
function S() {
    S.init.call(this);
}
y.exports = S, v.once = function(e1, t) {
    return new Promise(function(n, r) {
        function i(n) {
            e1.removeListener(t, o), r(n);
        }
        function o() {
            "function" == typeof e1.removeListener && e1.removeListener("error", i), n([].slice.call(arguments));
        }
        j(e1, t, o, {
            once: !0
        }), "error" !== t && function(e1, t, n) {
            "function" == typeof e1.on && j(e1, "error", t, n);
        }(e1, i, {
            once: !0
        });
    });
}, S.EventEmitter = S, S.prototype._events = void 0, S.prototype._eventsCount = 0, S.prototype._maxListeners = void 0;
var k = 10;
function E(e1) {
    if ("function" != typeof e1) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e1);
}
function M(e1) {
    return void 0 === e1._maxListeners ? S.defaultMaxListeners : e1._maxListeners;
}
function T(e1, t, n, r) {
    var i, o, a, s;
    if (E(n), void 0 === (o = e1._events) ? (o = e1._events = Object.create(null), e1._eventsCount = 0) : (void 0 !== o.newListener && (e1.emit("newListener", t, n.listener ? n.listener : n), o = e1._events), a = o[t]), void 0 === a) a = o[t] = n, ++e1._eventsCount;
    else if ("function" == typeof a ? a = o[t] = r ? [
        n,
        a
    ] : [
        a,
        n
    ] : r ? a.unshift(n) : a.push(n), (i = M(e1)) > 0 && a.length > i && !a.warned) {
        a.warned = !0;
        var c = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        c.name = "MaxListenersExceededWarning", c.emitter = e1, c.type = t, c.count = a.length, s = c, console && console.warn && console.warn(s);
    }
    return e1;
}
function C() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function O(e1, t, n) {
    var r = {
        fired: !1,
        wrapFn: void 0,
        target: e1,
        type: t,
        listener: n
    }, i = C.bind(r);
    return i.listener = n, r.wrapFn = i, i;
}
function P(e1, t, n) {
    var r = e1._events;
    if (void 0 === r) return [];
    var i = r[t];
    return void 0 === i ? [] : "function" == typeof i ? n ? [
        i.listener || i
    ] : [
        i
    ] : n ? function(e1) {
        for(var t = new Array(e1.length), n = 0; n < t.length; ++n)t[n] = e1[n].listener || e1[n];
        return t;
    }(i) : A(i, i.length);
}
function x(e1) {
    var t = this._events;
    if (void 0 !== t) {
        var n = t[e1];
        if ("function" == typeof n) return 1;
        if (void 0 !== n) return n.length;
    }
    return 0;
}
function A(e1, t) {
    for(var n = new Array(t), r = 0; r < t; ++r)n[r] = e1[r];
    return n;
}
function j(e1, t, n, r) {
    if ("function" == typeof e1.on) r.once ? e1.once(t, n) : e1.on(t, n);
    else {
        if ("function" != typeof e1.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e1);
        e1.addEventListener(t, function i(o) {
            r.once && e1.removeEventListener(t, i), n(o);
        });
    }
}
Object.defineProperty(S, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return k;
    },
    set: function(e1) {
        if ("number" != typeof e1 || e1 < 0 || w(e1)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e1 + ".");
        k = e1;
    }
}), S.init = function() {
    void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, S.prototype.setMaxListeners = function(e1) {
    if ("number" != typeof e1 || e1 < 0 || w(e1)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e1 + ".");
    return this._maxListeners = e1, this;
}, S.prototype.getMaxListeners = function() {
    return M(this);
}, S.prototype.emit = function(e1) {
    for(var t = [], n = 1; n < arguments.length; n++)t.push(arguments[n]);
    var r = "error" === e1, i = this._events;
    if (void 0 !== i) r = r && void 0 === i.error;
    else if (!r) return !1;
    if (r) {
        var o;
        if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
        var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
        throw a.context = o, a;
    }
    var s = i[e1];
    if (void 0 === s) return !1;
    if ("function" == typeof s) b(s, this, t);
    else {
        var c = s.length, l = A(s, c);
        for(n = 0; n < c; ++n)b(l[n], this, t);
    }
    return !0;
}, S.prototype.addListener = function(e1, t) {
    return T(this, e1, t, !1);
}, S.prototype.on = S.prototype.addListener, S.prototype.prependListener = function(e1, t) {
    return T(this, e1, t, !0);
}, S.prototype.once = function(e1, t) {
    return E(t), this.on(e1, O(this, e1, t)), this;
}, S.prototype.prependOnceListener = function(e1, t) {
    return E(t), this.prependListener(e1, O(this, e1, t)), this;
}, S.prototype.removeListener = function(e1, t) {
    var n, r, i, o, a;
    if (E(t), void 0 === (r = this._events)) return this;
    if (void 0 === (n = r[e1])) return this;
    if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e1], r.removeListener && this.emit("removeListener", e1, n.listener || t));
    else if ("function" != typeof n) {
        for(i = -1, o = n.length - 1; o >= 0; o--)if (n[o] === t || n[o].listener === t) {
            a = n[o].listener, i = o;
            break;
        }
        if (i < 0) return this;
        0 === i ? n.shift() : function(e1, t) {
            for(; t + 1 < e1.length; t++)e1[t] = e1[t + 1];
            e1.pop();
        }(n, i), 1 === n.length && (r[e1] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e1, a || t);
    }
    return this;
}, S.prototype.off = S.prototype.removeListener, S.prototype.removeAllListeners = function(e1) {
    var t, n, r;
    if (void 0 === (n = this._events)) return this;
    if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e1] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e1]), this;
    if (0 === arguments.length) {
        var i, o = Object.keys(n);
        for(r = 0; r < o.length; ++r)"removeListener" !== (i = o[r]) && this.removeAllListeners(i);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
    }
    if ("function" == typeof (t = n[e1])) this.removeListener(e1, t);
    else if (void 0 !== t) for(r = t.length - 1; r >= 0; r--)this.removeListener(e1, t[r]);
    return this;
}, S.prototype.listeners = function(e1) {
    return P(this, e1, !0);
}, S.prototype.rawListeners = function(e1) {
    return P(this, e1, !1);
}, S.listenerCount = function(e1, t) {
    return "function" == typeof e1.listenerCount ? e1.listenerCount(t) : x.call(e1, t);
}, S.prototype.listenerCount = x, S.prototype.eventNames = function() {
    return this._eventsCount > 0 ? m(this._events) : [];
};
var L = Object.prototype.hasOwnProperty;
function D(e1, t, n) {
    for (n of e1.keys())if (N(n, t)) return n;
}
function N(e1, t) {
    var n, r, i;
    if (e1 === t) return !0;
    if (e1 && t && (n = e1.constructor) === t.constructor) {
        if (n === Date) return e1.getTime() === t.getTime();
        if (n === RegExp) return e1.toString() === t.toString();
        if (n === Array) {
            if ((r = e1.length) === t.length) for(; r-- && N(e1[r], t[r]););
            return -1 === r;
        }
        if (n === Set) {
            if (e1.size !== t.size) return !1;
            for (r of e1){
                if ((i = r) && "object" == typeof i && !(i = D(t, i))) return !1;
                if (!t.has(i)) return !1;
            }
            return !0;
        }
        if (n === Map) {
            if (e1.size !== t.size) return !1;
            for (r of e1){
                if ((i = r[0]) && "object" == typeof i && !(i = D(t, i))) return !1;
                if (!N(r[1], t.get(i))) return !1;
            }
            return !0;
        }
        if (n === ArrayBuffer) e1 = new Uint8Array(e1), t = new Uint8Array(t);
        else if (n === DataView) {
            if ((r = e1.byteLength) === t.byteLength) for(; r-- && e1.getInt8(r) === t.getInt8(r););
            return -1 === r;
        }
        if (ArrayBuffer.isView(e1)) {
            if ((r = e1.byteLength) === t.byteLength) for(; r-- && e1[r] === t[r];);
            return -1 === r;
        }
        if (!n || "object" == typeof e1) {
            for(n in r = 0, e1){
                if (L.call(e1, n) && ++r && !L.call(t, n)) return !1;
                if (!(n in t) || !N(e1[n], t[n])) return !1;
            }
            return Object.keys(t).length === r;
        }
    }
    return e1 != e1 && t != t;
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
}, R = {
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
}, B = {
    tablet: "tablet",
    mobile: "mobile",
    desktop: "desktop",
    tv: "tv"
}, F = {
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
}, U = {
    EdgeHTML: "EdgeHTML",
    Blink: "Blink",
    Trident: "Trident",
    Presto: "Presto",
    Gecko: "Gecko",
    WebKit: "WebKit"
};
class V {
    static getFirstMatch(e1, t) {
        const n = t.match(e1);
        return n && n.length > 0 && n[1] || "";
    }
    static getSecondMatch(e1, t) {
        const n = t.match(e1);
        return n && n.length > 1 && n[2] || "";
    }
    static matchAndReturnConst(e1, t, n) {
        if (e1.test(t)) return n;
    }
    static getWindowsVersionName(e1) {
        switch(e1){
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
    static getMacOSVersionName(e1) {
        const t = e1.split(".").splice(0, 2).map((e1)=>parseInt(e1, 10) || 0);
        if (t.push(0), 10 === t[0]) switch(t[1]){
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
    static getAndroidVersionName(e1) {
        const t = e1.split(".").splice(0, 2).map((e1)=>parseInt(e1, 10) || 0);
        if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0;
    }
    static getVersionPrecision(e1) {
        return e1.split(".").length;
    }
    static compareVersions(e1, t, n = !1) {
        const r = V.getVersionPrecision(e1), i = V.getVersionPrecision(t);
        let o = Math.max(r, i), a = 0;
        const s = V.map([
            e1,
            t
        ], (e1)=>{
            const t = o - V.getVersionPrecision(e1), n = e1 + new Array(t + 1).join(".0");
            return V.map(n.split("."), (e1)=>new Array(20 - e1.length).join("0") + e1).reverse();
        });
        for(n && (a = o - Math.min(r, i)), o -= 1; o >= a;){
            if (s[0][o] > s[1][o]) return 1;
            if (s[0][o] === s[1][o]) {
                if (o === a) return 0;
                o -= 1;
            } else if (s[0][o] < s[1][o]) return -1;
        }
    }
    static map(e1, t) {
        const n = [];
        let r;
        if (Array.prototype.map) return Array.prototype.map.call(e1, t);
        for(r = 0; r < e1.length; r += 1)n.push(t(e1[r]));
        return n;
    }
    static find(e1, t) {
        let n, r;
        if (Array.prototype.find) return Array.prototype.find.call(e1, t);
        for(n = 0, r = e1.length; n < r; n += 1){
            const r = e1[n];
            if (t(r, n)) return r;
        }
    }
    static assign(e1, ...t) {
        const n = e1;
        let r, i;
        if (Object.assign) return Object.assign(e1, ...t);
        for(r = 0, i = t.length; r < i; r += 1){
            const e1 = t[r];
            if ("object" == typeof e1 && null !== e1) Object.keys(e1).forEach((t)=>{
                n[t] = e1[t];
            });
        }
        return e1;
    }
    static getBrowserAlias(e1) {
        return I[e1];
    }
    static getBrowserTypeByAlias(e1) {
        return R[e1] || "";
    }
}
const $ = /version\/(\d+(\.?_?\d+)+)/i, G = [
    {
        test: [
            /googlebot/i
        ],
        describe (e1) {
            const t = {
                name: "Googlebot"
            }, n = V.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e1) || V.getFirstMatch($, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /opera/i
        ],
        describe (e1) {
            const t = {
                name: "Opera"
            }, n = V.getFirstMatch($, e1) || V.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /opr\/|opios/i
        ],
        describe (e1) {
            const t = {
                name: "Opera"
            }, n = V.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e1) || V.getFirstMatch($, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /SamsungBrowser/i
        ],
        describe (e1) {
            const t = {
                name: "Samsung Internet for Android"
            }, n = V.getFirstMatch($, e1) || V.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /Whale/i
        ],
        describe (e1) {
            const t = {
                name: "NAVER Whale Browser"
            }, n = V.getFirstMatch($, e1) || V.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /MZBrowser/i
        ],
        describe (e1) {
            const t = {
                name: "MZ Browser"
            }, n = V.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e1) || V.getFirstMatch($, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /focus/i
        ],
        describe (e1) {
            const t = {
                name: "Focus"
            }, n = V.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e1) || V.getFirstMatch($, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /swing/i
        ],
        describe (e1) {
            const t = {
                name: "Swing"
            }, n = V.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e1) || V.getFirstMatch($, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /coast/i
        ],
        describe (e1) {
            const t = {
                name: "Opera Coast"
            }, n = V.getFirstMatch($, e1) || V.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /opt\/\d+(?:.?_?\d+)+/i
        ],
        describe (e1) {
            const t = {
                name: "Opera Touch"
            }, n = V.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e1) || V.getFirstMatch($, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /yabrowser/i
        ],
        describe (e1) {
            const t = {
                name: "Yandex Browser"
            }, n = V.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e1) || V.getFirstMatch($, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /ucbrowser/i
        ],
        describe (e1) {
            const t = {
                name: "UC Browser"
            }, n = V.getFirstMatch($, e1) || V.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /Maxthon|mxios/i
        ],
        describe (e1) {
            const t = {
                name: "Maxthon"
            }, n = V.getFirstMatch($, e1) || V.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /epiphany/i
        ],
        describe (e1) {
            const t = {
                name: "Epiphany"
            }, n = V.getFirstMatch($, e1) || V.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /puffin/i
        ],
        describe (e1) {
            const t = {
                name: "Puffin"
            }, n = V.getFirstMatch($, e1) || V.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /sleipnir/i
        ],
        describe (e1) {
            const t = {
                name: "Sleipnir"
            }, n = V.getFirstMatch($, e1) || V.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /k-meleon/i
        ],
        describe (e1) {
            const t = {
                name: "K-Meleon"
            }, n = V.getFirstMatch($, e1) || V.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /micromessenger/i
        ],
        describe (e1) {
            const t = {
                name: "WeChat"
            }, n = V.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e1) || V.getFirstMatch($, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /qqbrowser/i
        ],
        describe (e1) {
            const t = {
                name: /qqbrowserlite/i.test(e1) ? "QQ Browser Lite" : "QQ Browser"
            }, n = V.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e1) || V.getFirstMatch($, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /msie|trident/i
        ],
        describe (e1) {
            const t = {
                name: "Internet Explorer"
            }, n = V.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /\sedg\//i
        ],
        describe (e1) {
            const t = {
                name: "Microsoft Edge"
            }, n = V.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /edg([ea]|ios)/i
        ],
        describe (e1) {
            const t = {
                name: "Microsoft Edge"
            }, n = V.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /vivaldi/i
        ],
        describe (e1) {
            const t = {
                name: "Vivaldi"
            }, n = V.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /seamonkey/i
        ],
        describe (e1) {
            const t = {
                name: "SeaMonkey"
            }, n = V.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /sailfish/i
        ],
        describe (e1) {
            const t = {
                name: "Sailfish"
            }, n = V.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /silk/i
        ],
        describe (e1) {
            const t = {
                name: "Amazon Silk"
            }, n = V.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /phantom/i
        ],
        describe (e1) {
            const t = {
                name: "PhantomJS"
            }, n = V.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /slimerjs/i
        ],
        describe (e1) {
            const t = {
                name: "SlimerJS"
            }, n = V.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /blackberry|\bbb\d+/i,
            /rim\stablet/i
        ],
        describe (e1) {
            const t = {
                name: "BlackBerry"
            }, n = V.getFirstMatch($, e1) || V.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /(web|hpw)[o0]s/i
        ],
        describe (e1) {
            const t = {
                name: "WebOS Browser"
            }, n = V.getFirstMatch($, e1) || V.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /bada/i
        ],
        describe (e1) {
            const t = {
                name: "Bada"
            }, n = V.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /tizen/i
        ],
        describe (e1) {
            const t = {
                name: "Tizen"
            }, n = V.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e1) || V.getFirstMatch($, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /qupzilla/i
        ],
        describe (e1) {
            const t = {
                name: "QupZilla"
            }, n = V.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e1) || V.getFirstMatch($, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /firefox|iceweasel|fxios/i
        ],
        describe (e1) {
            const t = {
                name: "Firefox"
            }, n = V.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /electron/i
        ],
        describe (e1) {
            const t = {
                name: "Electron"
            }, n = V.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /MiuiBrowser/i
        ],
        describe (e1) {
            const t = {
                name: "Miui"
            }, n = V.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /chromium/i
        ],
        describe (e1) {
            const t = {
                name: "Chromium"
            }, n = V.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e1) || V.getFirstMatch($, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /chrome|crios|crmo/i
        ],
        describe (e1) {
            const t = {
                name: "Chrome"
            }, n = V.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /GSA/i
        ],
        describe (e1) {
            const t = {
                name: "Google Search"
            }, n = V.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test (e1) {
            const t = !e1.test(/like android/i), n = e1.test(/android/i);
            return t && n;
        },
        describe (e1) {
            const t = {
                name: "Android Browser"
            }, n = V.getFirstMatch($, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /playstation 4/i
        ],
        describe (e1) {
            const t = {
                name: "PlayStation 4"
            }, n = V.getFirstMatch($, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /safari|applewebkit/i
        ],
        describe (e1) {
            const t = {
                name: "Safari"
            }, n = V.getFirstMatch($, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /.*/i
        ],
        describe (e1) {
            const t = -1 !== e1.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
            return {
                name: V.getFirstMatch(t, e1),
                version: V.getSecondMatch(t, e1)
            };
        }
    }
];
var q = [
    {
        test: [
            /Roku\/DVP/
        ],
        describe (e1) {
            const t = V.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e1);
            return {
                name: F.Roku,
                version: t
            };
        }
    },
    {
        test: [
            /windows phone/i
        ],
        describe (e1) {
            const t = V.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e1);
            return {
                name: F.WindowsPhone,
                version: t
            };
        }
    },
    {
        test: [
            /windows /i
        ],
        describe (e1) {
            const t = V.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e1), n = V.getWindowsVersionName(t);
            return {
                name: F.Windows,
                version: t,
                versionName: n
            };
        }
    },
    {
        test: [
            /Macintosh(.*?) FxiOS(.*?)\//
        ],
        describe (e1) {
            const t = {
                name: F.iOS
            }, n = V.getSecondMatch(/(Version\/)(\d[\d.]+)/, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /macintosh/i
        ],
        describe (e1) {
            const t = V.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e1).replace(/[_\s]/g, "."), n = V.getMacOSVersionName(t), r = {
                name: F.MacOS,
                version: t
            };
            return n && (r.versionName = n), r;
        }
    },
    {
        test: [
            /(ipod|iphone|ipad)/i
        ],
        describe (e1) {
            const t = V.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e1).replace(/[_\s]/g, ".");
            return {
                name: F.iOS,
                version: t
            };
        }
    },
    {
        test (e1) {
            const t = !e1.test(/like android/i), n = e1.test(/android/i);
            return t && n;
        },
        describe (e1) {
            const t = V.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e1), n = V.getAndroidVersionName(t), r = {
                name: F.Android,
                version: t
            };
            return n && (r.versionName = n), r;
        }
    },
    {
        test: [
            /(web|hpw)[o0]s/i
        ],
        describe (e1) {
            const t = V.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e1), n = {
                name: F.WebOS
            };
            return t && t.length && (n.version = t), n;
        }
    },
    {
        test: [
            /blackberry|\bbb\d+/i,
            /rim\stablet/i
        ],
        describe (e1) {
            const t = V.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e1) || V.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e1) || V.getFirstMatch(/\bbb(\d+)/i, e1);
            return {
                name: F.BlackBerry,
                version: t
            };
        }
    },
    {
        test: [
            /bada/i
        ],
        describe (e1) {
            const t = V.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e1);
            return {
                name: F.Bada,
                version: t
            };
        }
    },
    {
        test: [
            /tizen/i
        ],
        describe (e1) {
            const t = V.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e1);
            return {
                name: F.Tizen,
                version: t
            };
        }
    },
    {
        test: [
            /linux/i
        ],
        describe: ()=>({
                name: F.Linux
            })
    },
    {
        test: [
            /CrOS/
        ],
        describe: ()=>({
                name: F.ChromeOS
            })
    },
    {
        test: [
            /PlayStation 4/
        ],
        describe (e1) {
            const t = V.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e1);
            return {
                name: F.PlayStation4,
                version: t
            };
        }
    }
], Y = [
    {
        test: [
            /googlebot/i
        ],
        describe: ()=>({
                type: "bot",
                vendor: "Google"
            })
    },
    {
        test: [
            /huawei/i
        ],
        describe (e1) {
            const t = V.getFirstMatch(/(can-l01)/i, e1) && "Nova", n = {
                type: B.mobile,
                vendor: "Huawei"
            };
            return t && (n.model = t), n;
        }
    },
    {
        test: [
            /nexus\s*(?:7|8|9|10).*/i
        ],
        describe: ()=>({
                type: B.tablet,
                vendor: "Nexus"
            })
    },
    {
        test: [
            /ipad/i
        ],
        describe: ()=>({
                type: B.tablet,
                vendor: "Apple",
                model: "iPad"
            })
    },
    {
        test: [
            /Macintosh(.*?) FxiOS(.*?)\//
        ],
        describe: ()=>({
                type: B.tablet,
                vendor: "Apple",
                model: "iPad"
            })
    },
    {
        test: [
            /kftt build/i
        ],
        describe: ()=>({
                type: B.tablet,
                vendor: "Amazon",
                model: "Kindle Fire HD 7"
            })
    },
    {
        test: [
            /silk/i
        ],
        describe: ()=>({
                type: B.tablet,
                vendor: "Amazon"
            })
    },
    {
        test: [
            /tablet(?! pc)/i
        ],
        describe: ()=>({
                type: B.tablet
            })
    },
    {
        test (e1) {
            const t = e1.test(/ipod|iphone/i), n = e1.test(/like (ipod|iphone)/i);
            return t && !n;
        },
        describe (e1) {
            const t = V.getFirstMatch(/(ipod|iphone)/i, e1);
            return {
                type: B.mobile,
                vendor: "Apple",
                model: t
            };
        }
    },
    {
        test: [
            /nexus\s*[0-6].*/i,
            /galaxy nexus/i
        ],
        describe: ()=>({
                type: B.mobile,
                vendor: "Nexus"
            })
    },
    {
        test: [
            /[^-]mobi/i
        ],
        describe: ()=>({
                type: B.mobile
            })
    },
    {
        test: (e1)=>"blackberry" === e1.getBrowserName(!0),
        describe: ()=>({
                type: B.mobile,
                vendor: "BlackBerry"
            })
    },
    {
        test: (e1)=>"bada" === e1.getBrowserName(!0),
        describe: ()=>({
                type: B.mobile
            })
    },
    {
        test: (e1)=>"windows phone" === e1.getBrowserName(),
        describe: ()=>({
                type: B.mobile,
                vendor: "Microsoft"
            })
    },
    {
        test (e1) {
            const t = Number(String(e1.getOSVersion()).split(".")[0]);
            return "android" === e1.getOSName(!0) && t >= 3;
        },
        describe: ()=>({
                type: B.tablet
            })
    },
    {
        test: (e1)=>"android" === e1.getOSName(!0),
        describe: ()=>({
                type: B.mobile
            })
    },
    {
        test: (e1)=>"macos" === e1.getOSName(!0),
        describe: ()=>({
                type: B.desktop,
                vendor: "Apple"
            })
    },
    {
        test: (e1)=>"windows" === e1.getOSName(!0),
        describe: ()=>({
                type: B.desktop
            })
    },
    {
        test: (e1)=>"linux" === e1.getOSName(!0),
        describe: ()=>({
                type: B.desktop
            })
    },
    {
        test: (e1)=>"playstation 4" === e1.getOSName(!0),
        describe: ()=>({
                type: B.tv
            })
    },
    {
        test: (e1)=>"roku" === e1.getOSName(!0),
        describe: ()=>({
                type: B.tv
            })
    }
], J = [
    {
        test: (e1)=>"microsoft edge" === e1.getBrowserName(!0),
        describe (e1) {
            if (/\sedg\//i.test(e1)) return {
                name: U.Blink
            };
            const t = V.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e1);
            return {
                name: U.EdgeHTML,
                version: t
            };
        }
    },
    {
        test: [
            /trident/i
        ],
        describe (e1) {
            const t = {
                name: U.Trident
            }, n = V.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: (e1)=>e1.test(/presto/i),
        describe (e1) {
            const t = {
                name: U.Presto
            }, n = V.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test (e1) {
            const t = e1.test(/gecko/i), n = e1.test(/like gecko/i);
            return t && !n;
        },
        describe (e1) {
            const t = {
                name: U.Gecko
            }, n = V.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    },
    {
        test: [
            /(apple)?webkit\/537\.36/i
        ],
        describe: ()=>({
                name: U.Blink
            })
    },
    {
        test: [
            /(apple)?webkit/i
        ],
        describe (e1) {
            const t = {
                name: U.WebKit
            }, n = V.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e1);
            return n && (t.version = n), t;
        }
    }
];
class W {
    constructor(e1, t = !1){
        if (null == e1 || "" === e1) throw new Error("UserAgent parameter can't be empty");
        this._ua = e1, this.parsedResult = {}, !0 !== t && this.parse();
    }
    getUA() {
        return this._ua;
    }
    test(e1) {
        return e1.test(this._ua);
    }
    parseBrowser() {
        this.parsedResult.browser = {};
        const e1 = V.find(G, (e1)=>{
            if ("function" == typeof e1.test) return e1.test(this);
            if (e1.test instanceof Array) return e1.test.some((e1)=>this.test(e1));
            throw new Error("Browser's test function is not valid");
        });
        return e1 && (this.parsedResult.browser = e1.describe(this.getUA())), this.parsedResult.browser;
    }
    getBrowser() {
        return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
    }
    getBrowserName(e1) {
        return e1 ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
    }
    getBrowserVersion() {
        return this.getBrowser().version;
    }
    getOS() {
        return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
    }
    parseOS() {
        this.parsedResult.os = {};
        const e1 = V.find(q, (e1)=>{
            if ("function" == typeof e1.test) return e1.test(this);
            if (e1.test instanceof Array) return e1.test.some((e1)=>this.test(e1));
            throw new Error("Browser's test function is not valid");
        });
        return e1 && (this.parsedResult.os = e1.describe(this.getUA())), this.parsedResult.os;
    }
    getOSName(e1) {
        const { name: t } = this.getOS();
        return e1 ? String(t).toLowerCase() || "" : t || "";
    }
    getOSVersion() {
        return this.getOS().version;
    }
    getPlatform() {
        return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
    }
    getPlatformType(e1 = !1) {
        const { type: t } = this.getPlatform();
        return e1 ? String(t).toLowerCase() || "" : t || "";
    }
    parsePlatform() {
        this.parsedResult.platform = {};
        const e1 = V.find(Y, (e1)=>{
            if ("function" == typeof e1.test) return e1.test(this);
            if (e1.test instanceof Array) return e1.test.some((e1)=>this.test(e1));
            throw new Error("Browser's test function is not valid");
        });
        return e1 && (this.parsedResult.platform = e1.describe(this.getUA())), this.parsedResult.platform;
    }
    getEngine() {
        return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
    }
    getEngineName(e1) {
        return e1 ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
    }
    parseEngine() {
        this.parsedResult.engine = {};
        const e1 = V.find(J, (e1)=>{
            if ("function" == typeof e1.test) return e1.test(this);
            if (e1.test instanceof Array) return e1.test.some((e1)=>this.test(e1));
            throw new Error("Browser's test function is not valid");
        });
        return e1 && (this.parsedResult.engine = e1.describe(this.getUA())), this.parsedResult.engine;
    }
    parse() {
        return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
    }
    getResult() {
        return V.assign({}, this.parsedResult);
    }
    satisfies(e1) {
        const t = {};
        let n = 0;
        const r = {};
        let i = 0;
        if (Object.keys(e1).forEach((o)=>{
            const a = e1[o];
            "string" == typeof a ? (r[o] = a, i += 1) : "object" == typeof a && (t[o] = a, n += 1);
        }), n > 0) {
            const e1 = Object.keys(t), n = V.find(e1, (e1)=>this.isOS(e1));
            if (n) {
                const e1 = this.satisfies(t[n]);
                if (void 0 !== e1) return e1;
            }
            const r = V.find(e1, (e1)=>this.isPlatform(e1));
            if (r) {
                const e1 = this.satisfies(t[r]);
                if (void 0 !== e1) return e1;
            }
        }
        if (i > 0) {
            const e1 = Object.keys(r), t = V.find(e1, (e1)=>this.isBrowser(e1, !0));
            if (void 0 !== t) return this.compareVersion(r[t]);
        }
    }
    isBrowser(e1, t = !1) {
        const n = this.getBrowserName().toLowerCase();
        let r = e1.toLowerCase();
        const i = V.getBrowserTypeByAlias(r);
        return t && i && (r = i.toLowerCase()), r === n;
    }
    compareVersion(e1) {
        let t = [
            0
        ], n = e1, r = !1;
        const i = this.getBrowserVersion();
        if ("string" == typeof i) return ">" === e1[0] || "<" === e1[0] ? (n = e1.substr(1), "=" === e1[1] ? (r = !0, n = e1.substr(2)) : t = [], ">" === e1[0] ? t.push(1) : t.push(-1)) : "=" === e1[0] ? n = e1.substr(1) : "~" === e1[0] && (r = !0, n = e1.substr(1)), t.indexOf(V.compareVersions(i, n, r)) > -1;
    }
    isOS(e1) {
        return this.getOSName(!0) === String(e1).toLowerCase();
    }
    isPlatform(e1) {
        return this.getPlatformType(!0) === String(e1).toLowerCase();
    }
    isEngine(e1) {
        return this.getEngineName(!0) === String(e1).toLowerCase();
    }
    is(e1, t = !1) {
        return this.isBrowser(e1, t) || this.isOS(e1) || this.isPlatform(e1);
    }
    some(e1 = []) {
        return e1.some((e1)=>this.is(e1));
    }
}
/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */ class z {
    static getParser(e1, t = !1) {
        if ("string" != typeof e1) throw new Error("UserAgent should be a string");
        return new W(e1, t);
    }
    static parse(e1) {
        return new W(e1).getResult();
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
function K(e1) {
    return window._dailyConfig && window._dailyConfig.proxyUrl ? window._dailyConfig.proxyUrl + ("/" === window._dailyConfig.proxyUrl.slice(-1) ? "" : "/") + e1.substring(8) : e1;
}
function X() {
    return window._dailyConfig && window._dailyConfig.callObjectBundleUrlOverride ? window._dailyConfig.callObjectBundleUrlOverride : K("https://c.daily.co/call-machine/versioned/".concat("0.58.0", "/static/call-machine-object-bundle.js"));
}
function Z(e1) {
    try {
        new URL(e1);
    } catch (e1) {
        return !1;
    }
    return !0;
}
const ee = Object.prototype.toString;
function te(e1) {
    switch(ee.call(e1)){
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
            return !0;
        default:
            return ue(e1, Error);
    }
}
function ne(e1, t) {
    return ee.call(e1) === `[object ${t}]`;
}
function re(e1) {
    return ne(e1, "ErrorEvent");
}
function ie(e1) {
    return ne(e1, "DOMError");
}
function oe(e1) {
    return ne(e1, "String");
}
function ae(e1) {
    return null === e1 || "object" != typeof e1 && "function" != typeof e1;
}
function se(e1) {
    return ne(e1, "Object");
}
function ce(e1) {
    return "undefined" != typeof Event && ue(e1, Event);
}
function le(e1) {
    return Boolean(e1 && e1.then && "function" == typeof e1.then);
}
function ue(e1, t) {
    try {
        return e1 instanceof t;
    } catch (e1) {
        return !1;
    }
}
function de(e1, t = 0) {
    return "string" != typeof e1 || 0 === t || e1.length <= t ? e1 : `${e1.slice(0, t)}...`;
}
function he(e1, t) {
    if (!Array.isArray(e1)) return "";
    const n = [];
    for(let t = 0; t < e1.length; t++){
        const r = e1[t];
        try {
            n.push(String(r));
        } catch (e1) {
            n.push("[value cannot be serialized]");
        }
    }
    return n.join(t);
}
function pe(e1, t, n = !1) {
    return !!oe(e1) && (ne(t, "RegExp") ? t.test(e1) : !!oe(t) && (n ? e1 === t : e1.includes(t)));
}
function fe(e1, t = [], n = !1) {
    return t.some((t)=>pe(e1, t, n));
}
function ge(e1, t, n = 250, r, i, o, a) {
    if (!(o.exception && o.exception.values && a && ue(a.originalException, Error))) return;
    const s = o.exception.values.length > 0 ? o.exception.values[o.exception.values.length - 1] : void 0;
    var c, l;
    s && (o.exception.values = (c = me(e1, t, i, a.originalException, r, o.exception.values, s, 0), l = n, c.map((e1)=>(e1.value && (e1.value = de(e1.value, l)), e1))));
}
function me(e1, t, n, r, i, o, a, s) {
    if (o.length >= n + 1) return o;
    let c = [
        ...o
    ];
    if (ue(r[i], Error)) {
        ve(a, s);
        const o = e1(t, r[i]), l = c.length;
        ye(o, i, l, s), c = me(e1, t, n, r[i], i, [
            o,
            ...c
        ], o, l);
    }
    return Array.isArray(r.errors) && r.errors.forEach((r, o)=>{
        if (ue(r, Error)) {
            ve(a, s);
            const l = e1(t, r), u = c.length;
            ye(l, `errors[${o}]`, u, s), c = me(e1, t, n, r, i, [
                l,
                ...c
            ], l, u);
        }
    }), c;
}
function ve(e1, t) {
    e1.mechanism = e1.mechanism || {
        type: "generic",
        handled: !0
    }, e1.mechanism = {
        ...e1.mechanism,
        is_exception_group: !0,
        exception_id: t
    };
}
function ye(e1, t, n, r) {
    e1.mechanism = e1.mechanism || {
        type: "generic",
        handled: !0
    }, e1.mechanism = {
        ...e1.mechanism,
        type: "chained",
        source: t,
        exception_id: n,
        parent_id: r
    };
}
function _e(e1) {
    return e1 && e1.Math == Math ? e1 : void 0;
}
const be = "object" == typeof globalThis && _e(globalThis) || "object" == typeof window && _e(window) || "object" == typeof self && _e(self) || "object" == typeof global && _e(global) || function() {
    return this;
}() || {};
function we() {
    return be;
}
function Se(e1, t, n) {
    const r = n || be, i = r.__SENTRY__ = r.__SENTRY__ || {};
    return i[e1] || (i[e1] = t());
}
const ke = we(), Ee = 80;
function Me(e1, t = {}) {
    try {
        let n = e1;
        const r = 5, i = [];
        let o = 0, a = 0;
        const s = " > ", c = s.length;
        let l;
        const u = Array.isArray(t) ? t : t.keyAttrs, d = !Array.isArray(t) && t.maxStringLength || Ee;
        for(; n && o++ < r && (l = Te(n, u), !("html" === l || o > 1 && a + i.length * c + l.length >= d));)i.push(l), a += l.length, n = n.parentNode;
        return i.reverse().join(s);
    } catch (e1) {
        return "<unknown>";
    }
}
function Te(e1, t) {
    const n = e1, r = [];
    let i, o, a, s, c;
    if (!n || !n.tagName) return "";
    r.push(n.tagName.toLowerCase());
    const l = t && t.length ? t.filter((e1)=>n.getAttribute(e1)).map((e1)=>[
            e1,
            n.getAttribute(e1)
        ]) : null;
    if (l && l.length) l.forEach((e1)=>{
        r.push(`[${e1[0]}="${e1[1]}"]`);
    });
    else if (n.id && r.push(`#${n.id}`), i = n.className, i && oe(i)) for(o = i.split(/\s+/), c = 0; c < o.length; c++)r.push(`.${o[c]}`);
    const u = [
        "aria-label",
        "type",
        "name",
        "title",
        "alt"
    ];
    for(c = 0; c < u.length; c++)a = u[c], s = n.getAttribute(a), s && r.push(`[${a}="${s}"]`);
    return r.join("");
}
const Ce = [
    "debug",
    "info",
    "warn",
    "error",
    "log",
    "assert",
    "trace"
];
function Oe(e1) {
    if (!("console" in be)) return e1();
    const t = be.console, n = {};
    Ce.forEach((e1)=>{
        const r = t[e1] && t[e1].__sentry_original__;
        e1 in t && r && (n[e1] = t[e1], t[e1] = r);
    });
    try {
        return e1();
    } finally{
        Object.keys(n).forEach((e1)=>{
            t[e1] = n[e1];
        });
    }
}
function Pe() {
    let e1 = !1;
    const t = {
        enable: ()=>{
            e1 = !0;
        },
        disable: ()=>{
            e1 = !1;
        }
    };
    return "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? Ce.forEach((n)=>{
        t[n] = (...t)=>{
            e1 && Oe(()=>{
                be.console[n](`Sentry Logger [${n}]:`, ...t);
            });
        };
    }) : Ce.forEach((e1)=>{
        t[e1] = ()=>{};
    }), t;
}
let xe;
xe = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? Se("logger", Pe) : Pe();
const Ae = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function je(e1, t = !1) {
    const { host: n, path: r, pass: i, port: o, projectId: a, protocol: s, publicKey: c } = e1;
    return `${s}://${c}${t && i ? `:${i}` : ""}@${n}${o ? `:${o}` : ""}/${r ? `${r}/` : r}${a}`;
}
function Le(e1) {
    return {
        protocol: e1.protocol,
        publicKey: e1.publicKey || "",
        pass: e1.pass || "",
        host: e1.host,
        port: e1.port || "",
        path: e1.path || "",
        projectId: e1.projectId
    };
}
function De(e1) {
    const t = "string" == typeof e1 ? function(e1) {
        const t = Ae.exec(e1);
        if (!t) return void console.error(`Invalid Sentry Dsn: ${e1}`);
        const [n, r, i = "", o, a = "", s] = t.slice(1);
        let c = "", l = s;
        const u = l.split("/");
        if (u.length > 1 && (c = u.slice(0, -1).join("/"), l = u.pop()), l) {
            const e1 = l.match(/^\d+/);
            e1 && (l = e1[0]);
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
    }(e1) : Le(e1);
    if (t && function(e1) {
        if ("undefined" != typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__) return !0;
        const { port: t, projectId: n, protocol: r } = e1;
        return !([
            "protocol",
            "publicKey",
            "host",
            "projectId"
        ].find((t)=>!e1[t] && (xe.error(`Invalid Sentry Dsn: ${t} missing`), !0)) || (n.match(/^\d+$/) ? function(e1) {
            return "http" === e1 || "https" === e1;
        }(r) ? t && isNaN(parseInt(t, 10)) && (xe.error(`Invalid Sentry Dsn: Invalid port ${t}`), 1) : (xe.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), 1) : (xe.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), 1)));
    }(t)) return t;
}
class Ne extends Error {
    constructor(e1, t = "warn"){
        super(e1), this.message = e1, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = t;
    }
}
function Ie(e1, t, n) {
    if (!(t in e1)) return;
    const r = e1[t], i = n(r);
    if ("function" == typeof i) try {
        Be(i, r);
    } catch (e1) {}
    e1[t] = i;
}
function Re(e1, t, n) {
    Object.defineProperty(e1, t, {
        value: n,
        writable: !0,
        configurable: !0
    });
}
function Be(e1, t) {
    const n = t.prototype || {};
    e1.prototype = t.prototype = n, Re(e1, "__sentry_original__", t);
}
function Fe(e1) {
    return e1.__sentry_original__;
}
function Ue(e1) {
    if (te(e1)) return {
        message: e1.message,
        name: e1.name,
        stack: e1.stack,
        ...$e(e1)
    };
    if (ce(e1)) {
        const t = {
            type: e1.type,
            target: Ve(e1.target),
            currentTarget: Ve(e1.currentTarget),
            ...$e(e1)
        };
        return "undefined" != typeof CustomEvent && ue(e1, CustomEvent) && (t.detail = e1.detail), t;
    }
    return e1;
}
function Ve(e1) {
    try {
        return t = e1, "undefined" != typeof Element && ue(t, Element) ? Me(e1) : Object.prototype.toString.call(e1);
    } catch (e1) {
        return "<unknown>";
    }
    var t;
}
function $e(e1) {
    if ("object" == typeof e1 && null !== e1) {
        const t = {};
        for(const n in e1)Object.prototype.hasOwnProperty.call(e1, n) && (t[n] = e1[n]);
        return t;
    }
    return {};
}
function Ge(e1) {
    return qe(e1, new Map);
}
function qe(e1, t) {
    if (se(e1)) {
        const n = t.get(e1);
        if (void 0 !== n) return n;
        const r = {};
        t.set(e1, r);
        for (const n of Object.keys(e1))void 0 !== e1[n] && (r[n] = qe(e1[n], t));
        return r;
    }
    if (Array.isArray(e1)) {
        const n = t.get(e1);
        if (void 0 !== n) return n;
        const r = [];
        return t.set(e1, r), e1.forEach((e1)=>{
            r.push(qe(e1, t));
        }), r;
    }
    return e1;
}
const Ye = "<anonymous>";
function Je(e1) {
    try {
        return e1 && "function" == typeof e1 && e1.name || Ye;
    } catch (e1) {
        return Ye;
    }
}
const We = we();
function ze(e1) {
    return e1 && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e1.toString());
}
function He() {
    if (!function() {
        if (!("fetch" in We)) return !1;
        try {
            return new Headers, new Request("http://www.example.com"), new Response, !0;
        } catch (e1) {
            return !1;
        }
    }()) return !1;
    if (ze(We.fetch)) return !0;
    let e1 = !1;
    const t = We.document;
    if (t && "function" == typeof t.createElement) try {
        const n = t.createElement("iframe");
        n.hidden = !0, t.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (e1 = ze(n.contentWindow.fetch)), t.head.removeChild(n);
    } catch (e1) {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e1);
    }
    return e1;
}
const Qe = we();
const Ke = we(), Xe = "__sentry_xhr_v2__", Ze = {}, et = {};
function tt(e1) {
    if (!et[e1]) switch(et[e1] = !0, e1){
        case "console":
            !function() {
                if (!("console" in Ke)) return;
                Ce.forEach(function(e1) {
                    e1 in Ke.console && Ie(Ke.console, e1, function(t) {
                        return function(...n) {
                            rt("console", {
                                args: n,
                                level: e1
                            }), t && t.apply(Ke.console, n);
                        };
                    });
                });
            }();
            break;
        case "dom":
            !function() {
                if (!("document" in Ke)) return;
                const e1 = rt.bind(null, "dom"), t = ut(e1, !0);
                Ke.document.addEventListener("click", t, !1), Ke.document.addEventListener("keypress", t, !1), [
                    "EventTarget",
                    "Node"
                ].forEach((t)=>{
                    const n = Ke[t] && Ke[t].prototype;
                    n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Ie(n, "addEventListener", function(t) {
                        return function(n, r, i) {
                            if ("click" === n || "keypress" == n) try {
                                const r = this, o = r.__sentry_instrumentation_handlers__ = r.__sentry_instrumentation_handlers__ || {}, a = o[n] = o[n] || {
                                    refCount: 0
                                };
                                if (!a.handler) {
                                    const r = ut(e1);
                                    a.handler = r, t.call(this, n, r, i);
                                }
                                a.refCount++;
                            } catch (e1) {}
                            return t.call(this, n, r, i);
                        };
                    }), Ie(n, "removeEventListener", function(e1) {
                        return function(t, n, r) {
                            if ("click" === t || "keypress" == t) try {
                                const n = this, i = n.__sentry_instrumentation_handlers__ || {}, o = i[t];
                                o && (o.refCount--, o.refCount <= 0 && (e1.call(this, t, o.handler, r), o.handler = void 0, delete i[t]), 0 === Object.keys(i).length && delete n.__sentry_instrumentation_handlers__);
                            } catch (e1) {}
                            return e1.call(this, t, n, r);
                        };
                    }));
                });
            }();
            break;
        case "xhr":
            !function() {
                if (!("XMLHttpRequest" in Ke)) return;
                const e1 = XMLHttpRequest.prototype;
                Ie(e1, "open", function(e1) {
                    return function(...t) {
                        const n = t[1], r = this[Xe] = {
                            method: oe(t[0]) ? t[0].toUpperCase() : t[0],
                            url: t[1],
                            request_headers: {}
                        };
                        oe(n) && "POST" === r.method && n.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                        const i = ()=>{
                            const e1 = this[Xe];
                            if (e1 && 4 === this.readyState) {
                                try {
                                    e1.status_code = this.status;
                                } catch (e1) {}
                                rt("xhr", {
                                    args: t,
                                    endTimestamp: Date.now(),
                                    startTimestamp: Date.now(),
                                    xhr: this
                                });
                            }
                        };
                        return "onreadystatechange" in this && "function" == typeof this.onreadystatechange ? Ie(this, "onreadystatechange", function(e1) {
                            return function(...t) {
                                return i(), e1.apply(this, t);
                            };
                        }) : this.addEventListener("readystatechange", i), Ie(this, "setRequestHeader", function(e1) {
                            return function(...t) {
                                const [n, r] = t, i = this[Xe];
                                return i && (i.request_headers[n.toLowerCase()] = r), e1.apply(this, t);
                            };
                        }), e1.apply(this, t);
                    };
                }), Ie(e1, "send", function(e1) {
                    return function(...t) {
                        const n = this[Xe];
                        return n && void 0 !== t[0] && (n.body = t[0]), rt("xhr", {
                            args: t,
                            startTimestamp: Date.now(),
                            xhr: this
                        }), e1.apply(this, t);
                    };
                });
            }();
            break;
        case "fetch":
            !function() {
                if (!He()) return;
                Ie(Ke, "fetch", function(e1) {
                    return function(...t) {
                        const { method: n, url: r } = function(e1) {
                            if (0 === e1.length) return {
                                method: "GET",
                                url: ""
                            };
                            if (2 === e1.length) {
                                const [t, n] = e1;
                                return {
                                    url: ot(t),
                                    method: it(n, "method") ? String(n.method).toUpperCase() : "GET"
                                };
                            }
                            const t = e1[0];
                            return {
                                url: ot(t),
                                method: it(t, "method") ? String(t.method).toUpperCase() : "GET"
                            };
                        }(t), i = {
                            args: t,
                            fetchData: {
                                method: n,
                                url: r
                            },
                            startTimestamp: Date.now()
                        };
                        return rt("fetch", {
                            ...i
                        }), e1.apply(Ke, t).then((e1)=>(rt("fetch", {
                                ...i,
                                endTimestamp: Date.now(),
                                response: e1
                            }), e1), (e1)=>{
                            throw rt("fetch", {
                                ...i,
                                endTimestamp: Date.now(),
                                error: e1
                            }), e1;
                        });
                    };
                });
            }();
            break;
        case "history":
            !function() {
                if (!function() {
                    const e1 = Qe.chrome, t = e1 && e1.app && e1.app.runtime, n = "history" in Qe && !!Qe.history.pushState && !!Qe.history.replaceState;
                    return !t && n;
                }()) return;
                const e1 = Ke.onpopstate;
                function t(e1) {
                    return function(...t) {
                        const n = t.length > 2 ? t[2] : void 0;
                        if (n) {
                            const e1 = at, t = String(n);
                            at = t, rt("history", {
                                from: e1,
                                to: t
                            });
                        }
                        return e1.apply(this, t);
                    };
                }
                Ke.onpopstate = function(...t) {
                    const n = Ke.location.href, r = at;
                    if (at = n, rt("history", {
                        from: r,
                        to: n
                    }), e1) try {
                        return e1.apply(this, t);
                    } catch (e1) {}
                }, Ie(Ke.history, "pushState", t), Ie(Ke.history, "replaceState", t);
            }();
            break;
        case "error":
            dt = Ke.onerror, Ke.onerror = function(e1, t, n, r, i) {
                return rt("error", {
                    column: r,
                    error: i,
                    line: n,
                    msg: e1,
                    url: t
                }), !(!dt || dt.__SENTRY_LOADER__) && dt.apply(this, arguments);
            }, Ke.onerror.__SENTRY_INSTRUMENTED__ = !0;
            break;
        case "unhandledrejection":
            ht = Ke.onunhandledrejection, Ke.onunhandledrejection = function(e1) {
                return rt("unhandledrejection", e1), !(ht && !ht.__SENTRY_LOADER__) || ht.apply(this, arguments);
            }, Ke.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
            break;
        default:
            return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn("unknown instrumentation type:", e1));
    }
}
function nt(e1, t) {
    Ze[e1] = Ze[e1] || [], Ze[e1].push(t), tt(e1);
}
function rt(e1, t) {
    if (e1 && Ze[e1]) for (const n of Ze[e1] || [])try {
        n(t);
    } catch (t) {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.error(`Error while triggering instrumentation handler.\nType: ${e1}\nName: ${Je(n)}\nError:`, t);
    }
}
function it(e1, t) {
    return !!e1 && "object" == typeof e1 && !!e1[t];
}
function ot(e1) {
    return "string" == typeof e1 ? e1 : e1 ? it(e1, "url") ? e1.url : e1.toString ? e1.toString() : "" : "";
}
let at;
const st = 1e3;
let ct, lt;
function ut(e1, t = !1) {
    return (n)=>{
        if (!n || lt === n) return;
        if (function(e1) {
            if ("keypress" !== e1.type) return !1;
            try {
                const t = e1.target;
                if (!t || !t.tagName) return !0;
                if ("INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable) return !1;
            } catch (e1) {}
            return !0;
        }(n)) return;
        const r = "keypress" === n.type ? "input" : n.type;
        (void 0 === ct || function(e1, t) {
            if (!e1) return !0;
            if (e1.type !== t.type) return !0;
            try {
                if (e1.target !== t.target) return !0;
            } catch (e1) {}
            return !1;
        }(lt, n)) && (e1({
            event: n,
            name: r,
            global: t
        }), lt = n), clearTimeout(ct), ct = Ke.setTimeout(()=>{
            ct = void 0;
        }, st);
    };
}
let dt = null;
let ht = null;
function pt() {
    const e1 = be, t = e1.crypto || e1.msCrypto;
    if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
    const n = t && t.getRandomValues ? ()=>t.getRandomValues(new Uint8Array(1))[0] : ()=>16 * Math.random();
    return "10000000100040008000100000000000".replace(/[018]/g, (e1)=>(e1 ^ (15 & n()) >> e1 / 4).toString(16));
}
function ft(e1) {
    return e1.exception && e1.exception.values ? e1.exception.values[0] : void 0;
}
function gt(e1) {
    const { message: t, event_id: n } = e1;
    if (t) return t;
    const r = ft(e1);
    return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>";
}
function mt(e1, t, n) {
    const r = e1.exception = e1.exception || {}, i = r.values = r.values || [], o = i[0] = i[0] || {};
    o.value || (o.value = t || ""), o.type || (o.type = n || "Error");
}
function vt(e1, t) {
    const n = ft(e1);
    if (!n) return;
    const r = n.mechanism;
    if (n.mechanism = {
        type: "generic",
        handled: !0,
        ...r,
        ...t
    }, t && "data" in t) {
        const e1 = {
            ...r && r.data,
            ...t.data
        };
        n.mechanism.data = e1;
    }
}
function yt(e1) {
    if (e1 && e1.__sentry_captured__) return !0;
    try {
        Re(e1, "__sentry_captured__", !0);
    } catch (e1) {}
    return !1;
}
function _t(e1, t = 100, n = 1 / 0) {
    try {
        return wt("", e1, t, n);
    } catch (e1) {
        return {
            ERROR: `**non-serializable** (${e1})`
        };
    }
}
function bt(e1, t = 3, n = 102400) {
    const r = _t(e1, t);
    var i;
    return i = r, function(e1) {
        return ~-encodeURI(e1).split(/%..|./).length;
    }(JSON.stringify(i)) > n ? bt(e1, t - 1, n) : r;
}
function wt(e1, t, n = 1 / 0, r = 1 / 0, i = function() {
    const e1 = "function" == typeof WeakSet, t = e1 ? new WeakSet : [];
    return [
        function(n) {
            if (e1) return !!t.has(n) || (t.add(n), !1);
            for(let e1 = 0; e1 < t.length; e1++)if (t[e1] === n) return !0;
            return t.push(n), !1;
        },
        function(n) {
            if (e1) t.delete(n);
            else for(let e1 = 0; e1 < t.length; e1++)if (t[e1] === n) {
                t.splice(e1, 1);
                break;
            }
        }
    ];
}()) {
    const [o, a] = i;
    if (null == t || [
        "number",
        "boolean",
        "string"
    ].includes(typeof t) && ("number" != typeof (s = t) || s == s)) return t;
    var s;
    const c = function(e1, t) {
        try {
            if ("domain" === e1 && t && "object" == typeof t && t._events) return "[Domain]";
            if ("domainEmitter" === e1) return "[DomainEmitter]";
            if ("undefined" != typeof global && t === global) return "[Global]";
            if ("undefined" != typeof window && t === window) return "[Window]";
            if ("undefined" != typeof document && t === document) return "[Document]";
            if (function(e1) {
                return se(e1) && "nativeEvent" in e1 && "preventDefault" in e1 && "stopPropagation" in e1;
            }(t)) return "[SyntheticEvent]";
            if ("number" == typeof t && t != t) return "[NaN]";
            if ("function" == typeof t) return `[Function: ${Je(t)}]`;
            if ("symbol" == typeof t) return `[${String(t)}]`;
            if ("bigint" == typeof t) return `[BigInt: ${String(t)}]`;
            const n = function(e1) {
                const t = Object.getPrototypeOf(e1);
                return t ? t.constructor.name : "null prototype";
            }(t);
            return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`;
        } catch (e1) {
            return `**non-serializable** (${e1})`;
        }
    }(e1, t);
    if (!c.startsWith("[object ")) return c;
    if (t.__sentry_skip_normalization__) return t;
    const l = "number" == typeof t.__sentry_override_normalization_depth__ ? t.__sentry_override_normalization_depth__ : n;
    if (0 === l) return c.replace("object ", "");
    if (o(t)) return "[Circular ~]";
    const u = t;
    if (u && "function" == typeof u.toJSON) try {
        return wt("", u.toJSON(), l - 1, r, i);
    } catch (e1) {}
    const d = Array.isArray(t) ? [] : {};
    let h = 0;
    const p = Ue(t);
    for(const e1 in p){
        if (!Object.prototype.hasOwnProperty.call(p, e1)) continue;
        if (h >= r) {
            d[e1] = "[MaxProperties ~]";
            break;
        }
        const t = p[e1];
        d[e1] = wt(e1, t, l - 1, r, i), h++;
    }
    return a(t), d;
}
var St;
function kt(e1) {
    return new Mt((t)=>{
        t(e1);
    });
}
function Et(e1) {
    return new Mt((t, n)=>{
        n(e1);
    });
}
!function(e1) {
    e1[e1.PENDING = 0] = "PENDING";
    e1[e1.RESOLVED = 1] = "RESOLVED";
    e1[e1.REJECTED = 2] = "REJECTED";
}(St || (St = {}));
class Mt {
    __init() {
        this._state = St.PENDING;
    }
    __init2() {
        this._handlers = [];
    }
    constructor(e1){
        Mt.prototype.__init.call(this), Mt.prototype.__init2.call(this), Mt.prototype.__init3.call(this), Mt.prototype.__init4.call(this), Mt.prototype.__init5.call(this), Mt.prototype.__init6.call(this);
        try {
            e1(this._resolve, this._reject);
        } catch (e1) {
            this._reject(e1);
        }
    }
    then(e1, t) {
        return new Mt((n, r)=>{
            this._handlers.push([
                !1,
                (t)=>{
                    if (e1) try {
                        n(e1(t));
                    } catch (e1) {
                        r(e1);
                    }
                    else n(t);
                },
                (e1)=>{
                    if (t) try {
                        n(t(e1));
                    } catch (e1) {
                        r(e1);
                    }
                    else r(e1);
                }
            ]), this._executeHandlers();
        });
    }
    catch(e1) {
        return this.then((e1)=>e1, e1);
    }
    finally(e1) {
        return new Mt((t, n)=>{
            let r, i;
            return this.then((t)=>{
                i = !1, r = t, e1 && e1();
            }, (t)=>{
                i = !0, r = t, e1 && e1();
            }).then(()=>{
                i ? n(r) : t(r);
            });
        });
    }
    __init3() {
        this._resolve = (e1)=>{
            this._setResult(St.RESOLVED, e1);
        };
    }
    __init4() {
        this._reject = (e1)=>{
            this._setResult(St.REJECTED, e1);
        };
    }
    __init5() {
        this._setResult = (e1, t)=>{
            this._state === St.PENDING && (le(t) ? t.then(this._resolve, this._reject) : (this._state = e1, this._value = t, this._executeHandlers()));
        };
    }
    __init6() {
        this._executeHandlers = ()=>{
            if (this._state === St.PENDING) return;
            const e1 = this._handlers.slice();
            this._handlers = [], e1.forEach((e1)=>{
                e1[0] || (this._state === St.RESOLVED && e1[1](this._value), this._state === St.REJECTED && e1[2](this._value), e1[0] = !0);
            });
        };
    }
}
function Tt(e1) {
    const t = [];
    function n(e1) {
        return t.splice(t.indexOf(e1), 1)[0];
    }
    return {
        $: t,
        add: function(r) {
            if (!(void 0 === e1 || t.length < e1)) return Et(new Ne("Not adding Promise because buffer limit was reached."));
            const i = r();
            return -1 === t.indexOf(i) && t.push(i), i.then(()=>n(i)).then(null, ()=>n(i).then(null, ()=>{})), i;
        },
        drain: function(e1) {
            return new Mt((n, r)=>{
                let i = t.length;
                if (!i) return n(!0);
                const o = setTimeout(()=>{
                    e1 && e1 > 0 && n(!1);
                }, e1);
                t.forEach((e1)=>{
                    kt(e1).then(()=>{
                        --i || (clearTimeout(o), n(!0));
                    }, r);
                });
            });
        }
    };
}
function Ct(e1) {
    if (!e1) return {};
    const t = e1.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!t) return {};
    const n = t[6] || "", r = t[8] || "";
    return {
        host: t[4],
        path: t[5],
        protocol: t[2],
        search: n,
        hash: r,
        relative: t[5] + n + r
    };
}
const Ot = [
    "fatal",
    "error",
    "warning",
    "log",
    "info",
    "debug"
];
const Pt = we(), xt = {
    nowSeconds: ()=>Date.now() / 1e3
};
const At = "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__ || "[object process]" !== Object.prototype.toString.call("undefined" != typeof process ? process : 0) ? function() {
    const { performance: e1 } = Pt;
    if (!e1 || !e1.now) return;
    return {
        now: ()=>e1.now(),
        timeOrigin: Date.now() - e1.now()
    };
}() : function() {
    try {
        return (e1 = module, t = "perf_hooks", e1.require(t)).performance;
    } catch (e1) {
        return;
    }
    var e1, t;
}(), jt = void 0 === At ? xt : {
    nowSeconds: ()=>(At.timeOrigin + At.now()) / 1e3
}, Lt = xt.nowSeconds.bind(xt), Dt = jt.nowSeconds.bind(jt);
function Nt(e1, t = []) {
    return [
        e1,
        t
    ];
}
function It(e1, t) {
    const [n, r] = e1;
    return [
        n,
        [
            ...r,
            t
        ]
    ];
}
function Rt(e1, t) {
    const n = e1[1];
    for (const e1 of n){
        if (t(e1, e1[0].type)) return !0;
    }
    return !1;
}
function Bt(e1, t) {
    return (t || new TextEncoder).encode(e1);
}
function Ft(e1, t) {
    const [n, r] = e1;
    let i = JSON.stringify(n);
    function o(e1) {
        "string" == typeof i ? i = "string" == typeof e1 ? i + e1 : [
            Bt(i, t),
            e1
        ] : i.push("string" == typeof e1 ? Bt(e1, t) : e1);
    }
    for (const e1 of r){
        const [t, n] = e1;
        if (o(`\n${JSON.stringify(t)}\n`), "string" == typeof n || n instanceof Uint8Array) o(n);
        else {
            let e1;
            try {
                e1 = JSON.stringify(n);
            } catch (t) {
                e1 = JSON.stringify(_t(n));
            }
            o(e1);
        }
    }
    return "string" == typeof i ? i : function(e1) {
        const t = e1.reduce((e1, t)=>e1 + t.length, 0), n = new Uint8Array(t);
        let r = 0;
        for (const t of e1)n.set(t, r), r += t.length;
        return n;
    }(i);
}
function Ut(e1, t) {
    const n = "string" == typeof e1.data ? Bt(e1.data, t) : e1.data;
    return [
        Ge({
            type: "attachment",
            length: n.length,
            filename: e1.filename,
            content_type: e1.contentType,
            attachment_type: e1.attachmentType
        }),
        n
    ];
}
(()=>{
    const { performance: e1 } = Pt;
    if (!e1 || !e1.now) return;
    const t = 36e5, n = e1.now(), r = Date.now(), i = e1.timeOrigin ? Math.abs(e1.timeOrigin + n - r) : t, o = i < t, a = e1.timing && e1.timing.navigationStart, s = "number" == typeof a ? Math.abs(a + n - r) : t;
    (o || s < t) && i <= s && e1.timeOrigin;
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
function $t(e1) {
    return Vt[e1];
}
function Gt(e1) {
    if (!e1 || !e1.sdk) return;
    const { name: t, version: n } = e1.sdk;
    return {
        name: t,
        version: n
    };
}
const qt = 6e4;
function Yt(e1, { statusCode: t, headers: n }, r = Date.now()) {
    const i = {
        ...e1
    }, o = n && n["x-sentry-rate-limits"], a = n && n["retry-after"];
    if (o) for (const e1 of o.trim().split(",")){
        const [t, n] = e1.split(":", 2), o = parseInt(t, 10), a = 1e3 * (isNaN(o) ? 60 : o);
        if (n) for (const e1 of n.split(";"))i[e1] = r + a;
        else i.all = r + a;
    }
    else a ? i.all = r + function(e1, t = Date.now()) {
        const n = parseInt(`${e1}`, 10);
        if (!isNaN(n)) return 1e3 * n;
        const r = Date.parse(`${e1}`);
        return isNaN(r) ? qt : r - t;
    }(a, r) : 429 === t && (i.all = r + 6e4);
    return i;
}
const Jt = "production";
function Wt(e1) {
    const t = Dt(), n = {
        sid: pt(),
        init: !0,
        timestamp: t,
        started: t,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: !1,
        toJSON: ()=>(function(e1) {
                return Ge({
                    sid: `${e1.sid}`,
                    init: e1.init,
                    started: new Date(1e3 * e1.started).toISOString(),
                    timestamp: new Date(1e3 * e1.timestamp).toISOString(),
                    status: e1.status,
                    errors: e1.errors,
                    did: "number" == typeof e1.did || "string" == typeof e1.did ? `${e1.did}` : void 0,
                    duration: e1.duration,
                    attrs: {
                        release: e1.release,
                        environment: e1.environment,
                        ip_address: e1.ipAddress,
                        user_agent: e1.userAgent
                    }
                });
            })(n)
    };
    return e1 && zt(n, e1), n;
}
function zt(e1, t = {}) {
    if (t.user && (!e1.ipAddress && t.user.ip_address && (e1.ipAddress = t.user.ip_address), e1.did || t.did || (e1.did = t.user.id || t.user.email || t.user.username)), e1.timestamp = t.timestamp || Dt(), t.ignoreDuration && (e1.ignoreDuration = t.ignoreDuration), t.sid && (e1.sid = 32 === t.sid.length ? t.sid : pt()), void 0 !== t.init && (e1.init = t.init), !e1.did && t.did && (e1.did = `${t.did}`), "number" == typeof t.started && (e1.started = t.started), e1.ignoreDuration) e1.duration = void 0;
    else if ("number" == typeof t.duration) e1.duration = t.duration;
    else {
        const t = e1.timestamp - e1.started;
        e1.duration = t >= 0 ? t : 0;
    }
    t.release && (e1.release = t.release), t.environment && (e1.environment = t.environment), !e1.ipAddress && t.ipAddress && (e1.ipAddress = t.ipAddress), !e1.userAgent && t.userAgent && (e1.userAgent = t.userAgent), "number" == typeof t.errors && (e1.errors = t.errors), t.status && (e1.status = t.status);
}
class Ht {
    constructor(){
        this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = Xt();
    }
    static clone(e1) {
        const t = new Ht;
        return e1 && (t._breadcrumbs = [
            ...e1._breadcrumbs
        ], t._tags = {
            ...e1._tags
        }, t._extra = {
            ...e1._extra
        }, t._contexts = {
            ...e1._contexts
        }, t._user = e1._user, t._level = e1._level, t._span = e1._span, t._session = e1._session, t._transactionName = e1._transactionName, t._fingerprint = e1._fingerprint, t._eventProcessors = [
            ...e1._eventProcessors
        ], t._requestSession = e1._requestSession, t._attachments = [
            ...e1._attachments
        ], t._sdkProcessingMetadata = {
            ...e1._sdkProcessingMetadata
        }, t._propagationContext = {
            ...e1._propagationContext
        }), t;
    }
    addScopeListener(e1) {
        this._scopeListeners.push(e1);
    }
    addEventProcessor(e1) {
        return this._eventProcessors.push(e1), this;
    }
    setUser(e1) {
        return this._user = e1 || {}, this._session && zt(this._session, {
            user: e1
        }), this._notifyScopeListeners(), this;
    }
    getUser() {
        return this._user;
    }
    getRequestSession() {
        return this._requestSession;
    }
    setRequestSession(e1) {
        return this._requestSession = e1, this;
    }
    setTags(e1) {
        return this._tags = {
            ...this._tags,
            ...e1
        }, this._notifyScopeListeners(), this;
    }
    setTag(e1, t) {
        return this._tags = {
            ...this._tags,
            [e1]: t
        }, this._notifyScopeListeners(), this;
    }
    setExtras(e1) {
        return this._extra = {
            ...this._extra,
            ...e1
        }, this._notifyScopeListeners(), this;
    }
    setExtra(e1, t) {
        return this._extra = {
            ...this._extra,
            [e1]: t
        }, this._notifyScopeListeners(), this;
    }
    setFingerprint(e1) {
        return this._fingerprint = e1, this._notifyScopeListeners(), this;
    }
    setLevel(e1) {
        return this._level = e1, this._notifyScopeListeners(), this;
    }
    setTransactionName(e1) {
        return this._transactionName = e1, this._notifyScopeListeners(), this;
    }
    setContext(e1, t) {
        return null === t ? delete this._contexts[e1] : this._contexts[e1] = t, this._notifyScopeListeners(), this;
    }
    setSpan(e1) {
        return this._span = e1, this._notifyScopeListeners(), this;
    }
    getSpan() {
        return this._span;
    }
    getTransaction() {
        const e1 = this.getSpan();
        return e1 && e1.transaction;
    }
    setSession(e1) {
        return e1 ? this._session = e1 : delete this._session, this._notifyScopeListeners(), this;
    }
    getSession() {
        return this._session;
    }
    update(e1) {
        if (!e1) return this;
        if ("function" == typeof e1) {
            const t = e1(this);
            return t instanceof Ht ? t : this;
        }
        return e1 instanceof Ht ? (this._tags = {
            ...this._tags,
            ...e1._tags
        }, this._extra = {
            ...this._extra,
            ...e1._extra
        }, this._contexts = {
            ...this._contexts,
            ...e1._contexts
        }, e1._user && Object.keys(e1._user).length && (this._user = e1._user), e1._level && (this._level = e1._level), e1._fingerprint && (this._fingerprint = e1._fingerprint), e1._requestSession && (this._requestSession = e1._requestSession), e1._propagationContext && (this._propagationContext = e1._propagationContext)) : se(e1) && (this._tags = {
            ...this._tags,
            ...e1.tags
        }, this._extra = {
            ...this._extra,
            ...e1.extra
        }, this._contexts = {
            ...this._contexts,
            ...e1.contexts
        }, e1.user && (this._user = e1.user), e1.level && (this._level = e1.level), e1.fingerprint && (this._fingerprint = e1.fingerprint), e1.requestSession && (this._requestSession = e1.requestSession), e1.propagationContext && (this._propagationContext = e1.propagationContext)), this;
    }
    clear() {
        return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = Xt(), this;
    }
    addBreadcrumb(e1, t) {
        const n = "number" == typeof t ? t : 100;
        if (n <= 0) return this;
        const r = {
            timestamp: Lt(),
            ...e1
        };
        return this._breadcrumbs = [
            ...this._breadcrumbs,
            r
        ].slice(-n), this._notifyScopeListeners(), this;
    }
    getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
        return this._breadcrumbs = [], this._notifyScopeListeners(), this;
    }
    addAttachment(e1) {
        return this._attachments.push(e1), this;
    }
    getAttachments() {
        return this._attachments;
    }
    clearAttachments() {
        return this._attachments = [], this;
    }
    applyToEvent(e1, t = {}) {
        if (this._extra && Object.keys(this._extra).length && (e1.extra = {
            ...this._extra,
            ...e1.extra
        }), this._tags && Object.keys(this._tags).length && (e1.tags = {
            ...this._tags,
            ...e1.tags
        }), this._user && Object.keys(this._user).length && (e1.user = {
            ...this._user,
            ...e1.user
        }), this._contexts && Object.keys(this._contexts).length && (e1.contexts = {
            ...this._contexts,
            ...e1.contexts
        }), this._level && (e1.level = this._level), this._transactionName && (e1.transaction = this._transactionName), this._span) {
            e1.contexts = {
                trace: this._span.getTraceContext(),
                ...e1.contexts
            };
            const t = this._span.transaction;
            if (t) {
                e1.sdkProcessingMetadata = {
                    dynamicSamplingContext: t.getDynamicSamplingContext(),
                    ...e1.sdkProcessingMetadata
                };
                const n = t.name;
                n && (e1.tags = {
                    transaction: n,
                    ...e1.tags
                });
            }
        }
        return this._applyFingerprint(e1), e1.breadcrumbs = [
            ...e1.breadcrumbs || [],
            ...this._breadcrumbs
        ], e1.breadcrumbs = e1.breadcrumbs.length > 0 ? e1.breadcrumbs : void 0, e1.sdkProcessingMetadata = {
            ...e1.sdkProcessingMetadata,
            ...this._sdkProcessingMetadata,
            propagationContext: this._propagationContext
        }, this._notifyEventProcessors([
            ...Qt(),
            ...this._eventProcessors
        ], e1, t);
    }
    setSDKProcessingMetadata(e1) {
        return this._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata,
            ...e1
        }, this;
    }
    setPropagationContext(e1) {
        return this._propagationContext = e1, this;
    }
    getPropagationContext() {
        return this._propagationContext;
    }
    _notifyEventProcessors(e1, t, n, r = 0) {
        return new Mt((i, o)=>{
            const a = e1[r];
            if (null === t || "function" != typeof a) i(t);
            else {
                const s = a({
                    ...t
                }, n);
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.id && null === s && xe.log(`Event processor "${a.id}" dropped event`), le(s) ? s.then((t)=>this._notifyEventProcessors(e1, t, n, r + 1).then(i)).then(null, o) : this._notifyEventProcessors(e1, s, n, r + 1).then(i).then(null, o);
            }
        });
    }
    _notifyScopeListeners() {
        this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((e1)=>{
            e1(this);
        }), this._notifyingListeners = !1);
    }
    _applyFingerprint(e1) {
        var t;
        e1.fingerprint = e1.fingerprint ? (t = e1.fingerprint, Array.isArray(t) ? t : [
            t
        ]) : [], this._fingerprint && (e1.fingerprint = e1.fingerprint.concat(this._fingerprint)), e1.fingerprint && !e1.fingerprint.length && delete e1.fingerprint;
    }
}
function Qt() {
    return Se("globalEventProcessors", ()=>[]);
}
function Kt(e1) {
    Qt().push(e1);
}
function Xt() {
    return {
        traceId: pt(),
        spanId: pt().substring(16),
        sampled: !1
    };
}
const Zt = 4, en = 100;
class tn {
    constructor(e1, t = new Ht, n = Zt){
        this._version = n, this._stack = [
            {
                scope: t
            }
        ], e1 && this.bindClient(e1);
    }
    isOlderThan(e1) {
        return this._version < e1;
    }
    bindClient(e1) {
        this.getStackTop().client = e1, e1 && e1.setupIntegrations && e1.setupIntegrations();
    }
    pushScope() {
        const e1 = Ht.clone(this.getScope());
        return this.getStack().push({
            client: this.getClient(),
            scope: e1
        }), e1;
    }
    popScope() {
        return !(this.getStack().length <= 1) && !!this.getStack().pop();
    }
    withScope(e1) {
        const t = this.pushScope();
        try {
            e1(t);
        } finally{
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
    captureException(e1, t) {
        const n = this._lastEventId = t && t.event_id ? t.event_id : pt(), r = new Error("Sentry syntheticException");
        return this._withClient((i, o)=>{
            i.captureException(e1, {
                originalException: e1,
                syntheticException: r,
                ...t,
                event_id: n
            }, o);
        }), n;
    }
    captureMessage(e1, t, n) {
        const r = this._lastEventId = n && n.event_id ? n.event_id : pt(), i = new Error(e1);
        return this._withClient((o, a)=>{
            o.captureMessage(e1, t, {
                originalException: e1,
                syntheticException: i,
                ...n,
                event_id: r
            }, a);
        }), r;
    }
    captureEvent(e1, t) {
        const n = t && t.event_id ? t.event_id : pt();
        return e1.type || (this._lastEventId = n), this._withClient((r, i)=>{
            r.captureEvent(e1, {
                ...t,
                event_id: n
            }, i);
        }), n;
    }
    lastEventId() {
        return this._lastEventId;
    }
    addBreadcrumb(e1, t) {
        const { scope: n, client: r } = this.getStackTop();
        if (!r) return;
        const { beforeBreadcrumb: i = null, maxBreadcrumbs: o = en } = r.getOptions && r.getOptions() || {};
        if (o <= 0) return;
        const a = {
            timestamp: Lt(),
            ...e1
        }, s = i ? Oe(()=>i(a, t)) : a;
        null !== s && (r.emit && r.emit("beforeAddBreadcrumb", s, t), n.addBreadcrumb(s, o));
    }
    setUser(e1) {
        this.getScope().setUser(e1);
    }
    setTags(e1) {
        this.getScope().setTags(e1);
    }
    setExtras(e1) {
        this.getScope().setExtras(e1);
    }
    setTag(e1, t) {
        this.getScope().setTag(e1, t);
    }
    setExtra(e1, t) {
        this.getScope().setExtra(e1, t);
    }
    setContext(e1, t) {
        this.getScope().setContext(e1, t);
    }
    configureScope(e1) {
        const { scope: t, client: n } = this.getStackTop();
        n && e1(t);
    }
    run(e1) {
        const t = rn(this);
        try {
            e1(this);
        } finally{
            rn(t);
        }
    }
    getIntegration(e1) {
        const t = this.getClient();
        if (!t) return null;
        try {
            return t.getIntegration(e1);
        } catch (t) {
            return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn(`Cannot retrieve integration ${e1.id} from the current Hub`), null;
        }
    }
    startTransaction(e1, t) {
        const n = this._callExtensionMethod("startTransaction", e1, t);
        return "undefined" != typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__ || n || console.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n"), n;
    }
    traceHeaders() {
        return this._callExtensionMethod("traceHeaders");
    }
    captureSession(e1 = !1) {
        if (e1) return this.endSession();
        this._sendSessionUpdate();
    }
    endSession() {
        const e1 = this.getStackTop().scope, t = e1.getSession();
        t && function(e1, t) {
            let n = {};
            t ? n = {
                status: t
            } : "ok" === e1.status && (n = {
                status: "exited"
            }), zt(e1, n);
        }(t), this._sendSessionUpdate(), e1.setSession();
    }
    startSession(e1) {
        const { scope: t, client: n } = this.getStackTop(), { release: r, environment: i = Jt } = n && n.getOptions() || {}, { userAgent: o } = be.navigator || {}, a = Wt({
            release: r,
            environment: i,
            user: t.getUser(),
            ...o && {
                userAgent: o
            },
            ...e1
        }), s = t.getSession && t.getSession();
        return s && "ok" === s.status && zt(s, {
            status: "exited"
        }), this.endSession(), t.setSession(a), a;
    }
    shouldSendDefaultPii() {
        const e1 = this.getClient(), t = e1 && e1.getOptions();
        return Boolean(t && t.sendDefaultPii);
    }
    _sendSessionUpdate() {
        const { scope: e1, client: t } = this.getStackTop(), n = e1.getSession();
        n && t && t.captureSession && t.captureSession(n);
    }
    _withClient(e1) {
        const { scope: t, client: n } = this.getStackTop();
        n && e1(n, t);
    }
    _callExtensionMethod(e1, ...t) {
        const n = nn().__SENTRY__;
        if (n && n.extensions && "function" == typeof n.extensions[e1]) return n.extensions[e1].apply(this, t);
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn(`Extension method ${e1} couldn't be found, doing nothing.`);
    }
}
function nn() {
    return be.__SENTRY__ = be.__SENTRY__ || {
        extensions: {},
        hub: void 0
    }, be;
}
function rn(e1) {
    const t = nn(), n = an(t);
    return sn(t, e1), n;
}
function on() {
    const e1 = nn();
    if (e1.__SENTRY__ && e1.__SENTRY__.acs) {
        const t = e1.__SENTRY__.acs.getCurrentHub();
        if (t) return t;
    }
    return function(e1 = nn()) {
        t = e1, t && t.__SENTRY__ && t.__SENTRY__.hub && !an(e1).isOlderThan(Zt) || sn(e1, new tn);
        var t;
        return an(e1);
    }(e1);
}
function an(e1) {
    return Se("hub", ()=>new tn, e1);
}
function sn(e1, t) {
    if (!e1) return !1;
    return (e1.__SENTRY__ = e1.__SENTRY__ || {}).hub = t, !0;
}
const cn = "7";
function ln(e1, t) {
    var n;
    return n = {
        sentry_key: e1.publicKey,
        sentry_version: cn,
        ...t && {
            sentry_client: `${t.name}/${t.version}`
        }
    }, Object.keys(n).map((e1)=>`${encodeURIComponent(e1)}=${encodeURIComponent(n[e1])}`).join("&");
}
function un(e1, t, n, r) {
    const i = Gt(n), o = e1.type && "replay_event" !== e1.type ? e1.type : "event";
    !function(e1, t) {
        t && (e1.sdk = e1.sdk || {}, e1.sdk.name = e1.sdk.name || t.name, e1.sdk.version = e1.sdk.version || t.version, e1.sdk.integrations = [
            ...e1.sdk.integrations || [],
            ...t.integrations || []
        ], e1.sdk.packages = [
            ...e1.sdk.packages || [],
            ...t.packages || []
        ]);
    }(e1, n && n.sdk);
    const a = function(e1, t, n, r) {
        const i = e1.sdkProcessingMetadata && e1.sdkProcessingMetadata.dynamicSamplingContext;
        return {
            event_id: e1.event_id,
            sent_at: (new Date).toISOString(),
            ...t && {
                sdk: t
            },
            ...!!n && {
                dsn: je(r)
            },
            ...i && {
                trace: Ge({
                    ...i
                })
            }
        };
    }(e1, i, r, t);
    delete e1.sdkProcessingMetadata;
    return Nt(a, [
        [
            {
                type: o
            },
            e1
        ]
    ]);
}
const dn = [];
function hn(e1, t) {
    t[e1.name] = e1, -1 === dn.indexOf(e1.name) && (e1.setupOnce(Kt, on), dn.push(e1.name), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.log(`Integration installed: ${e1.name}`));
}
function pn(e1, t, n, r) {
    const { normalizeDepth: i = 3, normalizeMaxBreadth: o = 1e3 } = e1, a = {
        ...t,
        event_id: t.event_id || n.event_id || pt(),
        timestamp: t.timestamp || Lt()
    }, s = n.integrations || e1.integrations.map((e1)=>e1.name);
    !function(e1, t) {
        const { environment: n, release: r, dist: i, maxValueLength: o = 250 } = t;
        "environment" in e1 || (e1.environment = "environment" in t ? n : Jt);
        void 0 === e1.release && void 0 !== r && (e1.release = r);
        void 0 === e1.dist && void 0 !== i && (e1.dist = i);
        e1.message && (e1.message = de(e1.message, o));
        const a = e1.exception && e1.exception.values && e1.exception.values[0];
        a && a.value && (a.value = de(a.value, o));
        const s = e1.request;
        s && s.url && (s.url = de(s.url, o));
    }(a, e1), function(e1, t) {
        t.length > 0 && (e1.sdk = e1.sdk || {}, e1.sdk.integrations = [
            ...e1.sdk.integrations || [],
            ...t
        ]);
    }(a, s), void 0 === t.type && function(e1, t) {
        const n = be._sentryDebugIds;
        if (!n) return;
        let r;
        const i = fn.get(t);
        i ? r = i : (r = new Map, fn.set(t, r));
        const o = Object.keys(n).reduce((e1, i)=>{
            let o;
            const a = r.get(i);
            a ? o = a : (o = t(i), r.set(i, o));
            for(let t = o.length - 1; t >= 0; t--){
                const r = o[t];
                if (r.filename) {
                    e1[r.filename] = n[i];
                    break;
                }
            }
            return e1;
        }, {});
        try {
            e1.exception.values.forEach((e1)=>{
                e1.stacktrace.frames.forEach((e1)=>{
                    e1.filename && (e1.debug_id = o[e1.filename]);
                });
            });
        } catch (e1) {}
    }(a, e1.stackParser);
    let c = r;
    n.captureContext && (c = Ht.clone(c).update(n.captureContext));
    let l = kt(a);
    if (c) {
        if (c.getAttachments) {
            const e1 = [
                ...n.attachments || [],
                ...c.getAttachments()
            ];
            e1.length && (n.attachments = e1);
        }
        l = c.applyToEvent(a, n);
    }
    return l.then((e1)=>(e1 && function(e1) {
            const t = {};
            try {
                e1.exception.values.forEach((e1)=>{
                    e1.stacktrace.frames.forEach((e1)=>{
                        e1.debug_id && (e1.abs_path ? t[e1.abs_path] = e1.debug_id : e1.filename && (t[e1.filename] = e1.debug_id), delete e1.debug_id);
                    });
                });
            } catch (e1) {}
            if (0 === Object.keys(t).length) return;
            e1.debug_meta = e1.debug_meta || {}, e1.debug_meta.images = e1.debug_meta.images || [];
            const n = e1.debug_meta.images;
            Object.keys(t).forEach((e1)=>{
                n.push({
                    type: "sourcemap",
                    code_file: e1,
                    debug_id: t[e1]
                });
            });
        }(e1), "number" == typeof i && i > 0 ? function(e1, t, n) {
            if (!e1) return null;
            const r = {
                ...e1,
                ...e1.breadcrumbs && {
                    breadcrumbs: e1.breadcrumbs.map((e1)=>({
                            ...e1,
                            ...e1.data && {
                                data: _t(e1.data, t, n)
                            }
                        }))
                },
                ...e1.user && {
                    user: _t(e1.user, t, n)
                },
                ...e1.contexts && {
                    contexts: _t(e1.contexts, t, n)
                },
                ...e1.extra && {
                    extra: _t(e1.extra, t, n)
                }
            };
            e1.contexts && e1.contexts.trace && r.contexts && (r.contexts.trace = e1.contexts.trace, e1.contexts.trace.data && (r.contexts.trace.data = _t(e1.contexts.trace.data, t, n)));
            e1.spans && (r.spans = e1.spans.map((e1)=>(e1.data && (e1.data = _t(e1.data, t, n)), e1)));
            return r;
        }(e1, i, o) : e1));
}
const fn = new WeakMap;
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
    constructor(e1){
        if (mn.prototype.__init.call(this), mn.prototype.__init2.call(this), mn.prototype.__init3.call(this), mn.prototype.__init4.call(this), mn.prototype.__init5.call(this), this._options = e1, e1.dsn ? this._dsn = De(e1.dsn) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn("No DSN provided, client will not do anything."), this._dsn) {
            const t = function(e1, t = {}) {
                const n = "string" == typeof t ? t : t.tunnel, r = "string" != typeof t && t._metadata ? t._metadata.sdk : void 0;
                return n || `${function(e1) {
                    return `${function(e1) {
                        const t = e1.protocol ? `${e1.protocol}:` : "", n = e1.port ? `:${e1.port}` : "";
                        return `${t}//${e1.host}${n}${e1.path ? `/${e1.path}` : ""}/api/`;
                    }(e1)}${e1.projectId}/envelope/`;
                }(e1)}?${ln(e1, r)}`;
            }(this._dsn, e1);
            this._transport = e1.transport({
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...e1.transportOptions,
                url: t
            });
        }
    }
    captureException(e1, t, n) {
        if (yt(e1)) return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.log(gn));
        let r = t && t.event_id;
        return this._process(this.eventFromException(e1, t).then((e1)=>this._captureEvent(e1, t, n)).then((e1)=>{
            r = e1;
        })), r;
    }
    captureMessage(e1, t, n, r) {
        let i = n && n.event_id;
        const o = ae(e1) ? this.eventFromMessage(String(e1), t, n) : this.eventFromException(e1, n);
        return this._process(o.then((e1)=>this._captureEvent(e1, n, r)).then((e1)=>{
            i = e1;
        })), i;
    }
    captureEvent(e1, t, n) {
        if (t && t.originalException && yt(t.originalException)) return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.log(gn));
        let r = t && t.event_id;
        return this._process(this._captureEvent(e1, t, n).then((e1)=>{
            r = e1;
        })), r;
    }
    captureSession(e1) {
        this._isEnabled() ? "string" != typeof e1.release ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn("Discarded session because of missing or non-string release") : (this.sendSession(e1), zt(e1, {
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
    flush(e1) {
        const t = this._transport;
        return t ? this._isClientDoneProcessing(e1).then((n)=>t.flush(e1).then((e1)=>n && e1)) : kt(!0);
    }
    close(e1) {
        return this.flush(e1).then((e1)=>(this.getOptions().enabled = !1, e1));
    }
    setupIntegrations() {
        this._isEnabled() && !this._integrationsInitialized && (this._integrations = function(e1) {
            const t = {};
            return e1.forEach((e1)=>{
                e1 && hn(e1, t);
            }), t;
        }(this._options.integrations), this._integrationsInitialized = !0);
    }
    getIntegrationById(e1) {
        return this._integrations[e1];
    }
    getIntegration(e1) {
        try {
            return this._integrations[e1.id] || null;
        } catch (t) {
            return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn(`Cannot retrieve integration ${e1.id} from the current Client`), null;
        }
    }
    addIntegration(e1) {
        hn(e1, this._integrations);
    }
    sendEvent(e1, t = {}) {
        if (this._dsn) {
            let n = un(e1, this._dsn, this._options._metadata, this._options.tunnel);
            for (const e1 of t.attachments || [])n = It(n, Ut(e1, this._options.transportOptions && this._options.transportOptions.textEncoder));
            const r = this._sendEnvelope(n);
            r && r.then((t)=>this.emit("afterSendEvent", e1, t), null);
        }
    }
    sendSession(e1) {
        if (this._dsn) {
            const t = function(e1, t, n, r) {
                const i = Gt(n);
                return Nt({
                    sent_at: (new Date).toISOString(),
                    ...i && {
                        sdk: i
                    },
                    ...!!r && {
                        dsn: je(t)
                    }
                }, [
                    "aggregates" in e1 ? [
                        {
                            type: "sessions"
                        },
                        e1
                    ] : [
                        {
                            type: "session"
                        },
                        e1.toJSON()
                    ]
                ]);
            }(e1, this._dsn, this._options._metadata, this._options.tunnel);
            this._sendEnvelope(t);
        }
    }
    recordDroppedEvent(e1, t, n) {
        if (this._options.sendClientReports) {
            const n = `${e1}:${t}`;
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.log(`Adding outcome: "${n}"`), this._outcomes[n] = this._outcomes[n] + 1 || 1;
        }
    }
    on(e1, t) {
        this._hooks[e1] || (this._hooks[e1] = []), this._hooks[e1].push(t);
    }
    emit(e1, ...t) {
        this._hooks[e1] && this._hooks[e1].forEach((e1)=>e1(...t));
    }
    _updateSessionFromEvent(e1, t) {
        let n = !1, r = !1;
        const i = t.exception && t.exception.values;
        if (i) {
            r = !0;
            for (const e1 of i){
                const t = e1.mechanism;
                if (t && !1 === t.handled) {
                    n = !0;
                    break;
                }
            }
        }
        const o = "ok" === e1.status;
        (o && 0 === e1.errors || o && n) && (zt(e1, {
            ...n && {
                status: "crashed"
            },
            errors: e1.errors || Number(r || n)
        }), this.captureSession(e1));
    }
    _isClientDoneProcessing(e1) {
        return new Mt((t)=>{
            let n = 0;
            const r = setInterval(()=>{
                0 == this._numProcessing ? (clearInterval(r), t(!0)) : (n += 1, e1 && n >= e1 && (clearInterval(r), t(!1)));
            }, 1);
        });
    }
    _isEnabled() {
        return !1 !== this.getOptions().enabled && void 0 !== this._dsn;
    }
    _prepareEvent(e1, t, n) {
        const r = this.getOptions(), i = Object.keys(this._integrations);
        return !t.integrations && i.length > 0 && (t.integrations = i), pn(r, e1, t, n).then((e1)=>{
            if (null === e1) return e1;
            const { propagationContext: t } = e1.sdkProcessingMetadata || {};
            if (!(e1.contexts && e1.contexts.trace) && t) {
                const { traceId: r, spanId: i, parentSpanId: o, dsc: a } = t;
                e1.contexts = {
                    trace: {
                        trace_id: r,
                        span_id: i,
                        parent_span_id: o
                    },
                    ...e1.contexts
                };
                const s = a || function(e1, t, n) {
                    const r = t.getOptions(), { publicKey: i } = t.getDsn() || {}, { segment: o } = n && n.getUser() || {}, a = Ge({
                        environment: r.environment || Jt,
                        release: r.release,
                        user_segment: o,
                        public_key: i,
                        trace_id: e1
                    });
                    return t.emit && t.emit("createDsc", a), a;
                }(r, this, n);
                e1.sdkProcessingMetadata = {
                    dynamicSamplingContext: s,
                    ...e1.sdkProcessingMetadata
                };
            }
            return e1;
        });
    }
    _captureEvent(e1, t = {}, n) {
        return this._processEvent(e1, t, n).then((e1)=>e1.event_id, (e1)=>{
            if ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
                const t = e1;
                "log" === t.logLevel ? xe.log(t.message) : xe.warn(t);
            }
        });
    }
    _processEvent(e1, t, n) {
        const r = this.getOptions(), { sampleRate: i } = r;
        if (!this._isEnabled()) return Et(new Ne("SDK not enabled, will not capture event.", "log"));
        const o = yn(e1), a = vn(e1), s = e1.type || "error", c = `before send for type \`${s}\``;
        if (a && "number" == typeof i && Math.random() > i) return this.recordDroppedEvent("sample_rate", "error", e1), Et(new Ne(`Discarding event because it's not included in the random sample (sampling rate = ${i})`, "log"));
        const l = "replay_event" === s ? "replay" : s;
        return this._prepareEvent(e1, t, n).then((n)=>{
            if (null === n) throw this.recordDroppedEvent("event_processor", l, e1), new Ne("An event processor returned `null`, will not send event.", "log");
            if (t.data && !0 === t.data.__sentry__) return n;
            const i = function(e1, t, n) {
                const { beforeSend: r, beforeSendTransaction: i } = e1;
                if (vn(t) && r) return r(t, n);
                if (yn(t) && i) return i(t, n);
                return t;
            }(r, n, t);
            return function(e1, t) {
                const n = `${t} must return \`null\` or a valid event.`;
                if (le(e1)) return e1.then((e1)=>{
                    if (!se(e1) && null !== e1) throw new Ne(n);
                    return e1;
                }, (e1)=>{
                    throw new Ne(`${t} rejected with ${e1}`);
                });
                if (!se(e1) && null !== e1) throw new Ne(n);
                return e1;
            }(i, c);
        }).then((r)=>{
            if (null === r) throw this.recordDroppedEvent("before_send", l, e1), new Ne(`${c} returned \`null\`, will not send event.`, "log");
            const i = n && n.getSession();
            !o && i && this._updateSessionFromEvent(i, r);
            const a = r.transaction_info;
            if (o && a && r.transaction !== e1.transaction) {
                const e1 = "custom";
                r.transaction_info = {
                    ...a,
                    source: e1
                };
            }
            return this.sendEvent(r, t), r;
        }).then(null, (e1)=>{
            if (e1 instanceof Ne) throw e1;
            throw this.captureException(e1, {
                data: {
                    __sentry__: !0
                },
                originalException: e1
            }), new Ne(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e1}`);
        });
    }
    _process(e1) {
        this._numProcessing++, e1.then((e1)=>(this._numProcessing--, e1), (e1)=>(this._numProcessing--, e1));
    }
    _sendEnvelope(e1) {
        if (this._transport && this._dsn) return this.emit("beforeEnvelope", e1), this._transport.send(e1).then(null, (e1)=>{
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.error("Error while sending event:", e1);
        });
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.error("Transport disabled");
    }
    _clearOutcomes() {
        const e1 = this._outcomes;
        return this._outcomes = {}, Object.keys(e1).map((t)=>{
            const [n, r] = t.split(":");
            return {
                reason: n,
                category: r,
                quantity: e1[t]
            };
        });
    }
}
function vn(e1) {
    return void 0 === e1.type;
}
function yn(e1) {
    return "transaction" === e1.type;
}
const _n = 30;
function bn(e1, t, n = Tt(e1.bufferSize || _n)) {
    let r = {};
    function i(i) {
        const o = [];
        if (Rt(i, (t, n)=>{
            const i = $t(n);
            if (function(e1, t, n = Date.now()) {
                return function(e1, t) {
                    return e1[t] || e1.all || 0;
                }(e1, t) > n;
            }(r, i)) {
                const r = wn(t, n);
                e1.recordDroppedEvent("ratelimit_backoff", i, r);
            } else o.push(t);
        }), 0 === o.length) return kt();
        const a = Nt(i[0], o), s = (t)=>{
            Rt(a, (n, r)=>{
                const i = wn(n, r);
                e1.recordDroppedEvent(t, $t(r), i);
            });
        };
        return n.add(()=>t({
                body: Ft(a, e1.textEncoder)
            }).then((e1)=>(void 0 !== e1.statusCode && (e1.statusCode < 200 || e1.statusCode >= 300) && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn(`Sentry responded with status code ${e1.statusCode} to sent event.`), r = Yt(r, e1), e1), (e1)=>{
                throw s("network_error"), e1;
            })).then((e1)=>e1, (e1)=>{
            if (e1 instanceof Ne) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.error("Skipped sending event because buffer is full."), s("queue_overflow"), kt();
            throw e1;
        });
    }
    return i.__sentry__baseTransport__ = !0, {
        send: i,
        flush: (e1)=>n.drain(e1)
    };
}
function wn(e1, t) {
    if ("event" === t || "transaction" === t) return Array.isArray(e1) ? e1[1] : void 0;
}
const Sn = "7.60.1";
let kn;
class En {
    constructor(){
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
            Function.prototype.toString = function(...e1) {
                const t = Fe(this) || this;
                return kn.apply(t, e1);
            };
        } catch (e1) {}
    }
}
En.__initStatic();
const Mn = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/
], Tn = [
    /^.*healthcheck.*$/,
    /^.*healthy.*$/,
    /^.*live.*$/,
    /^.*ready.*$/,
    /^.*heartbeat.*$/,
    /^.*\/health$/,
    /^.*\/healthz$/
];
class Cn {
    static __initStatic() {
        this.id = "InboundFilters";
    }
    __init() {
        this.name = Cn.id;
    }
    constructor(e1 = {}){
        this._options = e1, Cn.prototype.__init.call(this);
    }
    setupOnce(e1, t) {
        const n = (e1)=>{
            const n = t();
            if (n) {
                const t = n.getIntegration(Cn);
                if (t) {
                    const r = n.getClient(), i = r ? r.getOptions() : {}, o = function(e1 = {}, t = {}) {
                        return {
                            allowUrls: [
                                ...e1.allowUrls || [],
                                ...t.allowUrls || []
                            ],
                            denyUrls: [
                                ...e1.denyUrls || [],
                                ...t.denyUrls || []
                            ],
                            ignoreErrors: [
                                ...e1.ignoreErrors || [],
                                ...t.ignoreErrors || [],
                                ...e1.disableErrorDefaults ? [] : Mn
                            ],
                            ignoreTransactions: [
                                ...e1.ignoreTransactions || [],
                                ...t.ignoreTransactions || [],
                                ...e1.disableTransactionDefaults ? [] : Tn
                            ],
                            ignoreInternal: void 0 === e1.ignoreInternal || e1.ignoreInternal
                        };
                    }(t._options, i);
                    return function(e1, t) {
                        if (t.ignoreInternal && function(e1) {
                            try {
                                return "SentryError" === e1.exception.values[0].type;
                            } catch (e1) {}
                            return !1;
                        }(e1)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${gt(e1)}`), !0;
                        if (function(e1, t) {
                            if (e1.type || !t || !t.length) return !1;
                            return (function(e1) {
                                if (e1.message) return [
                                    e1.message
                                ];
                                if (e1.exception) {
                                    const { values: t } = e1.exception;
                                    try {
                                        const { type: e1 = "", value: n = "" } = t && t[t.length - 1] || {};
                                        return [
                                            `${n}`,
                                            `${e1}: ${n}`
                                        ];
                                    } catch (t) {
                                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.error(`Cannot extract message for event ${gt(e1)}`), [];
                                    }
                                }
                                return [];
                            })(e1).some((e1)=>fe(e1, t));
                        }(e1, t.ignoreErrors)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${gt(e1)}`), !0;
                        if (function(e1, t) {
                            if ("transaction" !== e1.type || !t || !t.length) return !1;
                            const n = e1.transaction;
                            return !!n && fe(n, t);
                        }(e1, t.ignoreTransactions)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${gt(e1)}`), !0;
                        if (function(e1, t) {
                            if (!t || !t.length) return !1;
                            const n = On(e1);
                            return !!n && fe(n, t);
                        }(e1, t.denyUrls)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${gt(e1)}.\nUrl: ${On(e1)}`), !0;
                        if (!function(e1, t) {
                            if (!t || !t.length) return !0;
                            const n = On(e1);
                            return !n || fe(n, t);
                        }(e1, t.allowUrls)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${gt(e1)}.\nUrl: ${On(e1)}`), !0;
                        return !1;
                    }(e1, o) ? null : e1;
                }
            }
            return e1;
        };
        n.id = this.name, e1(n);
    }
}
function On(e1) {
    try {
        let t;
        try {
            t = e1.exception.values[0].stacktrace.frames;
        } catch (e1) {}
        return t ? function(e1 = []) {
            for(let t = e1.length - 1; t >= 0; t--){
                const n = e1[t];
                if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null;
            }
            return null;
        }(t) : null;
    } catch (t) {
        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.error(`Cannot extract url for event ${gt(e1)}`), null;
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
function Ln(e1, t = {}, n) {
    if ("function" != typeof e1) return e1;
    try {
        const t = e1.__sentry_wrapped__;
        if (t) return t;
        if (Fe(e1)) return e1;
    } catch (t) {
        return e1;
    }
    const r = function() {
        const r = Array.prototype.slice.call(arguments);
        try {
            n && "function" == typeof n && n.apply(this, arguments);
            const i = r.map((e1)=>Ln(e1, t));
            return e1.apply(this, i);
        } catch (e1) {
            throw An++, setTimeout(()=>{
                An--;
            }), i = (n)=>{
                var i, o;
                n.addEventProcessor((e1)=>(t.mechanism && (mt(e1, void 0, void 0), vt(e1, t.mechanism)), e1.extra = {
                        ...e1.extra,
                        arguments: r
                    }, e1)), i = e1, on().captureException(i, {
                    captureContext: o
                });
            }, on().withScope(i), e1;
        }
        var i;
    };
    try {
        for(const t in e1)Object.prototype.hasOwnProperty.call(e1, t) && (r[t] = e1[t]);
    } catch (e1) {}
    Be(r, e1), Re(e1, "__sentry_wrapped__", r);
    try {
        Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
            get: ()=>e1.name
        });
    } catch (e1) {}
    return r;
}
function Dn(e1, t) {
    const n = In(e1, t), r = {
        type: t && t.name,
        value: Bn(t)
    };
    return n.length && (r.stacktrace = {
        frames: n
    }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r;
}
function Nn(e1, t) {
    return {
        exception: {
            values: [
                Dn(e1, t)
            ]
        }
    };
}
function In(e1, t) {
    const n = t.stacktrace || t.stack || "", r = function(e1) {
        if (e1) {
            if ("number" == typeof e1.framesToPop) return e1.framesToPop;
            if (Rn.test(e1.message)) return 1;
        }
        return 0;
    }(t);
    try {
        return e1(n, r);
    } catch (e1) {}
    return [];
}
const Rn = /Minified React error #\d+;/i;
function Bn(e1) {
    const t = e1 && e1.message;
    return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message";
}
function Fn(e1, t, n, r, i) {
    let o;
    if (re(t) && t.error) return Nn(e1, t.error);
    if (ie(t) || ne(t, "DOMException")) {
        const i = t;
        if ("stack" in t) o = Nn(e1, t);
        else {
            const t = i.name || (ie(i) ? "DOMError" : "DOMException"), a = i.message ? `${t}: ${i.message}` : t;
            o = Un(e1, a, n, r), mt(o, a);
        }
        return "code" in i && (o.tags = {
            ...o.tags,
            "DOMException.code": `${i.code}`
        }), o;
    }
    if (te(t)) return Nn(e1, t);
    if (se(t) || ce(t)) return o = function(e1, t, n, r) {
        const i = on().getClient(), o = i && i.getOptions().normalizeDepth, a = {
            exception: {
                values: [
                    {
                        type: ce(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                        value: Vn(t, {
                            isUnhandledRejection: r
                        })
                    }
                ]
            },
            extra: {
                __serialized__: bt(t, o)
            }
        };
        if (n) {
            const t = In(e1, n);
            t.length && (a.exception.values[0].stacktrace = {
                frames: t
            });
        }
        return a;
    }(e1, t, n, i), vt(o, {
        synthetic: !0
    }), o;
    return o = Un(e1, t, n, r), mt(o, `${t}`, void 0), vt(o, {
        synthetic: !0
    }), o;
}
function Un(e1, t, n, r) {
    const i = {
        message: t
    };
    if (r && n) {
        const r = In(e1, n);
        r.length && (i.exception = {
            values: [
                {
                    value: t,
                    stacktrace: {
                        frames: r
                    }
                }
            ]
        });
    }
    return i;
}
function Vn(e1, { isUnhandledRejection: t }) {
    const n = function(e1, t = 40) {
        const n = Object.keys(Ue(e1));
        if (n.sort(), !n.length) return "[object has no keys]";
        if (n[0].length >= t) return de(n[0], t);
        for(let e1 = n.length; e1 > 0; e1--){
            const r = n.slice(0, e1).join(", ");
            if (!(r.length > t)) return e1 === n.length ? r : de(r, t);
        }
        return "";
    }(e1), r = t ? "promise rejection" : "exception";
    if (re(e1)) return `Event \`ErrorEvent\` captured as ${r} with message \`${e1.message}\``;
    if (ce(e1)) return `Event \`${function(e1) {
        try {
            const t = Object.getPrototypeOf(e1);
            return t ? t.constructor.name : void 0;
        } catch (e1) {}
    }(e1)}\` (type=${e1.type}) captured as ${r}`;
    return `Object captured as ${r} with keys: ${n}`;
}
const $n = 1024, Gn = "Breadcrumbs";
class qn {
    static __initStatic() {
        this.id = Gn;
    }
    __init() {
        this.name = qn.id;
    }
    constructor(e1){
        qn.prototype.__init.call(this), this.options = {
            console: !0,
            dom: !0,
            fetch: !0,
            history: !0,
            sentry: !0,
            xhr: !0,
            ...e1
        };
    }
    setupOnce() {
        this.options.console && nt("console", Yn), this.options.dom && nt("dom", function(e1) {
            function t(t) {
                let n, r = "object" == typeof e1 ? e1.serializeAttribute : void 0, i = "object" == typeof e1 && "number" == typeof e1.maxStringLength ? e1.maxStringLength : void 0;
                i && i > $n && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${i} was configured. Sentry will use 1024 instead.`), i = $n), "string" == typeof r && (r = [
                    r
                ]);
                try {
                    const e1 = t.event;
                    n = function(e1) {
                        return !!e1 && !!e1.target;
                    }(e1) ? Me(e1.target, {
                        keyAttrs: r,
                        maxStringLength: i
                    }) : Me(e1, {
                        keyAttrs: r,
                        maxStringLength: i
                    });
                } catch (e1) {
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
    addSentryBreadcrumb(e1) {
        this.options.sentry && on().addBreadcrumb({
            category: "sentry." + ("transaction" === e1.type ? "transaction" : "event"),
            event_id: e1.event_id,
            level: e1.level,
            message: gt(e1)
        }, {
            event: e1
        });
    }
}
function Yn(e1) {
    for(let t = 0; t < e1.args.length; t++)if ("ref=Ref<" === e1.args[t]) {
        e1.args[t + 1] = "viewRef";
        break;
    }
    const t = {
        category: "console",
        data: {
            arguments: e1.args,
            logger: "console"
        },
        level: (n = e1.level, "warn" === n ? "warning" : Ot.includes(n) ? n : "log"),
        message: he(e1.args, " ")
    };
    var n;
    if ("assert" === e1.level) {
        if (!1 !== e1.args[0]) return;
        t.message = `Assertion failed: ${he(e1.args.slice(1), " ") || "console.assert"}`, t.data.arguments = e1.args.slice(1);
    }
    on().addBreadcrumb(t, {
        input: e1.args,
        level: e1.level
    });
}
function Jn(e1) {
    const { startTimestamp: t, endTimestamp: n } = e1, r = e1.xhr[Xe];
    if (!t || !n || !r) return;
    const { method: i, url: o, status_code: a, body: s } = r, c = {
        method: i,
        url: o,
        status_code: a
    }, l = {
        xhr: e1.xhr,
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
function Wn(e1) {
    const { startTimestamp: t, endTimestamp: n } = e1;
    if (n && (!e1.fetchData.url.match(/sentry_key/) || "POST" !== e1.fetchData.method)) {
        if (e1.error) {
            const r = e1.fetchData, i = {
                data: e1.error,
                input: e1.args,
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
                ...e1.fetchData,
                status_code: e1.response && e1.response.status
            }, i = {
                input: e1.args,
                response: e1.response,
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
}
function zn(e1) {
    let t = e1.from, n = e1.to;
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
    constructor(e1){
        const t = xn.SENTRY_SDK_SOURCE || "npm";
        e1._metadata = e1._metadata || {}, e1._metadata.sdk = e1._metadata.sdk || {
            name: "sentry.javascript.browser",
            packages: [
                {
                    name: `${t}:@sentry/browser`,
                    version: Sn
                }
            ],
            version: Sn
        }, super(e1), e1.sendClientReports && xn.document && xn.document.addEventListener("visibilitychange", ()=>{
            "hidden" === xn.document.visibilityState && this._flushOutcomes();
        });
    }
    eventFromException(e1, t) {
        return function(e1, t, n, r) {
            const i = Fn(e1, t, n && n.syntheticException || void 0, r);
            return vt(i), i.level = "error", n && n.event_id && (i.event_id = n.event_id), kt(i);
        }(this._options.stackParser, e1, t, this._options.attachStacktrace);
    }
    eventFromMessage(e1, t = "info", n) {
        return function(e1, t, n = "info", r, i) {
            const o = Un(e1, t, r && r.syntheticException || void 0, i);
            return o.level = n, r && r.event_id && (o.event_id = r.event_id), kt(o);
        }(this._options.stackParser, e1, t, n, this._options.attachStacktrace);
    }
    sendEvent(e1, t) {
        const n = this.getIntegrationById(Gn);
        n && n.addSentryBreadcrumb && n.addSentryBreadcrumb(e1), super.sendEvent(e1, t);
    }
    captureUserFeedback(e1) {
        if (!this._isEnabled()) return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn("SDK not enabled, will not capture user feedback."));
        const t = function(e1, { metadata: t, tunnel: n, dsn: r }) {
            const i = {
                event_id: e1.event_id,
                sent_at: (new Date).toISOString(),
                ...t && t.sdk && {
                    sdk: {
                        name: t.sdk.name,
                        version: t.sdk.version
                    }
                },
                ...!!n && !!r && {
                    dsn: je(r)
                }
            }, o = function(e1) {
                return [
                    {
                        type: "user_report"
                    },
                    e1
                ];
            }(e1);
            return Nt(i, [
                o
            ]);
        }(e1, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel
        });
        this._sendEnvelope(t);
    }
    _prepareEvent(e1, t, n) {
        return e1.platform = e1.platform || "javascript", super._prepareEvent(e1, t, n);
    }
    _flushOutcomes() {
        const e1 = this._clearOutcomes();
        if (0 === e1.length) return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.log("No outcomes to send"));
        if (!this._dsn) return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.log("No dsn provided, will not send outcomes"));
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.log("Sending outcomes:", e1);
        const t = (n = e1, Nt((r = this._options.tunnel && je(this._dsn)) ? {
            dsn: r
        } : {}, [
            [
                {
                    type: "client_report"
                },
                {
                    timestamp: i || Lt(),
                    discarded_events: n
                }
            ]
        ]));
        var n, r, i;
        this._sendEnvelope(t);
    }
}
let Qn;
function Kn(e1, t = function() {
    if (Qn) return Qn;
    if (ze(xn.fetch)) return Qn = xn.fetch.bind(xn);
    const e1 = xn.document;
    let t = xn.fetch;
    if (e1 && "function" == typeof e1.createElement) try {
        const n = e1.createElement("iframe");
        n.hidden = !0, e1.head.appendChild(n);
        const r = n.contentWindow;
        r && r.fetch && (t = r.fetch), e1.head.removeChild(n);
    } catch (e1) {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e1);
    }
    return Qn = t.bind(xn);
}()) {
    let n = 0, r = 0;
    return bn(e1, function(i) {
        const o = i.body.length;
        n += o, r++;
        const a = {
            body: i.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: e1.headers,
            keepalive: n <= 6e4 && r < 15,
            ...e1.fetchOptions
        };
        try {
            return t(e1.url, a).then((e1)=>(n -= o, r--, {
                    statusCode: e1.status,
                    headers: {
                        "x-sentry-rate-limits": e1.headers.get("X-Sentry-Rate-Limits"),
                        "retry-after": e1.headers.get("Retry-After")
                    }
                }));
        } catch (e1) {
            return Qn = void 0, n -= o, r--, Et(e1);
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
    constructor(e1){
        Xn.prototype.__init.call(this), Xn.prototype.__init2.call(this), this._options = {
            onerror: !0,
            onunhandledrejection: !0,
            ...e1
        };
    }
    setupOnce() {
        Error.stackTraceLimit = 50;
        const e1 = this._options;
        for(const n in e1){
            const r = this._installFunc[n];
            r && e1[n] && (t = n, ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.log(`Global Handler attached: ${t}`), r(), this._installFunc[n] = void 0);
        }
        var t;
    }
}
function Zn() {
    nt("error", (e1)=>{
        const [t, n, r] = rr();
        if (!t.getIntegration(Xn)) return;
        const { msg: i, url: o, line: a, column: s, error: c } = e1;
        if (jn() || c && c.__sentry_own_request__) return;
        const l = void 0 === c && oe(i) ? function(e1, t, n, r) {
            const i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
            let o = re(e1) ? e1.message : e1, a = "Error";
            const s = o.match(i);
            s && (a = s[1], o = s[2]);
            const c = {
                exception: {
                    values: [
                        {
                            type: a,
                            value: o
                        }
                    ]
                }
            };
            return tr(c, t, n, r);
        }(i, o, a, s) : tr(Fn(n, c || i, void 0, r, !1), o, a, s);
        l.level = "error", nr(t, c, l, "onerror");
    });
}
function er() {
    nt("unhandledrejection", (e1)=>{
        const [t, n, r] = rr();
        if (!t.getIntegration(Xn)) return;
        let i = e1;
        try {
            "reason" in e1 ? i = e1.reason : "detail" in e1 && "reason" in e1.detail && (i = e1.detail.reason);
        } catch (e1) {}
        if (jn() || i && i.__sentry_own_request__) return !0;
        const o = ae(i) ? {
            exception: {
                values: [
                    {
                        type: "UnhandledRejection",
                        value: `Non-Error promise rejection captured with value: ${String(i)}`
                    }
                ]
            }
        } : Fn(n, i, void 0, r, !0);
        o.level = "error", nr(t, i, o, "onunhandledrejection");
    });
}
function tr(e1, t, n, r) {
    const i = e1.exception = e1.exception || {}, o = i.values = i.values || [], a = o[0] = o[0] || {}, s = a.stacktrace = a.stacktrace || {}, c = s.frames = s.frames || [], l = isNaN(parseInt(r, 10)) ? void 0 : r, u = isNaN(parseInt(n, 10)) ? void 0 : n, d = oe(t) && t.length > 0 ? t : function() {
        try {
            return ke.document.location.href;
        } catch (e1) {
            return "";
        }
    }();
    return 0 === c.length && c.push({
        colno: l,
        filename: d,
        function: "?",
        in_app: !0,
        lineno: u
    }), e1;
}
function nr(e1, t, n, r) {
    vt(n, {
        handled: !1,
        type: r
    }), e1.captureEvent(n, {
        originalException: t
    });
}
function rr() {
    const e1 = on(), t = e1.getClient(), n = t && t.getOptions() || {
        stackParser: ()=>[],
        attachStacktrace: !1
    };
    return [
        e1,
        n.stackParser,
        n.attachStacktrace
    ];
}
Xn.__initStatic();
const ir = [
    "EventTarget",
    "Window",
    "Node",
    "ApplicationCache",
    "AudioTrackList",
    "ChannelMergerNode",
    "CryptoOperation",
    "EventSource",
    "FileReader",
    "HTMLUnknownElement",
    "IDBDatabase",
    "IDBRequest",
    "IDBTransaction",
    "KeyOperation",
    "MediaController",
    "MessagePort",
    "ModalWindow",
    "Notification",
    "SVGElementInstance",
    "Screen",
    "TextTrack",
    "TextTrackCue",
    "TextTrackList",
    "WebSocket",
    "WebSocketWorker",
    "Worker",
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequestUpload"
];
class or {
    static __initStatic() {
        this.id = "TryCatch";
    }
    __init() {
        this.name = or.id;
    }
    constructor(e1){
        or.prototype.__init.call(this), this._options = {
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0,
            ...e1
        };
    }
    setupOnce() {
        this._options.setTimeout && Ie(xn, "setTimeout", ar), this._options.setInterval && Ie(xn, "setInterval", ar), this._options.requestAnimationFrame && Ie(xn, "requestAnimationFrame", sr), this._options.XMLHttpRequest && "XMLHttpRequest" in xn && Ie(XMLHttpRequest.prototype, "send", cr);
        const e1 = this._options.eventTarget;
        if (e1) (Array.isArray(e1) ? e1 : ir).forEach(lr);
    }
}
function ar(e1) {
    return function(...t) {
        const n = t[0];
        return t[0] = Ln(n, {
            mechanism: {
                data: {
                    function: Je(e1)
                },
                handled: !0,
                type: "instrument"
            }
        }), e1.apply(this, t);
    };
}
function sr(e1) {
    return function(t) {
        return e1.apply(this, [
            Ln(t, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: Je(e1)
                    },
                    handled: !0,
                    type: "instrument"
                }
            })
        ]);
    };
}
function cr(e1) {
    return function(...t) {
        const n = this;
        return [
            "onload",
            "onerror",
            "onprogress",
            "onreadystatechange"
        ].forEach((e1)=>{
            e1 in n && "function" == typeof n[e1] && Ie(n, e1, function(t) {
                const n = {
                    mechanism: {
                        data: {
                            function: e1,
                            handler: Je(t)
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }, r = Fe(t);
                return r && (n.mechanism.data.handler = Je(r)), Ln(t, n);
            });
        }), e1.apply(this, t);
    };
}
function lr(e1) {
    const t = xn, n = t[e1] && t[e1].prototype;
    n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Ie(n, "addEventListener", function(t) {
        return function(n, r, i) {
            try {
                "function" == typeof r.handleEvent && (r.handleEvent = Ln(r.handleEvent, {
                    mechanism: {
                        data: {
                            function: "handleEvent",
                            handler: Je(r),
                            target: e1
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }));
            } catch (e1) {}
            return t.apply(this, [
                n,
                Ln(r, {
                    mechanism: {
                        data: {
                            function: "addEventListener",
                            handler: Je(r),
                            target: e1
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }),
                i
            ]);
        };
    }), Ie(n, "removeEventListener", function(e1) {
        return function(t, n, r) {
            const i = n;
            try {
                const n = i && i.__sentry_wrapped__;
                n && e1.call(this, t, n, r);
            } catch (e1) {}
            return e1.call(this, t, i, r);
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
    constructor(e1 = {}){
        ur.prototype.__init.call(this), this._key = e1.key || "cause", this._limit = e1.limit || 5;
    }
    setupOnce(e1, t) {
        e1((e1, n)=>{
            const r = t(), i = r.getClient(), o = r.getIntegration(ur);
            if (!i || !o) return e1;
            const a = i.getOptions();
            return ge(Dn, a.stackParser, a.maxValueLength, o._key, o._limit, e1, n), e1;
        });
    }
}
ur.__initStatic();
class dr {
    constructor(){
        dr.prototype.__init.call(this);
    }
    static __initStatic() {
        this.id = "HttpContext";
    }
    __init() {
        this.name = dr.id;
    }
    setupOnce() {
        Kt((e1)=>{
            if (on().getIntegration(dr)) {
                if (!xn.navigator && !xn.location && !xn.document) return e1;
                const t = e1.request && e1.request.url || xn.location && xn.location.href, { referrer: n } = xn.document || {}, { userAgent: r } = xn.navigator || {}, i = {
                    ...e1.request && e1.request.headers,
                    ...n && {
                        Referer: n
                    },
                    ...r && {
                        "User-Agent": r
                    }
                }, o = {
                    ...e1.request,
                    ...t && {
                        url: t
                    },
                    headers: i
                };
                return {
                    ...e1,
                    request: o
                };
            }
            return e1;
        });
    }
}
dr.__initStatic();
class hr {
    constructor(){
        hr.prototype.__init.call(this);
    }
    static __initStatic() {
        this.id = "Dedupe";
    }
    __init() {
        this.name = hr.id;
    }
    setupOnce(e1, t) {
        const n = (e1)=>{
            if (e1.type) return e1;
            const n = t().getIntegration(hr);
            if (n) {
                try {
                    if (function(e1, t) {
                        if (!t) return !1;
                        if (function(e1, t) {
                            const n = e1.message, r = t.message;
                            if (!n && !r) return !1;
                            if (n && !r || !n && r) return !1;
                            if (n !== r) return !1;
                            if (!fr(e1, t)) return !1;
                            if (!pr(e1, t)) return !1;
                            return !0;
                        }(e1, t)) return !0;
                        if (function(e1, t) {
                            const n = gr(t), r = gr(e1);
                            if (!n || !r) return !1;
                            if (n.type !== r.type || n.value !== r.value) return !1;
                            if (!fr(e1, t)) return !1;
                            if (!pr(e1, t)) return !1;
                            return !0;
                        }(e1, t)) return !0;
                        return !1;
                    }(e1, n._previousEvent)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && xe.warn("Event dropped due to being a duplicate of previously captured event."), null;
                } catch (t) {
                    return n._previousEvent = e1;
                }
                return n._previousEvent = e1;
            }
            return e1;
        };
        n.id = this.name, e1(n);
    }
}
function pr(e1, t) {
    let n = mr(e1), r = mr(t);
    if (!n && !r) return !0;
    if (n && !r || !n && r) return !1;
    if (r.length !== n.length) return !1;
    for(let e1 = 0; e1 < r.length; e1++){
        const t = r[e1], i = n[e1];
        if (t.filename !== i.filename || t.lineno !== i.lineno || t.colno !== i.colno || t.function !== i.function) return !1;
    }
    return !0;
}
function fr(e1, t) {
    let n = e1.fingerprint, r = t.fingerprint;
    if (!n && !r) return !0;
    if (n && !r || !n && r) return !1;
    try {
        return !(n.join("") !== r.join(""));
    } catch (e1) {
        return !1;
    }
}
function gr(e1) {
    return e1.exception && e1.exception.values && e1.exception.values[0];
}
function mr(e1) {
    const t = e1.exception;
    if (t) try {
        return t.values[0].stacktrace.frames;
    } catch (e1) {
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
var br = "new", wr = "loading", Sr = "loaded", kr = "joining-meeting", Er = "joined-meeting", Mr = "left-meeting", Tr = "error", Cr = "blocked", Or = "off", Pr = "sendable", xr = "loading", Ar = "interrupted", jr = "playable", Lr = "unknown", Dr = "full", Nr = "lobby", Ir = "none", Rr = "base", Br = "*", Fr = "ejected", Ur = "nbf-room", Vr = "nbf-token", $r = "exp-room", Gr = "exp-token", qr = "no-room", Yr = "meeting-full", Jr = "end-of-life", Wr = "not-allowed", zr = "connection-error", Hr = "cam-in-use", Qr = "mic-in-use", Kr = "cam-mic-in-use", Xr = "permissions", Zr = "undefined-mediadevices", ei = "not-found", ti = "constraints", ni = "unknown", ri = "iframe-ready-for-launch-config", ii = "iframe-launch-config", oi = "theme-updated", ai = "loading", si = "load-attempt-failed", ci = "loaded", li = "started-camera", ui = "camera-error", di = "joining-meeting", hi = "joined-meeting", pi = "left-meeting", fi = "available-devices-updated", gi = "participant-joined", mi = "participant-updated", vi = "participant-left", yi = "participant-counts-updated", _i = "access-state-updated", bi = "meeting-session-summary-updated", wi = "meeting-session-state-updated", Si = "meeting-session-data-error", ki = "waiting-participant-added", Ei = "waiting-participant-updated", Mi = "waiting-participant-removed", Ti = "track-started", Ci = "track-stopped", Oi = "transcription-started", Pi = "transcription-stopped", xi = "transcription-error", Ai = "recording-started", ji = "recording-stopped", Li = "recording-stats", Di = "recording-error", Ni = "recording-upload-completed", Ii = "recording-data", Ri = "app-message", Bi = "transcription-message", Fi = "remote-media-player-started", Ui = "remote-media-player-updated", Vi = "remote-media-player-stopped", $i = "local-screen-share-started", Gi = "local-screen-share-stopped", qi = "local-screen-share-canceled", Yi = "active-speaker-change", Ji = "active-speaker-mode-change", Wi = "network-quality-change", zi = "network-connection", Hi = "cpu-load-change", Qi = "fullscreen", Ki = "exited-fullscreen", Xi = "live-streaming-started", Zi = "live-streaming-updated", eo = "live-streaming-stopped", to = "live-streaming-error", no = "lang-updated", ro = "receive-settings-updated", io = "input-settings-updated", oo = "nonfatal-error", ao = "error", so = 102400, co = "iframe-call-message", lo = "local-screen-start", uo = "register-input-handler", ho = "daily-method-update-live-streaming-endpoints", po = "transmit-log", fo = "daily-custom-track", go = {
    NONE: "none",
    BGBLUR: "background-blur",
    BGIMAGE: "background-image"
}, mo = {
    NONE: "none",
    NOISE_CANCELLATION: "noise-cancellation"
}, vo = {
    PLAY: "play",
    PAUSE: "pause"
}, yo = 10, _o = [
    "jpg",
    "png",
    "jpeg"
], bo = "add-endpoints", wo = "remove-endpoints";
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
    return !!(navigator && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) && (function(e1, t) {
        if (!e1 || !t) return !0;
        switch(e1){
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
    var e1 = document.createElement("iframe");
    return !!e1.requestFullscreen || !!e1.webkitRequestFullscreen;
}
function Oo() {
    var e1 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return !ko() && (e1 ? function() {
        if (jo()) return !1;
        return [
            "Chrome",
            "Firefox"
        ].includes(Lo());
    }() : function() {
        if (jo()) return !1;
        var e1 = Lo();
        if (Eo() && "Safari" === e1) {
            var t = Ro();
            if (15 === t.major && t.minor < 4) return !1;
        }
        return [
            "Chrome",
            "Firefox",
            "Safari"
        ].includes(e1);
    }());
}
var Po = [
    "Chrome",
    "Firefox"
];
function xo() {
    return !ko() && !jo() && "undefined" != typeof AudioWorkletNode && Po.includes(Lo());
}
function Ao() {
    return Mo() && !function() {
        var e1, t = Lo();
        if (!So()) return !0;
        switch(t){
            case "Chrome":
                return (e1 = No()).major && e1.major > 0 && e1.major < 61;
            case "Firefox":
                return (e1 = Bo()).major < 78;
            case "Safari":
                return (e1 = Ro()).major < 12;
            default:
                return !0;
        }
    }();
}
function jo() {
    var e1, t, n = So(), r = n.match(/Mac/) && (!ko() && "undefined" != typeof window && null !== (e1 = window) && void 0 !== e1 && null !== (t = e1.navigator) && void 0 !== t && t.maxTouchPoints ? window.navigator.maxTouchPoints : 0) >= 5;
    return !!(n.match(/Mobi/) || n.match(/Android/) || r) || !!So().match(/DailyAnd\//) || void 0;
}
function Lo() {
    if ("undefined" != typeof window) {
        var e1 = So();
        return Io() ? "Safari" : e1.indexOf("Edge") > -1 ? "Edge" : e1.match(/Chrome\//) ? "Chrome" : e1.indexOf("Safari") > -1 ? "Safari" : e1.indexOf("Firefox") > -1 ? "Firefox" : e1.indexOf("MSIE") > -1 || e1.indexOf(".NET") > -1 ? "IE" : "Unknown Browser";
    }
}
function Do() {
    switch(Lo()){
        case "Chrome":
            return No();
        case "Safari":
            return Ro();
        case "Firefox":
            return Bo();
        case "Edge":
            return function() {
                var e1 = 0, t = 0;
                if ("undefined" != typeof window) {
                    var n = So().match(/Edge\/(\d+).(\d+)/);
                    if (n) try {
                        e1 = parseInt(n[1]), t = parseInt(n[2]);
                    } catch (e1) {}
                }
                return {
                    major: e1,
                    minor: t
                };
            }();
    }
}
function No() {
    var e1 = 0, t = 0, n = 0, r = 0, i = !1;
    if ("undefined" != typeof window) {
        var o = So(), a = o.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);
        if (a) try {
            e1 = parseInt(a[1]), t = parseInt(a[2]), n = parseInt(a[3]), r = parseInt(a[4]), i = o.indexOf("OPR/") > -1;
        } catch (e1) {}
    }
    return {
        major: e1,
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
    var e1 = 0, t = 0, n = 0;
    if ("undefined" != typeof window) {
        var r = So().match(/Version\/(\d+).(\d+)(.(\d+))?/);
        if (r) try {
            e1 = parseInt(r[1]), t = parseInt(r[2]), n = parseInt(r[4]);
        } catch (e1) {}
        else Io() && (e1 = 14, t = 0, n = 3);
    }
    return {
        major: e1,
        minor: t,
        point: n
    };
}
function Bo() {
    var e1 = 0, t = 0;
    if ("undefined" != typeof window) {
        var n = So().match(/Firefox\/(\d+).(\d+)/);
        if (n) try {
            e1 = parseInt(n[1]), t = parseInt(n[2]);
        } catch (e1) {}
    }
    return {
        major: e1,
        minor: t
    };
}
var Fo = function() {
    function e1() {
        r(this, e1);
    }
    return s(e1, [
        {
            key: "addListenerForMessagesFromCallMachine",
            value: function(e1, t, n) {
                Q();
            }
        },
        {
            key: "addListenerForMessagesFromDailyJs",
            value: function(e1, t, n) {
                Q();
            }
        },
        {
            key: "sendMessageToCallMachine",
            value: function(e1, t, n, r) {
                Q();
            }
        },
        {
            key: "sendMessageToDailyJs",
            value: function(e1, t) {
                Q();
            }
        },
        {
            key: "removeListener",
            value: function(e1) {
                Q();
            }
        }
    ]), e1;
}();
function Uo(e1, t) {
    var n = Object.keys(e1);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e1);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e1, t).enumerable;
        })), n.push.apply(n, r);
    }
    return n;
}
function Vo(e1) {
    for(var t = 1; t < arguments.length; t++){
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Uo(Object(n), !0).forEach(function(t) {
            p(e1, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e1, Object.getOwnPropertyDescriptors(n)) : Uo(Object(n)).forEach(function(t) {
            Object.defineProperty(e1, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e1;
}
function $o(e1) {
    var t = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (e1) {
            return !1;
        }
    }();
    return function() {
        var n, r = h(e1);
        if (t) {
            var i = h(this).constructor;
            n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return d(this, n);
    };
}
var Go = function(e1) {
    u(n, Fo);
    var t = $o(n);
    function n() {
        var e1;
        return r(this, n), (e1 = t.call(this))._wrappedListeners = {}, e1._messageCallbacks = {}, e1;
    }
    return s(n, [
        {
            key: "addListenerForMessagesFromCallMachine",
            value: function(e1, t, n) {
                var r = this, i = function(i) {
                    if (i.data && "iframe-call-message" === i.data.what && (!i.data.callFrameId || i.data.callFrameId === t) && (!i.data.from || "module" !== i.data.from)) {
                        var o = Vo({}, i.data);
                        if (delete o.from, o.callbackStamp && r._messageCallbacks[o.callbackStamp]) {
                            var a = o.callbackStamp;
                            r._messageCallbacks[a].call(n, o), delete r._messageCallbacks[a];
                        }
                        delete o.what, delete o.callbackStamp, e1.call(n, o);
                    }
                };
                this._wrappedListeners[e1] = i, window.addEventListener("message", i);
            }
        },
        {
            key: "addListenerForMessagesFromDailyJs",
            value: function(e1, t, n) {
                var r = function(r) {
                    if (!(!r.data || r.data.what !== co || !r.data.action || r.data.from && "module" !== r.data.from || r.data.callFrameId && t && r.data.callFrameId !== t)) {
                        var i = r.data;
                        e1.call(n, i);
                    }
                };
                this._wrappedListeners[e1] = r, window.addEventListener("message", r);
            }
        },
        {
            key: "sendMessageToCallMachine",
            value: function(e1, t, n, r) {
                if (!r) throw new Error("undefined callFrameId. Are you trying to use a DailyCall instance previously destroyed?");
                var i = Vo({}, e1);
                if (i.what = co, i.from = "module", i.callFrameId = r, t) {
                    var o = H();
                    this._messageCallbacks[o] = t, i.callbackStamp = o;
                }
                var a = n ? n.contentWindow : window, s = this._callMachineTargetOrigin(n);
                s && a.postMessage(i, s);
            }
        },
        {
            key: "sendMessageToDailyJs",
            value: function(e1, t) {
                e1.what = co, e1.callFrameId = t, e1.from = "embedded", window.postMessage(e1, this._targetOriginFromWindowLocation());
            }
        },
        {
            key: "removeListener",
            value: function(e1) {
                var t = this._wrappedListeners[e1];
                t && (window.removeEventListener("message", t), delete this._wrappedListeners[e1]);
            }
        },
        {
            key: "forwardPackagedMessageToCallMachine",
            value: function(e1, t, n) {
                var r = Vo({}, e1);
                r.callFrameId = n;
                var i = t ? t.contentWindow : window, o = this._callMachineTargetOrigin(t);
                o && i.postMessage(r, o);
            }
        },
        {
            key: "addListenerForPackagedMessagesFromCallMachine",
            value: function(e1, t) {
                var n = function(n) {
                    if (n.data && "iframe-call-message" === n.data.what && (!n.data.callFrameId || n.data.callFrameId === t) && (!n.data.from || "module" !== n.data.from)) {
                        var r = n.data;
                        e1(r);
                    }
                };
                return this._wrappedListeners[e1] = n, window.addEventListener("message", n), e1;
            }
        },
        {
            key: "removeListenerForPackagedMessagesFromCallMachine",
            value: function(e1) {
                var t = this._wrappedListeners[e1];
                t && (window.removeEventListener("message", t), delete this._wrappedListeners[e1]);
            }
        },
        {
            key: "_callMachineTargetOrigin",
            value: function(e1) {
                return e1 ? e1.src ? new URL(e1.src).origin : void 0 : this._targetOriginFromWindowLocation();
            }
        },
        {
            key: "_targetOriginFromWindowLocation",
            value: function() {
                return "file:" === window.location.protocol ? "*" : window.location.origin;
            }
        }
    ]), n;
}();
function qo(e1) {
    var t = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (e1) {
            return !1;
        }
    }();
    return function() {
        var n, r = h(e1);
        if (t) {
            var i = h(this).constructor;
            n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return d(this, n);
    };
}
var Yo = function(e1) {
    u(n, Fo);
    var t = qo(n);
    function n() {
        var e1;
        return r(this, n), e1 = t.call(this), global.callMachineToDailyJsEmitter = global.callMachineToDailyJsEmitter || new v.EventEmitter, global.dailyJsToCallMachineEmitter = global.dailyJsToCallMachineEmitter || new v.EventEmitter, e1._wrappedListeners = {}, e1._messageCallbacks = {}, e1;
    }
    return s(n, [
        {
            key: "addListenerForMessagesFromCallMachine",
            value: function(e1, t, n) {
                this._addListener(e1, global.callMachineToDailyJsEmitter, n, "received call machine message");
            }
        },
        {
            key: "addListenerForMessagesFromDailyJs",
            value: function(e1, t, n) {
                this._addListener(e1, global.dailyJsToCallMachineEmitter, n, "received daily-js message");
            }
        },
        {
            key: "sendMessageToCallMachine",
            value: function(e1, t) {
                this._sendMessage(e1, global.dailyJsToCallMachineEmitter, "sending message to call machine", t);
            }
        },
        {
            key: "sendMessageToDailyJs",
            value: function(e1) {
                this._sendMessage(e1, global.callMachineToDailyJsEmitter, "sending message to daily-js");
            }
        },
        {
            key: "removeListener",
            value: function(e1) {
                var t = this._wrappedListeners[e1];
                t && (global.callMachineToDailyJsEmitter.removeListener("message", t), global.dailyJsToCallMachineEmitter.removeListener("message", t), delete this._wrappedListeners[e1]);
            }
        },
        {
            key: "_addListener",
            value: function(e1, t, n, r) {
                var i = this, o = function(t) {
                    if (t.callbackStamp && i._messageCallbacks[t.callbackStamp]) {
                        var r = t.callbackStamp;
                        i._messageCallbacks[r].call(n, t), delete i._messageCallbacks[r];
                    }
                    e1.call(n, t);
                };
                this._wrappedListeners[e1] = o, t.addListener("message", o);
            }
        },
        {
            key: "_sendMessage",
            value: function(e1, t, n, r) {
                if (r) {
                    var i = H();
                    this._messageCallbacks[i] = r, e1.callbackStamp = i;
                }
                t.emit("message", e1);
            }
        }
    ]), n;
}(), Jo = "replace", Wo = "shallow-merge", zo = [
    Jo,
    Wo
];
var Ho = function() {
    function e1() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.data, i = t.mergeStrategy, o = void 0 === i ? Jo : i;
        r(this, e1), e1._validateMergeStrategy(o), e1._validateData(n, o), this.mergeStrategy = o, this.data = n;
    }
    return s(e1, [
        {
            key: "isNoOp",
            value: function() {
                return e1.isNoOpUpdate(this.data, this.mergeStrategy);
            }
        }
    ], [
        {
            key: "isNoOpUpdate",
            value: function(e1, t) {
                return 0 === Object.keys(e1).length && t === Wo;
            }
        },
        {
            key: "_validateMergeStrategy",
            value: function(e1) {
                if (!zo.includes(e1)) throw Error("Unrecognized mergeStrategy provided. Options are: [".concat(zo, "]"));
            }
        },
        {
            key: "_validateData",
            value: function(e1, t) {
                if (!function(e1) {
                    if (null == e1 || "object" !== i(e1)) return !1;
                    var t = Object.getPrototypeOf(e1);
                    return null == t || t === Object.prototype;
                }(e1)) throw Error("Meeting session data must be a plain (map-like) object");
                var n;
                try {
                    if (n = JSON.stringify(e1), t === Jo) {
                        var r = JSON.parse(n);
                        N(r, e1) || console.warn("The meeting session data provided will be modified when serialized.", r, e1);
                    } else if (t === Wo) {
                        for(var o in e1)if (Object.hasOwnProperty.call(e1, o) && void 0 !== e1[o]) {
                            var a = JSON.parse(JSON.stringify(e1[o]));
                            N(e1[o], a) || console.warn("At least one key in the meeting session data provided will be modified when serialized.", a, e1[o]);
                        }
                    }
                } catch (e1) {
                    throw Error("Meeting session data must be serializable to JSON: ".concat(e1));
                }
                if (n.length > so) throw Error("Meeting session data is too large (".concat(n.length, " characters). Maximum size suppported is ").concat(so, "."));
            }
        }
    ]), e1;
}();
function Qo(e1, t, n) {
    return Qo = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (e1) {
            return !1;
        }
    }() ? Reflect.construct.bind() : function(e1, t, n) {
        var r = [
            null
        ];
        r.push.apply(r, t);
        var i = new (Function.bind.apply(e1, r));
        return n && l(i, n.prototype), i;
    }, Qo.apply(null, arguments);
}
function Ko(e1) {
    var t = "function" == typeof Map ? new Map : void 0;
    return Ko = function(e1) {
        if (null === e1 || (n = e1, -1 === Function.toString.call(n).indexOf("[native code]"))) return e1;
        var n;
        if ("function" != typeof e1) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
            if (t.has(e1)) return t.get(e1);
            t.set(e1, r);
        }
        function r() {
            return Qo(e1, arguments, h(this).constructor);
        }
        return r.prototype = Object.create(e1.prototype, {
            constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), l(r, e1);
    }, Ko(e1);
}
function Xo(e1) {
    var t = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (e1) {
            return !1;
        }
    }();
    return function() {
        var n, r = h(e1);
        if (t) {
            var i = h(this).constructor;
            n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return d(this, n);
    };
}
var Zo = function() {
    function e1() {
        r(this, e1), this._currentLoad = null;
    }
    return s(e1, [
        {
            key: "load",
            value: function(e1, t, n, r) {
                if (this.loaded) return window._dailyCallObjectSetup(e1), void n(!0);
                !function(e1, t) {
                    window._dailyConfig || (window._dailyConfig = {}), window._dailyConfig.callFrameId = e1, window._dailyConfig.avoidEval = t;
                }(e1, t), this._currentLoad && this._currentLoad.cancel(), this._currentLoad = new ea(function() {
                    n(!1);
                }, r), this._currentLoad.start();
            }
        },
        {
            key: "cancel",
            value: function() {
                this._currentLoad && this._currentLoad.cancel();
            }
        },
        {
            key: "loaded",
            get: function() {
                return this._currentLoad && this._currentLoad.succeeded;
            }
        }
    ]), e1;
}(), ea = function() {
    function e1(t, n) {
        r(this, e1), this._attemptsRemaining = 3, this._currentAttempt = null, this._successCallback = t, this._failureCallback = n;
    }
    return s(e1, [
        {
            key: "start",
            value: function() {
                var e1 = this;
                if (!this._currentAttempt) this._currentAttempt = new ra(this._successCallback, function t(n) {
                    e1._currentAttempt.cancelled || (e1._attemptsRemaining--, e1._failureCallback(n, e1._attemptsRemaining > 0), e1._attemptsRemaining <= 0 || setTimeout(function() {
                        e1._currentAttempt.cancelled || (e1._currentAttempt = new ra(e1._successCallback, t), e1._currentAttempt.start());
                    }, 3e3));
                }), this._currentAttempt.start();
            }
        },
        {
            key: "cancel",
            value: function() {
                this._currentAttempt && this._currentAttempt.cancel();
            }
        },
        {
            key: "cancelled",
            get: function() {
                return this._currentAttempt && this._currentAttempt.cancelled;
            }
        },
        {
            key: "succeeded",
            get: function() {
                return this._currentAttempt && this._currentAttempt.succeeded;
            }
        }
    ]), e1;
}(), ta = function(e1) {
    u(n, Ko(Error));
    var t = Xo(n);
    function n() {
        return r(this, n), t.apply(this, arguments);
    }
    return s(n);
}(), na = 2e4, ra = function() {
    function e1(t, n) {
        r(this, e1), this._loadAttemptImpl = ko() || !_dailyConfig.avoidEval ? new ia(t, n) : new oa(t, n);
    }
    var t;
    return s(e1, [
        {
            key: "start",
            value: (t = n(function*() {
                return this._loadAttemptImpl.start();
            }), function() {
                return t.apply(this, arguments);
            })
        },
        {
            key: "cancel",
            value: function() {
                this._loadAttemptImpl.cancel();
            }
        },
        {
            key: "cancelled",
            get: function() {
                return this._loadAttemptImpl.cancelled;
            }
        },
        {
            key: "succeeded",
            get: function() {
                return this._loadAttemptImpl.succeeded;
            }
        }
    ]), e1;
}(), ia = function() {
    function e1(t, n) {
        r(this, e1), this.cancelled = !1, this.succeeded = !1, this._networkTimedOut = !1, this._networkTimeout = null, this._iosCache = "undefined" != typeof iOSCallObjectBundleCache && iOSCallObjectBundleCache, this._refetchHeaders = null, this._successCallback = t, this._failureCallback = n;
    }
    var t, i, o, a;
    return s(e1, [
        {
            key: "start",
            value: (a = n(function*() {
                var e1 = X();
                !(yield this._tryLoadFromIOSCache(e1)) && this._loadFromNetwork(e1);
            }), function() {
                return a.apply(this, arguments);
            })
        },
        {
            key: "cancel",
            value: function() {
                clearTimeout(this._networkTimeout), this.cancelled = !0;
            }
        },
        {
            key: "_tryLoadFromIOSCache",
            value: (o = n(function*(e1) {
                if (!this._iosCache) return !1;
                try {
                    var t = yield this._iosCache.get(e1);
                    return !!this.cancelled || !!t && (t.code ? (Function('"use strict";' + t.code)(), this.succeeded = !0, this._successCallback(), !0) : (this._refetchHeaders = t.refetchHeaders, !1));
                } catch (e1) {
                    return !1;
                }
            }), function(e1) {
                return o.apply(this, arguments);
            })
        },
        {
            key: "_loadFromNetwork",
            value: (i = n(function*(e1) {
                var t = this;
                this._networkTimeout = setTimeout(function() {
                    t._networkTimedOut = !0, t._failureCallback("Timed out (>".concat(na, " ms) when loading call object bundle ").concat(e1));
                }, na);
                try {
                    var n = this._refetchHeaders ? {
                        headers: this._refetchHeaders
                    } : {}, r = yield fetch(e1, n);
                    if (clearTimeout(this._networkTimeout), this.cancelled || this._networkTimedOut) throw new ta;
                    var i = yield this._getBundleCodeFromResponse(e1, r);
                    if (this.cancelled) throw new ta;
                    Function('"use strict";' + i)(), this._iosCache && this._iosCache.set(e1, i, r.headers), this.succeeded = !0, this._successCallback();
                } catch (t) {
                    if (clearTimeout(this._networkTimeout), t instanceof ta || this.cancelled || this._networkTimedOut) return;
                    this._failureCallback("Failed to load call object bundle ".concat(e1, ": ").concat(t));
                }
            }), function(e1) {
                return i.apply(this, arguments);
            })
        },
        {
            key: "_getBundleCodeFromResponse",
            value: (t = n(function*(e1, t) {
                if (t.ok) return yield t.text();
                if (this._iosCache && 304 === t.status) return (yield this._iosCache.renew(e1, t.headers)).code;
                throw new Error("Received ".concat(t.status, " response"));
            }), function(e1, n) {
                return t.apply(this, arguments);
            })
        }
    ]), e1;
}(), oa = function() {
    function e1(t, n) {
        r(this, e1), this.cancelled = !1, this.succeeded = !1, this._successCallback = t, this._failureCallback = n, this._attemptId = H(), this._networkTimeout = null, this._scriptElement = null;
    }
    var t;
    return s(e1, [
        {
            key: "start",
            value: (t = n(function*() {
                window._dailyCallMachineLoadWaitlist || (window._dailyCallMachineLoadWaitlist = new Set);
                var e1 = X();
                "object" === ("undefined" == typeof document ? "undefined" : i(document)) ? this._startLoading(e1) : this._failureCallback("Call object bundle must be loaded in a DOM/web context");
            }), function() {
                return t.apply(this, arguments);
            })
        },
        {
            key: "cancel",
            value: function() {
                this._stopLoading(), this.cancelled = !0;
            }
        },
        {
            key: "_startLoading",
            value: function(e1) {
                var t = this;
                this._signUpForCallMachineLoadWaitlist(), this._networkTimeout = setTimeout(function() {
                    t._stopLoading(), t._failureCallback("Timed out (>".concat(na, " ms) when loading call object bundle ").concat(e1));
                }, na);
                var r = document.getElementsByTagName("head")[0], i = document.createElement("script");
                this._scriptElement = i, i.onload = n(function*() {
                    t._stopLoading(), t.succeeded = !0, t._successCallback();
                }), i.onerror = function() {
                    var e1 = n(function*(e1) {
                        t._stopLoading(), t._failureCallback("Failed to load call object bundle ".concat(e1.target.src));
                    });
                    return function(t) {
                        return e1.apply(this, arguments);
                    };
                }(), i.src = e1, r.appendChild(i);
            }
        },
        {
            key: "_stopLoading",
            value: function() {
                this._withdrawFromCallMachineLoadWaitlist(), clearTimeout(this._networkTimeout), this._scriptElement && (this._scriptElement.onload = null, this._scriptElement.onerror = null);
            }
        },
        {
            key: "_signUpForCallMachineLoadWaitlist",
            value: function() {
                window._dailyCallMachineLoadWaitlist.add(this._attemptId);
            }
        },
        {
            key: "_withdrawFromCallMachineLoadWaitlist",
            value: function() {
                window._dailyCallMachineLoadWaitlist.delete(this._attemptId);
            }
        }
    ]), e1;
}(), aa = function(e1, t, n) {
    return !0 === la(e1.local, t, n);
}, sa = function(e1, t, n) {
    return e1.local.streams && e1.local.streams[t] && e1.local.streams[t].stream && e1.local.streams[t].stream["get".concat("video" === n ? "Video" : "Audio", "Tracks")]()[0];
}, ca = function(e1, t, n, r) {
    var i = ua(e1, t, n, r);
    return i && i.pendingTrack;
}, la = function(e1, t, n) {
    if (!e1) return !1;
    var r = function(e1) {
        switch(e1){
            case "avatar":
                return !0;
            case "staged":
                return e1;
            default:
                return !!e1;
        }
    }, i = e1.public.subscribedTracks;
    return i && i[t] ? -1 === [
        "cam-audio",
        "cam-video",
        "screen-video",
        "screen-audio",
        "rmpAudio",
        "rmpVideo"
    ].indexOf(n) && i[t].custom ? [
        !0,
        "staged"
    ].includes(i[t].custom) ? r(i[t].custom) : r(i[t].custom[n]) : r(i[t][n]) : !i || r(i.ALL);
}, ua = function(e1, t, n, r) {
    var i = Object.values(e1.streams || {}).filter(function(e1) {
        return e1.participantId === t && e1.type === n && e1.pendingTrack && e1.pendingTrack.kind === r;
    }).sort(function(e1, t) {
        return new Date(t.starttime) - new Date(e1.starttime);
    });
    return i && i[0];
}, da = function(e1, t) {
    var n = e1.local.public.customTracks;
    if (n && n[t]) return n[t].track;
};
function ha(e1) {
    for(var t = store.getState(), n = 0, r = [
        "cam",
        "screen"
    ]; n < r.length; n++)for(var i = r[n], o = 0, a = [
        "video",
        "audio"
    ]; o < a.length; o++){
        var s = a[o], c = "cam" === i ? s : "screen".concat(s.charAt(0).toUpperCase() + s.slice(1)), l = e1.tracks[c];
        if (l) {
            var u = e1.local ? sa(t, i, s) : ca(t, e1.session_id, i, s);
            "playable" === l.state && (l.track = u), l.persistentTrack = u;
        }
    }
}
function pa(e1) {
    try {
        var t = store.getState();
        for(var n in e1.tracks)if (!fa(n)) {
            var r = e1.tracks[n].kind;
            if (r) {
                var i = e1.tracks[n];
                if (i) {
                    var o = e1.local ? da(t, n) : ca(t, e1.session_id, n, r);
                    "playable" === i.state && (e1.tracks[n].track = o), i.persistentTrack = o;
                }
            } else console.error("unknown type for custom track");
        }
    } catch (e1) {
        console.error(e1);
    }
}
function fa(e1) {
    return [
        "video",
        "audio",
        "screenVideo",
        "screenAudio"
    ].includes(e1);
}
function ga(e1, t) {
    var n = store.getState();
    if (e1.local) {
        if (e1.audio) try {
            e1.audioTrack = n.local.streams.cam.stream.getAudioTracks()[0], e1.audioTrack || (e1.audio = !1);
        } catch (e1) {}
        if (e1.video) try {
            e1.videoTrack = n.local.streams.cam.stream.getVideoTracks()[0], e1.videoTrack || (e1.video = !1);
        } catch (e1) {}
        if (e1.screen) try {
            e1.screenVideoTrack = n.local.streams.screen.stream.getVideoTracks()[0], e1.screenAudioTrack = n.local.streams.screen.stream.getAudioTracks()[0], e1.screenVideoTrack || e1.screenAudioTrack || (e1.screen = !1);
        } catch (e1) {}
    } else {
        var r = !0;
        try {
            var i = n.participants[e1.session_id];
            i && i.public && i.public.rtcType && "peer-to-peer" === i.public.rtcType.impl && i.private && ![
                "connected",
                "completed"
            ].includes(i.private.peeringState) && (r = !1);
        } catch (e1) {
            console.error(e1);
        }
        if (!r) return e1.audio = !1, e1.audioTrack = !1, e1.video = !1, e1.videoTrack = !1, e1.screen = !1, void (e1.screenTrack = !1);
        try {
            n.streams;
            if (e1.audio && aa(n, e1.session_id, "cam-audio")) {
                var o = ca(n, e1.session_id, "cam", "audio");
                o && (t && t.audioTrack && t.audioTrack.id === o.id ? e1.audioTrack = o : o.muted || (e1.audioTrack = o)), e1.audioTrack || (e1.audio = !1);
            }
            if (e1.video && aa(n, e1.session_id, "cam-video")) {
                var a = ca(n, e1.session_id, "cam", "video");
                a && (t && t.videoTrack && t.videoTrack.id === a.id ? e1.videoTrack = a : a.muted || (e1.videoTrack = a)), e1.videoTrack || (e1.video = !1);
            }
            if (e1.screen && aa(n, e1.session_id, "screen-audio")) {
                var s = ca(n, e1.session_id, "screen", "audio");
                s && (t && t.screenAudioTrack && t.screenAudioTrack.id === s.id ? e1.screenAudioTrack = s : s.muted || (e1.screenAudioTrack = s));
            }
            if (e1.screen && aa(n, e1.session_id, "screen-video")) {
                var c = ca(n, e1.session_id, "screen", "video");
                c && (t && t.screenVideoTrack && t.screenVideoTrack.id === c.id ? e1.screenVideoTrack = c : c.muted || (e1.screenVideoTrack = c));
            }
            e1.screenVideoTrack || e1.screenAudioTrack || (e1.screen = !1);
        } catch (e1) {
            console.error("unexpected error matching up tracks", e1);
        }
    }
}
function ma(e1, t) {
    var n = "undefined" != typeof Symbol && e1[Symbol.iterator] || e1["@@iterator"];
    if (!n) {
        if (Array.isArray(e1) || (n = function(e1, t) {
            if (!e1) return;
            if ("string" == typeof e1) return va(e1, t);
            var n = Object.prototype.toString.call(e1).slice(8, -1);
            "Object" === n && e1.constructor && (n = e1.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e1);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return va(e1, t);
        }(e1)) || t && e1 && "number" == typeof e1.length) {
            n && (e1 = n);
            var r = 0, i = function() {};
            return {
                s: i,
                n: function() {
                    return r >= e1.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e1[r++]
                    };
                },
                e: function(e1) {
                    throw e1;
                },
                f: i
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o, a = !0, s = !1;
    return {
        s: function() {
            n = n.call(e1);
        },
        n: function() {
            var e1 = n.next();
            return a = e1.done, e1;
        },
        e: function(e1) {
            s = !0, o = e1;
        },
        f: function() {
            try {
                a || null == n.return || n.return();
            } finally{
                if (s) throw o;
            }
        }
    };
}
function va(e1, t) {
    (null == t || t > e1.length) && (t = e1.length);
    for(var n = 0, r = new Array(t); n < t; n++)r[n] = e1[n];
    return r;
}
var ya = new Map, _a = null;
function ba(e1, t) {
    var n = "undefined" != typeof Symbol && e1[Symbol.iterator] || e1["@@iterator"];
    if (!n) {
        if (Array.isArray(e1) || (n = function(e1, t) {
            if (!e1) return;
            if ("string" == typeof e1) return wa(e1, t);
            var n = Object.prototype.toString.call(e1).slice(8, -1);
            "Object" === n && e1.constructor && (n = e1.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e1);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return wa(e1, t);
        }(e1)) || t && e1 && "number" == typeof e1.length) {
            n && (e1 = n);
            var r = 0, i = function() {};
            return {
                s: i,
                n: function() {
                    return r >= e1.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e1[r++]
                    };
                },
                e: function(e1) {
                    throw e1;
                },
                f: i
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o, a = !0, s = !1;
    return {
        s: function() {
            n = n.call(e1);
        },
        n: function() {
            var e1 = n.next();
            return a = e1.done, e1;
        },
        e: function(e1) {
            s = !0, o = e1;
        },
        f: function() {
            try {
                a || null == n.return || n.return();
            } finally{
                if (s) throw o;
            }
        }
    };
}
function wa(e1, t) {
    (null == t || t > e1.length) && (t = e1.length);
    for(var n = 0, r = new Array(t); n < t; n++)r[n] = e1[n];
    return r;
}
var Sa = new Map, ka = null, Ea = 3e3;
function Ma(e1) {
    Ca() ? function(e1) {
        ya.has(e1) || (ya.set(e1, {}), navigator.mediaDevices.enumerateDevices().then(function(t) {
            ya.has(e1) && (ya.get(e1).lastDevicesString = JSON.stringify(t), _a || (_a = function() {
                var e1 = n(function*() {
                    var e1, t = yield navigator.mediaDevices.enumerateDevices(), n = ma(ya.keys());
                    try {
                        for(n.s(); !(e1 = n.n()).done;){
                            var r = e1.value, i = JSON.stringify(t);
                            i !== ya.get(r).lastDevicesString && (ya.get(r).lastDevicesString = i, r(t));
                        }
                    } catch (e1) {
                        n.e(e1);
                    } finally{
                        n.f();
                    }
                });
                return function() {
                    return e1.apply(this, arguments);
                };
            }(), navigator.mediaDevices.addEventListener("devicechange", _a)));
        }));
    }(e1) : function(e1) {
        Sa.has(e1) || (Sa.set(e1, {}), navigator.mediaDevices.enumerateDevices().then(function(t) {
            Sa.has(e1) && (Sa.get(e1).lastDevicesString = JSON.stringify(t), ka || (ka = setInterval(n(function*() {
                var e1, t = yield navigator.mediaDevices.enumerateDevices(), n = ba(Sa.keys());
                try {
                    for(n.s(); !(e1 = n.n()).done;){
                        var r = e1.value, i = JSON.stringify(t);
                        i !== Sa.get(r).lastDevicesString && (Sa.get(r).lastDevicesString = i, r(t));
                    }
                } catch (e1) {
                    n.e(e1);
                } finally{
                    n.f();
                }
            }), Ea)));
        }));
    }(e1);
}
function Ta(e1) {
    Ca() ? function(e1) {
        ya.has(e1) && (ya.delete(e1), 0 === ya.size && _a && (navigator.mediaDevices.removeEventListener("devicechange", _a), _a = null));
    }(e1) : function(e1) {
        Sa.has(e1) && (Sa.delete(e1), 0 === Sa.size && ka && (clearInterval(ka), ka = null));
    }(e1);
}
function Ca() {
    return ko() || void 0 !== navigator.mediaDevices.ondevicechange;
}
var Oa = new Set;
function Pa(e1, t) {
    var n = t.isLocalScreenVideo;
    return e1 && "live" === e1.readyState && !function(e1, t) {
        return (!t.isLocalScreenVideo || "Chrome" !== Lo()) && e1.muted && !Oa.has(e1.id);
    }(e1, {
        isLocalScreenVideo: n
    });
}
var xa, Aa = [
    "videoTrack"
], ja = [
    "result"
], La = [
    "preserveIframe"
];
function Da(e1, t) {
    var n = Object.keys(e1);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e1);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e1, t).enumerable;
        })), n.push.apply(n, r);
    }
    return n;
}
function Na(e1) {
    for(var t = 1; t < arguments.length; t++){
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Da(Object(n), !0).forEach(function(t) {
            p(e1, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e1, Object.getOwnPropertyDescriptors(n)) : Da(Object(n)).forEach(function(t) {
            Object.defineProperty(e1, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e1;
}
function Ia(e1) {
    var t = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (e1) {
            return !1;
        }
    }();
    return function() {
        var n, r = h(e1);
        if (t) {
            var i = h(this).constructor;
            n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return d(this, n);
    };
}
function Ra(e1, t) {
    var n = "undefined" != typeof Symbol && e1[Symbol.iterator] || e1["@@iterator"];
    if (!n) {
        if (Array.isArray(e1) || (n = function(e1, t) {
            if (!e1) return;
            if ("string" == typeof e1) return Ba(e1, t);
            var n = Object.prototype.toString.call(e1).slice(8, -1);
            "Object" === n && e1.constructor && (n = e1.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e1);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ba(e1, t);
        }(e1)) || t && e1 && "number" == typeof e1.length) {
            n && (e1 = n);
            var r = 0, i = function() {};
            return {
                s: i,
                n: function() {
                    return r >= e1.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e1[r++]
                    };
                },
                e: function(e1) {
                    throw e1;
                },
                f: i
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o, a = !0, s = !1;
    return {
        s: function() {
            n = n.call(e1);
        },
        n: function() {
            var e1 = n.next();
            return a = e1.done, e1;
        },
        e: function(e1) {
            s = !0, o = e1;
        },
        f: function() {
            try {
                a || null == n.return || n.return();
            } finally{
                if (s) throw o;
            }
        }
    };
}
function Ba(e1, t) {
    (null == t || t > e1.length) && (t = e1.length);
    for(var n = 0, r = new Array(t); n < t; n++)r[n] = e1[n];
    return r;
}
var Fa = "video", Ua = "voice", Va = ko() ? {
    data: {}
} : {
    data: {},
    topology: "none"
}, $a = {
    present: 0,
    hidden: 0
}, Ga = {
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
}, qa = Object.keys(Ga), Ya = [
    "state",
    "volume",
    "simulcastEncodings"
], Ja = {
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
}, Wa = {
    id: {
        iconPath: "string",
        iconPathDarkMode: "string",
        label: "string",
        tooltip: "string"
    }
}, za = {
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
}, Ha = {
    customIntegrations: {
        validate: ms,
        help: fs()
    },
    customTrayButtons: {
        validate: gs,
        help: "customTrayButtons should be a dictionary of the type ".concat(JSON.stringify(Wa))
    },
    url: {
        validate: function(e1) {
            return "string" == typeof e1;
        },
        help: "url should be a string"
    },
    baseUrl: {
        validate: function(e1) {
            return "string" == typeof e1;
        },
        help: "baseUrl should be a string"
    },
    token: {
        validate: function(e1) {
            return "string" == typeof e1;
        },
        help: "token should be a string",
        queryString: "t"
    },
    dailyConfig: {
        validate: function(e1, t) {
            try {
                return t.validateDailyConfig(e1), window._dailyConfig || (window._dailyConfig = {}), window._dailyConfig.experimentalGetUserMediaConstraintsModify = e1.experimentalGetUserMediaConstraintsModify, window._dailyConfig.userMediaVideoConstraints = e1.userMediaVideoConstraints, window._dailyConfig.userMediaAudioConstraints = e1.userMediaAudioConstraints, window._dailyConfig.callObjectBundleUrlOverride = e1.callObjectBundleUrlOverride, window._dailyConfig.proxyUrl = e1.proxyUrl, window._dailyConfig.iceConfig = e1.iceConfig, !0;
            } catch (e1) {
                console.error("Failed to validate dailyConfig", e1);
            }
            return !1;
        },
        help: "Unsupported dailyConfig. Check error logs for detailed info."
    },
    reactNativeConfig: {
        validate: function(e1) {
            return vs(e1, Ja);
        },
        help: "reactNativeConfig should look like ".concat(JSON.stringify(Ja), ", all fields optional")
    },
    lang: {
        validate: function(e1) {
            return [
                "de",
                "en-us",
                "en",
                "es",
                "fi",
                "fr",
                "it",
                "jp",
                "ka",
                "nl",
                "no",
                "pl",
                "pt",
                "pt-BR",
                "ru",
                "sv",
                "tr",
                "user"
            ].includes(e1);
        },
        help: "language not supported. Options are: de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, pt-BR, ru, sv, tr, user"
    },
    userName: !0,
    userData: {
        validate: function(e1) {
            try {
                return cs(e1), !0;
            } catch (e1) {
                return console.error(e1), !1;
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
        validate: function(e1, t) {
            return t._preloadCache.videoDeviceId = e1, !0;
        }
    },
    audioSource: {
        validate: function(e1, t) {
            return t._preloadCache.audioDeviceId = e1, !0;
        }
    },
    subscribeToTracksAutomatically: {
        validate: function(e1, t) {
            return t._preloadCache.subscribeToTracksAutomatically = e1, !0;
        }
    },
    theme: {
        validate: function(e1) {
            var t = [
                "accent",
                "accentText",
                "background",
                "backgroundAccent",
                "baseText",
                "border",
                "mainAreaBg",
                "mainAreaBgAccent",
                "mainAreaText",
                "supportiveText"
            ], n = function(e1) {
                for(var n = 0, r = Object.keys(e1); n < r.length; n++){
                    var i = r[n];
                    if (!t.includes(i)) return console.error('unsupported color "'.concat(i, '". Valid colors: ').concat(t.join(", "))), !1;
                    if (!e1[i].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i)) return console.error("".concat(i, ' theme color should be provided in valid hex color format. Received: "').concat(e1[i], '"')), !1;
                }
                return !0;
            };
            return "object" === i(e1) && ("light" in e1 && "dark" in e1 || "colors" in e1) ? "light" in e1 && "dark" in e1 ? "colors" in e1.light ? "colors" in e1.dark ? n(e1.light.colors) && n(e1.dark.colors) : (console.error('Dark theme is missing "colors" property.', e1), !1) : (console.error('Light theme is missing "colors" property.', e1), !1) : n(e1.colors) : (console.error('Theme must contain either both "light" and "dark" properties, or "colors".', e1), !1);
        },
        help: "unsupported theme configuration. Check error logs for detailed info."
    },
    layoutConfig: {
        validate: function(e1) {
            if ("grid" in e1) {
                var t = e1.grid;
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
        validate: function(e1) {
            return ls(e1, {
                allowAllParticipantsKey: !1
            });
        },
        help: ps({
            allowAllParticipantsKey: !1
        })
    },
    sendSettings: {
        validate: function(e1, t) {
            return !!function(e1, t) {
                try {
                    return t.validateUpdateSendSettings(e1), !0;
                } catch (e1) {
                    return console.error("Failed to validate send settings", e1), !1;
                }
            }(e1, t) && (t._preloadCache.sendSettings = e1, !0);
        },
        help: "Invalid sendSettings provided. Check error logs for detailed info."
    },
    inputSettings: {
        validate: function(e1, t) {
            return !!us(e1) && (t._preloadCache.inputSettings || (t._preloadCache.inputSettings = {}), ds(e1), e1.audio && (t._preloadCache.inputSettings.audio = e1.audio), e1.video && (t._preloadCache.inputSettings.video = e1.video), !0);
        },
        help: hs()
    },
    layout: {
        validate: function(e1) {
            return "custom-v1" === e1 || "browser" === e1 || "none" === e1;
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
}, Qa = {
    styles: {
        validate: function(e1) {
            for(var t in e1)if ("cam" !== t && "screen" !== t) return !1;
            if (e1.cam) {
                for(var n in e1.cam)if ("div" !== n && "video" !== n) return !1;
            }
            if (e1.screen) {
                for(var r in e1.screen)if ("div" !== r && "video" !== r) return !1;
            }
            return !0;
        },
        help: "styles format should be a subset of: { cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }"
    },
    setSubscribedTracks: {
        validate: function(e1, t) {
            if (t._preloadCache.subscribeToTracksAutomatically) return !1;
            var n = [
                !0,
                !1,
                "staged"
            ];
            if (n.includes(e1) || !ko() && "avatar" === e1) return !0;
            var r = [
                "audio",
                "video",
                "screenAudio",
                "screenVideo",
                "rmpAudio",
                "rmpVideo"
            ];
            return function e1(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                for(var o in t)if ("custom" === o) {
                    if (!n.includes(t[o]) && !e1(t[o], !0)) return !1;
                } else {
                    var a = !i && !r.includes(o), s = !n.includes(t[o]);
                    if (a || s) return !1;
                }
                return !0;
            }(e1);
        },
        help: "setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: " + "true".concat(ko() ? "" : " | 'avatar'", " | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }")
    },
    setAudio: !0,
    setVideo: !0,
    setScreenShare: {
        validate: function(e1) {
            return !1 === e1;
        },
        help: "setScreenShare must be false, as it's only meant for stopping remote participants' screen shares"
    },
    eject: !0,
    updatePermissions: {
        validate: function(e1) {
            for(var t = 0, n = Object.entries(e1); t < n.length; t++){
                var r = g(n[t], 2), i = r[0], o = r[1];
                switch(i){
                    case "hasPresence":
                        if ("boolean" != typeof o) return !1;
                        break;
                    case "canSend":
                        if (o instanceof Set || o instanceof Array) {
                            var a, s = [
                                "video",
                                "audio",
                                "screenVideo",
                                "screenAudio",
                                "customVideo",
                                "customAudio"
                            ], c = Ra(o);
                            try {
                                for(c.s(); !(a = c.n()).done;){
                                    var l = a.value;
                                    if (!s.includes(l)) return !1;
                                }
                            } catch (e1) {
                                c.e(e1);
                            } finally{
                                c.f();
                            }
                        } else if ("boolean" != typeof o) return !1;
                        o instanceof Array && (e1.canSend = new Set(o));
                        break;
                    case "canAdmin":
                        if (o instanceof Set || o instanceof Array) {
                            var u, d = [
                                "participants",
                                "streaming",
                                "transcription"
                            ], h = Ra(o);
                            try {
                                for(h.s(); !(u = h.n()).done;){
                                    var p = u.value;
                                    if (!d.includes(p)) return !1;
                                }
                            } catch (e1) {
                                h.e(e1);
                            } finally{
                                h.f();
                            }
                        } else if ("boolean" != typeof o) return !1;
                        o instanceof Array && (e1.canAdmin = new Set(o));
                        break;
                    default:
                        return !1;
                }
            }
            return !0;
        },
        help: "updatePermissions can take hasPresence, canSend, and canAdmin permissions. hasPresence must be a boolean. canSend can be a boolean or an Array or Set of media types (video, audio, screenVideo, screenAudio, customVideo, customAudio). canAdmin can be a boolean or an Array or Set of admin types (participants, streaming, transcription)."
    }
}, Ka = function(t) {
    u(te, v);
    var o, a, l, d, h, f, m, y, _, b, w, S, k, E, M, T, C, O, P, x, A, j, L, D, I, R, B, F, U, V, $, G, q, Y, J, W, Q, Z, ee = Ia(te);
    function te(e1) {
        var t, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (r(this, te), p(c(t = ee.call(this)), "startListeningForDeviceChanges", function() {
            Ma(t.handleDeviceChange);
        }), p(c(t), "stopListeningForDeviceChanges", function() {
            Ta(t.handleDeviceChange);
        }), p(c(t), "handleDeviceChange", function(e1) {
            e1 = e1.map(function(e1) {
                return JSON.parse(JSON.stringify(e1));
            }), t.emit(fi, {
                action: fi,
                availableDevices: e1
            });
        }), p(c(t), "handleNativeAppActiveStateChange", function(e1) {
            t.disableReactNativeAutoDeviceManagement("video") || (e1 ? t.camUnmutedBeforeLosingNativeActiveState && t.setLocalVideo(!0) : (t.camUnmutedBeforeLosingNativeActiveState = t.localVideo(), t.camUnmutedBeforeLosingNativeActiveState && t.setLocalVideo(!1)));
        }), p(c(t), "handleNativeAudioFocusChange", function(e1) {
            t.disableReactNativeAutoDeviceManagement("audio") || (t._hasNativeAudioFocus = e1, t.toggleParticipantAudioBasedOnNativeAudioFocus(), t._hasNativeAudioFocus ? t.micUnmutedBeforeLosingNativeAudioFocus && t.setLocalAudio(!0) : (t.micUnmutedBeforeLosingNativeAudioFocus = t.localAudio(), t.setLocalAudio(!1)));
        }), p(c(t), "handleNativeSystemScreenCaptureStop", function() {
            t.stopScreenShare();
        }), t.strictMode = void 0 === i.strictMode || i.strictMode, xa) {
            if (t._logDuplicateInstanceAttempt(), t.strictMode) throw new Error("Duplicate DailyIframe instances are not allowed");
        } else n = c(t), xa = n;
        if (i.dailyJsVersion = te.version(), t._iframe = e1, t._callObjectMode = "none" === i.layout && !t._iframe, t._preloadCache = {
            subscribeToTracksAutomatically: !0,
            audioDeviceId: null,
            videoDeviceId: null,
            outputDeviceId: null,
            inputSettings: null,
            sendSettings: null,
            videoTrackForNetworkConnectivityTest: null,
            videoTrackForConnectionQualityTest: null
        }, t._callObjectMode && (window._dailyPreloadCache = t._preloadCache), void 0 !== i.showLocalVideo ? t._callObjectMode ? console.error("showLocalVideo is not available in call object mode") : t._showLocalVideo = !!i.showLocalVideo : t._showLocalVideo = !0, void 0 !== i.showParticipantsBar ? t._callObjectMode ? console.error("showParticipantsBar is not available in call object mode") : t._showParticipantsBar = !!i.showParticipantsBar : t._showParticipantsBar = !0, void 0 !== i.customIntegrations ? t._callObjectMode ? console.error("customIntegrations is not available in call object mode") : t._customIntegrations = i.customIntegrations : t._customIntegrations = {}, void 0 !== i.customTrayButtons ? t._callObjectMode ? console.error("customTrayButtons is not available in call object mode") : t._customTrayButtons = i.customTrayButtons : t._customTrayButtons = {}, void 0 !== i.activeSpeakerMode ? t._callObjectMode ? console.error("activeSpeakerMode is not available in call object mode") : t._activeSpeakerMode = !!i.activeSpeakerMode : t._activeSpeakerMode = !1, i.receiveSettings ? t._callObjectMode ? t._receiveSettings = i.receiveSettings : console.error("receiveSettings is only available in call object mode") : t._receiveSettings = {}, t.validateProperties(i), t.properties = Na({}, i), t._preloadCache.inputSettings || (t._preloadCache.inputSettings = {}), i.inputSettings && i.inputSettings.audio && (t._preloadCache.inputSettings.audio = i.inputSettings.audio), i.inputSettings && i.inputSettings.video && (t._preloadCache.inputSettings.video = i.inputSettings.video), t._callObjectLoader = t._callObjectMode ? new Zo : null, t._callState = br, t._isPreparingToJoin = !1, t._accessState = {
            access: Lr
        }, t._meetingSessionSummary = {}, t._finalSummaryOfPrevSession = {}, t._meetingSessionState = bs(Va, t._callObjectMode), t._nativeInCallAudioMode = Fa, t._participants = {}, t._participantCounts = $a, t._rmpPlayerState = {}, t._waitingParticipants = {}, t._inputEventsOn = {}, t._network = {
            threshold: "good",
            quality: 100
        }, t._activeSpeaker = {}, t._callFrameId = H(), t._localAudioLevel = 0, t._remoteParticipantsAudioLevel = {}, t._messageChannel = ko() ? new Yo : new Go, t._iframe && (t._iframe.requestFullscreen ? t._iframe.addEventListener("fullscreenchange", function() {
            document.fullscreenElement === t._iframe ? (t.emit(Qi, {
                action: Qi
            }), t.sendMessageToCallMachine({
                action: Qi
            })) : (t.emit(Ki, {
                action: Ki
            }), t.sendMessageToCallMachine({
                action: Ki
            }));
        }) : t._iframe.webkitRequestFullscreen && t._iframe.addEventListener("webkitfullscreenchange", function() {
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
    return s(te, [
        {
            key: "destroy",
            value: (Z = n(function*() {
                try {
                    yield this.leave();
                } catch (e1) {}
                var e1 = this._iframe;
                if (e1) {
                    var t = e1.parentElement;
                    t && t.removeChild(e1);
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
                } catch (e1) {
                    console.log("could not emit call-instance-destroyed");
                }
                this.strictMode && (this._callFrameId = void 0), xa = void 0;
            }), function() {
                return Z.apply(this, arguments);
            })
        },
        {
            key: "isDestroyed",
            value: function() {
                return !!this._destroyed;
            }
        },
        {
            key: "loadCss",
            value: function(e1) {
                var t = e1.bodyClass, n = e1.cssFile, r = e1.cssText;
                return as(), this.sendMessageToCallMachine({
                    action: "load-css",
                    cssFile: this.absoluteUrl(n),
                    bodyClass: t,
                    cssText: r
                }), this;
            }
        },
        {
            key: "iframe",
            value: function() {
                return as(), this._iframe;
            }
        },
        {
            key: "meetingState",
            value: function() {
                return this._callState;
            }
        },
        {
            key: "accessState",
            value: function() {
                return is(this._callObjectMode, "accessState()"), this._accessState;
            }
        },
        {
            key: "participants",
            value: function() {
                return this._participants;
            }
        },
        {
            key: "participantCounts",
            value: function() {
                return this._participantCounts;
            }
        },
        {
            key: "waitingParticipants",
            value: function() {
                return is(this._callObjectMode, "waitingParticipants()"), this._waitingParticipants;
            }
        },
        {
            key: "validateParticipantProperties",
            value: function(e1, t) {
                for(var n in t){
                    if (!Qa[n]) throw new Error("unrecognized updateParticipant property ".concat(n));
                    if (Qa[n].validate && !Qa[n].validate(t[n], this, this._participants[e1])) throw new Error(Qa[n].help);
                }
            }
        },
        {
            key: "updateParticipant",
            value: function(e1, t) {
                return this._participants.local && this._participants.local.session_id === e1 && (e1 = "local"), e1 && t && (this.validateParticipantProperties(e1, t), this.sendMessageToCallMachine({
                    action: "update-participant",
                    id: e1,
                    properties: t
                })), this;
            }
        },
        {
            key: "updateParticipants",
            value: function(e1) {
                var t = this._participants.local && this._participants.local.session_id;
                for(var n in e1)n === t && (n = "local"), n && e1[n] && this.validateParticipantProperties(n, e1[n]);
                return this.sendMessageToCallMachine({
                    action: "update-participants",
                    participants: e1
                }), this;
            }
        },
        {
            key: "updateWaitingParticipant",
            value: (Q = n(function*() {
                var e1 = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (is(this._callObjectMode, "updateWaitingParticipant()"), Za(this._callState, "updateWaitingParticipant()"), "string" != typeof t || "object" !== i(n)) throw new Error("updateWaitingParticipant() must take an id string and a updates object");
                return new Promise(function(r, i) {
                    e1.sendMessageToCallMachine({
                        action: "daily-method-update-waiting-participant",
                        id: t,
                        updates: n
                    }, function(e1) {
                        e1.error && i(e1.error), e1.id || i(new Error("unknown error in updateWaitingParticipant()")), r({
                            id: e1.id
                        });
                    });
                });
            }), function() {
                return Q.apply(this, arguments);
            })
        },
        {
            key: "updateWaitingParticipants",
            value: (W = n(function*() {
                var e1 = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (is(this._callObjectMode, "updateWaitingParticipants()"), Za(this._callState, "updateWaitingParticipants()"), "object" !== i(t)) throw new Error("updateWaitingParticipants() must take a mapping between ids and update objects");
                return new Promise(function(n, r) {
                    e1.sendMessageToCallMachine({
                        action: "daily-method-update-waiting-participants",
                        updatesById: t
                    }, function(e1) {
                        e1.error && r(e1.error), e1.ids || r(new Error("unknown error in updateWaitingParticipants()")), n({
                            ids: e1.ids
                        });
                    });
                });
            }), function() {
                return W.apply(this, arguments);
            })
        },
        {
            key: "requestAccess",
            value: (J = n(function*() {
                var e1 = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.access, r = void 0 === n ? {
                    level: Dr
                } : n, i = t.name, o = void 0 === i ? "" : i;
                return is(this._callObjectMode, "requestAccess()"), Za(this._callState, "requestAccess()"), new Promise(function(t, n) {
                    e1.sendMessageToCallMachine({
                        action: "daily-method-request-access",
                        access: r,
                        name: o
                    }, function(e1) {
                        e1.error && n(e1.error), e1.access || n(new Error("unknown error in requestAccess()")), t({
                            access: e1.access,
                            granted: e1.granted
                        });
                    });
                });
            }), function() {
                return J.apply(this, arguments);
            })
        },
        {
            key: "localAudio",
            value: function() {
                return this._participants.local ? ![
                    "blocked",
                    "off"
                ].includes(this._participants.local.tracks.audio.state) : null;
            }
        },
        {
            key: "localVideo",
            value: function() {
                return this._participants.local ? ![
                    "blocked",
                    "off"
                ].includes(this._participants.local.tracks.video.state) : null;
            }
        },
        {
            key: "setLocalAudio",
            value: function(e1) {
                return this.sendMessageToCallMachine({
                    action: "local-audio",
                    state: e1
                }), this;
            }
        },
        {
            key: "setLocalVideo",
            value: function(e1) {
                return this.sendMessageToCallMachine({
                    action: "local-video",
                    state: e1
                }), this;
            }
        },
        {
            key: "getReceiveSettings",
            value: (Y = n(function*(e1) {
                var t = this, n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).showInheritedValues, r = void 0 !== n && n;
                if (is(this._callObjectMode, "getReceiveSettings()"), !this._dailyMainExecuted) return this._receiveSettings;
                switch(i(e1)){
                    case "string":
                        return new Promise(function(n) {
                            t.sendMessageToCallMachine({
                                action: "get-single-participant-receive-settings",
                                id: e1,
                                showInheritedValues: r
                            }, function(e1) {
                                n(e1.receiveSettings);
                            });
                        });
                    case "undefined":
                        return this._receiveSettings;
                    default:
                        throw new Error('first argument to getReceiveSettings() must be a participant id (or "base"), or there should be no arguments');
                }
            }), function(e1) {
                return Y.apply(this, arguments);
            })
        },
        {
            key: "updateReceiveSettings",
            value: (q = n(function*(e1) {
                var t = this;
                if (is(this._callObjectMode, "updateReceiveSettings()"), !ls(e1, {
                    allowAllParticipantsKey: !0
                })) throw new Error(ps({
                    allowAllParticipantsKey: !0
                }));
                return Za(this._callState, "updateReceiveSettings()", "To specify receive settings earlier, use the receiveSettings config property."), new Promise(function(n) {
                    t.sendMessageToCallMachine({
                        action: "update-receive-settings",
                        receiveSettings: e1
                    }, function(e1) {
                        n({
                            receiveSettings: e1.receiveSettings
                        });
                    });
                });
            }), function(e1) {
                return q.apply(this, arguments);
            })
        },
        {
            key: "_prepInputSettingsToPresentToUser",
            value: function(e1) {
                var t, n, r, i, o, a, s, c;
                if (e1) {
                    var l = {}, u = "none" === (null === (t = e1.audio) || void 0 === t || null === (n = t.processor) || void 0 === n ? void 0 : n.type) && (null === (r = e1.audio) || void 0 === r || null === (i = r.processor) || void 0 === i ? void 0 : i._isDefaultWhenNone);
                    if (e1.audio && !u) {
                        var d = Na({}, e1.audio.processor);
                        delete d._isDefaultWhenNone, l.audio = Na(Na({}, e1.audio), {}, {
                            processor: d
                        });
                    }
                    var h = "none" === (null === (o = e1.video) || void 0 === o || null === (a = o.processor) || void 0 === a ? void 0 : a.type) && (null === (s = e1.video) || void 0 === s || null === (c = s.processor) || void 0 === c ? void 0 : c._isDefaultWhenNone);
                    if (e1.video && !h) {
                        var p = Na({}, e1.video.processor);
                        delete p._isDefaultWhenNone, l.video = Na(Na({}, e1.video), {}, {
                            processor: p
                        });
                    }
                    return l;
                }
            }
        },
        {
            key: "getInputSettings",
            value: function() {
                var e1 = this;
                return new Promise(function(t) {
                    t(e1._getInputSettings());
                });
            }
        },
        {
            key: "_getInputSettings",
            value: function() {
                var e1, t, n, r, i, o, a, s, c = {
                    processor: {
                        type: "none",
                        _isDefaultWhenNone: !0
                    }
                };
                this._inputSettings ? (e1 = (null === (n = this._inputSettings) || void 0 === n ? void 0 : n.video) || c, t = (null === (r = this._inputSettings) || void 0 === r ? void 0 : r.audio) || c) : (e1 = (null === (i = this._preloadCache) || void 0 === i || null === (o = i.inputSettings) || void 0 === o ? void 0 : o.video) || c, t = (null === (a = this._preloadCache) || void 0 === a || null === (s = a.inputSettings) || void 0 === s ? void 0 : s.audio) || c);
                var l = {
                    audio: t,
                    video: e1
                };
                return this._prepInputSettingsToPresentToUser(l);
            }
        },
        {
            key: "updateInputSettings",
            value: (G = n(function*(e1) {
                var t = this;
                return us(e1) ? (e1 && (this._preloadCache.inputSettings || (this._preloadCache.inputSettings = {}), ds(e1), e1.audio && (this._preloadCache.inputSettings.audio = e1.audio), e1.video && (this._preloadCache.inputSettings.video = e1.video)), us(e1) ? this._callObjectMode && this.needsLoad() ? this._getInputSettings() : new Promise(function(n, r) {
                    t.sendMessageToCallMachine({
                        action: "update-input-settings",
                        inputSettings: e1
                    }, function(e1) {
                        e1.error ? r(e1.error) : n({
                            inputSettings: t._prepInputSettingsToPresentToUser(e1.inputSettings)
                        });
                    });
                }) : this._getInputSettings()) : (console.error(hs()), Promise.reject(hs()));
            }), function(e1) {
                return G.apply(this, arguments);
            })
        },
        {
            key: "setBandwidth",
            value: function(e1) {
                var t = e1.kbs, n = e1.trackConstraints;
                if (as(), this._dailyMainExecuted) return this.sendMessageToCallMachine({
                    action: "set-bandwidth",
                    kbs: t,
                    trackConstraints: n
                }), this;
            }
        },
        {
            key: "getDailyLang",
            value: function() {
                var e1 = this;
                if (as(), this._dailyMainExecuted) return new Promise(function(t) {
                    e1.sendMessageToCallMachine({
                        action: "get-daily-lang"
                    }, function(e1) {
                        delete e1.action, delete e1.callbackStamp, t(e1);
                    });
                });
            }
        },
        {
            key: "setDailyLang",
            value: function(e1) {
                return as(), this.sendMessageToCallMachine({
                    action: "set-daily-lang",
                    lang: e1
                }), this;
            }
        },
        {
            key: "setProxyUrl",
            value: function(e1) {
                return this.sendMessageToCallMachine({
                    action: "set-proxy-url",
                    proxyUrl: e1
                }), this;
            }
        },
        {
            key: "setIceConfig",
            value: function(e1) {
                return this.sendMessageToCallMachine({
                    action: "set-ice-config",
                    iceConfig: e1
                }), this;
            }
        },
        {
            key: "meetingSessionSummary",
            value: function() {
                return [
                    Mr,
                    Tr
                ].includes(this._callState) ? this._finalSummaryOfPrevSession : this._meetingSessionSummary;
            }
        },
        {
            key: "getMeetingSession",
            value: ($ = n(function*() {
                var e1 = this;
                return console.warn("getMeetingSession() is deprecated: use meetingSessionSummary(), which will return immediately"), Za(this._callState, "getMeetingSession()"), new Promise(function(t) {
                    e1.sendMessageToCallMachine({
                        action: "get-meeting-session"
                    }, function(e1) {
                        delete e1.action, delete e1.callbackStamp, delete e1.callFrameId, t(e1);
                    });
                });
            }), function() {
                return $.apply(this, arguments);
            })
        },
        {
            key: "meetingSessionState",
            value: function() {
                return Za(this._callState, "meetingSessionState"), this._meetingSessionState;
            }
        },
        {
            key: "setMeetingSessionData",
            value: function(e1) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "replace";
                is(this._callObjectMode, "setMeetingSessionData()"), Za(this._callState, "setMeetingSessionData");
                try {
                    !function(e1, t) {
                        new Ho({
                            data: e1,
                            mergeStrategy: t
                        });
                    }(e1, t);
                } catch (e1) {
                    throw console.error(e1), e1;
                }
                try {
                    this.sendMessageToCallMachine({
                        action: "set-session-data",
                        data: e1,
                        mergeStrategy: t
                    });
                } catch (e1) {
                    throw new Error("Error setting meeting session data: ".concat(e1));
                }
            }
        },
        {
            key: "setUserName",
            value: function(e1, t) {
                var n = this;
                return this.properties.userName = e1, new Promise(function(r) {
                    n.sendMessageToCallMachine({
                        action: "set-user-name",
                        name: null != e1 ? e1 : "",
                        thisMeetingOnly: ko() || !!t && !!t.thisMeetingOnly
                    }, function(e1) {
                        delete e1.action, delete e1.callbackStamp, r(e1);
                    });
                });
            }
        },
        {
            key: "setUserData",
            value: (V = n(function*(e1) {
                var t = this;
                try {
                    cs(e1);
                } catch (e1) {
                    throw console.error(e1), e1;
                }
                if (this.properties.userData = e1, this._dailyMainExecuted) return new Promise(function(n) {
                    try {
                        t.sendMessageToCallMachine({
                            action: "set-user-data",
                            userData: e1
                        }, function(e1) {
                            delete e1.action, delete e1.callbackStamp, delete e1.callFrameId, n(e1);
                        });
                    } catch (e1) {
                        throw new Error("Error setting user data: ".concat(e1));
                    }
                });
            }), function(e1) {
                return V.apply(this, arguments);
            })
        },
        {
            key: "validateAudioLevelInterval",
            value: function(e1) {
                if (e1 && (e1 < 100 || "number" != typeof e1)) throw new Error("The interval must be a number greater than or equal to 100 milliseconds.");
            }
        },
        {
            key: "startLocalAudioLevelObserver",
            value: function(e1) {
                var t = this;
                if (as(), this.validateAudioLevelInterval(e1), this._dailyMainExecuted) return new Promise(function(n, r) {
                    t.sendMessageToCallMachine({
                        action: "start-local-audio-level-observer",
                        interval: e1
                    }, function(e1) {
                        e1.error ? r({
                            error: e1.error
                        }) : n();
                    });
                });
                this._preloadCache.localAudioLevelObserver = {
                    enabled: !0,
                    interval: e1
                };
            }
        },
        {
            key: "stopLocalAudioLevelObserver",
            value: (U = n(function*() {
                as(), this._preloadCache.localAudioLevelObserver = null, this._localAudioLevel = 0, this.sendMessageToCallMachine({
                    action: "stop-local-audio-level-observer"
                });
            }), function() {
                return U.apply(this, arguments);
            })
        },
        {
            key: "startRemoteParticipantsAudioLevelObserver",
            value: function(e1) {
                var t = this;
                if (as(), this.validateAudioLevelInterval(e1), this._dailyMainExecuted) return new Promise(function(n, r) {
                    t.sendMessageToCallMachine({
                        action: "start-remote-participants-audio-level-observer",
                        interval: e1
                    }, function(e1) {
                        e1.error ? r({
                            error: e1.error
                        }) : n();
                    });
                });
                this._preloadCache.remoteParticipantsAudioLevelObserver = {
                    enabled: !0,
                    interval: e1
                };
            }
        },
        {
            key: "stopRemoteParticipantsAudioLevelObserver",
            value: (F = n(function*() {
                as(), this._preloadCache.remoteParticipantsAudioLevelObserver = null, this._remoteParticipantsAudioLevel = {}, this.sendMessageToCallMachine({
                    action: "stop-remote-participants-audio-level-observer"
                });
            }), function() {
                return F.apply(this, arguments);
            })
        },
        {
            key: "startCamera",
            value: (B = n(function*() {
                var e1 = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (is(this._callObjectMode, "startCamera()"), ts(this._callState, this._isPreparingToJoin, "startCamera()", "Did you mean to use setLocalAudio() and/or setLocalVideo() instead?"), rs(this._testCallInProgress, "startCamera()"), this.needsLoad()) try {
                    yield this.load(t);
                } catch (e1) {
                    return Promise.reject(e1);
                }
                else {
                    if (this._didPreAuth) {
                        if (t.url && t.url !== this.properties.url) return console.error("url in startCamera() is different than the one used in preAuth()"), Promise.reject();
                        if (t.token && t.token !== this.properties.token) return console.error("token in startCamera() is different than the one used in preAuth()"), Promise.reject();
                    }
                    this.validateProperties(t), this.properties = Na(Na({}, this.properties), t);
                }
                return new Promise(function(t) {
                    e1.sendMessageToCallMachine({
                        action: "start-camera",
                        properties: Xa(e1.properties),
                        preloadCache: Xa(e1._preloadCache)
                    }, function(e1) {
                        delete e1.action, delete e1.callbackStamp, t(e1);
                    });
                });
            }), function() {
                return B.apply(this, arguments);
            })
        },
        {
            key: "validateCustomTrack",
            value: function(e1, t, n) {
                if (n && n.length > 50) throw new Error("Custom track `trackName` must not be more than 50 characters");
                if (t && "music" !== t && "speech" !== t && !(t instanceof Object)) throw new Error("Custom track `mode` must be either `music` | `speech` | `DailyMicAudioModeSettings` or `undefined`");
                if (!!n && [
                    "cam-audio",
                    "cam-video",
                    "screen-video",
                    "screen-audio",
                    "rmpAudio",
                    "rmpVideo",
                    "customVideoDefaults"
                ].includes(n)) throw new Error("Custom track `trackName` must not match a track name already used by daily: cam-audio, cam-video, customVideoDefaults, screen-video, screen-audio, rmpAudio, rmpVideo");
                if (!(e1 instanceof MediaStreamTrack)) throw new Error("Custom tracks provided must be instances of MediaStreamTrack");
            }
        },
        {
            key: "startCustomTrack",
            value: function() {
                var e1 = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    track: track,
                    mode: mode,
                    trackName: trackName
                };
                return as(), Za(this._callState, "startCustomTrack()"), this.validateCustomTrack(t.track, t.mode, t.trackName), new Promise(function(n, r) {
                    window._dailyPreloadCache.customTrack = t.track, t.track = fo, e1.sendMessageToCallMachine({
                        action: "start-custom-track",
                        properties: t
                    }, function(e1) {
                        e1.error ? r({
                            error: e1.error
                        }) : n(e1.mediaTag);
                    });
                });
            }
        },
        {
            key: "stopCustomTrack",
            value: function(e1) {
                var t = this;
                return as(), Za(this._callState, "stopCustomTrack()"), new Promise(function(n) {
                    t.sendMessageToCallMachine({
                        action: "stop-custom-track",
                        mediaTag: e1
                    }, function(e1) {
                        n(e1.mediaTag);
                    });
                });
            }
        },
        {
            key: "setCamera",
            value: function(e1) {
                var t = this;
                return ss(), ns(this._dailyMainExecuted, "setCamera()"), new Promise(function(n) {
                    t.sendMessageToCallMachine({
                        action: "set-camera",
                        cameraDeviceId: e1
                    }, function(e1) {
                        n({
                            device: e1.device
                        });
                    });
                });
            }
        },
        {
            key: "setAudioDevice",
            value: (R = n(function*(e1) {
                return ss(), this.nativeUtils().setAudioDevice(e1), {
                    deviceId: yield this.nativeUtils().getAudioDevice()
                };
            }), function(e1) {
                return R.apply(this, arguments);
            })
        },
        {
            key: "cycleCamera",
            value: function() {
                var e1 = this;
                return new Promise(function(t) {
                    e1.sendMessageToCallMachine({
                        action: "cycle-camera"
                    }, function(e1) {
                        t({
                            device: e1.device
                        });
                    });
                });
            }
        },
        {
            key: "cycleMic",
            value: function() {
                var e1 = this;
                return as(), new Promise(function(t) {
                    e1.sendMessageToCallMachine({
                        action: "cycle-mic"
                    }, function(e1) {
                        t({
                            device: e1.device
                        });
                    });
                });
            }
        },
        {
            key: "getCameraFacingMode",
            value: function() {
                var e1 = this;
                return ss(), new Promise(function(t) {
                    e1.sendMessageToCallMachine({
                        action: "get-camera-facing-mode"
                    }, function(e1) {
                        t(e1.facingMode);
                    });
                });
            }
        },
        {
            key: "setInputDevicesAsync",
            value: (I = n(function*(e1) {
                var t = this, n = e1.audioDeviceId, r = e1.videoDeviceId, i = e1.audioSource, o = e1.videoSource;
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
                } : (n instanceof MediaStreamTrack && (n = fo), r instanceof MediaStreamTrack && (r = fo), new Promise(function(e1) {
                    t.sendMessageToCallMachine({
                        action: "set-input-devices",
                        audioDeviceId: n,
                        videoDeviceId: r
                    }, function(n) {
                        delete n.action, delete n.callbackStamp, n.returnPreloadCache ? e1({
                            camera: {
                                deviceId: t._preloadCache.videoDeviceId
                            },
                            mic: {
                                deviceId: t._preloadCache.audioDeviceId
                            },
                            speaker: {
                                deviceId: t._preloadCache.outputDeviceId
                            }
                        }) : e1(n);
                    });
                }));
            }), function(e1) {
                return I.apply(this, arguments);
            })
        },
        {
            key: "setOutputDeviceAsync",
            value: (D = n(function*(e1) {
                var t = this, n = e1.outputDeviceId;
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
                } : new Promise(function(e1) {
                    t.sendMessageToCallMachine({
                        action: "set-output-device",
                        outputDeviceId: n
                    }, function(n) {
                        delete n.action, delete n.callbackStamp, n.returnPreloadCache ? e1({
                            camera: {
                                deviceId: t._preloadCache.videoDeviceId
                            },
                            mic: {
                                deviceId: t._preloadCache.audioDeviceId
                            },
                            speaker: {
                                deviceId: t._preloadCache.outputDeviceId
                            }
                        }) : e1(n);
                    });
                });
            }), function(e1) {
                return D.apply(this, arguments);
            })
        },
        {
            key: "getInputDevices",
            value: (L = n(function*() {
                var e1 = this;
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
                } : new Promise(function(t) {
                    e1.sendMessageToCallMachine({
                        action: "get-input-devices"
                    }, function(n) {
                        delete n.action, delete n.callbackStamp, n.returnPreloadCache ? t({
                            camera: {
                                deviceId: e1._preloadCache.videoDeviceId
                            },
                            mic: {
                                deviceId: e1._preloadCache.audioDeviceId
                            },
                            speaker: {
                                deviceId: e1._preloadCache.outputDeviceId
                            }
                        }) : t(n);
                    });
                });
            }), function() {
                return L.apply(this, arguments);
            })
        },
        {
            key: "nativeInCallAudioMode",
            value: function() {
                return ss(), this._nativeInCallAudioMode;
            }
        },
        {
            key: "setNativeInCallAudioMode",
            value: function(e1) {
                if (ss(), [
                    Fa,
                    Ua
                ].includes(e1)) {
                    if (e1 !== this._nativeInCallAudioMode) return this._nativeInCallAudioMode = e1, !this.disableReactNativeAutoDeviceManagement("audio") && es(this._callState, this._isPreparingToJoin) && this.nativeUtils().setAudioMode(this._nativeInCallAudioMode), this;
                } else console.error("invalid in-call audio mode specified: ", e1);
            }
        },
        {
            key: "preAuth",
            value: (j = n(function*() {
                var e1 = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (is(this._callObjectMode, "preAuth()"), ts(this._callState, this._isPreparingToJoin, "preAuth()"), rs(this._testCallInProgress, "preAuth()"), this.needsLoad() && (yield this.load(t)), !t.url) throw new Error("preAuth() requires at least a url to be provided");
                return this.validateProperties(t), this.properties = Na(Na({}, this.properties), t), new Promise(function(t, n) {
                    e1.sendMessageToCallMachine({
                        action: "daily-method-preauth",
                        properties: Xa(e1.properties),
                        preloadCache: Xa(e1._preloadCache)
                    }, function(r) {
                        return r.error ? n(r.error) : r.access ? (e1._didPreAuth = !0, void t({
                            access: r.access
                        })) : n(new Error("unknown error in preAuth()"));
                    });
                });
            }), function() {
                return j.apply(this, arguments);
            })
        },
        {
            key: "load",
            value: (A = n(function*(e1) {
                var t = this;
                if (this.needsLoad()) {
                    if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
                    if (e1 && (this.validateProperties(e1), this.properties = Na(Na({}, this.properties), e1)), !this._callObjectMode && !this.properties.url) throw new Error("can't load iframe meeting because url property isn't set");
                    this._updateCallState(wr);
                    try {
                        this.emit(ai, {
                            action: ai
                        });
                    } catch (e1) {
                        console.log("could not emit 'loading'", e1);
                    }
                    return this._callObjectMode ? new Promise(function(e1, n) {
                        t._callObjectLoader.cancel();
                        var r = Date.now();
                        t._callObjectLoader.load(t._callFrameId, t.properties.dailyConfig && t.properties.dailyConfig.avoidEval, function(n) {
                            t._bundleLoadTime = n ? "no-op" : Date.now() - r, t._updateCallState(Sr), n && t.emit(ci, {
                                action: ci
                            }), e1();
                        }, function(e1, r) {
                            if (t.emit(si, {
                                action: si,
                                errorMsg: e1
                            }), !r) {
                                t._updateCallState(Tr), t.resetMeetingDependentVars();
                                var i = {
                                    action: ao,
                                    errorMsg: e1,
                                    error: {
                                        type: "connection-error",
                                        msg: "Failed to load call object bundle.",
                                        details: {
                                            on: "load",
                                            sourceError: new Error(e1),
                                            bundleUrl: X()
                                        }
                                    }
                                };
                                t._maybeSendToSentry(i), t.emit(ao, i), n(e1);
                            }
                        });
                    }) : (this._iframe.src = K(this.assembleMeetingUrl()), new Promise(function(e1, n) {
                        t._loadedCallback = function(r) {
                            if (t._callState !== Tr) {
                                for(var i in t._updateCallState(Sr), (t.properties.cssFile || t.properties.cssText) && t.loadCss(t.properties), t._inputEventsOn)t.sendMessageToCallMachine({
                                    action: uo,
                                    on: i
                                });
                                e1();
                            } else n(r);
                        };
                    }));
                }
            }), function(e1) {
                return A.apply(this, arguments);
            })
        },
        {
            key: "join",
            value: (x = n(function*() {
                var e1 = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                rs(this._testCallInProgress, "join()");
                var n = !1;
                if (this.needsLoad()) {
                    this.updateIsPreparingToJoin(!0);
                    try {
                        yield this.load(t);
                    } catch (e1) {
                        return this.updateIsPreparingToJoin(!1), Promise.reject(e1);
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
                } catch (e1) {
                    console.log("could not emit 'joining-meeting'", e1);
                }
                return this._preloadCache.inputSettings || (this._preloadCache.inputSettings = {}), t.inputSettings && t.inputSettings.audio && (this._preloadCache.inputSettings.audio = t.inputSettings.audio), t.inputSettings && t.inputSettings.video && (this._preloadCache.inputSettings.video = t.inputSettings.video), this.sendMessageToCallMachine({
                    action: "join-meeting",
                    properties: Xa(this.properties),
                    preloadCache: Xa(this._preloadCache)
                }), new Promise(function(t, r) {
                    e1._joinedCallback = function(i, o) {
                        if (e1._callState !== Tr) {
                            if (e1._updateCallState(Er), i) for(var a in i)e1._callObjectMode && (ha(i[a]), pa(i[a]), ga(i[a], e1._participants[a])), e1._participants[a] = Na({}, i[a]), e1.toggleParticipantAudioBasedOnNativeAudioFocus();
                            n && e1.loadCss(e1.properties), t(i);
                        } else r(o);
                    };
                });
            }), function() {
                return x.apply(this, arguments);
            })
        },
        {
            key: "leave",
            value: (P = n(function*() {
                var e1 = this;
                return rs(this._testCallInProgress, "leave()"), new Promise(function(t) {
                    if (e1._callState === Mr || e1._callState === Tr) t();
                    else if (e1._callObjectLoader && !e1._callObjectLoader.loaded) {
                        e1._callObjectLoader.cancel(), e1._updateCallState(Mr), e1.resetMeetingDependentVars();
                        try {
                            e1.emit(Mr, {
                                action: Mr
                            });
                        } catch (e1) {
                            console.log("could not emit 'left-meeting'", e1);
                        }
                        t();
                    } else e1._resolveLeave = t, e1.sendMessageToCallMachine({
                        action: "leave-meeting"
                    });
                });
            }), function() {
                return P.apply(this, arguments);
            })
        },
        {
            key: "startScreenShare",
            value: (O = n(function*() {
                var e1 = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (ns(this._dailyMainExecuted, "startScreenShare()"), t.screenVideoSendSettings && this._validateVideoSendSettings("screenVideo", t.screenVideoSendSettings), t.mediaStream && (this._preloadCache.screenMediaStream = t.mediaStream, t.mediaStream = fo), "undefined" != typeof DailyNativeUtils && void 0 !== DailyNativeUtils.isIOS && DailyNativeUtils.isIOS) {
                    var n = this.nativeUtils();
                    if (yield n.isScreenBeingCaptured()) return void this.emit(oo, {
                        action: oo,
                        type: "screen-share-error",
                        errorMsg: "Could not start the screen sharing. The screen is already been captured!"
                    });
                    n.setSystemScreenCaptureStartCallback(function() {
                        n.setSystemScreenCaptureStartCallback(null), e1.sendMessageToCallMachine({
                            action: lo,
                            captureOptions: t
                        });
                    }), n.presentSystemScreenCapturePrompt();
                } else this.sendMessageToCallMachine({
                    action: lo,
                    captureOptions: t
                });
            }), function() {
                return O.apply(this, arguments);
            })
        },
        {
            key: "stopScreenShare",
            value: function() {
                ns(this._dailyMainExecuted, "stopScreenShare()"), this.sendMessageToCallMachine({
                    action: "local-screen-stop"
                });
            }
        },
        {
            key: "startRecording",
            value: function() {
                var e1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.sendMessageToCallMachine(Na({
                    action: "local-recording-start"
                }, e1));
            }
        },
        {
            key: "updateRecording",
            value: function(e1) {
                var t = e1.layout, n = void 0 === t ? {
                    preset: "default"
                } : t, r = e1.instanceId;
                this.sendMessageToCallMachine({
                    action: "daily-method-update-recording",
                    layout: n,
                    instanceId: r
                });
            }
        },
        {
            key: "stopRecording",
            value: function() {
                var e1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.sendMessageToCallMachine(Na({
                    action: "local-recording-stop"
                }, e1));
            }
        },
        {
            key: "startLiveStreaming",
            value: function() {
                var e1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.sendMessageToCallMachine(Na({
                    action: "daily-method-start-live-streaming"
                }, e1));
            }
        },
        {
            key: "updateLiveStreaming",
            value: function(e1) {
                var t = e1.layout, n = void 0 === t ? {
                    preset: "default"
                } : t, r = e1.instanceId;
                this.sendMessageToCallMachine({
                    action: "daily-method-update-live-streaming",
                    layout: n,
                    instanceId: r
                });
            }
        },
        {
            key: "addLiveStreamingEndpoints",
            value: function(e1) {
                var t = e1.endpoints, n = e1.instanceId;
                this.sendMessageToCallMachine({
                    action: ho,
                    endpointsOp: bo,
                    endpoints: t,
                    instanceId: n
                });
            }
        },
        {
            key: "removeLiveStreamingEndpoints",
            value: function(e1) {
                var t = e1.endpoints, n = e1.instanceId;
                this.sendMessageToCallMachine({
                    action: ho,
                    endpointsOp: wo,
                    endpoints: t,
                    instanceId: n
                });
            }
        },
        {
            key: "stopLiveStreaming",
            value: function() {
                var e1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.sendMessageToCallMachine(Na({
                    action: "daily-method-stop-live-streaming"
                }, e1));
            }
        },
        {
            key: "validateDailyConfig",
            value: function(e1) {
                e1.camSimulcastEncodings && (console.warn("camSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide camera simulcast settings."), this.validateSimulcastEncodings(e1.camSimulcastEncodings)), e1.screenSimulcastEncodings && console.warn("screenSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide screen simulcast settings.");
            }
        },
        {
            key: "validateSimulcastEncodings",
            value: function(e1) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (e1) {
                    if (!(e1 instanceof Array)) throw new Error("encodings must be an Array");
                    if (!_s(e1.length, 1, 3)) throw new Error("encodings must be an Array with between 1 to ".concat(3, " layers"));
                    for(var r = 0; r < e1.length; r++){
                        var i = e1[r];
                        for(var o in this._validateEncodingLayerHasValidProperties(i), i){
                            if (!qa.includes(o)) throw new Error("Invalid key ".concat(o, ", valid keys are:") + Object.values(qa));
                            if ("number" != typeof i[o]) throw new Error("".concat(o, " must be a number"));
                            if (t) {
                                var a = t[o], s = a.min, c = a.max;
                                if (!_s(i[o], s, c)) throw new Error("".concat(o, " value not in range. valid range: ").concat(s, " to ").concat(c));
                            }
                        }
                        if (n && !i.hasOwnProperty("maxBitrate")) throw new Error("maxBitrate is not specified");
                    }
                }
            }
        },
        {
            key: "startRemoteMediaPlayer",
            value: (C = n(function*(e1) {
                var t = this, n = e1.url, r = e1.settings, i = void 0 === r ? {
                    state: vo.PLAY
                } : r;
                try {
                    !function(e1) {
                        if ("string" != typeof e1) throw new Error('url parameter must be "string" type');
                    }(n), ys(i), function(e1) {
                        for(var t in e1)if (!Ya.includes(t)) throw new Error("Invalid key ".concat(t, ", valid keys are: ").concat(Ya));
                        e1.simulcastEncodings && this.validateSimulcastEncodings(e1.simulcastEncodings, Ga, !0);
                    }(i);
                } catch (e1) {
                    throw console.error("invalid argument Error: ".concat(e1)), console.error('startRemoteMediaPlayer arguments must be of the form:\n  { url: "playback url",\n  settings?:\n  {state: "play"|"pause", simulcastEncodings?: [{}] } }'), e1;
                }
                return new Promise(function(e1, r) {
                    t.sendMessageToCallMachine({
                        action: "daily-method-start-remote-media-player",
                        url: n,
                        settings: i
                    }, function(t) {
                        t.error ? r({
                            error: t.error,
                            errorMsg: t.errorMsg
                        }) : e1({
                            session_id: t.session_id,
                            remoteMediaPlayerState: {
                                state: t.state,
                                settings: t.settings
                            }
                        });
                    });
                });
            }), function(e1) {
                return C.apply(this, arguments);
            })
        },
        {
            key: "stopRemoteMediaPlayer",
            value: (T = n(function*(e1) {
                var t = this;
                if ("string" != typeof e1) throw new Error(" remotePlayerID must be of type string");
                return new Promise(function(n, r) {
                    t.sendMessageToCallMachine({
                        action: "daily-method-stop-remote-media-player",
                        session_id: e1
                    }, function(e1) {
                        e1.error ? r({
                            error: e1.error,
                            errorMsg: e1.errorMsg
                        }) : n();
                    });
                });
            }), function(e1) {
                return T.apply(this, arguments);
            })
        },
        {
            key: "updateRemoteMediaPlayer",
            value: (M = n(function*(e1) {
                var t = this, n = e1.session_id, r = e1.settings;
                try {
                    ys(r);
                } catch (e1) {
                    throw console.error("invalid argument Error: ".concat(e1)), console.error('updateRemoteMediaPlayer arguments must be of the form:\n  session_id: "participant session",\n  { settings?: {state: "play"|"pause"} }'), e1;
                }
                return new Promise(function(e1, i) {
                    t.sendMessageToCallMachine({
                        action: "daily-method-update-remote-media-player",
                        session_id: n,
                        settings: r
                    }, function(t) {
                        t.error ? i({
                            error: t.error,
                            errorMsg: t.errorMsg
                        }) : e1({
                            session_id: t.session_id,
                            remoteMediaPlayerState: {
                                state: t.state,
                                settings: t.settings
                            }
                        });
                    });
                });
            }), function(e1) {
                return M.apply(this, arguments);
            })
        },
        {
            key: "startTranscription",
            value: function(e1) {
                this.sendMessageToCallMachine(Na({
                    action: "daily-method-start-transcription"
                }, e1));
            }
        },
        {
            key: "stopTranscription",
            value: function() {
                this.sendMessageToCallMachine({
                    action: "daily-method-stop-transcription"
                });
            }
        },
        {
            key: "startDialOut",
            value: (E = n(function*(e1) {
                var t = this;
                Za(this._callState, "startDialOut()");
                var n = function(e1) {
                    if (e1) {
                        if (!Array.isArray(e1)) throw new Error("Error starting dial out: audio codec must be an array");
                        if (e1.length <= 0) throw new Error("Error starting dial out: audio codec array specified but empty");
                        e1.forEach(function(e1) {
                            if ("string" != typeof e1) throw new Error("Error starting dial out: audio codec must be a string");
                            if ("OPUS" !== e1 && "PCMU" !== e1 && "PCMA" !== e1 && "G722" !== e1) throw new Error("Error starting dial out: audio codec must be one of OPUS, PCMU, PCMA, G722");
                        });
                    }
                };
                if (!e1.sipUri && !e1.phoneNumber) throw new Error("Error starting dial out: either a sip uri or phone number must be provided");
                if (e1.sipUri && e1.phoneNumber) throw new Error("Error starting dial out: only one of sip uri or phone number must be provided");
                if (e1.sipUri) {
                    if ("string" != typeof e1.sipUri) throw new Error("Error starting dial out: sipUri must be a string");
                    if (!e1.sipUri.startsWith("sip:")) throw new Error("Error starting dial out: Invalid SIP URI, must start with 'sip:'");
                    if (e1.video && "boolean" != typeof e1.video) throw new Error("Error starting dial out: video must be a boolean value");
                    !function(e1) {
                        if (e1 && (n(e1.audio), e1.video)) {
                            if (!Array.isArray(e1.video)) throw new Error("Error starting dial out: video codec must be an array");
                            if (e1.video.length <= 0) throw new Error("Error starting dial out: video codec array specified but empty");
                            e1.video.forEach(function(e1) {
                                if ("string" != typeof e1) throw new Error("Error starting dial out: video codec must be a string");
                                if ("H264" !== e1 && "VP8" !== e1) throw new Error("Error starting dial out: video codec must be H264 or VP8");
                            });
                        }
                    }(e1.codecs);
                }
                if (e1.phoneNumber) {
                    if ("string" != typeof e1.phoneNumber) throw new Error("Error starting dial out: phoneNumber must be a string");
                    if (!/^\+\d{1,}$/.test(e1.phoneNumber)) throw new Error("Error starting dial out: Invalid phone number, must be valid phone number as per E.164");
                    e1.codecs && n(e1.codecs.audio);
                }
                return new Promise(function(n, r) {
                    t.sendMessageToCallMachine(Na({
                        action: "dialout-start"
                    }, e1), function(e1) {
                        e1.error ? r(e1.error) : n(e1);
                    });
                });
            }), function(e1) {
                return E.apply(this, arguments);
            })
        },
        {
            key: "stopDialOut",
            value: function(e1) {
                var t = this;
                return Za(this._callState, "stopDialOut()"), new Promise(function(n, r) {
                    t.sendMessageToCallMachine(Na({
                        action: "dialout-stop"
                    }, e1), function(e1) {
                        e1.error ? r(e1.error) : n(e1);
                    });
                });
            }
        },
        {
            key: "sendDTMF",
            value: (k = n(function*(e1) {
                var t = this;
                return Za(this._callState, "sendDTMF()"), function(e1) {
                    var t = e1.sessionId, n = e1.tones;
                    if (!t || !n) throw new Error("sessionId and tones are mandatory parameter");
                    if ("string" != typeof t || "string" != typeof n) throw new Error("sessionId and tones should be of string type");
                    if (n.length > 20) throw new Error("tones string must be upto 20 characters");
                    var r = /[^0-9A-D*#]/g, i = n.match(r);
                    if (i && i[0]) throw new Error("".concat(i[0], " is not valid DTMF tone"));
                }(e1), new Promise(function(n, r) {
                    t.sendMessageToCallMachine(Na({
                        action: "send-dtmf"
                    }, e1), function(e1) {
                        e1.error ? r(e1.error) : n(e1);
                    });
                });
            }), function(e1) {
                return k.apply(this, arguments);
            })
        },
        {
            key: "getNetworkStats",
            value: function() {
                var e1 = this;
                if (this._callState !== Er) return {
                    stats: {
                        latest: {}
                    }
                };
                return new Promise(function(t) {
                    e1.sendMessageToCallMachine({
                        action: "get-calc-stats"
                    }, function(n) {
                        t(Na({
                            stats: n.stats
                        }, e1._network));
                    });
                });
            }
        },
        {
            key: "testWebsocketConnectivity",
            value: (S = n(function*() {
                var e1 = this;
                if (rs(this._testCallInProgress, "testWebsocketConnectivity()"), this.needsLoad()) try {
                    yield this.load();
                } catch (e1) {
                    return Promise.reject(e1);
                }
                return new Promise(function(t, n) {
                    e1.sendMessageToCallMachine({
                        action: "test-websocket-connectivity"
                    }, function(e1) {
                        e1.error ? n(e1.error) : t(e1.results);
                    });
                });
            }), function() {
                return S.apply(this, arguments);
            })
        },
        {
            key: "abortTestWebsocketConnectivity",
            value: function() {
                this.sendMessageToCallMachine({
                    action: "abort-test-websocket-connectivity"
                });
            }
        },
        {
            key: "_validateVideoTrackForNetworkTests",
            value: function(e1) {
                return e1 ? e1 instanceof MediaStreamTrack ? !!Pa(e1, {
                    isLocalScreenVideo: !1
                }) || (console.error("Video track is not playable. This test needs a live video track."), !1) : (console.error("Video track needs to be of type `MediaStreamTrack`."), !1) : (console.error("Missing video track. You must provide a video track in order to run this test."), !1);
            }
        },
        {
            key: "testCallQuality",
            value: (w = n(function*(t) {
                var n = this;
                if (function(e1) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", n = arguments.length > 2 ? arguments[2] : void 0;
                    if (e1) {
                        var r = "".concat(t, " can not be called after preAuth(), startCamera(), or join() and call state has been initialized.");
                        throw n && (r += " ".concat(n)), console.error(r), new Error(r);
                    }
                }(this._dailyMainExecuted, "testCallQuality()"), t.videoTrack && !this._validateVideoTrackForNetworkTests(t.videoTrack)) throw new Error("Video track error");
                var r = this._testCallAlreadyInProgress, i = function(e1) {
                    r || (n._testCallInProgress = e1);
                };
                i(!0);
                var o = t.videoTrack, a = e1(t, Aa);
                if (this._preloadCache.videoTrackForConnectionQualityTest = o, this.needsLoad()) try {
                    var s = this._callState;
                    yield this.load(), this._callState = s;
                } catch (e1) {
                    return i(!1), Promise.reject(e1);
                }
                return new Promise(function(t) {
                    n.sendMessageToCallMachine(Na(Na({
                        action: "test-call-quality"
                    }, a), {}, {
                        dailyJsVersion: n.properties.dailyJsVersion
                    }), function(r) {
                        var o = r.results, a = o.result, s = e1(o, ja);
                        if ("failed" === a) {
                            var c, l = Na({}, s);
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
            }), function(e1) {
                return w.apply(this, arguments);
            })
        },
        {
            key: "stopTestCallQuality",
            value: function() {
                this.sendMessageToCallMachine({
                    action: "stop-test-call-quality"
                });
            }
        },
        {
            key: "testConnectionQuality",
            value: (b = n(function*(e1) {
                console.warn("testConnectionQuality() is deprecated: use testPeerToPeerCallQuality() instead");
                var t = yield this.testPeerToPeerCallQuality(e1), n = {
                    result: t.result,
                    secondsElapsed: t.secondsElapsed
                };
                return t.data && (n.data = {
                    maxRTT: t.data.maxRoundTripTime,
                    packetLoss: t.data.avgRecvPacketLoss
                }), n;
            }), function(e1) {
                return b.apply(this, arguments);
            })
        },
        {
            key: "testPeerToPeerCallQuality",
            value: (_ = n(function*(e1) {
                var t = this;
                if (rs(this._testCallInProgress, "testConnectionQuality()"), this.needsLoad()) try {
                    yield this.load();
                } catch (e1) {
                    return Promise.reject(e1);
                }
                var n = e1.videoTrack, r = e1.duration;
                if (!this._validateVideoTrackForNetworkTests(n)) throw new Error("Video track error");
                return this._preloadCache.videoTrackForConnectionQualityTest = n, new Promise(function(e1, n) {
                    t.sendMessageToCallMachine({
                        action: "test-p2p-call-quality",
                        duration: r
                    }, function(t) {
                        t.error ? n(t.error) : e1(t.results);
                    });
                });
            }), function(e1) {
                return _.apply(this, arguments);
            })
        },
        {
            key: "stopTestConnectionQuality",
            value: function() {
                console.warn("stopTestConnectionQuality() is deprecated: use stopTestPeerToPeerCallQuality() instead"), this.stopTestPeerToPeerCallQuality();
            }
        },
        {
            key: "stopTestPeerToPeerCallQuality",
            value: function() {
                this.sendMessageToCallMachine({
                    action: "stop-test-p2p-call-quality"
                });
            }
        },
        {
            key: "testNetworkConnectivity",
            value: (y = n(function*(e1) {
                var t = this;
                if (rs(this._testCallInProgress, "testNetworkConnectivity()"), this.needsLoad()) try {
                    yield this.load();
                } catch (e1) {
                    return Promise.reject(e1);
                }
                if (!this._validateVideoTrackForNetworkTests(e1)) throw new Error("Video track error");
                return this._preloadCache.videoTrackForNetworkConnectivityTest = e1, new Promise(function(e1, n) {
                    t.sendMessageToCallMachine({
                        action: "test-network-connectivity"
                    }, function(t) {
                        t.error ? n(t.error) : e1(t.results);
                    });
                });
            }), function(e1) {
                return y.apply(this, arguments);
            })
        },
        {
            key: "abortTestNetworkConnectivity",
            value: function() {
                this.sendMessageToCallMachine({
                    action: "abort-test-network-connectivity"
                });
            }
        },
        {
            key: "getCpuLoadStats",
            value: function() {
                var e1 = this;
                return new Promise(function(t, n) {
                    if (e1._callState === Er) e1.sendMessageToCallMachine({
                        action: "get-cpu-load-stats"
                    }, function(e1) {
                        t(e1.cpuStats);
                    });
                    else t({
                        cpuLoadState: void 0,
                        cpuLoadStateReason: void 0,
                        stats: {}
                    });
                });
            }
        },
        {
            key: "_validateEncodingLayerHasValidProperties",
            value: function(e1) {
                var t;
                if (!((null === (t = Object.keys(e1)) || void 0 === t ? void 0 : t.length) > 0)) throw new Error("Empty encoding is not allowed. At least one of these valid keys should be specified:" + Object.values(qa));
            }
        },
        {
            key: "_validateVideoSendSettings",
            value: function(e1, t) {
                var n = "screenVideo" === e1 ? [
                    "default-screen-video",
                    "detail-optimized",
                    "motion-optimized",
                    "motion-and-detail-balanced"
                ] : [
                    "default-video",
                    "bandwidth-optimized",
                    "bandwidth-and-quality-balanced",
                    "quality-optimized",
                    "adaptive-2-layers",
                    "adaptive-3-layers"
                ], r = "Video send settings should be either an object or one of the supported presets: ".concat(n.join());
                if ("string" == typeof t) {
                    if (!n.includes(t)) throw new Error(r);
                } else {
                    if ("object" !== i(t)) throw new Error(r);
                    if (!t.maxQuality && !t.encodings && void 0 === t.allowAdaptiveLayers) throw new Error("Video send settings must contain at least maxQuality, allowAdaptiveLayers or encodings attribute");
                    if (t.maxQuality && -1 === [
                        "low",
                        "medium",
                        "high"
                    ].indexOf(t.maxQuality)) throw new Error("maxQuality must be either low, medium or high");
                    if (t.encodings) {
                        var o = !1;
                        switch(Object.keys(t.encodings).length){
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
        },
        {
            key: "validateUpdateSendSettings",
            value: function(e1) {
                var t = this;
                if (!e1 || 0 === Object.keys(e1).length) throw new Error("Send settings must contain at least information for one track!");
                Object.entries(e1).forEach(function(e1) {
                    var n = g(e1, 2), r = n[0], i = n[1];
                    t._validateVideoSendSettings(r, i);
                });
            }
        },
        {
            key: "updateSendSettings",
            value: function(e1) {
                var t = this;
                return this.validateUpdateSendSettings(e1), this.needsLoad() ? (this._preloadCache.sendSettings = e1, {
                    sendSettings: this._preloadCache.sendSettings
                }) : new Promise(function(n, r) {
                    t.sendMessageToCallMachine({
                        action: "update-send-settings",
                        sendSettings: e1
                    }, function(e1) {
                        e1.error ? r(e1.error) : n(e1.sendSettings);
                    });
                });
            }
        },
        {
            key: "getSendSettings",
            value: function() {
                return this._sendSettings || this._preloadCache.sendSettings;
            }
        },
        {
            key: "getLocalAudioLevel",
            value: function() {
                return this._localAudioLevel;
            }
        },
        {
            key: "getRemoteParticipantsAudioLevel",
            value: function() {
                return this._remoteParticipantsAudioLevel;
            }
        },
        {
            key: "getActiveSpeaker",
            value: function() {
                return as(), this._activeSpeaker;
            }
        },
        {
            key: "setActiveSpeakerMode",
            value: function(e1) {
                return as(), this.sendMessageToCallMachine({
                    action: "set-active-speaker-mode",
                    enabled: e1
                }), this;
            }
        },
        {
            key: "activeSpeakerMode",
            value: function() {
                return as(), this._activeSpeakerMode;
            }
        },
        {
            key: "subscribeToTracksAutomatically",
            value: function() {
                return this._preloadCache.subscribeToTracksAutomatically;
            }
        },
        {
            key: "setSubscribeToTracksAutomatically",
            value: function(e1) {
                return Za(this._callState, "setSubscribeToTracksAutomatically()", "Use the subscribeToTracksAutomatically configuration property."), this._preloadCache.subscribeToTracksAutomatically = e1, this.sendMessageToCallMachine({
                    action: "daily-method-subscribe-to-tracks-automatically",
                    enabled: e1
                }), this;
            }
        },
        {
            key: "enumerateDevices",
            value: (m = n(function*() {
                var e1 = this;
                if (this._callObjectMode) {
                    var t = yield navigator.mediaDevices.enumerateDevices();
                    return "Firefox" === Lo() && Do().major > 115 && (t = t.filter(function(e1) {
                        return "audiooutput" !== e1.kind;
                    })), {
                        devices: t.map(function(e1) {
                            return JSON.parse(JSON.stringify(e1));
                        })
                    };
                }
                return new Promise(function(t) {
                    e1.sendMessageToCallMachine({
                        action: "enumerate-devices"
                    }, function(e1) {
                        t({
                            devices: e1.devices
                        });
                    });
                });
            }), function() {
                return m.apply(this, arguments);
            })
        },
        {
            key: "sendAppMessage",
            value: function(e1) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "*";
                if (Za(this._callState, "sendAppMessage()"), JSON.stringify(e1).length > 4096) throw new Error("Message data too large. Max size is 4096");
                return this.sendMessageToCallMachine({
                    action: "app-msg",
                    data: e1,
                    to: t
                }), this;
            }
        },
        {
            key: "addFakeParticipant",
            value: function(e1) {
                return as(), Za(this._callState, "addFakeParticipant()"), this.sendMessageToCallMachine(Na({
                    action: "add-fake-participant"
                }, e1)), this;
            }
        },
        {
            key: "setShowNamesMode",
            value: function(e1) {
                return os(this._callObjectMode, "setShowNamesMode()"), as(), e1 && "always" !== e1 && "never" !== e1 ? (console.error('setShowNamesMode argument should be "always", "never", or false'), this) : (this.sendMessageToCallMachine({
                    action: "set-show-names",
                    mode: e1
                }), this);
            }
        },
        {
            key: "setShowLocalVideo",
            value: function() {
                var e1 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return os(this._callObjectMode, "setShowLocalVideo()"), as(), Za(this._callState, "setShowLocalVideo()"), "boolean" != typeof e1 ? (console.error("setShowLocalVideo only accepts a boolean value"), this) : (this.sendMessageToCallMachine({
                    action: "set-show-local-video",
                    show: e1
                }), this._showLocalVideo = e1, this);
            }
        },
        {
            key: "showLocalVideo",
            value: function() {
                return os(this._callObjectMode, "showLocalVideo()"), as(), this._showLocalVideo;
            }
        },
        {
            key: "setShowParticipantsBar",
            value: function() {
                var e1 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return os(this._callObjectMode, "setShowParticipantsBar()"), as(), Za(this._callState, "setShowParticipantsBar()"), "boolean" != typeof e1 ? (console.error("setShowParticipantsBar only accepts a boolean value"), this) : (this.sendMessageToCallMachine({
                    action: "set-show-participants-bar",
                    show: e1
                }), this._showParticipantsBar = e1, this);
            }
        },
        {
            key: "showParticipantsBar",
            value: function() {
                return os(this._callObjectMode, "showParticipantsBar()"), as(), this._showParticipantsBar;
            }
        },
        {
            key: "customIntegrations",
            value: function() {
                return as(), os(this._callObjectMode, "customIntegrations()"), this._customIntegrations;
            }
        },
        {
            key: "setCustomIntegrations",
            value: function(e1) {
                return as(), os(this._callObjectMode, "setCustomIntegrations()"), Za(this._callState, "setCustomIntegrations()"), ms(e1) ? (this.sendMessageToCallMachine({
                    action: "set-custom-integrations",
                    integrations: e1
                }), this._customIntegrations = e1, this) : this;
            }
        },
        {
            key: "startCustomIntegrations",
            value: function(e1) {
                var t = this;
                if (as(), os(this._callObjectMode, "startCustomIntegrations()"), Za(this._callState, "startCustomIntegrations()"), Array.isArray(e1) && e1.some(function(e1) {
                    return "string" != typeof e1;
                }) || !Array.isArray(e1) && "string" != typeof e1) return console.error("startCustomIntegrations() only accepts string | string[]"), this;
                var n = "string" == typeof e1 ? [
                    e1
                ] : e1, r = n.filter(function(e1) {
                    return !(e1 in t._customIntegrations);
                });
                return r.length ? (console.error("Can't find custom integration(s): \"".concat(r.join(", "), '"')), this) : (this.sendMessageToCallMachine({
                    action: "start-custom-integrations",
                    ids: n
                }), this);
            }
        },
        {
            key: "stopCustomIntegrations",
            value: function(e1) {
                var t = this;
                if (as(), os(this._callObjectMode, "stopCustomIntegrations()"), Za(this._callState, "stopCustomIntegrations()"), Array.isArray(e1) && e1.some(function(e1) {
                    return "string" != typeof e1;
                }) || !Array.isArray(e1) && "string" != typeof e1) return console.error("stopCustomIntegrations() only accepts string | string[]"), this;
                var n = "string" == typeof e1 ? [
                    e1
                ] : e1, r = n.filter(function(e1) {
                    return !(e1 in t._customIntegrations);
                });
                return r.length ? (console.error("Can't find custom integration(s): \"".concat(r.join(", "), '"')), this) : (this.sendMessageToCallMachine({
                    action: "stop-custom-integrations",
                    ids: n
                }), this);
            }
        },
        {
            key: "customTrayButtons",
            value: function() {
                return os(this._callObjectMode, "customTrayButtons()"), as(), this._customTrayButtons;
            }
        },
        {
            key: "updateCustomTrayButtons",
            value: function(e1) {
                return os(this._callObjectMode, "updateCustomTrayButtons()"), as(), Za(this._callState, "updateCustomTrayButtons()"), gs(e1) ? (this.sendMessageToCallMachine({
                    action: "update-custom-tray-buttons",
                    btns: e1
                }), this._customTrayButtons = e1, this) : (console.error("updateCustomTrayButtons only accepts a dictionary of the type ".concat(JSON.stringify(Wa))), this);
            }
        },
        {
            key: "theme",
            value: function() {
                return os(this._callObjectMode, "theme()"), this.properties.theme;
            }
        },
        {
            key: "setTheme",
            value: function(e1) {
                var t = this;
                return os(this._callObjectMode, "setTheme()"), new Promise(function(n, r) {
                    try {
                        t.validateProperties({
                            theme: e1
                        }), t.properties.theme = Na({}, e1), t.sendMessageToCallMachine({
                            action: "set-theme",
                            theme: t.properties.theme
                        });
                        try {
                            t.emit(oi, {
                                action: oi,
                                theme: t.properties.theme
                            });
                        } catch (e1) {
                            console.log("could not emit 'theme-updated'", e1);
                        }
                        n(t.properties.theme);
                    } catch (e1) {
                        r(e1);
                    }
                });
            }
        },
        {
            key: "requestFullscreen",
            value: (f = n(function*() {
                if (as(), this._iframe && !document.fullscreenElement && Co()) try {
                    (yield this._iframe.requestFullscreen) ? this._iframe.requestFullscreen() : this._iframe.webkitRequestFullscreen();
                } catch (e1) {
                    console.log("could not make video call fullscreen", e1);
                }
            }), function() {
                return f.apply(this, arguments);
            })
        },
        {
            key: "exitFullscreen",
            value: function() {
                as(), document.fullscreenElement ? document.exitFullscreen() : document.webkitFullscreenElement && document.webkitExitFullscreen();
            }
        },
        {
            key: "getSidebarView",
            value: (h = n(function*() {
                var e1 = this;
                return this._callObjectMode ? (console.error("getSidebarView is not available in callObject mode"), Promise.resolve(null)) : new Promise(function(t) {
                    e1.sendMessageToCallMachine({
                        action: "get-sidebar-view"
                    }, function(e1) {
                        t(e1.view);
                    });
                });
            }), function() {
                return h.apply(this, arguments);
            })
        },
        {
            key: "setSidebarView",
            value: function(e1) {
                return this._callObjectMode ? (console.error("setSidebarView is not available in callObject mode"), this) : (this.sendMessageToCallMachine({
                    action: "set-sidebar-view",
                    view: e1
                }), this);
            }
        },
        {
            key: "room",
            value: (d = n(function*() {
                var e1 = this, t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).includeRoomConfigDefaults, n = void 0 === t || t;
                return this._accessState.access === Lr || this.needsLoad() ? this.properties.url ? {
                    roomUrlPendingJoin: this.properties.url
                } : null : new Promise(function(t) {
                    e1.sendMessageToCallMachine({
                        action: "lib-room-info",
                        includeRoomConfigDefaults: n
                    }, function(e1) {
                        delete e1.action, delete e1.callbackStamp, t(e1);
                    });
                });
            }), function() {
                return d.apply(this, arguments);
            })
        },
        {
            key: "geo",
            value: (l = n(function*() {
                try {
                    var e1 = yield fetch("https://gs.daily.co/_ks_/x-swsl/:");
                    return {
                        current: (yield e1.json()).geo
                    };
                } catch (e1) {
                    return console.error("geo lookup failed", e1), {
                        current: ""
                    };
                }
            }), function() {
                return l.apply(this, arguments);
            })
        },
        {
            key: "setNetworkTopology",
            value: (a = n(function*(e1) {
                var t = this;
                return as(), Za(this._callState, "setNetworkTopology()"), new Promise(function(n, r) {
                    t.sendMessageToCallMachine({
                        action: "set-network-topology",
                        opts: e1
                    }, function(e1) {
                        e1.error ? r({
                            error: e1.error
                        }) : n({
                            workerId: e1.workerId
                        });
                    });
                });
            }), function(e1) {
                return a.apply(this, arguments);
            })
        },
        {
            key: "getNetworkTopology",
            value: (o = n(function*() {
                var e1 = this;
                return new Promise(function(t, n) {
                    e1.needsLoad() && t({
                        topology: "none"
                    }), e1.sendMessageToCallMachine({
                        action: "get-network-topology"
                    }, function(e1) {
                        e1.error ? n({
                            error: e1.error
                        }) : t({
                            topology: e1.topology
                        });
                    });
                });
            }), function() {
                return o.apply(this, arguments);
            })
        },
        {
            key: "setPlayNewParticipantSound",
            value: function(e1) {
                if (as(), "number" != typeof e1 && !0 !== e1 && !1 !== e1) throw new Error("argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(e1));
                this.sendMessageToCallMachine({
                    action: "daily-method-set-play-ding",
                    arg: e1
                });
            }
        },
        {
            key: "on",
            value: function(e1, t) {
                return this._inputEventsOn[e1] = {}, this.sendMessageToCallMachine({
                    action: uo,
                    on: e1
                }), v.prototype.on.call(this, e1, t);
            }
        },
        {
            key: "once",
            value: function(e1, t) {
                return this._inputEventsOn[e1] = {}, this.sendMessageToCallMachine({
                    action: uo,
                    on: e1
                }), v.prototype.once.call(this, e1, t);
            }
        },
        {
            key: "off",
            value: function(e1, t) {
                return delete this._inputEventsOn[e1], this.isDestroyed() || this.sendMessageToCallMachine({
                    action: uo,
                    off: e1
                }), v.prototype.off.call(this, e1, t);
            }
        },
        {
            key: "validateProperties",
            value: function(e1) {
                for(var t in e1){
                    if (!Ha[t]) throw new Error("unrecognized property '".concat(t, "'"));
                    if (Ha[t].validate && !Ha[t].validate(e1[t], this)) throw new Error("property '".concat(t, "': ").concat(Ha[t].help));
                }
            }
        },
        {
            key: "assembleMeetingUrl",
            value: function() {
                var e1, t, n = Na(Na({}, this.properties), {}, {
                    emb: this._callFrameId,
                    embHref: encodeURIComponent(window.location.href),
                    proxy: null !== (e1 = window._dailyConfig) && void 0 !== e1 && e1.proxyUrl ? encodeURIComponent(null === (t = window._dailyConfig) || void 0 === t ? void 0 : t.proxyUrl) : void 0
                }), r = n.url.match(/\?/) ? "&" : "?";
                return n.url + r + Object.keys(Ha).filter(function(e1) {
                    return Ha[e1].queryString && void 0 !== n[e1];
                }).map(function(e1) {
                    return "".concat(Ha[e1].queryString, "=").concat(n[e1]);
                }).join("&");
            }
        },
        {
            key: "needsLoad",
            value: function() {
                return [
                    br,
                    wr,
                    Mr,
                    Tr
                ].includes(this._callState);
            }
        },
        {
            key: "sendMessageToCallMachine",
            value: function(e1, t) {
                if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
                this._messageChannel.sendMessageToCallMachine(e1, t, this._iframe, this._callFrameId);
            }
        },
        {
            key: "forwardPackagedMessageToCallMachine",
            value: function(e1) {
                this._messageChannel.forwardPackagedMessageToCallMachine(e1, this._iframe, this._callFrameId);
            }
        },
        {
            key: "addListenerForPackagedMessagesFromCallMachine",
            value: function(e1) {
                return this._messageChannel.addListenerForPackagedMessagesFromCallMachine(e1, this._callFrameId);
            }
        },
        {
            key: "removeListenerForPackagedMessagesFromCallMachine",
            value: function(e1) {
                this._messageChannel.removeListenerForPackagedMessagesFromCallMachine(e1);
            }
        },
        {
            key: "handleMessageFromCallMachine",
            value: function(t) {
                switch(t.action){
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
                        } catch (e1) {
                            console.log("could not emit", t, e1);
                        }
                        break;
                    case hi:
                        this._joinedCallback && (this._joinedCallback(t.participants), this._joinedCallback = null);
                        try {
                            this.emit(t.action, t);
                        } catch (e1) {
                            console.log("could not emit", t, e1);
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
                            } catch (e1) {
                                console.error("track events error", e1);
                            }
                            if (!this.compareEqualForParticipantUpdateEvent(t.participant, this._participants[r])) {
                                this._participants[r] = Na({}, t.participant), this.toggleParticipantAudioBasedOnNativeAudioFocus();
                                try {
                                    this.emit(t.action, t);
                                } catch (e1) {
                                    console.log("could not emit", t, e1);
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
                            } catch (e1) {
                                console.log("could not emit", t, e1);
                            }
                        }
                        break;
                    case yi:
                        if (!N(this._participantCounts, t.participantCounts)) {
                            this._participantCounts = t.participantCounts;
                            try {
                                this.emit(t.action, t);
                            } catch (e1) {
                                console.log("could not emit", t, e1);
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
                            } catch (e1) {
                                console.log("could not emit", t, e1);
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
                            } catch (e1) {
                                console.log("could not emit", t, e1);
                            }
                        }
                        break;
                    case ao:
                        var s;
                        this._iframe && !t.preserveIframe && (this._iframe.src = ""), this._updateCallState(Tr), this.resetMeetingDependentVars(), this._loadedCallback && (this._loadedCallback(t.errorMsg), this._loadedCallback = null), t.preserveIframe;
                        var c = e1(t, La);
                        null != c && null !== (s = c.error) && void 0 !== s && s.details && (c.error.details = JSON.parse(c.error.details)), this._maybeSendToSentry(t), this._joinedCallback && (this._joinedCallback(null, c), this._joinedCallback = null);
                        try {
                            this.emit(t.action, c);
                        } catch (e1) {
                            console.log("could not emit", t, e1);
                        }
                        break;
                    case pi:
                        this._callState !== Tr && this._updateCallState(Mr), this.resetMeetingDependentVars(), this._resolveLeave && (this._resolveLeave(), this._resolveLeave = null);
                        try {
                            this.emit(t.action, t);
                        } catch (e1) {
                            console.log("could not emit", t, e1);
                        }
                        break;
                    case "selected-devices-updated":
                        if (t.devices) try {
                            this.emit(t.action, t);
                        } catch (e1) {
                            console.log("could not emit", t, e1);
                        }
                        break;
                    case Wi:
                        var l = t.threshold, u = t.quality;
                        if (l !== this._network.threshold || u !== this._network.quality) {
                            this._network.quality = u, this._network.threshold = l;
                            try {
                                this.emit(t.action, t);
                            } catch (e1) {
                                console.log("could not emit", t, e1);
                            }
                        }
                        break;
                    case Hi:
                        if (t && t.cpuLoadState) try {
                            this.emit(t.action, t);
                        } catch (e1) {
                            console.log("could not emit", t, e1);
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
                            } catch (e1) {
                                console.log("could not emit", t, e1);
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
                        } catch (e1) {
                            console.log("could not emit", t, e1);
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
                            } catch (e1) {
                                console.log("could not emit", t, e1);
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
                        } catch (e1) {
                            console.log("could not emit", t, e1);
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
                            } catch (e1) {
                                console.log("could not emit", t, e1);
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
                            } catch (e1) {
                                console.log("could not emit", t, e1);
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
                            } catch (e1) {
                                console.log("could not emit", t, e1);
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
                        var m = t.session_id, v = this._rmpPlayerState[m];
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
                        } catch (e1) {
                            console.log("could not emit", t, e1);
                        }
                        break;
                    case "request-fullscreen":
                        this.requestFullscreen();
                        break;
                    case "request-exit-fullscreen":
                        this.exitFullscreen();
                }
            }
        },
        {
            key: "maybeEventRecordingStopped",
            value: function(e1, t) {
                var n = "record";
                if (e1 && !t.local && !1 === t[n] && e1[n] !== t[n]) try {
                    this.emit(ji, {
                        action: ji
                    });
                } catch (e1) {
                    console.log("could not emit", e1);
                }
            }
        },
        {
            key: "maybeEventRecordingStarted",
            value: function(e1, t) {
                var n = "record";
                if (e1 && !t.local && !0 === t[n] && e1[n] !== t[n]) try {
                    this.emit(Ai, {
                        action: Ai
                    });
                } catch (e1) {
                    console.log("could not emit", e1);
                }
            }
        },
        {
            key: "maybeEventTrackStopped",
            value: function(e1, t, n, r) {
                if (e1 && ("ended" === e1.readyState || !t || e1.id !== t.id)) try {
                    this.emit(Ci, {
                        action: Ci,
                        track: e1,
                        participant: n,
                        type: r
                    });
                } catch (e1) {
                    console.log("maybeEventTrackStopped: could not emit", e1);
                }
            }
        },
        {
            key: "maybeEventTrackStarted",
            value: function(e1, t, n, r) {
                if (t && (!e1 || "ended" === e1.readyState || t.id !== e1.id)) try {
                    this.emit(Ti, {
                        action: Ti,
                        track: t,
                        participant: n,
                        type: r
                    });
                } catch (e1) {
                    console.log("maybeEventTrackStarted: could not emit", e1);
                }
            }
        },
        {
            key: "maybeParticipantTracksStopped",
            value: function(e1, t) {
                if (e1) for(var n in e1.tracks)this.maybeEventTrackStopped(e1.tracks[n].track, t && t.tracks[n] ? t.tracks[n].track : null, t, n);
            }
        },
        {
            key: "maybeParticipantTracksStarted",
            value: function(e1, t) {
                if (t) for(var n in t.tracks)this.maybeEventTrackStarted(e1 && e1.tracks[n] ? e1.tracks[n].track : null, t.tracks[n].track, t, n);
            }
        },
        {
            key: "compareEqualForRMPUpdateEvent",
            value: function(e1, t) {
                var n, r;
                return e1.state === t.state && (null === (n = e1.settings) || void 0 === n ? void 0 : n.volume) === (null === (r = t.settings) || void 0 === r ? void 0 : r.volume);
            }
        },
        {
            key: "emitDailyJSEvent",
            value: function(e1) {
                try {
                    this.emit(e1.action, e1);
                } catch (t) {
                    console.log("could not emit", e1, t);
                }
            }
        },
        {
            key: "compareEqualForParticipantUpdateEvent",
            value: function(e1, t) {
                return !!N(e1, t) && (!e1.videoTrack || !t.videoTrack || e1.videoTrack.id === t.videoTrack.id && e1.videoTrack.muted === t.videoTrack.muted && e1.videoTrack.enabled === t.videoTrack.enabled) && (!e1.audioTrack || !t.audioTrack || e1.audioTrack.id === t.audioTrack.id && e1.audioTrack.muted === t.audioTrack.muted && e1.audioTrack.enabled === t.audioTrack.enabled);
            }
        },
        {
            key: "nativeUtils",
            value: function() {
                return ko() ? "undefined" == typeof DailyNativeUtils ? (console.warn("in React Native, DailyNativeUtils is expected to be available"), null) : DailyNativeUtils : null;
            }
        },
        {
            key: "updateIsPreparingToJoin",
            value: function(e1) {
                this._updateCallState(this._callState, e1);
            }
        },
        {
            key: "_updateCallState",
            value: function(e1) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._isPreparingToJoin;
                if (e1 !== this._callState || t !== this._isPreparingToJoin) {
                    var n = this._callState, r = this._isPreparingToJoin;
                    this._callState = e1, this._isPreparingToJoin = t;
                    var i = es(n, r), o = es(this._callState, this._isPreparingToJoin);
                    i !== o && (this.updateKeepDeviceAwake(o), this.updateDeviceAudioMode(o), this.updateShowAndroidOngoingMeetingNotification(o), this.updateNoOpRecordingEnsuringBackgroundContinuity(o));
                }
            }
        },
        {
            key: "resetMeetingDependentVars",
            value: function() {
                this._participants = {}, this._participantCounts = $a, this._waitingParticipants = {}, this._activeSpeaker = {}, this._activeSpeakerMode = !1, this._didPreAuth = !1, this._accessState = {
                    access: Lr
                }, this._finalSummaryOfPrevSession = this._meetingSessionSummary, this._meetingSessionSummary = {}, this._meetingSessionState = bs(Va, this._callObjectMode), this._receiveSettings = {}, this._inputSettings = void 0, this._sendSettings = {}, this._localAudioLevel = 0, this._remoteParticipantsAudioLevel = {}, this._dailyMainExecuted = !1, this._bundleLoadTime = void 0, this._preloadCache;
            }
        },
        {
            key: "updateKeepDeviceAwake",
            value: function(e1) {
                ko() && this.nativeUtils().setKeepDeviceAwake(e1, this._callFrameId);
            }
        },
        {
            key: "updateDeviceAudioMode",
            value: function(e1) {
                if (ko() && !this.disableReactNativeAutoDeviceManagement("audio")) {
                    var t = e1 ? this._nativeInCallAudioMode : "idle";
                    this.nativeUtils().setAudioMode(t);
                }
            }
        },
        {
            key: "updateShowAndroidOngoingMeetingNotification",
            value: function(e1) {
                if (ko() && this.nativeUtils().setShowOngoingMeetingNotification) {
                    var t, n, r, i;
                    if (this.properties.reactNativeConfig && this.properties.reactNativeConfig.androidInCallNotification) {
                        var o = this.properties.reactNativeConfig.androidInCallNotification;
                        t = o.title, n = o.subtitle, r = o.iconName, i = o.disableForCustomOverride;
                    }
                    i && (e1 = !1), this.nativeUtils().setShowOngoingMeetingNotification(e1, t, n, r, this._callFrameId);
                }
            }
        },
        {
            key: "updateNoOpRecordingEnsuringBackgroundContinuity",
            value: function(e1) {
                ko() && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(e1);
            }
        },
        {
            key: "toggleParticipantAudioBasedOnNativeAudioFocus",
            value: function() {
                if (ko()) {
                    var e1 = window.store.getState();
                    for(var t in e1.streams){
                        var n = e1.streams[t];
                        n && n.pendingTrack && "audio" === n.pendingTrack.kind && (n.pendingTrack.enabled = this._hasNativeAudioFocus);
                    }
                }
            }
        },
        {
            key: "disableReactNativeAutoDeviceManagement",
            value: function(e1) {
                return this.properties.reactNativeConfig && this.properties.reactNativeConfig.disableAutoDeviceManagement && this.properties.reactNativeConfig.disableAutoDeviceManagement[e1];
            }
        },
        {
            key: "absoluteUrl",
            value: function(e1) {
                if (void 0 !== e1) {
                    var t = document.createElement("a");
                    return t.href = e1, t.href;
                }
            }
        },
        {
            key: "sayHello",
            value: function() {
                var e1 = "hello, world.";
                return console.log(e1), e1;
            }
        },
        {
            key: "_logCallQualityTestResults",
            value: function(e1) {
                if (this._dailyMainExecuted) {
                    var t = {
                        action: po,
                        level: "info",
                        code: 1012,
                        results: e1
                    };
                    this.sendMessageToCallMachine(t);
                } else console.warn("_logCallQualityTestResults() must be called after daily initialization");
            }
        },
        {
            key: "_logUseAfterDestroy",
            value: function() {
                if (this.needsLoad()) {
                    if (xa && !xa.needsLoad()) {
                        var e1 = {
                            action: po,
                            level: "error",
                            code: this.strictMode ? 9995 : 9997
                        };
                        xa.sendMessageToCallMachine(e1);
                    } else if (!this.strictMode) console.error("You are are attempting to use a call instance that was previously destroyed, which is unsupported. Please remove `strictMode: false` from your constructor properties to enable strict mode to track down and fix this unsupported usage.");
                } else {
                    var t = {
                        action: po,
                        level: "error",
                        code: this.strictMode ? 9995 : 9997
                    };
                    this._messageChannel.sendMessageToCallMachine(t, null, this._iframe, this._callFrameId);
                }
            }
        },
        {
            key: "_logDuplicateInstanceAttempt",
            value: function() {
                var e1 = xa._dailyMainExecuted ? xa : this._dailyMainExecuted ? this : void 0;
                e1 ? e1.sendMessageToCallMachine({
                    action: po,
                    level: "error",
                    code: this.strictMode ? 9990 : 9992
                }) : (this._delayDuplicateInstanceLog = !0, xa._delayDuplicateInstanceLog = !0);
            }
        },
        {
            key: "_maybeSendToSentry",
            value: function(e1) {
                var t, n, r, i, o, a;
                if (null !== (t = e1.error) && void 0 !== t && t.type) {
                    if (![
                        "connection-error",
                        "end-of-life",
                        "no-room"
                    ].includes(e1.error.type)) return;
                }
                var s = null !== (n = this.properties) && void 0 !== n && n.url ? new URL(this.properties.url) : void 0, c = "production";
                s && s.host.includes(".staging.daily") && (c = "staging");
                var l, u, d, h, p, f = new Hn({
                    dsn: "https://f10f1c81e5d44a4098416c0867a8b740@o77906.ingest.sentry.io/168844",
                    transport: Kn,
                    integrations: [
                        new _r.GlobalHandlers({
                            onunhandledrejection: !1
                        })
                    ],
                    environment: c
                }), g = new tn(f, void 0, te.version());
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
                e1.error && (g.setTag("fatalErrorType", e1.error.type), g.setExtra("errorDetails", e1.error.details), (null === (l = e1.error.details) || void 0 === l ? void 0 : l.uri) && g.setTag("serverAddress", e1.error.details.uri), (null === (u = e1.error.details) || void 0 === u ? void 0 : u.workerGroup) && g.setTag("workerGroup", e1.error.details.workerGroup), (null === (d = e1.error.details) || void 0 === d ? void 0 : d.geoGroup) && g.setTag("geoGroup", e1.error.details.geoGroup), (null === (h = e1.error.details) || void 0 === h ? void 0 : h.bundleUrl) && g.setTag("bundleUrl", e1.error.details.bundleUrl), (null === (p = e1.error.details) || void 0 === p ? void 0 : p.on) && g.setTag("connectionAttempt", e1.error.details.on));
                g.setTags({
                    callMode: this._callObjectMode ? ko() ? "reactNative" : null !== (r = this.properties) && void 0 !== r && null !== (i = r.dailyConfig) && void 0 !== i && null !== (o = i.callMode) && void 0 !== o && o.includes("prebuilt") ? this.properties.dailyConfig.callMode : "custom" : "prebuilt-frame",
                    version: te.version()
                });
                var _ = (null === (a = e1.error) || void 0 === a ? void 0 : a.msg) || e1.errorMsg;
                g.run(function(e1) {
                    e1.captureException(new Error(_));
                });
            }
        }
    ], [
        {
            key: "supportedBrowser",
            value: function() {
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
                var e1 = z.getParser(So());
                return {
                    supported: !!Ao(),
                    mobile: "mobile" === e1.getPlatformType(),
                    name: e1.getBrowserName(),
                    version: e1.getBrowserVersion(),
                    supportsFullscreen: !!Co(),
                    supportsScreenShare: !!To(),
                    supportsSfu: !!Ao(),
                    supportsVideoProcessing: Oo(),
                    supportsAudioProcessing: xo()
                };
            }
        },
        {
            key: "version",
            value: function() {
                return "0.58.0";
            }
        },
        {
            key: "createCallObject",
            value: function() {
                var e1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return e1.layout = "none", new te(null, e1);
            }
        },
        {
            key: "wrap",
            value: function(e1) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (as(), !e1 || !e1.contentWindow || "string" != typeof e1.src) throw new Error("DailyIframe::Wrap needs an iframe-like first argument");
                return t.layout || (t.customLayout ? t.layout = "custom-v1" : t.layout = "browser"), new te(e1, t);
            }
        },
        {
            key: "createFrame",
            value: function(e1, t) {
                var n, r;
                as(), e1 && t ? (n = e1, r = t) : e1 && e1.append ? (n = e1, r = {}) : (n = document.body, r = e1 || {});
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
                window.navigator && window.navigator.userAgent.match(/Chrome\/61\./) ? o.allow = "microphone, camera" : o.allow = "microphone; camera; autoplay; display-capture; screen-wake-lock", o.style.visibility = "hidden", n.appendChild(o), o.style.visibility = null, Object.keys(i).forEach(function(e1) {
                    return o.style[e1] = i[e1];
                }), r.layout || (r.customLayout ? r.layout = "custom-v1" : r.layout = "browser");
                try {
                    return new te(o, r);
                } catch (e1) {
                    throw n.removeChild(o), e1;
                }
            }
        },
        {
            key: "createTransparentFrame",
            value: function() {
                var e1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                as();
                var t = document.createElement("iframe");
                return t.allow = "microphone; camera; autoplay", t.style.cssText = "\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      border: 0;\n      pointer-events: none;\n    ", document.body.appendChild(t), e1.layout || (e1.layout = "custom-v1"), te.wrap(t, e1);
            }
        },
        {
            key: "getCallInstance",
            value: function() {
                return xa;
            }
        }
    ]), te;
}();
function Xa(e1) {
    var t = {};
    for(var n in e1)e1[n] instanceof MediaStreamTrack ? t[n] = fo : "dailyConfig" === n ? (e1[n].modifyLocalSdpHook && (window._dailyConfig && (window._dailyConfig.modifyLocalSdpHook = e1[n].modifyLocalSdpHook), delete e1[n].modifyLocalSdpHook), e1[n].modifyRemoteSdpHook && (window._dailyConfig && (window._dailyConfig.modifyRemoteSdpHook = e1[n].modifyRemoteSdpHook), delete e1[n].modifyRemoteSdpHook), t[n] = e1[n]) : t[n] = e1[n];
    return t;
}
function Za(e1) {
    var t = arguments.length > 2 ? arguments[2] : void 0;
    if (e1 !== Er) {
        var n = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " only supported after join.");
        throw t && (n += " ".concat(t)), console.error(n), new Error(n);
    }
}
function es(e1, t) {
    return [
        kr,
        Er
    ].includes(e1) || t;
}
function ts(e1, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "This daily-js method", r = arguments.length > 3 ? arguments[3] : void 0;
    if (es(e1, t)) {
        var i = "".concat(n, " not supported after joining a meeting.");
        throw r && (i += " ".concat(r)), console.error(i), new Error(i);
    }
}
function ns(e1) {
    var t = arguments.length > 2 ? arguments[2] : void 0;
    if (!e1) {
        var n = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " requires preAuth(), startCamera(), or join() to initialize call state.");
        throw t && (n += " ".concat(t)), console.error(n), new Error(n);
    }
}
function rs(e1) {
    if (e1) {
        var t = "A pre-call quality test is in progress. Please try ".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " again once testing has completed. Use stopTestCallQuality() to end it early.");
        throw console.error(t), new Error(t);
    }
}
function is(e1) {
    if (!e1) {
        var t = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " is only supported on custom callObject instances");
        throw console.error(t), new Error(t);
    }
}
function os(e1) {
    if (e1) {
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
function cs(e1) {
    if (void 0 === e1) return !0;
    var t;
    if ("string" == typeof e1) t = e1;
    else try {
        t = JSON.stringify(e1), N(JSON.parse(t), e1) || console.warn("The userData provided will be modified when serialized.");
    } catch (e1) {
        throw Error("userData must be serializable to JSON: ".concat(e1));
    }
    if (t.length > 4096) throw Error("userData is too large (".concat(t.length, " characters). Maximum size suppported is ").concat(4096, "."));
    return !0;
}
function ls(e1, t) {
    for(var n = t.allowAllParticipantsKey, r = function(e1) {
        var t = [
            "local"
        ];
        return n || t.push("*"), e1 && !t.includes(e1);
    }, i = function(e1) {
        return !!(void 0 === e1.layer || Number.isInteger(e1.layer) && e1.layer >= 0 || "inherit" === e1.layer);
    }, o = function(e1) {
        return !!e1 && !(e1.video && !i(e1.video)) && !(e1.screenVideo && !i(e1.screenVideo));
    }, a = 0, s = Object.entries(e1); a < s.length; a++){
        var c = g(s[a], 2), l = c[0], u = c[1];
        if (!r(l) || !o(u)) return !1;
    }
    return !0;
}
function us(e1) {
    var t, n, r;
    return "object" === i(e1) && !!(e1.video && "object" === i(e1.video) || e1.audio && "object" === i(e1.audio)) && !(e1.video && !function(e1) {
        var t = [
            "type",
            "config"
        ];
        if (!e1) return !1;
        if ("object" !== i(e1)) return !1;
        if (!function(e1) {
            if ("string" != typeof e1) return !1;
            if (!Object.values(go).includes(e1)) return console.error("inputSettings video processor type invalid"), !1;
            return !0;
        }(e1.type)) return !1;
        if (e1.config) {
            if ("object" !== i(e1.config)) return !1;
            if (!function(e1, t) {
                var n = Object.keys(t);
                if (0 === n.length) return !0;
                var r = "invalid object in inputSettings -> video -> processor -> config";
                switch(e1){
                    case go.BGBLUR:
                        return n.length > 1 || "strength" !== n[0] ? (console.error(r), !1) : !("number" != typeof t.strength || t.strength <= 0 || t.strength > 1 || isNaN(t.strength)) || (console.error("".concat(r, "; expected: {0 < strength <= 1}, got: ").concat(t.strength)), !1);
                    case go.BGIMAGE:
                        return !(void 0 !== t.source && !function(e1) {
                            if ("default" === e1.source) return e1.type = "default", !0;
                            if (e1.source instanceof ArrayBuffer) return !0;
                            if (Z(e1.source)) return e1.type = "url", !!function(e1) {
                                var t = new URL(e1), n = t.pathname;
                                if ("data:" === t.protocol) try {
                                    var r = n.substring(n.indexOf(":") + 1, n.indexOf(";")).split("/")[1];
                                    return _o.includes(r);
                                } catch (e1) {
                                    return console.error("failed to deduce blob content type", e1), !1;
                                }
                                var i = n.split(".").at(-1).toLowerCase().trim();
                                return _o.includes(i);
                            }(e1.source) || (console.error("invalid image type; supported types: [".concat(_o.join(", "), "]")), !1);
                            var t, n;
                            return t = e1.source, n = Number(t), isNaN(n) || !Number.isInteger(n) || n <= 0 || n > yo ? (console.error("invalid image selection; must be an int, > 0, <= ".concat(yo)), !1) : (e1.type = "daily-preselect", !0);
                        }(t));
                    default:
                        return !0;
                }
            }(e1.type, e1.config)) return !1;
        }
        return Object.keys(e1).filter(function(e1) {
            return !t.includes(e1);
        }).forEach(function(t) {
            console.warn("invalid key inputSettings -> video -> processor : ".concat(t)), delete e1[t];
        }), !0;
    }(e1.video.processor)) && !(e1.audio && (n = e1.audio.processor, r = [
        "type"
    ], !n || "object" !== i(n) || (Object.keys(n).filter(function(e1) {
        return !r.includes(e1);
    }).forEach(function(e1) {
        console.warn("invalid key inputSettings -> audio -> processor : ".concat(e1)), delete n[e1];
    }), t = n.type, "string" != typeof t || !Object.values(mo).includes(t) && (console.error("inputSettings audio processor type invalid"), 1))));
}
function ds(e1) {
    var t, n, r = [];
    e1.video && !Oo(null !== (t = null === (n = window._dailyConfig) || void 0 === n ? void 0 : n.useLegacyVideoProcessor) && void 0 !== t && t) && (delete e1.video, r.push("video")), e1.audio && !xo() && (delete e1.audio, r.push("audio")), r.length > 0 && console.error("Ignoring settings for browser- or platform-unsupported input processor(s): ".concat(r.join(", ")));
}
function hs() {
    var e1 = Object.values(go).join(" | "), t = Object.values(mo).join(" | ");
    return "inputSettings must be of the form: { video?: { processor: { type: [ ".concat(e1, " ], config?: {} } }, audio?: { processor: {type: [ ").concat(t, " ] } } }");
}
function ps(e1) {
    var t = e1.allowAllParticipantsKey;
    return "receiveSettings must be of the form { [<remote participant id> | ".concat(Rr).concat(t ? ' | "'.concat(Br, '"') : "", "]: ") + '{ [video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], [screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] }}}';
}
function fs() {
    return "customIntegrations should be an object of type ".concat(JSON.stringify(za), ".");
}
function gs(e1) {
    if (e1 && "object" !== i(e1) || Array.isArray(e1)) return console.error("customTrayButtons should be an Object of the type ".concat(JSON.stringify(Wa), ".")), !1;
    if (e1) for(var t = 0, n = Object.entries(e1); t < n.length; t++)for(var r = g(n[t], 1)[0], o = 0, a = Object.entries(e1[r]); o < a.length; o++){
        var s = g(a[o], 2), c = s[0], l = s[1];
        if ("iconPath" === c && !Z(l)) return console.error("customTrayButton ".concat(c, " should be a url.")), !1;
        if ("iconPathDarkMode" === c && !Z(l)) return console.error("customTrayButton ".concat(c, " should be a url.")), !1;
        var u = Wa.id[c];
        if (!u) return console.error("customTrayButton does not support key ".concat(c)), !1;
        if (i(l) !== u) return console.error("customTrayButton ".concat(c, " should be a ").concat(u, ".")), !1;
    }
    return !0;
}
function ms(e1) {
    if (!e1 || e1 && "object" !== i(e1) || Array.isArray(e1)) return console.error(fs()), !1;
    for(var t = function(e1) {
        return "".concat(e1, " should be ").concat(za.id[e1]);
    }, n = function(e1, t) {
        return console.error("customIntegration ".concat(e1, ": ").concat(t));
    }, r = 0, o = Object.entries(e1); r < o.length; r++){
        var a = g(o[r], 1)[0];
        if (!("label" in e1[a])) return n(a, "label is required"), !1;
        if (!("location" in e1[a])) return n(a, "location is required"), !1;
        if (!("src" in e1[a]) && !("srcdoc" in e1[a])) return n(a, "src or srcdoc is required"), !1;
        for(var s = 0, c = Object.entries(e1[a]); s < c.length; s++){
            var l = g(c[s], 2), u = l[0], d = l[1];
            switch(u){
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
                    if ("srcdoc" in e1[a]) return n(a, "cannot have both src and srcdoc"), !1;
                    if (!Z(d)) return n(a, 'src "'.concat(d, '" is not a valid URL')), !1;
                    break;
                case "srcdoc":
                    if ("src" in e1[a]) return n(a, "cannot have both src and srcdoc"), !1;
                    if ("string" != typeof d) return n(a, t(u)), !1;
                    break;
                case "location":
                    if (![
                        "main",
                        "sidebar"
                    ].includes(d)) return n(a, t(u)), !1;
                    break;
                case "controlledBy":
                    if ("*" !== d && "owners" !== d && (!Array.isArray(d) || d.some(function(e1) {
                        return "string" != typeof e1;
                    }))) return n(a, t(u)), !1;
                    break;
                case "shared":
                    if ((!Array.isArray(d) || d.some(function(e1) {
                        return "string" != typeof e1;
                    })) && "owners" !== d && "boolean" != typeof d) return n(a, t(u)), !1;
                    break;
                default:
                    if (!za.id[u]) return console.error("customIntegration does not support key ".concat(u)), !1;
            }
        }
    }
    return !0;
}
function vs(e1, t) {
    if (void 0 === t) return !1;
    switch(i(t)){
        case "string":
            return i(e1) === t;
        case "object":
            if ("object" !== i(e1)) return !1;
            for(var n in e1)if (!vs(e1[n], t[n])) return !1;
            return !0;
        default:
            return !1;
    }
}
function ys(e1) {
    if ("object" !== i(e1)) throw new Error('RemoteMediaPlayerSettings: must be "object" type');
    if (e1.state && !Object.values(vo).includes(e1.state)) throw new Error("Invalid value for RemoteMediaPlayerSettings.state, valid values are: " + JSON.stringify(vo));
    if (e1.volume) {
        if ("number" != typeof e1.volume) throw new Error('RemoteMediaPlayerSettings.volume: must be "number" type');
        if (e1.volume < 0 || e1.volume > 2) throw new Error("RemoteMediaPlayerSettings.volume: must be between 0.0 - 2.0");
    }
}
function _s(e1, t, n) {
    return !("number" != typeof e1 || e1 < t || e1 > n);
}
function bs(e1, t) {
    return e1 && !t && delete e1.data, e1;
}

},{"81db1979691107e":"d5jf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
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
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
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
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
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
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1VQLm":[function(require,module,exports) {
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
"use strict";
var R = typeof Reflect === "object" ? Reflect : null;
var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R && typeof R.ownKeys === "function") ReflectOwnKeys = R.ownKeys;
else if (Object.getOwnPropertySymbols) ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
};
else ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
};
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
    if (typeof listener !== "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
}
Object.defineProperty(EventEmitter, "defaultMaxListeners", {
    enumerable: true,
    get: function() {
        return defaultMaxListeners;
    },
    set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        defaultMaxListeners = arg;
    }
});
EventEmitter.init = function() {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
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
    for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
    var doError = type === "error";
    var events = this._events;
    if (events !== undefined) doError = doError && events.error === undefined;
    else if (!doError) return false;
    // If there is no 'error' event listener then throw.
    if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
        // At least give some kind of context to the user
        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err; // Unhandled 'error' event
    }
    var handler = events[type];
    if (handler === undefined) return false;
    if (typeof handler === "function") ReflectApply(handler, this, args);
    else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for(var i = 0; i < len; ++i)ReflectApply(listeners[i], this, args);
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
            target.emit("newListener", type, listener.listener ? listener.listener : listener);
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
        if (typeof existing === "function") // Adding the second element, need to change to array.
        existing = events[type] = prepend ? [
            listener,
            existing
        ] : [
            existing,
            listener
        ];
        else if (prepend) existing.unshift(listener);
        else existing.push(listener);
        // Check for listener leak
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            // No error code for this since it is a Warning
            // eslint-disable-next-line no-restricted-syntax
            var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners " + "added. Use emitter.setMaxListeners() to " + "increase limit");
            w.name = "MaxListenersExceededWarning";
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
        if (--this._eventsCount === 0) this._events = Object.create(null);
        else {
            delete events[type];
            if (events.removeListener) this.emit("removeListener", type, list.listener || listener);
        }
    } else if (typeof list !== "function") {
        position = -1;
        for(i = list.length - 1; i >= 0; i--)if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else spliceOne(list, position);
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit("removeListener", type, originalListener || listener);
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
            if (--this._eventsCount === 0) this._events = Object.create(null);
            else delete events[type];
        }
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for(i = 0; i < keys.length; ++i){
            key = keys[i];
            if (key === "removeListener") continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
    }
    listeners = events[type];
    if (typeof listeners === "function") this.removeListener(type, listeners);
    else if (listeners !== undefined) // LIFO order
    for(i = listeners.length - 1; i >= 0; i--)this.removeListener(type, listeners[i]);
    return this;
};
function _listeners(target, type, unwrap) {
    var events = target._events;
    if (events === undefined) return [];
    var evlistener = events[type];
    if (evlistener === undefined) return [];
    if (typeof evlistener === "function") return unwrap ? [
        evlistener.listener || evlistener
    ] : [
        evlistener
    ];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
};
EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === "function") return emitter.listenerCount(type);
    else return listenerCount.call(emitter, type);
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
    var events = this._events;
    if (events !== undefined) {
        var evlistener = events[type];
        if (typeof evlistener === "function") return 1;
        else if (evlistener !== undefined) return evlistener.length;
    }
    return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};
function arrayClone(arr, n) {
    var copy = new Array(n);
    for(var i = 0; i < n; ++i)copy[i] = arr[i];
    return copy;
}
function spliceOne(list, index) {
    for(; index + 1 < list.length; index++)list[index] = list[index + 1];
    list.pop();
}
function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for(var i = 0; i < ret.length; ++i)ret[i] = arr[i].listener || arr[i];
    return ret;
}
function once(emitter, name) {
    return new Promise(function(resolve, reject) {
        function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
        }
        function resolver() {
            if (typeof emitter.removeListener === "function") emitter.removeListener("error", errorListener);
            resolve([].slice.call(arguments));
        }
        eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true
        });
        if (name !== "error") addErrorHandlerIfEventEmitter(emitter, errorListener, {
            once: true
        });
    });
}
function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === "function") eventTargetAgnosticAddListener(emitter, "error", handler, flags);
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === "function") {
        if (flags.once) emitter.once(name, listener);
        else emitter.on(name, listener);
    } else if (typeof emitter.addEventListener === "function") // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
        // IE does not have builtin `{ once: true }` support so we
        // have to do it manually.
        if (flags.once) emitter.removeEventListener(name, wrapListener);
        listener(arg);
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
}

},{}],"pbG0X":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.client = void 0;
const api_1 = require("b96d16ba4b5200a7");
const api = new api_1.Api({
    baseUrl: "https://api.vapi.ai",
    baseApiParams: {
        secure: true
    },
    securityWorker: async (securityData)=>{
        if (securityData) return {
            headers: {
                Authorization: `Bearer ${securityData}`
            }
        };
    }
});
exports.client = api;

},{"b96d16ba4b5200a7":"biEaI"}],"biEaI":[function(require,module,exports) {
"use strict";
/* eslint-disable */ /* tslint:disable */ /*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Api = exports.HttpClient = exports.ContentType = exports.CreateWebCallDTO = void 0;
class CreateWebCallDTO {
    /**
     * This is the assistant that will be used for the call. To use a transient assistant, use `assistant` instead.
     */ assistantId;
    /**
     * Overrides for the assistant's settings and template variables.
     */ assistantOverrides;
    /**
     * This is the assistant that will be used for the call. To use an existing assistant, use `assistantId` instead.
     */ assistant;
    /**
     * This will expose SIP URI you can use to connect to the call. Disabled by default.
     */ sipEnabled;
    /**
     * This is the metadata associated with the call.
     */ metadata;
}
exports.CreateWebCallDTO = CreateWebCallDTO;
var ContentType;
(function(ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
    ContentType["Text"] = "text/plain";
})(ContentType || (exports.ContentType = ContentType = {}));
class HttpClient {
    baseUrl = "https://api.vapi.ai";
    securityData = null;
    securityWorker;
    abortControllers = new Map();
    customFetch = (...fetchParams)=>fetch(...fetchParams);
    baseApiParams = {
        credentials: "same-origin",
        headers: {},
        redirect: "follow",
        referrerPolicy: "no-referrer"
    };
    constructor(apiConfig = {}){
        Object.assign(this, apiConfig);
    }
    setSecurityData = (data)=>{
        this.securityData = data;
    };
    encodeQueryParam(key, value) {
        const encodedKey = encodeURIComponent(key);
        return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
    }
    addQueryParam(query, key) {
        return this.encodeQueryParam(key, query[key]);
    }
    addArrayQueryParam(query, key) {
        const value = query[key];
        return value.map((v)=>this.encodeQueryParam(key, v)).join("&");
    }
    toQueryString(rawQuery) {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter((key)=>"undefined" !== typeof query[key]);
        return keys.map((key)=>Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)).join("&");
    }
    addQueryParams(rawQuery) {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }
    contentFormatters = {
        [ContentType.Json]: (input)=>input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
        [ContentType.Text]: (input)=>input !== null && typeof input !== "string" ? JSON.stringify(input) : input,
        [ContentType.FormData]: (input)=>Object.keys(input || {}).reduce((formData, key)=>{
                const property = input[key];
                formData.append(key, property instanceof Blob ? property : typeof property === "object" && property !== null ? JSON.stringify(property) : `${property}`);
                return formData;
            }, new FormData()),
        [ContentType.UrlEncoded]: (input)=>this.toQueryString(input)
    };
    mergeRequestParams(params1, params2) {
        return {
            ...this.baseApiParams,
            ...params1,
            ...params2 || {},
            headers: {
                ...this.baseApiParams.headers || {},
                ...params1.headers || {},
                ...params2 && params2.headers || {}
            }
        };
    }
    createAbortSignal = (cancelToken)=>{
        if (this.abortControllers.has(cancelToken)) {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) return abortController.signal;
            return void 0;
        }
        const abortController = new AbortController();
        this.abortControllers.set(cancelToken, abortController);
        return abortController.signal;
    };
    abortRequest = (cancelToken)=>{
        const abortController = this.abortControllers.get(cancelToken);
        if (abortController) {
            abortController.abort();
            this.abortControllers.delete(cancelToken);
        }
    };
    request = async ({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params })=>{
        const secureParams = (typeof secure === "boolean" ? secure : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {};
        const requestParams = this.mergeRequestParams(params, secureParams);
        const queryString = query && this.toQueryString(query);
        const payloadFormatter = this.contentFormatters[type || ContentType.Json];
        const responseFormat = format || requestParams.format;
        return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
            ...requestParams,
            headers: {
                ...requestParams.headers || {},
                ...type && type !== ContentType.FormData ? {
                    "Content-Type": type
                } : {}
            },
            signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
            body: typeof body === "undefined" || body === null ? null : payloadFormatter(body)
        }).then(async (response)=>{
            const r = response;
            r.data = null;
            r.error = null;
            const data = !responseFormat ? r : await response[responseFormat]().then((data)=>{
                if (r.ok) r.data = data;
                else r.error = data;
                return r;
            }).catch((e)=>{
                r.error = e;
                return r;
            });
            if (cancelToken) this.abortControllers.delete(cancelToken);
            if (!response.ok) throw data;
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
 */ class Api extends HttpClient {
    assistant = {
        /**
         * No description
         *
         * @tags Assistants
         * @name AssistantControllerCreate
         * @summary Create Assistant
         * @request POST:/assistant
         * @secure
         */ assistantControllerCreate: (data, params = {})=>this.request({
                path: `/assistant`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params
            }),
        /**
         * No description
         *
         * @tags Assistants
         * @name AssistantControllerFindAll
         * @summary List Assistants
         * @request GET:/assistant
         * @secure
         */ assistantControllerFindAll: (query, params = {})=>this.request({
                path: `/assistant`,
                method: "GET",
                query: query,
                secure: true,
                format: "json",
                ...params
            }),
        /**
         * No description
         *
         * @tags Assistants
         * @name AssistantControllerFindOne
         * @summary Get Assistant
         * @request GET:/assistant/{id}
         * @secure
         */ assistantControllerFindOne: (id, params = {})=>this.request({
                path: `/assistant/${id}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params
            }),
        /**
         * No description
         *
         * @tags Assistants
         * @name AssistantControllerUpdate
         * @summary Update Assistant
         * @request PATCH:/assistant/{id}
         * @secure
         */ assistantControllerUpdate: (id, data, params = {})=>this.request({
                path: `/assistant/${id}`,
                method: "PATCH",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params
            }),
        /**
         * No description
         *
         * @tags Assistants
         * @name AssistantControllerReplace
         * @summary Replace Assistant
         * @request PUT:/assistant/{id}
         * @secure
         */ assistantControllerReplace: (id, data, params = {})=>this.request({
                path: `/assistant/${id}`,
                method: "PUT",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params
            }),
        /**
         * No description
         *
         * @tags Assistants
         * @name AssistantControllerRemove
         * @summary Delete Assistant
         * @request DELETE:/assistant/{id}
         * @secure
         */ assistantControllerRemove: (id, params = {})=>this.request({
                path: `/assistant/${id}`,
                method: "DELETE",
                secure: true,
                format: "json",
                ...params
            })
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
         */ callControllerFindAll: (query, params = {})=>this.request({
                path: `/call`,
                method: "GET",
                query: query,
                secure: true,
                format: "json",
                ...params
            }),
        /**
         * No description
         *
         * @tags Calls
         * @name CallControllerFindOne
         * @summary Get Call
         * @request GET:/call/{id}
         * @secure
         */ callControllerFindOne: (id, params = {})=>this.request({
                path: `/call/${id}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params
            }),
        /**
         * No description
         *
         * @tags Calls
         * @name CallControllerCreatePhoneCall
         * @summary Create Phone Call
         * @request POST:/call/phone
         * @secure
         */ callControllerCreatePhoneCall: (data, params = {})=>this.request({
                path: `/call/phone`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params
            }),
        /**
         * No description
         *
         * @tags Calls
         * @name CallControllerCreateWebCall
         * @summary Create Web Call
         * @request POST:/call/web
         * @secure
         */ callControllerCreateWebCall: (data, params = {})=>this.request({
                path: `/call/web`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params
            })
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
         */ credentialControllerCreate: (data, params = {})=>this.request({
                path: `/credential`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params
            }),
        /**
         * No description
         *
         * @tags Credentials
         * @name CredentialControllerFindAll
         * @summary List Credentials
         * @request GET:/credential
         * @secure
         */ credentialControllerFindAll: (query, params = {})=>this.request({
                path: `/credential`,
                method: "GET",
                query: query,
                secure: true,
                format: "json",
                ...params
            }),
        /**
         * No description
         *
         * @tags Credentials
         * @name CredentialControllerFindOne
         * @summary Get Credential
         * @request GET:/credential/{id}
         * @secure
         */ credentialControllerFindOne: (id, params = {})=>this.request({
                path: `/credential/${id}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params
            }),
        /**
         * No description
         *
         * @tags Credentials
         * @name CredentialControllerUpdate
         * @summary Update Credential
         * @request PUT:/credential/{id}
         * @secure
         */ credentialControllerUpdate: (id, data, params = {})=>this.request({
                path: `/credential/${id}`,
                method: "PUT",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params
            }),
        /**
         * No description
         *
         * @tags Credentials
         * @name CredentialControllerRemove
         * @summary Delete Credential
         * @request DELETE:/credential/{id}
         * @secure
         */ credentialControllerRemove: (id, params = {})=>this.request({
                path: `/credential/${id}`,
                method: "DELETE",
                secure: true,
                format: "json",
                ...params
            })
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
         */ phoneNumberControllerBuy: (data, params = {})=>this.request({
                path: `/phone-number/buy`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params
            }),
        /**
         * No description
         *
         * @tags Phone Numbers
         * @name PhoneNumberControllerImportTwilio
         * @summary Import Twilio Number
         * @request POST:/phone-number/import/twilio
         * @secure
         */ phoneNumberControllerImportTwilio: (data, params = {})=>this.request({
                path: `/phone-number/import/twilio`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params
            }),
        /**
         * No description
         *
         * @tags Phone Numbers
         * @name PhoneNumberControllerImportVonage
         * @summary Import Vonage Number
         * @request POST:/phone-number/import/vonage
         * @secure
         */ phoneNumberControllerImportVonage: (data, params = {})=>this.request({
                path: `/phone-number/import/vonage`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params
            }),
        /**
         * No description
         *
         * @tags Phone Numbers
         * @name PhoneNumberControllerFindAll
         * @summary List Phone Numbers
         * @request GET:/phone-number
         * @secure
         */ phoneNumberControllerFindAll: (query, params = {})=>this.request({
                path: `/phone-number`,
                method: "GET",
                query: query,
                secure: true,
                format: "json",
                ...params
            }),
        /**
         * No description
         *
         * @tags Phone Numbers
         * @name PhoneNumberControllerFindOne
         * @summary Get Phone Number
         * @request GET:/phone-number/{id}
         * @secure
         */ phoneNumberControllerFindOne: (id, params = {})=>this.request({
                path: `/phone-number/${id}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params
            }),
        /**
         * No description
         *
         * @tags Phone Numbers
         * @name PhoneNumberControllerUpdate
         * @summary Update Phone Number
         * @request PATCH:/phone-number/{id}
         * @secure
         */ phoneNumberControllerUpdate: (id, data, params = {})=>this.request({
                path: `/phone-number/${id}`,
                method: "PATCH",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params
            }),
        /**
         * No description
         *
         * @tags Phone Numbers
         * @name PhoneNumberControllerRemove
         * @summary Delete Phone Number
         * @request DELETE:/phone-number/{id}
         * @secure
         */ phoneNumberControllerRemove: (id, params = {})=>this.request({
                path: `/phone-number/${id}`,
                method: "DELETE",
                secure: true,
                format: "json",
                ...params
            })
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
         */ metricsControllerFindAll: (query, params = {})=>this.request({
                path: `/metrics`,
                method: "GET",
                query: query,
                secure: true,
                format: "json",
                ...params
            })
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
         */ voiceLibraryControllerVoiceGetByProvider: (provider, params = {})=>this.request({
                path: `/voice-library/${provider}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params
            }),
        /**
         * No description
         *
         * @tags Voice Library
         * @name VoiceLibraryControllerVoiceLibrarySyncByProvider
         * @summary Sync voices in Voice Library by Providers
         * @request POST:/voice-library/sync/{provider}
         * @secure
         */ voiceLibraryControllerVoiceLibrarySyncByProvider: (provider, params = {})=>this.request({
                path: `/voice-library/sync/${provider}`,
                method: "POST",
                secure: true,
                format: "json",
                ...params
            })
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
         */ loggingControllerGetLogs: (query, params = {})=>this.request({
                path: `/logging`,
                method: "GET",
                query: query,
                secure: true,
                format: "json",
                ...params
            })
    };
}
exports.Api = Api;

},{}]},["86oZd","6rimH"], "6rimH", "parcelRequirec12f")

//# sourceMappingURL=index.8cfc62b9.js.map
