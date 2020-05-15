import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import data from '../data'
import Card from '../components/Card';
import Misc from '../components/Misc';
import Picture from '../components/Picture';

// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { Transitioning, Transition } from 'react-native-reanimated';

// Swiping deck that holds the individual cards

/*  hooks:
    ------
    index - keep track of each card in the card deck
    picIndex - keep track of each picture for each card

*/

const CardDeck = (props) => {

    // creates instances of all cards in the deck
    
    const renderCards = (ele) => {
        console.log(ele)
        return <Card 
        index={props.index}
        />
        
    }

    return (
        <View>
            <StatusBar hidden />

            {data.map((ele) => renderCards(ele))}
           
        </View>
    )
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
    },
    picture: {
        // flex: 1,
        width: 300,
        height: 300,
    }
  });


export default CardDeck;