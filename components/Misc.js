import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import data from '../data'

// Misc. details relating to the card
const Misc = (props) => {
    const cuisine = data[props.index].cuisine;
    const id = data[props.index].id;
    const name = data[props.index].name;

    return (
        <View style={styles.misc}>
            <Text style={styles.text}>Cuisine: {cuisine}</Text>
            <Text style={styles.text}>Id: {id}</Text>
            <Text style={styles.text}>name: {name}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    misc: {
        position: 'absolute',
    },
    text: {
        color: 'white',
    }
})

export default Misc;