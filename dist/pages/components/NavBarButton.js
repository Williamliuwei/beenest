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
var ViewConfig_1 = require("../../config/ViewConfig");
var NavBarButton = (function (_super) {
    __extends(NavBarButton, _super);
    function NavBarButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavBarButton.prototype.render = function () {
        if (this.props.image) {
            var titleView = void 0;
            if (this.props.title) {
                titleView = (React.createElement(react_native_1.View, { style: [styles.view, this.props.viewStyle] },
                    React.createElement(react_native_1.Text, { style: [styles.text, this.props.tvStyle] },
                        this.props.text,
                        " ? ",
                        this.props.text,
                        " : ",
                        this.props.titleFunction())));
            }
            return (React.createElement(react_native_1.TouchableOpacity, { onPress: this.props.onPress, activeOpacity: ViewConfig_1.default.ACTIVEOPACITY, style: [this.props.style, { flexDirection: ((this.props.text) ? 'row' : 'column') }] },
                React.createElement(react_native_1.View, { style: [styles.view, this.props.viewStyle] },
                    React.createElement(react_native_1.Image, { source: this.props.image, style: [styles.image, this.props.imageStyle] })),
                titleView));
        }
        else {
            return (React.createElement(react_native_1.TouchableOpacity, { activeOpacity: ViewConfig_1.default.ACTIVEOPACITY, onPress: this.props.onPress, style: this.props.style },
                React.createElement(react_native_1.View, { style: [styles.view, this.props.viewStyle] },
                    React.createElement(react_native_1.Text, { style: [styles.text, this.props.tvStyle] }, this.props.text ? this.props.text : this.props.titleFunction()))));
        }
    };
    return NavBarButton;
}(React.Component));
exports.default = NavBarButton;
var styles = react_native_1.StyleSheet.create({
    view: {
        minWidth: 40,
        minHeight: 44,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    text: {
        color: 'white', fontSize: 17
    },
    image: {}
});
//# sourceMappingURL=NavBarButton.js.map