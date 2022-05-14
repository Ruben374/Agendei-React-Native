import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  CardContainer: {
    width: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  CardInfo: {},
  CardButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#5663ff",
  },
  CardButtonText: {
    color: "#fff",
   fontFamily:"NotoSans_700Bold",
    fontSize: 15,
  },
  ServiceName: {
    color: "#A0A0A0",
    fontSize: 20,
    flex: 1,
    flexWrap: "wrap",
    fontFamily:"NotoSans_700Bold",
  },
  ServicePrice: {
    fontSize: 15,
    flex: 1,
    flexWrap: "wrap",
    color: "#222455",
    fontFamily:"NotoSans_700Bold",
  },
});

export default Styles;
