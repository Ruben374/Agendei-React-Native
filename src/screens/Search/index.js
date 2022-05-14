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
import EstCardHome from "../../components/EstCardHome/index.js";

let vetor = [1, 2, 3, 4];

const Search = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const [estList, setEstList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const lowerbusca = searchValue.toLowerCase();
  const filtro = estList.filter((list) =>
    list.name.toLowerCase().includes(lowerbusca)
  );

  const getEst = async () => {
    const response = await Api.getEst(route.params.id);
    setEstList(response);
  };
  useEffect(() => {
    setEstList(route.params.data);
  }, [isFocused]);

  return (
    <ScrollView style={styles.Scroll}>
      <View style={styles.Container}>
        <View style={styles.Header}>
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={30} color="#222455" />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>{route.params.title}</Text>
        </View>
        <Card style={styles.SearchArea} elevation={5} opacity={2}>
          <FontAwesome name="search" size={24} color="#222455" />
          <TextInput
            style={styles.SearchInput}
            placeholder="Pesquisar"
            placeholderTextColor="#B0C4DE"
            value={searchValue}
            onChangeText={(text) => setSearchValue(text)}
          />
          <TouchableOpacity onPress={() => setSearchValue("")}>
            <AntDesign name="closecircleo" size={24} color="#222455" />
          </TouchableOpacity>
        </Card>

        {filtro.map((item, key) => (
          <TouchableOpacity
            style={{ marginTop: 20 }}
            key={key}
            onPress={() => navigation.navigate("Est", { id: item._id })}
          >
            <EstCardHome data={item} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
export default Search;
