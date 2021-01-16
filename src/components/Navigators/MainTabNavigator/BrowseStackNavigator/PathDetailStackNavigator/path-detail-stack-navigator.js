import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

const PathDetailStackNavigator = (props) => {
  return (
    <Stack.Navigator initialRouteName="PathDetail">
      {/*<Stack.Screen*/}
      {/*  name={ScreenName.pathDetail}*/}
      {/*  component={PathDetail}*/}
      {/*  options={*/}
      {/*    ({route}) => ({title: route.params.item.title})*/}
      {/*  }/>*/}
      {/*<Stack.Screen*/}
      {/*  name={NavigatorName.courseDetailStack}*/}
      {/*  component={CourseDetailStackNavigator}*/}
      {/*  options={{*/}
      {/*    headerShown: false*/}
      {/*  }}/>*/}
    </Stack.Navigator>
  );
};

export default PathDetailStackNavigator;
