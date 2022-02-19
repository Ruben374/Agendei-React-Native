import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
	s:{
		flex: 1,
    padding: 10,
	 backgroundColor: '#FFFFFF',
	},
  Container: {
    flex: 1,
   backgroundColor: 'transparent',
    alignItems: 'center',
    padding: 5
  },
  TopMessage: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
    padding: 10
  },
  TopMessageText: {
    fontSize: 25,
    color: '#A0A0A0',
    flex: 1,
    flexWrap: 'wrap'
  },
  TopMessageIcon: {
    marginTop: 5
  },


})
export default Styles
