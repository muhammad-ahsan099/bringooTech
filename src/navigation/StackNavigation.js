import { createStackNavigator } from '@react-navigation/stack';
import React, { useState , useEffect } from 'react';
import Login from '../modules/auth/login/Login';
import Dashboard from '../modules/dashboard/Dashboard';
import SplashScreen from '../modules/splashScreen/SplashScreen';
import { useSelector , useDispatch } from 'react-redux';
import { doGetLoggedInUser } from '../redux/actions/AuthAction';

const Stack = createStackNavigator();

export default function StackNavigation() {
    const [loading, setLoading] = useState(true);  
    const [splash, setSplash] = useState(true);      

    const authState = useSelector((state) => state.AuthReducer.isUserLoggedIn);
      const dispatch = useDispatch()

  // const [loading, setLoading] = useState(false)
  useEffect(() => {
    dispatch(doGetLoggedInUser(setSplash));
  }, [])

    setTimeout(() => {
        setLoading(false)
    }, 2000)

    return (
        <Stack.Navigator>
            {
                loading &&
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="splashScreen" component={SplashScreen} />
            }

            {
                authState ?
                    <Stack.Screen
                        options={{
                            headerShown: false,
                        }}
                        name="dashboard" component={Dashboard}
                    />
                    :
                    <Stack.Screen
                        options={{
                            headerShown: false,
                        }}
                        name="login"
                        component={Login}
                    />
            }
        </Stack.Navigator>
    );
}
