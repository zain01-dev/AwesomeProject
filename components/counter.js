import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { increment, decrement } from '../actions/index.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {StyleSheet,View,FlatList,ActivityIndicator} from 'react-native';

class Counter extends Component{
    constructor(){
        super();
        this.state={
            isLoading : true,
            dataSource:[]
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                isLoading : false,
                dataSource: responseJson
            })
        })
    }
  render(){
      if (this.state.isLoading){
          return(
             <View style = {styles.container} >
              <ActivityIndicator size="large" animating/>
            </View>
          )
      }else{
console.log(this.props.count);
    return(
      <Container>
       
         <Text>Scroll the Below list from Server (Fetch)</Text>
         <Text></Text>
          <View style = {styles.container} >
          <FlatList 
            data = {this.state.dataSource}
            renderItem={({item})=><Text>{item.title}</Text>}
          />
          </View>
           <Header>
          <Body>
            <Title>Counter</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Text>
                {this.props.count}
              </Text>
            </CardItem>
          </Card>
          <Button dark bordered onPress= {() => this.props.increment()}>
            <Text>Increment</Text>
          </Button>
          <Button dark bordered onPress= {() => this.props.decrement()}>
            <Text>Decrement</Text>
          </Button>
        </Content>
      </Container>
    );
    }
  }
}
const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#F5FCFF'
    }
});
function mapStateToProps(state){
  return{
    count : state.count
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({increment: increment, decrement: decrement}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(Counter);