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

const RattingsAndReviews = ({ navigation, route }) => {
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

  return (
    <ScrollView style={styles.Scroll}>
      <View style={styles.Container}>
        <View style={styles.Header}>
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={30} color="#222455" />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>Avaliações</Text>
        </View>
        <View style={styles.RattingAndReViewContainer}>
          <View style={styles.RattingAndReViewItem}>
            <Image
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                marginRight: 10,
              }}
              source={{
                uri: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
              }}
            />
            <View style={styles.RattingAndReViewContent}>
              <View style={styles.RattingAndReviewContentTop}>
                <Text style={styles.RattingAndReviewName}>Ruben André</Text>
                <View style={styles.RattingAndReviewStars}>
                  <Text style={styles.RattingAndReviewStarsText}>3.5</Text>
                  <Ionicons name="star" size={18} color="yellow" />
                </View>
              </View>
              <Text style={styles.RattingAndreviewContentBottom}>
                Achei um estabelecimento muito bom
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.RattingAndReViewContainer}>
          <View style={styles.RattingAndReViewItem}>
            <Image
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                marginRight: 10,
              }}
              source={{
                uri: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
              }}
            />
            <View style={styles.RattingAndReViewContent}>
              <View style={styles.RattingAndReviewContentTop}>
                <Text style={styles.RattingAndReviewName}>Ruben André</Text>
                <View style={styles.RattingAndReviewStars}>
                  <Text style={styles.RattingAndReviewStarsText}>3.5</Text>
                  <Ionicons name="star" size={18} color="yellow" />
                </View>
              </View>
              <Text style={styles.RattingAndreviewContentBottom}>
                Achei um estabelecimento muito bom
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default RattingsAndReviews;
