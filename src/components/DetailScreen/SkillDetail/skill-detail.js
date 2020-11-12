import React from 'react';
import {ScrollView, View} from 'react-native';
import Section from "../../Common/section";
import {listName} from "../../../globals/constants";
import {authors, channels, courses, paths} from "../../../localize/data";

const SkillDetail = (props) => {
    const skill = props.route?.params?.item.skill;
    // console.log(props)
    return (
        <ScrollView>
            <Section navigation={props.navigation} kind={listName.path}
                     title={`Paths in ${skill}`} list={paths} showSeeAllButton={false}/>

            <Section navigation={props.navigation} kind={listName.course}
                     title={`New in ${skill}`} list={courses} showSeeAllButton={true}/>

            <Section navigation={props.navigation} kind={listName.course}
                     title={`Trending in ${skill}`} list={courses} showSeeAllButton={true}/>

            <Section navigation={props.navigation} kind={listName.author}
                     title={'Top authors'} list={authors} showSeeAllButton={false}/>

        </ScrollView>
    );
};

export default SkillDetail;
