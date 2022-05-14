import React, { useEffect, useState, useContext } from 'react'
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import styles from './styles.js'
import Api from '../../Api'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UserContext } from '../../contexts/UserContext'

const ChangePassword = () => {
  const { state: user } = useContext(UserContext)
  const { dispatch: userDispatch } = useContext(UserContext)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

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

  return (
    <ScrollView style={styles.Scroll}>
      <View style={styles.TopScreen}>
        <TouchableOpacity>
          <AntDesign name='arrowleft' size={24} color='black' />
        </TouchableOpacity>
      </View>
      <Text style={styles.ScreenTitle}>Altere sua palavra passe</Text>
      <View style={styles.Form}>
        <Text>Palavra passe actual</Text>
        <TextInput
          style={{
            borderBottomWidth: 2,
            borderBottomColor: '#3F5D7D',
            fontSize: 20,
            marginBottom: 35
          }}
          placeholderTextColor='#555'
          selectionColor='#3F5D7D'
          secureTextEntry={true}
          value={currentPassword}
          onChangeText={text => setCurrentPassword(text)}
        />
        <Text>Nova palavra passe</Text>
        <TextInput
          style={{
            borderBottomWidth: 2,
            borderBottomColor: '#3F5D7D',
            fontSize: 20,
            marginBottom: 35
          }}
          placeholderTextColor='#555'
          selectionColor='#3F5D7D'
          secureTextEntry={true}
          value={newPassword}
          onChangeText={text => setNewPassword(text)}
        />
        <Text>Confirmar nova palavra passe</Text>
        <TextInput
          style={{
            borderBottomWidth: 2,
            borderBottomColor: '#3F5D7D',
            fontSize: 20,
            marginBottom: 60
          }}
          placeholderTextColor='#555'
          selectionColor='#3F5D7D'
          secureTextEntry={true}
          value={confirmNewPassword}
          onChangeText={text => setConfirmNewPassword(text)}
        />
        <TouchableOpacity style={styles.Button} onPress={handleButtonConfirm}>
          <Text style={styles.ButtonText}>Actualizar palavra passe</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
export default ChangePassword
