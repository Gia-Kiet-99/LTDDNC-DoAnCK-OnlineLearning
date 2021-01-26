import React, {useContext, useEffect, useState} from 'react'
import {Alert, Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native'
import {apiGetLikeStatus, apiLikeCourse} from "../../../../core/services/course-service";
import DownloadButton from "./DownloadButton/download-button";
import {ListContext} from "../../../../provider/list-provider";

function CourseButton(props) {
  const courseId = props.courseId
  /* Use context */
  const listContext = useContext(ListContext)

  /* Use state */
  const [isFavorite, setFavorite] = useState(false)
  const [isDownloaded, setIsDownloaded] = useState(false)
  const [isLoading, setLoading] = useState(true)

  /* Use effect */
  useEffect(() => {
    if (isLoading) {
      getLikeStatus(courseId)
    }
  }, [isLoading])

  /* Function */
  const getLikeStatus = (courseId) => {
    apiGetLikeStatus(courseId)
      .then(response => {
        if (response.status === 200) {
          setFavorite(response.data.likeStatus)
        }
      })
      .catch(e => {
        console.error(e)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  const toggleLikeStatus = (courseId) => {
    apiLikeCourse(courseId)
      .then(response => {
        if (response.status === 200) {
          setFavorite(!isFavorite)
          listContext.setShouldUpdateList(true)
        }
      })
      .catch(e => {
        console.error(e)
      })
  }

  const onFavoriteButtonPressed = () => {
    toggleLikeStatus(courseId)
  }
  const onDownloadButtonPressed = () => {
    if (isDownloaded === true) {
      Alert.alert("Remove download", "Are you sure you want to remove downloaded course?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "Remove",
            onPress: () => setIsDownloaded(false)
          }
        ],
        {cancelable: false}
      )
    } else {
      setIsDownloaded(true)
    }
  }

  return (
    <View style={styles.buttonViewGroup}>
      <TouchableOpacity
        style={styles.button}
        onPress={onFavoriteButtonPressed}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.buttonImage}
            source={(isFavorite === true) ?
              require('../../../../../assets/like-blue.png') :
              require('../../../../../assets/like.png')}/>
        </View>
        <Text style={styles.buttonText}>
          {(isFavorite === true) ? 'Liked' : 'Like'}
        </Text>
      </TouchableOpacity>

      <DownloadButton courseDetail={props.courseDetail}/>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonViewGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    // backgroundColor: 'lightblue'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'pink',
    // paddingTop: 10
  },
  imageWrapper: {
    backgroundColor: 'lightgray',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonImage: {
    height: '50%',
    width: '50%',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#555'
  },
})

export default CourseButton;