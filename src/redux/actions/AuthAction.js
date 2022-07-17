
import axios from 'axios';
import { endPoint } from '../endPoint/EndPoint';
import { LOGIN , LOGOUT , ACTIVE_USER} from '../type/Type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
// Login Function 
export const doLogin = (email, password) => async (dispatch) => {
  try {
    let payload = { email, password }
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        'user': 'GoldSERVER_1947E102-E4D5-4F11-95D7-42EFF444D339',
        'password': '2A98D725-24B6-4E74-AD06-D5A50026BABC'
      }
    };
    const userCredential = await axios.post(`${endPoint}Home/LoginInfo`, payload, axiosConfig);

    if (userCredential.data.IsSuccess) {
      try {
        await AsyncStorage.setItem('loginKey', userCredential?.data?.Data?.Id)
      } catch (e) {
        console.log('Error', e);
      }
      dispatch({
        type: LOGIN,
        payload: userCredential,
      });
    }
    else {
      Alert.alert('Please provide correct email & password!')
    }
  } catch (error) {
    alert(JSON.stringify('Please Try again Later...'))
  }
};


export const doLogout = () => async (dispatch) => {
  try {

    await AsyncStorage.removeItem('loginKey')
    dispatch({
      type: LOGOUT,
      payload: null,
    })
  }
  catch (error) {
    Alert.alert("Please Try again later...")
  }
}

export const doGetLoggedInUser = (setSplash) => async (dispatch) => {
  try {
    setSplash(true)
      const token = await AsyncStorage.getItem('loginKey');
      if (token) {
          dispatch({
              type: ACTIVE_USER,
              payload: null,
          })
      }
  }
  catch (error) {
      console.log(error)
  }
  finally {
    setSplash(false)
  }
}













