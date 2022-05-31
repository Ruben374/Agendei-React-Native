import React, { useEffect, useState } from "react";
import {
  View,
  Text,
 
  TouchableOpacity,
  ScrollView,

} from "react-native";

import styles from "./styles.js";

import { AntDesign } from "@expo/vector-icons";

import Api from "../../Api";
import { useIsFocused } from "@react-navigation/native";

import ServicesCard from "../../components/ServicesCard";

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
          <ServicesCard key={key} item={item}
            uteis={route.params.ut}
            style={styles.CardContainer} />
        ))}
      </View>
    </ScrollView>
  );
};
export default EstServices;
