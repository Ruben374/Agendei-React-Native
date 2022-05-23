import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CustomTabBar from '../components/CustomTabBar'
import Home from '../screens/Home'
import { View } from 'react-native'
import Appointments from '../screens/Appointments'
import Favorites from '../screens/Favorites'
import Profile from '../screens/Profile'
import { Fontisto } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export default ({ navigation, route }) => {
  return (
    <Tab.Navigator

      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#5663ff',
        tabBarInactiveTintColor: '#777',
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          let iconName
          switch (route.name) {
            case 'Home':
              iconName = 'home'
              icon = 1
              break
            case 'Favorites':
              iconName = 'favorite'
              break
            case 'Profile':
              iconName = 'person'
              break
            case 'Appointments':
              iconName = 'calendar-month-outline'
              break
            default:
              iconName = 'circle'
              break
          }
          if (iconName == 'home') {
            return <Fontisto name={iconName} size={size} color={color} />
          }
          if (iconName == 'person') {
            return <Ionicons name={iconName} size={size} color={color} />
          }
          if (iconName == 'calendar-month-outline') {
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            )
          }
          if (iconName == 'favorite') {
            return <Fontisto name={iconName} size={size} color={color} />
          }
          if (iconName == 'circle') {
            return <Entypo name={iconName} size={size} color={color} />
          }
        }
      })}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen

        name='Favorites'
        component={Favorites}
      />
      <Tab.Screen name='Appointments' component={Appointments} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  )
}
/* initialParams={{ id: route.params.id, categoryname: route.params.name }} */
