import React from "react";
import { View, Text, ImageBackground } from "react-native";

import styles from "./styles.js";

import { Card } from "react-native-shadow-cards";
import { Ionicons } from "@expo/vector-icons";
import Config from "../../config/Api.config.js";

const EstCardHome = ({ data }) => {
  return (
    <Card style={styles.Card} elevation={12}>
      <View>
        <ImageBackground
          style={styles.CardContentTop}
          source={{
            uri: `${Config.url}/${data.img}`,
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
              <Text style={styles.EstName}>{data.name}</Text>
              <Text style={styles.EstCategory}>{data.category.name}</Text>
            </View>
            <View style={styles.CardContentBottomAddress}>
              <Text style={styles.EstAddress}>{data.address}</Text>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
};
export default EstCardHome;
