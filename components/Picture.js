import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import data from '../data'

// Image that represents the restaurant
const Picture = (props) => {
    const pic = data[props.index].image[props.pic];

    return (
        <TouchableOpacity onPress={props.handlePress}>
            <Image source={{ uri: pic }}
            style={styles.picture} />
        </TouchableOpacity>
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

export default Picture;