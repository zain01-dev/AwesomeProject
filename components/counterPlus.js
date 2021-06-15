import React, { Component } from 'react';
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
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
export default function CounterPlus (){
     const count = useSelector(state => state.count);
         return(

            <View>
            <Text>Counter + </Text>
            <Text>My value is {count+1}</Text>
            </View>
    )
}