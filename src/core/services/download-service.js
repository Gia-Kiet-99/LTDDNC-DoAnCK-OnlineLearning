import * as FileSystem from "expo-file-system";
import {
  getDownloadedListFromStorage,
  removeDownloadCourseFromStorage
} from "../utils/async-storage-service";

export const deleteDownloadCourse = async (courseId) => {
  let result = false
  try {
    // remove course info from AsyncStorage
    await removeDownloadCourseFromStorage(courseId)

    // remove all course video from internal storage
    const path = FileSystem.documentDirectory + courseId
    await FileSystem.deleteAsync(path)

    result = true

    console.log(await getDownloadedListFromStorage())
    console.log(await FileSystem.readDirectoryAsync(FileSystem.documentDirectory))
  } catch (e) {
    console.error(e)
  }
  return result
}

// export const apiDownloadLesson = async (lessonUrl) => {
//   const callback = downloadProgress => {
//     const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
//     console.log(progress);
//   };
//
//   const fileUri = FileSystem.documentDirectory + 'small.mp4'
//   const downloadResumable = FileSystem.createDownloadResumable(
//     'http://techslides.com/demos/sample-videos/small.mp4',
//     fileUri,
//     {},
//     callback
//   );
//
//   try {
//     const {uri} = await downloadResumable.downloadAsync();
//     console.log('Finished downloading to ', uri);
//     Alert.alert("Download completed")
//     await AsyncStorage.setItem('link-video', uri)
//   } catch (e) {
//     console.error(e)
//   }
//
//   // try {
//   //   await downloadResumable.pauseAsync();
//   //   console.log('Paused download operation, saving for future retrieval');
//   //   AsyncStorage.setItem('pausedDownload', JSON.stringify(downloadResumable.savable()));
//   // } catch (e) {
//   //   console.error(e);
//   // }
//   //
//   // try {
//   //   const { uri } = await downloadResumable.resumeAsync();
//   //   console.log('Finished downloading to ', uri);
//   // } catch (e) {
//   //   console.error(e);
//   // }
//
//   // //To resume a download across app restarts, assuming the the DownloadResumable.savable() object was stored:
//   // const downloadSnapshotJson = await AsyncStorage.getItem('pausedDownload');
//   // const downloadSnapshot = JSON.parse(downloadSnapshotJson);
//   // const downloadResumable = new FileSystem.DownloadResumable(
//   //   downloadSnapshot.url,
//   //   downloadSnapshot.fileUri,
//   //   downloadSnapshot.options,
//   //   callback,
//   //   downloadSnapshot.resumeData
//   // );
//   //
//   // try {
//   //   const { uri } = await downloadResumable.resumeAsync();
//   //   console.log('Finished downloading to ', uri);
//   // } catch (e) {
//   //   console.error(e);
//   // }
// }