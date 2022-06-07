import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import styles from "./styles.js";

import { AntDesign } from "@expo/vector-icons";

import { useIsFocused } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

import Config from "../../config/Api.config.js";


const RattingsAndReviews = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const [rattings, setRattings] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRat = async () => {
    setLoading(true)
    setRattings(route.params.data)
    setLoading(false)
  };
  useEffect(() => {
    getRat()
  }, [])

  return (
    <ScrollView style={styles.Scroll}>
      {loading ? (
        <></>
      ) : (
        <View style={styles.Container}>
          <View style={styles.Header}>
            <TouchableOpacity  onPress={()=>navigation.goBack()}>
              <AntDesign name="arrowleft" size={30} color="#222455" />
            </TouchableOpacity>
            <Text style={styles.HeaderText}>Avaliações</Text>
          </View>
          <View style={styles.RattingAndReViewContainer}>
            {
              rattings.map((item, key) => {
                return (
                  <View key={key} style={styles.RattingAndReViewItem}>
                    <Image
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        marginRight: 10,
                      }}
                      source={{
                        uri: item.client.avatar == "" ? "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" : `${Config.url}/${item.client.avatar}`,
                      }}
                    />
                    <View style={styles.RattingAndReViewContent}>
                      <View style={styles.RattingAndReviewContentTop}>
                        <Text style={styles.RattingAndReviewName}>{item.client.name}</Text>
                        <View style={styles.RattingAndReviewStars}>
                          <Text style={styles.RattingAndReviewStarsText}>{item.rate}</Text>
                          <Ionicons name="star" size={18} color="yellow" />
                        </View>
                      </View>
                      <Text style={styles.RattingAndreviewContentBottom}>
                        {item.comment}
                      </Text>
                    </View>
                  </View>
                )
              })
            }
          </View>
        </View>

      )}
    </ScrollView>
  );
};
export default RattingsAndReviews;
