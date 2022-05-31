import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  s: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  Hero: {
    height: 240,
    width: "100%",
    justifyContent: "space-between",
  },
  HeroButtons: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  HeroContent: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    width: "70%",
    alignSelf: "center",
  },
  HeroContentText: {
    fontSize: 15,
    color: "#222455",
    fontFamily: "NotoSans_700Bold",
  },
  ContainerInfo: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ContainerDescription: {
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 10,
    justifyContent: "center",
  },
  ContainerInfoNameAndRating: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    marginTop: 15,
  },
  ContainerInfoTitle: {
    fontSize: 18,
    color: "#222455",
    fontFamily: "NotoSans_700Bold",
    flex: 1,
    flexWrap: "wrap",
  },
  ContainerInfoText: {
    fontSize: 15,
    color: "#6e7faa",
    fontFamily: "NotoSans_400Regular",
  },
  ContainerInfoAdress: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 5,
  },
  ContainerInfoAdressText: {
    fontSize: 14,
    color: "#B0C4DE",
    fontFamily: "NotoSans_700Bold",
  },
  SeeAll: {
    fontSize: 13,
    color: "#B0C4DE",
    fontFamily: "NotoSans_400Regular",
  },
  Photos: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  PhotosText: {
    fontSize: 18,
    color: "#222455",
    fontFamily: "NotoSans_700Bold",
  },
  Services: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,

  },
  ServicesText: {
    fontSize: 18,
    color: "#222455",
    fontFamily: "NotoSans_700Bold",
  },

  ContainerInfoOpen: {
    width: "100%",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  ServicesTitle: {
    alignSelf: "flex-start",
    fontSize: 18,
    color: "#222455",
    fontFamily: "NotoSans_700Bold",
    padding: 10,
    marginBottom: 80,
  },

  CategoryCard: { width: 120, height: 120,borderRadius:130,  },
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
  RattingAndReViewContainer: {
    width: "100%",
    padding: 15,
  },
  RattingAndReViewItem: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom:5 
  },
  RattingAndReViewContent: {
    flex: 1,

  },
  RattingAndReviewContentTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  RattingAndReviewName: {
    color: "#222455",
    fontSize: 18,
    fontFamily: "NotoSans_700Bold",
  },
  RattingAndReviewStars: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height:20,
    backgroundColor:"#B0C4DE",
    paddingHorizontal:10,
    borderRadius:10
  },
  RattingAndReviewStarsText:{
    color: "#222455",
    fontSize: 15,
    fontFamily: "NotoSans_400Regular",
  },
  RattingAndreviewContentBottom:{
    flex:1,
    color: "#B0C4DE",
    fontSize: 13,
    fontFamily: "NotoSans_700Bold", 
  },
  ServicesCard:{

  }
});
export default Styles;
