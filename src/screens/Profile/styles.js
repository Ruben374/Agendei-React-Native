import { StyleSheet } from 'react-native'
const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  ScreenName: {
    padding: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3F5D7D',
    marginTop: 10
  },
  ProfileContainer: {
    width: '100%',
    height: '40%',
    alignItems: 'center'
  },
  ProfileInfoContainer: {
    width: '90%',
    alignItems: 'center',

    height: 200,
    padding: 20,
    backgroundColor: '#3F5D7D',

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
    backgroundColor: 'green',
    borderRadius: 45
  },
  ProfileName:{
      flex: 1,
      fontSize:15,
      flexWrap:'wrap',
      color:'#fff',
      padding:10,
  },
  ProfileOptions: {
    width: '90%',
    alignItems: 'flex-start',
    marginTop: 20
  },
  ProfileOptionsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  ProfileOptionsText:{
      fontSize:20,
      fontWeight: 'bold',
    color: '#3F5D7D',
      
      
  },
  ProfileOptionsCircle: {
    width: 50,
    height: 50,
    backgroundColor: '#3F5D7D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginRight: 20
  }
})
export default Styles
