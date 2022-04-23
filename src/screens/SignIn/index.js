import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ScrollView,
  TextInput,
  Image
} from 'react-native'
import styles from './styles.js'
import { useNavigation } from '@react-navigation/native'
import InputField from '../../components/InputField'
import EmailIcon from '../../assets/Email.png'
import PasswordIcon from '../../assets/Password.png'
import Person from '../../assets/Person.png'
import Api from '../../Api'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import Top from '../../assets/top2.png'

const SignIn = () => {
  const navigation = useNavigation()

  const [nameField, setNameField] = useState('')
  const [emailField, setEmailField] = useState('')
  const [passwordField, setPasswordField] = useState('')
  const [loading, setLoading] = useState(false)
  const [confirmPasswordField, setConfirmPasswordField] = useState('')
  const [pass1, setPass1] = useState(true)
  const [pass2, setPass2] = useState(true)
  const [border, setBorder] = useState('rgba(0, 0, 0, 0.5)')
  const [passwordStrengthMessage, setPasswordStrengthMessage] = useState('')
  const [validateInput, setValidateInput] = useState({
    case: false,
    number: false,
    length: false
  })

  const handleSignInMessagePress = () => {
    navigation.reset({
      routes: [{ name: 'Login' }]
    })
  }

  const VerifyPassword = () => {
    if (
      validateInput.length == true &&
      validateInput.number == true &&
      validateInput.case == true
    ) {
      setPasswordStrengthMessage('')
      setBorder('rgba(0, 0, 0, 0.5)')
      return true
    } else {
      setPasswordStrengthMessage(
        'Sua senha deve conter: no minimo 6 carcteres, números, letra maiúscula e letra minúscula'
      )
      setBorder('red')
      return false
    }
  }

  const handleCadastrarPress = async () => {

    if(VerifyPassword()){
      setLoading(true)
      if (
        nameField.trim() !== '' &&
        emailField.trim() !== '' &&
        passwordField.trim() !== '' &&
        confirmPasswordField.trim() !== ''
      ) {
        VerifyPassword()
        if (passwordField == confirmPasswordField) {
          VerifyPassword()
          const response = await Api.SignUp(nameField, emailField, passwordField)
          if (response === true) {
            /*
            const login = await Api.Login(emailField, passwordField)
            if (login.token) {
    
              //aqui devo cetar o token 
              navigation.reset({
                routes: [{ name: 'Choose' }]
              })
            }*/
            navigation.reset({
              routes: [{ name: 'ConfirmSignUp', params: { email: emailField } }]
            })
          } else if (response.status == 422) {
            setLoading(false)
            Alert.alert('Erro!', 'Email ja cadastrado', [{ text: 'OK' }])
          }
        } else {
          Alert.alert('Erro!', 'Passwords Diferentes', [{ text: 'OK' }])
        }
      } else {
        setLoading(false)
        Alert.alert('Erro!', 'Preencha todos os campos', [{ text: 'OK' }])
      }
      setLoading(false)
    }
    
  }

  const [step, setstep] = useState('')

  const secureText = password => {
    setPasswordField(password)
    console.log(validateInput)
    const regexUppercase = new RegExp(/^(?=.*[A-Z]).+$/)
    const regexLowercase = new RegExp(/^(?=.*[a-z]).+$/)
    const regexNumber = new RegExp(/^(?=.*[0-9]).+$/)
    const length = password.length >= 6

    setValidateInput({
      case: regexUppercase.test(password) && regexLowercase.test(password),
      number: regexNumber.test(password),
      length
    })
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
        <Text style={styles.ScreenTitleText}>Criar</Text>
        <Text style={styles.ScreenTitleText}>Conta</Text>
      </View>
      <View style={styles.FormArea}>
        <Text style={styles.InputMessage}>Seu nome</Text>
        <TextInput
          style={styles.Input}
          placeholderTextColor='#555'
          selectionColor='#3F5D7D'
          value={nameField}
          onChangeText={text => setNameField(text)}
        />
        <Text style={styles.InputMessage}>Seu email</Text>
        <TextInput
          style={styles.Input}
          placeholderTextColor='#555'
          selectionColor='#3F5D7D'
          value={emailField}
          onChangeText={text => setEmailField(text)}
        />
        <Text style={styles.InputMessage}>Senha</Text>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor:border,
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
            secureTextEntry={pass2}
            value={passwordField}
            onChangeText={text => secureText(text)}
          />

          {pass2 ? (
            <TouchableOpacity onPress={() => setPass2(!pass2)}>
              <Ionicons name='ios-eye-off-outline' size={24} color='black' />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setPass2(!pass2)}>
              <Ionicons name='ios-eye-outline' size={24} color='black' />
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            justifyContent: 'center',
            width: '100%'
          }}
        >
          <Text style={{ flex:1,flexWrap:'wrap',color: 'red' }}> {passwordStrengthMessage} </Text>
        </View>

        <Text style={styles.InputMessage}>Confirme senha</Text>
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
            value={confirmPasswordField}
            onChangeText={text => setConfirmPasswordField(text)}
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
            onPress={handleCadastrarPress}
          >
            <Text style={styles.CostumBtnTxt}>CADASTRAR</Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        style={styles.SignInMessage}
        onPress={handleSignInMessagePress}
      >
        <Text style={styles.SignInMessageText}>Ja possui uma conta?</Text>
        <Text style={styles.SignInMessageTextBold}>Faça login</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default SignIn

/*
  <View style={styles.FormArea}>
        <InputField
          Icon={Ionicons}
          IconName='person'
          IconColor='#3f5d7d'
          IconPosition='left'
          placeholder='Degite seu nome'
          value={nameField}
          onChangeText={text => setNameField(text)}
        />

        <InputField
          Icon={MaterialIcons}
          IconName='email'
          IconColor='#3f5d7d'
          IconPosition='left'
          placeholder='Digite seu email'
          value={emailField}
          onChangeText={text => setEmailField(text)}
        />
            <InputField
          Icon={FontAwesome}
          IconName='lock'
          IconColor='#3f5d7d'
          IconPosition='left'
          placeholder='Digite sua senha'
          value={passwordField}
          onChangeText={text => setPasswordField(text)}
        />
        
        <InputField
          Icon={FontAwesome}
          IconName='lock'
          IconColor='#3f5d7d'
          IconPosition='left'
          placeholder='Confirme sua senha'
          value={confirmPasswordField}
          onChangeText={text => setConfirmPasswordField(text)}
        />
        {loading ? (
          <ActivityIndicator
            size='large'
            style={{ marginTop: 40 }}
            color='#3F5D7D'
          />
        ) : (
          <TouchableOpacity
            style={styles.CostumBtn}
            onPress={handleCadastrarPress}
          >
            <Text style={styles.CostumBtnTxt}>CADASTRAR</Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        style={styles.SignInMessage}
        onPress={handleSignInMessagePress}
      >
        <Text style={styles.SignInMessageText}>Ja possui uma conta?</Text>
        <Text style={styles.SignInMessageTextBold}>Faça login</Text>
      </TouchableOpacity>

*/
