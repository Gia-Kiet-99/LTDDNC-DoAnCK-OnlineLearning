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

