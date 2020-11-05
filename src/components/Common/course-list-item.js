import React, {useState} from 'react';
import {StyleSheet,Image, View,Text, TouchableOpacity} from 'react-native';
import Menu, {MenuItem, MenuDivider} from "react-native-material-menu";
import Rating from "./rating";

const CourseListItem = (props) => {
    const data = props.item;
    const [menu,setMenu] = useState(null);

    const showMenu = () => {
        menu.show();
    }

    const hideMenu = () => {
        menu.hide();
    }

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={data.image}/>
            </View>
            <View style={styles.description}>
                <Text style={styles.title}>
                    {data.title}
                </Text>
                <Text style={styles.darkText}>
                    {data.author}
                </Text>

                <Text style={styles.darkText}>
                    {`${data.level} . ${data.released} . ${data.duration}`}
                </Text>

                <View>
                    <Rating/>
                </View>
            </View>
            <TouchableOpacity style={styles.menuWrapper} onPress={showMenu}>
                <Menu
                    ref={ref => setMenu(ref)}
                    button={
                        <Image style={{height: 24,width: 24}} source={require('../../../assets/icon-menu-vertical.png')}/>
                    }>
                    <MenuItem onPress={hideMenu}>Bookmark</MenuItem>
                    <MenuItem onPress={hideMenu}>Add to channel</MenuItem>
                    <MenuDivider/>
                    <MenuItem onPress={hideMenu}>Download</MenuItem>
                </Menu>
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 15,
        marginHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    imageWrapper: {
        flex: 4,
        height: 64,
    },
    image: {
        height: '100%',
        width: '100%',
    },
    description: {
        flex: 8,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 16
    },
    darkText: {
        fontSize: 12,
        color: 'gray'
    },
    menuWrapper: {
        // flex: 1,
        justifyContent: 'center',
    }
})

export default CourseListItem;
