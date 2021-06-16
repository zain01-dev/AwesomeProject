/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
  TextInput,
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
import allReducers from './reducers/index.js';
import Counter from './components/counter';
import CounterPlus from './components/counterPlus';
const store = createStore(allReducers);

const App = () => {
const greeting = 'Hello Function Component!';
 return(<View>
      <Provider store={store}>
       <Headline value={greeting} />
       <ChangeName/> 
       <Counter/>
       <CounterPlus/>
      </Provider>
 </View>
 );
};

function Headline(props) {
  return <Text>{props.value}</Text>;
}

function ChangeName() {
  const [name, setName] = useState("zain");
  // Similar to componentDidMount and componentDidUpdate: //replicate life cycle
  useEffect(() => {
      console.log("useEffect");
  });

  return (
    <View>
      <Text>My name is {name} </Text>
      <Button  title="Change Name by press me" onPress={() =>{setName("zain ul Abidin")} }   />
    </View>
  );
}
export default App;
