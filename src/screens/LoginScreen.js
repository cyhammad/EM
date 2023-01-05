import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  Button,
  IconButton,
  TextInput,
  TouchableRipple,
} from 'react-native-paper';

const LoginScreen = ({navigation}) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <View style={styles.container} rippleColor="rgba(0, 0, 0, .32)">
      <IconButton
        icon="chevron-left"
        color="black"
        size={30}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container2}>
        <Text style={styles.urbanist}>Welcome to</Text>
        <Text style={styles.whisper}>ExtraMile</Text>
        <TextInput
          mode="outlined"
          textColor="#8391A1"
          style={styles.input}
          outlineColor="#F7F8F9"
          activeOutlineColor="#8391A1"
          selectionColor="black"
          placeholder="Enter your email"
          placeholderTextColor="#8391A1"
        />
        <TextInput
          mode="outlined"
          textColor="#8391A1"
          style={styles.input}
          outlineColor="#F7F8F9"
          activeOutlineColor="#8391A1"
          selectionColor="black"
          placeholder="Enter your password"
          placeholderTextColor="#8391A1"
          secureTextEntry={!showPass}
          right={
            <TextInput.Icon
              icon={showPass ? 'eye-off-outline' : 'eye-outline'}
              onPress={() => setShowPass(!showPass)}
            />
          }
        />
        <TouchableOpacity
          style={styles.forgetbtn}
          onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={styles.forgettxt}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginbtn} theme={{borderRadius: 0}}>
          <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>
        <View style={styles.noaccountview}>
          <Text style={styles.urbanisttext}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={styles.registerbtn}>
            <Text style={styles.registertxt}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

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
    marginTop: 50,
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
  },
  registertxt: {
    fontFamily: 'Urbanist-Bold',
  },
  urbanisttext: {
    fontFamily: 'Urbanist-Regular',
  },
});
