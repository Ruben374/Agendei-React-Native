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

let vetor = [1, 2, 3, 4];

const Favorites = ({ navigation, route }) => {
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
          <Text style={styles.HeaderText}>Meus Favoritos</Text>
          <TouchableOpacity style={styles.HeaderIcon}>
            <FontAwesome name="search" size={30} color="#222455" />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={{ marginTop: 30, alignItems: "center" }}  onPress={()=>navigation.navigate("Est")}>
            <Card style={styles.Card} elevation={12}>
              <View>
                <ImageBackground
                  style={[{ width: "100%" }, styles.CardContentTop]}
                  source={{
                    uri: "https://cdn.shopify.com/s/files/1/0408/8473/articles/header_10-barbearias_b99bc3d5-2ed1-435e-a2ee-bf091ba5c0ac.jpg?v=1568418224",
                  }}
                >
                  <View style={styles.CardContentMessages}>
                    <View style={styles.CardContentOpenCloseMessages}>
                      <Text style={styles.CardContentOpenCloseMessagesText}>
                        ABERTO
                      </Text>
                    </View>

                    <View style={styles.CardContentRatingMessage}>
                      <Ionicons name="star" size={15} color="yellow" />
                      <Text style={{ color: "#222455", fontFamily: "NotoSans_700Bold",marginTop:3 }}>
                        4.5
                      </Text>
                    </View>
                  </View>
                </ImageBackground>

                <View style={styles.CardContentBottom}>
                  <View style={styles.CardContentBottomTop}>
                    <View style={styles.CardContentBottomName}>
                      <Text style={styles.EstName}>Catinho do corte</Text>
                      <Text style={styles.EstCategory}>Barbearia</Text>
                    </View>
                    <View style={styles.CardContentBottomAddress}>
                      <Text style={styles.EstAddress}>
                        camama, frente ao cinfo
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.CardContentBottomBottom}>
                    <Fontisto name="favorite" size={24} color="#222455" />
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default Favorites;
