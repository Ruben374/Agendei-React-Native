import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

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
  Header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderText: {
    fontSize: 20,
    fontFamily: "NotoSans_700Bold",
    color: "#222455",
  },
  Title: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  TitleText: {
    fontSize: 22,
    fontFamily: "NotoSans_700Bold",
    color: "#222455",
  },
  CategoryContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  CategoryItem: {
    marginRight: 5,
    marginTop: 20,
    width: "31%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  CategoryItemSelected: {
    marginRight: 5,
    marginTop: 20,
    width: "31%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    elevation: 5,
    borderRadius: 5,
  },

  CategoryItemText: {
    fontSize: 16,
    fontFamily: "NotoSans_700Bold",
    color: "#222455",
  },
  RatingTitle: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  RatingContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#5663ff",
    borderRadius: 10,
    marginTop: 20,
  },
  ButtonsContainer: {
    width: "100%",
    backgroundColor: "#5663ff",
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: "absolute",
    bottom: 0,
  },
  Button: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  ButtonText: {
    fontSize: 20,
    fontFamily: "NotoSans_700Bold",
    color: "#fff",
  },
});
export default Styles;
