import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import styles from './styles.js'
import Dentista from '../../assets/Dentista.png'
import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

const EstCard = ({Data}) => {



  const onPress = async () => {
    console.log('click')
  }
console.log(Data.img)
  return (
    <TouchableOpacity style={styles.ContainerContent} onPress={onPress}>
      <View style={styles.ContainerContentCenterImage}>
       <Image  style={{width:70,height:70}}  source={{
            uri: `http://192.168.10.142:3009/${Data.img}`
          }} />
      </View>

      <View style={{flex:1,justifyContent:'center',marginLeft:5}}>
        <Text style={styles.ContainerContentH1}>{Data.name}</Text>
        <View>
          <View style={styles.ContainerContentInformation}>
            <Entypo name='location-pin' size={20} color='#fff' />
            <Text style={styles.ContainerContentText}>
              R. Sagrada Esperança - Luanda
            </Text>
          </View>

          <View style={styles.ContainerContentStar}>
            <Entypo name='star' size={20} color='#FFD700' />
            <Text style={styles.ContainerContentText}>4.8</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.ContainerContentHeart}>
        <AntDesign name='hearto' size={20} color='#fff' />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default EstCard
