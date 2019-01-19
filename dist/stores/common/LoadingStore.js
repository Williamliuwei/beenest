"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var LoadingStore = (function () {
    function LoadingStore() {
    }
    Object.defineProperty(LoadingStore.prototype, "gIsShowLoading", {
        get: function () {
            return this.isShowLoading;
        },
        enumerable: true,
        configurable: true
    });
    LoadingStore.prototype.show = function () {
        this.isShowLoading = true;
    };
    LoadingStore.prototype.hide = function () {
        this.isShowLoading = false;
    };
    __decorate([
        mobx_1.observable
    ], LoadingStore.prototype, "isShowLoading", void 0);
    __decorate([
        mobx_1.computed
    ], LoadingStore.prototype, "gIsShowLoading", null);
    __decorate([
        mobx_1.action
    ], LoadingStore.prototype, "show", null);
    __decorate([
        mobx_1.action
    ], LoadingStore.prototype, "hide", null);
    return LoadingStore;
}());
exports.loadingStore = new LoadingStore();
//# sourceMappingURL=LoadingStore.js.map