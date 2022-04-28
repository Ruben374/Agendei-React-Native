import React, { useEffect, useState, useContext } from 'react'
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
import { UserContext } from '../../contexts/UserContext'
import { BlurView } from 'expo-blur'
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

const Est = ({ Data, navigation, route, state }) => {
  const date = new Date()
  const [open, setOpen] = useState(false)
  const [horarioDeFuncionamento, setHorarioDeFuncionamento] = useState(
    'Sem horarios pro dia de hoje'
  )
  const { state: user } = useContext(UserContext)
  const [services, Setservices] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [opencloseColor, setOpencloseColor] = useState('red')
  const [est, setEst] = useState(route.params.Data)
  const estId = route.params.Data._id
  //const est=route.params.Data
  const userId = user.id

  const openClose = (open, close) => {
    var hora3 = date.getHours() + ':' + date.getMinutes()
    hora3 = hora3.split(':')
    var hora1 = open.split(':')
    var hora2 = close.split(':')
    var d = new Date()
    var data1 = new Date(
      d.getFullYear(),
      d.getMonth(),
      d.getDate(),
      hora1[0],
      hora1[1]
    )
    var data2 = new Date(
      d.getFullYear(),
      d.getMonth(),
      d.getDate(),
      hora2[0],
      hora2[1]
    )
    var data3 = new Date(
      d.getFullYear(),
      d.getMonth(),
      d.getDate(),
      hora3[0],
      hora3[1]
    )
    if (open == '24:00' && close == '24:00') {
      return true
    }
    if (data3 >= data1 && data3 <= data2) {
      return true
    } else {
      return false
    }
  }
  const getServices = async () => {
    setLoading(true)

    est.open_to.forEach(function (k) {
      //console.log(k.open);
      if (k.dia == date.getDay()) {
        // console.log('dia bom')
        if (openClose(k.open, k.close)) {
          setOpen(true)
          setOpencloseColor('green')
        }
        setHorarioDeFuncionamento(k.open + ' até ' + k.close)
      }
    })

    Setservices([])
    //console.log(route.params.Data.open_to.length)
    //console.log(date.getDay())
    //console.log(route.params.Data._id)
    const response = await Api.getEstServices(estId)
    //console.log(response)
    Setservices(response)
    setLoading(false)
  }
  const getEst = async () => {
    try {
      const response = await Api.GetEst(estId)
      console.log(response)
      setEst(response)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getEst()
    getServices()
  }, [])

  const handleOnRefresh = () => {
    setRefreshing(false)
    getEst()
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
            uri: `http://192.168.43.227:3005/${est.img}`
          }}
          style={styles.Hero}
        >
          <View style={styles.HeroButtons}>
            <TouchableOpacity>
              <AntDesign name='arrowleft' size={24} color='#3F5D7D' />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Ratting', { estId, userId })}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  style={{ fontSize: 20, fontWeight: 'bold', color: '#3F5D7D' }}
                >
                  Avaliar
                </Text>
                <Ionicons name='star' size={20} color='yellow' />
              </View>
            </TouchableOpacity>
          </View>
          <BlurView style={styles.HeroContent} intensity={70} tint='light'>
            <View
              style={{
                width: 25,
                height: 25,
                backgroundColor: '#fff',
                borderRadius: 25,
                marginRight: 5,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <FontAwesome name='phone' size={20} color='#3F5D7D' />
            </View>

            <Text style={styles.HeroContentText}>
              {est.phones_number[0]}
              {est.phones_number[1] && '-' + est.phones_number[1]}
            </Text>
          </BlurView>
        </ImageBackground>

        <View style={styles.ContainerInfoNameAndRating}>
          <Text style={styles.ContainerInfoTitle}>{est.name}</Text>
          <View
            style={{
              flexDirection: 'row',
              width: 50,
              height: 18,
              backgroundColor: 'gray',
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text style={{ fontWeight: 'bold', paddingHorizontal: 5 }}>
              {est.ratingmedia.toFixed(1)}
            </Text>
            <Ionicons name='star' size={18} color='yellow' />
          </View>
        </View>
        <Text
          style={styles.ContainerInfoOpen}
          style={{
            fontSize: 16,
            width: '100%',
            paddingHorizontal: 10,
            fontWeight: 'bold'
          }}
        >
          <Text style={{ color: opencloseColor }}>
            {open ? 'Aberto agora' : 'Fechado'}
          </Text>
          <Text> hoario de funcionamento:</Text>
          <Text style={{ color: opencloseColor }}>
            {' '}
            {horarioDeFuncionamento}
          </Text>
        </Text>
        <View style={styles.ContainerDescription}>
          <Text
            style={{
              backgroundColor: '#f0f5f9',
              borderRadius: 15,
              fontSize: 15,
              fontWeight: 'bold',
              padding: 10,
              color: '#3F5D7D'
            }}
          >
            {'"'+ est.description +'"'}
          </Text>
        </View>
        <Text style={styles.ServicesTitle}>Lista de Serviços:</Text>
        {loading && (
          <ActivityIndicator
            size='large'
            style={{ marginTop: 40 }}
            color='#3F5D7D'
          />
        )}
        {services.map((item, key) => (
          <ServicesCard key={key} item={item} style={styles.CardContainer} />
        ))}
      </View>
    </ScrollView>
  )
}

export default Est
