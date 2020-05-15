import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import data from '../data'

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

export default Misc;