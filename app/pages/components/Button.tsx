
import * as React from "react";
import {TouchableOpacity} from "react-native";

interface ButtonProps {
    onPress?: any,
    activeOpacity?:any
    style?:any
    disabled?:any
}

class Button extends React.Component<ButtonProps, any> {
    private lastClickTime:any
    constructor(props:any) {
        super(props)
        this.state = {
            disabled: true
        }
        this.lastClickTime=0
    }


    debouncePress () {
        const clickTime = Date.now()
        if (!this.lastClickTime || Math.abs(this.lastClickTime - clickTime) > 350) {
            this.lastClickTime = clickTime
            if(this.props.onPress){
                this.props.onPress()
            }else{
                return ''
            }

        }
    }


    render() {
        return (
            <TouchableOpacity
                onPress={this.debouncePress.bind(this)}
                activeOpacity={this.props.activeOpacity || 0.85}
                style={this.props.style}
                disabled={this.props.disabled}
            >
                {this.props.children}
            </TouchableOpacity>)
    }
}

export default Button
