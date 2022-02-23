import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles.js'
import HomeIcon from '../../assets/teste.png'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

const CustomTabBar = ({ state, navigation, route, k }) => {
  const goTo = screenName => {
      navigation.navigate(screenName)
  }
  return (
    <View style={styles.TabArea}>
      <TouchableOpacity style={styles.TabItem} onPress={() => goTo('Home')}>
        <Fontisto
          name='home'
          size={38}
          color={
            state.index === 0 ? 'rgba(63,93,125,1)' : 'rgba(63,93,125,0.2)'
          }
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.TabItem} onPress={() => goTo('Search')}>
        <FontAwesome
          name='search'
          size={38}
          color={
            state.index === 1 ? 'rgba(63,93,125,1)' : 'rgba(63,93,125,0.2)'
          }
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.TabItem}
        onPress={() => goTo('Appointments')}
      >
        <MaterialCommunityIcons
          name='calendar-month-outline'
          size={40}
          color={
            state.index === 2 ? 'rgba(63,93,125,1)' : 'rgba(63,93,125,0.2)'
          }
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.TabItem} onPress={() => goTo('Profile')}>
        <Ionicons
          name='person'
          size={40}
          color={
            state.index === 3 ? 'rgba(63,93,125,1)' : 'rgba(63,93,125,0.2)'
          }
        />
      </TouchableOpacity>
    </View>
  )
}
export default CustomTabBar
