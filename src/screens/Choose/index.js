import React, { useEffect, useState } from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator 
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles.js'
import InputField from '../../components/InputField'
import Top from '../../assets/top.png'
import CategoryCard from '../../components/CategoryCard'
import Api from '../../Api'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Choose = () => {
  const navigation = useNavigation()
  const [categoryList, setcategoryList] = useState([])
  useEffect(() => {
    const getCategorys = async () => {
      const response = await Api.getCategories()
      console.log(response.length)
      if (response.length > 0) {
        setcategoryList(response)
        console.log(response)
      }
    }
    getCategorys()
  }, [])

  const handleLogoutButton = async () => {
    try {
      await AsyncStorage.removeItem('token')
      navigation.reset({
        routes: [{ name: 'Login' }]
      })
    } catch (error) {
      Alert.alert('Erro!', error.message, [{ text: 'OK' }])
    }
  }
const onPress= async(id,name)=>{
navigation.navigate('MainTab',{id,name})
}
  return (
    <View style={styles.Container}>
      <ScrollView style={styles.Scroll}>
        <Image source={Top} style={styles.Top} />

        <Text style={styles.Title}>Agende os seus serviços</Text>
        <Text style={styles.ForYouMessage}>O que você precisa?</Text>

        <View style={styles.tela}>
          {categoryList.length <= 0 ? (
             <ActivityIndicator size='large' color='red' />
          ) : (
            categoryList.map((item, key) => <CategoryCard Data={item} key={key} onPress={onPress}/>)
          )}
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
