import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import styles from "./styles.js";

import { AntDesign } from "@expo/vector-icons";

import Api from "../../Api";

import { FilterContext } from "../../contexts/FilterContext";
const Filter = ({ navigation, route }) => {
  const { state: filter } = useContext(FilterContext);
  const { dispatch: filterDispatch } = useContext(FilterContext);
  const [star1, setStar1] = useState(false);
  const [star2, setStar2] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star4, setStar4] = useState(false);
  const [star5, setStar5] = useState(false);
  const [category, setCategory] = useState([]);
  const [itemSelected, setItemSelected] = useState(null);
  const [idcat, setIdcat] = useState("");
  const [rates, setRates] = useState(0);
  const [loading, setLoading] = useState(true)

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


  const handleClear = () => {
    filterDispatch({
      type: "setRate",
      payload: {
        rate: 0,
      },
    });
    filterDispatch({
      type: "setCategory",
      payload: {
        category: "",
      },
    });
    filterDispatch({
      type: "setItem",
      payload: {
        item: null,
      },
    });
    setStar1(false);
    setStar2(false);
    setStar3(false);
    setStar4(false);
    setStar5(false);
    setItemSelected(null)
    setIdcat("")
  }


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
    let category = idcat
    let item = itemSelected
    console.log(rat, category, item)

    filterDispatch({
      type: "setRate",
      payload: {
        rate: rat,
      },
    });
    filterDispatch({
      type: "setCategory",
      payload: {
        category: category,
      },
    });
    filterDispatch({
      type: "setItem",
      payload: {
        item: item,
      },
    });
    //console.log(filter);
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
      setLoading(true)
      try {
        const response = await Api.getCategories();
        setCategory(response);
        setItemSelected(filter.item);
        setIdcat(filter.category)
        const rat = filter.rate
        if (rat == 5) {
          setStar1(true);
          setStar5(true);
          setStar4(true);
          setStar3(true);
          setStar2(true);
        }
        if (rat == 4) {
          setStar1(true);
          setStar5(false);
          setStar4(true);
          setStar3(true);
          setStar2(true);
        }
        if (rat == 3) {
          setStar1(true);
          setStar5(false);
          setStar4(false);
          setStar3(true);
          setStar2(true);
        }
        if (rat == 2) {
          setStar1(true);
          setStar5(false);
          setStar4(false);
          setStar3(false);
          setStar2(true);
        }
        if (rat == 1) {
          setStar1(true);
          setStar5(false);
          setStar4(false);
          setStar3(false);
          setStar2(false);
        }
        if (rat == 5) {
          setStar1(!star1);
          setStar5(false);
          setStar4(false);
          setStar3(false);
          setStar2(false);
        }
        setLoading(false)
      }
      catch (error) {
        console.log(error.message)
        setLoading(false)
      }
    };
    getCategorys();
  }, []);

  return (
    <>
      {
        loading ? (
          <View style={{ flex: 1, backgroundColor: "#fff" }}>

          </View>
        ) : (

          <>


            <ScrollView style={styles.Scroll}>
              <View style={styles.Container}>
                <View style={styles.Header}>
                  <TouchableOpacity>
                    <AntDesign name="arrowleft" size={30} color="#222455" />
                  </TouchableOpacity>
                  <Text style={styles.HeaderText}>Filter</Text>
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
              <TouchableOpacity style={styles.Button} onPress={handleClear}>
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
        )

      }

    </>
  );
};

export default Filter;
