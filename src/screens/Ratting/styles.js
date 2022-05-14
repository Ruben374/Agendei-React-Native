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
  Body: {
    width: "100%",
    padding: 20,
    marginTop: 30,
  },
  StarContainer: {
    padding: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#5663ff",
    borderRadius: 10,
  },
  RattingTextView: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  RattingText: {
    fontSize: 16,
    fontFamily: "NotoSans_700Bold",
  },
  InputArea: {
    borderColor: "#6e7faa",
    borderWidth: 1,
    height: 100,
    borderRadius: 10,
    marginTop: 40,
    padding: 10,
  },
  RateButton: {
    padding: 20,
    backgroundColor: "#3F5D7D",
    borderRadius: 10,
  },
  RateButtonText: {
    fontSize: 20,
  },
  RattingBtn: {
    position: "absolute",
    width: "100%",
    height: 60,
    backgroundColor: "#5663ff",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  RattingText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "NotoSans_700Bold",
  },
});
export default Styles;
