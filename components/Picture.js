import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import data from '../data'

// Clickable image that represents the restaurant
const Picture = (props) => {

    // returns the picture based off the given index
    const pic = data[props.index].image[props.picIdx];

    return (
        <TouchableOpacity onPress={props.onPress}>
            <Image source={{ uri: pic }}
            style={styles.picture} />
        </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    picture: {
        // flex: 1,
        width: 500,
        height: 500,
        position: 'absolute'
    }
  });

export default Picture;