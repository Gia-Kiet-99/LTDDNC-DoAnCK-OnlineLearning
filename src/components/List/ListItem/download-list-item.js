import React, {useState} from 'react';
import {StyleSheet,Image, View,Text, TouchableOpacity} from 'react-native';
import Menu, {MenuItem} from "react-native-material-menu";
import CourseInfo from "../../Common/course-info";

const DownloadListItem = (props) => {
    const item = props.item;
    const [menu,setMenu] = useState(null);

    const showMenu = () => {
        menu.show();
    }
    const doNothing = () => {

    }
    const onItemPressed = () => {
        if(props.navigation !== undefined) {
            props.navigation.navigate("CourseDetail",
                {
                    item: item
                })
        }
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onItemPressed}
        >
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={item.image}/>
            </View>
            <CourseInfo
                containerStyle={courseInfoStyle.container}
                titleStyle={courseInfoStyle.largerTitle}
                title={item.title}
                author={item.authorName}
                level={item.level}
                released={item.released}
                duration={item.duration}
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
                    <MenuItem onPress={doNothing}>Remove Download</MenuItem>
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

export default DownloadListItem;
