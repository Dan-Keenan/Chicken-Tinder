import { StyleSheet, Button, View, ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import FrontPage from './screens/FrontPage'
import Swiper from './screens/Swiper'




/*
  Future Ideas:
  ------------
    Copy tinder and prevent people from swiping too fast in order
    to optimize or load stuff faster
  */

export default function App() {

  const Stack = createStackNavigator(); 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Front Page">
        <Stack.Screen name="Front Page" component={FrontPage} />
        <Stack.Screen name="Swiper" component={Swiper} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // TODO: fix marginTop and marginBottom when dealing w/ diff device sizes
  cardContain: {
      // flex: 1,
      // backgroundColor: 'skyblue',
      // margin: 10,
      // marginTop: 120,
      // marginBottom: 100,
      // borderWidth: 1,
      // borderColor: 'lightgrey',
      // borderRadius: 8,
      // overflow: 'hidden',
  },
  nothing: {
    // flex: 1,
    // width: 50,
    // height: 50,
  }, 
  scroll: {

  }
});