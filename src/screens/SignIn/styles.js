import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  Scroll: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  Container: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "#fff",
    top: -50
  },

  Card: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#F0F5F9",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: -50,
    top: -50,
  },
  ScreenTitle: {
    padding: 15,
  },
  ScreenTitleText: {
    fontSize: 40,
    color: "#222455",
    fontFamily: "NotoSans_700Bold",
  },
  FormArea: {
    width: "100%",
    padding: 15,
  },
  InputMessage: {
    fontSize: 18,
    marginTop: 8,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "NotoSans_400Regular",
  },
  Input: {
    width: "100%",
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#222455",
    marginTop: 5,
    color: "#222455",
    fontFamily: "NotoSans_400Regular",
  },

  CostumBtn: {
    padding: 15,
    backgroundColor: "#5663ff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    elevation: 5
  },
  CostumBtnTxt: {
    fontSize: 18,
    color: "#FFFF",
    fontFamily: "NotoSans_700Bold",
  },
  SignInMessage: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  SignInMessageText: {
    fontSize: 16,
    color: "#52616B",
    opacity: 1,
    fontFamily: "NotoSans_400Regular",
  },
  SignInMessageTextBold: {
    fontSize: 16,
    color: "#222455",
    fontFamily: "NotoSans_700Bold",
    marginLeft: 5,

  },
});

export default Styles;
