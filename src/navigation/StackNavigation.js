import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import Login from '../modules/auth/login/Login';
import Dashboard from '../modules/dashboard/Dashboard';
import SplashScreen from '../modules/splashScreen/SplashScreen';
const Stack = createStackNavigator();

export default function StackNavigation() {
    const [loading, setLoading] = useState(true);
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

            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="login" component={Login} />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="dashboard" component={Dashboard} />
        </Stack.Navigator>
    );
}