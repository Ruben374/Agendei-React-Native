import React, { useEffect, useContext } from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Logo from "../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import Api from "../../Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserContext } from "../../contexts/UserContext";
import { EstContext } from "../../contexts/EstContext";

const Preload = () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const { dispatch: estDispatch } = useContext(EstContext);
  const navigation = useNavigation();
  const checkToken = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
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
        alert("Erro de Internet", err.message)
      });
    } else {
      navigation.reset({
        routes: [{ name: "Login" }],
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      checkToken()
    }, 5000);
    return () => clearInterval(interval);
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
