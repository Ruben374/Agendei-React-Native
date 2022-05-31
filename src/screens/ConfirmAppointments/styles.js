import { StyleSheet } from 'react-native'

const Style = StyleSheet.create({
  s: {
    flex: 1,
    backgroundColor: '#fff'
  },
  Container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  HourItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#5663ff'
  },
  HourItemSelected: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#5663ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#5663ff'
  },
  HourItemTitle: {
    padding: 10,
    fontSize: 15,
    color: "#222455",
    fontFamily: "NotoSans_700Bold",
  },

  HourItemText: {
    fontSize: 20,
    color: '#5663ff',
    fontFamily: "NotoSans_400Regular",
  },
  HourItemTextSelected: {
    fontSize: 20,
    color: '#fff',
    fontFamily: "NotoSans_400Regular",
  },
  AppointmentButton: {
    width: '90%',
    flexDirection: 'row',
    backgroundColor: '#5663ff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 15
  },
  AppointmentButtonText: {
    padding: 10,
    fontSize: 20,
    flexWrap: 'wrap',
    fontFamily: "NotoSans_700Bold",
    color: '#fff'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000069'
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  ModalButton: {

  },
  ModalButtonText: {

  }

})

export default Style
