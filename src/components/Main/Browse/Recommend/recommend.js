import React from 'react'
import {ScrollView, View} from 'react-native'
import ImageButton from "../../../Common/image-button";
import {ImageButtonType} from "../../../../globals/constants";
import {titles} from "../../../../localize/data";

function Recommend(props) {
  const renderImageButtonList = (list) => {
    return list.map((item) => (
      <ImageButton
        key={item.id} data={item}
        type={ImageButtonType.general}
        titleStyle={{fontSize: 20}}
        style={{
          width: 175,
          height: 80,
          marginRight: 5,
        }}/>
    ))
  }
  return (
    <View>
      <ImageButton
        type={ImageButtonType.course}
        data={{
          title: 'New\nRelease',
          source: require('../../../../../assets/background-image.jpg')
        }}
        style={{
          marginTop: 10,
          marginHorizontal: 10,
        }}/>

      <ImageButton
        type={ImageButtonType.course}
        data={{
          title: 'Recommended\nfor you',
          source: require('../../../../../assets/background4.jpg')
        }}
        style={{
          marginTop: 10,
          marginHorizontal: 10
        }}/>

      <ScrollView
        horizontal={true} showsHorizontalScrollIndicator={false}
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
  )
}

export default Recommend;