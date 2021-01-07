import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native'
import CourseInfo from "../../Common/course-info";
import {ScreenName} from "../../../globals/constants";
import {LOAD_SUCCEEDED, LOADING} from "../../../core/configuration/loading-config";
import {apiGetCourseInstructor} from "../../../core/services/course-service";

function RecommendListItem(props) {

  const item = props.item
  /* Use state */
  const [loading, setLoading] = useState(LOADING)
  const [authorName, setAuthorName] = useState("")

  /* Use effect */
  useEffect(() => {
    if (loading === LOADING) {
      apiGetCourseInstructor(item.instructorId)
        .then((response) => {
          if (response.status === 200) {
            setAuthorName(response.data.payload.name)
          }
        })
        .catch(error => {
          throw new Error(error)
        })
        .finally(() => {
          setLoading(LOAD_SUCCEEDED)
        })
    }
  }, [loading])

  const onPressListItem = () => {
    props.navigation.push(ScreenName.courseDetail, {
      data: props.item
    })
  }
  const averagePoint = Math.round((item.formalityPoint + item.contentPoint + item.presentationPoint) / 3)
  const renderUI = () => {
    if(loading === LOAD_SUCCEEDED) {
      return <TouchableOpacity
        style={[styles.container, props.style]}
        onPress={onPressListItem}>

        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={{uri: item.imageUrl}}/>
        </View>
        <CourseInfo
          containerStyle={courseInfoStyle.container}
          titleStyle={courseInfoStyle.largerTitle}
          title={item.title}
          author={authorName}
          status={item.status}
          released={item.createdAt}
          duration={item.totalHours}
          rate={averagePoint}
          style={{fontSize: 16}}/>

        {/*<MenuButton item={item}/>*/}
      </TouchableOpacity>
    }
  }

  return <View>
    {/*{loading === LOADING ? (<View style={{height: 0}}/>) : (*/}
    {renderUI()}
    {/*)}*/}
  </View>
}

const courseInfoStyle = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  largerTitle: {
    fontSize: 16,
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  imageWrapper: {
    // flex: 3,
    width: 80,
    height: 64,
  },
  image: {
    height: '100%',
    width: '100%',
  },
})

export default RecommendListItem;