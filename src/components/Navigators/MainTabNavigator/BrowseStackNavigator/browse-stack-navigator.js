import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Browse from "../../../Main/Browse/browse";
import PathDetail from "../../../DetailScreen/PathDetail/path-detail";

const Stack = createStackNavigator()

const BrowseStackNavigator = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Browse" component={Browse} options={{headerShown: false}}/>
            <Stack.Screen name="PathDetail" component={PathDetail} options={({route}) => ({title: route.params?.item?.title})}/>
        </Stack.Navigator>
    );
};

export default BrowseStackNavigator;
