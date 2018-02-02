import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native';
import Analytics from 'react-native-analytics';

export default class BillView extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.billDetailContainer} >
        <TouchableHighlight onPress={ () => navigate('BillDetail', { ...this.props } )}>
          <Text style={styles.billHeading}>
            {this.props.name}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  billDetailContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  billHeading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
