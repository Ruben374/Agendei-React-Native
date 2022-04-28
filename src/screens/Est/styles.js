import { StyleSheet } from 'react-native'
const Styles = StyleSheet.create({
  s: {
    flex: 1,
    backgroundColor: '#fff'
  },

  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  Hero: {
    height: 240,
    width: '100%',
    justifyContent: 'space-between'
  },
  HeroButtons: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  HeroContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    width: '70%',
    alignSelf: 'center'
  },
  HeroContentText: {
    fontSize: 15,
    color: '#3F5D7D',
    fontWeight: 'bold'
  },
  ContainerInfo: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  ContainerDescription: {
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 10,
    justifyContent: 'center',
  
  },
  ContainerInfoNameAndRating: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  ContainerInfoTitle: {
    fontSize: 18,
    color: '#3F5D7D',
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap'
  },
  ContainerInfoText: {
    fontSize: 15,
    color: '#A0A0A0'
  },
  ContainerInfoAdress: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  ContainerInfoOpen: {
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  ServicesTitle: {
    alignSelf: 'flex-start',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3F5D7D',
    paddingHorizontal: 10
  }
})
export default Styles
