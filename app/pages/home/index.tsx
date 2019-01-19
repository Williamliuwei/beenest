import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { loadingStore } from '../../stores/common/LoadingStore';
import BaseComponent from '../base/BaseComponent';

export default class Index extends BaseComponent<any>{
    public setStatusBarColor(): { color?: string; imgAsStatusBar?: boolean } {
        return { color: 'red', imgAsStatusBar: false };
    }

    public loadData(): void {
        loadingStore.hide();
    }

    public defaultTitle() {
        return '测试';
    }

    public renderChildren() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        // this.show();
                    }}>
                    <Text>基础用法</Text>
                </TouchableOpacity>
            </View>
        );
    }

    // show(){
    //     console.warn('show')
    //     ModalCom.show(<MYText closed={() => {
    //         ModalCom.hide();
    //     }}/>)
    // }
}

interface MYProps {
    closed: any;
}
class MYText extends React.Component<MYProps>{

    public render() {
        return (
            <View style={{ height: 200, width: 200, flex: 1, backgroundColor: 'skyblue', alignItems: 'flex-end' }} onStartShouldSetResponder={() => true} onResponderGrant={this.props.closed}>
                <Text style={{ color: '#fff', fontSize: 30 }}>slfdkjlskdfjslkdfj</Text>
            </View>
        );
    }
}
