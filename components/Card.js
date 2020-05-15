import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import Picture from '../components/Picture';
import Misc from '../components/Misc';
import data from '../data';

// render the individual card
const Card = (props) => {

    // hook that decides which picture in arr of picture should be displayed
    const [picIndex, setPicIndex] = React.useState(0);

    return (
        <View >
            <Picture
            index={props.index}
            pic={picIndex}
            />
            
            <Misc 
            index={props.index}
            />
        </View>
    )
}


export default Card;