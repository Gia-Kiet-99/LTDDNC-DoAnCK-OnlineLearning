import React, {useState} from 'react';
import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
import Menu, {MenuItem} from "react-native-material-menu";

const LessonSectionHeader = (props) => {
    const header = props.section;
    const [menu,setMenu] = useState(null);

    const showMenu = () => {
        menu.show();
    }
    const doNothing = () => {
    }
    return (
        <View style={styles.header}>
            <View style={styles.fakeImage}/>
            <View style={styles.lessonInfo}>
                <Text>{props.title}</Text>
                <Text>{props.totalDuration}</Text>
            </View>
            <TouchableOpacity style={styles.menuWrapper} onPress={showMenu}>
                <Menu
                    ref={ref => setMenu(ref)}
                    button={
                        <Image style={{height: 24,width: 24}} source={require('../../../../../assets/icon-menu-vertical.png')}/>
                    }>
                    <MenuItem onPress={doNothing}>Bookmark</MenuItem>
                    <MenuItem onPress={doNothing}>Download Module</MenuItem>
                </Menu>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 15,
        flexDirection: 'row',
    },
    fakeImage: {
        height: 50,
        width: 50,
        backgroundColor: "gray"
    },
    lessonInfo: {
        flex: 1,
        marginLeft: 10
    },
    menuWrapper: {
        justifyContent: 'center',
    }
})

export default LessonSectionHeader;
