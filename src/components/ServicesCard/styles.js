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
    width:"35%",
    marginLeft:10,
    alignItems:"center",
    justifyContent:"center"
  },
  CardButtonText: {
    color: "#fff",
   fontFamily:"NotoSans_700Bold",
    fontSize: 14,

  },
  ServiceName: {
    color: "#A0A0A0",
    fontSize: 18,
    flex: 1,
    flexWrap: "wrap",
    fontFamily:"NotoSans_700Bold",
  },
  ServicePrice: {
    fontSize: 14,
    flex: 1,
    flexWrap: "wrap",
    color: "#222455",
    fontFamily:"NotoSans_700Bold",
  },
});

export default Styles;
