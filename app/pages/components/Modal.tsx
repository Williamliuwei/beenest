import * as React from 'react';
import {View,StyleSheet,Animated,TouchableOpacity} from 'react-native';
import Topview from '../components/topview/index'
import { FadeAnimated } from '../common/animations/index';

interface ModalProps{
    cancelable:boolean;
    /**
     * 样式 container 配置
     */
    alignItems?: string,

    /**
     * 样式 mask 配置
     */
    opacity?: any,

    /**
     * 样式 content 配置
     * @type {[type]}
     */
    flex?: any,
    marginHorizontal?: number,
    borderRadius?: number,
    marginTop?: number,          // 对应 container alignItems: 'flex-start'
    marginBottom?: number,       // 对应 container alignItems: 'flex-end'

    onOpen?: any,
    onOpened?: any,
    onClose?: any,
    onClosed?: any,
}


export default class Modal extends React.Component<ModalProps>{
    state = {
        topviewId: null,
        opening: false,
        closing: false,
    };
    animated = null;
    constructor(props) {
        super(props);

        this.state = {
            topviewId: null,
            opening: false,
            closing: false,
        };

        this.animated = new FadeAnimated();
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        // this.close().catch((e) => {

        // });
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.topviewId) {
    //         Topview.getInstance().replace(this.getContent(), this.state.topviewId);
    //     }
    // }


    handleMaskPress() {
        if (this.props.cancelable) {
            // this.close().catch((e) => {

            // });
        }
    }

    getContent(inner?) {
        // const styles = Modal.styles;
        const tmp = inner == null ? this.props.children : inner;
        return (
            <View
                style={[
                    styles.container,
                    {
                        alignItems: this.props.alignItems,
                    }
                ]}>
                <TouchableOpacity
                    style={[styles.mask, { opacity: this.props.opacity }]}
                    activeOpacity={this.props.opacity}
                    onPress={this.handleMaskPress.bind(this)}
                />

                <Animated.View
                    style={[
                        styles.content,
                        {
                            flex: this.props.flex,
                            marginTop: this.props.alignItems == 'flex-start' ? this.props.marginTop : 0,
                            marginBottom: this.props.alignItems == 'flex-end' ? this.props.marginBottom : 0,
                            marginHorizontal: this.props.marginHorizontal || 0,
                            borderRadius: this.props.borderRadius,
                        },

                        // {
                        //     transform: [
                        //         { scale: this.animated.getState().scale }
                        //     ],
                        //     opacity: this.animated.getState().opacity,
                        // }
                    ]}>

                   {tmp || null}
                </Animated.View>
                
            </View>
        );
    }

    close() {
        if (this.state.closing || this.state.topviewId == null) {
            console.log('不能重复关闭');
            return Promise.reject();
        }

        this.state.closing = true;

        this.props.onClose && this.props.onClose({
            ...this.state,
        });
        debugger
        // return this.animated.toOut().then(() => {
            // return Topview.getInstance().remove(this.state.topviewId);
        // }).then(() => {
            // this.state.closing = false;
            // this.state.topviewId = null;

            // this.props.onClosed && this.props.onClosed({
            //     ...this.state
            // });
        // });
    }

    // open(c) {
    //     if (this.state.opening || this.state.topviewId) {
    //         console.log('不能重复打开');
    //         return Promise.reject();
    //     }

    //     if (!Topview.getInstance()) {
    //         console.log('Topview instance is not existed.');
    //         return Promise.reject();
    //     }

    //     this.state.opening = true;

    //     this.props.onOpen && this.props.onOpen({
    //         ...this.state,
    //     });

    //     return Topview.getInstance().add(this.getContent(c)).then((id) => {
    //         this.state.topviewId = id;

    //         return this.animated.toIn().then(() => {
    //             this.state.opening = false;

    //             this.props.onOpened && this.props.onOpened({
    //                 ...this.state
    //             });
    //             return id;
    //         });
    //     });
    // }

    render() {
        return null;
    }
}

const styles = StyleSheet.create({
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