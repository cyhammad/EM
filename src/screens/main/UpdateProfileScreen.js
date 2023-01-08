/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Alert,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const updateAlert = () => {
  Alert.alert(
    'Update Account Information',
    'Are you sure?                                   Do you wish to proceed?',
    [
      {
        text: 'Update',
        onPress: () => Alert.alert('Account Updated.'),
        style: 'Cancel',
      },
      {
        text: 'Cancel',
        style: 'Cancel',
      },
    ],
    {
      cancelable: true,
    },
  );
};
const UpdateProfileScreen = () => (
  <ScrollView
    style={{flex: 1, width: '100%', height: '100%', marginVertical: '5%'}}>
    <Text
      style={{
        color: '#535353',
        fontFamily: 'Sans-Serif',
        fontSize: 20,
        marginBottom: '5%',
        fontWeight: '600',
        marginHorizontal: '5%',
      }}>
      Edit Profile Information
    </Text>
    <View style={{paddingHorizontal: '10%', marginBottom: '5%'}}>
      <View style={styles.outer_view}>
        <Text style={styles.outer_text}>New Name</Text>
        <TextInput
          style={styles.text_view}
          placeholder="username"
          placeholderTextColor="#535353"
        />
      </View>
      <View style={styles.outer_view}>
        <Text style={styles.outer_text}>Old Password</Text>
        <TextInput
          style={styles.text_view}
          placeholder="**********"
          placeholderTextColor="#535353"
        />
      </View>
      <View style={styles.outer_view}>
        <Text style={styles.outer_text}>New Password</Text>
        <TextInput
          style={styles.text_view}
          placeholder="*************"
          placeholderTextColor="#535353"
        />
      </View>
      <View style={styles.outer_view}>
        <Text style={styles.outer_text}>New Email</Text>
        <TextInput
          style={styles.text_view}
          placeholder="user@mail.com"
          placeholderTextColor="#535353"
        />
      </View>
      <View style={styles.outer_view}>
        <Text style={styles.outer_text}>New Phone</Text>
        <TextInput
          style={styles.text_view}
          placeholder="+921234567890"
          placeholderTextColor="#535353"
        />
      </View>
      <View style={styles.outer_view}>
        <Text style={styles.outer_text}>New Payment Address</Text>
        <TextInput
          style={styles.text_view}
          placeholder="street adress"
          placeholderTextColor="#535353"
        />
      </View>
      <View style={styles.outer_view}>
        <Text style={styles.outer_text}>New Delivery Address</Text>
        <TextInput
          style={styles.text_view}
          placeholder="street adress"
          placeholderTextColor="#535353"
        />
      </View>
    </View>
    <View
      style={{
        flexDirection: 'row',
        marginTop: '5%',
        marginHorizontal: '10%',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity style={styles.button_view1}>
        <Text style={styles.view_text1}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_view2} onPress={updateAlert}>
        <Text style={styles.view_text2}>Update</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  outer_text: {
    fontFamily: 'Sans-Serif',
    fontWeight: '600',
    fontSize: 15,
    marginLeft: 5,
    paddingBottom: '1%',
  },
  text_view: {
    backgroundColor: '#E4EDEC',
    fontFamily: 'Sans-Serif',
    fontSize: 16,
    padding: '3%',
    borderRadius: 15,
  },
  outer_view: {
    paddingVertical: '3%',
  },
  button_view1: {
    backgroundColor: '#E4EDEC',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
  },
  button_view2: {
    backgroundColor: '#282931',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
  },
  view_text1: {
    fontFamily: 'Sans-Serif',
    fontSize: 16,
    padding: '3%',
    color: 'black',
    fontWeight: '600',
  },
  view_text2: {
    fontFamily: 'Sans-Serif',
    fontSize: 16,
    padding: '3%',
    color: 'white',
    fontWeight: '600',
  },
});

export default UpdateProfileScreen;
