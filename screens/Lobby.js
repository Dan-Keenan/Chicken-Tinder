import React, { useEffect } from "react";
import {
  Keyboard,
  TextInput,
  StyleSheet,
  Button,
  View,
  Text,
  FlatList
} from "react-native";
import firebase from '../firebase'

const Lobby = (props) => {

    const [lobbyUsers, setLobbyUsers] = React.useState([])

    const { userType } = props.navigation.state.params
    const { lobbyNumber } = props.navigation.state.params

    const ledgerRef = firebase.firestore().collection('lobbies').doc(lobbyNumber)
    // state:
    // lobby number
    // all users in the lobby 

    const navigateChickenTinderApp = () => {
        props.navigation.navigate('ChickenTinderApp')
    }

    

    useEffect( () => {
      // console.log(lobbyNumber, userType, '!!!')
      // const dbListener = firebase.database().ref('lobbies/' + {lobbyNumber})
      
      // console.log('hi')
      // if im the host:
      
      // - generate random number
      // - create new lobby in database 
      // - add name to lobby in database
      // - pull from database with map
      // below should be out of useEffect
      // ... rerender when somebody else joins/leaves
      
      // if im the guest:

      // - pull from database with random number
      // - add name to list

      // below should be out of useEffect
      // ... rerender when somebody else joins/leaves
    })

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
