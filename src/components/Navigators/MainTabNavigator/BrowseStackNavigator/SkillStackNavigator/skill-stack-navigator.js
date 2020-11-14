import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import SkillDetail from "../../../../DetailScreen/SkillDetail/skill-detail";
import PathDetailStackNavigator from "../PathDetailStackNavigator/path-detail-stack-navigator";
import ListStack from "../../ListStack/list-stack";
import AuthorDetailStackNavigator from "../../AuthorDetailStackNavigator/author-detail-stack-navigator";
import CourseDetailStackNavigator from "../../CourseDetailStackNavigator/course-detail-stack-navigator";

const Stack = createStackNavigator();

const SkillStackNavigator = (props) => {
    return (
        <Stack.Navigator initialRouteName="SkillDetail">
            <Stack.Screen name="SkillDetail"
                          component={SkillDetail}
                          options={({route}) => ({title: route.params.item.skill})}/>
            <Stack.Screen name="PathDetailStackNavigator"
                          component={PathDetailStackNavigator}
                          options={{headerShown: false}}/>
            <Stack.Screen name="CourseDetailStackNavigator"
                          component={CourseDetailStackNavigator}
                          options={{headerShown: false}}/>
            <Stack.Screen name="ListStack"
                          component={ListStack}
                          options={{headerShown: false}}/>
            <Stack.Screen name="AuthorDetailStackNavigator"
                          component={AuthorDetailStackNavigator}
                          options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default SkillStackNavigator;
