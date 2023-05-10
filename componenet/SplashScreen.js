import React, { useEffect, useState } from 'react';
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { AuthenticationScreen } from './AuthenticationScreen';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const SplashScreen = ({ navigation }) => {
  const [hideSplash, setHideSplash] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHideSplash(true);
    }, 3000); // amount of time the splash is shown from the time component is rendered
  }, []);

  useEffect(() => {
    if (hideSplash) {
      navigation.navigate('AuthenticationScreen');
    }
  }, [hideSplash, navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/artboard1.png')} resizeMode="cover" style={styles.imageBackground}>
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
});
