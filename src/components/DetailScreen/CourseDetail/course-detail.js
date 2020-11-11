import React, {useState} from 'react';
import {Image, StyleSheet, View, Text, Alert, ScrollView,StatusBar, TouchableOpacity} from 'react-native';
import Rating from "../../Common/rating";
import VideoPlayer from "./VideoPlayer/video-player";
import LessonNavigator from "../../Navigators/MainTabNavigator/LessonNavigator/lesson-navigator";
import {NavigationContainer} from "@react-navigation/native";
import LessonList from "./ListLesson/lesson-list";

const AuthorButton = (props) => {
    return <TouchableOpacity style={styles.authorWrapper}>
        <Image style={styles.avatar} source={props.avatar}/>
        <Text>{props.name}</Text>
    </TouchableOpacity>
}

const renderAuthorButton = (author) => {
    return author.map(item => <AuthorButton author={item}/>)
}

const CourseDetail = (props) => {
    const item = props.route.params.item;
    // console.log(props);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const showAlert = () => Alert.alert('Add to channel')
    const CourseInfo = () => {
        return <View style={styles.courseInfo}>
            <Text style={{fontSize: 24}}>{item.title}</Text>

            <AuthorButton name={item.authorName} avatar={item.authorAvatar}/>
            {/*<ScrollView style={{marginTop: 5}} horizontal={true} showsHorizontalScrollIndicator={false}>*/}
            {/*    {renderAuthorButton(item.author)}*/}
            {/*</ScrollView>*/}

            <View style={{flexDirection: 'row', marginTop: 10}}>
                <Text style={{color: 'gray', marginRight: 10, fontSize: 13}}>
                    {`${item.level} . ${item.released} . ${item.duration}`}
                </Text>
                <Rating/>
            </View>
        </View>
    }
    const CourseButton = () => {
        return <View style={styles.buttonViewGroup}>
            <TouchableOpacity style={styles.button} onPress={() => setIsBookmarked(!isBookmarked)}>
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.buttonImage}
                        source={(isBookmarked === true) ? require('../../../../assets/bookmarked-icon.png') : require('../../../../assets/bookmark-icon.png')}/>
                </View>
                <Text style={styles.buttonText}>{(isBookmarked === true) ? 'Bookmarked' : 'Bookmark'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={showAlert}
                style={[styles.button, {marginHorizontal: 10}]}>
                <View style={styles.imageWrapper}>
                    <Image style={styles.buttonImage} source={require('../../../../assets/channel-icon.png')}/>
                </View>
                <Text style={[styles.buttonText, {textAlign: 'center'}]}>Add to Channel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <View style={styles.imageWrapper}>
                    <Image style={styles.buttonImage} source={require('../../../../assets/download-icon.png')}/>
                </View>
                <Text style={styles.buttonText}>Download</Text>
            </TouchableOpacity>
        </View>
    }
    const CourseDescription = () => {
        return <View>
            <View style={(isExpanded === true) ? styles.courseDescription : styles.briefCourseDescription}>
                <View style={styles.desWrapper}>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae ex incidunt distinctio veniam vero vel
                        ratione! Maiores nihil veritatis nulla doloremque quidem minus, enim, praesentium quasi repellat saepe
                        temporibus perspiciatis.</Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.expandButton}
                    onPress={() => setIsExpanded(!isExpanded)}>
                    <Image style={styles.expandImage}
                           source={(isExpanded === true) ? require('../../../../assets/up-arrow.png') : require('../../../../assets/down-arrow.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    }
    const CourseIntro = () => {
        return <View style={styles.courseIntro}>
            <CourseInfo item={props.item}/>
            <CourseButton/>
            <CourseDescription/>

            <TouchableOpacity style={styles.largeButton}>
                <Image style={{height: 25, width: 25, marginRight: 8}} source={require('../../../../assets/check.png')}/>
                <Text>Take a learning check</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.largeButton}
                onPress={() => props.navigation.push("CourseDetail", {item: item})}
            >
                <Image style={{height: 25, width: 25, marginRight: 8}} source={require('../../../../assets/folder.png')}/>
                <Text>View related paths & courses</Text>
            </TouchableOpacity>
        </View>
    }

    return (
        <View style={styles.container}>
            {/*<StatusBar translucent={true}/>*/}
            <VideoPlayer/>
            <ScrollView>
                <CourseIntro/>
                <View>
                    <LessonNavigator/>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    courseIntro: {
        // flex: 1,
        padding: 15,
        backgroundColor: '#fff'
    },
    largeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd',
        marginTop: 10,
        paddingVertical: 10,
        borderRadius: 5,
    },
    courseInfo: {
        // backgroundColor: 'pink'
    },
    authorWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        padding: 3,
        paddingRight: 15,
        marginTop: 8,
        marginRight: 8,
        borderRadius: 36/2,
        alignSelf: 'baseline'
    },
    avatar: {
        height: 25,
        width: 25,
        marginRight: 5,
        borderRadius: 30/2,
    },
    buttonViewGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        // backgroundColor: 'lightblue'
    },
    button: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'pink',
        // paddingTop: 10
    },
    imageWrapper: {
        backgroundColor: 'lightgray',
        width: 40,
        height: 40,
        borderRadius: 40/2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonImage: {
        height: '50%',
        width: '50%',
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#555'
    },
    courseDescription: {
        flexDirection: 'row',
        marginTop: 20,
        // backgroundColor: 'beige'
    },
    briefCourseDescription: {
        height: 50,
        flexDirection: 'row',
        marginTop: 20,
        // backgroundColor: 'beige',
        overflow: 'hidden',
    },
    desWrapper: {
        flex: 1,
    },
    expandButton: {
        backgroundColor: '#ddd',
        padding: 8,
        borderRadius: 5,
        justifyContent: 'center'
    },
    expandImage: {
        height: 12,
        width: 12
    },
})

export default CourseDetail;
