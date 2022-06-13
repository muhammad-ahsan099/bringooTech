import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from './DashboardStyle';
import necklesImage from '../../assets/necklesImage.png';
import logout from '../../assets/logout.png';
import UseDashboard from './UseDashboard';
const Dashboard = () => {
    const [{ tableData, charges }] = UseDashboard();
    return (
        <View style={style.mainPageContainer}>
            <StatusBar backgroundColor='#454545' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.whiteHeader}>
                    <View>
                        <Text style={style.shopName}>
                            Bringoo Tech
                        </Text>
                    </View>
                    <View>
                        <Image style={style.goldImage} source={necklesImage} />
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image style={style.userIcon} source={logout} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.goldRatesContainersRow}>
                    <View style={style.smallOrangeContainer}>
                        <Text style={style.currencyName}>USD</Text>
                        <Text style={style.price}>1855.1</Text>
                        <Text style={style.quantity}>Qz.</Text>
                    </View>
                    <View style={style.smallGreenContainer}>
                        <Text style={style.currencyName}>OMR</Text>
                        <Text style={style.price}>2687.1</Text>
                        <Text style={style.quantity}>10 Tola</Text>
                    </View>
                    <View style={style.bigWhiteContainer}>
                        {
                            tableData.map((item) => {
                                return (
                                    <View>
                                        <View style={style.rateRow}>
                                            <Text style={style.tableText}>
                                                {item?.karatQntty}{'\n'}Karat
                                            </Text>
                                            <Text style={style.tableText}>{item?.price}</Text>
                                            <Text style={style.tableText}>OMR</Text>
                                        </View>
                                        <View style={style.divider} />
                                    </View>
                                )
                            })
                        }

                    </View>
                </View>
                <Text style={style.lastUpdateText}>
                    Oman Gold Rate Last Update On 2022-5-29 12:4:18
                </Text>
                <View style={style.horizontalLineBreaker} />
                <Text style={style.chargeHeading}>
                    Making Charge Starting
                </Text>
                <View style={style.chargesBoxesRow}>
                    {
                        charges.map((item) => {
                            return (
                                <View style={style.countryNameAndChargesContainer}>
                                    <Text style={style.countryName}>
                                        {item?.country}
                                    </Text>
                                    <Text style={style.charges}>{item?.charges}</Text>
                                </View>
                            )
                        })
                    }

                </View>
            </ScrollView>
        </View>
    )
}

export default Dashboard;