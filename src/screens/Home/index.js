import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles.js'

import Dentista from '../../assets/Dentista.png'

const Home = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.Content}>
        <Image source={Dentista} />
        <View style={styles.df}>
          <Text style={styles.colorWhite}>ola mundo</Text>
          <Text>Didjfff</Text>
        </View>
        <View style={styles.cor}>
           <Text> Coração</Text>
        </View>
      </View>
    </View>
  )
}
export default Home
