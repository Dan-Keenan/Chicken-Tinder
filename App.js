import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import CardDeck from './screens/CardDeck'

export default function App() {

  return (
    <>
      <View style={styles.cardContain} >
        <CardDeck 
        />
      </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  cardContain: {
      flex: 1,
      backgroundColor: 'skyblue',
      margin: 10,
      marginTop: 100,
      marginBottom: 100,
      borderWidth: 1,
      borderColor: 'lightgrey',
      borderRadius: 8,
      overflow: 'hidden',
  }
});