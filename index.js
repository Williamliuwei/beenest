/** @format */

import {AppRegistry} from 'react-native';
// import Root from './dist/pages/home/index';
import Root from './dist/pages/RootScreen'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Root);
