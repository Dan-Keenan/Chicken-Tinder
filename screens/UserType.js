// import React from 'react'
// import { View, Text, Button } from 'react-native';

// const Home = (props) => {

//     return (
//         <View>
//             <Text>Hello World</Text>
// <Button title="Host Lobby"
//             onPress={navigateChickenTinderApp}
//             />
//             <Button title="Join Lobby"
//             onPress={navigateChickenTinderApp}
//             />

//             <Button title="Go To CT"
//             onPress={navigateChickenTinderApp}
//             />
//         </View>
//     )

// }
// export default Home;

import React, { useEffect } from "react";
import {
  Keyboard,
  TextInput,
  StyleSheet,
  Button,
  View,
  Text,
} from "react-native";

const UserType = ({ navigation }) => {

    const navigateLobby = (userTypeInfo) => {
        navigation.navigate('Lobby', {
          userType: userTypeInfo
        })
    }

    const { name } = navigation.state.params;

    
  return (
    <>
    <View style={s.host}>
      <Text>
        Hi {name}!
      </Text>
    </View>
      <View style={s.host}>
        <Button title="Host Lobby"
        onPress={
            () => {
                console.log("navigating to lobby as host")
                navigateLobby("host")
            }
        }
        />
      </View>

      <View>
        <TextInput
          style={s.input}
          placeholder="Click here to join an existing lobby ..."
          onSubmitEditing={
              () => {
                Keyboard.dismiss
                console.log("navigating to lobby as guest")
                navigateLobby("guest")
              }
            //   if this is wrong - clear box and send an alert!!
            }
        />
      </View>
    </>
  );
};

const s = StyleSheet.create({
  input: {
    margin: 60,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  host: {
    paddingTop: 200
  },
});

export default UserType;
