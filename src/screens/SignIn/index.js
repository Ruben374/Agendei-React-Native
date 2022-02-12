import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles.js'
import { useNavigation } from '@react-navigation/native'
import InputField from '../../components/InputField'
import EmailIcon from '../../assets/Email.png'
import PasswordIcon from '../../assets/Password.png'
import Person from '../../assets/Person.png'

const SignIn = () => {
  const navigation = useNavigation()

  const [nameField, setnameField] = useState('')
  const [emailField, setEmailField] = useState('')
  const [passwordField, setPasswordField] = useState('')

  const handleSignInMessagePress = () => {
    navigation.reset({
      routes: [{ name: 'Login' }]
    })
  }

  return (
    <View style={styles.Container}>
      <View style={styles.FormArea}>
        <InputField
          IconSvg={Person}
          placeholder='Digite seu nome'
          value={nameField}
          onChangeText={text => setEmailField(text)}
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
        <TouchableOpacity style={styles.CostumBtn}>
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
