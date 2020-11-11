import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {listName} from "../../../globals/constants";
import StudyList from "../../List/StudyList/study-list";
import PathInfo from "../../Common/path-info";

const PathDetail = (props) => {
    const item = props.route.params.item;
    const [isExpanded, setIsExpanded] = useState(false);

    const PathDescription = () => {
        return <View>
            <View style={(isExpanded === true) ? styles.pathDescription : styles.briefPathDescription}>
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
            <PathInfo
                title={item.title}
                count={item.count}
                titleStyle={{fontSize: 24}}
            />
            <PathDescription/>
            <StudyList kind={listName.course} style={{marginTop: 15}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        // backgroundColor: 'pink'

    },
    pathDescription: {
        flexDirection: 'row',
        marginTop: 20,
        // backgroundColor: 'beige'
    },
    briefPathDescription: {
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

export default PathDetail;
