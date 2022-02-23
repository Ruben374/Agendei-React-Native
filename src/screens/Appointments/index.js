import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styles from './styles.js'
import { Octicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Foundation } from '@expo/vector-icons'

const Appointments = () => {
  return (
    <ScrollView style={styles.s}>
      <View style={styles.Container}>
        <Text style={styles.Title}>Minhas Reservas</Text>
        <View style={styles.AppointmentsCard}>
          <Text style={styles.ServicesName}>Manutenção</Text>
          <Text style={styles.EstName}>Repauto Oficinas</Text>
          <View style={styles.AppointmentsRow}>
            <View style={styles.AppointmentsItems}>
              <Octicons name='calendar' size={30} color='#3F5D7D' />
              <Text style={styles.AppointmentsItemsText}>18/02/2022</Text>
            </View>
            <View style={styles.AppointmentsItems}>
              <MaterialIcons name='watch-later' size={30} color='#3F5D7D' />
              <Text style={styles.AppointmentsItemsText}>09:30h</Text>
            </View>
          </View>
          <View style={styles.AppointmentsRow}>
            <View style={styles.AppointmentsItems}>
              <Foundation name='dollar' size={35} color='#3F5D7D' />
              <Text style={styles.AppointmentsItemsText}>50.000kzs</Text>
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

            <View style={styles.AppointmentsCard}>
          <Text style={styles.ServicesName}>Manutenção</Text>
          <Text style={styles.EstName}>Repauto Oficinas</Text>
          <View style={styles.AppointmentsRow}>
            <View style={styles.AppointmentsItems}>
              <Octicons name='calendar' size={30} color='#3F5D7D' />
              <Text style={styles.AppointmentsItemsText}>18/02/2022</Text>
            </View>
            <View style={styles.AppointmentsItems}>
              <MaterialIcons name='watch-later' size={30} color='#3F5D7D' />
              <Text style={styles.AppointmentsItemsText}>09:30h</Text>
            </View>
          </View>
          <View style={styles.AppointmentsRow}>
            <View style={styles.AppointmentsItems}>
              <Foundation name='dollar' size={35} color='#3F5D7D' />
              <Text style={styles.AppointmentsItemsText}>50.000kzs</Text>
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


            <View style={styles.AppointmentsCard}>
          <Text style={styles.ServicesName}>Manutenção</Text>
          <Text style={styles.EstName}>Repauto Oficinas</Text>
          <View style={styles.AppointmentsRow}>
            <View style={styles.AppointmentsItems}>
              <Octicons name='calendar' size={30} color='#3F5D7D' />
              <Text style={styles.AppointmentsItemsText}>18/02/2022</Text>
            </View>
            <View style={styles.AppointmentsItems}>
              <MaterialIcons name='watch-later' size={30} color='#3F5D7D' />
              <Text style={styles.AppointmentsItemsText}>09:30h</Text>
            </View>
          </View>
          <View style={styles.AppointmentsRow}>
            <View style={styles.AppointmentsItems}>
              <Foundation name='dollar' size={35} color='#3F5D7D' />
              <Text style={styles.AppointmentsItemsText}>50.000kzs</Text>
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
            <View style={styles.AppointmentsCard}>
          <Text style={styles.ServicesName}>Manutenção</Text>
          <Text style={styles.EstName}>Repauto Oficinas</Text>
          <View style={styles.AppointmentsRow}>
            <View style={styles.AppointmentsItems}>
              <Octicons name='calendar' size={30} color='#3F5D7D' />
              <Text style={styles.AppointmentsItemsText}>18/02/2022</Text>
            </View>
            <View style={styles.AppointmentsItems}>
              <MaterialIcons name='watch-later' size={30} color='#3F5D7D' />
              <Text style={styles.AppointmentsItemsText}>09:30h</Text>
            </View>
          </View>
          <View style={styles.AppointmentsRow}>
            <View style={styles.AppointmentsItems}>
              <Foundation name='dollar' size={35} color='#3F5D7D' />
              <Text style={styles.AppointmentsItemsText}>50.000kzs</Text>
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
      </View>
    </ScrollView>
  )
}
export default Appointments
