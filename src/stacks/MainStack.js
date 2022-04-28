import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Preload from '../screens/Preload'
import Login from '../screens/Login'
import SignIn from '../screens/SignIn'
import Choose from '../screens/Choose'
import Est from '../screens/Est'
import ConfirmAppointments from '../screens/ConfirmAppointments'
import ConfirmSignUp from '../screens/ConfirmSignUp'
import EditProfile from '../screens/EditProfile'
import MainTab from './MainTab'
import ChangePassword from '../screens/ChangePassword'
import Favorites from '../screens/Favorites'
import Ratting from '../screens/Ratting'
import ResetPasswordSendEmail from '../screens/ResetPasswordSendEmail'
import ResetPassword from '../screens/ResetPassword'

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
    <Stack.Screen name='ConfirmSignUp' component={ConfirmSignUp}/>
    <Stack.Screen name='Choose' component={Choose} />
    <Stack.Screen name='MainTab' component={MainTab} />
   <Stack.Screen name='Est' component={Est} />
   <Stack.Screen name='ConfirmAppointments' component={ConfirmAppointments} />
   <Stack.Screen name='EditProfile' component={EditProfile} />
   <Stack.Screen name='ChangePassword' component={ChangePassword}/>
   <Stack.Screen name='Favorites' component={Favorites}/>
   <Stack.Screen name='Ratting' component={Ratting}/>
   <Stack.Screen name='ResetPasswordSendEmail' component={ResetPasswordSendEmail}/>
   <Stack.Screen name='ResetPassword' component={ResetPassword}/>
  </Stack.Navigator>
)
