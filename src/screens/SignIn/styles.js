import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  FormArea: {
    width: '100%',
    padding: 20
  },
  CostumBtn: {
    height: 45,
    backgroundColor: '#3F5D7D',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  CostumBtnTxt: {
    fontSize: 18,
    color: '#FFFF'
  },
  SignInMessage: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 20
  },
  SignInMessageText: {
    fontSize: 16,
    color: '#52616B',
    opacity: 1
  },
  SignInMessageTextBold: {
    fontSize: 16,
    color: '#52616B',
    fontWeight: 'bold',
    marginLeft: 5
  }
})

export default Styles
