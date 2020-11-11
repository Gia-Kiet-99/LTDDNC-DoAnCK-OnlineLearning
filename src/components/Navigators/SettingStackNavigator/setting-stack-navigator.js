import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import Setting from "../../AccountManagement/Setting/setting";
import Profile from "../../AccountManagement/Profile/profile";

const Stack = createStackNavigator();

const SettingStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Setting" component={Setting}/>
            <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
    );
};

export default SettingStackNavigator;
