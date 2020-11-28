import React, {useContext, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ChannelInfo from "../../Common/channel-info";
import StudyList from "../../List/StudyList/study-list";
import {listName} from "../../../globals/constants";
import {channels} from "../../../localize/data";
import {ChannelContext} from "../../../provider/channel-context";

const ChannelDetail = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const {getChannelById} = useContext(ChannelContext)

    const channelId = props.route.params.channelId
    const item = getChannelById(channelId)

    useEffect(() => {
        props.navigation.setOptions({ title: item.title })
    }, [item.title])

    const ChannelDescription = () => {
        return <View>
            <View style={(isExpanded === true) ? styles.channelDescription : styles.briefChannelDescription}>
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

    const renderListHeaderComponent = () => {
        if(item.type === "public") {
            return <>
                <ChannelInfo
                    title={item.title}
                    level={item.level}
                    follow={item.follow}
                    containerStyle={{
                        marginTop: 10,
                    }}
                    titleStyle={{fontSize: 24}}
                />
                <ChannelDescription/>
            </>
        } else if (item.type === "private") {
            return (
                <ChannelInfo
                    title={item.title}
                    containerStyle={{
                        marginTop: 10,
                    }}
                    titleStyle={{fontSize: 24}}
                />
            )
        }
    }

    return (
        <View style={styles.container}>
            <StudyList
                navigation={props.navigation}
                kind={listName.channelCourse}
                style={{marginTop: 0}}
                data={item.courses}
                listHeaderComponent={renderListHeaderComponent}
                listHeaderComponentStyle={{marginBottom: 25}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
    },
    channelDescription: {
        flexDirection: 'row',
        marginTop: 20,
        // backgroundColor: 'beige'
    },
    briefChannelDescription: {
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
