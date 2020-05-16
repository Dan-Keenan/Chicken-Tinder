import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import CardDeck from './screens/CardDeck'
import data from './data'

export default function App() {

  /*
  TODO: 
  - fix css
    - App should just be a rough container (!)
    - Stack cards on top of eachoether (!!!)

  WHAT I FINISHED TODAY:
    - implemented rendering of only 3 items per time
    - implemented clicking => indexing the array of pictures
  */

  return (
    <>
    {/* <TouchableOpacity onPress={()=>console.log('black')}> */}
      <View style={styles.card} >
        <CardDeck 
        />
        {/* <Image 
        source={{uri: data[0].image[0]}}
        style={{flex:1}}
        />

        <View style={{margin:20}}>
          <Text style={{fontSize:20}}>Nick's Pizza</Text>
          <Text style={{fontSize:15, color: 'gray'}}>Italian</Text>
        </View> */}

      </View>
      {/* </TouchableOpacity> */}
    </>
    
  );
}

const styles = StyleSheet.create({
  card: {
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