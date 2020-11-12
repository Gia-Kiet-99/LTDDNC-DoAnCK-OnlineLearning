import React from 'react';
import {TouchableOpacity,StyleSheet,Text, View,Image} from 'react-native';

const AuthorSectionItem = (props) => {

    const onItemPressed = () => {
        return props.navigation?.navigate("AuthorDetailStackNavigator",
            {
                screen: "AuthorDetail",
                params: {
                    data: props.item
                }
            })
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onItemPressed}
        >
            <View style={styles.content}>
                <Image style={styles.image} source={require('../../../../../assets/avatar.png')}/>
                <View style={styles.description}>
                    <Text style={styles.text}>
                        {props.item.name}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginLeft: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    content: {
        width: 90,
        // height: 150
    },
    description: {
        flex: 1,
        paddingTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 90,
        width: '100%'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default AuthorSectionItem;
