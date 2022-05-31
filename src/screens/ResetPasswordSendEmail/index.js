import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from 'react-native'
import styles from './styles.js'
import { AntDesign } from '@expo/vector-icons'
import Api from '../../Api'
import { useNavigation } from '@react-navigation/native'

const ResetPasswordSendEmail = () => {
  const navigation = useNavigation()
  const [emailField, setEmailField] = useState('')
  const [loading, setLoading] = useState(false)

  const handleContinueBtn = async () => {
    setLoading(true)
    if (emailField.trim() !== '') {
      try {
        const response = await Api.VerifyEmailToResetPassword(emailField)
        if (response.status == 200) {
          setLoading(false)
          navigation.navigate('ConfirmSignUp', { email: emailField, type: 2 })
        } else if (response.status == 404) {
          alert(response.message)
          setLoading(false)
        } else {
          alert('Não foi possivel realizar esta operação')
          setLoading(false)
        }
      } catch (error) {
        console.log(error.message)
      }
    } else {
      alert('Preencha o campo')
      setLoading(false)
    }
  }
  return (
    <View style={styles.Container}>
      <View style={styles.TopScreen}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <AntDesign name='arrowleft' size={35} color='#222455' />
        </TouchableOpacity>
      </View>
      <View style={styles.FormArea}>
        <Text style={styles.Title}>Recupe a sua palavra passe</Text>
        <Text style={styles.Message}>
          Degite o seu email para o processo de verificação, vamos enviar um
          codigo de 4 digitos para o seu email
        </Text>
        <Text style={styles.InputMessage}>Seu email</Text>
        <TextInput
          style={styles.Input}
          selectionColor='#222455'
          value={emailField}
          onChangeText={text => setEmailField(text)}
          maxLength={40}
        />
        <TouchableOpacity
          style={styles.Button}
          onPress={handleContinueBtn}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size='large' color='#fff' />
          ) : (
            <Text style={styles.ButtonText}>Continuar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ResetPasswordSendEmail
