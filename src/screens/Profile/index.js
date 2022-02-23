import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles.js'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Octicons } from '@expo/vector-icons'

const Profile = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.ProfileContainer}>
        <Text style={styles.ScreenName}>Perfil</Text>
        <View style={styles.ProfileInfoContainer} elevation={5}>
          <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
            <FontAwesome name='edit' size={25} color='#fff' />
          </TouchableOpacity>
          <View style={styles.ProfileImage}></View>
          <Text style={styles.ProfileName}>Ruben Mambo Gracia André</Text>
        </View>
        <TouchableOpacity style={styles.ProfileOptions}>
          <View style={styles.ProfileOptionsItem}>
            <View style={styles.ProfileOptionsCircle}>
              <AntDesign name='hearto' size={30} color='#fff' />
            </View>
            <Text style={styles.ProfileOptionsText}>Meus Favoritos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ProfileOptions}>
          <View style={styles.ProfileOptionsItem}>
            <View style={styles.ProfileOptionsCircle}>
              <Octicons name='calendar' size={30} color='#fff' />
            </View>
            <Text style={styles.ProfileOptionsText}>Meus Agendamentos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ProfileOptions}>
          <View style={styles.ProfileOptionsItem}>
            <View style={styles.ProfileOptionsCircle}>
              <MaterialCommunityIcons name='logout' size={30} color='#fff' />
            </View>
            <Text style={styles.ProfileOptionsText}>Sair</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Profile
