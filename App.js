import React from 'react'
import { StatusBar } from "react-native";

import {NavigationContainer} from '@react-navigation/native'
import MainStack from './src/stacks/MainStack'


export default ()=>{
  return(
    
    <NavigationContainer>
       <StatusBar
        animated={true}
        backgroundColor="black"
        />
      <MainStack />
    </NavigationContainer>
   
  )
}