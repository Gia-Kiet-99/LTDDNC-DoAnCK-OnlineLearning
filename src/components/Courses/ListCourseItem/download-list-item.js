import React, {useState} from 'react';
import {StyleSheet,Image, View,Text, TouchableOpacity} from 'react-native';
import Rating from "../../Common/rating";
import Menu, {MenuItem} from "react-native-material-menu";
import CourseInfo from "../../Common/course-info";

const DownloadListItem = (props) => {
    const data = props.item;
    const [menu,setMenu] = useState(null);

    const showMenu = () => {
        menu.show();
    }
    const doNothing = () => {

    }

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={data.image}/>
            </View>
            {/*<View style={styles.description}>*/}
            {/*    <Text style={styles.title}>*/}
            {/*        {data.title}*/}
            {/*    </Text>*/}
            {/*    <Text style={styles.darkText}>*/}
            {/*        {data.author}*/}
            {/*    </Text>*/}

            {/*    <Text style={styles.darkText}>*/}
            {/*        {`${data.level} . ${data.released} . ${data.duration}`}*/}
            {/*    </Text>*/}

            {/*    <View>*/}
            {/*        <Rating/>*/}
            {/*    </View>*/}
            {/*</View>*/}
            <CourseInfo
                containerStyle={courseInfoStyle.container}
                titleStyle={courseInfoStyle.largerTitle}
                title={props.item.title}
                author={props.item.author}
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
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
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
