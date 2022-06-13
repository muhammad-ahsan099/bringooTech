import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const style = StyleSheet.create({
    pageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "white",
    },
    Image: {
        width: 170,
        height: 150,
        resizeMode: 'cover',
    },
    companyName: {
        fontSize: RFValue(24),
        fontWeight: 'bold',
        color: '#ae7e00',
    },
    loadingContainer: {
        height: 70,
        marginTop: 10
    },
});