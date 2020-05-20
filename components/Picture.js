import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import data from '../data'

// Clickable image that represents the restaurant
const Picture = (props) => {

    // returns the picture based off the given index
    const pic = data[props.cardIndex].image[props.picIdx];

    return (
            <Image source={{ uri: pic }}
            style={styles.picture} />
        )
}

const styles = StyleSheet.create({

    // TODO: fix width and height when dealing w/ diff device sizes
    picture: {
        // flex: 1,
        width: 700,
        height: 720,
        // position: 'absolute'
    }
  });

export default Picture;