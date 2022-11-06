import React, { useEffect, useContext } from "react";
import { View, Text, Image, Alert } from "react-native";
import styles from "./styles";
import Logo from "../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import Api from "../../Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../../contexts/UserContext";
const Preload = () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();
  const checkToken = async () => {
    //const p= await fetch("http://10.254.124.49:3005")
    //console.log(p.status)
    const token = await AsyncStorage.getItem("token");
    if (token) {
      const rev = await Api.check()
      console.log(rev)
      const response = Api.RefreshToken().then(response => {
        if (response.token) {
          //const res = await Api.getAllEst(); 
          userDispatch({
            type: "setEmail",
            payload: {
              email: response.email,
            },
          });
          userDispatch({
            type: "setname",
            payload: {
              name: response.name,
            },
          });
          userDispatch({
            type: "setavatar",
            payload: {
              avatar: response.avatar,
            },
          });
          console.log(response.favorites)
          userDispatch({
            type: "setFavorites",
            payload: {
              favorites: response.favorites,
            },
          });

          navigation.reset({
            routes: [{ name: "MainTab" }],
          });
        }
      }).catch(err => {
        Alert.alert("Erro", "Não foi possivel se conectar ao servidor, tente novamente.", [
          { text: 'OK', onPress: () => checkToken() },
        ]);
      });
    } else {
      navigation.reset({
        routes: [{ name: "Login" }],
      });
    }
  };

  useEffect(() => {
    checkToken()
  }, []);

  return (
    <View style={styles.container}>
      <View elevation={5} >
        <Image source={Logo} style={styles.Logo} />
      </View>
      <Text style={styles.Text}>
        AGENDEI
      </Text>
    </View>
  );
};

export default Preload;
