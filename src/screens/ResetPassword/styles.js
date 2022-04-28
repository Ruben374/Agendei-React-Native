import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  FormArea: {
    flex: 1,
    marginTop: 30,
    padding: 10
  },
  TopScreen: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 15
  },
  Input: {
    width: '100%',
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: '#3F5D7D',
    marginTop: 5
  },
  InputMessage: {
    fontSize: 18,
    marginTop: 10,
    color: 'rgba(0, 0, 0, 0.5)'
  },
  Title: {
    fontSize: 26,
    marginTop: 8,
    color: '#3F5D7D',
    fontWeight: 'bold',
    marginBottom: 10
  },
  Message: {
    fontSize: 17,
    marginBottom: 10
  },
  Button: {
    width: '100%',
    backgroundColor: '#3F5D7D',
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ButtonText: {
    fontSize: 20,
    color: '#fff'
  }
})

export default Styles
