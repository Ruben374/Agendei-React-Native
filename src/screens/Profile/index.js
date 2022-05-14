import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  Pressable,
  TextInput,
  ModalButtonText,
  ImageBackground,
} from "react-native";
import styles from "./styles.js";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../../contexts/UserContext";
import * as ImagePicker from "expo-image-picker";
import Api from "../../Api";
import Config from "../../config/Api.config.js";
import { Card } from "react-native-shadow-cards";

const Profile = () => {
  const { state: user } = useContext(UserContext);
  const { dispatch: userDispatch } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState(user.name);

  const [image, setImage] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Faenza-avatar-default-symbolic.svg/1024px-Faenza-avatar-default-symbolic.svg.png"
  );
  const [textInputFocus, setTextInputFocus] = useState(true);
  const [modalName, setModalName] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const navigation = useNavigation();

  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    //console.log(JSON.stringify(_image))
    if (!_image.cancelled) {
      setImage(_image.uri);

      userDispatch({
        type: "setavatar",
        payload: {
          avatar: _image.uri,
        },
      });
      let apiUrl = `${Config.url}/clients/clientimage`;
      let uri = _image.uri;
      let uriParts = uri.split(".");
      let fileType = uriParts[uriParts.length - 1];

      let formData = new FormData();
      console.log(fileType);
      formData.append("file", {
        uri,
        name: `photo.` + fileType,
        type: "image/jpeg",
      });
      formData.append("id", user.id);

      //console.log(formData)
      let options = {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      };

      try {
        const response = await fetch(apiUrl, options);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getAvatar = () => {
    // avatar da api
    console.log(user.avatar);
    if (!user.avatar == "" && user.avatar[0] == "u" && user.avatar[1] == "p") {
      const join =  Config.url+"/"+ user.avatar;
      setImage(join);
    }
    //avatar do contexto
    else if (!user.avatar == "" && user.avatar[0] == "f") {
      setImage(user.avatar);
    } 
    
  };
  useEffect(() => {
    getAvatar();
    console.log(user);
  }, []);
  const GoToEdit = () => {
    navigation.navigate("EditProfile");
  };



  
  return (
    <ScrollView style={styles.Scroll}>
      <View style={styles.Container}>
        <View style={styles.Title}>
          <Text style={styles.TitleText}>Meu Perfil</Text>
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            alignSelf: "center",
            marginTop: 80,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              elevation: 10, // Android
            }}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Image
              style={{
                width: 150,
                height: 150,
                borderRadius: 100,
              }}
              source={{
                uri: image,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.NameContent}>
          <Text style={styles.NameText}>{user.name}</Text>
          <Text style={styles.EmailText}>{user.email}</Text>
          <View style={styles.Buttons}>
            <TouchableOpacity
              style={styles.ButtonEdit}
              onPress={() => navigation.navigate("EditProfile")}
            >
              <Text style={styles.ButtonEditText}>Editar Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ButtonSettings}
              onPress={() => navigation.navigate("ClientSetting")}
            >
              <Text style={styles.ButtonSettingsText}>Definições</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#000",
            }}
          >
            <Image
              source={{
                uri: image,
              }}
              style={{ height: 300, width: "100%" }}
            />
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};
export default Profile;

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
