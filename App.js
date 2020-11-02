import React from 'react';
import {
    StyleSheet,
    View,
    StatusBar
} from 'react-native';
import Register from "./src/components/Authentication/Register/register";
import Login from "./src/components/Authentication/Login/login";
import Home from "./src/components/Main/Home/home";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" translucent={false}/>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#333'
    },

    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});



