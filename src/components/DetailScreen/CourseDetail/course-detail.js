import React, {createContext, useContext, useEffect, useState} from 'react';
import {Image, StyleSheet, View, Text, Alert, ScrollView, TouchableOpacity} from 'react-native';
import Rating from "../../Common/rating";
import VideoPlayer from "./VideoPlayer/video-player";
import LessonTabNavigator from "../../Navigators/MainTabNavigator/LessonTabNavigator/lesson-tab-navigator";
import {CourseContext} from "../../../provider/course-provider";
import {exp} from "react-native-reanimated";


const CourseDetail = (props) => {
    // const renderAuthorButton = (author) => {
    //     return author.map(item => <AuthorButton author={item}/>)
    // }

    const {updateCourseList, getCourseFromId} = useContext(CourseContext)

    /* get course id */
    const courseId = props.route.params.courseId
    /* get course data from id */
    const item = getCourseFromId(courseId)
    // console.log("CourseDetail", item)

    const [isExpanded, setIsExpanded] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(item.isFavorite);
    const [isDownloaded, setIsDownloaded] = useState(item.isDownload);

    const onAuthorButtonPressed = () => {
        if (props.navigation !== undefined) {
            props.navigation.navigate("AuthorDetailStackNavigator",
                {
                    screen: "AuthorDetail",
                    params: {
                        data: item
                    }
                })
        }
    }

    const onBookmarkButtonPressed = () => {
        setIsBookmarked(!isBookmarked)
    }
    useEffect(() => {
        item.isFavorite = isBookmarked
        updateCourseList(item.id, item)
    }, [isBookmarked])

    const onDownloadButtonPressed = () => {
        if (isDownloaded === true) {
            Alert.alert("Remove download", "Are you sure you want to remove downloaded course?",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    {text: "Remove", onPress: () => setIsDownloaded(false)}
                ],
                {cancelable: false}
            );
        } else {
            setIsDownloaded(true)
        }
    }
    useEffect(() => {
        item.isDownload = isDownloaded
        updateCourseList(item.id, item)
    }, [isDownloaded])

    const AuthorButton = () => {
        return <TouchableOpacity
            style={styles.authorWrapper}
            onPress={onAuthorButtonPressed}
        >
            <Image style={styles.avatar} source={item.authorAvatar}/>
            <Text>{item.authorName}</Text>
        </TouchableOpacity>
    }
    const showAlert = () => Alert.alert('Add to channel')

    const CourseInfo = () => {
        return <View style={styles.courseInfo}>
            <Text style={{fontSize: 24}}>{item.title}</Text>

            <AuthorButton/>
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
            <TouchableOpacity style={styles.button} onPress={onBookmarkButtonPressed}>
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.buttonImage}
                        source={(isBookmarked === true) ? require('../../../../assets/bookmarked-icon.png') : require('../../../../assets/bookmark-icon.png')}/>
                </View>
                <Text style={styles.buttonText}>{(isBookmarked === true) ? 'Bookmarked' : 'Bookmark'}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={showAlert} style={[styles.button, {marginHorizontal: 10}]}>
                <View style={styles.imageWrapper}>
                    <Image style={styles.buttonImage} source={require('../../../../assets/channel-icon.png')}/>
                </View>
                <Text style={[styles.buttonText, {textAlign: 'center'}]}>Add to Channel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={onDownloadButtonPressed}>
                <View style={styles.imageWrapper}>
                    {
                        isDownloaded ?
                            <Image style={styles.buttonImage} source={require('../../../../assets/downloaded.png')}/>
                            :
                            <Image style={styles.buttonImage} source={require('../../../../assets/download.png')}/>
                    }
                </View>
                <Text style={styles.buttonText}>{isDownloaded ? "Downloaded" : "Download"}</Text>
            </TouchableOpacity>
        </View>
    }
    const CourseDescription = () => {
        return <View>
            <View style={(isExpanded === true) ? styles.courseDescription : styles.briefCourseDescription}>
                <View style={styles.desWrapper}>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae ex incidunt distinctio veniam
                        vero vel
                        ratione! Maiores nihil veritatis nulla doloremque quidem minus, enim, praesentium quasi repellat
                        saepe
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
                <Image style={{height: 25, width: 25, marginRight: 8}}
                       source={require('../../../../assets/check.png')}/>
                <Text>Take a learning check</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.largeButton}
                onPress={() => props.navigation.push("CourseDetail", {item: item})}
            >
                <Image style={{height: 25, width: 25, marginRight: 8}}
                       source={require('../../../../assets/folder.png')}/>
                <Text>View related paths & courses</Text>
            </TouchableOpacity>
        </View>
    }

    const [scrollView, setScrollView] = useState(null)
    const onLessonItemPressed = () => {
        scrollView.scrollTo({x: 0, y: 0, animated: true})
    }

    return (
        <CourseDetailContext.Provider value={{item, onLessonItemPressed}}>
            <View style={styles.container}>
                {/*<StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content"/>*/}
                <VideoPlayer navigation={props.navigation}/>
                <ScrollView ref={ref => setScrollView(ref)}
                            showsVerticalScrollIndicator={false}>
                    <CourseIntro/>
                    <LessonTabNavigator />
                </ScrollView>
            </View>
        </CourseDetailContext.Provider>
    )
}

export const CourseDetailContext = createContext()


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
        borderRadius: 36 / 2,
        alignSelf: 'baseline'
    },
    avatar: {
        height: 25,
        width: 25,
        marginRight: 5,
        borderRadius: 30 / 2,
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
        borderRadius: 40 / 2,
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
