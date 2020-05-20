import React, {useRef} from 'react';
import { View, Text, Image, StyleSheet, Animated, PanResponder, StatusBar, Dimensions, } from 'react-native';
import data from '../data';
import Card from '../components/Card';

// represents the swiping deck of cards
const CardDeck = (props) => {

    const { width, height } = Dimensions.get('window');

    /*
        ---- A N I M A T I O N S -----
    */
    const pan = new Animated.ValueXY({x : 0, y : 0});

    // reset card everytime we increment the index
    React.useEffect(() => {
        pan.setValue({x : 0, y : 0})
    }, [props.index])

    // panResponder handles all swiping animations
    const panResponder = 
        PanResponder.create({

        onMoveShouldSetPanResponder: (evt, gestureState) => props.infoStyleHuh,
      
        onPanResponderMove: (evt, gestureState) => {
            pan.setValue({x : gestureState.dx, y : gestureState.dy})
        },
        onPanResponderRelease: (evt, gestureState) => {

            if (gestureState.dx > 120) {
                Animated.spring(pan, {toValue : {x : gestureState.dx > 0 ? width + 300 : -width - 300, y : gestureState.dy}, duration : 400}).start(() => {
                    props.incIdx();
                })
                console.log('swipe right')
            } else if (gestureState.dx < -120) {
                Animated.spring(pan, {toValue : {x : gestureState.dx > 0 ? width + 300 : -width - 300, y : gestureState.dy}, duration : 400}).start(() => {
                    props.incIdx();
                })
                console.log('swipe left')
            } else {
                Animated.spring(pan, {toValue : {x : 0, y : 0}, friction : 4}).start()
            }
         }
    });

    const rotate = pan.x.interpolate({
        inputRange : [-width / 2, 0, width / 2],
        outputRange : ['-10deg', '0deg', '10deg'],
        extrapolate : 'clamp'
    })

    const rotateAndTranslate = {
        transform : [
            {
                rotate
            },
            ...pan.getTranslateTransform()  
        ]
    }

    const seenTextLiked = pan.x.interpolate({
        inputRange : [-100, 0, 100],
        outputRange : [0, 0 ,1],
        extrapolate : 'clamp'
    })

    const seenTextDisliked = pan.x.interpolate({
        inputRange : [-100, 0, 100],
        outputRange : [1, 0, 0],
        extrapolate : 'clamp'
    })

    const backCardOpacity = pan.x.interpolate({
        inputRange : [-100, 0, 100],
        outputRange : [1, 0, 1],
        extrapolate : 'clamp'
    });

    const backCardScale = pan.x.interpolate({
        inputRange : [-100, 0, 100],
        outputRange : [1, 0.8, 1],
        extrapolate : 'clamp'
    })

    // instantiates the deck of cards
    const renderCards = (res, resIdx) => {

        // not sure if this actually works !!
        // only renders the the current indexed card and the following two cards
        if(resIdx >= props.index && resIdx <= props.index + 2) {
                console.log('residx ' + resIdx)

                // if the card being rendered comes before the current index do not render it
                if(resIdx < props.index) {
                    return null;
                }

                // if the current index is the card we should be on
                if (resIdx === props.index) {
                    
                    // returns an indexed new card with animations and the yes/no text
                    return (
                        <Animated.View key={res.id}
                        style={[
                            {transform: [{ translateX: pan.x }, { translateY: pan.y }]},
                            {...rotateAndTranslate},
                            props.infoStyleHuh ? (styles.individualCard)  : (styles.noStyles)]}
                            {...panResponder.panHandlers}
                        >
                            <Animated.View style={{...styles.likeDislikeTextContainer, left : 50, borderColor : 'green', opacity : seenTextLiked, transform : [{rotate : '-30deg'}]}}>
                                <Text style={{color : 'green', fontSize : 32, fontWeight : '700'}}>YES</Text>
                            </Animated.View>

                            <Animated.View style={{...styles.likeDislikeTextContainer, right : 30, borderColor : 'red', opacity : seenTextDisliked, transform : [{rotate : '30deg'}]}}>
                                <Text style={{color : 'red', fontSize : 30, fontWeight : '700'}}>NO</Text>
                            </Animated.View>

                            <Card key={res.id}
                                cardIndex={resIdx}
                                incIdx={props.incIdx}
                                handleInfoStyle={props.handleInfoStyle}
                            />
                            
                        </Animated.View>
                        )
                } 
                
                // background cards that blend in opacity
                return (
                    <Animated.View key={res.id}
                    style={[ {opacity : backCardOpacity},
                        {transform : [{scale : backCardScale}]},
                        styles.individualCard]}
                        {...panResponder.panHandlers}
                    >

                        <Card key={res.id}
                            cardIndex={resIdx}
                            incIdx={props.incIdx}
                            handleInfoStyle={props.handleInfoStyle}
                        />

                    </Animated.View>
                    )
        }
    }
   
    // renders the entire deck of cards
    return (
        <Animated.View>
            <StatusBar hidden />
            {data.map((res, resIdx) => renderCards(res, resIdx)).reverse()}
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    individualCard : {
        position: 'absolute',
        flex: 1,
        // backgroundColor: 'skyblue',
        width: 355,
        height: 600,
        margin: 10,
        marginTop: 100,
        marginBottom: 100,
        borderWidth: 1,
        backgroundColor: 'skyblue',
        borderColor: 'lightgrey',
        borderRadius: 8,
        overflow: 'hidden',
    }, likeDislikeTextContainer : {
        position : 'absolute',
        top : 30,
        zIndex : 2,
        borderWidth : 4, 
        paddingVertical : 5,
        paddingHorizontal : 10
    }, noStyles : {
        position: 'absolute',
    }
  });

export default CardDeck;