import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles.js";
import { FontAwesome } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import EstCardHome from "../../components/EstCardHome";
import { UserContext } from "../../contexts/UserContext";
const Favorites = ({ navigation, route }) => {
  const { state: user } = useContext(UserContext);
  const isFocused = useIsFocused();

  const [list, setList] = useState(user.favorites);

  useEffect(() => {
    console.log(user.favorites.length)
    setList(user.favorites)
  }, [isFocused])

  return (
    <ScrollView style={styles.Scroll}>
      <View style={styles.Container}>
        <View style={styles.Header}>
          <Text style={styles.HeaderText}>Meus Favoritos</Text>
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
