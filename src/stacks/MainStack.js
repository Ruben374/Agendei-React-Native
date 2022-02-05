import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Preload from '../screens/Preload'
import Login from '../screens/Login'
import SignIn from '../screens/SignIn'
import Home from '../screens/Home'

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
     <Stack.Screen name='Home' component={Home} />
  </Stack.Navigator>
)
