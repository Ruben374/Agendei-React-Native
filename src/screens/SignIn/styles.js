import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  Scroll: {
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },

  Card: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#F0F5F9',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: -50,
    top: -50
  },
  ScreenTitle: {
    padding: 15
  },
  ScreenTitleText: {
    fontSize: 40,
    color: '#3F5D7D'
  },
  FormArea: {
    width: '100%',
    padding: 15
  },
  InputMessage: {
    fontSize: 18,
    marginTop:8,
    color:'rgba(0, 0, 0, 0.5)'
  },
  Input: {
    width: '100%',
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: '#3F5D7D',
    marginTop: 5
  },

  CostumBtn: {
   padding:15,
    backgroundColor: '#3F5D7D',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30
  },
  CostumBtnTxt: {
    fontSize: 18,
    color: '#FFFF'
  },
  SignInMessage: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:10,
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
