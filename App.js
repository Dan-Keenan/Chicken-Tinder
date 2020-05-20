import React, { useEffect } from 'react';
import { StyleSheet, Animated, View, ScrollView } from 'react-native';
import CardDeck from './screens/CardDeck'
import Details from './components/Details'

/*
Future Ideas:
------------
  Copy tinder and prevent people from swiping too fast in order
  to optimize or load stuff faster
*/

/*  HOOKS:
    ------
    index - keep track of each card in the card deck
    picIndex - keep track of each picture for each card
    infoStyles - boolean hook that represents whether the information
    mode styling needs to be rendered
*/

export default function App() {

  const [infoStyles, setInfoStyles] = React.useState(true);

  // # HOOK #
  // index represents the current card in the deck
  const [index, setIndex] = React.useState(0);

    // useEffect(() => {
    //   console.log('effect index ' + index)
    // }, [index])

  const handleInfoStyle = () => {
    setInfoStyles(!infoStyles)
  }

  // increments index by one
  const handleIncIndex = () => {
    setIndex(index => index + 1);
  }

  return (
    <>
    
      <ScrollView
      contentContainerStyle={{flex:1}}
      scrollEnabled={!infoStyles}
      >
        <Animated.View style={infoStyles ? (styles.cardContain) : (styles.nothing)} >
            <CardDeck 
            infostyle={handleInfoStyle}
            index={index}
            incIdx={handleIncIndex}
            />
        </Animated.View>

        <Animated.View>
            {!infoStyles && <Details
            index={index}
            />}
            
            {console.log('true index is ' + index)}
        </Animated.View>


      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  // TODO: fix marginTop and marginBottom when dealing w/ diff device sizes
  cardContain: {
      // flex: 1,
      // backgroundColor: 'skyblue',
      // margin: 10,
      // marginTop: 120,
      // marginBottom: 100,
      // borderWidth: 1,
      // borderColor: 'lightgrey',
      // borderRadius: 8,
      // overflow: 'hidden',
  },
  nothing: {
    // flex: 1,
    // width: 50,
    // height: 50,
  }, 
  scroll: {

  }
});