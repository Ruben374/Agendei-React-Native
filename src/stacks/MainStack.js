import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Preload from '../screens/Preload'
import Login from '../screens/Login'
import SignIn from '../screens/SignIn'
import Choose from '../screens/Choose'
import MainTab from './MainTab'


const Stack = createStackNavigator()

export default () => (
  <Stack.Navigator
    initialRouteName='Preload'
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen name='Preload' component={Preload} />
    <Stack.Screen name='Login' component={Login} />
    <Stack.Screen name='SignIn' component={SignIn} />
    <Stack.Screen name='Choose' component={Choose} />
    <Stack.Screen name='MainTab' component={MainTab} />

  </Stack.Navigator>
)
