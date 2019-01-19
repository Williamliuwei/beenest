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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var ViewConfig_1 = require("../../config/ViewConfig");
var Button_1 = require("./Button");
var RootScreen_1 = require("../../moudls/RootScreen");
var native_1 = require("mobx-react/native");
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        var _this = this;
        debugger;
        var NavigationBar = [];
        if (this.props.leftImage !== undefined) {
            NavigationBar.push(React.createElement(Button_1.default, { key: 'leftIcon', style: styles.leftIcon, onPress: this.props.leftImageAction, activeOpacity: ViewConfig_1.default.ACTIVEOPACITY },
                React.createElement(react_native_1.Image, { style: styles.leftImg, source: this.props.leftImage })));
        }
        if (this.props.leftView !== undefined) {
            var Component = this.props.leftView;
            NavigationBar.push(React.createElement(react_native_1.View, { key: 'letfView', style: { position: 'absolute', left: 0, top: 0 } },
                React.createElement(Component, null)));
        }
        if (this.props.title !== undefined) {
            NavigationBar.push(React.createElement(react_native_1.View, { key: 'title', style: styles.titleWrap },
                React.createElement(react_native_1.Text, { style: [styles.title, this.props.defaultTitleStyle] }, this.props.title)));
        }
        if (this.props.titleView !== undefined) {
            var Component = this.props.titleView;
            NavigationBar.push(React.createElement(Component, { key: 'titleView' }));
        }
        if (this.props.rightImage !== undefined && this.props.rightImage !== '') {
            NavigationBar.push(React.createElement(Button_1.default, { key: 'rightIcon', activeOpacity: ViewConfig_1.default.ACTIVEOPACITY, style: [styles.rightIcon, { top: RootScreen_1.rootScreen.statusBarHeight }], onPress: function () {
                    _this.props.onPress();
                } },
                React.createElement(react_native_1.Image, { style: [styles.rightImg, {}], source: this.props.rightImage })));
        }
        if (this.props.rightButton !== undefined) {
            NavigationBar.push(React.createElement(Button_1.default, { key: 'rightButton', activeOpacity: ViewConfig_1.default.ACTIVEOPACITY, style: styles.rightButton, onPress: this.props.rightButtonAction },
                React.createElement(react_native_1.Text, { style: styles.buttonTitleFont }, this.props.rightButton)));
        }
        if (this.props.rightMenu !== undefined) {
            NavigationBar.push(React.createElement(Button_1.default, { key: 'rightMenu', activeOpacity: ViewConfig_1.default.ACTIVEOPACITY, style: styles.rightMenu, onPress: this.props.rightMenuAction },
                React.createElement(react_native_1.Text, { style: { color: 'gray', fontSize: 12 } }, this.props.rightMenu),
                React.createElement(react_native_1.Image, { source: this.props.rightMenuImage, style: { width: 16, height: 16 } })));
        }
        if (this.props.rightView !== undefined) {
            var Component = this.props.rightView;
            NavigationBar.push(React.createElement(react_native_1.View, { key: 'rightView', style: { position: 'absolute', right: 0, top: 0 } },
                React.createElement(Component, null)));
        }
        return (React.createElement(react_native_1.View, { style: [styles.navigationBarContainer,
                {
                    height: RootScreen_1.rootScreen.statusBarHeight + RootScreen_1.rootScreen.headerHeight,
                    borderBottomWidth: this.props.borderBottomWidth || 0,
                    borderBottomColor: this.props.borderBottomColor || 'rgba(0,0,0,0)',
                    backgroundColor: this.props.backgroundColor || 'rgba(0,0,0,0)'
                }] }, NavigationBar));
    };
    Header = __decorate([
        native_1.observer
    ], Header);
    return Header;
}(React.Component));
exports.default = Header;
var styles = react_native_1.StyleSheet.create({
    navigationBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    titleWrap: {
        height: RootScreen_1.rootScreen.headerHeight,
        bottom: 0,
        zIndex: -5,
        width: react_native_1.Dimensions.get('window').width,
        position: 'absolute',
        alignItems: 'center'
    },
    title: {
        fontSize: 17,
        lineHeight: RootScreen_1.rootScreen.headerHeight - 2,
        color: 'rgba(19,19,19,1)'
    },
    leftIcon: {
        paddingLeft: 15,
        paddingRight: 15
    },
    leftImg: {
        width: 10,
        height: 17
    },
    rightIcon: {
        height: RootScreen_1.rootScreen.headerHeight,
        position: 'absolute',
        right: 10,
        alignItems: 'center'
    },
    rightImg: {
        width: 20,
        height: 17,
        top: (RootScreen_1.rootScreen.headerHeight - 17) / 2
    },
    rightButton: {
        position: 'absolute',
        right: 10,
        height: RootScreen_1.rootScreen.statusBarHeight,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonTitleFont: {
        color: 'white',
        fontSize: 15
    },
    rightMenu: {
        position: 'absolute',
        right: 10,
        height: RootScreen_1.rootScreen.statusBarHeight,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    }
});
//# sourceMappingURL=Header.js.map