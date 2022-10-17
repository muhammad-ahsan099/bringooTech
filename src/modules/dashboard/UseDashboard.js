import { useEffect, useState } from "react"
import { doLogout } from "../../redux/actions/AuthAction";
import { useDispatch } from "react-redux";
import { doGetRate, doGetCountaryInfo } from "../../redux/actions/RateAction";
import { useSelector } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';


const UseDashboard = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const [convert, setConvert] = useState(false)
    const [engName, setEngName] = useState('')
    const [araName, setAraName] = useState('')



    const [time, setTime] = useState(new Date().toLocaleString())
    const Rate = useSelector(state => state.RateReducer.rate);
    const Info = useSelector(state => state.RateReducer.countryInfo);

    const GetUserData = async ()=> {
        const EnglishName = await AsyncStorage.getItem('nameEng');
        const ArabicName = await AsyncStorage.getItem('nameAra');
        setEngName(EnglishName)
        setAraName(ArabicName)
    } 

    const CountryInfo = Info?.Data;
    const KitcoRate = Rate?.Data?.KitcoRate;
    const Premimu = Rate?.Data?.Premimu;

    const Conversion = ()=> {
        setConvert(prevState => !prevState)
    }
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleString())
        }, 60000)
    }, [])

    useEffect(()=> {
        setInterval(() => {
            Conversion();
        }, 30000);
    }, [])



    useEffect(() => {
        dispatch(doGetRate(setLoading));
        dispatch(doGetCountaryInfo(setLoading))
        GetUserData();
    }, [time])

    // OMR rate
    const OMRRates = parseFloat((parseFloat(KitcoRate) * 1.4485) + parseInt(Premimu));
    const gramRate24 = parseFloat(KitcoRate / 116.640);
    const gramRate23 = parseFloat(KitcoRate / 116.640);
    const gramRate22 = parseFloat(KitcoRate / 127.2);

    const tableData = [
        {
            karatQntty: 24,
            price: gramRate24,
        },
        {
            karatQntty: 23,
            price: gramRate23,
        },
        {
            karatQntty: 22,
            price: gramRate22,
        },
    ];

    const logoutHandler = () => {
        dispatch(doLogout())
    }

    const conversionHandler = (val)=> {
        return val?.replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d])
    }

    const ArabicConvert = {
        UsdArabic: 'دولار',
        OmanArabic: 'ريال عماني',
        timeText: 'التحديث الأخير في',
        startingCharge: 'المصنعية تبدأ من',
        tola: convert ? 'تولی' + conversionHandler('10')+ '.': '10 Tola.'
    }


    return [{ engName ,araName,loading, KitcoRate, OMRRates, tableData, CountryInfo, time, ArabicConvert, convert, setConvert , logoutHandler , conversionHandler }]
}

export default UseDashboard;
