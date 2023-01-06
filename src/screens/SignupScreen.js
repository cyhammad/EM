import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {IconButton, TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const SignupScreen = ({navigation}) => {
  const [showPass, setShowPass] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const registerUser = async () => {
    console.log(username, email, password, confirmPassword);
    auth()
      .createUserWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <View style={styles.container} rippleColor="rgba(0, 0, 0, .32)">
      <IconButton
        icon="chevron-left"
        color="black"
        size={30}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container2}>
        <Text style={styles.urbanist}>Hello! Register to get started</Text>
        <TextInput
          mode="outlined"
          textColor="#8391A1"
          style={styles.input}
          outlineColor="#F7F8F9"
          activeOutlineColor="#8391A1"
          selectionColor="black"
          placeholder="Username"
          placeholderTextColor="#8391A1"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          mode="outlined"
          textColor="#8391A1"
          style={styles.input}
          outlineColor="#F7F8F9"
          activeOutlineColor="#8391A1"
          selectionColor="black"
          placeholder="Email"
          placeholderTextColor="#8391A1"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          mode="outlined"
          textColor="#8391A1"
          style={styles.input}
          outlineColor="#F7F8F9"
          activeOutlineColor="#8391A1"
          selectionColor="black"
          placeholder="Password"
          placeholderTextColor="#8391A1"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPass}
          right={
            <TextInput.Icon
              icon={showPass ? 'eye-off-outline' : 'eye-outline'}
              onPress={() => setShowPass(!showPass)}
            />
          }
        />
        <TextInput
          mode="outlined"
          textColor="#8391A1"
          style={styles.input}
          outlineColor="#F7F8F9"
          activeOutlineColor="#8391A1"
          selectionColor="black"
          placeholder="Confirm Password"
          placeholderTextColor="#8391A1"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showPass}
          right={
            <TextInput.Icon
              icon={showPass ? 'eye-off-outline' : 'eye-outline'}
              onPress={() => setShowPass(!showPass)}
            />
          }
        />
        <TouchableOpacity
          style={styles.loginbtn}
          theme={{borderRadius: 0}}
          onPress={() => registerUser()}>
          <Text style={styles.btntext}>Register</Text>
        </TouchableOpacity>
        <View style={styles.noaccountview}>
          <Text style={styles.urbanisttext}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.registerbtn}>
            <Text style={styles.registertxt}>Login Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
  },
  urbanist: {
    color: 'black',
    fontFamily: 'Urbanist-Bold',
    fontSize: 26,
    marginVertical: 20,
    width: '80%',
  },
  whisper: {
    fontFamily: 'Whisper',
    fontSize: 50,
    marginTop: 20,
    marginBottom: 50,
  },
  input: {
    width: '80%',
    backgroundColor: '#F7F8F9',
    marginVertical: 5,
  },
  loginbtn: {
    width: '80%',
    marginTop: 50,
    backgroundColor: '#282931',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
  },
  btntext: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Urbanist-SemiBold',
    borderRadius: 1,
  },
  forgetbtn: {
    alignSelf: 'flex-end',
    marginRight: '10%',
  },
  forgettxt: {
    color: '#8391A1',
    fontSize: 14,
    textAlign: 'right',
  },
  noaccountview: {
    flexDirection: 'row',
    marginTop: 30,
  },
  registerbtn: {
    marginLeft: 1,
    fontFamily: 'Urbanist-Regular',
  },
  registertxt: {
    fontFamily: 'Urbanist-Bold',
  },
  urbanisttext: {
    fontFamily: 'Urbanist-Regular',
  },
});
