import React from "react";
import {Image} from "react-native";
import styles from "./styles.js";
import Config from "../../config/Api.config.js";

const CategoryCard = ({ data }) => {
  return (
    <Image
      style={styles.CategoryCard}
      source={{
        uri: `${Config.url}/${data.image}`,
      }}
    />
  );
  
};

export default CategoryCard;
