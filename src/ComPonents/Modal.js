import React, {Component} from 'react';
import {Dimensions, Modal, Share} from 'react-native';
import {WebView} from 'react-native-webview';

import {
  Container,
  Header,
  Content,
  Body,
  Left,
  Icon,
  Right,
  Title,
  Button,
} from 'native-base';

const webViewHeight = Dimensions.get('window').height - 100;

class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClose = () => {
    return this.props.onClose();
  };
  handleShare = () => {
    const {url, title} = this.props.articleData;
    let message = `${title}\n\nRead More @${url}\n\n shard via News app`;
    return Share.share(
      {title, message, url: message},
      {dialogTitle: `share ${title}`},
    );
  };

  render() {
    const {showModal, articleData = {url: '', title: ''}} = this.props;
    const {url} = articleData;
    console.log(showModal, articleData, this.props);
    if (url !== undefined) {
      return (
        <Modal
          animationType="slide"
          transparent
          visible={showModal}
          onRequestClose={this.handleClose}>
          <Container
            style={{margin: 15, marginBottom: 0, backgroundColor: '#fff'}}>
            <Header style={{backgroundColor: '#009387'}}>
              <Left>
                <Button onPress={this.handleClose} transparent>
                  <Icon name="close" style={{color: 'white', fontSize: 12}} />
                </Button>
              </Left>
              <Body>
                <Title children={articleData.title} style={{color: 'white'}} />
              </Body>
              <Right>
                <Button onPress={this.handleShare} transparent>
                  <Icon name="share" style={{color: 'white', fontSize: 12}} />
                </Button>
              </Right>
            </Header>
            <Content
              contentContainerStyle={{
                height: webViewHeight,
              }}>
              <WebView
                source={{
                  uri: url,
                }}
                startInLoadingState
                style={{flex: 1}}
                onError={this.handleClose}
                scalesPageToFit
              />
            </Content>
          </Container>
        </Modal>
      );
    } else {
      return null;
    }
  }
}

export default ModalComponent;
