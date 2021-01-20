import React from 'react'
import {ScrollView, View, StyleSheet} from 'react-native'
import ImageButton from "../../../Common/image-button";
import {ImageButtonType, listType} from "../../../../globals/constants";
import {titles} from "../../../../localize/data";

function Recommend() {
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
        type={listType.newReleaseCourse}
        data={{
          title: 'New\nRelease',
          source: require('../../../../../assets/background-image.jpg')
        }}
        style={styles.imageButton}/>

      <ImageButton
        type={listType.topSellCourse}
        data={{
          title: 'Top sell',
          source: require('../../../../../assets/background4.jpg')
        }}
        style={styles.imageButton}/>

      {/*<ScrollView*/}
      {/*  horizontal={true} showsHorizontalScrollIndicator={false}*/}
      {/*  style={{marginTop: 10, marginHorizontal: 10}}>*/}
      {/*  <View>*/}
      {/*    <View style={{flexDirection: 'row'}}>*/}
      {/*      {renderImageButtonList(titles.slice(0, titles.length / 2))}*/}
      {/*    </View>*/}
      {/*    <View style={{flexDirection: 'row', marginTop: 5}}>*/}
      {/*      {renderImageButtonList(titles.slice(titles.length / 2, titles.length))}*/}
      {/*    </View>*/}
      {/*  </View>*/}
      {/*</ScrollView>*/}
    </View>
  )
}

const styles = StyleSheet.create({
  imageButton: {
    marginTop: 10,
    marginHorizontal: 10,
  }
})

export default Recommend;