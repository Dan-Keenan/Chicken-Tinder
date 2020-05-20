import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Animated, TouchableWithoutFeedback, Button } from 'react-native';
import Picture from '../components/Picture';
import Misc from '../components/Misc';
import { MaterialCommunityIcons } from '@expo/vector-icons';


// render the individual card
const Card = (props) => {

    // hook that decides which picture in arr of picture should be displayed
    const [picIndex, setPicIndex] = React.useState(0);

    // hook that switches between information mode and swiping mode
    const [infoMode, setInfoMode] = React.useState(false); 

    // handles the user's tap
    const handlePress = () => {
        // props.incIdx();
        console.log('pressed!')
    }

    // handles the toggling of the information button
    const handleInfoToggle = () => {
        console.log('changing infoMode to ' + infoMode);
        props.handleInfoStyle();
    }

        return (
                <TouchableOpacity
                activeOpacity={1}
                onPressIn={handlePress}
                >
                        <Picture
                        cardIndex={props.cardIndex}
                        picIdx={picIndex}
                        // onPress={handlePress}
                        />
                        
                        <Misc 
                        cardIndex={props.cardIndex}
                        />

                    <Animated.View style={styles.infoButton}>
    
                        <MaterialCommunityIcons.Button
                        name='information'
                        backgroundColor='transparent'
                        underlayColor='transparent'
                        size={25}
                        onPress={handleInfoToggle}
                        />
    
                    </Animated.View>
    
                </TouchableOpacity> 
        )

}

const styles = StyleSheet.create({
    infoButton: {
        position: 'absolute',
        paddingTop: 510,
        paddingLeft: 300,
    }
})

export default Card;