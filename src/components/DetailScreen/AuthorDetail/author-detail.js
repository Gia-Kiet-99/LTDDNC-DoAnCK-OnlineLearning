import React, {useState} from 'react';
import {View, Image, StyleSheet, Text, Button, TouchableOpacity, SafeAreaView} from 'react-native';
import Description from "../../Common/description";
import {FontAwesome} from '@expo/vector-icons';
import StudyList from "../../List/StudyList/study-list";
import {listName} from "../../../globals/constants";
import {FlatList} from "react-native-web";

const AuthorDetail = (props) => {
    const data = props.route.params.data;

    const AuthorInfo = () => (
        <View style={styles.authorInfo}>
            <Image style={styles.avatar} source={data.avatar}/>
            <Text style={styles.authorName}>{data.name}</Text>
            <Text style={{marginTop: 5}}>Pluralsight Author</Text>
        </View>
    )

    const Contact = () => (
        <View style={styles.contact}>
            <TouchableOpacity style={styles.iconWrapper}>
                <FontAwesome name="facebook-square" size={28} color="#34495e"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconWrapper}>
                <FontAwesome name="instagram" size={28} color="#34495e"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconWrapper}>
                <FontAwesome name="twitter" size={28} color="#34495e"/>
            </TouchableOpacity>
        </View>
    )

    const [isFollowing, setIsFollowing] = useState(false);

    return (
        <View style={styles.container}>
            <StudyList
                kind={listName.course}
                navigation={props.navigation}
                listHeaderComponent={
                    <>
                        {/*Author info*/}
                        <AuthorInfo/>

                        {/*Follow button*/}
                        <TouchableOpacity activeOpacity={0.5}
                                          onPress={() => setIsFollowing(!isFollowing)}
                                          style={(isFollowing) ? styles.followingButton : styles.followButton}>
                            <Text style={(isFollowing) ? styles.followingText : styles.followText}>
                                {((isFollowing) ? "FOLLOWING" : "FOLLOW")}
                            </Text>
                        </TouchableOpacity>

                        <Text style={{textAlign: 'center', marginTop: 10, fontSize: 12}}>Follow to be notified when new
                            courses are published.</Text>
                        {/*Author description*/}
                        <Description/>

                        {/*Link to fb, instagram, twitter,...*/}
                        <Contact/>
                        <Text style={{marginTop: 35, fontSize: 16}}>Course</Text>
                    </>
                }/>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15
    },
    authorInfo: {
        alignItems: 'center'
    },
    avatar: {
        marginTop: 10,
        height: 80,
        width: 80
    },
    authorName: {
        fontSize: 20,
        // fontWeight: 'bold'
    },
    followButton: {
        marginTop: 5,
        paddingVertical: 8,
        borderRadius: 5,
        backgroundColor: "#3498db",
    },
    followingButton: {
        marginTop: 5,
        paddingVertical: 8,
        borderRadius: 5,
        backgroundColor: "#7f8c8d"
    },
    followText: {
        color: "white",
        textAlign: 'center'
    },
    followingText: {
        color: "#bdc3c7",
        textAlign: 'center'
    },
    contact: {
        flexDirection: 'row',
        marginTop: 15
    },
    iconWrapper: {
        marginRight: 10
    }
})

export default AuthorDetail;
