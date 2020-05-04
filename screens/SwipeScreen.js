import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Dimensions, FlatList } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import data from '../data'
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Transitioning, Transition } from 'react-native-reanimated';
import DetailScreen from './MoreDetails';


const {width} = Dimensions.get('window')

const ANIMATION_DURATION = 200;

/*
    todo: disable infinite scrolling in future:
            - modulo
            - infinite option on Swiper
*/

const transition = (
    <Transition.Sequence>
      <Transition.Out
        type='slide-bottom'
        durationMs={ANIMATION_DURATION}
        interpolation='easeIn'
      />
      <Transition.Together>
        <Transition.In
          type='fade'
          durationMs={ANIMATION_DURATION}
          delayMs={ANIMATION_DURATION / 2}
        />
        <Transition.In
          type='slide-bottom'
          durationMs={ANIMATION_DURATION}
          delayMs={ANIMATION_DURATION / 2}
          interpolation='easeOut'
        />
      </Transition.Together>
    </Transition.Sequence>
  );

const Card = ({ card }) => (
    <View style={styles.card}>
        <Image 
        source={{ uri: card.image }} style={styles.cardImage} 
        resizeMode="cover"
        />
    </View>
)

const CardDetails = ({ index }) => (
    <View style={styles.cardDetails} key={data[index].id}>
        <Text style={[styles.text, styles.title]}>{data[index].name}</Text>
        <Text style={[styles.text, styles.cuisine]}>{data[index].price}</Text>
    </View>
)

const swiperRef = React.createRef();
const transitionRef = React.createRef();

const COLORS = {
    red: '#ec2379',
    blue: '#0060ff',
    gray: '#777777',
    black: '#000000',
    white: '#ffffff',
    orange: '#ff9a00',
    // minimal yet warm below:
    tan: '#EAE7DC',
    darkerTan: '#D8C3A5',
    greyBrown: '#8E8D8A',
    paleRed: '#E98074',
    candyRed: '#E85A4F',
    titleGrey: '#5e5e5e',
    smoothBlue: '#2072f5'
}



// main
const SwipeScreen = props => {
    const [index, setIndex] = React.useState(0);
    const [showDetails, setShowDetails] = React.useState(false);

    // increment index each time we swipe
    const onSwiped = () => {
        transitionRef.current.animateNextTransition();
        // setIndex(index + 1);
        setIndex((index + 1) % data.length);
    };

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.swiperContainer}>

                <Swiper
                    infinite
                    cards={data}
                    cardIndex={index}
                    renderCard={card => <Card card={card} />}
                    onSwiped={onSwiped}
                    ref={swiperRef}
                    stackSize={4}
                    stackScale={10}
                    stackSeperation={40}
                    disableTopSwipe
                    disableBottomSwipe
                    animateOverlayLabelsOpacity
                    animateCardOpacity
                    backgroundColor={'transparent'}
                    // what happens on left and right swipe
                    overlayLabels={{
                        left: {
                            title: 'NOPE',
                            style: {
                                label: {
                                    backgroundColor: COLORS.candyRed,
                                    color: COLORS.white,
                                    fontSize: 24
                                },
                                wrapper: {
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    justifyContent: 'flex-start',
                                    marginTop: 20,
                                    marginLeft: -20
                                }
                            }
                        },
                        right: {
                            title: 'YES',
                            style: {
                                label: {
                                    backgroundColor: COLORS.smoothBlue,
                                    color: COLORS.white,
                                    fontSize: 24
                                },
                                wrapper: {
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    marginTop: 20,
                                    marginLeft: 20
                                }
                            }
                        },
                    }}
                />


            </View>


            <View style={styles.bottomContainer}>

                <Transitioning.View
                    ref={transitionRef}
                    transition={transition}
                >
                    <CardDetails index={index} />
                </Transitioning.View>

                <View style={styles.bottomButtonContainer}>
                    <MaterialCommunityIcons.Button
                        name='thumb-down-outline'
                        size={94}
                        backgroundColor='transparent'
                        underlayColor='transparent'
                        activeOpacity={.3}
                        color={COLORS.candyRed}
                        onPress={() => swiperRef.current.swipeLeft()}
                    />

                    <MaterialCommunityIcons.Button
                        name='thumb-up'
                        size={94}
                        backgroundColor='transparent'
                        underlayColor='transparent'
                        activeOpacity={.3}
                        color={COLORS.smoothBlue}
                        onPress={() => swiperRef.current.swipeRight()}
                    />

                    {/* <MaterialCommunityIcons.Button
                        name='circle'
                        size={94}
                        backgroundColor='transparent'
                        underlayColor='transparent'
                        activeOpacity={.3}
                        color={COLORS.greyBrown}
                        onPress={}
                    /> */}



                </View>

                {/* {showDetails && <View>
                    <FlatList 
                        data={data}
                        renderItem={item => (
                            <View>
                                <Text>{item.index}</Text>
                            </View>
                        )}
                        />
                </View>} */}

            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.tan,
    },
    screen: {
        flex: 1,
        backgroundColor: COLORS.black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        flex: 0.55,
        borderRadius: 8,
        shadowRadius: 30,
        shadowColor: COLORS.black,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 0 },
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    cardImage: {
        width: 340,
        height: 200,
        flex: 1,
        // overflow: 'hidden',
        borderRadius: 12
        // resizeMode: 'cover'
    },
    bottomContainer: {
        flex: 0.45,
        justifyContent: 'space-evenly'
    },
    cardDetails: {
        alignItems: 'center'
    },
    text: {
        fontFamily: 'AvenirNext-UltraLight'
    },
    title: {
        fontSize: 40,
        color: COLORS.titleGrey,
        fontWeight: '300'
    },
    cuisine: {
        color: COLORS.candyRed,
        fontSize: 24,
        fontWeight: '200',
        fontFamily: 'Didot'
    },
    swiperContainer: {
        flex: 0.55
    },
    bottomButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    bottomDetails: {
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    }
});

export default SwipeScreen;