import React from "react";
import { View, Text, ImageBackground } from "react-native";

import styles from "./styles.js";

import { Card } from "react-native-shadow-cards";
import { Ionicons } from "@expo/vector-icons";
import Config from "../../config/Api.config.js";
import { TouchableOpacity } from "react-native-gesture-handler";

const EstCardHome = ({ data }) => {
  return (
    <View style={styles.Card}>
      <View>
        <ImageBackground
          style={styles.CardContentTop}
          source={{
            uri: `${Config.url}/${data.img}`,
          }}
        >
          <View style={styles.CardContentMessages}>
            <View style={styles.CardContentRatingMessage}>
              <Ionicons name="star" size={15} color="yellow" />
              <Text
                style={{
                  color: "#222455",
                  fontFamily: "NotoSans_700Bold",
                  marginTop: 3,
                }}
              >
                {data.ratingmedia}
              </Text>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.CardContentBottom}>
          <View style={styles.CardContentBottomTop}>
            <View style={styles.CardContentBottomName}>
              <View style={{ flexDirection: 'row' ,width:"75%",alignItems:"center",justifyContent:"center" }}>
                <Text style={styles.EstName}>{data.name}</Text>
              </View>

              <View style={{ flexDirection: 'row',width:"25%",alignItems:"center",justifyContent:"center" }}>
                <Text style={styles.EstCategory}>{data.category.name}</Text>
              </View>


            </View>
            <View style={styles.CardContentBottomAddress}>
              <Text style={styles.EstAddress}>{data.address}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default EstCardHome;
