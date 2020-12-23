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
  return await instance.get("/course/get-course-info",{
    params: {
      id: courseId
    }
  })
}
