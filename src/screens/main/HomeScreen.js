import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {auth} from '../../../firebase';
import {signOut} from 'firebase/auth';
import {Button} from 'react-native-paper';

const HomeScreen = ({navigation}) => {
  const user = auth.currentUser;
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log('logged out');
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <View>
      <Text>{user.email}</Text>
      <Text>Welcome to homepage</Text>
      <Button mode="contained" onPress={logout}>
        Logout
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
