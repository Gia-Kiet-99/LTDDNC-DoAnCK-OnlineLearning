import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Download from "../../../Main/Download/download";
import Setting from "../../../AccountManagement/Setting/setting";
import Profile from "../../../AccountManagement/Profile/profile";
import CourseDetailStackNavigator from "../CourseDetailStackNavigator/course-detail-stack-navigator";

const Stack = createStackNavigator()

const DownloadStackNavigator = (props) => {
    return (
        <Stack.Navigator initialRouteName="Download">
            <Stack.Screen name="Download" component={Download} options={{headerShown: false}}/>
            <Stack.Screen name="CourseDetailStackNavigator" component={CourseDetailStackNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="Setting" component={Setting}/>
            <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
    );
};

export default DownloadStackNavigator;
