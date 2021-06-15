import React, { Component } from 'react';
import { Container} from 'native-base';
import { increment, decrement } from '../actions/index.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
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
export default function Counter (){
     const count = useSelector(state => state.count);
     const dispatch = useDispatch();
    return(

            <View>
             <Text>Counter </Text>
              <Text>My value is {count}</Text>
                 <Button  title="Increment"  onPress= {() => dispatch(increment())}/>
                  <Text></Text>
                 <Button title="Decrement" onPress = {() =>  dispatch(decrement())}/>
            </View>
    )
}