import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ChannelInfo from "../../Common/channel-info";

const ChannelDetail = (props) => {
    const item = props.route.params.item;
    const [isExpanded, setIsExpanded] = useState(false);

    const ChannelInfo = () => {
        return <View style={styles.courseInfo}>
            <Text style={{fontSize: 24}}>{item.title}</Text>

            <View style={{flexDirection: 'row', marginTop: 10}}>
                <Text style={{color: 'gray', marginRight: 10, fontSize: 13}}>
                    {`${item.level} . ${item.follow}`}
                </Text>
            </View>
        </View>
    }
    const ChannelDescription = () => {
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
    return (
        <View style={styles.container}>
            <ChannelInfo
                title={item.title}
                level={item.level}
                follow={item.follow}
                style={{fontSize: 16}}
                containerStyle={{
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                }}
                // titleStyle={channelInfoStyle.largerTitle}
            />
            <ChannelDescription/>
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
    // largeButton: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: '#ddd',
    //     marginTop: 10,
    //     paddingVertical: 10,
    //     borderRadius: 5,
    // },
    courseInfo: {
        // backgroundColor: 'pink'
    },
    // authorWrapper: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     backgroundColor: 'lightgray',
    //     padding: 3,
    //     paddingRight: 15,
    //     marginTop: 8,
    //     marginRight: 8,
    //     borderRadius: 36/2,
    //     alignSelf: 'baseline'
    // },
    // avatar: {
    //     height: 25,
    //     width: 25,
    //     marginRight: 5,
    //     borderRadius: 30/2,
    // },
    // buttonViewGroup: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     marginTop: 20,
    //     // backgroundColor: 'lightblue'
    // },
    // button: {
    //     flex: 1,
    //     alignItems: 'center',
    //     // backgroundColor: 'pink',
    //     // paddingTop: 10
    // },
    // imageWrapper: {
    //     backgroundColor: 'lightgray',
    //     width: 40,
    //     height: 40,
    //     borderRadius: 40/2,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    // buttonImage: {
    //     height: '50%',
    //     width: '50%',
    // },
    // buttonText: {
    //     fontWeight: 'bold',
    //     color: '#555'
    // },
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

export default ChannelDetail;
