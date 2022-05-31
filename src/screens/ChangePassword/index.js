import React, { useState, useContext } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  ScrollView
} from 'react-native'
import styles from './styles.js'
import { AntDesign } from '@expo/vector-icons'
import Api from '../../Api'
import { UserContext } from "../../contexts/UserContext";
import InputField from "../../components/InputField"
const ChangePassword = ({ navigation }) => {
  const { state: user } = useContext(UserContext);
  const [currentPass, setCurrentPass] = useState('')
  const [newPass, setNewPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [loading, setLoading] = useState(false)
  const [viewPass1, setViewPass1] = useState(true)
  const [viewPass2, setViewPass2] = useState(true)
  const [viewPass3, setViewPass3] = useState(true)
  const [validatePassword, setValidatePassword] = useState(true)
  const [validateConfirmPassword, setValidateConfirmPassword] = useState(true)
  const falsex = true
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
    if (currentPass.trim() !== '' && newPass.trim() !== '' && confirmPass.trim() !== '') {
      if (secureText(newPass)) {
        setValidatePassword(true)
        if (newPass == confirmPass) {
          setValidateConfirmPassword(true)
          try {
            const response = await Api.UpdateClient('Password', user.email, newPass, currentPass)
            setLoading(false)

            if (response.message == "Success") {
              Alert.alert(
                'Senha Alterada',
                'Sua senha Alterada com sucesso!',
                [
                  {
                    text: 'OK',
                    onPress: () => {
                      navigation.navigate("ClientSetting")
                    }
                  }
                ]
              )
            }
            else {
              alert(response.message)
            }
          } catch (error) {
            setLoading(false)
            alert(error)
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
    <ScrollView style={styles.Scroll}>
      <View style={styles.Container}>
        <View style={styles.TopScreen}>
          <TouchableOpacity onPress={() => navigation.navigate("ClientSetting")}>
            <AntDesign name='arrowleft' size={35} color='#222455' />
          </TouchableOpacity>
        </View>
        <View style={styles.FormArea}>
          <Text style={styles.Title}>Altere sua palavra passe</Text>
          <Text style={styles.InputMessage}>Palavra passe actual</Text>
          <InputField
            value={currentPass}
            onChangeText={(t) => setCurrentPass(t)}
            pass1={viewPass1}
            onIconPress={() => setViewPass1(!viewPass1)}
          />
          <Text style={{ color: 'red' }}>
            {falsex
              ? ''
              : ''}
          </Text>
          <Text style={styles.InputMessage}>Nova senha</Text>
          <InputField
            value={newPass}
            onChangeText={(t) => setNewPass(t)}
            pass1={viewPass2}
            onIconPress={() => setViewPass2(!viewPass2)}
          />
          <Text style={{ color: 'red' }}>
            {validatePassword
              ? ''
              : 'Sua senha deve conter: no minimo 6 carcteres, números, letra maiúscula e letra minúscula'}
          </Text>

          <Text style={styles.InputMessage}>Confirme a senha</Text>
          <InputField
            value={confirmPass}
            onChangeText={(t) => setConfirmPass(t)}
            pass1={viewPass3}
            onIconPress={() => setViewPass3(!viewPass3)}
          />
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

    </ScrollView>
  )
}
export default ChangePassword




/*
const handleButtonConfirm = async () => {
    if (
      currentPassword.trim() !== '' &&
      newPassword.trim() !== '' &&
      confirmNewPassword.trim() !== ''
    ) {
      if (newPassword == confirmNewPassword) {
        try {
          const response = await Api.UpdateClient('Password', user.email, newPassword,currentPassword)
          alert(response.message)
        } catch (error) {
          alert(error)
        }
      } else {
        alert('palavras passe diferentes')
      }
    } else {
      alert('preencha todos os campos')
    }
  }

 */
