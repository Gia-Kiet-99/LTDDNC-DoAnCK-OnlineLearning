import React from 'react';
import {
    StyleSheet,
    View,
    StatusBar
} from 'react-native';
import Register from "./src/components/Authentication/Register/register";
import Login from "./src/components/Authentication/Login/login";
import Home from "./src/components/Main/Home/home";
import Browse from "./src/components/Main/Browse/browse";
import ForgetPassword from "./src/components/Authentication/ForgetPassword/forget-password";
import VerifyPassword from "./src/components/Authentication/VerifyPassword/verify-password";
import Profile from "./src/components/AccountManagement/Profile/profile";
import Setting from "./src/components/AccountManagement/Setting/setting";
import CourseList from "./src/components/Courses/ListCourses/course-list";
import Download from "./src/components/Main/Download/download";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content"/>
      <Download/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});



