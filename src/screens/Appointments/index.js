import React, { useContext, useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styles from './styles.js'
import { Octicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Foundation } from '@expo/vector-icons'
import { UserContext } from '../../contexts/UserContext'
import Api from '../../Api'
const Appointments = ({ state }) => {
  const { state: user } = useContext(UserContext)
  const [appointmentsList, setAppointmentsList] = useState([])

  const getAppointments = async () => {
    const response = await Api.getAppointments(user.id)
    console.log(user.id)
    console.log(response)
    setAppointmentsList(response)
  }

  useEffect(() => {
    getAppointments()
  }, [])

  return (
    <ScrollView style={styles.s}>
      <View style={styles.Container}>
        <Text style={styles.Title}>Minhas Reservas</Text>
   

 {appointmentsList.map((item, key) =>
      <View style={styles.AppointmentsCard} key={key}>
          <Text style={styles.ServicesName}>{item.servicename}</Text>
          <Text style={styles.EstName}>{item.estname}</Text>
          <View style={styles.AppointmentsRow}>
            <View style={styles.AppointmentsItems}>
              <Octicons name='calendar' size={30} color='#3F5D7D' />
              <Text style={styles.AppointmentsItemsText}>18/02/2022</Text>
            </View>
            <View style={styles.AppointmentsItems}>
              <MaterialIcons name='watch-later' size={30} color='#3F5D7D' />
              <Text style={styles.AppointmentsItemsText}>{item.hour}h</Text>
            </View>
          </View>
          <View style={styles.AppointmentsRow}>
            <View style={styles.AppointmentsItems}>
              <Foundation name='dollar' size={35} color='#3F5D7D' />
              <Text style={styles.AppointmentsItemsText}>{item.servicepreco}kzs</Text>
            </View>
          </View>
          <View style={styles.AppointmentsRow}>
            <View style={styles.AppointmentsItems}>
              <Octicons name='location' size={25} color='#3F5D7D' />

              <View>
                <Text style={styles.AppointmentsItemsText}>
                  R. Sagrada Esperança - Luanda
                </Text>
                <Text style={styles.AppointmentsItemsText}>925 779 000</Text>
              </View>
            </View>
          </View>
          <View style={styles.AppointmentsButtons}>
            <TouchableOpacity style={styles.AppointmentsButton1}>
              <Text style={styles.AppointmentsButtonText}>Reagendar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.AppointmentsButton2}>
              <Text style={styles.AppointmentsButtonText}>Excluir Reserva</Text>
            </TouchableOpacity>
          </View>
        </View>
 )}

      </View>
    </ScrollView>
  )
}
export default Appointments
