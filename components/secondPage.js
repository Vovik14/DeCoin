import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { gStyle } from '../styles/style.js';

export default function SecondPage() {
  // const loadSc = () => { navigation.navigate('Main');}
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.text}>SecondPage</Text>
            
    </View>
  );
}

const styles = StyleSheet.create({

});
