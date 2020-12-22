import React, {useContext} from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigatorName, ScreenName} from "../../../globals/constants";
import SplashScreen from "../../Others/SplashScreen/splash-screen";
import AuthenticationStackNavigator from "../AuthenticationNavigator/authentication-stack-navigator";
import MainTabNavigator from "../MainTabNavigator/main-tab-navigator";
import {AuthenticationContext} from "../../../provider/authentication-provider";
import {getAuthTokenFromStorage} from "../../../core/services/async-storage-service";

const Stack = createStackNavigator()

const AppNavigator = () => {
  const {state} = useContext(AuthenticationContext)

  // const savedToken = getAuthTokenFromStorage();
  // console.log("AppNavigator", savedToken)

  // const renderUI = async () => {
  //   const savedToken = await getAuthTokenFromStorage();
  //   if(savedToken != null) {
  //     return (
  //       <>
  //         <Stack.Screen name={ScreenName.splash} options={{headerShown: false}}>
  //           {props => <SplashScreen {...props} extraData={savedToken} />}
  //         </Stack.Screen>
  //         <Stack.Screen name={NavigatorName.mainTab} component={MainTabNavigator}
  //                       options={{headerShown: false}}/>
  //       </>
  //     )
  //   } else {
  //
  //   }
  //
  //
  // };

  return (
    <Stack.Navigator initialRouteName={ScreenName.splash}>
      {state.isAuthenticated === false ? (
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
