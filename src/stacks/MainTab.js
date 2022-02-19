import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CustomTabBar from '../components/CustomTabBar'
import Home from '../screens/Home'
import Appointments from '../screens/Appointments'
import Search from '../screens/Search'
import Profile from '../screens/Profile'

const Tab = createBottomTabNavigator()

export default ({ navigation, route }) => {
 
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar route={route} {...props}/>}
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen initialParams={{id:route.params.id,categoryname:route.params.name}} name='Home' component={Home} />
      <Tab.Screen name='Search' component={Search} />
      <Tab.Screen name='Appointments' component={Appointments} />
       <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  )
}
