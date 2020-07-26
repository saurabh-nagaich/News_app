import React, {Component} from 'react';
import {
  ListItem,
  Left,
  Thumbnail,
  Right,
  Body,
  Text,
  Button,
  View,
} from 'native-base';
import Time from './Time';

class DataItems extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  handlePress = () => {
    const {url, title} = this.data;
    this.props.onPress({url, title});
  };

  render() {
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={{
              uri: this.data.urlToImage != null ? this.data.urlToImage : '',
            }}
          />
        </Left>
        <Body>
          <Text style={{fontWeight: 'bold', marginBottom: 3}} numberOfLines={1}>
            {this.data.title}
          </Text>
          <Text numberOfLines={2}>{this.data.description}</Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 8,
              marginLeft: 0,
            }}>
            <Text note>{this.data.source.name}</Text>
            <Time time={this.data.publishedAt} />
          </View>
        </Body>
        <Right>
          <Button transparent onPress={this.handlePress}>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}

export default DataItems;
