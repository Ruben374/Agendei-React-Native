import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import styles from "./styles.js";
import { useNavigation } from "@react-navigation/native";
import InputField from "../../components/InputField";
import EmailIcon from "../../assets/Email.png";
import PasswordIcon from "../../assets/Password.png";
import Person from "../../assets/Person.png";
import Api from "../../Api";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Top from "../../assets/top2.png";

const SignIn = () => {
  const navigation = useNavigation();

  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPasswordField, setConfirmPasswordField] = useState("");
  const [pass1, setPass1] = useState(true);
  const [pass2, setPass2] = useState(true);
  const [border, setBorder] = useState("#3F5D7D");
  const [passwordStrengthMessage, setPasswordStrengthMessage] = useState("");
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
      <View elevation={5} style={styles.Card}>
        <Image
          source={Top}
          style={{ alignSelf: "flex-start", marginTop: 35, marginLeft: 10 }}
        />
      </View>
      <View style={styles.ScreenTitle}>
        <Text style={styles.ScreenTitleText}>Criar</Text>
        <Text style={styles.ScreenTitleText}>Conta</Text>
      </View>
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
            placeholderTextColor="#555"
            selectionColor="#3F5D7D"
            secureTextEntry={pass2}
            value={passwordField}
            onChangeText={(text) => setPasswordField(text)}
          />

          {pass2 ? (
            <TouchableOpacity onPress={() => setPass2(!pass2)}>
              <Ionicons name="ios-eye-off-outline" size={24} color="#222455" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setPass2(!pass2)}>
              <Ionicons name="ios-eye-outline" size={24} color="#222455" />
            </TouchableOpacity>
          )}
        </View>
        <View style={{}}>
          <Text style={{ color: "red" }}>
            {validatePassword
              ? ""
              : "Sua senha deve conter: no minimo 6 carcteres, números, letra maiúscula e letra minúscula"}
          </Text>
        </View>

        <Text style={styles.InputMessage}>Confirme senha</Text>
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
            placeholderTextColor="#555"
            selectionColor="#3F5D7D"
            secureTextEntry={pass1}
            value={confirmPasswordField}
            onChangeText={(text) => setConfirmPasswordField(text)}
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
    </ScrollView>
  );
};

export default SignIn;

/*
  <View style={styles.FormArea}>
        <InputField
          Icon={Ionicons}
          IconName='person'
          IconColor='#3f5d7d'
          IconPosition='left'
          placeholder='Degite seu nome'
          value={nameField}
          onChangeText={text => setNameField(text)}
        />

        <InputField
          Icon={MaterialIcons}
          IconName='email'
          IconColor='#3f5d7d'
          IconPosition='left'
          placeholder='Digite seu email'
          value={emailField}
          onChangeText={text => setEmailField(text)}
        />
            <InputField
          Icon={FontAwesome}
          IconName='lock'
          IconColor='#3f5d7d'
          IconPosition='left'
          placeholder='Digite sua senha'
          value={passwordField}
          onChangeText={text => setPasswordField(text)}
        />
        
        <InputField
          Icon={FontAwesome}
          IconName='lock'
          IconColor='#3f5d7d'
          IconPosition='left'
          placeholder='Confirme sua senha'
          value={confirmPasswordField}
          onChangeText={text => setConfirmPasswordField(text)}
        />
        {loading ? (
          <ActivityIndicator
            size='large'
            style={{ marginTop: 40 }}
            color='#3F5D7D'
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

*/
