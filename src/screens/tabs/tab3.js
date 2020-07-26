import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
import ModalComponent from '../../ComPonents/Modal';
import {getArticles} from '../../service/news';
import {Alert, View, ActivityIndicator} from 'react-native';
import DataItems from '../../ComPonents/DataItems';

export default class Tab1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {},
    };
  }

  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData,
    });
  };
  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {},
    });
  };

  componentDidMount() {
    getArticles('technology').then(
      (data) => {
        this.setState({
          isLoading: false,
          data: data,
        });
      },
      (error) => {
        Alert.alert('Error', 'somthing wrong : ');
      },
    );
  }

  render() {
    console.log(this.state);

    let view = this.state.isLoading ? (
      <View>
        <ActivityIndicator animating={true} color="#0000ff" />
        <Text style={{margintop: 10}}>Please Wait...</Text>
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={(item) => {
          return <DataItems onPress={this.handleItemDataOnPress} data={item} />;
        }}
      />
    );

    return (
      <Container>
        <Content>{view}</Content>
        <ModalComponent
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}
