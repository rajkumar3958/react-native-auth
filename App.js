import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { View, Text } from 'react-native'
import signInScreen from './src/screens/signInScreen';
import signUpScreen from './src/screens/signUpScreen';
const stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{header:()=>null}}>
        <stack.Screen name="signIn" component={signInScreen}></stack.Screen>
        <stack.Screen name="signUp" component={signUpScreen}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App
