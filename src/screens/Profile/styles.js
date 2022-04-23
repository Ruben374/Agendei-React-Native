import { StyleSheet } from 'react-native'
const Styles = StyleSheet.create({
  Scroll: {
    flex: 1,
    backgroundColor: '#fff'
  },
  Container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  ScreenName: {
    padding: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  },
  ProfileContainer: {
    width: '100%',
    backgroundColor: '#3F5D7D',
    padding: 10,
    marginBottom: 30
  },
  ProfileInfoContainer: {
    width: '100%',
    alignItems: 'center',
    height: 200,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  ProfileImage: {
    width: 90,
    height: 90,
    backgroundColor: '#ffff',
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ProfileName: {
    flex: 1,
    fontSize: 15,
    flexWrap: 'wrap',
    color: '#3F5D7D',
    padding: 10
  },
  ProfileMenu: {
    backgroundColor: '#F0F5F9',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10
  },
  ProfileMenuTitle: {
    fontSize: 20,
    paddingHorizontal: 10,
    color: '#3F5D7D',
    fontWeight: 'bold'
  },
  ProfileOptionsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  ProfileOptionsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3F5D7D'
  },
  ProfileOptionsCircle: {
    width: 50,
    height: 50,
    backgroundColor: '#3F5D7D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginRight: 20
  },
  ProfileAddImage: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    position: 'absolute',
    right: 10,
    bottom: -25,
    borderRadius: 25
  },
  ProfileContainerTop: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ProfileContainerBottom: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  ProfileUserName: {
    marginLeft: 10
  },
  Image: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  ProfileName: {
    color: '#fff',
    fontSize: 20,
    flexWrap: 'wrap'
  },
  ProfileMenuItem: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10
  },
  ProfileMenuItemX: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10
  },
  ProfileSettingsItem: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10
  },
  ProfileSettingsItemText: {
    padding: 10
  },
  ProfileMenuText: {
    opacity: 0.5
  },
  ProfileMenuTextTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  ///////////////////////modal////////////////////////////////////////////////////////////////////////////////
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

  ModalButtonText:{
fontSize:20,
paddingVertical:0,
  },

  ModalButtons: {
   flexDirection:'row',
   alignItems: 'center',
   justifyContent:'flex-end',
   marginTop:15
  
  },
  ModalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingVertical: 10
  }
})
export default Styles
