import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  Scroll: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Container: {
    padding: 15,
    height: "100%",
    flex: 1,
  },
  Header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderText: {
    fontSize: 20,
    fontFamily: "NotoSans_700Bold",
    color:"#222455"
  },
  HeaderBtnCancel: {
    color: "red",
    fontSize: 17,
    fontWeight: "bold",
  },
  FormArea: {
    width: "100%",
    marginTop: 40,
    alignItems: "center",
    padding: 10,
    marginTop: 50,
  },
  ViewInput: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor:"#A9A9A9"
  },

  TextInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    fontFamily: "NotoSans_700Bold",
    color:"#696969"
  },
  UpdateButton: {
    width: "100%",
    padding: 15,
    backgroundColor: "#5663ff",
    alignItems: "center",
    justifyContent: "center",
    marginTop:50,
    borderRadius:10
  },
  UpdateButtonText: {
    fontSize: 18,
    fontFamily: "NotoSans_700Bold",
    color: "#fff",

  },
});
export default Styles;
