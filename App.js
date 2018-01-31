/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  FlatList,
  View,
  TextInput,
  Button
} from 'react-native';
import Analytics from 'react-native-analytics';
import billsList from './bills.json';
import BillView from './src/billView';

export default class App extends Component<{}> {

  constructor(props) {
      super(props);
      this.state = { email: '', bills: [] };
  }

  componentDidMount() {
    this.setState({ bills: billsList });
  }

  renderSeparator = (sectionId, rowId) => {
    return (
      <View key={rowId} style={styles.billsListSeparator} />
    );
  }

  keyExtractor = (item, index) => item.id;

  renderItem = ({item}) => {
    return (
      <BillView {...item} />
    );
  }

  onEmailSubmit = () => {
    Analytics.identify("id_submit", {"email": `${this.state.email}`});
  }

  render() {
    Analytics.screen("screen_view", {"screenType":"bill_list_view"});
    return (
      <View style={styles.billsListContainer} >
        <View style={styles.emailInput}>
          <TextInput
            style={{height: 40, width: '80%', borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
          />
          <Button
            style={{width: '20%'}}
            color='#000000'
            onPress={this.onEmailSubmit}
            title='Add'
          >
            Add
          </Button>
        </View>
        <FlatList
          data={this.state.bills}
          initialNumToRender={3}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

const colors = {
  separator: '#8E8E8E',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  billsListContainer: {
    flex: 1,
    marginTop: 25,
  },
  billsListSeparator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.separator,
  },
  billDetailContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  emailInput: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
});
