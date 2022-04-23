import React, { useEffect, useContext } from 'react'
import { View, Text, ActivityIndicator, Image } from 'react-native'
import styles from './styles'
import Logo from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native'
import Api from '../../Api'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { UserContext } from '../../contexts/UserContext'

const Preload = () => {
  const { dispatch: userDispatch } = useContext(UserContext)
  const navigation = useNavigation()
  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      const response = await Api.RefreshToken()
    
      if (response.token) {
       // console.log(response.token)
       console.log(response.avatar)
        //const t= await AsyncStorage.removeItem('token');
        userDispatch({
          type: 'setId',
          payload: {
            id: response.id
          }
        })
        userDispatch({
          type: 'setname',
          payload: {
            name: response.name
          }
        })
        userDispatch({
          type: 'setavatar',
          payload: {
            avatar: response.avatar
          }
        })
        
        navigation.reset({
          routes: [{ name: 'Choose'}]
        })

      } else {
        alert('error')
      }
    } else {
      navigation.reset({
        routes: [{ name: 'Login'}]
      })
    }
  }

  useEffect(() => {
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
