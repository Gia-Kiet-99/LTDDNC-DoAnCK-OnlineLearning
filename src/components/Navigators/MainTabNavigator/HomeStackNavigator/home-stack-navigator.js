import React from 'react';
import Home from "../../../Main/Home/home";
import CourseDetail from "../../../DetailScreen/CourseDetail/course-detail";
import ChannelDetail from "../../../DetailScreen/ChannelDetail/channel-detail";
import Setting from "../../../AccountManagement/Setting/setting";
import Profile from "../../../AccountManagement/Profile/profile";
import ListStack from "../ListStack/list-stack";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();
const HomeStackNavigator = (props) => {
    return (
        <Stack.Navigator initalRouteName={Home}>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="CourseDetail" component={CourseDetail} options={{headerShown: false}}/>
            <Stack.Screen name="ChannelDetail" component={ChannelDetail} options={({route}) => ({ title: route.params.item.title })}/>
            <Stack.Screen name="Setting" component={Setting}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="ListStack" component={ListStack} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;
