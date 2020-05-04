import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SwipeScreen from './screens/SwipeScreen'

export default function App() {
  return (
    <View style={styles.screen}>
      {/* <Text style={styles.container}>Hello!!!</Text> */}
      <SwipeScreen />
      {/* <Text style={styles.container}>Test 123 123 123</Text> */}
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
