import React from "react";
import {
  View,
  Text,
} from "react-native";

const LobbyUser = (props) => {

    return (
        <View>
            <Text>{props.name} ({props.usertype})</Text>
        </View>
    )
}

export default LobbyUser