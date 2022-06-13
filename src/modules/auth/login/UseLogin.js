import { useState } from "react";
const UseLogin = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const loginHandler = (navigation) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigation.replace('dashboard')
        }, 1500)
    }
    return [{ values, handleChange, handleClickShowPassword, email, setEmail, loginHandler, loading }]
}

export default UseLogin;