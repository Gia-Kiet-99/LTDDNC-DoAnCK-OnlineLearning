import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const SectionHeader = (props) => {
    const onSeeAllPressed = () => (
        props.navigation?.navigate("ListStack",
            { //data pass to StudyList
                screen: "StudyList",
                params: {
                    title: props.title,
                    kind: props.kind,
                    style: {
                        marginHorizontal: 15
                    }
                }
            })
    )
    return (
        <View style={styles.headerWrapper}>
            <Text style={styles.header}>
                {props.title}
            </Text>
            {props.showButton === true &&
            <TouchableOpacity onPress={onSeeAllPressed} style={styles.detailButton}>
                <Text style={styles.text}>See all ></Text>
            </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        flex: 1,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginBottom: 10,
    },
    header: {
        flex: 1,
        color: '#444',
        fontWeight: 'bold',
        fontSize: 18,
        // marginRight: 10
    },
    detailButton: {
        backgroundColor: 'lightgray',
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 25,
    },
    text: {
        fontSize: 12,
    }
})

export default SectionHeader;
