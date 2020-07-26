import React, {Component} from 'react';
import {Text, View} from 'native-base';
import moment from 'moment';

class Time extends Component {
  constructor(props) {
    super(props);
    this.date = this.props.time;
  }

  state = {};
  render() {
    const time = moment(this.date || moment.now()).fromNow();
    return (
      <View>
        <Text style={{marginLeft: 12}}>{time}</Text>
      </View>
    );
  }
}

export default Time;
