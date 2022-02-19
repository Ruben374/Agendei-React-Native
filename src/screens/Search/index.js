import React, { useEffect, useState } from 'react'
import styles from './styles.js'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import EstCard from '../../components/EstCard'
import InputField from '../../components/InputField'
import { AntDesign } from '@expo/vector-icons'

const Search = ({ navigation, route }) => {
  const [estList, setEstList] = useState([])
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    const getEst = async () => {
      const response = await route.params.estList
      setEstList(response)
    }
    getEst()
  }, [])
  return (
    <ScrollView style={styles.s}>
      <InputField
        Icon={AntDesign}
        IconName='search1'
        IconColor='#3f5d7d'
        IconPosition='right'
        placeholder='Pesquise aqui'
        value={searchField}
        onChangeText={text => setSearchField(text)}
      />

      <View style={styles.Container}>
        {estList.map((item, key) => (
          <EstCard key={key} Data={item} />
        ))}
      </View>
    </ScrollView>
  )
}
export default Search
