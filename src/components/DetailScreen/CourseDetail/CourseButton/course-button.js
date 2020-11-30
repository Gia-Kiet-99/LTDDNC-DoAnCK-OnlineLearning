import React, {useContext, useEffect, useState} from 'react'
import {Alert, Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native'
import {CourseContext} from "../../../../provider/course-provider";

function CourseButton(props) {
  const item = props.item
  // console.log("CourseButton", item)

  const {updateCourseList} = useContext(CourseContext)
  const [isBookmarked, setIsBookmarked] = useState(item.isFavorite)
  const [isDownloaded, setIsDownloaded] = useState(item.isDownload)

  useEffect(() => {
    if (item.isFavorite !== isBookmarked) {
      item.isFavorite = isBookmarked
      updateCourseList(item.id, item)
    }
  }, [isBookmarked])
  useEffect(() => {
    if (item.isDownload !== isDownloaded) {
      item.isDownload = isDownloaded
      updateCourseList(item.id, item)
    }
  }, [isDownloaded])

  const onBookmarkButtonPressed = () => {
    setIsBookmarked(!isBookmarked)
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
        onPress={onBookmarkButtonPressed}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.buttonImage}
            source={(isBookmarked === true) ?
              require('../../../../../assets/bookmarked-icon.png') :
              require('../../../../../assets/bookmark-icon.png')}/>
        </View>
        <Text style={styles.buttonText}>
          {(isBookmarked === true) ? 'Bookmarked' : 'Bookmark'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={props.showListChannelModal}
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