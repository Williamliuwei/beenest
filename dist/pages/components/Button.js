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
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            disabled: true
        };
        _this.lastClickTime = 0;
        return _this;
    }
    Button.prototype.debouncePress = function () {
        var clickTime = Date.now();
        if (!this.lastClickTime || Math.abs(this.lastClickTime - clickTime) > 350) {
            this.lastClickTime = clickTime;
            if (this.props.onPress) {
                this.props.onPress();
            }
            else {
                return '';
            }
        }
    };
    Button.prototype.render = function () {
        return (React.createElement(react_native_1.TouchableOpacity, { onPress: this.debouncePress.bind(this), activeOpacity: this.props.activeOpacity || 0.85, style: this.props.style, disabled: this.props.disabled }, this.props.children));
    };
    return Button;
}(React.Component));
exports.default = Button;
//# sourceMappingURL=Button.js.map