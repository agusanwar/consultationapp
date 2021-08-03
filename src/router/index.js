import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Account,
  Chatting,
  ChooseMentor,
  GetStarted,
  Home,
  Message,
  ProfileMentor,
  SignIn,
  SignUp,
  Splash,
  UploadPhoto,
} from '../screens';
import {BottomNavigator} from '../components';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UpdateProfile from '../components/molecules/UpdateProfile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChoseMentor"
        component={ChooseMentor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileMentor"
        component={ProfileMentor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chatting"
        component={Chatting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
