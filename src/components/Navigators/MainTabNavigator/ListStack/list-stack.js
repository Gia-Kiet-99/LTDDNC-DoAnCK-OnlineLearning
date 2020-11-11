import React from 'react';
import StudyList from "../../../List/StudyList/study-list";
import CourseDetail from "../../../DetailScreen/CourseDetail/course-detail";
import ChannelDetail from "../../../DetailScreen/ChannelDetail/channel-detail";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

const ListStack = (props) => {
    return (
        <Stack.Navigator
            initialRouteName="StudyList"
            screenOptions={{headerShown: true}}>
            <Stack.Screen name="StudyList"
                          component={StudyList}
                          options={({route}) => ({ title: route.params.barTitle })}/>
            <Stack.Screen name="CourseDetail"
                          component={CourseDetail}
                          options={{
                              title: "Course Detail",
                              headerShown: false
                          }}/>
            <Stack.Screen name="ChannelDetail"
                          component={ChannelDetail}
                          options={({route}) => ({ title: route.params.item.title })}/>
        </Stack.Navigator>
    );
};

export default ListStack;
