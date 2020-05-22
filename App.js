import React, { useEffect } from 'react';
import { StyleSheet, Animated, View, ScrollView, FlatList } from 'react-native';
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

  // hook that decides which picture in arr of picture should be displayed
  const [picIndex, setPicIndex] = React.useState(0);

  // # HOOK #
  // index represents the current card in the deck
  const [index, setIndex] = React.useState(0);

  // reference to the main scroll view
  const mainScroll = React.useRef();


  const handleInfoStyle = () => {
    setInfoStyles(!infoStyles)
    if(!infoStyles) {
      mainScroll.current.scrollTo({x: 0, y: 0})
    } else {
      mainScroll.current.scrollTo({x: 100, y: 100})
    }
  }

  // increments index by one
  const handleIncIndex = () => {
    setIndex(index => index + 1);
  }

  // handles the user's tap
  const handlePress = () => {
    console.log('incrementing pics')
    setPicIndex(picIndex => picIndex + 1);
  }

  return (
  <View style={{flex: 1, flexDirection: 'column',}}>
    <View style={{flex: 1,
      // height: 1000
      }}>
    
      <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        // borderColor: 'green', borderWidth: 5,
        height: 1000,
      }}
      scrollEnabled={!infoStyles}
      // this height will need to scale with amount of components 
      height={1000}
      ref={mainScroll}
      showsVerticalScrollIndicator={false}
      >

        <View>
          <View style={{flex: 1}}>
              {infoStyles && <CardDeck 
              infoStyleHuh={infoStyles}
              handleInfoStyle={handleInfoStyle}
              index={index}
              incIdx={handleIncIndex}
              handlePress={handlePress}
              picIdx={picIndex}
              />}
          </View>
          
          <View 
          style={{flex: 1}}>
              {!infoStyles && <Details
              index={index}
              picIdx={picIndex}
              handleInfoStyle={handleInfoStyle}
              handlePress={handlePress}
              />}
          </View>

        </View>
      </ScrollView>
    </View>
  </View>
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