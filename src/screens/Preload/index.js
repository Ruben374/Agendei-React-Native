import React, { useEffect, useContext } from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";
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
      const response = await Api.RefreshToken();

      if (response.token) {
        const res = await Api.getAllEst();
        console.log(response);
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

        navigation.reset({
          routes: [{ name: "MainTab" }],
        });
      } else {
        alert("error");
      }
    } else {
      navigation.reset({
        routes: [{ name: "Login" }],
      });
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.Logo} />
      <ActivityIndicator size="large" color="#ffff" />
    </View>
  );
};

export default Preload;
