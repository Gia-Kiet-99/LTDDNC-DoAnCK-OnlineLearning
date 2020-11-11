import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import AuthenticationStackNavigator from "./src/components/Navigators/AuthenticationNavigator/authentication-stack-navigator";
import MainTabNavigator from "./src/components/Navigators/MainTabNavigator/main-tab-navigator";


const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="AuthenticationStackNavigator">
              <Stack.Screen name="AuthenticationStackNavigator" component={AuthenticationStackNavigator} options={{headerShown: false}}/>
              <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} options={{headerShown: false}}/>
          </Stack.Navigator>
      </NavigationContainer>

  );
}



