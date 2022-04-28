import React, { useEffect, useState,useMemo} from 'react'
import styles from './styles.js'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import EstCard from '../../components/EstCard'
import InputField from '../../components/InputField'
import { AntDesign } from '@expo/vector-icons'
import { useIsFocused } from "@react-navigation/native";
import Api from '../../Api'
const Search = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const [estList, setEstList] = useState([])
  const [searchField, setSearchField] = useState('')

  const filtro= useMemo (()=>{
   return estList.filter((list)=>list.name.toLowerCase().includes(searchField.toLowerCase()));
  },[searchField,estList])

  const getEst = async () => {
    
    const id = await route.params.id
    const response = await Api.getEst(id)
    setEstList(response)
  }
  useEffect(() => {
    getEst()
  }, [isFocused])
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
        {filtro.map((item, key) => (
          <EstCard key={key} Data={item} />
        ))}
      </View>
    </ScrollView>
  )
}
export default Search
