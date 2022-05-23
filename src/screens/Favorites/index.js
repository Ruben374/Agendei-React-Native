import React, { useEffect, useState, useContext } from "react";
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
import EstCardHome from "../../components/EstCardHome";
import { UserContext } from "../../contexts/UserContext";
let vetor = [1, 2, 3, 4];

const Favorites = ({ navigation, route }) => {
  const { state: user } = useContext(UserContext);
  const isFocused = useIsFocused();
  const [estList, setEstList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [list, setList] = useState(user.favorites);

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
          <Text style={styles.HeaderText}>Meus Favoritos</Text>
          <TouchableOpacity style={styles.HeaderIcon}>
            <FontAwesome name="search" size={30} color="#222455" />
          </TouchableOpacity>
        </View>

        <View>
          {list.map((item, key) => (
            <TouchableOpacity
              key={key}
              style={{ marginTop: 30, alignItems: "center" }}
              onPress={() => navigation.navigate("Est", { id: item._id })}
            >
              <EstCardHome data={item} />
            </TouchableOpacity>
          ))}

        </View>
      </View>
    </ScrollView>
  );
};
export default Favorites;
