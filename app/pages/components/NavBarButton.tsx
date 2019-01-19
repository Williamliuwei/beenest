
import * as React from 'react'
import { Image,
    View,
    Text,
    TouchableOpacity,
    StyleSheet } from 'react-native'
import ViewConfig from '../../config/ViewConfig';

export default class NavBarButton extends React.Component<any> {
  render() {
    if (this.props.image) {
      let titleView
      if (this.props.title) {

        titleView = (
          <View style={[styles.view, this.props.viewStyle]}>
            <Text style={[styles.text, this.props.tvStyle]}>{this.props.text} ? {this.props.text} : {this.props.titleFunction()}</Text>
          </View>
        )
      }
      return (
        <TouchableOpacity onPress={this.props.onPress} activeOpacity={ViewConfig.ACTIVEOPACITY} style={[this.props.style, { flexDirection: ((this.props.text) ? 'row' : 'column') }]}>
          <View style={[styles.view, this.props.viewStyle]}>
            <Image source={this.props.image} style={[styles.image, this.props.imageStyle]}
            />
          </View>
          {titleView}
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity activeOpacity={ViewConfig.ACTIVEOPACITY} onPress={this.props.onPress} style={this.props.style}>
          <View style={[styles.view, this.props.viewStyle]}>
            <Text style={[styles.text, this.props.tvStyle]}>{this.props.text ? this.props.text:this.props.titleFunction()}</Text>
          </View>
        </TouchableOpacity>
      )
    }
  }
}

const styles = StyleSheet.create({
  view: {
    minWidth: 40,
      minHeight: 44,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
      // marginTop: 5
  },
  text: {
    color: 'white', fontSize: 17
  },
  image: {

  }
})
