// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// const tabNaviigation = () => {
//     const Tab = createBottomTabNavigator();
//   return (
//     <View>
//     <NavigationContainer>
//     <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             if (route.name === 'Reactive Todos') {
//               iconName = focused
//               iconName = focused ? 'ios-list' : 'ios-list-outline';
//             } else if (route.name === 'Scan') {
//               iconName = focused ? 'ios-scan' : 'ios-scan-outline';
//             } else if (route.name === 'Menu') {
//               iconName = focused ? 'ios-menu' : 'ios-menu-outline';
//             }else if (route.name === 'MyAccount') {
//               iconName = focused ? 'ios-menu' : 'ios-menu-outline';
//             }
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//       >
//         <Tab.Screen
//           name="Reactive Todos"
//           component={HomeScreen}
//           options={{
//             headerStyle: {
//               backgroundColor: 'blue',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//               fontSize: 25,
//             },
//           }}
//         />
//         <Tab.Screen
//           name="Scan"
//           component={Scan}
//           options={{
//             headerStyle: {
//               backgroundColor: 'blue',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//               fontSize: 25,
//             },
//           }}
//         />
//         <Tab.Screen
//           name="MyAccount"
//           component={MyAccount}
//           options={{
//             headerStyle: {
//               backgroundColor: 'blue',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//               fontSize: 25,
//             },
//           }}
//         />
//         <Tab.Screen
//           name="Menu"
//           component={Manu}
//           options={{
//             headerStyle: {
//               backgroundColor: 'blue',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//               fontSize: 25,
//             },
//           }}
//         />
//       </Tab.Navigator>
//       </NavigationContainer>
//     </View>
//   )
// }


// function Manu() {
//     return (
//       <View>
//         <SignupScreen />
//       </View>
//     )
//   }
//   function MyAccount() {
//     return (
//       <View>
//         <SignupScreen />
//       </View>
//     )
//   }
//   function Scan() {
//     return (
//       <View>
//         <SplashScreen />
//       </View>
//     )
//   }

// export default tabNaviigation

// const styles = StyleSheet.create({})











//    {/* <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             if (route.name === 'Reactive Todos') {
//               iconName = focused
//               iconName = focused ? 'ios-list' : 'ios-list-outline';
//             } else if (route.name === 'Scan') {
//               iconName = focused ? 'ios-scan' : 'ios-scan-outline';
//             } else if (route.name === 'Menu') {
//               iconName = focused ? 'ios-menu' : 'ios-menu-outline';
//             }else if (route.name === 'MyAccount') {
//               iconName = focused ? 'ios-menu' : 'ios-menu-outline';
//             }
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//       >
//         <Tab.Screen
//           name="Reactive Todos"
//           component={HomeScreen}
//           options={{
//             headerStyle: {
//               backgroundColor: 'blue',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//               fontSize: 25,
//             },
//           }}
//         />
//         <Tab.Screen
//           name="Scan"
//           component={Scan}
//           options={{
//             headerStyle: {
//               backgroundColor: 'blue',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//               fontSize: 25,
//             },
//           }}
//         />
//         <Tab.Screen
//           name="MyAccount"
//           component={MyAccount}
//           options={{
//             headerStyle: {
//               backgroundColor: 'blue',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//               fontSize: 25,
//             },
//           }}
//         />
//         <Tab.Screen
//           name="Menu"
//           component={Manu}
//           options={{
//             headerStyle: {
//               backgroundColor: 'blue',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//               fontSize: 25,
//             },
//           }}
//         />
//       </Tab.Navigator> */}
//       {/* <tabNaviigation/> */}





// // function Manu() {
// //   return (
// //     <View>
// //       <SignupScreen />
// //     </View>
// //   )
// // }
// // function MyAccount() {
// //   return (
// //     <View>
// //       <SignupScreen />
// //     </View>
// //   )
// // }
// // function Scan() {
// //   return (
// //     <View>
// //       <SplashScreen />
// //     </View>
// //   )
// // }


import React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile } from '../';
import mapScreen from './mapScreen';
import SignupScreen from './SignupScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LocationScreen from './LocationScreen';
import NotificationScreen from './NotificationScreen';
import FacultyScreen from './FacultyScreen';
import NearlyplaceScreen from './NearlyplaceScreen';
const BottomTab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <BottomTab.Navigator

        screenOptions={({ route }) => ({
            headerShown: false,
                      tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'mapScreen') {
                          iconName = focused
                          iconName = focused ? 'bus' : 'bus';
                        } else if (route.name === 'FacultyScreen') {
                          iconName = focused ? 'business' : 'business';
                        } else if (route.name === 'LocationScreen') {
                          iconName = focused ? 'location-sharp' : 'location-sharp';
                        }else if (route.name === 'NearlyplaceScreen') {
                          iconName = focused ? 'ios-bookmark' : 'ios-bookmark';
                        }
                        else if (route.name === 'NotificationScreen') {
                            iconName = focused ? 'notifications' : 'notifications';
                          }
                        return <Ionicons name={iconName} size={size} color={color} />;
                      },
                    })}



            tabBar={(tabsProps) => (
                <>
                    <BottomTabBar {...tabsProps} />
                </>
            )}
            initialRouteName="mapScreen"
        >
            <BottomTab.Screen name="mapScreen" component={mapScreen} />
            <BottomTab.Screen name="FacultyScreen" component={FacultyScreen} 
            
            
            />
             <BottomTab.Screen name="LocationScreen" component={LocationScreen} />
            <BottomTab.Screen name="NotificationScreen" component={NotificationScreen} />
            <BottomTab.Screen name="NearlyplaceScreen" component={NearlyplaceScreen} /> 

        </BottomTab.Navigator>

    )
}

export default TabRoutes