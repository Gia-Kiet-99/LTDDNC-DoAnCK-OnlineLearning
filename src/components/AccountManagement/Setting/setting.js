import React, {useContext, useState} from 'react';
import {Alert, Pressable, Switch, ScrollView, TouchableOpacity, Text, Image ,View,StyleSheet} from 'react-native';
import {AuthenticationContext} from "../../../provider/authentication-provider";

const AccountInfo = (props) => {
    const {authentication} = useContext(AuthenticationContext)

    const onProfilePress = () => {
        if(props.navigation !== undefined) {
            props.navigation.navigate("Profile");
        }
    }
    return (
        <View style={styles.accountInfoContainer}>
            <TouchableOpacity style={[styles.button, {flexDirection: 'row', alignItems:'center'}]}
                onPress={onProfilePress}>
                <Image style={styles.image} source={require('../../../../assets/avatar.jpg')}/>
                <View style={{paddingLeft: 15}}>
                    <Text>{authentication.user.username}</Text>
                    <Text style={{fontSize: 12}}>{authentication.user.username}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Subscription</Text>
                <Text style={{fontSize: 13, color: 'gray'}}>Pluralsight One Code.org (Limited Library) (Free)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Communication Preferences</Text>
            </TouchableOpacity>
        </View>
    )
}

const Options = () => {
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const [isEnabled4, setIsEnabled4] = useState(false);
    const [isEnabled5, setIsEnabled5] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(!isEnabled1);
    const toggleSwitch2 = () => setIsEnabled2(!isEnabled2);
    const toggleSwitch3 = () => setIsEnabled3(!isEnabled3);
    const toggleSwitch4 = () => setIsEnabled4(!isEnabled4);
    const toggleSwitch5 = () => setIsEnabled5(!isEnabled5);

    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Default caption language</Text>
                <Text style={{fontSize: 13}}>English</Text>
            </TouchableOpacity>

            <Pressable style={styles.button} onPress={toggleSwitch1}>
                <View style={styles.switchWrapper}>
                    <Text style={styles.buttonText}>Require Wi-Fi for streaming</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled1 ? "#f5dd4b" : "#f4f3f4"}
                        onValueChange={toggleSwitch1}
                        value={isEnabled1}
                    />
                </View>
            </Pressable>

            <Pressable style={styles.button} onPress={toggleSwitch2}>
                <View style={styles.switchWrapper}>
                    <Text style={styles.buttonText}>Require Wi-Fi for downloading</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
                        onValueChange={toggleSwitch2}
                        value={isEnabled2}
                    />
                </View>
            </Pressable>

            <Pressable style={styles.button} onPress={toggleSwitch3}>
                <View style={styles.switchWrapper}>
                    <Text style={styles.buttonText}>Show quiz at the end of video</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled3 ? "#f5dd4b" : "#f4f3f4"}
                        onValueChange={toggleSwitch3}
                        value={isEnabled3}
                    />
                </View>
            </Pressable>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Download location</Text>
                <Text style={{fontSize: 13}}>Default location (8.03 GB free of 23.58 GB)</Text>
            </TouchableOpacity>

            <Pressable style={styles.button} onPress={toggleSwitch4}>
                <View style={styles.switchWrapper}>
                    <View style={{flex:6}}>
                        <Text style={styles.buttonText}>Recommended content push notifications</Text>
                        <Text >Receive notification about recommended content</Text>
                    </View>
                    <Switch style={{flex:1}}
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled4 ? "#f5dd4b" : "#f4f3f4"}
                        onValueChange={toggleSwitch4}
                        value={isEnabled4}
                    />
                </View>
            </Pressable>

            <Pressable style={styles.button} onPress={toggleSwitch5}>
                <View style={styles.switchWrapper}>
                    <View style={{flex:6}}>
                        <Text style={styles.buttonText}>Reminder to learn notifications</Text>
                        <Text>Schedule the app to remind you to learn to skill up faster and conquer your goals</Text>
                    </View>
                    <Switch style={{flex:1}}
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled5 ? "#f5dd4b" : "#f4f3f4"}
                        onValueChange={toggleSwitch5}
                        value={isEnabled5}
                    />
                </View>
            </Pressable>
        </View>
    )
}

const Detail = (props) => {
    const onSignOut = () => (
        Alert.alert(
            "Sign out",
            "Are you sure?",
            [
                {
                    text: 'Ok',
                    onPress: () => props.navigation.navigate("Authentication")
                },
                {
                    text: 'Cancel',
                    style: 'cancel'
                }
            ]
        )
    )
    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Captions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Advance Options</Text>
            </TouchableOpacity>

            <View style={styles.button}>
                <Text style={styles.buttonText}>App version</Text>
                <Text style={{fontSize: 13}}>2.38.0</Text>
            </View>

            <TouchableOpacity onPress={onSignOut} style={styles.signOutButton}>
                <Text style={styles.signOutText}>SIGN OUT</Text>
            </TouchableOpacity>
        </View>
    )
}

const Setting = (props) => {
    return (
        <View>
            <ScrollView>
                <AccountInfo navigation={props.navigation}/>
                <Options/>
                <Detail navigation={props.navigation}/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    accountInfoContainer: {

    },
    button: {
        padding: 15,
        borderBottomWidth: 0.3,
        borderBottomColor: 'lightgray'
    },
    image: {
        height: 48,
        width: 48
    },
    buttonText: {
        fontSize: 18
    },
    switchWrapper: {
        flex: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    signOutButton: {
        padding: 10,
        borderRadius: 5,
        marginVertical: 20,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: "#2e97ff",
    },
    signOutText: {
        fontSize: 16,
        color: '#2e97ff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default Setting;
