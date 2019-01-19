"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var CommonAnimated = (function () {
    function CommonAnimated() {
        this.state = {};
        this.animated = null;
        this.state = {
            opacityList: [0, 1],
            duration: 300,
            easing: react_native_1.Easing.elastic(0.8),
        };
    }
    CommonAnimated.prototype.getState = function () {
        return __assign({}, this.state);
    };
    CommonAnimated.prototype.stop = function () {
        if (this.animated) {
            this.animated.stop();
            this.animated = null;
        }
    };
    CommonAnimated.prototype.toIn = function () {
    };
    CommonAnimated.prototype.toOut = function () {
    };
    return CommonAnimated;
}());
var FadeAnimated = (function (_super) {
    __extends(FadeAnimated, _super);
    function FadeAnimated() {
        var _this = _super.call(this) || this;
        _this.state = { opacity: new react_native_1.Animated.Value(_this.getPropertyValue('opacity', true)) };
        _this.state = __assign({}, _this.state, { scaleList: [0, 1] });
        _this.state.opacity = new react_native_1.Animated.Value(_this.getPropertyValue('opacity', true));
        _this.state.scale = new react_native_1.Animated.Value(_this.getPropertyValue('scale', true));
        return _this;
    }
    FadeAnimated.prototype.getPropertyValue = function (type, tag) {
        if (tag) {
            return this.state[type + 'List'][0];
        }
        else {
            return this.state[type + 'List'][1];
        }
    };
    FadeAnimated.prototype.toIn = function () {
        return this.fade(true);
    };
    FadeAnimated.prototype.toOut = function () {
        return this.fade(false);
    };
    FadeAnimated.prototype.fade = function (tag) {
        var _this = this;
        this.stop();
        this.state.opacity.setValue(this.getPropertyValue('opacity', tag));
        this.state.scale.setValue(this.getPropertyValue('scale', tag));
        this.animated = react_native_1.Animated.parallel([
            react_native_1.Animated.timing(this.state.opacity, {
                toValue: this.getPropertyValue('opacity', !tag),
                duration: this.state.duration,
                easing: this.state.easing,
            }),
            react_native_1.Animated.timing(this.state.scale, {
                toValue: this.getPropertyValue('scale', !tag),
                duration: this.state.duration,
                easing: this.state.easing,
            }),
        ]);
        return new Promise(function (resolve) {
            _this.animated.start(function () {
                resolve('animated end');
            });
        }).catch(function (e) {
            console.log(e);
        });
    };
    return FadeAnimated;
}(CommonAnimated));
exports.FadeAnimated = FadeAnimated;
var SlideAnimated = (function (_super) {
    __extends(SlideAnimated, _super);
    function SlideAnimated() {
        var _this = _super.call(this) || this;
        _this.state = __assign({}, _this.state, { translateYList: [null, 0] });
        return _this;
    }
    SlideAnimated.prototype.reset = function (height) {
    };
    SlideAnimated.prototype.getPropertyValue = function (type, tag) {
        var tmp = tag ? this.state[type + 'List'][0] : this.state[type + 'List'][1];
        return tmp == null ? 0 : tmp;
    };
    SlideAnimated.prototype.toIn = function () {
        return this.slide(true);
    };
    SlideAnimated.prototype.toOut = function () {
        return this.slide(false);
    };
    SlideAnimated.prototype.slide = function (tag) {
    };
    return SlideAnimated;
}(CommonAnimated));
exports.SlideAnimated = SlideAnimated;
//# sourceMappingURL=index.js.map