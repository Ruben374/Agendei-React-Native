import { StyleSheet } from 'react-native'

export const CELL_SIZE = 55
export const CELL_BORDER_RADIUS = 8
export const DEFAULT_CELL_BG_COLOR = '#fff'
export const NOT_EMPTY_CELL_BG_COLOR = '#3557b7'
export const ACTIVE_CELL_BG_COLOR = '#f7fafe'

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
    marginTop: 8,
    color: 'rgba(0, 0, 0, 0.5)'
  },
  InputPasswordMessage: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ForgotPasswordText: {
    fontSize: 18,
    marginTop: 8,
    fontWeight: 'bold',
    color: '#3F5D7D'
  },
  Input: {
    width: '100%',
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
    marginTop: 5
  },

  CostumBtn: {
    padding: 15,
    backgroundColor: '#3F5D7D',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  CostumBtnTxt: {
    fontSize: 18,
    color: '#FFFF'
  },
  LoginMessage: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  LoginMessageText: {
    fontSize: 16,
    color: '#52616B',
    opacity: 1
  },
  LoginMessageTextBold: {
    fontSize: 16,
    color: '#52616B',
    fontWeight: 'bold',
    marginLeft: 5
  },
  ///modal////////////////
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#00000069'
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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

  ModalButtonText: {
    fontSize: 22,
    color:'#fff'
  },

  ModalButtons: {
    marginTop: 30,
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3F5D7D',
    borderRadius: 10
  },
  ModalTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    paddingVertical: 10
  },
  ModalMessage: {
    fontSize: 14,
    color: 'black',
    paddingVertical: 10
  },
  ModalInputText: {
    fontSize: 15,
    fontWeight: 'bold',
  }
})

export default Styles
