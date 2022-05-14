import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Modal,
} from "react-native";
import moment from "moment";
import styles from "./styles.js";
import { Calendar } from "react-native-calendars";
import { UserContext } from "../../contexts/UserContext";
import Api from "../../Api";

const ConfirmAppointments = ({ state, route }) => {
  const { state: user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  var data = new Date();
  var dia = String(data.getDate()).padStart(2, "0");
  var mes = String(data.getMonth() + 1).padStart(2, "0");
  var ano = data.getFullYear();
  const dataAtual = ano + "-" + mes + "-" + dia;
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
  let vet = [];
  var h = [];
  const hora = "12:30";
  const DATA = [
    {
      vago: false,
      hora: "10:30",
    },
    {
      vago: true,
      hora: "15:30",
    },
  ];
  /*   const estid = route.params.item.estId
  const serviceid = route.params.item._id */

  const handleHourItemPress = (hour, index) => {
    setHourItemSelected(index);
    setHour(hour);
  };
  const handleConfirmAppointment = async () => {
    //setModalVisible(true)
    const date = selectedDate + ":" + hour;
    const client = {
      name: user.name,
      email: user.email,
    };
    const service = {
      id: route.params.item._id,
    };
    console.log(service);
    console.log(client);

    try {
      const response = await Api.SetAppointments(client, service, date);
      console.log(response);
    } catch (error) {
      alert(error.message);
    }

    //console.log(hour + '\n' + serviceid + '\n' + date + '\n' + clientid + '\n' + estid)
    //console.log(horarios)
    //console.log(user.id)
  };

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    getAppointmentsDate(day.dateString);
  };
  const getAppointmentsDate = async (date) => {
    //console.log(serviceAppointments);
    let dat = new Date(date);
    var dia = String(dat.getDate()).padStart(2, "0");
    var mes = String(dat.getMonth() + 1).padStart(2, "0");
    var ano = dat.getFullYear();
    let dataAtual = ano + "-" + mes + "-" + dia;
    //console.log(typeof dat);
    let h = [];
    for (let i = 0; i < serviceAppointments.length; ++i) {
      let df = new Date(serviceAppointments[i].date);
      // console.log(typeof df);
      var d = String(df.getDate()).padStart(2, "0");
      var m = String(df.getMonth() + 1).padStart(2, "0");
      var a = dat.getFullYear();
      let da = a + "-" + m + "-" + d;

      if (da == dataAtual) {
        /* console.log(df.getHours(), df.getMinutes()); */
        const hora = df.getHours();
        const min = df.getMinutes();
        let x = hora + ":" + min;
        if (min == 0) {
          x = x + 0;
        }
        console.log(x);

        h.push(x);
      }
    }
    setHorariosIndisponiveis(h);
  };
  const getAppointments = async () => {
    setLoading(true);
    setServiceHorarios(route.params.item.horarios);
    const response = await Api.getAppointmentsByServiceId(serviceid);
    let d = [];
    d = response;
    setAppointmentsList(d);
    var h = [];
    // console.log(d)
    ///////////////////////////////
    //console.log(appointmentsList)
    const filtro = d.filter((list) => list.date == selectedDate);
    for (let i = 0; i < filtro.length; i++) {
      //console.log(filtro[i].hour)
      h.push(filtro[i].hour);
    }
    //console.log(h)
    setHorariosAgendados(h);
    setLoading(false);
    /*console.log(response[0].hour)
    filtro.map((item, key) => {
      vet.push(item.hour)
    })*/
  };

  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await Api.getServ(route.params.item._id);
        //console.log(response[0]);
        setServiceAppointments(response[0].appointments);
      } catch (error) {
        alert(error.message);
      }
    };
    getServices();
    //getAppointmentsDate(selectedDate)
  }, []);

  return (
    <ScrollView style={styles.s}>
      <View style={styles.Container}>
        <Calendar
          style={{ width: "100%" }}
          onDayPress={(day) => {
            onDayPress(day);
          }}
          markedDates={{ [selectedDate]: { selected: true } }}
        />
        <Text style={styles.HourItemTitle}>
          Horarios disponiveis para {selectedDate}:
        </Text>
        {loading ? (
          <ActivityIndicator
            size="large"
            style={{ marginTop: 40 }}
            color="#3F5D7D"
          />
        ) : (
          <FlatList
            horizontal
            data={route.params.item.horarios}
            style={{ width: "100%" }}
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
        )}

        <TouchableOpacity
          style={styles.AppointmentButton}
          onPress={handleConfirmAppointment}
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
    </ScrollView>
  );
};

export default ConfirmAppointments;

/* const request = async () => {
      try {
        const response = await Api.getServ(serviceId)
      } catch (error) {
        alert(error.message)
      }
    }
    //request()
    for (let i in route.params && route.params.horarios) {
      horar.push(route.params && route.params.horarios[i])
    }
    console.log(horar)
  */
/*  {serviceHorarios.includes(item) ? (
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
    ) : (
      <View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            borderWidth: 1,
          }}
        >
          <Text>{item}</Text>
        </View>
      </View>
    )}*/
