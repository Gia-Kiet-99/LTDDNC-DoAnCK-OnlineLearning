import React, {createContext, useContext, useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  ActivityIndicator,
  Button,
  Alert,
} from 'react-native';
import Rating from "../../Common/rating";
import VideoPlayer from "./VideoPlayer/video-player";
import LessonTabNavigator from "../../Navigators/MainTabNavigator/LessonTabNavigator/lesson-tab-navigator";
import {CourseContext} from "../../../provider/course-provider";
import {ChannelContext} from "../../../provider/channel-provider";
import {Feather} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {AuthenticationContext} from "../../../provider/authentication-provider";
import Description from "../../Common/description";
import CourseButton from "./CourseButton/course-button";
import {NavigatorName, ScreenName} from "../../../globals/constants";
import AuthorButton from "./AuthorButton/author-button";
import {AuthorContext} from "../../../provider/author-provider";
import CourseInfo from "./CourseInfo/course-info";
import {
  apiEnrollCourse,
  apiGetCourseDetailByIds,
  apiGetCourseInfo,
  apiGetPaymentInfo
} from "../../../core/services/course-service";
import {LOAD_FAILED, LOAD_SUCCEEDED, LOADING} from "../../../core/configuration/loading-config";
import {ListContext} from "../../../provider/list-provider";

const CourseDetail = (props) => {
  /* use context */
  const authContext = useContext(AuthenticationContext)
  const listContext = useContext(ListContext)
  // const {getCourseFromId} = useContext(CourseContext)
  // const {addChannel, addCourseToChannel, getPrivateChannelNames} = useContext(ChannelContext)
  // const {authentication} = useContext(AuthenticationContext)
  // const {getAuthorById} = useContext(AuthorContext)

  /* get course id */
  const courseInfo = props.route.params.data
  /* get course data from id */
  // const item = getCourseFromId(courseId)
  // const channelNames = getPrivateChannelNames()

  /* use state */
  // const [isLoading, setLoading] = useState(true)
  const [courseDetail, setCourseDetail] = useState(null)
  const [loadStatus, setLoadStatus] = useState(LOADING)
  const [isPaid, setPaid] = useState(false)
  const [scrollView, setScrollView] = useState(null)
  // const [modalVisible, setModalVisible] = useState(false)
  // const [creationModalVisible, setCreationModalVisible] = useState(false)
  // const [newChannelName, setNewChannelName] = useState("")

  /* use effect */
  useEffect(() => {
    apiGetPaymentInfo(courseInfo.id).then(response => {
      if (response.status === 200) {
        // console.log("didUserBuyCourse", response.data.didUserBuyCourse)
        if (response.data.didUserBuyCourse === true) {
          setPaid(true) //-> run useEffect isPaid
        } else {
          setPaid(false)
          setLoadStatus(LOAD_SUCCEEDED)
        }
      } else {
        setLoadStatus(LOAD_FAILED)
      }
    }).catch(() => {
      setLoadStatus(LOAD_FAILED)
      throw new Error()
    })
  }, [])

  useEffect(() => {
    if (isPaid === true) {
      apiGetCourseDetailByIds(courseInfo.id, authContext.state.userInfo.id)
        .then(response => {
          if (response.status === 200) {
            setCourseDetail(response.data.payload)
            setLoadStatus(LOAD_SUCCEEDED)
          } else {
            setLoadStatus(LOAD_FAILED)
          }
        })
        .catch(() => {
          setLoadStatus(LOAD_FAILED)
          throw new Error()
        })
    }
  }, [isPaid])

  //   apiGetCourseInfo(courseId).then((response) => {
  //     if (response.status === 200) {
  //       setCourseInfo(response.data.payload)
  //       setLoadStatus(LOAD_SUCCEEDED)
  //     } else {
  //       setLoadStatus(LOAD_FAILED)
  //     }
  //   }).catch((e) => {
  //     setLoadStatus(LOAD_FAILED)
  //     throw new Error(e)
  //   })
  // }, [])

  /* function */
  // const onLessonItemPressed = () => {
  //   scrollView.scrollTo({x: 0, y: 0, animated: true})
  // }
  // const onAuthorButtonPressed = () => {
  //   let authorItem = getAuthorById(item.authorId)
  //   // props.navigation?.navigate(NavigatorName.authorDetailStack,
  //   //   {
  //   //     screen: ScreenName.authorDetail,
  //   //     params: {
  //   //       data: authorItem
  //   //     }
  //   //   })
  //   props.navigation.navigate(ScreenName.authorDetail, {
  //     data: authorItem,
  //   })
  // }
  // const showListChannelModal = () => {
  //   setModalVisible(true)
  // }
  // const hideListChannelModal = () => {
  //   setModalVisible(false)
  // }
  // const showCreationModal = () => {
  //   setCreationModalVisible(true);
  // }
  // const hideCreationModal = () => {
  //   setCreationModalVisible(false)
  // }
  // const renderCurrentChannel = (channelNames) => {
  //   return channelNames.map(item => <ModalButtonItem key={item.id} item={item}/>)
  // }
  // const onCreateChannelPressed = () => {
  //   hideListChannelModal()
  //   showCreationModal()
  // }
  // const createNewChannel = () => {
  //   hideCreationModal();
  //   if (newChannelName !== "") {
  //     addChannel(newChannelName, authentication.user.username, item)
  //   }
  // }
  // const addCurrentCourseToChannel = (selectedChannel) => {
  //   hideListChannelModal()
  //   addCourseToChannel(selectedChannel.id, item)
  // }

  /* internal component */
  const CourseIntro = () => {
    return <View style={styles.courseIntro}>
      <CourseInfo
        title={courseDetail.title}
        status={courseDetail.status}
        released={courseDetail.createdAt}
        duration={courseDetail.totalHours}
        rating={courseDetail.averagePoint}
        authorInfo={{
          /**
           * Hiện tại chưa lấy được thông tin người dạy thông qua id
           * nên lúc bấm AuthorButton nên truyền cả courseDetail.instructorqua màn hình AuthorDetail
           */
          authorId: courseDetail.instructor.id,
          authorName: courseDetail.instructor.name,
          authorAvatar: courseDetail.instructor.avatar
        }}
        /*onAuthorButtonPress={onAuthorButtonPressed}*//>
      <CourseButton /*item={item} showListChannelModal={showListChannelModal}*//>
      <Description content={{
        description: courseDetail.description,
        requirement: courseDetail.requirement,
        learnWhat: courseDetail.learnWhat
      }}/>

      <TouchableOpacity style={styles.largeButton}>
        <Image style={{height: 25, width: 25, marginRight: 8}}
               source={require('../../../../assets/check.png')}/>
        <Text>Take a learning check</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.largeButton}
        /*onPress={() => props.navigation.push("CourseDetail", {item: item})}*/>
        <Image style={{height: 25, width: 25, marginRight: 8}}
               source={require('../../../../assets/folder.png')}/>
        <Text>View related paths & courses</Text>
      </TouchableOpacity>

    </View>
  }
  // const ModalButtonItem = ({item}) => {
  //   return (
  //     <TouchableOpacity
  //       style={styles.modalButton}
  //       onPress={() => addCurrentCourseToChannel(item)}>
  //       <Ionicons name="md-wifi" size={24} color="#34495e"/>
  //       <Text style={styles.modalText}>{item.name}</Text>
  //     </TouchableOpacity>
  //   )
  // }

  const enrollCourse = async () => {
    if (coursePrice > 0) {
      Alert.alert("Payment", "This course is not free")
    } else {
      //api payment course
      setLoadStatus(LOADING)
      try {
        const response = await apiEnrollCourse(courseInfo.id)
        if (response.status === 200) {
          setPaid(true)
          // setLoadStatus(LOAD_SUCCEEDED)
          listContext.setShouldUpdateList(true)
        } else {
          setLoadStatus(LOAD_FAILED)
        }
      } catch (e) {
        setLoadStatus(LOAD_FAILED)
      }
    }
  }

  const coursePrice = (courseInfo.price !== undefined) ? courseInfo.price : courseInfo.coursePrice
  const renderUI = () => {
    if (loadStatus === LOADING) {
      return <View style={{justifyContent: 'center', flex: 1}}>
        <ActivityIndicator size="large" color="#2980b9"/>
      </View>
    } else if (loadStatus === LOAD_SUCCEEDED) {
      if (isPaid === false) {
        return <View style={{...styles.content, justifyContent: 'center', alignItems: 'center'}}>
          <Text>{`Price: ${coursePrice}$`}</Text>
          <Button onPress={enrollCourse} title="Enroll me"/>
        </View>
      } else {
        return <View style={styles.content}>
          <VideoPlayer
            uri={courseDetail.promoVidUrl}
            navigation={props.navigation}/>
          <ScrollView ref={ref => setScrollView(ref)}
                      showsVerticalScrollIndicator={false}>
            <CourseIntro/>
            <LessonTabNavigator
              courseId={courseDetail.id}
              section={courseDetail.section}
              ratingList={courseDetail.ratings.ratingList}/>
          </ScrollView>
        </View>
      }
    } else {
      return <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
        <Text>Oops... Something went wrong</Text>
      </View>
    }
  }

  console.log("Course Detail")
  return <View style={styles.container}>
    {/*// <CourseDetailContext.Provider value={{item, onLessonItemPressed}}>*/}
    {/*<StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content"/>*/}

    {/*<Modal*/}
    {/*  animationType="slide"*/}
    {/*  transparent={true}*/}
    {/*  visible={modalVisible}*/}
    {/*  onRequestClose={hideListChannelModal}>*/}
    {/*  <View style={styles.centeredView}>*/}
    {/*    <View style={styles.modalView}>*/}
    {/*      <Text style={styles.modalTitle}>*/}
    {/*        Add to channel*/}
    {/*      </Text>*/}
    {/*      <TouchableOpacity*/}
    {/*        style={styles.modalButton}*/}
    {/*        onPress={onCreateChannelPressed}>*/}
    {/*        <Feather name="plus" size={24} color="#34495e"/>*/}
    {/*        <Text style={styles.modalText}>Create new channel</Text>*/}
    {/*      </TouchableOpacity>*/}
    {/*      {renderCurrentChannel(channelNames)}*/}
    {/*    </View>*/}
    {/*  </View>*/}
    {/*</Modal>*/}

    {/*<Modal*/}
    {/*  animationType="slide"*/}
    {/*  transparent={true}*/}
    {/*  visible={creationModalVisible}*/}
    {/*  onRequestClose={hideCreationModal}>*/}
    {/*  <View style={styles.centeredView}>*/}
    {/*    <View style={{...styles.modalView, paddingVertical: 0}}>*/}
    {/*      <Text style={{...styles.modalTitle, paddingHorizontal: 0}}>Create new channel</Text>*/}
    {/*      <TextInput*/}
    {/*        placeholder="Enter new channel"*/}
    {/*        autoFocus={true}*/}
    {/*        selectionColor={'#888'}*/}
    {/*        style={styles.channelTextInput}*/}
    {/*        onChangeText={text => setNewChannelName(text)}*/}
    {/*        defaultValue={newChannelName}/>*/}
    {/*      <View style={styles.cancelOkButtonContainer}>*/}
    {/*        <TouchableOpacity*/}
    {/*          style={styles.cancelOkButton}*/}
    {/*          onPress={hideCreationModal}>*/}
    {/*          <Text style={styles.cancelOkText}>Cancel</Text>*/}
    {/*        </TouchableOpacity>*/}
    {/*        <View style={{borderLeftColor: "lightgray", borderLeftWidth: 0.5, height: "100%"}}/>*/}
    {/*        <TouchableOpacity*/}
    {/*          style={styles.cancelOkButton}*/}
    {/*          onPress={createNewChannel}>*/}
    {/*          <Text style={styles.cancelOkText}>OK</Text>*/}
    {/*        </TouchableOpacity>*/}
    {/*      </View>*/}
    {/*    </View>*/}
    {/*  </View>*/}
    {/*</Modal>*/}

    {renderUI()}

    {/*{loadStatus === LOADING ? (*/}
    {/*  <View style={{justifyContent: 'center', flex: 1}}>*/}
    {/*    <ActivityIndicator size="large" color="#2980b9"/>*/}
    {/*  </View>*/}
    {/*) : (loadStatus === LOAD_SUCCEEDED ? (*/}
    {/*    isPaid ? (*/}
    {/*      <View style={styles.content}>*/}
    {/*        <VideoPlayer uri={courseInfo.promoVidUrl} navigation={props.navigation}/>*/}
    {/*        /!*<ScrollView*!/*/}
    {/*        /!*  ref={ref => setScrollView(ref)}*!/*/}
    {/*        /!*  showsVerticalScrollIndicator={false}>*!/*/}
    {/*        /!*  <CourseIntro/>*!/*/}
    {/*        /!*  <LessonTabNavigator/>*!/*/}
    {/*        /!*</ScrollView>*!/*/}
    {/*      </View>*/}
    {/*    ) : (*/}
    {/*      <View style={styles.content}>*/}
    {/*        <TouchableOpacity>*/}
    {/*          <Text>Enroll</Text>*/}
    {/*        </TouchableOpacity>*/}
    {/*      </View>*/}
    {/*    )*/}
    {/*  ) : (*/}
    {/*    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>*/}
    {/*      <Text>Oops... Something went wrong</Text>*/}
    {/*    </View>*/}
    {/*  )*/}
    {/*)}*/}
  </View>
  // </CourseDetailContext.Provider>
}

export const CourseDetailContext = createContext()

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1
  },
  // centeredView: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   // backgroundColor: 'beige',
  //   // opacity: 0.5,
  // },
  // modalView: {
  //   width: '95%',
  //   paddingHorizontal: 15,
  //   paddingVertical: 10,
  //   backgroundColor: 'white',
  //   // opacity: 1,
  //   borderRadius: 8,
  //   overflow: 'hidden',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  //   elevation: 5,
  // },
  // modalButton: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   // backgroundColor: 'pink',
  //   padding: 10,
  // },
  // modalText: {
  //   fontSize: 16,
  //   marginLeft: 8
  // },
  // modalTitle: {
  //   alignItems: 'center',
  //   // backgroundColor: 'pink',
  //   padding: 10,
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   color: '#444'
  // },
  channelTextInput: {
    backgroundColor: '#ecf0f1',
    padding: 10,
    fontSize: 16,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
  },
  cancelOkButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancelOkButton: {
    flex: 1,
    padding: 12,
  },
  cancelOkText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#2980b9',
  },
  courseIntro: {
    // flex: 1,
    padding: 15,
    backgroundColor: '#fff'
  },
  largeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  courseInfo: {
    // backgroundColor: 'pink'
  },
  authorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: 3,
    paddingRight: 15,
    marginTop: 8,
    marginRight: 8,
    borderRadius: 36 / 2,
    alignSelf: 'baseline'
  },
  avatar: {
    height: 25,
    width: 25,
    marginRight: 5,
    borderRadius: 30 / 2,
  },
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
  courseDescription: {
    flexDirection: 'row',
    marginTop: 20,
    // backgroundColor: 'beige'
  },
  briefCourseDescription: {
    height: 50,
    flexDirection: 'row',
    marginTop: 20,
    // backgroundColor: 'beige',
    overflow: 'hidden',
  },
  desWrapper: {
    flex: 1,
  },
  expandButton: {
    backgroundColor: '#ddd',
    padding: 8,
    borderRadius: 5,
    justifyContent: 'center'
  },
  expandImage: {
    height: 12,
    width: 12
  },
})

export default CourseDetail;
