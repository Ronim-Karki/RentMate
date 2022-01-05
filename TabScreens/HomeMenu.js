import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const HomeMenu = () => {
  return (
    <View style={styles.view} onPress={() => Keyboard.dismiss()}>
      <TextInput style={styles.textbox} placeholder="Search item" />
    </View>
  );
};
const styles = StyleSheet.create({
  textbox: {
    backgroundColor: 'white',
    width: 200,
    height: 50,
    borderRadius: 10,
    paddingLeft: 25,
    borderColor: 'black',
    marginTop: 25,
    borderStartWidth: 5,
    borderStyle: 'solid',
    fontSize: 15,
  },
  view: {
    margin: 15,
    display: 'flex',
    alignContent: 'center',
  },
});
export default HomeMenu;
