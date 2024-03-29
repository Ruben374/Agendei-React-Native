import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles.js'
import {useNavigation} from '@react-navigation/native'
import InputField from '../../components/InputField'
import EmailIcon from '../../assets/Email.png'
import PasswordIcon from '../../assets/Password.png'

const Login = () => {

  const navigation= useNavigation();

  const [emailField, setEmailField] = useState('')
  const [passwordField, setPasswordField] = useState('')

  const handleLoginMessagePress=()=>{
  navigation.reset({
      routes: [{name: 'SignIn'}],
    });
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
        <TouchableOpacity style={styles.CostumBtn}>
          <Text style={styles.CostumBtnTxt}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.LoginMessage}  onPress={handleLoginMessagePress}>
        <Text style={styles.LoginMessageText}>Ja possui uma conta?</Text>
        <Text style={styles.LoginMessageTextBold}>Faça login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login
