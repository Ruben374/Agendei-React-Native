import React from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'
import styles from './styles.js'

const CategoryCard = ({Data,onPress}) => {
    
    const {image,name}= Data;
  return (
    <TouchableOpacity
      style={styles.Container}
     
    >
      <TouchableOpacity style={styles.Element}  onPress={e=>onPress(Data._id,Data.name)}>
        <Image
          style={{ width: 48, height: 48 }}
          source={{
            uri: `https://teste-api-api.herokuapp.com/${image}`
          }}
        />
      </TouchableOpacity>
      <Text style={{ marginBottom: 10 }}>{name}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard
