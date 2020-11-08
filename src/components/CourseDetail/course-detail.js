import React, {useState} from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Rating from "../Common/rating";

const info = {
    title: 'C# Fundamentals',
    authorName: 'Scott Allen',
    authorAvatar: require('../../../assets/girl.jpg'),
    level: 'Beginner',
    released: 'Apr 16 2019',
    duration: '6h 10m',
    rating: 5,
}

const CourseDetail = (props) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const CourseInfo = () => (
        <View>
            <Text style={{fontSize: 22}}>{info.title}</Text>
            <TouchableOpacity style={styles.authorWrapper}>
                <Image style={styles.avatar} source={info.authorAvatar}/>
                <Text>{info.authorName}</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 10}}>
                <Text style={{color: 'gray', marginRight: 10, fontSize: 13}}>{`${info.level} . ${info.released} . ${info.duration}`}</Text>
                <Rating/>
            </View>
        </View>
    )

    const CourseButton = () => (
        <View style={styles.buttonViewGroup}>
            <TouchableOpacity style={styles.button} onPress={() => setIsBookmarked(!isBookmarked)}>
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.buttonImage}
                        source={(isBookmarked === true) ? require('../../../assets/bookmarked-icon.png') : require('../../../assets/bookmark-icon.png')}/>
                </View>
                <Text style={styles.buttonText}>{(isBookmarked === true) ? 'Bookmarked' : 'Bookmark'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {marginHorizontal: 10}]}>
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
    )
    const CourseDetailInfo = () => (
        <View style={styles.courseDetailInfo}>
            <CourseInfo/>
            <CourseButton/>

        </View>
    )


    return (
        <View style={styles.container}>
            <CourseDetailInfo/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    courseDetailInfo: {

    },
    authorWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        padding: 3,
        paddingRight: 15,
        marginTop: 8,
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
    }
})

export default CourseDetail;
