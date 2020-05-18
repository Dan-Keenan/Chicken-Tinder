import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardDeck from './screens/CardDeck'

export default function App() {

  const [infoStyles, setInfoStyles] = React.useState(true);

  const handleInfoStyle = () => {
    console.log('working')
    setInfoStyles(!infoStyles)
    console.log(infoStyles)
  }

  return (
    <>
      <View style={infoStyles ? (styles.cardContain) : (styles.nothing)} >
          <CardDeck 
          is={handleInfoStyle}
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
  },
  nothing: {
    // flex: 1,
    // width: 50,
    // height: 50,
  }
});