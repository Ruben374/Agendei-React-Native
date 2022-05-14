import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#ffff'
  },
  Scroll: {
    flex: 1,
    backgroundColor: '#fff'
  },
  Top: {
    alignSelf: 'center'
  },
  SearchArea: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: 10
  },
  Title: {
    fontSize: 25,
    color: '#323434',
    alignSelf: 'center'
  },
  ForYouMessage: {
    fontSize: 20,
    color: '#323434',
    alignSelf: 'center',
    marginTop: 5
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
    marginTop: 10
  },
  Input: {
    flex: 1,
    fontSize: 15,
    color: '#555',
    marginLeft: 10
  },
  TargetIcon: {
    width: 35,
    height: 35
  },
  tela: {
    marginTop: 20,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export default Styles
