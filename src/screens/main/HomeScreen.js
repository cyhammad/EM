import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import auth, {firebase} from '@react-native-firebase/auth';

const HomeScreen = ({route}) => {
  const user = firebase.auth().currentUser;
  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <View>
      <Text>{user?.email}</Text>
      <Text>Welcome to homepage</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
