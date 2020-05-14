import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
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

const CardDeck = (props) => {
    return (
        <View>
            <Card index={0}
            />
        </View>
    )
}

// render the individual card
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

// Image that represents the restaurant
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