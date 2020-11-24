import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Browse from "../../../Main/Browse/browse";
import Setting from "../../../AccountManagement/Setting/setting";
import Profile from "../../../AccountManagement/Profile/profile";
import ListStack from "../ListStack/list-stack";
import PathDetailStackNavigator from "./PathDetailStackNavigator/path-detail-stack-navigator";
import AuthorDetailStackNavigator from "../AuthorDetailStackNavigator/author-detail-stack-navigator";
import SkillStackNavigator from "./SkillStackNavigator/skill-stack-navigator";
import FieldDetailStackNavigator from "./FieldDetailStackNavigator/field-detail-stack-navigator";

const Stack = createStackNavigator()

const BrowseStackNavigator = (props) => {
    return (
        <Stack.Navigator initialRouteName="Browse">
            <Stack.Screen name="Browse" component={Browse} options={{headerShown: false}}/>
            <Stack.Screen name="Setting" component={Setting}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="PathDetailStackNavigator" component={PathDetailStackNavigator}
                          options={{headerShown: false}}/>
            <Stack.Screen name="AuthorDetailStackNavigator" component={AuthorDetailStackNavigator}
                          options={{headerShown: false}}/>
            <Stack.Screen name="SkillStackNavigator" component={SkillStackNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="FieldDetailStackNavigator" component={FieldDetailStackNavigator}
                          options={{headerShown: false}}/>
            <Stack.Screen name="ListStack" component={ListStack} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default BrowseStackNavigator;
