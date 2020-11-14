import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigatorName, ScreenName} from "../../../../../globals/constants";
import SkillStackNavigator from "../SkillStackNavigator/skill-stack-navigator";
import PathDetailStackNavigator from "../PathDetailStackNavigator/path-detail-stack-navigator";
import CourseDetailStackNavigator from "../../CourseDetailStackNavigator/course-detail-stack-navigator";
import AuthorDetailStackNavigator from "../../AuthorDetailStackNavigator/author-detail-stack-navigator";
import FieldDetail from "../../../../DetailScreen/FieldDetail/field-detail";

const Stack = createStackNavigator()

const FieldDetailStackNavigator = (props) => {
    return (
        <Stack.Navigator initialRouteName={ScreenName.fieldDetail}>
            <Stack.Screen name={ScreenName.fieldDetail} component={FieldDetail}
                            options={({route}) => ({title: route.params.field})}/>
            <Stack.Screen name={NavigatorName.skillStack} component={SkillStackNavigator} />
            <Stack.Screen name={NavigatorName.pathDetailStack} component={PathDetailStackNavigator} options={{headerShown: false}}/>
            <Stack.Screen name={NavigatorName.courseDetailStack} component={CourseDetailStackNavigator} />
            <Stack.Screen name={NavigatorName.authorDetailStack} component={AuthorDetailStackNavigator} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default FieldDetailStackNavigator;
