import React from 'react';
import Authentication from "../../Authentication/authentication";
import Register from "../../Authentication/Register/register";
import Login from "../../Authentication/Login/login";
import ForgetPassword from "../../Authentication/ForgetPassword/forget-password";
import {createStackNavigator} from "@react-navigation/stack";
import {ScreenName} from "../../../globals/constants";

const Stack = createStackNavigator();

const AuthenticationStackNavigator = (props) => {
    return (
        <Stack.Navigator initialRouteName={ScreenName.authentication} screenOptions={{headerShown: false}}>
            <Stack.Screen name={ScreenName.authentication} component={Authentication}/>
            <Stack.Screen name={ScreenName.register} component={Register}/>
            <Stack.Screen name={ScreenName.login} component={Login}/>
            <Stack.Screen name={ScreenName.forgetPassword} component={ForgetPassword}/>
        </Stack.Navigator>
    );
};

export default AuthenticationStackNavigator;
