import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const Est = ({ Data,navigation,route }) => {
  useEffect(() => {
    console.log(route.params.Data)
  }, [])
  return (
    <View>
      <Text>ola mundo</Text>
    </View>
  )
}

export default Est
