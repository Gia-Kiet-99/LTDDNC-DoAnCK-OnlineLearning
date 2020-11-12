import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const SkillSectionItem = (props) => {

    const onItemPressed = () => {
        if(props.navigation !== undefined) {
            props.navigation.navigate("SkillStackNavigator",
                {
                    screen: "SkillDetail",
                    params: {
                        item: props.item
                    }
                })
        }
    }

    return (
        <TouchableOpacity style={styles.button} onPress={onItemPressed}>
            <Text style={styles.buttonText}>{props.item.skill}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        paddingTop: 6,
        paddingBottom: 8,
        paddingHorizontal: 15,
        backgroundColor: 'lightgray',
        borderRadius: 18,
        marginLeft: 5,
        marginVertical: 10
    },
    buttonText: {
        justifyContent: 'center',
    }
})

export default SkillSectionItem;
