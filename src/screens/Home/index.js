import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import styles from './styles.js'
import EstCard from '../../components/EstCard'
import Dentista from '../../assets/Dentista.png'
import { AntDesign } from '@expo/vector-icons'
import Api from '../../Api'

const Home = ({ navigation, route }) => {


  const [estList, setEstList] = useState([])

  useEffect(() => {
    const getEst = async () => {
      const response = await Api.getEst(route.params.id)
      setEstList(response)
    }
    getEst()
  }, [])
    const handleSearchButton=()=>{
  navigation.navigate('Search',{estList})
}
  return (
    <ScrollView style={styles.s}>
      <View style={styles.Container}>
        <View style={styles.TopMessage}>
          <Text style={styles.TopMessageText}>Econtre {route.params.categoryname}</Text>
          <TouchableOpacity style={styles.TopMessageIcon} onPress={handleSearchButton}>
            <AntDesign name='search1' size={30} color='black' />
          </TouchableOpacity>
        </View>
      {estList.map((item,key)=>(
		  <EstCard key={key} Data={item}/>
	  ))}
      </View>
    </ScrollView>
  )
}
export default Home
