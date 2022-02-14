import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import styles from './styles.js'
import { useNavigation } from '@react-navigation/native'
import InputField from '../../components/InputField'
import Api from '../../Api'
import EmailIcon from '../../assets/Email.png'
import PasswordIcon from '../../assets/Password.png'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = () => {
  const navigation = useNavigation()

  const [emailField, setEmailField] = useState('')
  const [passwordField, setPasswordField] = useState('')

  const handleLoginMessagePress = () => {
    navigation.reset({
      routes: [{ name: 'SignIn' }]
    })
  }
  const handleLoginButton = async () => {
    if (emailField.trim() !== '' && passwordField.trim() !== '') {
      const response = await Api.Login(emailField, passwordField)
      console.log(response.token)
      if (response.token) {
        await AsyncStorage.setItem('token', response.token)
        //se tudo tiver certo vai para Home
        navigation.reset({
          routes: [{ name: 'Choose' }]
        })
      } else {
        Alert.alert('Ups!', 'Password ou senha errados', [{ text: 'OK' }])
      }
    } else {
      Alert.alert('Erro!', 'Preencha todos os campos', [{ text: 'OK' }])
    }
  }

  return (
    <View style={styles.Container}>
      <View style={styles.FormArea}>
        <InputField
          IconSvg={EmailIcon}
          placeholder='Digite seu email'
          value={emailField}
          onChangeText={text => setEmailField(text)}
        />
        <InputField
          IconSvg={PasswordIcon}
          placeholder='Digite sua senha'
          value={passwordField}
          onChangeText={text => setPasswordField(text)}
          password
        />
        <TouchableOpacity onPress={handleLoginButton} style={styles.CostumBtn}>
          <Text style={styles.CostumBtnTxt}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.LoginMessage}
        onPress={handleLoginMessagePress}
      >
        <Text style={styles.LoginMessageText}>Ainda não possui uma conta?</Text>
        <Text style={styles.LoginMessageTextBold}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login
