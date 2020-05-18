import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
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
        console.log('handling press')
        props.incIdx();
    }

    const handleInfoToggle = () => {
        // setInfoMode(!infoMode);
        console.log('changing infoMode to ' + infoMode);
        props.is()
    }

    // returns the picture and misc detail elements of the card
    // if (infoMode) {
    //     return <Button 
    //     title='test'
    //     onPress={handleInfoToggle}
    //     />
    // } else 
    // {
        return (
            <>
                <TouchableOpacity onPress={handlePress}>
                        <Picture
                        index={props.index}
                        picIdx={picIndex}
                        // onPress={handlePress}
                        />
                        
                        <Misc 
                        index={props.index}
                        />
    
                    <View style={styles.infoButton}>
    
                        <MaterialCommunityIcons.Button
                        name='information'
                        backgroundColor='transparent'
                        underlayColor='transparent'
                        size={25}
                        onPress={handleInfoToggle}
                        />
    
                    </View>
    
                </TouchableOpacity>
                    
                
            </>
        )
    // }
}

const styles = StyleSheet.create({
    infoButton: {
        position: 'absolute',
        paddingTop: 410,
        paddingLeft: 300,
    }
})

export default Card;