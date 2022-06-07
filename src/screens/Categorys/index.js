import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground,

} from "react-native";

import styles from "./styles.js";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Api from "../../Api";
import { useIsFocused } from "@react-navigation/native";
import { Card } from "react-native-shadow-cards";

import { BlurView } from "expo-blur";

import Config from "../../config/Api.config.js";

const Categorys = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const [catList, setCatEstList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [busca, setBusca] = useState([]);
  const getEstForCat = async (id, name) => {
    const response = await Api.getEst(id);
    navigation.navigate("Search", { data: response, title: name });
  };

  const lowerbusca = searchValue.toLowerCase();
  const filtro = catList.filter((list) =>
    list.name.toLowerCase().includes(lowerbusca)
  );

  const getEst = async () => {
    const response = await Api.getEst(route.params.id);
    setEstList(response);
  };
  useEffect(() => {
    const setcat = () => {
      setCatEstList(route.params.data);
      setBusca(route.params.data);
    };
    setcat();
  }, [isFocused]);

  return (
    <ScrollView style={styles.Scroll}>
      <View style={styles.Container}>
        <View style={styles.Header}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="#222455" />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>Categorias</Text>
        </View>
        <Card style={styles.SearchArea} elevation={5} opacity={2}>
          <FontAwesome name="search" size={24} color="#222455" />
          <TextInput
            style={styles.SearchInput}
            placeholder="Pesquisar"
            placeholderTextColor="#B0C4DE"
            value={searchValue}
            onChangeText={(text) => {
              setSearchValue(text);
            }}
          />
          <TouchableOpacity onPress={() => setSearchValue("")}>
            <AntDesign name="closecircleo" size={24} color="#222455" />
          </TouchableOpacity>
        </Card>
        {filtro.map((item, key) => (
          <TouchableOpacity
            style={styles.CardCategoryContent}
            key={key}
            onPress={() => {
              getEstForCat(item._id, item.name);
            }}
          >
            <ImageBackground
              source={{
                uri: `${Config.url}/${item.image}`,
              }}
              style={styles.CategoryCard}
              imageStyle={{ borderRadius: 10, opacity: 0.5 }}
            >
              <BlurView style={styles.HeroContent} intensity={10} tint="light">
                <Text style={styles.CategoryCardText}>{item.name}</Text>
              </BlurView>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
export default Categorys;
