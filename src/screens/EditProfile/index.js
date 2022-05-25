import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,

  TextInput,

} from "react-native";
import styles from "./styles.js";

import { MaterialCommunityIcons } from "@expo/vector-icons";
;
import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import { UserContext } from "../../contexts/UserContext";
import * as ImagePicker from "expo-image-picker";
import { useIsFocused } from "@react-navigation/native";
import Api from "../../Api";

import { Ionicons } from "@expo/vector-icons";
import Config from "../../config/Api.config.js";

const EditProfile = () => {
  const isFocused = useIsFocused();
  const { state: user } = useContext(UserContext);
  const { dispatch: userDispatch } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState(user.name);

  const [image, setImage] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Faenza-avatar-default-symbolic.svg/1024px-Faenza-avatar-default-symbolic.svg.png"
  );
  const [textInputFocus, setTextInputFocus] = useState(true);
  const [modalName, setModalName] = useState(false);
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
      formData.append("email", user.email);

      //console.log(formData)

      try {
        const response = await Api.UploadImage(formData);
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
      const join = Config.url + "/" + user.avatar;
      setImage(join);
    }
    //avatar do contexto
    else if (!user.avatar == "" && user.avatar[0] == "f") {
      setImage(user.avatar);
    }
  };
  useEffect(() => {
    getAvatar();
  }, [isFocused]);
  const GoToEdit = () => {
    navigation.navigate("EditProfile");
  };



  const handleUpdateButton = async () => {
    try {
      const response = await Api.UpdateClient("Name", user.email, name, "");
      alert(response.message);
      userDispatch({
        type: "setname",
        payload: {
          name: name,
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <ScrollView style={styles.Scroll}>
      <View style={styles.Container}>
        <View style={styles.Header}>
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={30} color="#222455" />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>Editar Perfil</Text>
          {/*    <TouchableOpacity>
            <Text style={styles.HeaderBtnCancel}>Cancelar</Text>
          </TouchableOpacity> */}
        </View>

        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            alignSelf: "center",
            marginTop: 70,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              elevation: 10, // Android
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

          <TouchableOpacity
            onPress={addImage}
            style={{
              position: "absolute",
              width: 40,
              height: 40,
              backgroundColor: "#5663ff",
              borderRadius: 50,
              bottom: -20,
              right: -20,
              justifyContent: "center",
              alignItems: "center",
              elevation: 10, // Android
            }}
          >
            <MaterialCommunityIcons
              name="camera-plus-outline"
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.FormArea}>
          <View style={styles.ViewInput}>
            <Ionicons name="ios-person-outline" size={24} color="#5663ff" />
            <TextInput value={name} style={styles.TextInput} onChangeText={(text) => setName(text)} />
          </View>
          <TouchableOpacity style={styles.UpdateButton} onPress={handleUpdateButton}>
            <Text style={styles.UpdateButtonText}>Atualizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default EditProfile;
