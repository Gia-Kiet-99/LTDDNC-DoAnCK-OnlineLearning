import 'react-native-gesture-handler';
import React from 'react';
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigatorName} from "./src/globals/constants";
import {AuthenticationProvider} from "./src/provider/authentication-provider";
import {AppThemeProvider} from "./src/provider/theme-provider"
import AppNavigator from "./src/components/Navigators/AppNavigator/app-navigator";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppThemeProvider>
      <AuthenticationProvider>
        <NavigationContainer theme={DefaultTheme}>
          <Stack.Navigator>
            <Stack.Screen name={NavigatorName.appStack} component={AppNavigator}
                          options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </AuthenticationProvider>
    </AppThemeProvider>
  );
}



