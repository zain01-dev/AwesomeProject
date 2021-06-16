/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  useColorScheme,
  View,
  Platform,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countActions from './actions/counts';
import countReducer from './reducers/countReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './components/counter';
import CounterPlus from './components/counterPlus';
import allReducers from './reducers/index.js';
const store = createStore(allReducers);

export default class App extends Component{
  render(){
    return(
      <Provider store= {store}>
      <LifeCycle/>
        <Counter />
        <CounterPlus/>
      </Provider>
    );
  }
}

 class LifeCycle extends Component {  
  constructor(props)
  {
    super(props);
    this.state = { message: "message"} 
    console.log("constructor");
  }
  static getDerivedStateFromProps(props, state)
   {
    console.log("getDerivedStateFromProps");
    return {
      message: "message",
    }
  }
  componentDidMount()
  {
    console.log("componentDidMount");
  }  
  render() {  
    console.log("render");
    return (  
        <View style={{alignItems: 'center'}}> 
          <ChildClass name= 'Zain' />  
          <Text>{this.state.message}</Text>
          <Button  title="Press me" onPress={() =>this.setState({ message: "Hello new Message"}) }   />
          <ChangeName/>
        </View>  
    );  
  }
  shouldComponentUpdate()
  {
      console.log("shouldComponentUpdate");
      return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState)
  {
    console.log("getSnapshotBeforeUpdate");
     return null
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
 static getDerivedStateFromError(error) {
    console.log(`Error log from getDerivedStateFromError: ${error}`);
    return { hasError: false };
  }
  componentDidCatch(error, info) {
    console.log(`Error log from componentDidCatch: ${error}`);
    console.log(info);
  }
}
class ChildClass extends Component {  
  render() {  
    return (  
        <View style={{alignItems: 'center'}}>  
          <Text style={styles.welcome}>Hello {this.props.name}!</Text> 
        </View>  
    );  
  }  
}    
const styles = StyleSheet.create({  
   welcome: {  
    fontSize: 30,  
  }  
});  

class ChangeName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "zain"
    };
  }

  componentDidMount() {
        console.log("componentDidMount");
  }
  componentDidUpdate() {
        console.log("componentDidMount");
  }

  render() {
    console.log(store.getState())
    return (
      <View>
        <Text>My name is  {this.state.name} </Text>             
        <Button  title="Press to change name " onPress={() =>this.setState({ name: "zain ul Abidin"}) }   />
      </View>
    );
  }
}