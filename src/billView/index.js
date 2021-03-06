import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Analytics from 'react-native-analytics';

export default class BillView extends PureComponent {
  constructor(props) {
    super(props);
  }

  onYea = () => {
    Analytics.track("bill_vote", { "vote_type": "yea", "bill_id": `${this.props.id}}` });
  }

  onNay = () => {
    Analytics.track("bill_vote", { "vote_type": "nay", "bill_id": `${this.props.id}}` });
  }

  render() {
    return (
      <View style={styles.billDetailContainer} >
        <Text style={styles.billHeading}>
          {this.props.name}
        </Text>
        <Text style={styles.billInfo}>
          {this.props.info}
        </Text>
        <Text style={styles.billStatus}>
          {this.props.status}
        </Text>
        <View style={styles.billButtonBar}>
          <Button
            style={{width: '50%'}}
            color={colors.green}
            onPress={this.onYea}
            title="YEA"
          >
            YEA
          </Button>
          <Button
            style={{width: '50%'}}
            color={colors.red}
            onPress={this.onNay}
            title="NAY"
          >
            NAY
          </Button>
        </View>
      </View>
    );
  }
}

const colors = {
  separator: '#8E8E8E',
  green: '#388965',
  red: '#DD0000',
};

const styles = StyleSheet.create({
  billsListSeparator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.separator,
  },
  billButtonBar: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
  },
  billDetailContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  billHeading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  billInfo: {

  },
  billStatus: {

  },
});
