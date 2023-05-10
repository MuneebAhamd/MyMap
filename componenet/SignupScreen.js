import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.warn('Create Account First');
    // Add your signup logic here
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/Asset4.png')}
        resizeMode="cover"
        style={styles.imageBackground}
      >

         <Image 
            style={styles.img} 
            source={require('../assets/Asset5.png')}
            />
        <Text style={styles.WelcomeText}>Welcome!</Text>
        <View style={styles.TextInputContainer}>
          <TextInput
            style={styles.TextInput}
            placeholder="Username"
            value={username}
            onChangeText={(name) => setUsername(name)}
          />
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(pass) => setPassword(pass)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.TouchableOpacityBtn} 
          onPress={() => navigation.navigate('tabNaviigation')}
        //   onPress={handleSignup}
          >
            <Text style={styles.TextBtn}>Signup</Text>
          </TouchableOpacity>
        </View>
          <Text style={styles.accountText}>Don't have an account?</Text>
          <TouchableOpacity style={styles.TouchableOpacityBtn1}
        //    onPress={() => navigation.goBack()}
        onPress={handleSignup}
           >
            <Text style={styles.TextBtn1}>Create</Text>
          </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: '#FFFFFF',
  },
  TextInputContainer: {
    marginVertical: 20,
    width: '80%',
    marginTop:"20%",
  },
  img:{
    width:'33%',
    height:'25%',
    // position:'absolute',
    // marginTop:'10%'
  },
  TextInput: {
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
  },
  WelcomeText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'left',
    // marginTop:"40%",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
  },
  TouchableOpacityBtn: {
    backgroundColor: '#eba134',
    borderRadius: 10,
    width: '40%',
    marginTop:'20%'
  },
  TextBtn: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
  TouchableOpacityBtn1: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '40%',
    marginTop:5,
  },
  TextBtn1: {
    fontSize: 20,
    color: '#eba134',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
  accountText:{
    color:'#fff',
    marginTop:10,
  }
});
