import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import styles from './styles.js'
import { useNavigation } from '@react-navigation/native'
import InputField from '../../components/InputField'
import EmailIcon from '../../assets/Email.png'
import PasswordIcon from '../../assets/Password.png'
import Person from '../../assets/Person.png'
import Api from '../../Api'

const SignIn = () => {
  const navigation = useNavigation()

  const [nameField, setNameField] = useState('')
  const [emailField, setEmailField] = useState('')
  const [passwordField, setPasswordField] = useState('')

  const handleSignInMessagePress = () => {
    navigation.reset({
      routes: [{ name: 'Login' }]
    })
  }

  const handleCadastrarPress = async () => {
    if (
      nameField.trim() !== '' &&
      emailField.trim() !== '' &&
      passwordField.trim() !== ''
    ) {
      const response = await Api.SignUp(nameField, emailField, passwordField)
      if (response.status == 201) {
        const login = await Api.Login(emailField, passwordField)
        if (login.token) {
          navigation.reset({
            routes: [{ name: 'Choose' }]
          })
        }
      }
      else if(response.status == 422) {
         Alert.alert('Erro!', 'Email ja cadastrado', [{ text: 'OK' }]) 
      }
    } else {
      Alert.alert('Erro!', 'Preencha todos os campos', [{ text: 'OK' }])
    }
  }

  return (
    <View style={styles.Container}>
      <View style={styles.FormArea}>
        <InputField
          IconSvg={Person}
          placeholder='Digite seu nome'
          value={nameField}
          onChangeText={text => setNameField(text)}
        />
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
        <TouchableOpacity
          style={styles.CostumBtn}
          onPress={handleCadastrarPress}
        >
          <Text style={styles.CostumBtnTxt}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.SignInMessage}
        onPress={handleSignInMessagePress}
      >
        <Text style={styles.SignInMessageText}>Ja possui uma conta?</Text>
        <Text style={styles.SignInMessageTextBold}>Faça login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignIn
