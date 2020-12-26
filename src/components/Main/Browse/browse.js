import React, {useContext} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import ImageButton from "../../Common/image-button";
import Section from "../../Common/section";
import ActionBar from "../../Common/action-bar";
import {ImageButtonType, listType as listName, listType, titleName} from "../../../globals/constants";
import {authors, paths, skills, titles} from "../../../localize/data";
import {PathContext} from "../../../provider/path-provider";
import Recommend from "./Recommend/recommend";


const Browse = (props) => {
  console.log("Browse")
  // const {pathList} = useContext(PathContext)

  const renderSection = (title, kind) => {
    switch (kind) {
      case listType.path:
        return <Section
          kind={kind}
          title={title}
          // list={list}
          showSeeAllButton={true}
          navigation={props.navigation}/>
      case listType.author:
        return <Section
          kind={kind}
          title={title}
          navigation={props.navigation}/>
      case listType.popularSkill:
        return <Section
          kind={kind}
          title={title}
          // list={list}
          navigation={props.navigation}/>
      default:
        return <View/>
    }
  }


  return (
    <View style={styles.container}>
      <ActionBar title={titleName.browse} navigation={props.navigation}/>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <Recommend/>

        {/*{renderSection("Popular Skills", listName.popularSkill, skills)}*/}
        {/*{renderSection("Paths", listName.path, pathList)}*/}
        {renderSection("Top authors", listType.author)}

      </ScrollView>
    </View>
  )
}

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
