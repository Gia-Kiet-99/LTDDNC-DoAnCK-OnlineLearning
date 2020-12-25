import React from 'react';
import {ScrollView, View} from 'react-native';
import Section from "../../Common/section";
import {listType} from "../../../globals/constants";
import {authors, courses, paths, skills} from "../../../localize/data";

const FieldDetail = (props) => {
    const field = props.route.params.field;

    return (
        <ScrollView>
            <Section navigation={props.navigation} kind={listType.popularSkill}
                     title={`${field} Skills`} list={skills} showSeeAllButton={false}/>

            <Section navigation={props.navigation} kind={listType.path}
                     title={`Paths in ${field}`} list={paths} showSeeAllButton={true}/>

            <Section navigation={props.navigation} kind={listType.course}
                     title={`New in ${field}`} list={courses} showSeeAllButton={true}/>

            <Section navigation={props.navigation} kind={listType.course}
                     title={`Trending in ${field}`} list={courses} showSeeAllButton={true}/>

            <Section navigation={props.navigation} kind={listType.author}
                     title={`Top authors in ${field}`} list={authors} showSeeAllButton={false}/>

        </ScrollView>
    );
};

export default FieldDetail;
