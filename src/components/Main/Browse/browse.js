import React from 'react';
import {View, Text, ScrollView, StyleSheet, StatusBar, FlatList} from 'react-native';
import ImageButton from "../../Common/image-button";
import Section from "../../Common/section";
import ActionBar from "../../Common/action-bar";
import {listName, titleName} from "../../../globals/constants";
import {authors, paths, skills, titles} from "../../../localize/data";

const renderImageButton = ({item}) => {
    return <ImageButton key={item.id} item={item} style={{width: 200}}/>
}

const Browse = (props) => {
    return (
        <View style={styles.container}>
            <ActionBar title={titleName.browse} navigation={props.navigation}/>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
                <View style={styles.recommend}>
                    <ImageButton item={
                        {
                            title: 'NEW\nRELEASE',
                            source: require('../../../../assets/background-image.jpg')
                        }

                    }/>

                    <ImageButton item={
                        {
                            title: 'RECOMMENDED\nFOR YOU',
                            source: require('../../../../assets/background4.jpg')
                        }
                    }/>

                    <FlatList horizontal={true}
                              data={titles}
                              renderItem={renderImageButton}
                              keyExtractor={item => item.id}
                              ItemSeparatorComponent={()=> (<View style={{padding: 2.5}}/>)}
                    />
                </View>

                <Section
                    kind={listName.popularSkill}
                    title={'Popular Skills'}
                    list={skills}
                    navigation={props.navigation}/>
                <Section
                    kind={listName.path}
                    title='Paths'
                    list={paths}
                    showSeeAllButton={true}
                    navigation={props.navigation}/>
                <Section
                    kind={listName.author}
                    title='Top authors'
                    list={authors}
                    navigation={props.navigation}/>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        backgroundColor: '#f5f5f5'
    },
    recommend: {
        marginHorizontal: 5,
    },
    buttonList: {
        // marginRight: 5
    }
})

export default Browse;
