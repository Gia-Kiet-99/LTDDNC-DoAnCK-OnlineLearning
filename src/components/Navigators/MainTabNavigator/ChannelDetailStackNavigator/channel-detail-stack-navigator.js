import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {ScreenName} from "../../../../globals/constants";

const Stack = createStackNavigator()

const ChannelDetailStackNavigator = (props) => {
    return (
        <Stack.Navigator initialRouteName={ScreenName.channelDetail}>
            {/*<Stack.Screen*/}
            {/*    name={ScreenName.channelDetail}*/}
            {/*    component={ChannelDetail}/>*/}
            {/*<Stack.Screen*/}
            {/*    name={NavigatorName.courseDetailStack}*/}
            {/*    component={CourseDetailStackNavigator}*/}
            {/*    options={{headerShown: false}}/>*/}
        </Stack.Navigator>
    );
};

export default ChannelDetailStackNavigator;
