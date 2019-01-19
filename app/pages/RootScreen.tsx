import * as React from 'react';
import { AppState, BackHandler, NativeModules, Platform, StatusBar, ToastAndroid, View, Text } from 'react-native';
import { Color } from 'csstype';
import { rootScreen } from '../moudls/RootScreen';
import LogUtils from '../utils/LogUtils';
import ColorConfig from '../config/ColorConfig';
import ModalCom from './components/ModalCom';
import AppContainer from '../routes/index';

interface StatusBarColorsConfig {
    color: Color;
    routeName: string;
    imgAsStatusBar: boolean;
}

let lastBackPressed = Date.now();
let that;
export default class RootScreen extends React.Component<any, any> {

    public currentScreen: string;
    public static system: any; // 判断操作系统
    public static statusBarColors: Set<StatusBarColorsConfig>;
    public _CurrentScreenParam: any;
    public static routesLength: any;

    public constructor(props: any) {
        super(props);
        that = this;
        RootScreen.statusBarColors = new Set();
    }

    public getCurrentRouteName(navigationState: any): any {
        if (!navigationState) {
            return null;
        }
        const route = navigationState.routes[navigationState.index];
        // dive into nested navigators
        if (route.routes) {
            return this.getCurrentRouteName(route);
        }
        return route.routeName;
    }

    private getCurrentRouteParams(navigationState) {
        if (!navigationState) {
            return null;
        }
        const route = navigationState.routes[navigationState.index];
        // dive into nested navigators
        if (route.routes) {
            return this.getCurrentRouteParams(route);
        }
        return route.params;
    }

    public _onNavigationStateChange(preState, currentState, action) {
        this.currentScreen = this.getCurrentRouteName(currentState);
        // global.utils.setRouterName(this.currentScreen)

        this._CurrentScreenParam = this.getCurrentRouteParams(currentState);
        RootScreen.statusBarColors.forEach((element) => {
            if (this.currentScreen === element.routeName) {
                if (element.imgAsStatusBar) {
                    if (Platform.OS === 'android') {
                        StatusBar.setBackgroundColor(ColorConfig.statusBar.TRANSPARENT, false);
                    }
                    StatusBar.setBarStyle('dark-content', false);
                } else {
                    if (Platform.OS === 'android') {
                        StatusBar.setBackgroundColor(ColorConfig.statusBar.TRANSPARENT, false);
                    }
                    StatusBar.setBarStyle('dark-content', false);
                }

                return;
            }
        });

        if (currentState.routes.length > 1) {
            BackHandler.removeEventListener('hardwareBackPress', that._onBackPressed);
        } else {
            BackHandler.addEventListener('hardwareBackPress', that._onBackPressed);
        }
    }

    public render() {
        const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

        return (
            <View style={{
                flex: 1,
                justifyContent: 'flex-start'
            }}>
            <AppContainer
                    uriPrefix="/app"
                    onNavigationStateChange={this._onNavigationStateChange.bind(this)}
            />

            </View>
        );
    }

    public async componentDidMount() {
        // SplashScreen.hide();
        if (Platform.OS === 'ios') {
            NativeModules.UtilsModule.GetParameter().then((res) => {
                rootScreen.setStatusBarHeight(res.heightStatus);
                rootScreen.setHeaderHeight(res.heightNav);
                rootScreen.setTabHeight(res.heightTabBar);
            });
            NativeModules.UtilsModule.isUSA().then((res) => {
                // global.utils.setIsUSA(res);
            });
        } else {
            rootScreen.setStatusBarHeight(Platform.Version > 19 ? StatusBar.currentHeight : 0);
        }

        if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor(ColorConfig.statusBar.TRANSPARENT, false);
        }
        StatusBar.setBarStyle('dark-content', false);
        AppState.addEventListener('change', this._handleAppStateChange);
        BackHandler.addEventListener('hardwareBackPress', that._onBackPressed);
    }

    public componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }


    /* 再按一次退出函数，仅支持android */
    public _onBackPressed() {
        if (ModalCom.getLength() > 0) {
            ModalCom.hide();
            return true;
        } else {
            if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) {
                BackHandler.removeEventListener('hardwareBackPress', this._onBackPressed);
                BackHandler.exitApp();
                return true;
            }
            lastBackPressed = Date.now();
            ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        }
        return true;
    }

    public _handleAppStateChange = (nextAppState) => {
        if (nextAppState === 'active') {
            LogUtils.log('前台应用中...');
            // if (global.utils.userInfo) {
            //     NativeModules.DataModule.getUserInfo().then((res) => {
            //         utils.setUserInfo(res);
            //     });
            // }
        } else {
            LogUtils.log('后台应用中...');
        }
    }
}
