import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {ScreenName} from "../../../../../globals/constants";

const Stack = createStackNavigator()

const FieldDetailStackNavigator = (props) => {
    return (
        <Stack.Navigator initialRouteName={ScreenName.fieldDetail}>
            {/*<Stack.Screen name={ScreenName.fieldDetail} component={FieldDetail}*/}
            {/*                options={({route}) => ({title: route.params.field})}/>*/}
            {/*<Stack.Screen name={NavigatorName.skillStack} component={SkillStackNavigator} options={{headerShown: false}}/>*/}
            {/*<Stack.Screen name={NavigatorName.pathDetailStack} component={PathDetailStackNavigator} options={{headerShown: false}}/>*/}
            {/*<Stack.Screen name={NavigatorName.courseDetailStack} component={CourseDetailStackNavigator} options={{headerShown: false}}/>*/}
            {/*<Stack.Screen name={NavigatorName.authorDetailStack} component={AuthorDetailStackNavigator} options={{headerShown: false}}/>*/}
        </Stack.Navigator>
    );
};

export default FieldDetailStackNavigator;
