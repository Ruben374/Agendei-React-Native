import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#ffff'
  },
  Scroll: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 40,
    borderTopWidth: 1,
    borderTopColor: '#ECECEC'
  },
  SearchArea: {
      width:'100%',
      display:"flex",
    justifyContent:"center",
    padding:10,
  },
  LocationMessage:{
      fontSize:20,
      color:"#323434",
      marginLeft:20,
  },
  InputArea: {
    width: '100%',
    height: 45,
    backgroundColor: '#F0F5F9',
    flexDirection: 'row',
    borderRadius: 30,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    marginBottom: 15,
     marginTop:10,
  },
  Input: {
    flex: 1,
    fontSize: 15,
    color: '#555',
    marginLeft: 10,
   
  },
  TargetIcon: {
    width: 35,
    height: 35
  },
  tela:{
      
   
      display:"flex",
      flexDirection:"column",

    
  },
  linha:{
display:"flex",
flexDirection:"row",
justifyContent:"space-evenly"
  },

  elemento:{
      width:90,
      marginBottom:10,
      padding:20,
  backgroundColor:"#F0F5F9",
  display:"flex",
  alignItems:"center"
  }
})

export default Styles
