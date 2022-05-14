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
  Container: {
    padding: 15,
    height: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
  SearchArea: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
  },
  SearchInput: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    fontFamily: "NotoSans_400Regular",
    color: "#222455",
  },
  CardTop: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  CardTopTextMessage: {
    fontSize: 18,
    fontFamily: "NotoSans_700Bold",
    color: "#222455",
  },
  SeeAll: {
    fontSize: 12,
    fontFamily: "NotoSans_700Bold",
    color: "#222455",
    color: "#B0C4DE",
  },

  CategoryCard: { width: 100, height: 100, borderRadius: 10 },
  TopMessage: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
    padding: 10,
  },
  TopMessageText: {
    fontSize: 25,
    color: "#A0A0A0",
    flex: 1,
    flexWrap: "wrap",
  },
  TopMessageIcon: {
    marginTop: 5,
  },
});
export default Styles;
