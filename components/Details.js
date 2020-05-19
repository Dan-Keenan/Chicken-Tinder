import React from 'react';
import { Text, StyleSheet } from 'react-native';
import data from '../data';

// Returns the specific details regarding each specific card
const Details = (props) => {
        return (
            <>
                <Text style={styles.details}>{data[props.index].name}</Text>
                <Text style={styles.cuisine}>{data[props.index].cuisine}</Text>
                <Text style={styles.stars}>{data[props.index].stars} Stars</Text>
                <Text style={styles.id}>{data[props.index].id}</Text>
            </>
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
    }
})

export default Details;