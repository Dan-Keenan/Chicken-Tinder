import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import data from '../data'
import {
    useFonts,
    Jost_100Thin,
    Jost_200ExtraLight,
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
    Jost_700Bold,
    Jost_800ExtraBold,
    Jost_900Black,
    Jost_100Thin_Italic,
    Jost_200ExtraLight_Italic,
    Jost_300Light_Italic,
    Jost_400Regular_Italic,
    Jost_500Medium_Italic,
    Jost_600SemiBold_Italic,
    Jost_700Bold_Italic,
    Jost_800ExtraBold_Italic,
    Jost_900Black_Italic,
  } from '@expo-google-fonts/jost';

// Misc. details relating to the card
const Misc = (props) => {

    // load in font
    let [fontsLoaded] = useFonts({
        Jost_300Light, Jost_600SemiBold,
    });

    const cuisine = data[props.index].cuisine;
    const id = data[props.index].id;
    const name = data[props.index].name;

    // if font isn't loaded, load it with default font 
    if (!fontsLoaded) {
        return (
            <View style={styles.misc}>
                <Text>{name}</Text>
                <Text>{cuisine}</Text>
                <Text>Id: {id}</Text>
            </View>
        )
    } else {
        return (
            <View style={styles.misc}>
                <Text style={[styles.text, styles.resName,]}>{name}</Text>
                <Text style={[styles.text, styles.resCuisine,]}>{cuisine}</Text>
                {/* <Text style={styles.text}>{id}</Text> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    misc: {
        position: 'absolute',
    },
    resName: {
        paddingTop: 370,
        fontFamily: 'Jost_600SemiBold',
        // position: 'absolute'
    },
    text: {
        color: 'white',
        fontFamily: 'Jost_300Light',
        fontSize: 30,
        paddingLeft: 20,
        position: 'absolute'
    }, 
    resCuisine: {
        paddingTop: 400,
        color: 'lightgray'
    }
    
})

export default Misc;