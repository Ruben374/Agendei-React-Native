import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground,
  FlatList,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./styles.js";
import EstCard from "../../components/EstCard";
import Dentista from "../../assets/Dentista.png";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Api from "../../Api";
import { useIsFocused } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Card } from "react-native-shadow-cards";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import ServicesCard from "../../components/ServicesCard";
let vetor = [1, 2, 3, 4];

const EstServices = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const [estList, setEstList] = useState([]);
  const [servicesList, setServicesList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getEst = async () => {
    const response = await Api.getEst(route.params.id);
    setEstList(response);
  };
  useEffect(() => {
    setServicesList(route.params.data);
  }, [isFocused]);

  return (
    <ScrollView style={styles.Scroll}>
      <View style={styles.Container}>
        <View style={styles.Header}>
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={30} color="#222455" />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>Serviços</Text>
        </View>
        {servicesList.map((item, key) => (
          <ServicesCard key={key} item={item} style={styles.CardContainer} />
        ))}
      </View>
    </ScrollView>
  );
};
export default EstServices;
