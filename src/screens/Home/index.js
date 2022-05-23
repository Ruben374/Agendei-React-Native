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

import styles from "./styles.js";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Api from "../../Api";
import { useIsFocused } from "@react-navigation/native";

import { Card } from "react-native-shadow-cards";
import { Ionicons } from "@expo/vector-icons";
import { EstContext } from "../../contexts/EstContext";
import EstCardHome from "../../components/EstCardHome";
import CategoryCard from "../../components/CategoryCard";
import Categorys from "../Categorys/index.js";

let vetor = [1, 2, 3, 4];

const Home = ({ navigation }) => {
  const { state: est } = useContext(EstContext);

  const { dispatch: estDispatch } = useContext(EstContext);
  // const { dispatch: userDispatch } = useContext(UserContext);
  const isFocused = useIsFocused();
  const [estList, setEstList] = useState([]);
  const [estTopRates, setEstTopRates] = useState([]);
  const [categorys, setCategorys] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const [busca, setBusca] = useState([]);
  const [loading, setLoading] = useState(false)

  const getEst = async () => {
    const response = await Api.getEst(route.params.id);
    setEstList(response);
  };

  const Search = async () => {
    const lowerbusca = searchValue.toLowerCase();
    setBusca(
      estList.filter((list) => list.name.toLowerCase().includes(lowerbusca))
    );
  };

  const getEstForCat = async (id, name) => {
    const response = await Api.getEst(id);
    navigation.navigate("Search", { data: response, title: name });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        //console.log(est.search);
        const res = await Api.getAllEst();
        const getCategorys = await Api.getCategories();
        //console.log(getCategorys);
        setCategorys(getCategorys);
        estDispatch({
          type: "setEst",
          payload: {
            est: res.est,
          },
        });
        estDispatch({
          type: "setRate",
          payload: {
            topRate: res.rates,
          },
        });
        let b = [];
        let c = [];
        if (est.search.rat > -1 && est.search.category) {
          for (let i = 0; i <= res.est.length - 1; i++) {
            if (
              res.est[i].ratingmedia >= est.search.rat &&
              est.search.category == res.est[i].category._id
            ) {
              b.push(res.est[i]);
            }
          }
          console.log(b.length);
          setEstList(b);
        } else if (est.search.rat > -1) {
          console.log("so tem rat");
          for (let i = 0; i <= res.est.length - 1; i++) {
            if (res.est[i].ratingmedia >= est.search.rat) {
              b.push(res.est[i]);
            }
          }
          console.log(b.length);
          setEstList(b);
        } else {
          console.log("n peguei dois");
          setEstList(res.est);
        }
        setEstTopRates(res.rates);
        setLoading(false)
      }
      catch (error) {
        console.log(error.message)
      }
    };

    getData();
  }, [isFocused]);

  return (

    <>
      {loading ? (
        <View style={{ flex: 1, backgroundColor: "#ffff", alignItems: "center", justifyContent: "center" }}>
          <Image
            style={{ width: 300, height: 200 }}
            source={{ uri: 'https://cdn.dribbble.com/users/935167/screenshots/2896660/project-loader-colors.gif' }} />
        </View>
      )
        : (
          <ScrollView style={styles.Scroll}>
            <View style={styles.Container}>
              <Card style={styles.SearchArea} elevation={5} opacity={2}>
                <FontAwesome name="search" size={24} color="#222455" />
                <TextInput
                  style={styles.SearchInput}
                  placeholder="Encontre estabelecimentos"
                  placeholderTextColor="#B0C4DE"
                  value={searchValue}
                  onChangeText={(text) => {
                    setSearchValue(text);
                    Search();
                  }}
                />

                {searchValue.trim() == "" ? (
                  <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
                    <AntDesign name="filter" size={24} color="#222455" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setSearchValue("")}>
                    <AntDesign name="closecircleo" size={24} color="#222455" />
                  </TouchableOpacity>
                )}
              </Card>
              {searchValue.trim() == "" ? (
                <View>
                  <View style={styles.CardTop}>
                    <Text style={styles.CardTopTextMessage}>
                      Estabelecimentos em alta
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("Search", {
                          data: estTopRates,
                          title: "Estabelecimentos em Alta",
                        })
                      }
                    >
                      <Text style={styles.SeeAll}>
                        ver todos({estTopRates.length})
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <FlatList
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      style={styles.lista}
                      data={estTopRates}
                      renderItem={({ item, index }) => (
                        <TouchableOpacity
                          style={{ marginRight: 20, marginLeft: index == 0 ? 5 : 0 }}
                          key={index}
                          onPress={() => navigation.navigate("Est", { id: item._id })}
                        >
                          <Card>
                            <EstCardHome data={item} />
                          </Card>

                        </TouchableOpacity>
                      )}
                      keyExtractor={(item, index) => index.toString()}
                    />
                  </View>
                  <View style={styles.CardTop}>
                    <Text style={styles.CardTopTextMessage}>Categorias</Text>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("Categorys", { data: categorys })
                      }
                    >
                      <Text style={styles.SeeAll}>ver todos({categorys.length})</Text>
                    </TouchableOpacity>
                  </View>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={categorys}
                    renderItem={({ item, index }) => (
                      <TouchableOpacity
                        style={{ marginRight: 20, marginTop: 20 }}
                        key={index}
                        onPress={() => getEstForCat(item._id, item.name)}
                      >
                        <CategoryCard data={item} />
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              ) : (
                <View>
                  {busca.map((item, key) => (
                    <TouchableOpacity
                      key={key}
                      style={{ marginTop: 30, alignItems: "center" }}
                      onPress={() => navigation.navigate("Est", { id: item._id })}
                    >
                      <EstCardHome data={item} />
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          </ScrollView>
        )
      }
    </>

  );
};
export default Home;
