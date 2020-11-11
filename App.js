import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import Home from "./src/components/Main/Home/home";
import Download from "./src/components/Main/Download/download";
import Browse from "./src/components/Main/Browse/browse";
import Search from "./src/components/Main/Search/search";
import StudyList from "./src/components/List/StudyList/study-list";
import CourseDetail from "./src/components/DetailScreen/CourseDetail/course-detail";
import Setting from "./src/components/AccountManagement/Setting/setting";
import Profile from "./src/components/AccountManagement/Profile/profile";
import Login from "./src/components/Authentication/Login/login";
import Register from "./src/components/Authentication/Register/register";
import Authentication from "./src/components/Authentication/authentication";
import ForgetPassword from "./src/components/Authentication/ForgetPassword/forget-password";
import ChannelDetail from "./src/components/DetailScreen/ChannelDetail/channel-detail";
import DownloadStackNavigator from "./src/components/Navigators/DownloadStackNavigator/download-stack-navigator";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const ListCourseStack = (props) => (
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
)

const HomeStackNavigator = () => (
    <Stack.Navigator initalRouteName={Home}>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="CourseDetail" component={CourseDetail} options={{headerShown: false}}/>
        <Stack.Screen name="ChannelDetail" component={ChannelDetail} options={({route}) => ({ title: route.params.item.title })}/>
        <Stack.Screen name="Setting" component={Setting}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="ListCourseStack" component={ListCourseStack} options={{headerShown: false}}/>
    </Stack.Navigator>
)

const MainTabNavigatorScreenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        switch (route.name) {
            case 'HomeStackNavigator':
                iconName = 'md-home';
                break;
            case 'DownloadStackNavigator':
                iconName = 'md-cloud-download';
                break;
            case 'Browse':
                iconName = 'ios-browsers';
                break;
            case 'Search':
                iconName = 'ios-search';
                break;
        }
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
    },
})

const MainTabNavigator = () => (
    <Tab.Navigator initialRouteName="HomeStackNavigator"
                   screenOptions={MainTabNavigatorScreenOptions}
                   tabBarOptions={{
                       activeTintColor: '#3498db',
                       inactiveTintColor: 'gray',
                       labelStyle: {
                           fontSize: 12,
                       },
                       style: {
                           height: 50
                       },
                   }}>
        <Tab.Screen name="HomeStackNavigator" component={HomeStackNavigator} options={{title: "Home"}}/>
        <Tab.Screen name="DownloadStackNavigator" component={DownloadStackNavigator} options={{title: "Download"}}/>
        <Tab.Screen name="Browse" component={Browse}/>
        <Tab.Screen name="Search" component={Search}/>
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
              <Stack.Screen name="AuthenticationStackNavigator" component={AuthenticationStackNavigator} options={{headerShown: false}}/>
              <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} options={{headerShown: false}}/>
          </Stack.Navigator>
      </NavigationContainer>

  );
}



