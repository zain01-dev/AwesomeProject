import React, {useEffect, useState, Component } from 'react';
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
  ActivityIndicator, 
  FlatList
} from 'react-native';

export default function Counter (){
     const count = useSelector(state => state.count);
     const dispatch = useDispatch();
     const [isLoading, setLoading] = useState(true);
     const [data, setData] = useState([]);
     console.log(data);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    return (

    <View >
      {isLoading ? <Text>Loading...</Text> : 
      ( <View >
          <Text style={styles.titleText}>------------------------------------------------- </Text>
          <Text style={styles.titleText}>Fetched data using fetch() shown in list </Text>
          <Text style={{ fontSize: 18, textAlign: 'center'}}>{data.title}</Text>
          <Text style={{ fontSize: 14, textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
          <FlatList
            data={data.articles}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id + '. ' + item.title}</Text>
            )}
          />
           <Text style={styles.titleText}>------------------------------------------------- </Text>
          <View>
              <Text style={styles.titleText}>Counter </Text>
              <Text>My value is {count}</Text>
              <Button  title="Increment"  onPress= {() => dispatch(increment())}/>
              <Text></Text>
              <Button title="Decrement" onPress = {() =>  dispatch(decrement())}/>
         </View>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
