import React from 'react'
import {Text, View} from 'react-native'
import AuthorButton from "../AuthorButton/author-button";
import Rating from "../../../Common/rating";
import Moment from "moment";
import {convertHour} from "../../../../core/utils/date-format";

function CourseInfo(props) {

  return <View>
    <Text style={{fontSize: 24}}>
      {props.courseInfo.title}
    </Text>
    <AuthorButton
      data={props.authorInfo}
      navigation={props.navigation}/>
    <View style={{flexDirection: 'row', marginTop: 10}}>
      <Text style={{color: 'gray', marginRight: 10, fontSize: 13}}>
        {`${props.courseInfo.status} . ${Moment(props.courseInfo.released).format("MMM yyyy")} . ${convertHour(props.courseInfo.duration)}`}
      </Text>
      <Rating value={props.courseInfo.rating}/>
    </View>
  </View>
}

export default CourseInfo;