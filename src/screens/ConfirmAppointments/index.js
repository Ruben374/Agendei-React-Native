import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Modal,
  Alert
} from "react-native";
import moment from "moment";
import styles from "./styles.js";
import { Calendar } from "react-native-calendars";
import { UserContext } from "../../contexts/UserContext";
import Api from "../../Api";

const ConfirmAppointments = ({ state, route }) => {
  const { state: user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  var data = new Date();
  var dia = String(data.getDate()).padStart(2, "0");
  var mes = String(data.getMonth() + 1).padStart(2, "0");
  var ano = data.getFullYear();
  const dataAtual = ano + "-" + mes + "-" + dia;
  const minDate = ano + "-" + mes + "-" + dia - 1;
  const [selectedDate, setSelectedDate] = useState(dataAtual);
  const [horariosAgendados, setHorariosAgendados] = useState([]);
  const [service, setService] = useState([]);
  const [serviceHorarios, setServiceHorarios] = useState([]);
  const [hourItemSelected, setHourItemSelected] = useState(null);
  const [hour, setHour] = useState("");
  const [appointmentsList, setAppointmentsList] = useState([]);
  const [horariosIndisponiveis, setHorariosIndisponiveis] = useState([]);
  const [serviceAppointments, setServiceAppointments] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [ut, setUt] = useState(false)
  const diasUteis = route.params.uteis





  const handleHourItemPress = (hour, index) => {
    if (index == hourItemSelected) {
      setHourItemSelected();
      setHour("");
    } else {
      setHourItemSelected(index);
      setHour(hour);
    }
  };
  const handleConfirmAppointment = async () => {
    const d = new Date()
    const date = selectedDate + ":" + hour;
    const client = {
      name: user.name,
      email: user.email,
    };
    const service = {
      id: route.params.item._id,
      name: route.params.item.name,
      preco: route.params.item.preco,
      est: route.params.item.est,
    };
    console.log(service);
    console.log(client);
    console.log(date)

    try {
      const response = await Api.SetAppointments(client, service, date);
      if (response.status == 201) {
        getServices() 
        Alert.alert('Agendamento', `Serviço agendado`, [
          { text: 'OK'},
        ]);
      }
    } catch (error) {
      alert(error.message);
    }

  };

  const onDayPress = (day) => {
    setHourItemSelected();
    setHour("");
    const dat = new Date(day.dateString)
    //console.log(dat.getDay())
    if (diasUteis.includes(dat.getDay())) {
      setUt(true)
    }
    else {
      setUt(false)
    }
    setSelectedDate(day.dateString);
    getAppointmentsDate(day.dateString);

  };
  const getAppointmentsDate = async (date) => {
    console.log(date);
    let dat = new Date(date);
    var dia = String(dat.getDate()).padStart(2, "0");
    var mes = String(dat.getMonth() + 1).padStart(2, "0");
    var ano = dat.getFullYear();
    let dataAtual = ano + "-" + mes + "-" + dia;
    //console.log(serviceAppointments);
    let h = [];
    for (let i = 0; i < serviceAppointments.length; ++i) {
      let df = new Date(serviceAppointments[i].date);
      // console.log(typeof df);
      var d = String(df.getDate()).padStart(2, "0");
      var m = String(df.getMonth() + 1).padStart(2, "0");
      var a = dat.getFullYear();
      let da = a + "-" + m + "-" + d;

      if (da == dataAtual) {
        console.log("bateu");
        const hora = df.getHours();
        const min = df.getMinutes();
        let x = hora + ":" + min;
        if (min == 0) {
          x = x + 0;
        }
        console.log(x);

        h.push(x);
      } else {
        console.log("n bateu");
      }
    }
    console.log(h)
    setHorariosIndisponiveis(h);
  };


  const getServices = async () => {
    //setLoading(true)
    try {
      /* const date = new Date() */
      if (diasUteis.includes(data.getDay())) {
        setUt(true)
      }
      const response = await Api.getAppointmentsByServiceId(route.params.item._id);
      //console.log(response)
      setServiceAppointments(response.agendamentos);
      let dat = new Date(selectedDate);
      var dia = String(dat.getDate()).padStart(2, "0");
      var mes = String(dat.getMonth() + 1).padStart(2, "0");
      var ano = dat.getFullYear();
      let dataAtual = ano + "-" + mes + "-" + dia;
      //console.log(serviceAppointments);
      let h = [];
      for (let i = 0; i < response.agendamentos.length; ++i) {
        let df = new Date(response.agendamentos[i].date);
        // console.log(typeof df);
        var d = String(df.getDate()).padStart(2, "0");
        var m = String(df.getMonth() + 1).padStart(2, "0");
        var a = dat.getFullYear();
        let da = a + "-" + m + "-" + d;

        if (da == dataAtual) {
          console.log("bateu");
          const hora = df.getHours();
          const min = df.getMinutes();
          let x = hora + ":" + min;
          if (min == 0) {
            x = x + 0;
          }
          console.log(x);

          h.push(x);
        } else {
          console.log("n bateu");
        }
      }
      console.log(h)
      setHorariosIndisponiveis(h);
      //setLoading(false)
    } catch (error) {
      alert(error.message);
    }
  };


  useEffect(() => {
    setLoading(true)
    getServices();
    setLoading(false)
  }, []);


  const Confirm = () => {
    if (hour.trim() == "") {
      alert("Por favor selecione um horario")
      return false
    }
    const d = new Date()
    if (selectedDate == dataAtual) {
      const hora1 = hour.split(':')
      var varData = new Date();
      ["setHours", "setMinutes"].forEach(function (fn, i) {
        return varData[fn](hora1[i]);
      });
      if (d > varData) {
        alert("boy muda so a hora yhea")
        return false
      }
    }

    Alert.alert('Confirmar Reserva', `Confirmar ${route.params.item.name} em ${route.params.item.est.name} as ${hour}?`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => handleConfirmAppointment() },
    ]);

  }



  return (
    <ScrollView style={styles.s}>
      {
        loading ? (
          <></>
        ) : (
          <View style={styles.Container}>
            <Calendar
              minDate={dataAtual.toString()}
              style={{ width: "100%" }}
              onDayPress={(day) => {
                onDayPress(day);
              }}
              markedDates={{ [selectedDate]: { selected: true,selectedColor: '#5663ff' } }}
            />
            <Text style={styles.HourItemTitle}>
              Horarios disponiveis para {selectedDate}:
            </Text>
            {ut ? (
              horariosIndisponiveis &&
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={route.params.item.horarios}
                style={{ width: "100%" }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <View>
                    {horariosIndisponiveis.includes(item) ? (
                      <View
                        style={{ marginLeft: index == 0 ? 20 : 0, marginRight: 10 }}
                      >
                        <View>
                          <View
                            style={{
                              paddingVertical: 10,
                              paddingHorizontal: 20,
                              backgroundColor: "red",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 10,
                              borderWidth: 1,
                              borderColor: "red",
                            }}
                          >
                            <Text style={{ fontSize: 20, color: "#fff" }}>
                              {item}
                            </Text>
                          </View>
                        </View>
                      </View>
                    ) : (
                      <TouchableOpacity
                        onPress={() => handleHourItemPress(item, index)}
                        style={{ marginLeft: index == 0 ? 20 : 0, marginRight: 10 }}
                      >
                        <View
                          style={
                            hourItemSelected == index
                              ? styles.HourItemSelected
                              : styles.HourItem
                          }
                        >
                          <Text
                            style={
                              hourItemSelected == index
                                ? styles.HourItemTextSelected
                                : styles.HourItemText
                            }
                          >
                            {item}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    )}
                  </View>
                )}
              />
            ) : (
              <View style={{ width: "100%", height: 50, alignItems: "center", justifyContent: "center" }}>
                <Text style={{
                  fontSize: 15,
                  color: "#222455",
                  fontFamily: "NotoSans_700Bold",
                }}>
                  Agendamentos Indisponiveis Para esta Data
                </Text>
              </View>

            )}

            <TouchableOpacity
              style={styles.AppointmentButton}
              onPress={Confirm}
            >
              <Text style={styles.AppointmentButtonText}>Confirmar Reserva</Text>
            </TouchableOpacity>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text>Confirmar agenda</Text>
                  <TouchableOpacity style={styles.ModalButton}>
                    <Text style={styles.ModalButtonText}>Confirmar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>

        )
      }
    </ScrollView>
  );
};

export default ConfirmAppointments;

