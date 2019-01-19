"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isDebug = __DEV__;
function log() {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    if (isDebug) {
        console.log.apply(console, message);
    }
}
function debug() {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    if (isDebug) {
        console.debug.apply(console, message);
    }
}
function info() {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    if (isDebug) {
        console.info.apply(console, message);
    }
}
function error() {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    if (isDebug) {
        console.error.apply(console, message);
    }
}
function warn() {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    if (isDebug) {
        console.warn.apply(console, message);
    }
}
var LogUtils = {
    log: log, debug: debug, info: info, error: error, warn: warn
};
exports.default = LogUtils;
//# sourceMappingURL=LogUtils.js.map