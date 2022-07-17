import { GET_RATE  , GET_COUNTARY_INFO} from "../type/Type"
import axios from "axios";
import { endPoint } from '../endPoint/EndPoint';

export const doGetRate = (setLoading) => async (dispatch) => {
    try {
        setLoading(true);

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'user': 'GoldSERVER_1947E102-E4D5-4F11-95D7-42EFF444D339',
                'password': '2A98D725-24B6-4E74-AD06-D5A50026BABC'
            }
        };
        const res = await axios.get(`${endPoint}Home/GetkaratCode?UserId=01307e0a-0858-4668-ae36-8c8bdae1196f`, axiosConfig);
        let rate = res.data
        if (rate) {
            dispatch({
                type: GET_RATE,
                payload: rate,
            })
        }
    }
    catch (error) {
        console.log('Error at Get Rate Api: ', error);
    }
    finally {
        setLoading(false)
    }
}

export const doGetCountaryInfo = (setLoading) => async (dispatch) => {
    try {
        setLoading(true);

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'user': 'GoldSERVER_1947E102-E4D5-4F11-95D7-42EFF444D339',
                'password': '2A98D725-24B6-4E74-AD06-D5A50026BABC'
            }
        };
        const res = await axios.get(`${endPoint}Home/MakingInfo?UserId=01307e0a-0858-4668-ae36-8c8bdae1196f`, axiosConfig);
        let countryInfo = res.data
        // console.log('Countary info' , countryInfo.Data);
        if (countryInfo) {
            dispatch({
                type: GET_COUNTARY_INFO,
                payload: countryInfo,
            })
        }
    }
    catch (error) {
        console.log('Error at Get Rate Api: ', error);
    }
    finally {
        setLoading(false)
    }
}