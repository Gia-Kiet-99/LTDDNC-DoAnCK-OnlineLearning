import React, {useContext, useEffect, useState} from 'react'
import {Alert, Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native'
import {CourseContext} from "../../../../provider/course-provider";
import {apiGetLikeStatus, apiLikeCourse} from "../../../../core/services/course-service";

function CourseButton(props) {
  const courseId = props.courseId
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
        throw new Error()
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
        }
      })
      .catch(e => {
        throw new Error()
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

      <TouchableOpacity
        /*onPress={props.showListChannelModal}*/
        style={[styles.button, {marginHorizontal: 10}]}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.buttonImage}
            source={require('../../../../../assets/channel-icon.png')}/>
        </View>
        <Text style={[styles.buttonText, {textAlign: 'center'}]}>
          Add to Channel
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={onDownloadButtonPressed}>
        <View style={styles.imageWrapper}>
          {
            isDownloaded ?
              <Image style={styles.buttonImage} source={require('../../../../../assets/downloaded.png')}/>
              :
              <Image style={styles.buttonImage} source={require('../../../../../assets/download.png')}/>
          }
        </View>
        <Text style={styles.buttonText}>
          {isDownloaded ? "Downloaded" : "Download"}
        </Text>
      </TouchableOpacity>
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