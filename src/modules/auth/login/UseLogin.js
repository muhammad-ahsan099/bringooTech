import { useState } from "react";
import { doLogin } from "../../../redux/actions/AuthAction";
import { useDispatch } from "react-redux";
import { Alert } from "react-native";

const UseLogin = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });
    const handleChange = (text) => {
        setValues({
            ...values,
            password: text
        })
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const doLoginUser = () => {
        if (email === '') {
            Alert.alert('Email should not empty!')
        }
        else if (values.password === '') {
            Alert.alert('Password should not empty!')
        }
        else {
            dispatch(doLogin(email, values.password))
        }
    }


    return [{ values, handleChange, handleClickShowPassword, email, setEmail, doLoginUser, loading }]
}

export default UseLogin;