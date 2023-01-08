import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {auth} from '../../../firebase';
import {signOut} from 'firebase/auth';
import {Button, IconButton, Searchbar} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
    <ScrollView style={styles.body}>
      <View style={styles.container}>
        <View style={styles.header}>
          <MaterialIcons
            name="menu"
            onPress={() => navigation.openDrawer()}
            size={30}
            style={styles.drawerBtn}
          />
          <Searchbar
            style={styles.searchBar}
            placeholder="looking for something"
            placeholderTextColor="gray"
            inputStyle={styles.searchBarText}
            elevation={0}
          />
        </View>
        <Text>{user.email}</Text>
        <Text>Welcome to homepage</Text>
        <Button mode="contained" onPress={logout}>
          Logout
        </Button>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: '90%',
    alignSelf: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBar: {
    height: 36,
    lineHeight: 40,
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
    flex: 1,
  },
  searchBarText: {
    fontSize: 16,
    padding: 0,
  },
  drawerBtn: {
    padding: 0,
    marginRight: 10,
  },
});
