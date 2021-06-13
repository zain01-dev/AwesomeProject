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



const App = () => {
 const greeting = 'Hello Function Component!';
 return(<View>
       <Headline value={greeting} />
       <ChangeName/>
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
      <Button  title="Change Name by press me" onPress={() =>{setName("zaini")} }   />
    </View>
  );
}
export default App;
