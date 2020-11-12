import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ImageBackground, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {listName} from "../../globals/constants";

const ImageButton = (props) => {

    // const onButtonPressed = () => {
    //     if (props.navigation !== undefined) {
    //         props.navigation.navigate("ListStack",
    //             {
    //                 screen: "StudyList",
    //                 params: {
    //                     item: props.item,
    //                     kind: listName.course,
    //                     listHeaderComponent: (
    //                         <View style={{position: 'relative'}}>
    //                             <ImageBackground style={[styles.button, props.style]}
    //                                              source={props.item.source}>
    //                                 <Text>{props.title}</Text>
    //                             </ImageBackground>
    //                             <MaterialIcons name="arrow-back" size={24} color="black" />
    //                         </View>
    //                     )
    //                 }
    //             })
    //     }
    // }

    return (
        <ImageBackground
            style={[styles.button, props.style]}
            source={props.item.source}
            // onPress={onButtonPressed}
        >
            <TouchableOpacity style={styles.touch}>
                <Text style={styles.text}>{props.item.title}</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 100,
        // marginHorizontal: 5,
        marginTop: 5,
        overflow: 'hidden'
    },
    touch: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        // backgroundColor: 'pink'
    }
})

export default ImageButton;
