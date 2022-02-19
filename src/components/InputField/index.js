import React from 'react'
import { View, TextInput, Image } from 'react-native'
import styles from './styles.js'

const InputField = ({
  IconName,
  IconColor,
  placeholder,
  value,
  onChangeText,
  password,
  Icon,
  IconPosition
}) => {
  let g = ''
  let t = ''

  if (IconPosition === 'left') {
    g = styles.InputArea
    t = styles.Input
  } else {
    g = styles.InputAreaR
    t = styles.InputR
  }
  return (
    <View style={g}>
      {IconPosition == 'left' && (
        <Icon name={IconName} size={35} color={IconColor} />
      )}
      <TextInput
        style={t}
        placeholder={placeholder}
        placeholderTextColor='#555'
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
      {IconPosition == 'right' && (
        <Icon name={IconName} size={35} color={IconColor} />
      )}
    </View>
  )
}
export default InputField
