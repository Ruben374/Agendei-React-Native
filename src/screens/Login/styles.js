import { StyleSheet } from "react-native";

export const CELL_SIZE = 55;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = "#fff";
export const NOT_EMPTY_CELL_BG_COLOR = "#3557b7";
export const ACTIVE_CELL_BG_COLOR = "#f7fafe";

const Styles = StyleSheet.create({
  Scroll: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
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
  Container: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "#fff",
    top: -50
  },
  ScreenTitle: {
    padding: 15,
  },
  ScreenTitleText: {
    fontSize: 40,
    color: "#222455",
    fontFamily: "NotoSans_700Bold",
    marginTop:20
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
  InputPasswordMessage: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ForgotPasswordText: {
    fontSize: 18,
    marginTop: 8,
    fontFamily: "NotoSans_700Bold",
    color: "#222455",
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
    marginTop: 40,
    elevation: 5,
  },
  CostumBtnTxt: {
    fontSize: 18,
    color: "#FFFF",
    fontFamily: "NotoSans_700Bold",
  },
  LoginMessage: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  LoginMessageText: {
    fontSize: 16,
    color: "#52616B",
    opacity: 1,
    fontFamily: "NotoSans_400Regular",
  },
  LoginMessageTextBold: {
    fontSize: 16,
    color: "#222455",
    fontFamily: "NotoSans_700Bold",
    marginLeft: 5,
  },
});

export default Styles;
