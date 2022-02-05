import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator, Image } from 'react-native'
import styles from './styles'
import Logo from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native'
import Api from '../../Api'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Preload = () => {
  const navigation = useNavigation()

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token')
      if (token) {
        const response = await Api.verifyToken(token)
        if (response.token) {
          await AsyncStorage.setItem('token', response.token);
          navigation.navigate('MainTab')
        }
      } else {
        navigation.navigate('Login')
      }
    }
    checkToken()
  }, [])

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.Logo} />
      <ActivityIndicator size='large' color='#ffff' />
    </View>
  )
}

export default Preload
