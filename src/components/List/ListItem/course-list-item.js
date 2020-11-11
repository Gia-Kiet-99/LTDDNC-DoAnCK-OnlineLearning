import React, {useState} from 'react';
import {StyleSheet,Image, View,Text, TouchableOpacity} from 'react-native';
import Menu, {MenuItem} from "react-native-material-menu";
import CourseInfo from "../../Common/course-info";

const CourseListItem = (props) => {
    const [menu,setMenu] = useState(null);
    // const navigation = props.navigation;

    const showMenu = () => {
        menu.show();
    }
    const doNothing = () => {
    }
    const onPressListItem = () => {
        if (props.navigation !== undefined) {
            props.navigation.navigate("CourseDetail", {item: props.item})
        }
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPressListItem}
        >
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={props.item.image}/>
            </View>
            <CourseInfo
                containerStyle={courseInfoStyle.container}
                titleStyle={courseInfoStyle.largerTitle}
                title={props.item.title}
                author={props.item.authorName}
                level={props.item.level}
                released={props.item.released}
                duration={props.item.duration}
                style={{fontSize: 16}}
            />
            <TouchableOpacity style={styles.menuWrapper} onPress={showMenu}>
                <Menu
                    ref={ref => setMenu(ref)}
                    button={
                        <Image style={{height: 24,width: 24}} source={require('../../../../assets/icon-menu-vertical.png')}/>
                    }>
                    <MenuItem onPress={doNothing}>Bookmark</MenuItem>
                    <MenuItem onPress={doNothing}>Add to channel</MenuItem>
                    <MenuItem onPress={doNothing}>Download</MenuItem>
                </Menu>
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const courseInfoStyle = StyleSheet.create({
    container: {
        marginLeft: 10,
    },
    largerTitle: {
        fontSize: 16,
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 15,
    },
    imageWrapper: {
        // flex: 3,
        width: 80,
        height: 64,
    },
    image: {
        height: '100%',
        width: '100%',
    },
    menuWrapper: {
        justifyContent: 'center',
    }
})

export default CourseListItem;
