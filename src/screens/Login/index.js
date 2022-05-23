import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ScrollView,
  Image,
  TextInput,
  Modal,
  SafeAreaView,
  Animated,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
//import { BarPasswordStrengthDisplay } from 'react-native-password-strength-meter'
import Api from "../../Api";
import { MaterialIcons } from "@expo/vector-icons";
import Top from "../../assets/top2.png";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../../contexts/UserContext";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";
const { Value, Text: AnimatedText } = Animated;
const Login = () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [stapeOne, setStapeOne] = useState(true);
  const [stapeTwo, setStapeTwo] = useState(false);
  const [stapeThree, setStapeThree] = useState(false);
  const [value, setValue] = useState("");
  const [pass1, setPass1] = useState(true);
  const [pass, setPass] = useState(true);
  const [pass3, setPass3] = useState(true);
  const [stapeLoading, setStapeLoading] = useState(false);
  const [emailVerificationField, setEmailVerificationField] = useState("");
  const [verificationCodeField, setVerificationCodeField] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleLoginMessagePress = () => {
    navigation.reset({
      routes: [{ name: "SignIn" }],
    });
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
      <View elevation={5} style={styles.Card}>
        <Image
          source={Top}
          style={{ alignSelf: "flex-start", marginTop: 35, marginLeft: 10 }}
        />
      </View>
      <View style={styles.ScreenTitle}>
        <Text style={styles.ScreenTitleText}>Entrar</Text>
      </View>
      <View style={styles.FormArea}>
        <Text style={styles.InputMessage}>Seu email</Text>
        <TextInput
          style={styles.Input}
          selectionColor="#222455"
          value={emailField}
          onChangeText={(text) => setEmailField(text)}
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
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 2,
            borderBottomColor: "#222455",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              flex: 1,
              fontSize: 18,
              color: "#222455",
              fontFamily: "NotoSans_400Regular",
            }}
            selectionColor="#222455"
            secureTextEntry={pass1}
            value={passwordField}
            onChangeText={(text) => setPasswordField(text)}
          />

          {pass1 ? (
            <TouchableOpacity onPress={() => setPass1(!pass1)}>
              <Ionicons name="ios-eye-off-outline" size={24} color="#222455" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setPass1(!pass1)}>
              <Ionicons name="ios-eye-outline" size={24} color="#222455" />
            </TouchableOpacity>
          )}
        </View>

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
    </ScrollView>
  );
};

export default Login;
