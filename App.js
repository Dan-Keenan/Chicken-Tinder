import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CardDeck from './screens/CardDeck'

export default function App() {

  return (
      <View style={styles.screen} >
        <CardDeck />
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc100',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  screen: {
    flex: 1,
    // height: 900,
    // width: 400
  }
});