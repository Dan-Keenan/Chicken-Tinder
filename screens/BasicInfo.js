import React, { useEffect } from "react";
import {
  Keyboard,
  TextInput,
  StyleSheet,
  Button,
  View,
  Text,
} from "react-native";

const BasicInfo = (props) => {
  
    const [name, setName] = React.useState("");

    const navigateUserType = () => {
        props.navigation.navigate('UserType', {
          name: name
        })
    }

    
  return (
    <>
      <View>
        <TextInput
          style={s.input}
          placeholder="Please enter your name ..."
          onChangeText={
            text => setName(text)
          }
          onSubmitEditing={
              () => {
                Keyboard.dismiss
                console.log("Name entered:")
                navigateUserType()
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

export default BasicInfo;
