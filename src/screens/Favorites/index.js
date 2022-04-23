import React, { useState } from 'react'
import styles from './styles.js'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'

import imageCheck from '../../assets/icon-check.png'
import imageClose from '../../assets/icon-close.png'

const Favorites = () => {
  const [validateInput, setValidateInput] = useState({
    case: false,
    number: false,
    length: false
  })
  const [step,setstep] = useState('')

  const secureText = password => {
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
    <View>
      <View style={styles.Container}>
        <TextInput
          style={styles.TextInput}
          placeholder='Senha'
          secureTextEntry
          onChangeText={password => {
            secureText(password)
          }}
        />
        
          <Text style={{alignSelf: 'flex-end',padding:5}}>{step}</Text>
       

        <View style={styles.Content}>
          <Text style={styles.Title}>Sua senha deve ter:</Text>

          <View style={styles.View}>
            <Image
              source={validateInput.length ? imageCheck : imageClose}
              style={styles.Image}
            />
            <Text>6 carcteres</Text>
          </View>
          <View style={styles.View}>
            <Image
              source={validateInput.number ? imageCheck : imageClose}
              style={styles.Image}
            />
            <Text>Números</Text>
          </View>
          <View style={styles.View}>
            <Image
              source={validateInput.case ? imageCheck : imageClose}
              style={styles.Image}
            />
            <Text>Letra maiúscula e letra minúscula</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{ alignSelf: 'center', backgroundColor: 'blue' }}
        >
          <Text style={{ padding: 10, color: 'white', fontSize: 15 }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Favorites
