import React, { useEffect, useState, useContext } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  Pressable,
  TextInput,
  ModalButtonText
} from 'react-native'
import styles from './styles.js'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { Octicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UserContext } from '../../contexts/UserContext'
import * as ImagePicker from 'expo-image-picker'
import Api from '../../Api'

const Profile = () => {
  const { state: user } = useContext(UserContext)
  const { dispatch: userDispatch } = useContext(UserContext)
  const [modalVisible, setModalVisible] = useState(false)
  const [name, setName] = useState(user.name)

  const [image, setImage] = useState(null)
  const [textInputFocus, setTextInputFocus] = useState(true)
  const [modalName, setModalName] = useState(false)
  const navigation = useNavigation()

  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })
    console.log(JSON.stringify(_image))
    if (!_image.cancelled) {
      setImage(_image.uri)
    }
    userDispatch({
      type: 'setavatar',
      payload: {
        avatar: _image.uri
      }
    })
    let apiUrl = 'http://192.168.10.30:3005/clients/clientimage'
    let uri = _image.uri
    let uriParts = uri.split('.')
    let fileType = uriParts[uriParts.length - 1]

    let formData = new FormData()
    console.log(fileType)
    formData.append('file', {
      uri,
      name: `photo.` + fileType,
      type: 'image/jpeg'
    })
    formData.append('id', user.id)
    //console.log(formData)

    let options = {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    }
    try {
      const response = await fetch(apiUrl, options)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const getAvatar = () => {
    // avatar da api
    console.log(user.avatar)
    if (!user.avatar == '' && user.avatar[0] == 'u' && user.avatar[1] == 'p') {
      const join = 'http://192.168.10.30:3005/' + user.avatar
      setImage(join)
    }
    //avatar do contexto
    else if (!user.avatar == '' && user.avatar[0] == 'f') {
      setImage(user.avatar)
    }
  }
  useEffect(() => {
    getAvatar()
  }, [])
  const GoToEdit = () => {
    navigation.navigate('EditProfile')
  }

  const handleLogoutButton = async () => {
    try {
      await AsyncStorage.removeItem('token')
      navigation.reset({
        routes: [{ name: 'Login' }]
      })
    } catch (error) {
      Alert.alert('Erro!', error.message, [{ text: 'OK' }])
    }
  }

  const handleModalButton=async ()=>{
    try{
      const response = await Api.UpdateClient('Name', user.id,name,'')
      alert(response.message)
      userDispatch({
        type: 'setname',
        payload: {
          name: name
        }
      })
    }
    catch(error){
      alert(error.message)
    }
  }
  return (
    <ScrollView style={styles.Scroll}>
      <Modal
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) !important'
        }}
        animationType='fade'
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
        visible={modalVisible}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black'
          }}
        >
          <View elevation={5} style={{ borderRadius: 10 }}>
            <Image
              style={{ width: 300, height: 400 }}
              source={{ uri: image }}
            />
          </View>
        </View>
      </Modal>

      <View style={styles.ProfileContainer}>
        <View style={styles.ProfileContainerTop}>
          <TouchableOpacity>
            <AntDesign name='arrowleft' size={24} color='black' />
          </TouchableOpacity>
          <TouchableOpacity onPress={GoToEdit}>
            <MaterialIcons name='more-vert' size={24} color='black' />
          </TouchableOpacity>
        </View>
        <View style={styles.ProfileContainerBottom}>
          <TouchableOpacity
            style={styles.ProfileImage}
            onPress={() => setModalVisible(true)}
          >
            {image ? (
              <Image style={styles.Image} source={{ uri: image }} />
            ) : (
              <Image
                style={styles.Image}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAU9KXPynTtqeWYLQlJ9CRVULXthc2yNlRw&usqp=CAU'
                }}
              />
            )}
          </TouchableOpacity>
          <View style={styles.ProfileUserName}>
            <Text style={styles.ProfileName}>{user.name}</Text>
            <Text>online</Text>
          </View>
        </View>
        <View elevation={5} style={styles.ProfileAddImage}>
          <TouchableOpacity
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onPress={addImage}
          >
            <MaterialCommunityIcons
              name='camera-plus-outline'
              size={30}
              color='#3F5D7D'
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.ProfileMenu}>
        <Text style={styles.ProfileMenuTitle}>Conta</Text>
        <TouchableOpacity
          style={styles.ProfileMenuItemX}
          onPress={() => {
            setModalName(true)
            setTextInputFocus(true)
          }}
        >
          <Text style={styles.ProfileMenuTextTitle}>{user.name}</Text>
          <Text style={styles.ProfileMenuText}>tap to change name</Text>
          <Modal
            animationType='slide'
            transparent={true}
            visible={modalName}
            onRequestClose={() => {
              setModalName(!modalName)
              setName(user.name)
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.ModalTitle}>Degite o seu nome</Text>
                <TextInput
                  style={{
                    borderBottomWidth: 2,
                    borderBottomColor: '#3F5D7D',
                    fontSize: 18
                  }}
                  placeholderTextColor='#555'
                  autoFocus={textInputFocus}
                  selectionColor='#3F5D7D'
                  value={name}
                  onChangeText={text => setName(text)}
                />
                <View style={styles.ModalButtons}>
                  <TouchableOpacity onPress={handleModalButton}>
                    <Text style={styles.ModalButtonText}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </TouchableOpacity>
      </View>
      <View style={styles.ProfileMenu}>
        <TouchableOpacity
          style={styles.ProfileSettingsItem}
          onPress={() => {
            navigation.navigate('ChangePassword')
          }}
        >
          <Feather name='lock' size={30} color='black' />
          <Text style={styles.ProfileSettingsItemText}>
            Alterar palavra passe
          </Text>
        </TouchableOpacity>
        <View
          style={{ borderBottomWidth: 1, width: '100%', marginLeft: 40 }}
        ></View>
        <TouchableOpacity style={styles.ProfileSettingsItem}>
          <FontAwesome name='heart-o' size={30} color='black' />
          <Text style={styles.ProfileSettingsItemText}>Meus Favoritos</Text>
        </TouchableOpacity>
        <View
          style={{ borderBottomWidth: 1, width: '100%', marginLeft: 40 }}
        ></View>
        <TouchableOpacity style={styles.ProfileSettingsItem}>
          <Octicons name='calendar' size={30} color='black' />
          <Text style={styles.ProfileSettingsItemText}>Meus Agendamentos</Text>
        </TouchableOpacity>
        <View
          style={{ borderBottomWidth: 1, width: '100%', marginLeft: 40 }}
        ></View>
        <TouchableOpacity
          style={styles.ProfileSettingsItem}
          onPress={handleLogoutButton}
        >
          <MaterialCommunityIcons name='logout' size={30} color='black' />
          <Text style={styles.ProfileSettingsItemText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
export default Profile

/*
<TouchableOpacity style={styles.ProfileOptionsItem}>
          <View style={styles.ProfileOptionsCircle}>
            <AntDesign name='hearto' size={30} color='#fff' />
          </View>
          <Text style={styles.ProfileOptionsText}>Meus Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ProfileOptionsItem}>
          <View style={styles.ProfileOptionsCircle}>
            <Octicons name='calendar' size={30} color='#fff' />
          </View>
          <Text style={styles.ProfileOptionsText}>Meus Agendamentos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ProfileOptionsItem}
          onPress={handleLogoutButton}
        >
          <View style={styles.ProfileOptionsCircle}>
            <MaterialCommunityIcons name='logout' size={30} color='#fff' />
          </View>
          <Text style={styles.ProfileOptionsText}>Sair</Text>
        </TouchableOpacity>


*/
