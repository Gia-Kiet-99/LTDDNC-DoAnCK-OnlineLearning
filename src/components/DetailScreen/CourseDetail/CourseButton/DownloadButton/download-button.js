import React, {useEffect, useReducer} from 'react'
import {Image, Text, TouchableOpacity, View, StyleSheet, Alert} from 'react-native'
import {
  ACTION_COUNT,
  ACTION_DOWNLOADED,
  ACTION_DOWNLOADING,
  ACTION_PROGRESS,
  ACTION_RESET_DOWNLOAD_STATE,
  DOWNLOADED_STATE,
  DOWNLOADING_STATE,
  downloadInitialState,
  INITIAL_DOWNLOAD_STATE,
} from "../../../../../globals/constants";
import {downloadReducer} from "../../../../../reducer/download-reducer";
import * as FileSystem from "expo-file-system";
import {apiGetLessonUrlAndDuration} from "../../../../../core/services/course-service";
import {
  isCourseDownloaded,
  saveDownloadCourse
} from "../../../../../core/utils/async-storage-service";
import {deleteDownloadCourse} from "../../../../../core/services/download-service";

const init = (downloadInitialState) => {
  return {...downloadInitialState}
}

function DownloadButton(props) {
  const courseDetail = props.courseDetail;

  /* Use reducer */
  const [state, dispatch] = useReducer(downloadReducer, downloadInitialState, init)

  /* Use effect */
  useEffect(() => {
    if (state.downloadState === INITIAL_DOWNLOAD_STATE) {
      isCourseDownloaded(courseDetail.id).then(value => {
        if (value) {
          dispatch({type: ACTION_DOWNLOADED})
        }
      })
    }
  }, [state.downloadState])

  /* internal function */
  const apiDownloadLesson = async (path, lessonInfo) => {
    const callback = ({totalBytesWritten, totalBytesExpectedToWrite}) => {
      const progress = Math.floor(totalBytesWritten * 100 / totalBytesExpectedToWrite);
      console.log(progress);
      dispatch({type: ACTION_PROGRESS, progress: progress})
    };

    const fileUri = path + `${lessonInfo.id}.mp4`
    const downloadResumable = FileSystem.createDownloadResumable(
      lessonInfo.videoUrl,
      fileUri,
      {},
      callback
    );

    try {
      const {uri} = await downloadResumable.downloadAsync();
      return uri;
    } catch (e) {
      console.error(e)
      return null;
    }
  }
  const handleDownload = async () => {
    dispatch({type: ACTION_DOWNLOADING})
    // console.log(courseDetail)
    let course = {
      id: courseDetail.id,
      title: courseDetail.title,
      // averagePoint: courseDetail.averagePoint,
      formalityPoint: courseDetail.formalityPoint,
      contentPoint: courseDetail.contentPoint,
      presentationPoint: courseDetail.presentationPoint,
      authorName: courseDetail.instructor.name,
      status: courseDetail.status,
      createdAt: courseDetail.createdAt,
      totalHours: courseDetail.totalHours,
      imageUrl: courseDetail.imageUrl,
      videoNumber: courseDetail.videoNumber,
      price: courseDetail.price
    }
    // console.log(result)
    let lessons = []
    try {
      const path = FileSystem.documentDirectory + `${courseDetail.id}` + '/'
      await FileSystem.makeDirectoryAsync(path)

      for (const section of courseDetail.section) {
        for (const lesson of section.data) {
          let lessonInfo = {}
          const response = await apiGetLessonUrlAndDuration(courseDetail.id, lesson.id)
          if (response.status === 200) {
            lessonInfo.id = lesson.id
            lessonInfo.videoUrl = response.data.payload.videoUrl
          }
          // console.log(lessonInfo.videoUrl)
          const videoUri = await apiDownloadLesson(path, lessonInfo)
          console.log(videoUri)
          if (videoUri) {
            lessonInfo.videoUrl = videoUri
            lessons.push(lessonInfo)
          }
          dispatch({type: ACTION_COUNT})
        }
      }

      course.lessons = lessons
      // console.log("Course: ", course)
      const result = await saveDownloadCourse(course)
      if (result) {
        dispatch({type: ACTION_DOWNLOADED})
        Alert.alert("Download", "Successfully")
      } else {
        dispatch({type: ACTION_RESET_DOWNLOAD_STATE})
        Alert.alert("Download", "Failed")
      }
    } catch (e) {
      console.error(e)
    }
  }
  const removeDownload = async () => {
    await deleteDownloadCourse(courseDetail.id)
    dispatch({type: ACTION_RESET_DOWNLOAD_STATE})
  }
  const onDownloadButtonPressed = async () => {
    switch (state.downloadState) {
      case INITIAL_DOWNLOAD_STATE:
        await handleDownload()
        break
      case DOWNLOADED_STATE:
        // remove download
        Alert.alert(
          "Remove download",
          "Are you sure to remove this course?",
          [
            {
              text: "Yes",
              onPress: removeDownload
            },
            {
              text: "No",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            }
          ],
          {cancelable: true})
        break
      case DOWNLOADING_STATE:
        break
      default:
        throw new Error()
    }
  }

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onDownloadButtonPressed}>
      <View style={styles.imageWrapper}>
        {
          state.downloadState === DOWNLOADED_STATE ?
            <Image style={styles.buttonImage} source={require('../../../../../../assets/downloaded.png')}/>
            : (state.downloadState === DOWNLOADING_STATE ?
            <Text>{`${state.progress}%`}</Text>
            : <Image style={styles.buttonImage} source={require('../../../../../../assets/download.png')}/>)
        }
      </View>
      <Text style={styles.buttonText}>
        {state.downloadState === DOWNLOADING_STATE ? `Downloading ${state.count}/${courseDetail.videoNumber}` : (
          state.downloadState === DOWNLOADED_STATE ? 'Downloaded' : 'Download'
        )}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
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

export default DownloadButton;