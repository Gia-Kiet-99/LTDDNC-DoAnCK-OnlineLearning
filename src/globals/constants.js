export const listType = {
  course: "course-list",
  favoriteCourse: "favorite-course-list",
  path: "path-list",
  author: "author-list",
  popularSkill: "skill-list",
  channel: "channel-list",
  download: "download-list",
  channelCourse: "channel-course-list",
  pathCourse: "path-course-list",
  authorCourse: "author-course-list",
  continueCourse: "continue-learning-course",
  recommendCourse: "recommend-course",
  newReleaseCourse: "new-release",
  topSellCourse: "top-sell-course",
  categoryCourses: "category-course"
}

export const titleName = {
  browse: "Browse",
  home: "Home",
  setting: "Setting",
  profile: "Profile",
  search: "Search",
  download: "Download",
  continueLearning: "Continue learning",
  recommendCourse: "Recommend courses",
  course: "Courses",
  author: "Authors"
}

export const ScreenName = {
  studyList: "StudyList",
  fieldDetail: "FieldDetail",
  authentication: "Authentication",
  register: "Register",
  login: "Login",
  forgetPassword: "ForgetPassword",
  authorDetail: "AuthorDetail",
  splash: "SplashScreen",
  courseDetail: "CourseDetail",
  channelDetail: "ChannelDetail",
  home: "Home",
  download: "Download",
  browse: "Browse",
  setting: "Setting",
  profile: "Profile",
  pathDetail: "PathDetail",
  skillDetail: "SkillDetail",
  search: "Search",
  editing: "Editing",
  changePassword: "ChangePassword",
  verifyEmail: "VerifyEmail"
}

export const NavigatorName = {
  appStack: "AppNavigator",
  mainTab: "MainTabNavigator",
  listStack: 'ListStack',
  skillStack: 'SkillStackNavigator',
  pathDetailStack: 'PathDetailStackNavigator',
  courseDetailStack: 'CourseDetailStackNavigator',
  authorDetailStack: 'AuthorDetailStackNavigator',
  fieldDetailStack: 'FieldDetailStackNavigator',
  authenticationStack: "AuthenticationStackNavigator",
  channelDetailStack: "ChannelDetailStackNavigator",
  searchTab: "SearchTabNavigator",
}

export const ImageButtonType = {
  course: "course-list",
  general: "all-list",
  newReleaseCourse: "new-release",
  recommendCourse: 'recommend-course'
}

export const TabName = {
  courseResult: "CourseResult",
  authorResult: "AuthorResult",
  allResult: "AllResult"
}

/* ----------------- state -------------------*/
export const INITIAL_DOWNLOAD_STATE = "INITIAL_DOWNLOAD_STATE"
export const DOWNLOADING_STATE = "DOWNLOADING"
export const DOWNLOADED_STATE = "DOWNLOADED"

/* ---------- reducer initial state ----------*/
export const downloadInitialState = {
  downloadState: INITIAL_DOWNLOAD_STATE,
  count: 0,
  progress: 0
}

/* -------------- action state -------------- */
export const ACTION_DOWNLOADING = "ACTION_DOWNLOADING"
export const ACTION_DOWNLOADED = "ACTION_DOWNLOADED"
export const ACTION_PROGRESS = "ACTION_PROGRESS"
export const ACTION_COUNT = "ACTION_COUNT"
export const ACTION_RESET_DOWNLOAD_STATE = "RESET_DOWNLOAD_STATE"