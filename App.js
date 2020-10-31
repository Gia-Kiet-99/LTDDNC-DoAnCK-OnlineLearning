import React from 'react';
import {
    StyleSheet,
    View,
    StatusBar
} from 'react-native';
import Register from "./src/components/Authentication/Register/register";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" translucent={true}/>
      <Register/>
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



