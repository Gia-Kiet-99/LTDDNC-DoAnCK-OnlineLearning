import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Image, View, StyleSheet} from 'react-native';
import CourseInfo from "../../../Common/course-info";
import {ScreenName} from "../../../../globals/constants";
import {apiGetCourseInstructor} from "../../../../core/services/course-service";

const Separator = () => {
  return (
    <View style={{borderBottomColor: 'lightblue', borderBottomWidth: 3}}/>
  )
}

const SectionCoursesItem = (props) => {
  const item = props.item
  const [isLoading, setLoading] = useState(true)
  const [courseAuthor, setCourseAuthor] = useState("")

  useEffect(() => {
    if (isLoading) {
      apiGetCourseInstructor(props.item.instructorId)
        .then((response) => {
          if (response.status === 200) {
            setCourseAuthor(response.data.payload.name)
          }
        })
        .catch(error => {
          throw new Error(error)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [isLoading])

  const ItemPressed = () => {
    props.navigation.navigate(ScreenName.courseDetail, {
      data: props.item
    })
  }

  const averagePoint = Math.round((item.formalityPoint + item.contentPoint + item.presentationPoint) / 3)

  return <View>
    <TouchableOpacity
      style={styles.container}
      onPress={ItemPressed}>
      <View style={styles.content}>
        <Image style={styles.image} source={{uri: props.item.imageUrl}}/>
        <Separator/>
        <CourseInfo
          containerStyle={courseInfoStyle.container}
          title={item.title}
          author={courseAuthor}
          status={item.status}
          released={item.createdAt}
          duration={item.totalHours}
          rate={averagePoint}/>
      </View>
    </TouchableOpacity>
    {/*)}*/}
  </View>
};

const courseInfoStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  largerTitle: {
    fontSize: 16,
  }
})

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  content: {
    width: 200,
    height: 200,
    borderRadius: 5,
    backgroundColor: '#eee',
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 5,
  },
  image: {
    height: 100,
    width: '100%'
  },
  courseInfo: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  }
})

export default SectionCoursesItem;
