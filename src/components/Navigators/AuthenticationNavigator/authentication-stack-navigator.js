import React from 'react';
import Authentication from "../../Authentication/authentication";
import Register from "../../Authentication/Register/register";
import Login from "../../Authentication/Login/login";
import ForgetPassword from "../../Authentication/ForgetPassword/forget-password";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

const AuthenticationStackNavigator = (props) => {
    return (
        <Stack.Navigator initialRouteName="Authentication" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Authentication" component={Authentication}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
        </Stack.Navigator>
    );
};

export default AuthenticationStackNavigator;
