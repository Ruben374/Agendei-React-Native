import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,

} from "react-native";
import styles from "./styles.js";

import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";

import { UserContext } from "../../contexts/UserContext";

import Config from "../../config/Api.config.js";

 

const Profile = () => {
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
  const [modalImage, setModalImage] = useState("");

  const navigation = useNavigation();

  const getAvatar = () => {
   
    // avatar da api
    console.log(user.avatar);
    if (!user.avatar == "" && user.avatar[0] == "u" && user.avatar[1] == "p") {
      console.log("1")
      const join = Config.url + "/" + user.avatar;
      setImage(join);
    }
    //avatar do contexto
    else if (!user.avatar == "" && user.avatar[0] != "u" && user.avatar[1] != "p") {
      console.log("2")
      setImage(user.avatar);
    }

  };
  useEffect(() => {
    getAvatar();
    console.log(user);
  }, [isFocused]);
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
