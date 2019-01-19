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
var create_react_class_1 = require("create-react-class");
var react_native_1 = require("react-native");
var topview = null;
var Topview = (function (_super) {
    __extends(Topview, _super);
    function Topview(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            count: 0,
            modelList: []
        };
        _this.state = {
            count: 0,
            modelList: [],
        };
        topview = _this;
        return _this;
    }
    Topview.prototype.componentDidMount = function () {
    };
    Topview.prototype.componentWillUnmount = function () {
    };
    Topview.prototype.add = function (c) {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                var _a = _this.state, modelList = _a.modelList, count = _a.count;
                ++count;
                var tmp = modelList.concat();
                tmp.push({
                    id: count,
                    component: c
                });
                _this.setState({
                    count: count,
                    modelList: tmp,
                });
                return resolve(count);
            });
        }).catch(function (e) {
            console.error(e);
        });
    };
    Topview.prototype.remove = function (id) {
        var _this = this;
        var _a = this.state, modelList = _a.modelList, count = _a.count;
        var index;
        return new Promise(function (resolve) {
            modelList.some(function (item, i) {
                if (item.id == id) {
                    index = i;
                    return true;
                }
            });
            if (index == null) {
                return resolve();
            }
            var tmp = modelList.concat();
            tmp.splice(index, 1);
            if (!tmp.length) {
                count = 0;
            }
            _this.setState({
                modelList: tmp,
                count: count,
            }, function () {
                return resolve();
            });
        }).catch(function (e) {
            console.error(e);
        });
    };
    Topview.prototype.replace = function (c, id) {
        var _this = this;
        return new Promise(function (resolve) {
            var _a = _this.state, modelList = _a.modelList, count = _a.count;
            var tmpList = modelList.concat();
            var tmpIndex;
            var tmpItem = tmpList.filter(function (item, index) {
                if (item.id === id) {
                    tmpIndex = index;
                    return true;
                }
            })[0];
            tmpItem = __assign({}, tmpItem, { component: c });
            tmpList.splice(tmpIndex, 1, tmpItem);
            _this.setState({
                modelList: tmpList
            }, function () {
                return resolve();
            });
        }).catch(function (e) {
            console.error(e);
        });
    };
    Topview.prototype.render = function () {
        var modelList = this.state.modelList;
        if (!modelList.length) {
            return null;
        }
        else {
            return (React.createElement(react_native_1.View, { pointerEvents: "box-none", style: Topview.styles.container }, modelList.map(function (item) {
                return item.component ? React.cloneElement(item.component, {
                    key: item.id
                }) : null;
            })));
        }
    };
    Topview.styles = react_native_1.StyleSheet.create({
        container: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        },
    });
    return Topview;
}(React.Component));
var originRegisterComponent = react_native_1.AppRegistry.registerComponent;
react_native_1.AppRegistry.registerComponent = function (element, func) {
    var reg = func();
    return originRegisterComponent(element, function () {
        return create_react_class_1.default({
            render: function () {
                return React.createElement(react_native_1.View, {
                    style: { flex: 1, }
                }, React.createElement(reg, this.props), React.createElement(Topview, null));
            }
        });
    });
};
exports.default = {
    getInstance: function () {
        return topview;
    },
    Topview: Topview,
};
//# sourceMappingURL=index.js.map