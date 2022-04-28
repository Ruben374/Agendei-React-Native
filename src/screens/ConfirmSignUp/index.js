import React, { useState, useContext } from 'react'
import {
  Animated,
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell
} from 'react-native-confirmation-code-field'

import styles, {
  ACTIVE_CELL_BG_COLOR,
  CELL_BORDER_RADIUS,
  CELL_SIZE,
  DEFAULT_CELL_BG_COLOR,
  NOT_EMPTY_CELL_BG_COLOR
} from './styles'

import Api from '../../Api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UserContext } from '../../contexts/UserContext'
import { useNavigation } from '@react-navigation/native'
const { Value, Text: AnimatedText } = Animated

const CELL_COUNT = 4
const source = {
  uri:
    'https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png'
}

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0))
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1))
const animateCell = ({ hasValue, index, isFocused }) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250
    })
  ]).start()
}

const AnimatedExample = ({ route }) => {
  const type = route.params.type
  const { dispatch: userDispatch } = useContext(UserContext)
  const navigation = useNavigation()
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const handlebtnconfirm = async () => {
    if (type == 1) {
      try {
        //navigation.navigate('Choose')
        const response = await Api.ConfirmCode(value, route.params.email)
        if (response.id && response.token) {
          await AsyncStorage.setItem('token', response.token)

          userDispatch({
            type: 'setId',
            payload: {
              id: response.id
            }
          })
          userDispatch({
            type: 'setname',
            payload: {
              name: response.name
            }
          })
          userDispatch({
            type: 'setavatar',
            payload: {
              avatar: response.avatar
            }
          })

          navigation.reset({
            routes: [{ name: 'Choose' }]
          })
        }
      } catch (error) {
        Alert(error)
      }
    }
    if (type == 2) {
      if (value.trim() !== '') {
        const res = await Api.VerifyCodeToResetPassword(
          route.params.email,
          value
        )
        if (res.status == 200) {
          navigation.reset({
            routes: [
              {
                name: 'ResetPassword',
                params: { email:route.params.email}
              }
            ]
          })
        }
        if (res.status == 422) {
          alert(res.message)
        }
        if (res.status == 500) {
          alert('Não foi possivel realizar esta operação')
        }
      } else {
        alert('Preencha o campo')
      }
    }
  }

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue
  })

  const renderCell = ({ index, symbol, isFocused }) => {
    const hasValue = Boolean(symbol)
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR]
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR]
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS]
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1]
          })
        }
      ]
    }

    // Run animation on next event loop tik
    // Because we need first return new style prop and then animate this value
    setTimeout(() => {
      animateCell({ hasValue, index, isFocused })
    }, 0)

    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    )
  }

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Verification</Text>
      <Image style={styles.icon} source={source} />
      <Text style={styles.subTitle}>
        Please enter the verification code{'\n'}
        we send to your email address
      </Text>

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFiledRoot}
        keyboardType='number-pad'
        textContentType='oneTimeCode'
        renderCell={renderCell}
      />
      <TouchableOpacity onPress={handlebtnconfirm} style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Verify</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default AnimatedExample

/*

  const [codeField, setCodeField] = useState('')

  const handlebtnconfirm = async () => {
    console.log(codeField)
    console.log(route.params.email)
    // const response = await Api.ConfirmCode(codeField, route.params.email)
   // console.log(respoonse)
  }

*/
