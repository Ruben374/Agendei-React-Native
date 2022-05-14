import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
} from "react-native";
import styles from "./styles.js";

import ServicesCard from "../../components/ServicesCard";
import Api from "../../Api";
import { UserContext } from "../../contexts/UserContext";
import { BlurView } from "expo-blur";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import Config from "../../config/Api.config.js";

import Styles from "./styles.js";

const Est = ({ navigation, route }) => {
  const vetor = [1, 2, 2, 3, 3];
  const date = new Date();
  const [open, setOpen] = useState(false);
  const [horarioDeFuncionamento, setHorarioDeFuncionamento] = useState(
    "Sem horarios pro dia de hoje"
  );
  const { state: user } = useContext(UserContext);
  const [services, Setservices] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [opencloseColor, setOpencloseColor] = useState("red");
  const [modalVisible, setModalVisible] = useState(false);
  const [est, setEst] = useState([]);
  const [modalImage, setModalImage] = useState("");
  const estId = "";
  // const est = "";
  const userId = user.id;

  const openClose = (open, close) => {
    var hora1 = open.split(":");
    var hora2 = close.split(":");
    var hora3 = new Date();
    var varData = new Date();
    ["setHours", "setMinutes", "setSeconds"].forEach(function (fn, i) {
      return varData[fn](hora1[i]);
    });
    var varData2 = new Date();
    ["setHours", "setMinutes", "setSeconds"].forEach(function (fn, i) {
      return varData2[fn](hora2[i]);
    });

    if (open == "24:00" && close == "24:00") {
      return true;
    }

    if (varData >= hora3 && hora3 <= varData2) {
      return true;
    } else {
      return false;
    }
  };

  const getEst = async () => {
    try {
      const response = await Api.GetEst(route.params.id);
      //console.log(response);
      setEst(response);
      response.open_to.forEach(function (k) {
        //console.log(k.open);
        if (k.dia == date.getDay()) {
          console.log("dia bom");
          if (openClose(k.open, k.close)) {
            setOpen(true);
            setOpencloseColor("green");
          }
          setHorarioDeFuncionamento(k.open + " até " + k.close);
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getEst();
  }, []);

  const handleOnRefresh = () => {
    setRefreshing(false);
    getEst();
 
  };

  return (
    <>
      <ScrollView
        style={styles.s}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleOnRefresh} />
        }
      >
        <View style={styles.Container}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000",
              }}
            >
              <Image
                source={{
                  uri: Config.url+"/"+modalImage,
                }}
                style={{ height: 300, width: "100%" }}
              />
            </View>
          </Modal>
          <ImageBackground
            source={{
              uri: Config.url+"/"+est.img,
            }}
            style={styles.Hero}
          >
            <View style={styles.HeroButtons}>
              <TouchableOpacity>
                <AntDesign name="arrowleft" size={26} color="#222455" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.CardContentBottomBottom}>
                <Fontisto name="favorite" size={26} color="#222455" />
              </TouchableOpacity>
            </View>
            <BlurView style={styles.HeroContent} intensity={70} tint="light">
              <View
                style={{
                  width: 25,
                  height: 25,
                  backgroundColor: "#fff",
                  borderRadius: 25,
                  marginRight: 5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="phone" size={20} color="#222455" />
              </View>

              <Text style={styles.HeroContentText}>
                {est.phones_number &&
                  est.phones_number[0] + "-" + est.phones_number[1]}
              </Text>
            </BlurView>
          </ImageBackground>

          <View style={styles.ContainerInfoNameAndRating}>
            <Text style={styles.ContainerInfoTitle}>{est.name}</Text>
            <View
              style={{
                flexDirection: "row",
                width: 55,
                height: 20,
                backgroundColor: "#B0C4DE",
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#222455",
                  fontFamily: "NotoSans_400Regular",
                  paddingHorizontal: 5,
                }}
              >
                {est.ratingmedia}
              </Text>
              <Ionicons name="star" size={18} color="yellow" />
            </View>
          </View>
          <View style={styles.ContainerInfoAdress}>
            <Text style={styles.ContainerInfoAdressText}>{est.address}</Text>
          </View>

          <Text
            style={{
              fontSize: 13,
              width: "100%",
              paddingHorizontal: 10,
              color: "#222455",
              fontFamily: "NotoSans_700Bold",
            }}
          >
            <Text style={{ color: "#FF6347", fontFamily: "NotoSans_700Bold" }}>
              {open ? "Aberto agora" : "Fechado"}
            </Text>
            <Text style={{ color: "#B0C4DE" }}> hoario de funcionamento:</Text>
            <Text style={{ color: "#FF6347" }}> {horarioDeFuncionamento}</Text>
          </Text>
          <View style={styles.Photos}>
            <Text style={styles.PhotosText}>Fotos</Text>
          </View>
          <FlatList
            horizontal
            data={est.images}
            style={{ padding: 10 }}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{ marginRight: 20 }}
                key={index}
                onPress={() => {
                  setModalImage(item);
                  setModalVisible(true);
                }}
              >
                <Image
                  style={styles.CategoryCard}
                  source={{
                    uri: `${Config.url}/${item}`,
                  }}
                />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <View style={styles.Photos}>
            <Text style={styles.PhotosText}>Descrição</Text>
          </View>
          <View style={styles.ContainerDescription}>
            <Text
              style={{
                backgroundColor: "#B0C4DE",
                borderRadius: 15,
                fontSize: 15,
                padding: 10,
                color: "#222455",
                fontFamily: "NotoSans_700Bold",
                elevation: 5,
              }}
            >
              {est.description}
            </Text>
          </View>
          <View style={styles.Photos}>
            <Text style={styles.PhotosText}>Avalições e Estrelas</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("RattingsAndReviews")}
            >
              <Text style={styles.SeeAll}>Ver Todos(20)</Text>
            </TouchableOpacity>
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

          <View style={styles.Services}>
            <Text style={styles.ServicesText}>Lista de Serviços</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("EstServices", { data: est.services })
              }
            >
              <Text style={styles.SeeAll}>
                Ver Todos({est.services && est.services.length})
              </Text>
            </TouchableOpacity>
          </View>
          {loading && (
            <ActivityIndicator
              size="large"
              style={{ marginTop: 40 }}
              color="#3F5D7D"
            />
          )}
          {est.services &&
            est.services.map((item, key) => (
              <ServicesCard
                key={key}
                item={item}
                style={styles.CardContainer}
              />
            ))}
        </View>
        <View
          style={{ width: "100%", height: 80, backgroundColor: "#fff" }}
        ></View>
      </ScrollView>

      <TouchableOpacity
        style={styles.RattingBtn}
        onPress={() => navigation.navigate("Ratting")}
      >
        <Text style={styles.RattingText}>Avalie a sua experiência</Text>
      </TouchableOpacity>
    </>
  );
};

export default Est;
