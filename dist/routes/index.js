"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var react_navigation_1 = require("react-navigation");
var HomeStackRouters_1 = require("../routes/HomeStackRouters");
var StackRouters = react_navigation_1.createStackNavigator(HomeStackRouters_1.default, {
    initialRouteName: 'Index',
    navigationOptions: {
        tabBarVisible: false,
        header: null
    },
    transitionConfig: function () { return ({
        transitionSpec: {
            duration: 400,
            easing: react_native_1.Easing.out(react_native_1.Easing.poly(4)),
            timing: react_native_1.Animated.timing
        },
        screenInterpolator: function (sceneProps) { return CardStackInterpolator(sceneProps, Direction.HORIZONTAL); }
    }); },
    mode: 'card'
});
var Direction;
(function (Direction) {
    Direction[Direction["VERTICAL"] = 0] = "VERTICAL";
    Direction[Direction["HORIZONTAL"] = 1] = "HORIZONTAL";
})(Direction || (Direction = {}));
var CardStackInterpolator = function (sceneProps, direction) {
    var layout = sceneProps.layout, position = sceneProps.position, scene = sceneProps.scene;
    var index = scene.index;
    var opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1]
    });
    if (direction === Direction.VERTICAL) {
        var height = layout.initHeight;
        var translateY = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [height, 0, 0]
        });
        return { opacity: opacity, transform: [{ translateY: translateY }] };
    }
    else if (direction === Direction.HORIZONTAL) {
        var width = layout.initWidth;
        var translateX = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [width, 0, 0]
        });
        return { opacity: opacity, transform: [{ translateX: translateX }] };
    }
};
var AppContainer = react_navigation_1.createAppContainer(StackRouters);
exports.default = AppContainer;
//# sourceMappingURL=index.js.map