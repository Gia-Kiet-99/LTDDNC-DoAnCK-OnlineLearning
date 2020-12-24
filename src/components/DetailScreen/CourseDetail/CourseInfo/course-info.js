import React from 'react'
import {Text, View} from 'react-native'
import AuthorButton from "../AuthorButton/author-button";
import Rating from "../../../Common/rating";
import Moment from "moment";
import {convertHour} from "../../../../core/utils/date-format";

function CourseInfo(props) {
  // const data = props.data
  // console.log(props.rating)
  return <View>
    <Text style={{fontSize: 24}}>
      {props.title}
    </Text>
    <AuthorButton
      data={props.authorInfo}
      /*onPress={props.onAuthorButtonPress}*//>
    <View style={{flexDirection: 'row', marginTop: 10}}>
      <Text style={{color: 'gray', marginRight: 10, fontSize: 13}}>
        {`${props.status} . ${Moment(props.released).format("MMM yyyy")} . ${convertHour(props.duration)}`}
      </Text>
      <Rating value={props.rating}/>
    </View>
  </View>
}

export default CourseInfo;