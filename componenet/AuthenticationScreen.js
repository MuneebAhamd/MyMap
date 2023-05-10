import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const AuthenticationScreen = ({ navigation }) => {
  const handleSignupPress = () => {
    navigation.navigate('SignupScreen');
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
        <TouchableOpacity
          style={styles.button}
          onPress={handleSignupPress}
        >
         <Image 
            style={styles.img1} 
            source={require('../assets/Signup.png')}
            />

        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Image 
            style={styles.img2} 
            source={require('../assets/Login.png')}
            />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

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
  button: {
    width: deviceWidth * 0.90,
    alignSelf:'flex-end',
    marginLeft:'70%',
    marginTop:'10%',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  img:{
    width:'33%',
    height:'25%',
    // position:'absolute',
    marginTop:'10%'
  },
  img1:{
    width:'30%',
    height:'25%',
    top:170,
    marginLeft:'32%'
    
  },
  img2:{
    width:'30%',
    height:'25%',
    // top:170,
    marginLeft:'32%'
    
  }
});

export default AuthenticationScreen;
