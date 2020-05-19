import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Dimensions } from 'react-native';
import data from '../data'
import Card from '../components/Card';

// represents the swiping deck of cards
const CardDeck = (props) => {

    // instantiates the deck of cards
    const renderCards = (res, resIdx) => {

        // only renders the the current indexed card and the following two cards
        if(resIdx >= props.index && resIdx <= props.index + 2) {
                console.log(resIdx)

                // returns an indexed  new card
                return (
                    <View key={res.id}>
                        <Card style={styles.individualCard}
                        index={resIdx}
                        incIdx={props.incIdx}
                        infostyle={props.infostyle}
                        />
                    </View>
                    )
            }
    }
   
    // renders the entire deck of cards
    return (
        <View>
            <StatusBar hidden />
            {data.map((res, resIdx) => renderCards(res, resIdx)).reverse()}
        </View>
    )
}

const styles = StyleSheet.create({
    individualCard : {
        position: 'absolute',
    }, 
    cardContain: {
        flex: 1,
        backgroundColor: 'skyblue',
        margin: 10,
        marginTop: 100,
        marginBottom: 100,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 8,
        overflow: 'hidden',
    }
  });

export default CardDeck;