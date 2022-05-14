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
    justifyContent: "space-between",
    marginBottom:20,
  },
  HeaderText: {
    fontSize: 20,
    fontFamily: "NotoSans_700Bold",
    color: "#222455",
  },
  HeaderIcon: {},
  SearchArea: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,

    borderRadius: 10,
    marginTop: 5,
  },
  SearchInput: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    fontFamily: "NotoSans_400Regular",
    color: "#222455",
  },

  Container: {
    height: "100%",
    flex: 1,
    padding: 15,
  },
  CardCategoryContent: {
    width: "100%",
    height: 80,
    elevation: 5,
    borderRadius: 10,
    marginTop: 20,
  },
  CategoryCard: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  CategoryCardText: {
    fontSize: 25,
    fontFamily: "NotoSans_700Bold",
    color: "#222455",
    elevation: 15,
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
 
});
export default Styles;
