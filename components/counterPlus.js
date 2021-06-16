import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import axios from 'axios'
import {SafeAreaView,StyleSheet,View,FlatList,ActivityIndicator} from 'react-native';
class CounterPlus extends Component{

 constructor(props) {
        super(props);
        this.state = {
            loading: false,
            axiosData: []
        };
    }

componentDidMount() {
     this.setState({
            loading: true,
        })
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                console.log('getting data from axios', response.data);
                this.setState({ loading: false,  axiosData: response.data });
            })
            .catch(error => {
                console.log(error);
            });
}
render(){
       const { isLoading, axiosData } = this.state;
       if (this.state.isLoading){
          return(
             <View style = {styles.container} >
              <ActivityIndicator size="large" animating/>
            </View>
          )
      }
      else{
    console.log("Plus"+this.props.count+1);
    return(
      <Container>
      <Text style={Textstyles.titleText}>Counter + </Text>
        <Content padder>
          <Card>
            <CardItem>
              <Text>
                {this.props.count+1}
              </Text>
            </CardItem>
          </Card>
        </Content>
        <Text style ={Textstyles.titleText}>Scroll below Grid from server (axios)</Text>
         <SafeAreaView style={Mystyles.container}>
        <FlatList 
            data = {this.state.axiosData}
             renderItem={({ item }) => (
                <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                <Text style={Mystyles.imageThumbnail}>{item.id}</Text>
                </View>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item, index) => index} />
       </SafeAreaView>
      </Container>
    );
    }    
  }
}
const Mystyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
   imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});
const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#F5FCFF'
    }
});
const Textstyles = StyleSheet.create({
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
export default connect(mapStateToProps)(CounterPlus);