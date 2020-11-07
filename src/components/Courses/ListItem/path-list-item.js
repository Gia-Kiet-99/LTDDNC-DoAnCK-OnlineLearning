import React from 'react';
import {Image,TouchableOpacity,StyleSheet} from 'react-native';
import PathInfo from "../../Common/path-info";

const PathListItem = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/react.png')}/>
            <PathInfo
                containerStyle={styles.pathInfo}
                titleStyle={styles.pathInfoTitle}
                title={props.item.title}
                count={props.item.count}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 15,
        alignItems: 'center'
    },
    pathInfo: {
        marginLeft: 10,
    },
    pathInfoTitle: {
        fontSize: 16,
    },
    image: {
        width: 80,
        height: 64,
    }
})

export default PathListItem;
