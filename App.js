import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import Home from "./src/components/Main/Home/home";
import Download from "./src/components/Main/Download/download";
import Browse from "./src/components/Main/Browse/browse";
import Search from "./src/components/Main/Search/search";
import StudyList from "./src/components/Courses/StudyList/study-list";
import CourseDetail from "./src/components/CourseDetail/course-detail";
import Setting from "./src/components/AccountManagement/Setting/setting";
import Profile from "./src/components/AccountManagement/Profile/profile";
import Login from "./src/components/Authentication/Login/login";
import Register from "./src/components/Authentication/Register/register";
import Authentication from "./src/components/Authentication/authentication";
import ForgetPassword from "./src/components/Authentication/ForgetPassword/forget-password";


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

const HomeStackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="CourseDetail" component={CourseDetail}/>
    </Stack.Navigator>
)

const MainTabNavigatorScreenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        switch (route.name) {
            case 'HomeStackNavigator':
                iconName = 'md-home';
                break;
            case 'Download':
                iconName = 'md-download';
                break;
            case 'Browse':
                iconName = 'ios-browsers';
                break;
            case 'Search':
                iconName = 'md-search';
                break;
        }
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
    },
})

const MainTabNavigator = () => (
    <Tab.Navigator initialRouteName="Home"
                   screenOptions={MainTabNavigatorScreenOptions}
                   tabBarOptions={{
                       activeTintColor: '#3498db',
                       inactiveTintColor: 'gray',
                   }}>
        <Tab.Screen name="HomeStackNavigator" component={HomeStackNavigator} options={{title: "Home"}}/>
        <Tab.Screen name="Download" component={Download}/>
        <Tab.Screen name="Browse" component={Browse}/>
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="Course" component={ListCourseStack}/>
    </Tab.Navigator>
)

const AuthenticationStackNavigator = () => (
    <Stack.Navigator initialRouteName="Authentication" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Authentication" component={Authentication}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
    </Stack.Navigator>
)

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="AuthenticationStackNavigator">
              <Stack.Screen
                  name="AuthenticationStackNavigator"
                  component={AuthenticationStackNavigator}
                  options={{headerShown: false}}
              />
              <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} options={{headerShown: false}}/>
          </Stack.Navigator>
      </NavigationContainer>

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



