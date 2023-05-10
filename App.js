import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from './componenet/SplashScreen';
 import AuthenticationScreen from './componenet/AuthenticationScreen';
import SignupScreen from './componenet/SignupScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import mapScreen from './componenet/mapScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddIcon from 'react-native-vector-icons/AntDesign'
import tabNaviigation from './componenet/tabNaviigation';

//map
import {enableLatestRenderer} from 'react-native-maps';



function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  enableLatestRenderer();
  return (
    <NavigationContainer>
<Stack.Navigator
screenOptions={{
  headerShown: false
}}
>
  {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
  <Stack.Screen name="SplashScreen" component={SplashScreen} />
  <Stack.Screen name="AuthenticationScreen" component={AuthenticationScreen} />
  <Stack.Screen name="SignupScreen" component={SignupScreen} />
  <Stack.Screen
                name="tabNaviigation"
                component={tabNaviigation}
            />
  {/* <Stack.Screen name="mapScreen" component={mapScreen} /> */}
</Stack.Navigator>

    </NavigationContainer>


);
}

function Manu() {
  return (
    <View>
      <SignupScreen />
    </View>
  )
}
function Menu() {
  return (
    <View>
      <SignupScreen />
    </View>
  )
}
function MyAccount() {
  return (
    <View>
      <SignupScreen />
    </View>
  )
}
function Scan() {
  return (
    <View>
      <SplashScreen />
    </View>
  )
}
function btn() {
  return (
    <View>
      <SplashScreen />
    </View>
  )
}






export default App;













// <Stack.Navigator
// // screenOptions={{
// //   headerShown: false
// // }}
// >
//   {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
//   <Stack.Screen name="SplashScreen" component={SplashScreen} />
//   <Stack.Screen name="AuthenticationScreen" component={AuthenticationScreen} />
//   <Stack.Screen name="SignupScreen" component={SignupScreen} />
//   {/* <Stack.Screen name="mapScreen" component={mapScreen} /> */}
// </Stack.Navigator>
