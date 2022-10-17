import { View, Image, StatusBar ,Text} from 'react-native';
import React from 'react';
import { style } from './SplashScreenStyle';
import { SkypeIndicator, } from 'react-native-indicators';
import logo from '../../assets/logo.png';
const SplashScreen = () => {
    return (
        <View style={style.pageContainer}>
            <StatusBar backgroundColor='white' barStyle='dark-content' />
            <View>
                {/* <Image style={style.Image} source={logo} /> */}
                <Text style={style.companyName}>Bringoo Tech</Text>
                <View style={style.loadingContainer}>
                    <SkypeIndicator size={50} color='#ae7e00' />
                </View>
            </View>
        </View>
    )
}

export default SplashScreen