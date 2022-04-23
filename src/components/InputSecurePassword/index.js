import React, { Component } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

import RNPasswordStrengthMeter from 'react-native-password-strength-meter'

const InputSecurePassword = () => {
  const onChange = (password, score, { label, labelColor, activeBarColor }) => {
    console.log(password, score, { label, labelColor, activeBarColor })
  }

  return (
    <View style={styles.container}>
      <RNPasswordStrengthMeter onChangeText={onChange} meterType='bar' />
    </View>
  )
}
export default InputSecurePassword
