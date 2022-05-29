import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    View: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        elevation: 1,
        backgroundColor: "rgba(0,0,0,0.8)",
        width: 180,
        position: "absolute",
        bottom: "40%",
        alignSelf: "center",
        borderRadius: 10,
    },
    Text: {
        color: "#fff",
        fontFamily: "NotoSans_700Bold",
        fontSize: 13,
        paddingVertical: 8
    },

})
export default Styles