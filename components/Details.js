import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import data from '../sampleData';

// Returns the specific details regarding each specific card
const Details = (props) => {
        return (
            <View pointerEvents="none">
                <Text style={styles.details}>{data[props.index].name}</Text>
                <Text style={styles.stars}>{data[props.index].rating} Stars</Text>
                <Text style={styles.id}>{data[props.index].reviewtext}</Text>
                <Text style={styles.loc1}>{data[props.index].location[0]}</Text>
                <Text style={styles.loc2}>{data[props.index].location[1]}</Text>
                <Text style={styles.loc3}>{data[props.index].location[2]}</Text>
            </View>
        )
}

// TODO: fix paddingTop when dealing w/ diff device sizes
const styles = StyleSheet.create({
    details: {
        position: 'absolute',
        paddingTop: 700,
    }, cuisine: {
        position: 'absolute',
        paddingTop: 720,
    }, stars: {
        position: 'absolute',
        paddingTop: 740,
    }, id: {
        position: 'absolute',
        paddingTop: 760,
    }, loc1 :{
        position: 'absolute',
        paddingTop: 850,
    }, loc2 :{
        position: 'absolute',
        paddingTop: 900,
    }, loc3 :{
        position: 'absolute',
        paddingTop: 950,
    }
})

export default Details;