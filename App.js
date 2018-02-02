/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  StackNavigator,
} from 'react-navigation';

import {
  AppRegistry,
} from 'react-native';

import BillsList from './src/billsList';
import BillDetail from './src/billDetail';

const App = StackNavigator({
  Home: { screen: BillsList },
  BillDetail: { screen: BillDetail },
});

AppRegistry.registerComponent('CountableUSDemo', () => App);

export default App;
