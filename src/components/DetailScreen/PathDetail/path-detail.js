import React, {useContext, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {listName} from "../../../globals/constants";
import StudyList from "../../List/StudyList/study-list";
import PathInfo from "../../Common/path-info";
import {CourseContext} from "../../../provider/course-provider";

const PathDetail = (props) => {
  const item = props.route.params.item;

  const {getCourseFromId} = useContext(CourseContext)
  const [isExpanded, setIsExpanded] = useState(false);

  const getCourseList = () => {
    return item.courseIds.map(id => getCourseFromId(id))
  }

  const PathDescription = () => {
    return (
      <View>
        <View style={(isExpanded === true) ? styles.pathDescription : styles.briefPathDescription}>
          <View style={styles.desWrapper}>
            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae ex incidunt distinctio veniam
              vero vel ratione! Maiores nihil veritatis nulla doloremque quidem minus, enim, praesentium quasi
              repellat saepe temporibus perspiciatis.</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.expandButton}
            onPress={() => setIsExpanded(!isExpanded)}>
            <Image
              style={styles.expandImage}
              source={(
                isExpanded === true) ? require('../../../../assets/up-arrow.png')
                : require('../../../../assets/down-arrow.png')
              }/>
          </TouchableOpacity>


        </View>
        <Text style={styles.text}>Course</Text>
      </View>
    )
  }

  const courses = getCourseList()
  // console.log(courses)
  return (
    <View style={styles.container}>
      <StudyList
        kind={listName.pathCourse}
        style={{marginTop: 0}}
        navigation={props.navigation}
        data={courses}
        listHeaderComponent={
          <>
            <PathInfo
              title={item.title}
              count={item.count}
              containerStyle={{marginTop: 10}}
              titleStyle={{fontSize: 24}}
            />
            <PathDescription/>
          </>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    // backgroundColor: 'pink'

  },
  pathDescription: {
    flexDirection: 'row',
    marginTop: 20,
    // backgroundColor: 'beige'
  },
  briefPathDescription: {
    height: 50,
    flexDirection: 'row',
    marginTop: 20,
    // backgroundColor: 'beige',
    overflow: 'hidden',
  },
  desWrapper: {
    flex: 1,
  },
  expandButton: {
    backgroundColor: '#ddd',
    padding: 8,
    borderRadius: 5,
    justifyContent: 'center'
  },
  expandImage: {
    height: 12,
    width: 12
  },
  text: {
    fontSize: 18,
    marginTop: 20,
    // backgroundColor: 'pink'
  }
})

export default PathDetail;
