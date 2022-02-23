import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  s: {
    flex: 1,
    backgroundColor: '#fff'
  },

  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  Title: {
    flexWrap: 'wrap',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3F5D7D'
  },
  AppointmentsCard: {
    width: '100%',
    padding: 10
  },
  ServicesName: {
    width: '100%',
    flexWrap: 'wrap',
    fontWeight: 'bold',
    color: '#3F5D7D',
    fontSize:20
  },
  EstName: {
    marginBottom: 10,
    color:'#A0A0A0',
    fontSize:15,
     width: '100%',
    flexWrap: 'wrap',
  },

  AppointmentsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  AppointmentsItems: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  AppointmentsItemsText:{
     color:'#A0A0A0',
     paddingHorizontal:5,
     flexWrap:'wrap'
  },
  AppointmentsButtons: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  AppointmentsButton1: {
    borderRadius: 10,
    padding: 20,
     backgroundColor: '#3F5D7D'
  },
    AppointmentsButton2: {
    borderRadius: 10,
    padding: 20,
     backgroundColor: '#E7362B'
  },
  AppointmentsButtonText:{
      color:'#fff'
  }
})

export default Styles
