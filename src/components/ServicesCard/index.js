import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

import { useNavigation } from "@react-navigation/native";

const ServicesCard = ({ item,uteis }) => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate("ConfirmAppointments", { item,uteis });
  };

  return (
    <View style={styles.CardContainer}>
      <View>
        <Text style={styles.ServiceName}>{item.name}</Text>
        <Text style={styles.ServicePrice}>{item.preco}kz</Text>
      </View>
      <TouchableOpacity style={styles.CardButton} onPress={handleOnPress}>
        <Text style={styles.CardButtonText}>Agendar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ServicesCard;
