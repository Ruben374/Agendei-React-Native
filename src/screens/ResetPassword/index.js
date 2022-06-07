import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert
} from 'react-native'
import styles from './styles.js'
import { AntDesign } from '@expo/vector-icons'
import Api from '../../Api'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

const ResetPassword = ({ route }) => {
  const navigation = useNavigation()
  const [passwordField, setPasswordField] = useState('')
  const [confirmPasswordField, setConfirmPasswordField] = useState('')
  const [loading, setLoading] = useState(false)
  const [viewPass1, setViewPass1] = useState(true)
  const [viewPass2, setViewPass2] = useState(true)
  const [validatePassword, setValidatePassword] = useState(true)
  const [validateConfirmPassword, setValidateConfirmPassword] = useState(true)
  const secureText = password => {
    //setPasswordField(password)
    //console.log(validateInput)
    const regexUppercase = password.match(/^(?=.*[A-Z]).+$/)
    //const regexLowercase = password.match(/^(?=.*[a-z]).+$/)
    const regexNumber = password.match(/^(?=.*[0-9]).+$/)
    const length = password.length >= 6

    console.log(regexUppercase)
    console.log(length)
    console.log(regexUppercase)
    if (regexUppercase && regexNumber && length) {
      console.log('boa senha')
      return true
    } else {
      return false
    }
  }

  const ResetBtn = async () => {
    setLoading(true)
    if (passwordField.trim() !== '' && confirmPasswordField.trim() !== '') {
      if (secureText(passwordField)) {
        setValidatePassword(true)
        if (passwordField == confirmPasswordField) {
          setValidateConfirmPassword(true)
          try {
            const response = await Api.UpdateClient(
              'Ps',
              route.params.email,
              passwordField,
              ''
            )
            if (response.status == 200) {
              Alert.alert(
                'Senha redefinida.',
                'Sua senha foi redefinida com sucesso!',
                [
                  {
                    text: 'OK',
                    onPress: () => {
                      navigation.reset({
                        routes: [
                          {
                            name: 'Login'
                          }
                        ]
                      })
                    }
                  }
                ]
              )
            } else {
              alert('Não foi possivel redefinir a sua senha')
            }
            console.log(response)
            setLoading(false)
          } catch (error) {
            setLoading(false)
            console.log(error.message)
          }
        } else {
          setValidateConfirmPassword(false)
          setLoading(false)
        }
      } else {
        setValidatePassword(false)
        setLoading(false)
      }
    } else {
      setLoading(false)
      alert('preencha os campos')
    }
  }
  return (
    <View style={styles.Container}>
      <View style={styles.TopScreen}>
        <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
          <AntDesign name='arrowleft' size={30} color='#222455' />
        </TouchableOpacity>
      </View>
      <View style={styles.FormArea}>
        <Text style={styles.Title}>Defina sua nova senha</Text>
        <Text style={styles.Message}>Redefina sua senha!</Text>
        <Text style={styles.InputMessage}>Nova senha</Text>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 2,
            borderBottomColor: '#222455',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5
          }}
        >
          <TextInput
            style={{
              flex: 1,
              fontSize: 18,
              color:"#222455",
              fontFamily: "NotoSans_400Regular",
            }}
            placeholderTextColor='#555'
            selectionColor='#222455'
            secureTextEntry={viewPass1}
            value={passwordField}
            onChangeText={text => {
              setPasswordField(text)
            }}
          />

          {viewPass1 ? (
            <TouchableOpacity onPress={() => setViewPass1(!viewPass1)}>
              <Ionicons name='ios-eye-off-outline' size={24} color='black' />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setViewPass1(!viewPass1)}>
              <Ionicons name='ios-eye-outline' size={24} color='black' />
            </TouchableOpacity>
          )}
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ color: 'red' }}>
            {validatePassword
              ? ''
              : 'Sua senha deve conter: no minimo 6 carcteres, números, letra maiúscula e letra minúscula'}
          </Text>
        </View>
        <Text style={styles.InputMessage}>Confirme a senha</Text>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 2,
            borderBottomColor: '#222455',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <TextInput
            style={{
              flex: 1,
              fontSize: 18,
              color:"#222455",
              fontFamily: "NotoSans_400Regular",
            }}
            placeholderTextColor='#555'
            selectionColor='#222455'
            secureTextEntry={viewPass2}
            value={confirmPasswordField}
            onChangeText={text => setConfirmPasswordField(text)}
          />

          {viewPass2 ? (
            <TouchableOpacity onPress={() => setViewPass2(!viewPass2)}>
              <Ionicons name='ios-eye-off-outline' size={24} color='black' />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setViewPass2(!viewPass2)}>
              <Ionicons name='ios-eye-outline' size={24} color='black' />
            </TouchableOpacity>
          )}
        </View>
        <View style={{ marginBottom: 30 }}>
          <Text style={{ color: 'red' }}>
            {validateConfirmPassword ? '' : 'as senhas não condizem'}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.Button}
          onPress={ResetBtn}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size='large' color='#fff' />
          ) : (
            <Text style={styles.ButtonText}>Definir</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ResetPassword
