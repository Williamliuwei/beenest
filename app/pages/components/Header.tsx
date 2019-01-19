
/**
 * 导航栏标题
 */
import * as React from 'react';
import { Dimensions, Image, StyleSheet, Text, TextStyle, View } from 'react-native';
import ViewConfig from '../../config/ViewConfig';
import Button from './Button';
import { rootScreen } from '../../moudls/RootScreen';
import { observer } from 'mobx-react/native';

interface HeaderProps {
    title?: any; // 标题
    leftImage?: any; // header 左边图片
    leftImageAction?: any; // 点击左边图操作
    titleView?: any; // 自定义标题
    rightImage?: any; // 右边图片
    rightImgStyle?: any;
    rightImageAction?: any; // 右边图片动作
    rightButton?: any; // 右边文字按钮
    rightButtonAction?: any; // 右边文字按钮动作
    rightMenu?: any;  // menu 文字
    rightMenuAction?: any; // menu 动作
    rightMenuImage?: any; // menu 图片
    paddingTop: number; // 占位控制
    onPress?: any; // 按钮动作触发
    leftView?: any;
    rightView?: any;
    defaultTitleStyle?: TextStyle;
    borderBottomWidth?: any; // 底部边框
    borderBottomColor?: any; // 底部边框颜色
    backgroundColor?: any; // 导航背景颜色
    opacity?: any ; // 底部边框透明度
}

@observer
export default class Header extends React.Component<HeaderProps, any> {


    public render() {
        debugger;
        let NavigationBar = [];
        // 左边图片按钮
        if (this.props.leftImage !== undefined)  {
            NavigationBar.push(
                <Button
                    key={'leftIcon'}
                    style={styles.leftIcon}
                    onPress={this.props.leftImageAction}
                    activeOpacity={ViewConfig.ACTIVEOPACITY}
                >
                    <Image style={styles.leftImg} source={this.props.leftImage}/>
                </Button>
            );
        }

        // 左边View
        if (this.props.leftView !== undefined) {
            let Component = this.props.leftView;
            NavigationBar.push(
                <View key={'letfView'} style={{position: 'absolute', left: 0, top: 0}}>
                    <Component/>
                </View>
            );
        }

        // 标题
        if (this.props.title !== undefined) {
            NavigationBar.push(
                <View key={'title'} style={styles.titleWrap}>
                    <Text style={[styles.title, this.props.defaultTitleStyle]}>{this.props.title}</Text>
                </View>
            );
        }

        // 自定义标题View
        if (this.props.titleView !== undefined) {
            let Component = this.props.titleView;
            NavigationBar.push(
                <Component key={'titleView'}/>
            );
        }

        // 右边图片按钮
        if (this.props.rightImage !== undefined && this.props.rightImage !== '') {
            NavigationBar.push(
                <Button
                    key={'rightIcon'}
                    activeOpacity={ViewConfig.ACTIVEOPACITY}
                    style={[styles.rightIcon, {top: rootScreen.statusBarHeight}]}
                    onPress={() => {
                        this.props.onPress();
                    }}
                >
                    <Image style={[styles.rightImg, {}]} source={this.props.rightImage}/>
                </Button>
            );
        }

        // 右边文字按钮
        if (this.props.rightButton !== undefined) {
            NavigationBar.push(
                <Button
                    key={'rightButton'}
                    activeOpacity={ViewConfig.ACTIVEOPACITY}
                    style={styles.rightButton}
                    onPress={this.props.rightButtonAction}
                >
                    <Text style={styles.buttonTitleFont}>{this.props.rightButton}</Text>
                </Button>
            );
        }

        if (this.props.rightMenu !== undefined) {
            NavigationBar.push(
                <Button
                    key={'rightMenu'}
                    activeOpacity={ViewConfig.ACTIVEOPACITY}
                    style={styles.rightMenu}
                    onPress={this.props.rightMenuAction}
                >
                    <Text style={{color: 'gray', fontSize: 12}}>{this.props.rightMenu}</Text>
                    <Image source={this.props.rightMenuImage} style={{width: 16, height: 16}}/>
                </Button>
            );
        }
        // 右边View
        if (this.props.rightView !== undefined) {
            let Component = this.props.rightView;
            NavigationBar.push(
                <View key={'rightView'} style={{position: 'absolute', right: 0, top: 0}}>
                    <Component/>
                </View>
            );
        }

        return (
            <View
                style={[styles.navigationBarContainer,
                    {
                        height: rootScreen.statusBarHeight + rootScreen.headerHeight,
                        borderBottomWidth: this.props.borderBottomWidth || 0,
                        borderBottomColor: this.props.borderBottomColor || 'rgba(0,0,0,0)',
                        backgroundColor: this.props.backgroundColor || 'rgba(0,0,0,0)'
                    }]}>
                {NavigationBar}
            </View>
        );
    }
}

const styles = StyleSheet.create<any>({
    navigationBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        /* borderBottomColor: '#ccc',
         borderBottomWidth: 0.5,*/
        backgroundColor: 'rgba(0,0,0,0)'
    },
    titleWrap: {
        height: rootScreen.headerHeight,
        bottom: 0,
        zIndex: -5,
        width: Dimensions.get('window').width,
        position: 'absolute',
        alignItems: 'center'
    },
    title: {
        fontSize: 17,
        lineHeight: rootScreen.headerHeight - 2,
        // marginLeft: -40,
        color: 'rgba(19,19,19,1)'
    },
    leftIcon: {
        paddingLeft: 15,
        paddingRight: 15
    },
    leftImg: {
        width: 10,
        height: 17
    },
    rightIcon: {
        height: rootScreen.headerHeight,
        position: 'absolute',
        right: 10,
        alignItems: 'center'
    },
    rightImg: {
        width: 20,
        height: 17,
        top: (rootScreen.headerHeight - 17) / 2
    },
    rightButton: {
        position: 'absolute',
        right: 10,
        height: rootScreen.statusBarHeight,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonTitleFont: {
        color: 'white',
        fontSize: 15
    },
    rightMenu: {
        position: 'absolute',
        right: 10,
        height: rootScreen.statusBarHeight,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    }
});
