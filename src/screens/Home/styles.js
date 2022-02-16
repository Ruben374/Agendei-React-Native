import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		paddingVertical: 40,
		paddingHorizontal: 20
	},

	ContainerContent:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#3f5d7d',
		padding: '5px',
	},

  	ContainerContentCenterImage: {
    	justifyContent: 'center',
		alignItems: 'center',
	},

	ContainerContentInformation:{
		flexDirection: 'row',
	},

	ContainerContentStar:{
		flexDirection: 'row',
	},

	ContainerContentH1:{
		fontSize: '24px',
		color: '#ffffff',
	},

	ContainerContentText:{
		color: '#fff',
		fontSize: '14px',
		marginLeft: "8px",
	},

	ContainerContentHeart:{
		marginLeft: '12px',
		color: '#ffffff',
		padding: '0 5px'
	},
})
export default Styles