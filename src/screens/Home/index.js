import React, { useEffect, useState, useContext, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import styles from "./styles.js";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Api from "../../Api";
import { useIsFocused } from "@react-navigation/native";
import { Card } from "react-native-shadow-cards";
import { EstContext } from "../../contexts/EstContext";
import { FilterContext } from "../../contexts/FilterContext";
import EstCardHome from "../../components/EstCardHome";
import CategoryCard from "../../components/CategoryCard";

const Home = ({ navigation, route }) => {
  const { state: est } = useContext(EstContext);
  const { state: filter } = useContext(FilterContext);
  const componentMounted = useRef(true);
  const isFocused = useIsFocused();
  const [estList, setEstList] = useState([]);
  const [estTopRates, setEstTopRates] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [busca, setBusca] = useState([]);
  const [loading, setLoading] = useState(true)

  const Search = async () => {
    const lowerbusca = searchValue.toLowerCase();
    setBusca(
      estList.filter((list) => list.name.toLowerCase().includes(lowerbusca))
    );
  };

  const SearchFilter = (list) => {
    let filtro = list.filter(
      (e) => e.ratingmedia >= filter.rate
    );
    if (filter.category.trim().length > 0) {
      filtro = filtro.filter(
        (e) => e.category._id == filter.category
      );
    }
    console.log(filtro.length)
    setEstList(filtro)
  }
  const getEstForCat = async (id, name) => {
    const response = await Api.getEst(id);
    navigation.navigate("Search", { data: response, title: name });
  };
  useEffect(async () => {
    let abortController = new AbortController();
    let aborted = abortController.signal.aborted; // true || false
    const getData = async () => {
      setLoading(true)
      try {
        const res = await Api.getAllEst();
        const getCategorys = await Api.getCategories();
        if (aborted == false) {
          setEstTopRates(res.rates);
          setCategorys(getCategorys);
          SearchFilter(res.est)
        }
        setLoading(false)
      }
      catch (error) {
        console.log(error.message)
        setLoading(false)
      }
    };

    getData()
    return () => {
      abortController.abort();
    };
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
                            <EstCardHome data={item} show={true} />
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
                      <EstCardHome data={item} show={true} />
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
