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
import LobbyUser from '../components/LobbyUser'
import firebase from '../firebase'

const Lobby = (props) => {

    const [lobbyUsers, setLobbyUsers] = React.useState([])

    const { userType } = props.navigation.state.params
    const { lobbyNumber } = props.navigation.state.params

    const ledgerRef = firebase.firestore().collection('lobby').doc(lobbyNumber)
    const personRef = firebase.firestore().collection('lobby').doc(lobbyNumber).collection('person')

    // state:
    // lobby number
    // all users in the lobby 

    const navigateChickenTinderApp = () => {
        props.navigation.navigate('ChickenTinderApp')
    }

    personRef
    .onSnapshot(function(querySnapshot) {
        const personList = [];
        
        querySnapshot.forEach(function(doc) {
            personList.push({
              id: doc.id,
              name: doc.data().name,
              usertype: doc.data().usertype
            });
        });

        setLobbyUsers(personList)
        // console.log("Current people in lobby: ", cities.join(", "));
    });

    // console.log("lobbyUsers", lobbyUsers)
    
    
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
      <View>
        <FlatList
        data = {lobbyUsers}
        keyExtractor = {(person) => person.id}
        renderItem ={ ({item}) => <LobbyUser name={item.name} usertype={item.usertype}/>}
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
