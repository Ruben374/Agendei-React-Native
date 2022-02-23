import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import styles from './styles'

const ServicesCard = ({item}) => {
  return (
    <View  style={styles.CardContainer}>
      <View>
        <Text style={styles.ServiceName}>{item.name}</Text>
        <Text style={styles.ServicePrice}>{item.preco}kz</Text>
      </View>
      <TouchableOpacity style={styles.CardButton}>
        <Text style={styles.CardButtonText}>Agendar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ServicesCard
