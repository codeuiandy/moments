import React, {useState, useEffect, useContext} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavMenu} from '@components/menu';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home, Onboarding, TextNote,TextNoteEdit} from '@screens';
import {AuthContext} from './src/contexts/AuthContext';
import {DrawerContent} from '@components/menuDrawer';
import {getHeaderTitle} from '@react-navigation/elements';
import Header from './src/components/menuNavHome';

const Stack = createStackNavigator();

// function MainHome(props) {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'white',
//       }}>
//       <Text>This is the home page!</Text>
//       <TouchableWithoutFeedback
//         onPress={() => props.navigation.navigate('Notifications')}>
//         <Text>Visit notifications</Text>
//       </TouchableWithoutFeedback>

//       <TouchableWithoutFeedback
//         onPress={() => props.navigation.navigate('Settings')}>
//         <Text>Go to settings stack</Text>
//       </TouchableWithoutFeedback>
//     </View>
//   );
// }

// function Notifications(props) {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Notifications!</Text>
//       <TouchableWithoutFeedback
//         onPress={() => props.navigation.navigate('Profile')}>
//         <Text>Profile</Text>
//       </TouchableWithoutFeedback>
//     </View>
//   );
// }

// function Profile() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function HomeStack() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <Stack.Screen name="Main" component={MainHome} />
//       <Stack.Screen name="Notifications" component={Notifications} />
//       <Stack.Screen name="Profile" component={Profile} />
//     </Stack.Navigator>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();

export default function App() {
  const {currentState} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {currentState == 'onboard' ? (
        <Onboarding />
      ) : (
        <Drawer.Navigator
          drawerContent={props => <DrawerContent {...props} />}
          screenOptions={{
            drawerStyle: {
              // backgroundColor: '#c6cbef',
              width: '80%',
            },
            // headerShown: false
            header: props => {
              const title = getHeaderTitle(props.options, props.route.name);

              return <Header headerProps={props} title={title} />;
            },
          }}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen
            name="TextNote"
            component={TextNote}
            screenOptions={{
              headerShown: false,
            }}
          />

<Drawer.Screen
            name="TextNoteEdit"
            component={TextNoteEdit}
            screenOptions={{
              headerShown: false,
            }}
          />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

// const bottomTab =()=>{}

// const Tab = createBottomTabNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//          tabBar={props => <NavMenu {...props} />}
//          screenOptions={({ route }) => ({
//             headerShown: false,
//            tabBarIcon: ({ color, size, focused }) => {
//              return <SvgIcon name="notif-bell" size={20} />;
//            },
//          })}

//       >
//         <Tab.Screen name="Home"  component={HomeStack} />
//         <Tab.Screen  name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
