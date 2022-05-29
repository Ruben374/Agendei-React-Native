import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles.js'
const FlashMessage = ({ Message }) => {


    return (

        <>

            <View style={styles.View}>
                <Text style={styles.Text}>
                    {Message.toUpperCase()}
                </Text>
            </View>

        </>
    )
}

export default FlashMessage
