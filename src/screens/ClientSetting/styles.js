import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  lista: {
    marginTop: 10,
    height: 250,
  },
  Scroll: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  HeaderText: {
    fontSize: 20,
    fontFamily: "NotoSans_700Bold",
    color: "#222455",
  },
  HeaderIcon: {},
  Container: {
    height: "100%",
    flex: 1,
  },
  SectionTitle: {
    width: "100%",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "#C0C0C0",
  },
  SectionTitleText: {
    fontSize: 14,
    fontFamily: "NotoSans_700Bold",
    color: "#222455",
    opacity:0.6
  },
  Option: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,

    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  OptionText: {
    fontSize: 15,
    fontFamily: "NotoSans_700Bold",
    color: "#222455",
  },
  OptionTextLogout: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5663ff",
  },
});
export default Styles;
