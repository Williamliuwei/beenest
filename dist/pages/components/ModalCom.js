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
var react_native_root_siblings_1 = require("react-native-root-siblings");
var WindowHeight = react_native_1.Dimensions.get('window').height;
var modalArr = [];
var ModalCom = (function (_super) {
    __extends(ModalCom, _super);
    function ModalCom(props) {
        return _super.call(this, props) || this;
    }
    ModalCom.show = function (component) {
        console.warn(this);
        var modal = new react_native_root_siblings_1.default(React.createElement(ModalEx, null, component));
        modalArr.push(modal);
    };
    ModalCom.hide = function () {
        if (modalArr.length > 0) {
            var modal = modalArr[modalArr.length - 1];
            if (modal instanceof react_native_root_siblings_1.default) {
                modal.destroy();
                modal = null;
                modalArr.pop();
            }
        }
    };
    ModalCom.getLength = function () {
        return modalArr ? modalArr.length : 0;
    };
    ModalCom.prototype.render = function () {
        return null;
    };
    return ModalCom;
}(React.Component));
exports.default = ModalCom;
var ModalEx = (function (_super) {
    __extends(ModalEx, _super);
    function ModalEx(props) {
        var _this = _super.call(this, props) || this;
        _this.hide = function (call) {
            react_native_1.Animated.timing(_this.state['top'], { toValue: WindowHeight, duration: 1 }).start(function () {
                if (call)
                    call();
            });
        };
        if (!_this.props.children['props']['closed'] || typeof _this.props.children['props']['closed'] !== 'function') {
            throw new Error('ModalEx内的子组件必须实现closed方法');
        }
        _this.state = {
            top: new react_native_1.Animated.Value(WindowHeight)
        };
        return _this;
    }
    ModalEx.prototype.componentDidMount = function () {
        this.show();
    };
    ModalEx.prototype.show = function () {
        react_native_1.Animated.timing(this.state['top'], { toValue: 0, duration: 1 }).start();
    };
    ModalEx.prototype.render = function () {
        return (React.createElement(react_native_1.Animated.View, { style: {
                width: '100%',
                height: '100%',
                backgroundColor: 'transparent',
                position: 'absolute',
                top: this.state['top']
            } }, this.props.children));
    };
    ModalEx.defaultProps = {};
    return ModalEx;
}(React.Component));
//# sourceMappingURL=ModalCom.js.map