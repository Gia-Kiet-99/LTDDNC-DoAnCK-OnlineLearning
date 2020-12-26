import instance from "../configuration/axios-config";

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

export const apiGetCourseDetailWithLesson = async (courseId) => {
  return await instance.get(`/course/detail-with-lesson/${courseId}`)
}

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
  return instance.get('/instructor')
}

export const apiGetInstructorDetailInfo = async (instructorId) => {
  return instance.get(`/instructor/detail/${instructorId}`)
}