import React, {useContext} from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigatorName, ScreenName} from "../../../globals/constants";
import SplashScreen from "../../Others/SplashScreen/splash-screen";
import AuthenticationStackNavigator from "../AuthenticationNavigator/authentication-stack-navigator";
import MainTabNavigator from "../MainTabNavigator/main-tab-navigator";
import {AuthenticationContext} from "../../../provider/authentication-provider";

const Stack = createStackNavigator()

const AppNavigator = () => {
    const {isSignIn} = useContext(AuthenticationContext)
    return (
        <Stack.Navigator initialRouteName={ScreenName.splash}>
            {isSignIn === false ? (
                <>
                    <Stack.Screen name={ScreenName.splash} component={SplashScreen} options={{headerShown: false}}/>
                    <Stack.Screen name={NavigatorName.authenticationStack} component={AuthenticationStackNavigator}
                                  options={{headerShown: false}}/>
                </>
            ) : (
                <>
                    <Stack.Screen name={NavigatorName.mainTab} component={MainTabNavigator}
                                  options={{headerShown: false}}/>
                </>
            )}
        </Stack.Navigator>
    );
};

export default AppNavigator;
