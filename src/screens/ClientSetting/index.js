import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";
import styles from "./styles.js";
import { AntDesign } from "@expo/vector-icons";
import Api from "../../Api";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const ClientSetting = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const [estList, setEstList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getEst = async () => {
    const response = await Api.getEst(route.params.id);
    setEstList(response);
  };
  /*   useEffect(() => {
    getEst()
  }, [isFocused ]) */
  const handleLogoutButton = async () => {
    try {
      await AsyncStorage.removeItem("token");
      navigation.reset({
        routes: [{ name: "Login" }],
      });
    } catch (error) {
      Alert.alert("Erro!", error.message, [{ text: "OK" }]);
    }
  };

  return (
    <ScrollView style={styles.Scroll}>
      <View style={styles.Container}>
        <View style={styles.Header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="#222455" />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>Definições</Text>
        </View>
        <View style={styles.SectionTitle}>
          <Text style={styles.SectionTitleText}>Conta</Text>
        </View>
        <TouchableOpacity
          style={styles.Option}
          onPress={() => navigation.navigate("ChangePassword")}
        >
          <Text style={styles.OptionText}>Alterar Palavra Passe</Text>
          <AntDesign name="arrowright" size={25} color="#222455" />
        </TouchableOpacity>

        <View style={styles.SectionTitle}>
          <Text style={styles.SectionTitleText}>Outros</Text>
        </View>


        <TouchableOpacity style={styles.Option} onPress={handleLogoutButton}>
          <Text style={styles.OptionTextLogout}>Sair</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default ClientSetting;
