import React from 'react';
import {View, TextInput} from 'react-native';

const Login = () => {
    return (
        <View>
            <TextInput secureTextEntry={true} style={styles.default} value="abc" />
        </View>
    );
};

export default Login;
