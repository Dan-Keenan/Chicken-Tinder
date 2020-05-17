import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import data from '../data'
import Card from '../components/Card';

/*  HOOKS:
    ------
    index - keep track of each card in the card deck
    picIndex - keep track of each picture for each card

*/

// represents the swiping deck of cards
const CardDeck = (props) => {

    // # HOOK #
    // index represents the current card in the deck
    const [index, setIndex] = React.useState(0);

    // increments index by one
    const handleIncIndex = () => {
        setIndex(index + 1);
        console.log('index is now ' + index)}



    // instantiates the deck of cards
    const renderCards = (res, resIdx) => {

        // only renders the the current indexed card and the following two cards
        if(resIdx >= index &&
            resIdx <= index + 2) {
                console.log(resIdx)

                // returns an indexed  new card
                return (
                    <View key={res.id}>
                        <Card 
                        index={resIdx}
                        incIdx={handleIncIndex}
                        style={styles.individualCard}
                        />
                    </View>
                    )
            }
    }
   
    // renders the entire deck of cards
    return (
        <View>
            <StatusBar hidden />
            {data.map((res, resIdx) => renderCards(res, resIdx)).reverse()}
        </View>
    )
}

const styles = StyleSheet.create({
    // card: {
    //     flex: 1,
    //     backgroundColor: 'skyblue',
    //     margin: 10,
    //     marginTop: 100,
    //     marginBottom: 100,
    //     borderWidth: 1,
    //     borderColor: 'lightgrey',
    //     borderRadius: 8,
    //     overflow: 'hidden',
    //     // position: 'absolute'
    // },
    // picture: {
        // flex: 1,
        // width: 300,
        // height: 300,
        // position: 'absolute'
    // },
    individualCard : {
        position: 'absolute',
    }
  });

export default CardDeck;