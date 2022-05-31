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
    color: 'rgba(0, 0, 0, 0.5)',
    fontFamily: "NotoSans_400Regular",
  },
  Title: {
    fontSize: 26,
    marginTop: 8,
    color: '#5663ff',
    fontFamily: "NotoSans_700Bold",
    marginBottom: 10
  },
  Message: {
    fontSize: 17,
    marginBottom: 10,
    color: '#222455',
    fontFamily: "NotoSans_700Bold",
  },
  Button: {
    width: '100%',
    backgroundColor: '#5663ff',
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ButtonText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: "NotoSans_700Bold",
  }
})

export default Styles
