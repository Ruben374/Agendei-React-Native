import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles.js";
import Api from "../../Api";
import { UserContext } from "../../contexts/UserContext";
const Rating = ({ navigation,route }) => {
  const { state: user } = useContext(UserContext);
  const [star1, setStar1] = useState(false);
  const [star2, setStar2] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star4, setStar4] = useState(false);
  const [star5, setStar5] = useState(false);
  const [loading, setLoading] = useState(false);
  const [RATE, setRATE] = useState(0);
  const [rat, setRat] = useState();
  const [R, setR] = useState();
  const [edit, setEdit] = useState(false);
  const [comment, setComment] = useState("");
  const rating = async () => {
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
        const response = await Api.UpdateRate(
          R._id,
          route.params.id,
          rat,
          comment
        );
        Alert.alert('', `Avaliação enviada!`, [
          { text: 'OK' },
        ]);
        getRate()
      } catch (error) {
        console.log(error.message);
      }
    } else {
      if (comment.trim() == "") {
        alert("Preencha o campo comment")
        return false
      }
      try {
        // console.log(route.params.userId, route.params.estId, rat);
        const est = {
          id: route.params.id,
        }
        const client = {
          email: user.email,
          avatar: user.avatar,
          name: user.name
        }
        const response = await Api.Ratting(
          client, est, rat, comment
        );
        Alert.alert('', `Avaliação enviada!`, [
          { text: 'OK' },
        ]);
        getRate()
      } catch (error) {
        console.log(error.message);
      }
    }
  };


  const getRate = async () => {
    setLoading(true)
    try {
      const response = await Api.VerifyRate(user.email, route.params.id)
      console.log(response)
      if (response.status == 200) {
        setComment(response.rating.comment)
        //console.log(response.rating)
        setR(response.rating)
        setEdit(true);
        setRATE(Math.trunc(response.rating.rate));
        if (Math.trunc(response.rating.rate) == 5) {
          setStar1(true);
          setStar5(true);
          setStar4(true);
          setStar3(true);
          setStar2(true);
        }
        if (Math.trunc(response.rating.rate) == 4) {
          setStar1(true);
          setStar4(true);
          setStar3(true);
          setStar2(true);
        }
        if (Math.trunc(response.rating.rate) == 3) {
          setStar1(true);

          setStar3(true);
          setStar2(true);
        }
        if (Math.trunc(response.rating.rate) == 2) {
          setStar1(true);
          setStar2(true);
        }
        if (Math.trunc(response.rating.rate) == 1) {
          setStar1(true);
        }
      }
      else {
        setEdit(false);

      }
      setLoading(false)
    }
    catch (error) {
      alert(error.message)
      console.log(error.message)
    }
  }



  useEffect(() => {
    getRate()
  }, [])

  return (

    <>
      {
        loading ? (
          <></>
        ) : (
          <>
            <ScrollView style={styles.Scroll}>
              <View style={styles.Container}>
                <View style={styles.Header}>
                  <TouchableOpacity  onPress={()=>navigation.goBack()}>
                    <AntDesign name="arrowleft" size={30} color="#222455" />
                  </TouchableOpacity>
                  <Text style={styles.HeaderText}>Avaliações & Estrelas</Text>

                </View>
                <View style={styles.Body}>
                  <View style={styles.StarContainer}>
                    <TouchableOpacity
                      onPress={() => {
                        setStar1(!star1);
                        setStar5(false);
                        setStar4(false);
                        setStar3(false);
                        setStar2(false);
                      }}

                    >
                      <AntDesign name="star" size={40} color={star1 ? "yellow" : "#6e7faa"} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setStar1(true);
                        setStar2(!star2);
                        setStar3(false);
                        setStar4(false);
                        setStar5(false);
                      }}

                    >
                      <AntDesign name="star" size={40} color={star2 ? "yellow" : "#6e7faa"} />
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
                      <AntDesign name="star" size={40} color={star3 ? "yellow" : "#6e7faa"} />
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
                      <AntDesign name="star" size={40} color={star4 ? "yellow" : "#6e7faa"} />
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
                      <AntDesign name="star" size={40} color={star5 ? "yellow" : "#6e7faa"} />
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
                      placeholderTextColor="red"
                      value={comment}
                      onChangeText={(text) => setComment(text)}
                      style={{
                        textAlignVertical: "top",
                        fontFamily: "NotoSans_400Regular",
                        color: "#222455",
                        fontSize: 16,
                      }}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
            <TouchableOpacity
              style={styles.RattingBtn}
              onPress={rating}
            >
              <Text style={styles.RattingText}>Guardar</Text>
            </TouchableOpacity>
          </>
        )
      }
    </>


  );
};
export default Rating;

