import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator
} from 'react-native'
import styles from './styles.js'
import ServicesCard from '../../components/ServicesCard'
import Api from '../../Api'


const Est = ({ Data, navigation, route }) => {
  const [services, Setservices] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [loading, setLoading] = useState(false)

  const getServices = async () => {
    setLoading(true)
    Setservices([])
    console.log(route.params.Data)
    console.log(route.params.Data._id)
    const response = await Api.getEstServices(route.params.Data._id)
    console.log(response)
    Setservices(response)
    setLoading(false);
  }

  useEffect(() => {
    getServices()
  }, [])

  const handleOnRefresh = () => {
    setRefreshing(false)
    getServices()
  }

  return (
    <ScrollView
      style={styles.s}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleOnRefresh} />
      }
    >
      <View style={styles.Container}>
        <ImageBackground
          source={{
            uri: `http://192.168.10.142:3009/${route.params.Data.img}`
          }}
          style={styles.Hero}
        />
        <View style={styles.ContainerInfo}>
          <Text style={styles.ContainerInfoTitle}>
            {route.params.Data.name}
          </Text>
          <Text style={styles.ContainerInfoText}>
            {route.params.Data.address.bairro}-{route.params.Data.address.rua}
          </Text>
          <Text style={styles.ContainerInfoText}>
            {route.params.Data.phone_number[0]}
          </Text>
        </View>
        <Text style={styles.ServicesTitle}>Lista de Serviços:</Text>
        {loading && <ActivityIndicator size='large' style={{marginTop:40}} color='#3F5D7D'/>}
        {services.map((item, key) => (
          <ServicesCard key={key} item={item} style={styles.CardContainer} />
        ))}
      </View>
      




    </ScrollView>
  )
}

export default Est
