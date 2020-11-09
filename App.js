import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, StatusBar, TouchableOpacity, Image, Text} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./src/components/Main/Home/home";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Download from "./src/components/Main/Download/download";
import Browse from "./src/components/Main/Browse/browse";
import Search from "./src/components/Main/Search/search";
import StudyList from "./src/components/Courses/StudyList/study-list";
import CourseDetail from "./src/components/CourseDetail/course-detail";
import HeaderRightButtons from "./src/components/Common/header-right-buttons";
import Setting from "./src/components/AccountManagement/Setting/setting";
import Profile from "./src/components/AccountManagement/Profile/profile";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ListCourseStack = () => (
    <Stack.Navigator
        // mode="modal"
        initialRouteName="ListCourse"
        screenOptions={{
            headerStyle: {
                backgroundColor: "#ff884d",
            },
            headerTintColor: '#fff',
            headerTitleStyle: {

            },
        }}>
        <Stack.Screen name="ListCourse" component={StudyList}
                      options={{
                          title: "List Course",
                      }}/>
        <Stack.Screen name="CourseDetail" component={CourseDetail}
                      options={{
                          title: "Course Detail",
                          headerShown: false
                      }}
        />
        <Stack.Screen name="Setting" component={Setting} options={{title: "Setting",}}/>
        <Stack.Screen name="Profile" component={Profile} options={{title: "Profile",}}/>

    </Stack.Navigator>
)

export default function App() {
  return (
      // <NavigationContainer>
      //     <Stack.Navigator
      //         // mode="modal"
      //         initialRouteName="ListCourse"
      //         screenOptions={{
      //             headerStyle: {
      //                 backgroundColor: "#ff884d",
      //             },
      //             headerTintColor: '#fff',
      //             headerTitleStyle: {
      //
      //             },
      //         }}>
      //         <Stack.Screen name="ListCourse" component={StudyList}
      //                       options={{
      //                           title: "List Course",
      //                       }}/>
      //         <Stack.Screen name="CourseDetail" component={CourseDetail}
      //                       options={{
      //                           title: "Course Detail",
      //                           headerShown: false
      //                       }}
      //         />
      //         <Stack.Screen name="Setting" component={Setting} options={{title: "Setting",}}/>
      //         <Stack.Screen name="Profile" component={Profile} options={{title: "Profile",}}/>
      //
      //     </Stack.Navigator>
      // </NavigationContainer>

      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen name="Home" component={Home}/>
              <Tab.Screen name="Download" component={Download}/>
              <Tab.Screen name="Browse" component={Browse}/>
              <Tab.Screen name="Search" component={Search}/>
              <Tab.Screen name="Course" component={ListCourseStack}/>
          </Tab.Navigator>
      </NavigationContainer>

    // <View style={styles.container}>
    //   <StatusBar backgroundColor="white" barStyle="dark-content"/>
    //   <CourseDetail/>
    // </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },

    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});



