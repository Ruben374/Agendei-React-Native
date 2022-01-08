import React from 'react'
import { View, TextInput, Image } from 'react-native'
import styles from './styles.js'


const InputField = ({ IconSvg,placeholder, value, onChangeText,password }) => {
  return (
    <View style={styles.InputArea}>
  <Image source={IconSvg} style={{width:35,height:35}}/>
      <TextInput
        style={styles.Input}
        placeholder={placeholder}
        placeholderTextColor='#555'
        value={value}
        onChangeText={onChangeText}
         secureTextEntry={password}
      />
    </View>
  )
}
export default InputField
