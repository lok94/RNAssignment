// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../components/HomeScreen';
import ModalScreen from '../components/ModalScreen';

const Stack = createStackNavigator();
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
      <MainStack.Navigator headerMode = "none">
        <MainStack.Screen name="Home" component={HomeScreen} />
      </MainStack.Navigator>
  );
}

function RootStackScreen(){
  return(
    <NavigationContainer>
      <Stack.Navigator headerMode = "none">
       <RootStack.Screen name="Main" component={MainStackScreen} options={{ headerShown: false }}
      />
      <RootStack.Screen name="MyModal" component={ModalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStackScreen;