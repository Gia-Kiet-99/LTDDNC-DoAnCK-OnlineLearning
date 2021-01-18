import instance from "../configuration/axios-config";
import * as FileSystem from "expo-file-system";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from "react-native";
import Axios from "axios";

export const apiGetRecommendCourse = async (userId, limit, offset) => {
  const url = `/user/recommend-course/${userId}/${limit}/${offset}`
  return await instance.get(url)
}

export const apiGetTopRateCourses = async (limit, page) => {
  return await instance.post(`/course/top-rate`, {
    limit: limit,
    page: page
  })
}

export const apiGetCourseInstructor = async (instructorId) => {
  const url = `/instructor/detail/${instructorId}`
  return await instance.get(url)
}

export const apiGetLearningCourse = async () => {
  return await instance.get("/user/get-process-courses")
}

export const apiGetFavoriteCourses = () => {
  return instance.get(
    "/user/get-favorite-courses",
  )
}

export const apiGetCourseInfo = async (courseId) => {
  return await instance.get("/course/get-course-info", {
    params: {
      id: courseId
    }
  })
}

export const apiGetCourseDetailByIds = async (courseId, userId) => {
  return await instance.get(`/course/get-course-detail/${courseId}/${userId}`)
}

// export const apiGetCourseDetailWithLesson = async (courseId) => {
//   return await instance.get(`/course/detail-with-lesson/${courseId}`)
// }

export const apiGetPaymentInfo = async (courseId) => {
  return await instance.get(`/payment/get-course-info/${courseId}`)
}

export const apiEnrollCourse = async (courseId) => {
  return await instance.post('/payment/get-free-courses', {
    courseId: courseId
  })
}

export const apiSubmitReview = async (courseId, formalityPoint, contentPoint, presentationPoint, content) => {
  return await instance.post("/course/rating-course", {
    courseId: courseId,
    formalityPoint: formalityPoint,
    contentPoint: contentPoint,
    presentationPoint: presentationPoint,
    content: content
  })
}

export const apiGetLastUpdateLesson = async (courseId) => {
  return await instance.get(`/course/last-watched-lesson/${courseId}`)
}

export const apiGetLessonUrlAndDuration = async (courseId, lessonId) => {
  return await instance.get(`/lesson/video/${courseId}/${lessonId}`)
}

export const apiLikeCourse = async (courseId) => {
  return await instance.post('/user/like-course', {
    courseId: courseId
  })
}

export const apiGetLikeStatus = async (courseId) => {
  return await instance.get(`/user/get-course-like-status/${courseId}`)
}

export const apiGetNewReleaseCourse = async (limit, page) => {
  return await instance.post('/course/top-new', {
    limit: limit,
    page: page
  })
}

export const apiGetTopSellCourse = async (limit, page) => {
  return await instance.post('/course/top-sell', {
    limit: limit,
    page: page
  })
}

export const apiGetAuthorList = async () => {
  return await instance.get('/instructor')
}

export const apiGetInstructorDetailInfo = async (instructorId) => {
  return await instance.get(`/instructor/detail/${instructorId}`)
}

export const apiGetCategoryList = async () => {
  return await instance.get('/category/all')
}

export const apiGetCategoryDetail = async (categoryId) => {
  return await instance.post('/course/search', {
    keyword: "",
    opt: {
      sort: {
        attribute: "price",
        rule: "ASC"
      },
      category: [
        categoryId,
      ],
      time: [
        {
          min: 0,
          max: 1
        },
        {
          min: 3,
          max: 6
        }
      ],
      price: [
        {
          max: 0
        },
        {
          min: 0,
          max: 200000
        },
        {
          min: 500000,
          max: 1000000
        }
      ]
    },
    limit: 20,
    offset: 1
  })
}

export const apiGetCoursesByCategory = async (categoryId) => {
  return await instance.post('/course/search', {
    keyword: "",
    opt: {
      sort: {
        attribute: "price",
        rule: "ASC"
      },
      category: [
        categoryId,
      ],
      time: [
        {
          min: 0
        }
      ],
      price: [
        {
          min: 0
        }
      ]
    },
    limit: 100,
    offset: 1
  })
}

// export const apiDownloadCourse = async (videoUrl) => {
//   return await Axios.request({
//     url: videoUrl,
//     method: 'get',
//     responseType: 'blob',
//     onDownloadProgress: progressEvent => {
//       console.log(progressEvent.loaded / progressEvent.total)
//     }
//
//   });
// }

