import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { gStyle } from '../styles/style.js';

import Navigate from '../navigate.js';
import SecondPage from './secondPage.js'; 
import { TextInput } from 'react-native-gesture-handler';


export default function Main({ navigation }) {
const loadScene = () => { navigation.navigate('SecondPage');} 
  
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.text}>Oh Its first page!</Text>

      <TextInput style={gStyle.input} placeholder=' Input EMAIL '/>
      <TextInput style={gStyle.input} placeholder=' Input PASSWORD '/>

      <Button title='go :)'  
      onPress={loadScene}
        />
     
    </View>
  );
}

const styles = StyleSheet.create({
  
});
