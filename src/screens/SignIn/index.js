import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";
import styles from "./styles.js";
import { useNavigation } from "@react-navigation/native";
import teste from "../../assets/teste.jpg";
import Api from "../../Api";
import InputField from "../../components/InputField";
const SignIn = () => {
  const navigation = useNavigation();
  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPasswordField, setConfirmPasswordField] = useState("");
  const [pass1, setPass1] = useState(true);
  const [pass2, setPass2] = useState(true);
  const [validatePassword, setValidatePassword] = useState(true);
  const [nameValidate, setNameValidate] = useState(true);
  const [validateEmail, setValidateEmail] = useState(true);
  const [validateConfirmPassword, setValidateConfirmPassword] = useState(true);
  const handleSignInMessagePress = () => {
    navigation.reset({
      routes: [{ name: "Login" }],
    });
  };
  const verifyName = (name) => {
    if (name == " ") {
      console.log("vazio");
    }
    if (!!name.match(/[A-Z][a-z]* [A-Z][a-z]*/)) {
      setNameValidate(true);
      //console.log('true')
      return true;
    } else {
      setNameValidate(false);
      //console.log('false')
      return false;
    }
  };
  const verifyEmail = (email) => {
    const teste = !!email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
    if (teste) {
      // console.log('email bom')
      setValidateEmail(true);
      return true;
    } else {
      //  console.log('email mau')
      setValidateEmail(false);
      return false;
    }
  };
  const VerifyPassword = (password) => {
    //setPasswordField(password)
    //console.log(validateInput)
    const regexUppercase = password.match(/^(?=.*[A-Z]).+$/);
    //const regexLowercase = password.match(/^(?=.*[a-z]).+$/)
    const regexNumber = password.match(/^(?=.*[0-9]).+$/);
    const length = password.length >= 6;
    //console.log(regexUppercase)
    //console.log(length)
    //console.log(regexUppercase)
    if (regexUppercase && regexNumber && length) {
      console.log("boa senha");
      setValidatePassword(true);
      return true;
    } else {
      console.log("ma senha");
      setValidatePassword(false);
      return false;
    }
  };

  const handleCadastrarPress = async () => {
    setLoading(true);
    // console.log('email:' + verifyEmail(emailField))
    if (
      nameField.trim() !== "" &&
      emailField.trim() !== "" &&
      passwordField.trim() !== "" &&
      confirmPasswordField.trim() !== ""
    ) {
      if (verifyName(nameField)) {
        if (verifyEmail(emailField)) {
          if (VerifyPassword(passwordField)) {
            if (passwordField == confirmPasswordField) {
              setValidateConfirmPassword(true);
              const response = await Api.SignUp(
                nameField,
                emailField,
                passwordField
              );
              console.log(response);
              if (response.status === 201) {
                setLoading(false);
                navigation.reset({
                  routes: [
                    {
                      name: "ConfirmSignUp",
                      params: { email: emailField, type: 1 },
                    },
                  ],
                });
              } else if (response.status == 422) {
                setLoading(false);
                Alert.alert("Erro!", "Email ja cadastrado", [{ text: "OK" }]);
              } else if (response.status == 302) {
                navigation.reset({
                  routes: [
                    {
                      name: "ConfirmSignUp",
                      params: { email: emailField, type: 1 },
                    },
                  ],
                });
              }
            } else {
              setLoading(false);
              setValidateConfirmPassword(false);
            }
          }
        }
      }
    } else {
      setLoading(false);
      Alert.alert("Erro!", "Preencha todos os campos", [{ text: "OK" }]);
    }
    setLoading(false);
  };

  const [step, setstep] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.Scroll}>
      <ImageBackground
        source={
          teste
        }
        style={{ width: "100%", height: 250 }}
      >
        <View style={styles.ScreenTitle}>
          <Text style={styles.ScreenTitleText}>Criar</Text>
          <Text style={styles.ScreenTitleText}>Conta</Text>
        </View>
      </ImageBackground>
      <View style={styles.Container}>
        <View style={styles.FormArea}>
          <Text style={styles.InputMessage}>Seu nome</Text>
          <TextInput
            style={styles.Input}
            placeholderTextColor="#555"
            selectionColor="#3F5D7D"
            value={nameField}
            maxLength={20}
            onChangeText={(text) => setNameField(text)}
          />
          <View style={{}}>
            <Text style={{ color: "red" }}>
              {nameValidate ? "" : "Nome invalido"}
            </Text>
          </View>
          <Text style={styles.InputMessage}>Seu email</Text>
          <TextInput
            style={styles.Input}
            placeholderTextColor="#555"
            selectionColor="#3F5D7D"
            value={emailField}
            onChangeText={(text) => setEmailField(text)}
          />
          <View style={{}}>
            <Text style={{ color: "red" }}>
              {validateEmail ? "" : "Email invalido"}
            </Text>
          </View>

          <Text style={styles.InputMessage}>Senha</Text>
          <InputField
            pass1={pass2}
            value={passwordField}
            onChangeText={(t) => setPasswordField(t)}
            onIconPress={() => setPass2(!pass2)}
          />
          <View style={{}}>
            <Text style={{ color: "red" }}>
              {validatePassword
                ? ""
                : "Sua senha deve conter: no minimo 6 carcteres, números, letra maiúscula e letra minúscula"}
            </Text>
          </View>

          <Text style={styles.InputMessage}>Confirme senha</Text>
          <InputField
            pass1={pass1}
            value={confirmPasswordField}
            onChangeText={(t) => setConfirmPasswordField(t)}
            onIconPress={() => setPass1(!pass1)}
          />
          <View style={{}}>
            <Text style={{ color: "red" }}>
              {validateConfirmPassword ? "" : "As senhas divergem"}
            </Text>
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
              onPress={handleCadastrarPress}
            >
              <Text style={styles.CostumBtnTxt}>CADASTRAR</Text>
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          style={styles.SignInMessage}
          onPress={handleSignInMessagePress}
        >
          <Text style={styles.SignInMessageText}>Ja possui uma conta?</Text>
          <Text style={styles.SignInMessageTextBold}>Faça login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignIn;
