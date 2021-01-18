import * as FileSystem from "expo-file-system";
import {
  getDownloadedListFromStorage, removeAllDownloadCourseFromStorage,
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

export const deleteAllCourses = async () => {
  try {
    await removeAllDownloadCourseFromStorage()
    const arr = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory)
    for (const folderName of arr) {
      await FileSystem.deleteAsync(FileSystem.documentDirectory + folderName)
    }
    console.log(await getDownloadedListFromStorage())
    console.log(await FileSystem.readDirectoryAsync(FileSystem.documentDirectory))
  } catch (e) {
    console.error(e)
  }
}