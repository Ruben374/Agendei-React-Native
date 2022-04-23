import React from 'react'
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import MainStack from './src/stacks/MainStack'
import UserContextProvider from './src/contexts/UserContext'

export default () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <StatusBar animated={true} backgroundColor='black' />
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  )
}
