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
var React = require("react");
var react_native_1 = require("react-native");
var index_1 = require("../common/animations/index");
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            topviewId: null,
            opening: false,
            closing: false,
        };
        _this.animated = null;
        _this.state = {
            topviewId: null,
            opening: false,
            closing: false,
        };
        _this.animated = new index_1.FadeAnimated();
        return _this;
    }
    Modal.prototype.componentDidMount = function () {
    };
    Modal.prototype.componentWillUnmount = function () {
    };
    Modal.prototype.handleMaskPress = function () {
        if (this.props.cancelable) {
        }
    };
    Modal.prototype.getContent = function (inner) {
        var tmp = inner == null ? this.props.children : inner;
        return (React.createElement(react_native_1.View, { style: [
                styles.container,
                {
                    alignItems: this.props.alignItems,
                }
            ] },
            React.createElement(react_native_1.TouchableOpacity, { style: [styles.mask, { opacity: this.props.opacity }], activeOpacity: this.props.opacity, onPress: this.handleMaskPress.bind(this) }),
            React.createElement(react_native_1.Animated.View, { style: [
                    styles.content,
                    {
                        flex: this.props.flex,
                        marginTop: this.props.alignItems == 'flex-start' ? this.props.marginTop : 0,
                        marginBottom: this.props.alignItems == 'flex-end' ? this.props.marginBottom : 0,
                        marginHorizontal: this.props.marginHorizontal || 0,
                        borderRadius: this.props.borderRadius,
                    },
                ] }, tmp || null)));
    };
    Modal.prototype.close = function () {
        if (this.state.closing || this.state.topviewId == null) {
            console.log('不能重复关闭');
            return Promise.reject();
        }
        this.state.closing = true;
        this.props.onClose && this.props.onClose(__assign({}, this.state));
        debugger;
    };
    Modal.prototype.render = function () {
        return null;
    };
    return Modal;
}(React.Component));
exports.default = Modal;
var styles = react_native_1.StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    mask: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#000',
        opacity: 0.3,
    },
    content: {
        flexDirection: 'row',
        overflow: 'hidden',
    }
});
//# sourceMappingURL=Modal.js.map