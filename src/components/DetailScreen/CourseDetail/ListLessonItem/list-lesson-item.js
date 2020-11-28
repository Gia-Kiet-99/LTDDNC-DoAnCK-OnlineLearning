import React, {useContext} from 'react';
import {Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {CourseDetailContext} from "../course-detail";

const ListLessonItem = (props) => {
    const {onLessonItemPressed} = useContext(CourseDetailContext)
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => onLessonItemPressed()}>
            <Image style={styles.icon} source={require('../../../../../assets/gray-dot.png')}/>
            <Text style={{flex: 1, marginLeft: 10}}>{props.item.title}</Text>
            <Text>{props.item.duration}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        height: 8,
        width: 8,
    }
})

export default ListLessonItem;
