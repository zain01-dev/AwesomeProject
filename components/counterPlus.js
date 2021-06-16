import React, {useEffect, useState, Component } from 'react';
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
  ActivityIndicator,
  FlatList
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

export default function CounterPlus (){
     const count = useSelector(state => state.count);
     const [appState, setAppState] = useState({ loading: false, repos: [],});
    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = 'https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json';
        axios.get(apiUrl).then((repos) => {
        const allRepos = repos.data;
        console.log("hello");
        setAppState({ loading: false, repos: allRepos });
        console.log(repos);

    });
  }, [setAppState]);
         return(
            <View>
             {appState.loading ? <Text>Loading...</Text> : (
            <View >
             <View>
                <Text style={styles.titleText}>------------------------------------------------- </Text>
                <Text style={styles.titleText}>Counter + </Text>
                <Text>My value is {count+1}</Text>
                <Text style={styles.titleText}>------------------------------------------------- </Text>
            </View>
            <Text style={styles.titleText}>------------------------------------------------- </Text>
            <Text style={styles.titleText}>Fetched data using axios() shown in Grid </Text>
            <Text style={{ fontSize: 18, textAlign: 'center'}}>{appState.repos.title}</Text>
            <Text style={{ fontSize: 14, textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
            <FlatList 
            data = {appState.repos.articles}
             renderItem={({ item }) => (
                <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                <Text style={Mystyles.imageThumbnail}>{item.id + '. ' + item.title}</Text>
                </View>
        )}
                //Setting the number of column
                numColumns={3}
                keyExtractor={(item, index) => index} />
         </View>
        )}
        </View>
    )
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
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});