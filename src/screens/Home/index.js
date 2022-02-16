import React from 'react'
import { View, Text, Image,TouchableOpacity } from 'react-native'
import styles from './styles.js'

import Dentista from '../../assets/Dentista.png'

const Home = () => {
	return (
	<View style={styles.Container}>
		<View style={styles.ContainerContent}>
			<View style={styles.ContainerContentCenterImage}>
				<Image source={Dentista} style={{width: '62px', height: '62px'}}/>
			</View>
			
			<View>
				<Text  style={styles.ContainerContentH1} >Repauto oficinas</Text>
				<View>
					<View style={styles.ContainerContentInformation}>
						<Text>I</Text>
						<Text style={styles.ContainerContentText}>R. Sagrada Esperança - Luanda</Text>
					</View>

					<View style={styles.ContainerContentStar}>
						<View><Text>S</Text></View>
						<Text style={styles.ContainerContentText}>4.8</Text>
					</View>
				</View>
			</View>
			<TouchableOpacity style={styles.ContainerContentHeart}>C</TouchableOpacity>
		</View>
	</View>
	)
}
export default Home