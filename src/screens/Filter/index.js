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
import { EstContext } from "../../contexts/EstContext";

let vetor = [1, 2, 3, 4];

const Filter = ({ navigation }) => {
  const { state: est } = useContext(EstContext);
  const { dispatch: estDispatch } = useContext(EstContext);
  const [star1, setStar1] = useState(false);
  const [star2, setStar2] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star4, setStar4] = useState(false);
  const [star5, setStar5] = useState(false);
  const isFocused = useIsFocused();
  const [category, setCategory] = useState([]);
  const [itemSelected, setItemSelected] = useState();
  const [idcat, setIdcat] = useState("");
  const [rates, setRates] = useState(0);

 

  const handleCat = async (item, key) => {
    if (key == itemSelected) {
      setItemSelected();
      setIdcat("");
    } else {
      setItemSelected(key);
      setIdcat(item._id);
    }

    console.log(key);
  };

  const handleApply = async () => {
    let rat = 0;
    if (star1) {
      rat++;
    }
    if (star2) {
      rat++;
    }
    if (star3) {
      rat++;
    }
    if (star4) {
      rat++;
    }
    if (star5) {
      rat++;
    }
    const filter = {
      rat,
      category: idcat,
      item: itemSelected,
    };

    estDispatch({
      type: "setSearch",
      payload: {
        search: filter,
      },
    });
    console.log(filter);
  };
  const getEst = async () => {
    setEstList(response);
  };

  let search = {
    category: "",
    rating: "",
  };
  useEffect(() => {
    const getCategorys = async () => {
      const response = await Api.getCategories();
      setCategory(response);
      if (est.search) {
        setItemSelected(est.search.item);
        setIdcat(est.search.category)
        const rat=est.search.rat
        if(rat==5){
          setStar1(true);
          setStar5(true);
          setStar4(true);
          setStar3(true);
          setStar2(true);
        }
        if(rat==4){
          setStar1(true);
          setStar5(false);
          setStar4(true);
          setStar3(true);
          setStar2(true);
        }
        if(rat==3){
          setStar1(true);
          setStar5(false);
          setStar4(false);
          setStar3(true);
          setStar2(true);
        }
        if(rat==2){
          setStar1(true);
          setStar5(false);
          setStar4(false);
          setStar3(false);
          setStar2(true);
        }
        if(rat==1){
          setStar1(true);
          setStar5(false);
          setStar4(false);
          setStar3(false);
          setStar2(false);
        }
        if(rat==5){
          setStar1(!star1);
          setStar5(false);
          setStar4(false);
          setStar3(false);
          setStar2(false);
        }
      }
    };
    getCategorys();
  }, [isFocused]);

  return (
    <>
      <ScrollView style={styles.Scroll}>
        <View style={styles.Container}>
          <View style={styles.Header}>
            <TouchableOpacity>
              <AntDesign name="arrowleft" size={30} color="#222455" />
            </TouchableOpacity>
            <Text style={styles.HeaderText}>Filter</Text>
            <TouchableOpacity>
              <AntDesign name="close" size={30} color="#222455" />
            </TouchableOpacity>
          </View>
          <View style={styles.Title}>
            <Text style={styles.TitleText}>Selecione a categoria</Text>
          </View>
          <View style={styles.CategoryContainer}>
            {category.map((item, key) => (
              <TouchableOpacity
                onPress={() => {
                  handleCat(item, key);
                }}
                style={
                  itemSelected == key
                    ? styles.CategoryItemSelected
                    : styles.CategoryItem
                }
                key={key}
              >
                <Text style={styles.CategoryItemText}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.RatingTitle}>
            <Text style={styles.HeaderText}>Estrelas</Text>
          </View>
          <View style={styles.RatingContainer}>
            <TouchableOpacity
              onPress={() => {
                setStar1(!star1);
                setStar5(false);
                setStar4(false);
                setStar3(false);
                setStar2(false);
              }}
            >
              <AntDesign
                name="star"
                size={40}
                color={star1 ? "yellow" : "#6e7faa"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (!star1) {
                  setStar1(!star1);
                  setStar2(!star2);
                } else {
                  setStar5(false);
                  setStar4(false);
                  setStar3(false);
                  setStar2(!star2);
                }
              }}
            >
              <AntDesign
                name="star"
                size={40}
                color={star2 ? "yellow" : "#6e7faa"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setStar1(true);
                setStar2(true);
                setStar3(!star3);
                setStar4(false);
                setStar5(false);
              }}
            >
              <AntDesign
                name="star"
                size={40}
                color={star3 ? "yellow" : "#6e7faa"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setStar1(true);
                setStar2(true);
                setStar3(true);
                setStar4(!star4);
                setStar5(false);
              }}
            >
              <AntDesign
                name="star"
                size={40}
                color={star4 ? "yellow" : "#6e7faa"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setStar1(true);
                setStar2(true);
                setStar3(true);
                setStar4(true);
                setStar5(!star5);
              }}
            >
              <AntDesign
                name="star"
                size={40}
                color={star5 ? "yellow" : "#6e7faa"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.ButtonsContainer}>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>Limpar</Text>
        </TouchableOpacity>
        <View
          style={{ height: "100%", borderWidth: 0.5, borderColor: "#222455" }}
        ></View>
        <TouchableOpacity style={styles.Button} onPress={handleApply}>
          <Text style={styles.ButtonText}>Aplicar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default Filter;
