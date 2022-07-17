import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get('window');

export const style = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: '#454545',
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: "center",
        flexDirection: 'column',
        alignItems: 'center',
    },
    whiteBgContainer: {
        backgroundColor: 'white',
        height: 500,
        width: width > 600 ? '50%' : '90%',
        borderRadius: 10,
    },
    logoContainer: {
        flex: .30,
        alignItems: 'center',
        justifyContent: 'center'
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
    formContainer: {
        flex: .70,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    welcomeHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 60,
        padding: 20,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "rgb(237,239,243)",
        width: '100%',
        color: 'black'
    },
    passwordInput: {
        height: 60,
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 20,
        paddingRight: 50,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "rgb(237,239,243)",
        width: '100%',
        color: 'black'
    },
    passwordInputContainer: {
        width: '100%',
        display: "flex",
        flexDirection: 'row-reverse',
    },
    eyeIconContainer: {
        position: "absolute",
    },
    eyeIcon: {
        height: 20,
        width: 30,
        resizeMode: "cover",
        marginTop: 20,
        marginRight: 10,
    },
    showPasswordEyeIcon: {
        height: 20,
        width: 25,
        resizeMode: "cover",
        marginTop: 20,
        marginRight: 13,
    },
    loginBtn: {
        backgroundColor: '#ae7e00',
        height: 40,
        borderRadius: 10,
        marginTop: 20,
    },
    loginText: {
        textAlign: 'center',
        color: 'white',
        paddingTop: 8,
        fontSize: 16,
    },
    loadingContainer: {
        marginTop: 35,
        marginBottom: 25,
    },
    forgotPasswordBtn: {
        alignItems: 'flex-end',
    },
    forgotPasswordText: {
        color: '#ae7e00',
    },
    lastContainer: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
    },
    signUpText: {
        marginTop: -2,
        marginLeft: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ae7e00',
    },
});