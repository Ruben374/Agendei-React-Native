import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
      CardContainer: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  CardInfo: {},
  CardButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#3F5D7D'
  },
  CardButtonText: {
    color: '#fff',
    fontWeight: 'bold',
     fontSize: 15,
  },
  ServiceName: {
    color: '#A0A0A0',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'bold'
  },
  ServicePrice: {
    fontSize: 15,
    flex: 1,
    flexWrap: 'wrap',
    color: '#3F5D7D',
    fontWeight: 'bold'
  }
})

export default Styles
