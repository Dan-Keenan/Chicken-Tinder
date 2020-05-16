import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Dimensions, TouchableOpacity, PanResponder, Animated } from 'react-native';
import data from '../data'

// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { Transitioning, Transition } from 'react-native-reanimated';

// Swiping deck that holds the individual cards

/*  hooks:
    ------
    index - keep track of each card in the card deck
    picIndex - keep track of each picture for each card

*/

/* This is a wrapper function around the cards. Simply recieves the deck of cards in its props and
 * Uses its view to render the first card in the "deck". 
 */
const CardDeck = (props) => {
    return (
        <View>
            <Card index={0}
            />
        </View>
    )
}

/* This function component represents an intro card of a restaurant.  
 * It retrieves/receives pictures of the restaurant from a pictures component 
 * and other information from the "miscellaneous" component and renders them together. 
 * Swiping, drag-and-drop, and other movement features related to a restaurant card should
 * be handled here. 
 */
const Card = (props) => {
    

    return (
        <View>
            <Text>test</Text>
            <Picture
            index={props.index}
            />
            <Misc 
            index={props.index}/>
        </View>
    )
}

/* This function component handles the images pertaining to a restaurant. 
 * At the moment, this component retrieev a picture from data and renders it. 
 */
const Picture = (props) => {
    const pic = data[props.index].image[0];

    return (
        <>
        <Image source={{uri: pic}}
         style={{width: 400, height: 400}} />
        </>
        )
}

// Misc. details relating to the card
const Misc = (props) => {
    const cuisine = data[props.index].cuisine;
    const id = data[props.index].id;
    const name = data[props.index].name;

    return (
        <View>
            <Text>Cuisine: {cuisine}</Text>
            <Text>Id: {id}</Text>
            <Text>name: {name}</Text>
        </View>
    )

}



export default CardDeck;