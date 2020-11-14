import React from 'react';
import HomeStackNavigator from "./HomeStackNavigator/home-stack-navigator";
import DownloadStackNavigator from "./DownloadStackNavigator/download-stack-navigator";
import Browse from "../../Main/Browse/browse";
import Search from "../../Main/Search/search";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import BrowseStackNavigator from "./BrowseStackNavigator/browse-stack-navigator";
import SearchTabNavigator from "./SearchStackNavigator/SearchTabNavigator/search-tab-navigator";
import SearchStackNavigator from "./SearchStackNavigator/search-stack-navigator";

const Tab = createBottomTabNavigator()

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
            case 'BrowseStackNavigator':
                iconName = 'ios-browsers';
                break;
            case 'SearchStackNavigator':
                iconName = 'ios-search';
                break;
        }
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
    },
})

const MainTabNavigator = (props) => {
    return (
        <Tab.Navigator initialRouteName="HomeStackNavigator"
                       screenOptions={MainTabNavigatorScreenOptions}
                       backBehavior="initialRoute"
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
            <Tab.Screen name="BrowseStackNavigator" component={BrowseStackNavigator} options={{title: "Browse"}}/>
            <Tab.Screen name="SearchStackNavigator" component={SearchStackNavigator} options={{title: "Search"}}/>
        </Tab.Navigator>
    );
};

export default MainTabNavigator;
