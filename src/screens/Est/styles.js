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
  Hero: { height: 240, width: '100%' },
  ContainerInfo: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ContainerInfoTitle: {
    fontSize: 20,
    color: '#717F7F',
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap'
  },
  ContainerInfoText: {
    fontSize: 15,
    color: '#A0A0A0',
    flex: 1,
    flexWrap: 'wrap'
  },

  ServicesTitle: {
    alignSelf: 'flex-start',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3F5D7D',
    paddingHorizontal:10,
  },

})
export default Styles
