import React from 'react';
import { View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Picture from '../components/Picture';
import Misc from '../components/Misc';

// render the individual card
const Card = (props) => {

    // hook that decides which picture in arr of picture should be displayed
    const [picIndex, setPicIndex] = React.useState(0);

    // handles the user's tap
    const handlePress = () => {
        console.log('handling press')
        props.incIdx();
    }

    // returns the picture and misc detail elements of the card
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
                <Button
                    title='i'
                    color='white'
                />
            </View>
            

            
        </TouchableOpacity>
        
       
        </>
    )
}

const styles = StyleSheet.create({
    infoButton: {
        position: 'absolute',
        paddingTop: 420,
        paddingLeft: 300,
    }
})

export default Card;