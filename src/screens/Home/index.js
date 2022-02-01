import React from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native'
import styles from './styles.js'
import InputField from '../../components/InputField'
import TargetIcon from '../../assets/Target.png'
import Dentista from '../../assets/Dentista.png'
import lavagem from '../../assets/lavagem.png'
import unhas from '../../assets/unhas.png'
import veterinario from '../../assets/veterinario.png'
import secador from '../../assets/secador.png'
import mecanico from '../../assets/mecanico.png'
const Home = () => {
  return (
    <View style={styles.Container}>
      <ScrollView style={styles.Scroll}>
        <View style={styles.SearchArea}>
          <Text style={styles.LocationMessage}>Agende seus serviços</Text>
          <View style={styles.InputArea}>
            <TextInput
              style={styles.Input}
              placeholder='Em que cidade voçe esta?'
              placeholderTextColor='#555'
            />
            <TouchableOpacity>
              <Image source={TargetIcon} style={styles.TargetIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tela}>
          <View style={styles.linha}>
            <View style={styles.elemento}>
              <Image source={Dentista} />
            </View>
            <View style={styles.elemento}>
              <Image source={lavagem} />
            </View>
          
          </View>
          <View style={styles.linha}>
            <View style={styles.elemento}>
              <Image source={veterinario} />
            </View>
            <View style={styles.elemento}>
              <Image source={unhas} />
            </View>
            <View style={styles.elemento}>
              <Image source={mecanico} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home
