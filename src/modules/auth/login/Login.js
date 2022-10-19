import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import React from 'react';
import { style } from './LoginStyle';
import UseLogin from './UseLogin';
import logo from '../../../assets/logo.png';
import visibleEyeIcon from '../../../assets/visibleEyeIcon.png';
import invisibleEyeIcon from '../../../assets/invisibleEyeIcon.png';
import { UIActivityIndicator, } from 'react-native-indicators';
const Login = ({ navigation }) => {
    const [{ values, handleChange, handleClickShowPassword, email, setEmail, doLoginUser, loading }] = UseLogin();
    return (
        <View style={style.loginContainer}>
            <StatusBar backgroundColor='#454545' />
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='always' contentContainerStyle={style.scrollViewContainer}>
                <View style={style.whiteBgContainer}>
                    <View style={style.logoContainer}>
                        {/* <Image style={style.Image} source={logo} /> */}
                        <Text style={style.companyName}>Bringoo Tech</Text>
                    </View>
                    <View style={style.formContainer}>
                        <Text style={style.welcomeHeading}>
                            Welcome!
                        </Text>
                        <TextInput
                            style={style.input}
                            value={email}
                            placeholder="Email"
                            // keyboardType="Text"
                            onChangeText={(email) => setEmail(email)}
                        />
                        <View style={style.passwordInputContainer}>
                            <TextInput
                                style={style.passwordInput}
                                placeholder="Password"
                                secureTextEntry={values.showPassword ? false : true}
                                // value={values.password}
                                onChangeText={(text) => handleChange(text)}
                            />
                            <TouchableOpacity style={style.eyeIconContainer} onPress={handleClickShowPassword}>
                                {values.showPassword ?
                                    <Image style={style.showPasswordEyeIcon} source={invisibleEyeIcon} />
                                    :
                                    <Image style={style.eyeIcon} source={visibleEyeIcon} />
                                }
                            </TouchableOpacity>
                        </View>
                        {/* <TouchableOpacity style={style.forgotPasswordBtn}>
                            <Text style={style.forgotPasswordText}>
                                Forgot Password?
                            </Text>
                        </TouchableOpacity> */}
                        {
                            !loading ?
                                <TouchableOpacity onPress={() => doLoginUser()} style={style.loginBtn}>
                                    <Text style={style.loginText}>
                                        Login
                                    </Text>
                                </TouchableOpacity>
                                :
                                <View style={style.loadingContainer}>
                                    <UIActivityIndicator color='#ae7e00' />
                                </View>

                        }
                        {/* <View style={style.lastContainer}>
                            <Text>
                                Don't have an account?
                            </Text>
                            <TouchableOpacity ><Text style={style.signUpText}>Sign Up</Text></TouchableOpacity>
                        </View> */}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Login;