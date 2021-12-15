import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
//import SQLite from 'react-native-sqlite-storage';
// const db = -SQLite.openDatabase(
//   {
//     name: 'MainDB',
//     location: 'default',
//   },
//   () => {},
//   (error) => {
//     console.log(error);
//   }
// );
import {
  StyleSheet,
  Pressable,
  Button,
  Text,
  Image,
  View,
  Keyboard,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Input from './Input';

// const createTable = () => {
//   db.transaction((tx) => {
//     tx.executeSql(
//       'CREATE TABLE IF NOT EXISTS Registration (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL)'
//     );
//   });

const Home = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={{
          flex: 1,
          padding: 40,
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: '#0BC4C4',
        }}
      >
        <Text
          style={{
            marginTop: 50,
            fontSize: 25,
            color: 'white',
            marginBottom: 25,
          }}
        >
          Sign in to start renting
        </Text>
        <Image style={styles.logo} source={require('../Image/Logo.png')} />
        <Input />

        <View
          style={{
            marginTop: 25,
            flexDirection: 'row',
            gap: 100,
            alignContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Pressable onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ marginRight: 25, color: '#841584' }}>
              Create account
            </Text>
          </Pressable>

          <Text value="password" style={styles.text}>
            Forget Password?
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '80%',
    height: '20%',
  },
  button: {
    width: 300,

    borderRadius: 10,
    fontSize: 25,
    marginTop: 25,
  },
  text: {
    color: 'grey',
  },
});
export default Home;
