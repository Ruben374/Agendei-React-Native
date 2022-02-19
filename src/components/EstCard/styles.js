import {StyleSheet} from 'react-native'

const Styles= StyleSheet.create({
  ContainerContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#3f5d7d',
    padding: 10,
    marginBottom:10,
  },

  ContainerContentCenterImage: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  ContainerContentInformation: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  ContainerContentStar: {
    flexDirection: 'row',
	justifyContent:'center',
	alignItems:'center'
  },

  ContainerContentH1: {
    fontSize: 24,
    color: '#ffffff'
  },

  ContainerContentText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 8,
    flex: 1,
    flexWrap: 'wrap'
  },

  ContainerContentHeart: {
    alignItems: 'center',
    marginLeft: 12,
    color: '#ffffff',
    paddingVertical: 10
  }
})
export default Styles