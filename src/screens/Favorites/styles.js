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
    justifyContent: "center",
  },
  HeaderText: {
    fontSize: 22,
    fontFamily: "NotoSans_700Bold",
    color: "#222455",
  },
  HeaderIcon: {},
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
    borderWidth: 1,
    borderColor: "#6e7faa",
    borderRadius: 5,
    marginTop: 30,
  },
  SearchInput: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
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
    fontWeight: "bold",
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
    width: "90%",
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
