import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import PathInfo from "../../../Common/path-info";
import Description from "../../../Common/description";

function PathListHeader(props) {
  const data = props.data
  return (
    <View>
      <PathInfo
        title={data.title}
        count={data.count}
        containerStyle={{marginTop: 10}}
        titleStyle={{fontSize: 24}}
      />
      <Description/>
      <Text style={styles.text}>Course</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginTop: 20,
  }
})

export default PathListHeader;