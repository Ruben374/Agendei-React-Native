import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  s: {
    flex: 1,
    backgroundColor: "#fff",
  },

  Container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  Title: {
    flexWrap: "wrap",
    fontSize: 25,
    fontFamily: "NotoSans_700Bold",
    color: "#222455",
  },
  AppointmentsCard: {
    width: "100%",
    padding: 10,
  },
  ServicesName: {
    width: "100%",
    flexWrap: "wrap",
    fontFamily: "NotoSans_700Bold",
    color: "#222455",
    fontSize: 20,
  },
  EstName: {
    marginBottom: 10,
    fontSize: 15,
    width: "100%",
    flexWrap: "wrap",
    fontFamily: "NotoSans_700Bold",
    color: "#222455",
  },

  AppointmentsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  AppointmentsItems: {
    flexDirection: "row",
    alignItems: "center",
  },
  AppointmentsItemsText: {
    paddingHorizontal: 5,
    flexWrap: "wrap",
    fontFamily: "NotoSans_700Bold",
    color: "#222455",
  },
  AppointmentsButtons: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  AppointmentsButton1: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#5663ff",
    elevation: 5,
  },
  AppointmentsButton2: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#E7362B",
    elevation: 5,
  },
  AppointmentsButtonText: {
    color: "#fff",
    fontFamily: "NotoSans_700Bold",
  },
});

export default Styles;
