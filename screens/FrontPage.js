import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'


const FrontPage = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is the Front Page</Text>
            <Button
                title="Swipe through Restaurants"
                onPress={() => props.navigation.navigate('Swiper')}
            />
        </View>
    ); 
}