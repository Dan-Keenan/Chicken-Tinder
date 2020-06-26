import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import firebase from '../firebase'
import Alert from 'expo';

const FrontPage = (props) => {

    const getLocation = async () => {
        console.log('awaiting')
        const { status } = await Permissions.askAsync(Permissions.LOCATION)
        console.log('finished waiting')
        if (status !== 'granted') {
          console.log('PERMISSION NOT GRANTED FOR LOCATION')
        } 
    
        console.log('LOCATION GRANTED.')
    
        console.log('awaiting 2')
        const userLocation = await Location.getCurrentPositionAsync();
        console.log('worked')
        const { latitude, longitude } = userLocation.coords;
        
        // add user's coordinates to firestore database
        firebase.firestore().collection('coords').add({
          latitude: latitude,
          longitude: longitude,
        })
        console.log(userLocation);
      }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is the Front Page</Text>
            <Button
                title="Swipe through Restaurants"
                onPress={() => props.navigation.navigate('Swiper')}
            />
            <Button
                title="Request Location"
                onPress={() => getLocation()}
            />
        </View>
    ); 
}

export default FrontPage; 
