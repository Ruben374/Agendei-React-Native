import { processFontFamily } from "expo-font";
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

  Title: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    
  },
  TitleText: {
    fontSize: 24,
    fontFamily: "NotoSans_700Bold",
    color:"#222455"
  },
  ScreenName: {
    padding: 10,
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  NameContent: {
    width: "100%",
    marginTop: 30,
    alignItems: "center",
    
  },
  NameText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily:"NotoSans_400Regular",
    color:"#222455"
  },
  EmailText: {
    fontSize: 15,
    fontFamily: "NotoSans_700Bold",
    color:"#222455"
  },

  Buttons: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "space-between",
  },
  ButtonEdit: {
    width: "40%",
    height: 60,
    backgroundColor: "#5663ff",
    borderRadius: 10,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10, // Android
  },
  ButtonSettings: {
    width: "40%",
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10, // Android
  },
  ButtonEditText: {
    color: "#fff",
    fontFamily: "NotoSans_700Bold",
  },
  ButtonSettingsText: {
    color: "#5663ff",
    fontFamily: "NotoSans_700Bold",
  },
});
export default Styles;
