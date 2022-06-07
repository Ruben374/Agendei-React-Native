import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ScrollView,
  ImageBackground,
  TextInput,

} from "react-native";

import { useNavigation } from "@react-navigation/native";

import Api from "../../Api";

import teste from "../../assets/teste.jpg";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../../contexts/UserContext";

import InputField from "../../components/InputField";

import styles from "./styles";

const Login = () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [loading, setLoading] = useState(false);
  const [pass1, setPass1] = useState(true);
  const handleLoginMessagePress = () => {
    navigation.navigate(
      "SignIn"
    )
  };
  const handleLoginButton = async () => {
    setLoading(true);
    if (emailField.trim() !== "" && passwordField.trim() !== "") {
      const response = await Api.Login(emailField, passwordField);

      if (response.status == 200) {
        await AsyncStorage.setItem("token", response.token);
        //se tudo tiver certo vai para Home
        console.log(response.email);

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
        userDispatch({
          type: "setFavorites",
          payload: {
            favorites: response.favorites,
          },
        });
        navigation.reset({
          routes: [{ name: "MainTab" }],
        });
      } else {
        setLoading(false);
        Alert.alert("Ups!", "Password ou senha errados", [{ text: "OK" }]);
      }
    } else {
      setLoading(false);
      Alert.alert("Erro!", "Preencha todos os campos", [{ text: "OK" }]);
    }
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <ScrollView contentContainerStyle={styles.Scroll}>
     <View style={{flex:1}}>

      <ImageBackground
        source={
          teste
        }
        style={{ width: "100%", height: 250,}}
      >
        <View style={styles.ScreenTitle}>
          <Text style={styles.ScreenTitleText}>Entrar</Text>
        </View >
      </ImageBackground>
      <View style={styles.Container}>
        <View style={styles.FormArea}>
          <Text style={styles.InputMessage}>Seu email</Text>
          <TextInput
            style={styles.Input}
            selectionColor="#222455"
            value={emailField}
            onChangeText={(text) => setEmailField(text)}
            maxLength={40}
          />
          <View style={styles.InputPasswordMessage}>
            <Text style={styles.InputMessage}>Senha</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ResetPasswordSendEmail");
              }}
            >
              <Text style={styles.ForgotPasswordText}>Esqueceu?</Text>
            </TouchableOpacity>
          </View>
          <InputField
            pass1={pass1}
            value={passwordField}
            onChangeText={(t) => setPasswordField(t)}
            onIconPress={() => setPass1(!pass1)}
          />

          {loading ? (
            <ActivityIndicator
              size="large"
              style={{ marginTop: 40 }}
              color="#3F5D7D"
            />
          ) : (
            <TouchableOpacity
              style={styles.CostumBtn}
              onPress={handleLoginButton}
            >
              <Text style={styles.CostumBtnTxt}>Entrar</Text>
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          style={styles.LoginMessage}
          onPress={handleLoginMessagePress}
        >
          <Text style={styles.LoginMessageText}>Ainda não possui uma conta?</Text>
          <Text style={styles.LoginMessageTextBold}>Cadastre-se</Text>
        </TouchableOpacity>

      </View>

     </View>
           </ScrollView>
  );
};

export default Login;
