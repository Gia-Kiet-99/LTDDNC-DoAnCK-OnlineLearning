import React, {useState} from 'react';
import {
    Image,
    StyleSheet,
    View,
    Text,
    Alert,
    ScrollView,
    TouchableOpacity} from 'react-native';
import Rating from "../Common/rating";

const info = {
    title: 'C# Fundamentals',
    author: [
        {
            authorName: 'Scott Allen',
            authorAvatar: require('../../../assets/girl.jpg'),
        },
        {
            authorName: 'Gia Kiet',
            authorAvatar: require('../../../assets/girl.jpg'),
        },
    ],
    level: 'Beginner',
    released: 'Apr 16 2019',
    duration: '6h 10m',
    rating: 5,
}

const AuthorButton = (props) => {
    return <TouchableOpacity style={styles.authorWrapper}>
        <Image style={styles.avatar} source={props.item.authorAvatar}/>
        <Text>{props.item.authorName}</Text>
    </TouchableOpacity>
}

const renderAuthorButton = (author) => {
    return author.map(item => <AuthorButton item={item}/>)
}

const CourseDetail = (props) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const CourseInfo = () => (
        <View style={styles.courseInfo}>
            <Text style={{fontSize: 24}}>{info.title}</Text>

            <ScrollView style={{marginTop: 5}} horizontal={true} showsHorizontalScrollIndicator={false}>
                {renderAuthorButton(info.author)}
            </ScrollView>

            <View style={{flexDirection: 'row', marginTop: 10}}>
                <Text style={{color: 'gray', marginRight: 10, fontSize: 13}}>
                    {`${info.level} . ${info.released} . ${info.duration}`}
                </Text>
                <Rating/>
            </View>
        </View>
    )
    const showAlert = () => Alert.alert('Add to channel')

    const CourseButton = () => {
        return <View style={styles.buttonViewGroup}>
            <TouchableOpacity style={styles.button} onPress={() => setIsBookmarked(!isBookmarked)}>
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.buttonImage}
                        source={(isBookmarked === true) ? require('../../../assets/bookmarked-icon.png') : require('../../../assets/bookmark-icon.png')}/>
                </View>
                <Text style={styles.buttonText}>{(isBookmarked === true) ? 'Bookmarked' : 'Bookmark'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={showAlert}
                style={[styles.button, {marginHorizontal: 10}]}>
                <View style={styles.imageWrapper}>
                    <Image style={styles.buttonImage} source={require('../../../assets/channel-icon.png')}/>
                </View>
                <Text style={[styles.buttonText, {textAlign: 'center'}]}>Add to Channel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <View style={styles.imageWrapper}>
                    <Image style={styles.buttonImage} source={require('../../../assets/download-icon.png')}/>
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
                           source={(isExpanded === true) ? require('../../../assets/up-arrow.png') : require('../../../assets/down-arrow.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    }
    const CourseIntro = () => {
        return <View style={styles.courseIntro}>
            <CourseInfo/>
            <CourseButton/>
            <CourseDescription/>

            <TouchableOpacity style={styles.largeButton}>
                <Image style={{height: 25, width: 25, marginRight: 8}} source={require('../../../assets/check.png')}/>
                <Text>Take a learning check</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.largeButton}>
                <Image style={{height: 25, width: 25, marginRight: 8}} source={require('../../../assets/folder.png')}/>
                <Text>View related paths & courses</Text>
            </TouchableOpacity>
        </View>
    }


    return (
        <View style={styles.container}>
            <CourseIntro/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    courseIntro: {
        flexDirection: 'column'
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
