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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var ColorConfig_1 = require("../../config/ColorConfig");
var ImgConfig_1 = require("../../config/ImgConfig");
var RootScreen_1 = require("../../moudls/RootScreen");
var LoadingStore_1 = require("../../stores/common/LoadingStore");
var Header_1 = require("../components/Header");
var ModalCom_1 = require("../components/ModalCom");
var NavBarButton_1 = require("../components/NavBarButton");
var deviceWidth = react_native_1.Dimensions.get('window').width;
var _a = react_native_1.Dimensions.get('window'), width = _a.width, height = _a.height;
var Pixio = function (value) {
    return value / react_native_1.PixelRatio.get();
};
var Base = (function (_super) {
    __extends(Base, _super);
    function Base(props) {
        var _this = _super.call(this, props) || this;
        _this.handleBack = function () {
            if (ModalCom_1.default.getLength() > 0) {
                ModalCom_1.default.hide();
            }
            return true;
        };
        _this.handleBackPress = function () {
            return true;
        };
        var _a = _this.setStatusBarColor(), color = _a.color, imgAsStatusBar = _a.imgAsStatusBar;
        _this.color = color;
        _this.imgAsStatusBar = imgAsStatusBar;
        return _this;
    }
    Base.prototype.defaultTitle = function () {
        return '标题';
    };
    Base.prototype.defaultTitleStyle = function () {
        return {};
    };
    Base.prototype.defaultBarStyle = function () {
        return 'dark-content';
    };
    Base.prototype.rightImages = function () {
        return '';
    };
    Base.prototype.leftView = function () {
        return React.createElement(NavBarButton_1.default, { style: { marginTop: RootScreen_1.rootScreen.statusBarHeight }, image: ImgConfig_1.default.NAVI_ARROW_BLACK, onPress: function () {
            } });
    };
    Base.prototype.rightView = function () {
        return React.createElement(react_native_1.View, null);
    };
    Base.prototype.borderBottomWidth = function () {
        return Pixio(1);
    };
    Base.prototype.borderBottomColor = function () {
        return '#e2e2e3';
    };
    Base.prototype.defaultTintColor = function () {
        return this.imgAsStatusBar ? ColorConfig_1.default.statusBar.TRANSPARENT : this.color ? this.color : ColorConfig_1.default.statusBar.DEFAULT;
    };
    Base.prototype.setNavigationBarColor = function () {
        return '#fff';
    };
    Base.prototype.defaultRenderNavigationBar = function () {
        return (React.createElement(react_native_1.View, { style: {
                height: this.imgAsStatusBar ? 0 : (RootScreen_1.rootScreen.statusBarHeight + RootScreen_1.rootScreen.headerHeight),
                width: deviceWidth,
                backgroundColor: this.setNavigationBarColor()
            } },
            React.createElement(react_native_1.StatusBar, { backgroundColor: this.defaultTintColor(), translucent: true, barStyle: "dark-content", hidden: false }),
            !this.imgAsStatusBar &&
                React.createElement(Header_1.default, { defaultTitleStyle: this.defaultTitleStyle(), leftView: this.leftView.bind(this), onPress: function () { }, paddingTop: this.imgAsStatusBar ? 0 : RootScreen_1.rootScreen.statusBarHeight, rightView: this.rightView.bind(this), rightImage: this.rightImages(), title: this.defaultTitle(), borderBottomWidth: this.borderBottomWidth(), borderBottomColor: this.borderBottomColor() })));
    };
    Base.prototype.render = function () {
        return (React.createElement(react_native_1.View, { style: BaseStyles.container }, !LoadingStore_1.loadingStore.gIsShowLoading ?
            React.createElement(react_native_1.SafeAreaView, { style: { flex: 1, backgroundColor: '#F3F4F5' } }, this.renderChildren())
            : React.createElement(react_native_1.View, { style: { width: width, height: height, flex: 1, justifyContent: 'center', alignItems: 'center' } },
                React.createElement(react_native_1.View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' } },
                    React.createElement(react_native_1.Image, { source: ImgConfig_1.default.LOADING_GIF, style: { height: 64, width: 64 } })))));
    };
    Base.prototype.renderLoadingView = function () {
        return (React.createElement(react_native_1.View, { style: { width: width, height: height, flex: 1, justifyContent: 'center', alignItems: 'center' } },
            React.createElement(react_native_1.View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' } },
                React.createElement(react_native_1.Image, { source: ImgConfig_1.default.LOADING_GIF, style: { height: 64, width: 64 } }))));
    };
    Base.prototype.componentWillUnmount = function () {
        react_native_1.BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    };
    Base.prototype.componentDidMount = function () {
        react_native_1.BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        this.loadData();
    };
    return Base;
}(React.Component));
exports.default = Base;
var BaseStyles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F4F5'
    }
});
//# sourceMappingURL=BaseComponent.js.map