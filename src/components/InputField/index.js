import React from 'react'
import {View, TextInput, Image} from 'react-native'
import styles from './styles.js'

const InputField=( placeholder, value, onChangeText, password)=>{

return(
    <View>
        <TextInput
   placeholder={placeholder}
        placeholderTextColor="#555"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
        />
    </View>
)

}
export default InputField;