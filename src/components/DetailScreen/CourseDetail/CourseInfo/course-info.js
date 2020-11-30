import React from 'react'
import {Text, View} from 'react-native'
import AuthorButton from "../AuthorButton/author-button";
import Rating from "../../../Common/rating";

function CourseInfo(props) {
  const data = props.data
  return <View>
    <Text style={{fontSize: 24}}>
      {data.title}
    </Text>
    <AuthorButton
      data={data}
      onPress={props.onAuthorButtonPress}/>
    <View style={{flexDirection: 'row', marginTop: 10}}>
      <Text style={{color: 'gray', marginRight: 10, fontSize: 13}}>
        {`${data.level} . ${data.released} . ${data.duration}`}
      </Text>
      <Rating/>
    </View>
  </View>
}

export default CourseInfo;