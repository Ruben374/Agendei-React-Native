import React from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles.js'
import { Ionicons } from "@expo/vector-icons";

const InputField = ({ pass1, value, onChangeText, onIconPress }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomWidth: 2,
        borderBottomColor: "#222455",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        style={{
          flex: 1,
          fontSize: 16,
          color: "#222455",
          fontFamily: "NotoSans_400Regular",
        }}
        selectionColor="#222455"
        secureTextEntry={pass1}
        value={value}
        onChangeText={onChangeText}
      />
      {pass1 ? (
        <TouchableOpacity onPress={onIconPress}>
          <Ionicons name="ios-eye-off-outline" size={24} color="#222455" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onIconPress}>
          <Ionicons name="ios-eye-outline" size={24} color="#222455" />
        </TouchableOpacity>
      )}
    </View>
  )
}
export default InputField
