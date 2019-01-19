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
var LoadingStore_1 = require("../../stores/common/LoadingStore");
var BaseComponent_1 = require("../base/BaseComponent");
var Index = (function (_super) {
    __extends(Index, _super);
    function Index() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Index.prototype.setStatusBarColor = function () {
        return { color: 'red', imgAsStatusBar: false };
    };
    Index.prototype.loadData = function () {
        LoadingStore_1.loadingStore.hide();
    };
    Index.prototype.defaultTitle = function () {
        return '测试';
    };
    Index.prototype.renderChildren = function () {
        return (React.createElement(react_native_1.View, null,
            React.createElement(react_native_1.TouchableOpacity, { onPress: function () {
                } },
                React.createElement(react_native_1.Text, null, "\u57FA\u7840\u7528\u6CD5"))));
    };
    return Index;
}(BaseComponent_1.default));
exports.default = Index;
var MYText = (function (_super) {
    __extends(MYText, _super);
    function MYText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MYText.prototype.render = function () {
        return (React.createElement(react_native_1.View, { style: { height: 200, width: 200, flex: 1, backgroundColor: 'skyblue', alignItems: 'flex-end' }, onStartShouldSetResponder: function () { return true; }, onResponderGrant: this.props.closed },
            React.createElement(react_native_1.Text, { style: { color: '#fff', fontSize: 30 } }, "slfdkjlskdfjslkdfj")));
    };
    return MYText;
}(React.Component));
//# sourceMappingURL=index.js.map