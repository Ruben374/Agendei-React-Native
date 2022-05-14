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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderText: {
    fontSize: 22,
    fontWeight: "bold",
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
    marginTop: 25,
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

  Card: {
    backgroundColor: "#fff",
  },
  CardContentTop: {
    height: 160,
    width: "100%",
  },
  CardContentMessages: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 10,
  },
  CardContentOpenCloseMessages: {
    backgroundColor: "#fff",
    width: 65,
    height: 25,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  CardContentOpenCloseMessagesText: {
    color: "green",
    fontFamily: "NotoSans_700Bold",
  },
  CardContentRatingMessage: {
    backgroundColor: "#fff",
    width: 55,
    height: 25,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  CardContentBottom: {
    width: "100%",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  CardContentBottomTop: {
    width: "100%",
  },
  CardContentBottomName: {
    flexDirection: "row",
    alignItems: "center",
  },
  CardContentBottomAddress: {
    flexDirection: "row",
    alignItems: "center",
  },
  EstName: {
    fontSize: 17,
    fontFamily: "NotoSans_700Bold",
    marginRight: 20,
    color: "#222455",
  },
  EstCategory: {
    fontSize: 12,
    padding: 3,
    backgroundColor: "red",
    borderRadius: 7,
    fontFamily: "NotoSans_700Bold",
    color: "#222455",
  },
  CardContentBottomBottom: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  EstAddress: {
    fontSize: 14,
    fontFamily: "NotoSans_700Bold",
    color: "#222455",
  },
});
export default Styles;
