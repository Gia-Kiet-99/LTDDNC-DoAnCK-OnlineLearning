import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import AuthenticationStackNavigator from "./src/components/Navigators/AuthenticationNavigator/authentication-stack-navigator";
import MainTabNavigator from "./src/components/Navigators/MainTabNavigator/main-tab-navigator";
import {NavigatorName, ScreenName} from "./src/globals/constants";
import SplashScreen from "./src/components/Others/SplashScreen/splash-screen";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName={ScreenName.splash}>
              <Stack.Screen name={ScreenName.splash} component={SplashScreen} options={{headerShown: false}}/>
              <Stack.Screen name={NavigatorName.authenticationStack} component={AuthenticationStackNavigator} options={{headerShown: false}}/>
              <Stack.Screen name={NavigatorName.mainTab} component={MainTabNavigator} options={{headerShown: false}}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}



