import React, { useEffect, useState } from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles.js'
import InputField from '../../components/InputField'
import TargetIcon from '../../assets/Target.png'
import Dentista from '../../assets/Dentista.png'
import lavagem from '../../assets/lavagem.png'
import unhas from '../../assets/unhas.png'
import veterinario from '../../assets/veterinario.png'
import secador from '../../assets/secador.png'
import mecanico from '../../assets/mecanico.png'
import Top from '../../assets/top.png'
import Api from '../../Api'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Choose = () => {
  const navigation = useNavigation()
  const [categoryList, setcategoryList] = useState([])
  useEffect(() => {
    const getCategorys = async () => {
      const response = await Api.getCategorys()

      if (response.Quantidade > 0) {
        setcategoryList(response.Categorias)
        console.log(response.Categorias)
      }
    }
    getCategorys()
  }, [])

  const handleLogoutButton = async () => {
    try {
      const token = await AsyncStorage.getItem('token')
      const response = await Api.Logout(token)
      if (response) {
        navigation.reset({
          routes: [{ name: 'Login' }]
        })
      }
    } catch (error) {
      Alert.alert('Erro!', error.message, [{ text: 'OK' }])
    }
  }

  return (
    <View style={styles.Container}>
      <ScrollView style={styles.Scroll}>
        <Image source={Top} style={styles.Top} />

        <Text style={styles.Title}>Agende os seus serviços</Text>
        <Text style={styles.ForYouMessage}>O que você precisa?</Text>

        <View style={styles.tela}>
          {categoryList.map((item, key) => (
            <TouchableOpacity key={key} style={styles.elemento}>
              <Image
                style={{ width:48,height:48}}
                source={{
                  uri:`http://192.168.10.142:3009/${item.image}`
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          onPress={handleLogoutButton}
          style={{
            width: 130,
            height: 60,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 40
          }}
        >
          <Text style={{ fontSize: 25, color: 'white' }}>Sair</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Choose
