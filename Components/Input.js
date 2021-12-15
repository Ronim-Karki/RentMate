import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from 'react-native';
// import { auth } from '../user/firebase.js';
import { fetchdata } from '../user/db';
import 'react-native-gesture-handler';
const Input = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  // const handleSignIn = () => {
  //   auth
  //     .createUserWithEmailAndPassword(userName, password)
  //     .then((userCredentials) => {
  //       const user = userCredentials.user;
  //       console.log(user.userName);
  //     })
  //     .catch((error) => alert(error.message));

  const handleSignIn = () => {
    // if (!userName) {
    //   alert('Please Insert Username');
    // }
    // if (!password) {
    //   alert('Please Insert Password');
    // } else {
    //   const checkData = fetchdata(userName, password);

    navigation.navigate('SignUp');
    // }
  };

  // };
  return (
    <View onPress={() => Keyboard.dismiss()}>
      <TextInput
        style={styles.textbox}
        placeholder="User Name/Email"
        defaultValue={userName}
        onChangeText={(text) => setUserName(text)}
        textContentType="username"
      />
      <TextInput
        style={styles.textbox}
        placeholder="Password"
        defaultValue={password}
        onChangeText={(text) => setPassword(text)}
        textContentType="password"
        secureTextEntry={true}
      />
      <View style={styles.button}>
        <Button title="Sign In" onPress={() => handleSignIn()} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textbox: {
    backgroundColor: 'white',
    width: 350,
    height: 50,
    borderRadius: 10,
    paddingLeft: 25,
    borderColor: 'black',
    marginTop: 25,
    borderStartWidth: 5,
    borderStyle: 'solid',
    fontSize: 15,
  },
  button: {
    width: 300,
    alignSelf: 'center',
    borderRadius: 10,
    fontSize: 25,
    marginTop: 25,
  },
});
export default Input;
