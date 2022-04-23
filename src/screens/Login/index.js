import React, { useState, useContext } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ScrollView,
  Image,
  TextInput,
  Modal,
  SafeAreaView,
  Animated
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
//import { BarPasswordStrengthDisplay } from 'react-native-password-strength-meter'
import Api from '../../Api'
import { MaterialIcons } from '@expo/vector-icons'
import Top from '../../assets/top2.png'
import { FontAwesome } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UserContext } from '../../contexts/UserContext'
import { Ionicons } from '@expo/vector-icons'

import styles from './styles'
const { Value, Text: AnimatedText } = Animated
const Login = () => {
  const { dispatch: userDispatch } = useContext(UserContext)
  const navigation = useNavigation()
  const [emailField, setEmailField] = useState('')
  const [passwordField, setPasswordField] = useState('')
  const [loading, setLoading] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [stapeOne, setStapeOne] = useState(true)
  const [stapeTwo, setStapeTwo] = useState(false)
  const [stapeThree, setStapeThree] = useState(false)
  const [value, setValue] = useState('')
  const [pass1, setPass1] = useState(true)
  const [pass, setPass] = useState(true)
  const [pass3, setPass3] = useState(true)
  const [stapeLoading, setStapeLoading] = useState(false)
  const [emailVerificationField, setEmailVerificationField] = useState('')
  const [verificationCodeField, setVerificationCodeField] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  const handleLoginMessagePress = () => {
    navigation.reset({
      routes: [{ name: 'SignIn' }]
    })
  }
  const handleLoginButton = async () => {
    setLoading(true)
    if (emailField.trim() !== '' && passwordField.trim() !== '') {
      const response = await Api.Login(emailField, passwordField)
      console.log(response.id)
      if (response.token) {
        await AsyncStorage.setItem('token', response.token)
        //se tudo tiver certo vai para Home

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
          routes: [{ name: 'Choose' }]
        })
      } else {
        setLoading(false)
        Alert.alert('Ups!', 'Password ou senha errados', [{ text: 'OK' }])
      }
    } else {
      setLoading(false)
      Alert.alert('Erro!', 'Preencha todos os campos', [{ text: 'OK' }])
    }
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleContinueBtn = async () => {
    setStapeLoading(true)

    if (stapeOne) {
      if (emailVerificationField.trim() !== '') {
        const response = await Api.VerifyEmailToResetPassword(
          emailVerificationField
        )
        if (response == true) {
          setStapeOne(false)
          setStapeTwo(true)
          setStapeLoading(false)
        } else if (response.message) {
          alert(response.message)
        } else {
          alert('erro')
        }
      } else {
        alert('Preencha o campo')
      }
    }
    if (stapeTwo) {
      if (verificationCodeField.trim() !== '') {
        const res = await Api.VerifyCodeToResetPassword(
          emailVerificationField,
          verificationCodeField
        )

        if (res == true) {
          setStapeLoading(false)
          setStapeTwo(false)
          setStapeThree(true)
        }
        if (res.message) {
          alert('falha')
        }
      } else {
        alert('Preencha o campo')
      }
    }
    if (stapeThree) {
      setStapeLoading(true)
      if (newPassword.trim() !== '' && confirmNewPassword.trim() !== '') {
        if (newPassword == confirmNewPassword) {
          try {
            const response = await Api.UpdateClient(
              'Ps',
              emailVerificationField,
              newPassword,
              ''
            )
            if (response == true) {
              setStapeLoading(false)
              setStapeOne(true)
              setStapeTwo(false)
              setStapeThree(false)
              setModalVisible(false)
            }
            if (response.message) {
              setStapeLoading(false)
              alert(response.message)
            }
          } catch (error) {
            setStapeLoading(false)
            alert(error)
          }
        } else {
          setStapeLoading(false)
          alert('palavras passe diferentes')
        }
      } else {
        setStapeLoading(false)
        alert('Preencha o campo')
      }
    }
    setStapeLoading(false)
    //setStapeOne(false)
    //setStapeTwo(true)
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleCloseModal = async () => {
    setModalVisible(false)
    setStapeOne(true)
    setStapeTwo(false)
    setStapeThree(false)
    setEmailVerificationField('')
    setVerificationCodeField('')
  }

  return (
    <ScrollView contentContainerStyle={styles.Scroll}>
      <View elevation={5} style={styles.Card}>
        <Image
          source={Top}
          style={{ alignSelf: 'flex-start', marginTop: 35, marginLeft: 10 }}
        />
      </View>
      <View style={styles.ScreenTitle}>
        <Text style={styles.ScreenTitleText}>Entrar</Text>
      </View>
      <View style={styles.FormArea}>
        <Text style={styles.InputMessage}>Seu email</Text>
        <TextInput
          style={styles.Input}
          placeholderTextColor='#555'
          selectionColor='#3F5D7D'
          value={emailField}
          onChangeText={text => setEmailField(text)}
        />
        <View style={styles.InputPasswordMessage}>
          <Text style={styles.InputMessage}>Senha</Text>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true)
            }}
          >
            <Text style={styles.ForgotPasswordText}>Esqueceu?</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(0, 0, 0, 0.5)',

            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <TextInput
            style={{
              flex: 1,
              fontSize: 18
            }}
            placeholderTextColor='#555'
            selectionColor='#3F5D7D'
            secureTextEntry={pass1}
            value={passwordField}
            onChangeText={text => setPasswordField(text)}
          />

          {pass1 ? (
            <TouchableOpacity onPress={() => setPass1(!pass1)}>
              <Ionicons name='ios-eye-off-outline' size={24} color='black' />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setPass1(!pass1)}>
              <Ionicons name='ios-eye-outline' size={24} color='black' />
            </TouchableOpacity>
          )}
        </View>

        {loading ? (
          <ActivityIndicator
            size='large'
            style={{ marginTop: 40 }}
            color='#3F5D7D'
          />
        ) : (
          <TouchableOpacity
            style={styles.CostumBtn}
            onPress={handleLoginButton}
          >
            <Text style={styles.CostumBtnTxt}>Entrar</Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        style={styles.LoginMessage}
        onPress={handleLoginMessagePress}
      >
        <Text style={styles.LoginMessageText}>Ainda não possui uma conta?</Text>
        <Text style={styles.LoginMessageTextBold}>Cadastre-se</Text>
      </TouchableOpacity>
      <Modal
        animationType='fade'
        transparent={true}
        onRequestClose={handleCloseModal}
        visible={modalVisible}
      >
        <ScrollView contentContainerStyle={styles.centeredView}>
          {stapeOne && (
            <View style={styles.modalView}>
              <Text style={styles.ModalTitle}>Recuperar palavra passe</Text>
              <Text style={styles.ModalMessage}>
                Degite o seu email para o processo de verificação, vamos enviar
                um codigo de 4 digitos para o seu email
              </Text>
              <Text style={styles.ModalInputText}>Email:</Text>
              <TextInput
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: '#3F5D7D',
                  fontSize: 18
                }}
                placeholderTextColor='#555'
                selectionColor='#3F5D7D'
                value={emailVerificationField}
                onChangeText={text => setEmailVerificationField(text)}
              />

              {stapeLoading ? (
                <ActivityIndicator
                  size='large'
                  style={{ marginTop: 40 }}
                  color='#3F5D7D'
                />
              ) : (
                <TouchableOpacity
                  style={styles.ModalButtons}
                  onPress={handleContinueBtn}
                >
                  <Text style={styles.ModalButtonText}>Continuar</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
          {stapeTwo && (
            <View style={styles.modalView}>
              <Text style={styles.ModalTitle}>
                Degite o codigo de 4 digitos
              </Text>
              <Text style={styles.ModalMessage}>
                Degite o codigo de 4 digitos que enviamos para o seu email
              </Text>
              <Text style={styles.ModalInputText}>Codigo:</Text>
              <TextInput
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: '#3F5D7D',
                  fontSize: 18
                }}
                placeholderTextColor='#555'
                selectionColor='#3F5D7D'
                keyboardType={'number-pad'}
                maxLength={4}
                value={verificationCodeField}
                onChangeText={text => setVerificationCodeField(text)}
              />

              {stapeLoading ? (
                <ActivityIndicator
                  size='large'
                  style={{ marginTop: 40 }}
                  color='#3F5D7D'
                />
              ) : (
                <TouchableOpacity
                  style={styles.ModalButtons}
                  onPress={handleContinueBtn}
                >
                  <Text style={styles.ModalButtonText}>Continuar</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
          {stapeThree && (
            <View style={styles.modalView}>
              <Text style={styles.ModalTitle}>Recuperar palavra passe</Text>
              <Text style={styles.ModalMessage}>
                Degite a nova palavra passe
              </Text>
              <Text style={styles.ModalInputText}>palavra passe nova</Text>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomColor: '#3F5D7D'
                }}
              >
                <TextInput
                  style={{
                    flex: 1,
                    fontSize: 18
                  }}
                  placeholderTextColor='#555'
                  selectionColor='#3F5D7D'
                  secureTextEntry={pass3}
                  value={newPassword}
                  onChangeText={text => setNewPassword(text)}
                />
                {pass3 ? (
                  <TouchableOpacity onPress={() => setPass3(!pass3)}>
                    <Ionicons
                      name='ios-eye-off-outline'
                      size={24}
                      color='black'
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setPass3(!pass3)}>
                    <Ionicons name='ios-eye-outline' size={24} color='black' />
                  </TouchableOpacity>
                )}
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                 
              </View>
              <Text style={styles.ModalInputText}>confirmar palavra passe</Text>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomColor: '#3F5D7D'
                }}
              >
                <TextInput
                  style={{
                    flex: 1,
                    fontSize: 18
                  }}
                  placeholderTextColor='#555'
                  selectionColor='#3F5D7D'
                  secureTextEntry={pass}
                  value={confirmNewPassword}
                  onChangeText={text => setConfirmNewPassword(text)}
                />
                {pass ? (
                  <TouchableOpacity onPress={() => setPass(!pass)}>
                    <Ionicons
                      name='ios-eye-off-outline'
                      size={24}
                      color='black'
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setPass(!pass)}>
                    <Ionicons name='ios-eye-outline' size={24} color='black' />
                  </TouchableOpacity>
                )}
              </View>

              <TouchableOpacity
                style={styles.ModalButtons}
                onPress={handleContinueBtn}
              >
                <Text style={styles.ModalButtonText}>
                  Recuperar palavra passe
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </Modal>
    </ScrollView>
  )
}

export default Login
