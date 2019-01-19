/**
 * Created by leic on 2018/04/26.
 * 自定义动画View 模仿Modal效果 必须实现closed属性
 * closed={()=>{ModalCom.hide();}}
 */

import * as React from 'react';
import {
    Animated,
    Dimensions
} from 'react-native';

import RootSiblings from 'react-native-root-siblings';

let { height: WindowHeight } = Dimensions.get('window');

let modalArr = [];

export default class ModalCom extends React.Component<any> {

    public static show(component) {
        console.warn(this);
        let modal = new RootSiblings(<ModalEx>{component}</ModalEx>);
        modalArr.push(modal);
    }

    public static hide() {
        if (modalArr.length > 0) {
            let modal = modalArr[modalArr.length - 1];
            if (modal instanceof RootSiblings) {
                modal.destroy();
                modal = null;
                modalArr.pop();
            }
        }
    }

    public static getLength() {
        return modalArr ? modalArr.length : 0;
    }
    public constructor(props) {
        super(props);
    }

    public render() {
        return null;
    }
}

class ModalEx extends React.Component<any> {
    public static defaultProps = {};

    public constructor(props) {
        super(props);
        if (!this.props.children['props']['closed'] || typeof this.props.children['props']['closed'] !== 'function') {
            throw new Error('ModalEx内的子组件必须实现closed方法');
            // console.error('子组件必须实现close方法');
        }
        this.state = {
            top: new Animated.Value(WindowHeight)
        };
    }

    public componentDidMount() {
        this.show();
    }

    public show() {
        // this.setState({show:true})
        Animated.timing(this.state['top'], { toValue: 0, duration: 1 }).start();
    }

    public hide = (call) => {
        Animated.timing(this.state['top'], { toValue: WindowHeight, duration: 1 }).start(() => {
            if (call) call();
        });
    }

    public render() {
        return (<Animated.View style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
            position: 'absolute',
            top: this.state['top']
        }}>
            {this.props.children}
        </Animated.View>);
    }
}
