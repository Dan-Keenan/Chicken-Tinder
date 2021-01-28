import React, { useEffect } from "react";
import {
  Keyboard,
  TextInput,
  StyleSheet,
  Button,
  View,
  Text,
} from "react-native";

const Lobby = (props) => {

    const navigateChickenTinderApp = () => {
        props.navigation.navigate('ChickenTinderApp')
    }

    const { userType } = props.navigation.state.params

    // show lobby with a .map over the server-side
    
  return (
    <>
      <View >
      <Button title="Start Lobby"
        onPress={
            () => {
                console.log("navigating to chicken tinder")
                console.log("user is", userType)
                navigateChickenTinderApp()
            }
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

export default Lobby;
