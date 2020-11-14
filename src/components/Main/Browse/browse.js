import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import ImageButton from "../../Common/image-button";
import Section from "../../Common/section";
import ActionBar from "../../Common/action-bar";
import {ImageButtonType, listName, titleName} from "../../../globals/constants";
import {authors, paths, skills, titles} from "../../../localize/data";


const Browse = (props) => {
    const renderImageButtonList = (list) => {
        return list.map((item) => (
            <ImageButton key={item.id} data={item}
                         navigation={props.navigation}
                         type={ImageButtonType.general}
                         titleStyle={{fontSize: 20}}
                         style={{
                             width: 175,
                             height: 80,
                             marginRight: 5,
                         }}

            />
        ))
    }

    return (
        <View style={styles.container}>
            {/*<StatusBar translucent={false} backgroundColor="white" barStyle='dark-content' animated={true}/>*/}
            <ActionBar title={titleName.browse} navigation={props.navigation}/>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
                <View style={styles.recommend}>
                    <ImageButton type={ImageButtonType.course}
                                 navigation={props.navigation}
                                 data={{
                                     title: 'New\nRelease',
                                     source: require('../../../../assets/background-image.jpg')
                                 }}
                                 style={{
                                     marginTop: 10,
                                     marginHorizontal: 10,
                                 }}/>

                    <ImageButton type={ImageButtonType.course}
                                 navigation={props.navigation}
                                 data={{
                                     title: 'Recommended\nfor you',
                                     source: require('../../../../assets/background4.jpg')
                                 }}
                                 style={{
                                     marginTop: 10,
                                     marginHorizontal: 10
                                 }}/>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                                style={{marginTop: 10, marginHorizontal: 10}}>
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                {renderImageButtonList(titles.slice(0, titles.length / 2))}
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 5}}>
                                {renderImageButtonList(titles.slice(titles.length / 2, titles.length))}
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <Section kind={listName.popularSkill} title={'Popular Skills'} list={skills}
                         navigation={props.navigation}/>
                <Section kind={listName.path} title='Paths' list={paths} showSeeAllButton={true}
                         navigation={props.navigation}/>
                <Section kind={listName.author} title='Top authors' list={authors}
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
        // marginHorizontal: 15,
    },
    buttonList: {
        // marginRight: 5
    }
})

export default Browse;
