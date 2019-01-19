import * as React from 'react';
import { Animated, Easing, Text } from 'react-native';
import { createSwitchNavigator, NavigationSceneRendererProps, createStackNavigator, createAppContainer } from 'react-navigation';
import HomeStackRouters from '../routes/HomeStackRouters';


const StackRouters = createStackNavigator(
    HomeStackRouters,
    {
        initialRouteName: 'Index', // 默认显示界面
        navigationOptions: {
            // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
            // headerTitle: "返回1",
            // headerStyle: { backgroundCsolor: '#fff' },
            // headerTitleStyle: {
            //     color: 'green'
            // }
            tabBarVisible: false,
            header: null
        },
        transitionConfig: () => ({
            transitionSpec: {
                duration: 400,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing
            },
            screenInterpolator: (sceneProps) => CardStackInterpolator(sceneProps, Direction.HORIZONTAL)
        }),
        mode: 'card'  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
        // headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
        // onTransitionStart: () => { console.log('导航栏切换开始'); },  // 回调
        // onTransitionEnd: () => { console.log('导航栏切换结束'); }  // 回调
    }
);

enum Direction {
    VERTICAL, HORIZONTAL
}
const CardStackInterpolator = (sceneProps: NavigationSceneRendererProps, direction: Direction) => {
    const { layout, position, scene } = sceneProps;
    const { index } = scene;
    const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1]
    });
    if (direction === Direction.VERTICAL) {
        const height = layout.initHeight;
        const translateY = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [height, 0, 0]
        });
        return { opacity, transform: [{ translateY }] };

    } else if (direction === Direction.HORIZONTAL) {
        const width = layout.initWidth;
        const translateX = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [width, 0, 0]
        });

        return { opacity, transform: [{ translateX }] };
    }

};

// export default StackRouters;
const AppContainer = createAppContainer(StackRouters);
export default AppContainer;
