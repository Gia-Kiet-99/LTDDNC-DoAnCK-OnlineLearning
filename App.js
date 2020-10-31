import React from 'react';
import {
    StyleSheet,
    View,
    StatusBar
} from 'react-native';
import Login from "./src/components/Authentication/Login/login";

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
    },

    title: {
        textAlign: 'center',
        marginVertical: 8,
        // backgroundColor: 'beige'
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});



