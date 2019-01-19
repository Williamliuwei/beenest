"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var RootScreen = (function () {
    function RootScreen() {
        this.statusBarHeight = 20;
        this.headerHeight = 44;
        this.tabHeight = 50;
    }
    RootScreen.prototype.setStatusBarHeight = function (statusBarHeight) {
        this.statusBarHeight = statusBarHeight;
    };
    RootScreen.prototype.setHeaderHeight = function (headerHeight) {
        this.headerHeight = headerHeight;
    };
    RootScreen.prototype.setTabHeight = function (tabHeight) {
        this.tabHeight = tabHeight;
    };
    __decorate([
        mobx_1.observable
    ], RootScreen.prototype, "statusBarHeight", void 0);
    __decorate([
        mobx_1.observable
    ], RootScreen.prototype, "headerHeight", void 0);
    __decorate([
        mobx_1.observable
    ], RootScreen.prototype, "tabHeight", void 0);
    __decorate([
        mobx_1.action("设置状态栏高度")
    ], RootScreen.prototype, "setStatusBarHeight", null);
    __decorate([
        mobx_1.action("设置header高度")
    ], RootScreen.prototype, "setHeaderHeight", null);
    __decorate([
        mobx_1.action("设置底部tab高度")
    ], RootScreen.prototype, "setTabHeight", null);
    return RootScreen;
}());
exports.rootScreen = new RootScreen();
//# sourceMappingURL=RootScreen.js.map