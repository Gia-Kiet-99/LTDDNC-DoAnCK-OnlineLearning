import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

const ListStack = (props) => {
    return (
        <Stack.Navigator initialRouteName="StudyList" screenOptions={{headerShown: true}}>
            {/*<Stack.Screen*/}
            {/*    name={ScreenName.studyList}*/}
            {/*    component={StudyList}*/}
            {/*    options={({route}) => ({*/}
            {/*        title: route.params.title*/}
            {/*    })}/>*/}
            {/*<Stack.Screen*/}
            {/*    name={NavigatorName.courseDetailStack}*/}
            {/*    component={CourseDetailStackNavigator}*/}
            {/*    options={{*/}
            {/*        headerShown: false*/}
            {/*    }}/>*/}
            {/*<Stack.Screen*/}
            {/*    name={NavigatorName.channelDetailStack}*/}
            {/*    component={ChannelDetailStackNavigator}*/}
            {/*    options={{*/}
            {/*        headerShown: false*/}
            {/*    }}/>*/}
            {/*<Stack.Screen*/}
            {/*    name={NavigatorName.pathDetailStack}*/}
            {/*    component={PathDetailStackNavigator}*/}
            {/*    options={{*/}
            {/*        headerShown: false*/}
            {/*    }}/>*/}
        </Stack.Navigator>
    );
};

export default ListStack;
