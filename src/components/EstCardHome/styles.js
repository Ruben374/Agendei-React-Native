import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({

  Card: {
    backgroundColor: "#fff",
    elevation :5
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
    height: 100
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
    fontSize: 15,
    fontFamily: "NotoSans_700Bold",
    marginRight: 20,
    color: "#222455",
    flex: 1, flexWrap: 'wrap'
  },
  EstCategory: {
    fontSize: 11,
    padding: 3,
    backgroundColor: "red",
    borderRadius: 7,
    fontFamily: "NotoSans_700Bold",
    color: "#222455",

    alignItems: "center", justifyContent: "center"
  },
  CardContentBottomBottom: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  EstAddress: {
    fontSize: 12,
    fontFamily: "NotoSans_700Bold",
    color: "#222455",
    flex: 1, flexWrap: 'wrap'
  },
})

export default Styles