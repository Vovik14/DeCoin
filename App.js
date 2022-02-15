
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import AppLoading from 'expo-app-loading';
// import AppLoading from 'expo-app-loading';

import Navigate from './navigate.js';
import Main from './components/main.js';

export default function App() {
  // let push=()=>console.log('you already pushed Button!');
  
  return (
    // <NavigationContainer>
    <Navigate />
    
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
