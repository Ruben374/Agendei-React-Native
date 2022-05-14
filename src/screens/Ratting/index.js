import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles.js";
import Api from "../../Api";
const Rating = ({ route }) => {
  const [star1, setStar1] = useState(false);
  const [star2, setStar2] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star4, setStar4] = useState(false);
  const [star5, setStar5] = useState(false);
  const [RATE, setRATE] = useState(0);
  const [edit, setEdit] = useState(false);
  const ratting = async () => {
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
    setRATE(rat);
    if (edit) {
      try {
        const response = await Api.UploadRate(
          route.params.userId,
          route.params.estId,
          rat
        );
        console.log(response);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      try {
        console.log(route.params.userId, route.params.estId, rat);
        const response = await Api.Ratting(
          route.params.userId,
          route.params.estId,
          rat
        );
        console.log(response);
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  const Verify = async () => {
    const response = await Api.VerifyRate(
      route.params.userId,
      route.params.estId
    );
    if (response.status == 200) {
      setEdit(true);
      setRATE(Math.trunc(response.rating));
      if (Math.trunc(response.rating) == 5) {
        setStar1(true);
        setStar5(true);
        setStar4(true);
        setStar3(true);
        setStar2(true);
      }
      if (Math.trunc(response.rating) == 4) {
        setStar1(true);
        setStar4(true);
        setStar3(true);
        setStar2(true);
      }
      if (Math.trunc(response.rating) == 3) {
        setStar1(true);

        setStar3(true);
        setStar2(true);
      }
      if (Math.trunc(response.rating) == 2) {
        setStar1(true);
        setStar2(true);
      }
      if (Math.trunc(response.rating) == 1) {
        setStar1(true);
      }
    }
    /* if(response.status==404){
      
    }
    */
    //console.log(response)
  };
  /*   useEffect(() => {
    Verify()
  }, []) */

  return (
    <>
      <ScrollView style={styles.Scroll}>
        <View style={styles.Container}>
          <View style={styles.Header}>
            <TouchableOpacity>
              <AntDesign name="arrowleft" size={30} color="#222455" />
            </TouchableOpacity>
            <Text style={styles.HeaderText}>Avaliações & Estrelas</Text>
            <TouchableOpacity>
              <AntDesign name="close" size={30} color="#222455" />
            </TouchableOpacity>
          </View>
          <View style={styles.Body}>
            <View style={styles.StarContainer}>
              <TouchableOpacity>
                <AntDesign name="star" size={40} color="#6e7faa" />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="star" size={40} color="#6e7faa" />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="star" size={40} color="#6e7faa" />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="star" size={40} color="#6e7faa" />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="star" size={40} color="#6e7faa" />
              </TouchableOpacity>
            </View>
            <View style={styles.RattingTextView}>
              <Text style={styles.RattingText}>Avalie Sua experiência</Text>
            </View>
            <View style={styles.InputArea}>
              <TextInput
                multiline={true}
                maxLength={100}
                placeholder="Escreva a sua experiência"
                placeholderTextColor=""
                style={{
                  textAlignVertical: "top",
                  fontFamily: "NotoSans_400Regular",
                  color: "#222455",
                  fontSize: 18,
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.RattingBtn}
        onPress={() => navigation.navigate("Ratting")}
      >
        <Text style={styles.RattingText}>Guardar</Text>
      </TouchableOpacity>
    </>
  );
};
export default Rating;

{
  /*
   <View style={styles.StarContainer}>
        <TouchableOpacity
          onPress={() => {
            setStar1(!star1)
            setStar5(false)
            setStar4(false)
            setStar3(false)
            setStar2(false)
          }}
        >
          {star1 ? (
            <Ionicons name='star' size={50} color='yellow' />
          ) : (
            <Ionicons name='star-outline' size={50} color='black' />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (!star1) {
              setStar1(!star1)
              setStar2(!star2)
            } else {
              setStar5(false)
              setStar4(false)
              setStar3(false)
              setStar2(!star2)
            }
          }}
        >
          {star2 ? (
            <Ionicons name='star' size={50} color='yellow' />
          ) : (
            <Ionicons name='star-outline' size={50} color='black' />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setStar1(true)
            setStar2(true)
            setStar3(!star3)
            setStar4(false)
            setStar5(false)
          }}
        >
          {star3 ? (
            <Ionicons name='star' size={50} color='yellow' />
          ) : (
            <Ionicons name='star-outline' size={50} color='black' />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setStar1(true)
            setStar2(true)
            setStar3(true)
            setStar4(!star4)
            setStar5(false)
          }}
        >
          {star4 ? (
            <Ionicons name='star' size={50} color='yellow' />
          ) : (
            <Ionicons name='star-outline' size={50} color='black' />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setStar1(true)
            setStar2(true)
            setStar3(true)
            setStar4(true)
            setStar5(!star5)
          }}
        >
          {star5 ? (
            <Ionicons name='star' size={50} color='yellow' />
          ) : (
            <Ionicons name='star-outline' size={50} color='black' />
          )}
        </TouchableOpacity>
      </View>
     
  */
}