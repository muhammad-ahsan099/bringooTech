import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { style } from './DashboardStyle';
import necklesImage from '../../assets/necklesImage.png';
import logout from '../../assets/logout.png';
import UseDashboard from './UseDashboard';
import MyStatusBar from '../focusAwareStatuseBar/index';
const Dashboard = () => {
    const [{ loading, KitcoRate, OMRRates, tableData, CountryInfo, time, ArabicConvert, convert, setConvert, logoutHandler , conversionHandler }] = UseDashboard();

    return (
        <View style={style.mainPageContainer}>
            <MyStatusBar
                backgroundColor={'#454545'}
                barStyle="light-content"
            />
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
                    <TouchableOpacity activeOpacity={0.8} onPress={logoutHandler}>
                        <Image style={style.userIcon} source={logout} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.goldRatesContainersRow(convert)}>
                    <View style={style.smallOrangeContainer}>
                        <Text style={style.currencyName}>{convert ? ArabicConvert?.UsdArabic : 'USD'}</Text>
                        <Text style={style.price}>{convert ? conversionHandler(KitcoRate?.toFixed(1)?.toString()) : KitcoRate?.toFixed(1)}</Text>
                        <Text style={style.quantity}>Oz.</Text>
                    </View>
                    <View style={style.smallGreenContainer}>
                        <Text style={style.currencyName}>{convert ? ArabicConvert?.OmanArabic: 'OMR'}</Text>
                        <Text style={style.price}>{ convert ? conversionHandler(OMRRates?.toFixed(1)?.toString()) : OMRRates?.toFixed(1)}</Text>
                        <Text style={style.quantity}>{ArabicConvert?.tola}</Text>
                    </View>
                    <View style={style.bigWhiteContainer}>
                        {
                            tableData?.map((item, ind) => {
                                return (
                                    <View key={ind}>
                                        <View style={style.rateRow(convert)}>
                                            <Text style={style.tableText}>
                                                {convert ? conversionHandler(item?.karatQntty?.toString()) + `\n ع` : item?.karatQntty + `\nKarat` }
                                            </Text>
                                            <Text style={style.tableText}>{convert ? conversionHandler(item?.price?.toFixed(3)?.toString()) : item?.price?.toFixed(3)}</Text>
                                            <Text style={style.tableText}>{convert ? ArabicConvert?.OmanArabic: 'OMR'}</Text>
                                        </View>
                                        <View style={style.divider} />
                                    </View>
                                )
                            })
                        }

                    </View>
                </View>
                <Text style={style.lastUpdateText}>
                    {
                        convert ?
                            ArabicConvert?.timeText + " " + time
                            :
                            'Oman Gold Rate Last Update On ' + time
                    }
                </Text>
                <View style={style.horizontalLineBreaker} />
                <Text style={style.chargeHeading}>
                    {
                        convert ?
                            ArabicConvert?.startingCharge
                            :
                            'Making Charge Starting'
                    }
                </Text>
                <View style={style.chargesBoxesRow(convert)}>
                    {
                        CountryInfo?.map((item, ind) => {
                            return (
                                <View key={ind} style={style.countryNameAndChargesContainer}>
                                    <Text style={style.countryName}>
                                        {convert ? item?.CountryNameArabic : item?.CountryName}
                                    </Text>
                                    <Text style={style.charges}>
                                        {convert ? item?.FromArabic : item?.From}
                                    </Text>
                                </View>
                            )
                        })
                    }

                </View>
            </ScrollView>
        </View >
    )
}
export default Dashboard;
