import { Color } from 'csstype';
import * as React from 'react';
import { BackHandler, Dimensions, Image, PixelRatio, SafeAreaView, StatusBar, StyleSheet, TextStyle, View } from 'react-native';
import ColorConfig from '../../config/ColorConfig';
import ImgConfig from '../../config/ImgConfig';
import { rootScreen } from '../../moudls/RootScreen';
import { loadingStore } from '../../stores/common/LoadingStore';
import Header from '../components/Header';
import ModalCom from '../components/ModalCom';
import NavBarButton from '../components/NavBarButton';

const deviceWidth = Dimensions.get('window').width;
let { width, height } = Dimensions.get('window');
const Pixio =  (value: any): number => {
    return value / PixelRatio.get();
};
export interface BaseProps {
    navigation?: any;
}
export default abstract class Base<T extends BaseProps> extends React.Component<T, any> {

    // navigation: any
    private color: string;
    private imgAsStatusBar: boolean;

    protected constructor(props: any) {
        super(props);
        const { color, imgAsStatusBar } = this.setStatusBarColor();
        this.color = color;
        this.imgAsStatusBar = imgAsStatusBar;
    }

    public handleBack = () => {
        if (ModalCom.getLength() > 0) {
            ModalCom.hide();
        }
        return true;
    }


    /**
     * 在这里做想到componentDidMount方法做的事
     */
    public abstract loadData(): void;

    /**
     * 标题
     */
    public defaultTitle(): string {
        return '标题';
    }

    /**
     * 标题样式
     */
    public defaultTitleStyle(): TextStyle {
        return {};
    }

    public defaultBarStyle() {
        return 'dark-content';
    }

    public rightImages(): string {
        return '';
    }

    /**
     * 左侧视图
     */
    public leftView(): Element {
        return <NavBarButton
            style={{ marginTop: rootScreen.statusBarHeight }}
            image={ImgConfig.NAVI_ARROW_BLACK}
            onPress={() => {
                // if (this.props.navigation) {
                //     this.handleBackPress();
                // }
            }}
        />;
    }

    /**
     * 右侧视图
     */
    public rightView(): Element {
        return <View />;
    }

    /**
     * header底部边框
     */
    public borderBottomWidth() {
        return Pixio(1);
    }
    /**
     * header底部边框颜色
     */
    public borderBottomColor() {
        return '#e2e2e3';
    }

    public defaultTintColor() {
        return this.imgAsStatusBar ? ColorConfig.statusBar.TRANSPARENT : this.color ? this.color : ColorConfig.statusBar.DEFAULT;
    }
    /**
     * 设置navigation颜色
     */
    public setNavigationBarColor() {
        return '#fff';
    }

    public defaultRenderNavigationBar() {
        return (
            <View style={{
                height: this.imgAsStatusBar ? 0 : (rootScreen.statusBarHeight + rootScreen.headerHeight),
                width: deviceWidth,
                backgroundColor: this.setNavigationBarColor()
            }}>
                <StatusBar
                    backgroundColor={this.defaultTintColor()}
                    translucent={true}
                    barStyle="dark-content"
                    hidden={false}
                />
                {
                    !this.imgAsStatusBar &&
                    <Header defaultTitleStyle={this.defaultTitleStyle()} leftView={this.leftView.bind(this)}
                    onPress={() => {}}
                        paddingTop={this.imgAsStatusBar ? 0 : rootScreen.statusBarHeight}
                        rightView={this.rightView.bind(this)}
                        rightImage={this.rightImages()} title={this.defaultTitle()}
                        borderBottomWidth={this.borderBottomWidth()}
                        borderBottomColor={this.borderBottomColor()}/>
                }
            </View>

        );

    }

    public render() {
        return (
            <View style={BaseStyles.container}>
                {/* {this.defaultRenderNavigationBar()} */}
                {
                    !loadingStore.gIsShowLoading ?
                    <SafeAreaView style={{ flex: 1, backgroundColor: '#F3F4F5' }}>
                    {this.renderChildren()}
                    </SafeAreaView>
                    : <View style={{width, height, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <View style= {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={ImgConfig.LOADING_GIF} style={{height: 64, width: 64}}/>
                        </View>
                      </View>
                }

            </View>
        );
    }

      // 加载等待页
    public renderLoadingView() {
        return (
        <View style={{width, height, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={ImgConfig.LOADING_GIF} style={{height: 64, width: 64}}/>
            </View>
        </View>
        );
    }

    /**
     * 实现你的UI视图
     */
    public abstract renderChildren(): Element;

    public componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }



    public handleBackPress = () => {
        // this.props.navigation.goBack(null);
        return true;
    }

    /**
     * @param color 沉浸式颜色
     * @param imgAsStatusBar 是否图片作为沉浸式
     */
    public abstract setStatusBarColor(): { color?: Color; imgAsStatusBar?: boolean };

    public componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        this.loadData();
    }

}

const BaseStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F4F5'

    }
});
