import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Right,
  Content,
  Tab,
  Tabs,
} from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';

class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#009387'}} hasTabs>
          {/* <Left /> */}
          <Body style={{alignItems: 'center'}}>
            <Title style={{color: 'white'}}>News App</Title>
          </Body>
          {/* <Right /> */}
        </Header>
        <Tabs>
          <Tab
            tabStyle={{backgroundColor: '#009387'}}
            activeTabStyle={{backgroundColor: '#009387'}}
            textStyle={{color: 'white'}}
            activeTextStyle={{color: 'white'}}
            heading="Genral">
            <Tab1 />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#009387'}}
            activeTabStyle={{backgroundColor: '#009387'}}
            textStyle={{color: 'white'}}
            activeTextStyle={{color: 'white'}}
            heading="Business">
            <Tab2 />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#009387'}}
            activeTabStyle={{backgroundColor: '#009387'}}
            textStyle={{color: 'white'}}
            activeTextStyle={{color: 'white'}}
            heading="Technology">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default TabsExample;
