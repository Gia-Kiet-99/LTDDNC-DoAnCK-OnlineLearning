import React from 'react';
import {TouchableOpacity, Text, Image, View, StyleSheet} from 'react-native';
import PathInfo from "../../../Common/path-info";

const Separator = () => {
    return (
        <View style={{borderBottomColor: 'lightblue', borderBottomWidth: 3}}/>
    )
}

const PathsSectionItem = (props) => {
    const onItemPressed = () => {
        if (props.navigation !== undefined) {
            props.navigation.navigate("PathDetailStackNavigator",
                {
                    screen: "PathDetail",
                    params: {
                        item: props.item
                    }
                })
        }
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onItemPressed}
        >
            <View style={styles.item}>
                <Image style={styles.image} source={require('../../../../../assets/react.png')}/>
                <Separator/>
                <PathInfo
                    containerStyle={{padding: 10}}
                    title={props.item.title}
                    count={props.item.count}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        // backgroundColor: "lightblue"
    },
    item: {
        // flex: 1,
        width: 200,
        height: 200,
        borderRadius: 5,
        backgroundColor: '#eee',
        overflow: 'hidden',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 5,
    },
    image: {
        height: 100,
        width: '100%'
    }
})

export default PathsSectionItem;
