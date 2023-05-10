// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { SplashScreen } from './SplashScreen';
//  import AuthenticationScreen from './AuthenticationScreen';
// import SignupScreen from './SignupScreen';
// import mapScreen from './mapScreen';
// // import Ionicons from 'react-native-vector-icons/Ionicons';
// // import AddIcon from 'react-native-vector-icons/AntDesign'

// const Stack = createNativeStackNavigator();

// function Routes() {
//   return (
//     <NavigationContainer>
     
//      <Stack.Navigator
//       screenOptions={{
//         headerShown: false
//       }}
//       >
//         <Stack.Screen name="SplashScreen" component={SplashScreen} />
//         <Stack.Screen name="AuthenticationScreen" component={AuthenticationScreen} />
//         <Stack.Screen name="SignupScreen" component={SignupScreen} />
//         <Stack.Screen name="mapScreen" component={mapScreen} />
//       </Stack.Navigator>
   
//     </NavigationContainer>


// );
// }

// export default Routes;




import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from './SplashScreen';
import AuthenticationScreen from './AuthenticationScreen';
import SignupScreen from './SignupScreen';
import mapScreen from './mapScreen';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="AuthenticationScreen" component={AuthenticationScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="mapScreen" component={mapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

