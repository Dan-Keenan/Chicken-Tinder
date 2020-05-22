import React from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import data from '../sampleData'

const { width, height } = Dimensions.get('window');

const DetailsPicture = (props) => {

    const photoSize = data[props.cardIndex].photos.length;

    // returns the picture based off the given index
    const pic = data[props.cardIndex].photos[props.picIdx % photoSize];

    return (
        <TouchableOpacity onPressIn={props.handlePress} activeOpacity={1}
        style={{zIndex: 6}}>
            <Image source={{ uri: pic }}
            style={styles.picture} />
        </TouchableOpacity>
        )
}


const styles = StyleSheet.create({

    // TODO: fix width and height when dealing w/ diff device sizes
    picture: {
        // flex: 1,
        width: width,
        height: height / 2,
        resizeMode: 'cover',
        zIndex: 1,
    }
  });

export default DetailsPicture;