import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  StarContainer: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  RateButton: {
    padding: 20,
    backgroundColor: '#3F5D7D',
    borderRadius: 10
  },
  RateButtonText: {
    fontSize: 20
  }
})
export default Styles
