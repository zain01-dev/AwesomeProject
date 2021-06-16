import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Title, CardItem } from 'native-base';
import { increment, decrement } from '../actions/index.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {StyleSheet,Button,View,FlatList,ActivityIndicator} from 'react-native';

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
       
         <Text style = {Mystyles.titleText}>Scroll the Below list from Server (Fetch)</Text>
         <Text></Text>
          <View style = {styles.container} >
          <FlatList 
            data = {this.state.dataSource}
            renderItem={({item})=><Text>{item.title}</Text>}
          />
          </View>
          <Text style={Mystyles.titleText}>Counter </Text>
        <Content padder>
          <Card>
            <CardItem>
              <Text>
                {this.props.count}
              </Text>
            </CardItem>
          </Card>
          <Button  title="Increment" onPress={() => this.props.increment()}   />
          <Text>  </Text>
          <Button  title="Decrement" onPress={() => this.props.decrement()}   />
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
const Mystyles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
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