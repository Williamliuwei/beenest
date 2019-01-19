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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var RootScreen_1 = require("../moudls/RootScreen");
var LogUtils_1 = require("../utils/LogUtils");
var ColorConfig_1 = require("../config/ColorConfig");
var ModalCom_1 = require("./components/ModalCom");
var index_1 = require("../routes/index");
var lastBackPressed = Date.now();
var that;
var RootScreen = (function (_super) {
    __extends(RootScreen, _super);
    function RootScreen(props) {
        var _this = _super.call(this, props) || this;
        _this._handleAppStateChange = function (nextAppState) {
            if (nextAppState === 'active') {
                LogUtils_1.default.log('前台应用中...');
            }
            else {
                LogUtils_1.default.log('后台应用中...');
            }
        };
        that = _this;
        RootScreen.statusBarColors = new Set();
        return _this;
    }
    RootScreen.prototype.getCurrentRouteName = function (navigationState) {
        if (!navigationState) {
            return null;
        }
        var route = navigationState.routes[navigationState.index];
        if (route.routes) {
            return this.getCurrentRouteName(route);
        }
        return route.routeName;
    };
    RootScreen.prototype.getCurrentRouteParams = function (navigationState) {
        if (!navigationState) {
            return null;
        }
        var route = navigationState.routes[navigationState.index];
        if (route.routes) {
            return this.getCurrentRouteParams(route);
        }
        return route.params;
    };
    RootScreen.prototype._onNavigationStateChange = function (preState, currentState, action) {
        var _this = this;
        this.currentScreen = this.getCurrentRouteName(currentState);
        this._CurrentScreenParam = this.getCurrentRouteParams(currentState);
        RootScreen.statusBarColors.forEach(function (element) {
            if (_this.currentScreen === element.routeName) {
                if (element.imgAsStatusBar) {
                    if (react_native_1.Platform.OS === 'android') {
                        react_native_1.StatusBar.setBackgroundColor(ColorConfig_1.default.statusBar.TRANSPARENT, false);
                    }
                    react_native_1.StatusBar.setBarStyle('dark-content', false);
                }
                else {
                    if (react_native_1.Platform.OS === 'android') {
                        react_native_1.StatusBar.setBackgroundColor(ColorConfig_1.default.statusBar.TRANSPARENT, false);
                    }
                    react_native_1.StatusBar.setBarStyle('dark-content', false);
                }
                return;
            }
        });
        if (currentState.routes.length > 1) {
            react_native_1.BackHandler.removeEventListener('hardwareBackPress', that._onBackPressed);
        }
        else {
            react_native_1.BackHandler.addEventListener('hardwareBackPress', that._onBackPressed);
        }
    };
    RootScreen.prototype.render = function () {
        var prefix = react_native_1.Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';
        return (React.createElement(react_native_1.View, { style: {
                flex: 1,
                justifyContent: 'flex-start'
            } },
            React.createElement(index_1.default, { uriPrefix: "/app", onNavigationStateChange: this._onNavigationStateChange.bind(this) })));
    };
    RootScreen.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (react_native_1.Platform.OS === 'ios') {
                    react_native_1.NativeModules.UtilsModule.GetParameter().then(function (res) {
                        RootScreen_1.rootScreen.setStatusBarHeight(res.heightStatus);
                        RootScreen_1.rootScreen.setHeaderHeight(res.heightNav);
                        RootScreen_1.rootScreen.setTabHeight(res.heightTabBar);
                    });
                    react_native_1.NativeModules.UtilsModule.isUSA().then(function (res) {
                    });
                }
                else {
                    RootScreen_1.rootScreen.setStatusBarHeight(react_native_1.Platform.Version > 19 ? react_native_1.StatusBar.currentHeight : 0);
                }
                if (react_native_1.Platform.OS === 'android') {
                    react_native_1.StatusBar.setBackgroundColor(ColorConfig_1.default.statusBar.TRANSPARENT, false);
                }
                react_native_1.StatusBar.setBarStyle('dark-content', false);
                react_native_1.AppState.addEventListener('change', this._handleAppStateChange);
                react_native_1.BackHandler.addEventListener('hardwareBackPress', that._onBackPressed);
                return [2];
            });
        });
    };
    RootScreen.prototype.componentWillUnmount = function () {
        react_native_1.AppState.removeEventListener('change', this._handleAppStateChange);
    };
    RootScreen.prototype._onBackPressed = function () {
        if (ModalCom_1.default.getLength() > 0) {
            ModalCom_1.default.hide();
            return true;
        }
        else {
            if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) {
                react_native_1.BackHandler.removeEventListener('hardwareBackPress', this._onBackPressed);
                react_native_1.BackHandler.exitApp();
                return true;
            }
            lastBackPressed = Date.now();
            react_native_1.ToastAndroid.show('再按一次退出应用', react_native_1.ToastAndroid.SHORT);
        }
        return true;
    };
    return RootScreen;
}(React.Component));
exports.default = RootScreen;
//# sourceMappingURL=RootScreen.js.map