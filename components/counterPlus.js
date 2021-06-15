import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class CounterPlus extends Component{
  render(){
    console.log("Plus"+this.props.count+1);
    return(
      <Container>
        <Header>
          <Body>
            <Title>Counter +</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Text>
                {this.props.count+1}
              </Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
function mapStateToProps(state){
  return{
    count : state.count
  };
}
export default connect(mapStateToProps)(CounterPlus);