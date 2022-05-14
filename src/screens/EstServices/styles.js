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
  },
  HeaderText: {
    fontSize: 20,
    fontFamily: "NotoSans_700Bold",
    color: "#222455",
  },
  HeaderIcon: {},
  SearchArea: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,

    borderRadius: 10,
    marginTop: 5,
  },
  SearchInput: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    fontFamily: "NotoSans_400Regular",
    color: "#222455",
  },

  Container: {
    height: "100%",
    flex: 1,
    padding: 15,
  },
  CardCategoryContent: {
    width: "100%",
    height: 80,
    elevation: 5,
    borderRadius: 10,
    marginTop: 20,
  },
  CategoryCard: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  CategoryCardText: {
    fontSize: 25,
    fontFamily: "NotoSans_700Bold",
    color: "#222455",
    elevation: 15,
  },
});
export default Styles;
