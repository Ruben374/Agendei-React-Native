import React from 'react'
import { View, Text,ActivityIndicator } from 'react-native'
import styles from './styles'

const Preload = () => {
  return (
    <View style={styles.container}>
 <ActivityIndicator size="large" color="#ffff" />
    </View>
  )
}

export default Preload
