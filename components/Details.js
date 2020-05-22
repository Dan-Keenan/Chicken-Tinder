import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
import data from '../sampleData';
import DetailsPicture from './DetailsPicture'
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Returns the specific details regarding each specific card
const Details = (props) => {
        return (
            <View>
               
                    <DetailsPicture
                    cardIndex={props.index}
                    picIdx={props.picIdx}
                    handlePress={props.handlePress}
                    />
    
                <View style={styles.infoButton}>
        
                    <MaterialCommunityIcons.Button
                    name='information'
                    backgroundColor='transparent'
                    underlayColor='transparent'
                    size={25}
                    onPress={props.handleInfoStyle}
                    />

                </View>
                <View>
                    <Text style={styles.details}>{data[props.index].name}</Text>
                    <Text style={styles.stars}>{data[props.index].rating} Stars</Text>
                    <Text style={styles.id}>{data[props.index].reviewtext}</Text>
                    <Text style={styles.loc1}>{data[props.index].location[0]}</Text>
                    <Text style={styles.loc2}>{data[props.index].location[1]}</Text>
                    <Text style={styles.loc3}>{data[props.index].location[2]}</Text>
                </View>
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
        marginTop: 760,
    }, loc1 :{
        position: 'absolute',
        paddingTop: 850,
    }, loc2 :{
        position: 'absolute',
        paddingTop: 900,
    }, loc3 :{
        position: 'absolute',
        paddingTop: 950,
    }, infoButton: {
        position: 'absolute',
        marginTop: 310,
        marginLeft: 300,
        zIndex: 6,
    }
})

export default Details;