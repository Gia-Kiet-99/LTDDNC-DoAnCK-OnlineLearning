import React, {createContext, useContext, useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  Alert,
  ScrollView,
  TouchableOpacity,
  Modal, TextInput,
} from 'react-native';
import Rating from "../../Common/rating";
import VideoPlayer from "./VideoPlayer/video-player";
import LessonTabNavigator from "../../Navigators/MainTabNavigator/LessonTabNavigator/lesson-tab-navigator";
import {CourseContext} from "../../../provider/course-provider";
import {ChannelContext} from "../../../provider/channel-provider";
import {Feather} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {AuthenticationContext} from "../../../provider/authentication-provider";

// const renderAuthorButton = (author) => {
//     return author.map(item => <AuthorButton author={item}/>)
// }

const CourseDetail = (props) => {
  /* use context */
  const {updateCourseList, getCourseFromId} = useContext(CourseContext)
  const {addChannel, addCourseToChannel, getPrivateChannelNames} = useContext(ChannelContext)
  const {authentication} = useContext(AuthenticationContext)

  /* get course id */
  const courseId = props.route.params.courseId
  /* get course data from id */
  const item = getCourseFromId(courseId)
  const channelNames = getPrivateChannelNames()

  /* use state */
  const [isExpanded, setIsExpanded] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(item.isFavorite)
  const [isDownloaded, setIsDownloaded] = useState(item.isDownload)
  const [scrollView, setScrollView] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [creationModalVisible, setCreationModalVisible] = useState(false)
  const [newChannelName, setNewChannelName] = useState("")
  const [opacityStyle, setOpacityStyle] = useState({})

  /* use effect */
  useEffect(() => {
    item.isFavorite = isBookmarked
    updateCourseList(item.id, item)
  }, [isBookmarked])
  useEffect(() => {
    item.isDownload = isDownloaded
    updateCourseList(item.id, item)
  }, [isDownloaded])

  /* function */
  const onLessonItemPressed = () => {
    scrollView.scrollTo({x: 0, y: 0, animated: true})
  }
  const onAuthorButtonPressed = () => {
    if (props.navigation !== undefined) {
      props.navigation.navigate("AuthorDetailStackNavigator",
        {
          screen: "AuthorDetail",
          params: {
            data: item
          }
        })
    }
  }
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
          {text: "Remove", onPress: () => setIsDownloaded(false)}
        ],
        {cancelable: false}
      );
    } else {
      setIsDownloaded(true)
    }
  }
  const showListChannelModal = () => {
    setModalVisible(true)
  }
  const hideListChannelModal = () => {
    setModalVisible(false)
  }
  const showCreationModal = () => {
    setCreationModalVisible(true);
  }
  const hideCreationModal = () => {
    setCreationModalVisible(false)
  }
  const renderCurrentChannel = (channelNames) => {
    return channelNames.map(item => <ModalButtonItem item={item}/>)
  }
  const onCreateChannelPressed = () => {
    hideListChannelModal()
    showCreationModal()
  }
  const createNewChannel = () => {
    hideCreationModal();
    if (newChannelName !== "") {
      addChannel(newChannelName, authentication.user.username, item)
    }
  }
  const addCurrentCourseToChannel = (selectedChannel) => {
    hideListChannelModal()
    addCourseToChannel(selectedChannel.id, item)
  }

  /* internal component */
  const AuthorButton = () => {
    return <TouchableOpacity
      style={styles.authorWrapper}
      onPress={onAuthorButtonPressed}
    >
      <Image style={styles.avatar} source={item.authorAvatar}/>
      <Text>{item.authorName}</Text>
    </TouchableOpacity>
  }
  const CourseInfo = () => {
    return <View style={styles.courseInfo}>
      <Text style={{fontSize: 24}}>{item.title}</Text>

      <AuthorButton/>
      {/*<ScrollView style={{marginTop: 5}} horizontal={true} showsHorizontalScrollIndicator={false}>*/}
      {/*    {renderAuthorButton(item.author)}*/}
      {/*</ScrollView>*/}

      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Text style={{color: 'gray', marginRight: 10, fontSize: 13}}>
          {`${item.level} . ${item.released} . ${item.duration}`}
        </Text>
        <Rating/>
      </View>
    </View>
  }
  const CourseButton = () => {
    return <View style={styles.buttonViewGroup}>
      <TouchableOpacity style={styles.button} onPress={onBookmarkButtonPressed}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.buttonImage}
            source={(isBookmarked === true) ? require('../../../../assets/bookmarked-icon.png') : require('../../../../assets/bookmark-icon.png')}/>
        </View>
        <Text style={styles.buttonText}>{(isBookmarked === true) ? 'Bookmarked' : 'Bookmark'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={showListChannelModal} style={[styles.button, {marginHorizontal: 10}]}>
        <View style={styles.imageWrapper}>
          <Image style={styles.buttonImage} source={require('../../../../assets/channel-icon.png')}/>
        </View>
        <Text style={[styles.buttonText, {textAlign: 'center'}]}>Add to Channel</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onDownloadButtonPressed}>
        <View style={styles.imageWrapper}>
          {
            isDownloaded ?
              <Image style={styles.buttonImage} source={require('../../../../assets/downloaded.png')}/>
              :
              <Image style={styles.buttonImage} source={require('../../../../assets/download.png')}/>
          }
        </View>
        <Text style={styles.buttonText}>{isDownloaded ? "Downloaded" : "Download"}</Text>
      </TouchableOpacity>
    </View>
  }
  const CourseDescription = () => {
    return <View>
      <View style={(isExpanded === true) ? styles.courseDescription : styles.briefCourseDescription}>
        <View style={styles.desWrapper}>
          <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae ex incidunt distinctio veniam
            vero vel
            ratione! Maiores nihil veritatis nulla doloremque quidem minus, enim, praesentium quasi repellat
            saepe
            temporibus perspiciatis.</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.expandButton}
          onPress={() => setIsExpanded(!isExpanded)}>
          <Image style={styles.expandImage}
                 source={(isExpanded === true) ? require('../../../../assets/up-arrow.png') : require('../../../../assets/down-arrow.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  }
  const CourseIntro = () => {
    return <View style={styles.courseIntro}>
      <CourseInfo item={props.item}/>
      <CourseButton/>
      <CourseDescription/>

      <TouchableOpacity style={styles.largeButton}>
        <Image style={{height: 25, width: 25, marginRight: 8}}
               source={require('../../../../assets/check.png')}/>
        <Text>Take a learning check</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.largeButton}
        onPress={() => props.navigation.push("CourseDetail", {item: item})}
      >
        <Image style={{height: 25, width: 25, marginRight: 8}}
               source={require('../../../../assets/folder.png')}/>
        <Text>View related paths & courses</Text>
      </TouchableOpacity>
    </View>
  }
  const ModalButtonItem = ({item}) => {
    return (
      <TouchableOpacity
          style={styles.modalButton}
          onPress={() => addCurrentCourseToChannel(item)}>
        <Ionicons name="md-wifi" size={24} color="#34495e"/>
        <Text style={styles.modalText}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  console.log("Course Detail", channelNames)
  return (
    <CourseDetailContext.Provider value={{item, onLessonItemPressed}}>
      {/*<StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content"/>*/}
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={hideListChannelModal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>
                Add to channel
              </Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={onCreateChannelPressed}>
                <Feather name="plus" size={24} color="#34495e"/>
                <Text style={styles.modalText}>Create new channel</Text>
              </TouchableOpacity>
              {renderCurrentChannel(channelNames)}
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={creationModalVisible}
          onRequestClose={hideCreationModal}>
          <View style={styles.centeredView}>
            <View style={{...styles.modalView, paddingVertical: 0}}>
              <Text style={{...styles.modalTitle, paddingHorizontal: 0}}>Create new channel</Text>
              <TextInput
                placeholder="Enter new channel"
                autoFocus={true}
                selectionColor={'#888'}
                style={styles.channelTextInput}
                onChangeText={text => setNewChannelName(text)}
                defaultValue={newChannelName}/>
              <View style={styles.cancelOkButtonContainer}>
                <TouchableOpacity
                  style={styles.cancelOkButton}
                  onPress={hideCreationModal}>
                  <Text style={styles.cancelOkText}>Cancel</Text>
                </TouchableOpacity>
                <View style={{borderLeftColor: "lightgray", borderLeftWidth: 0.5, height: "100%"}}/>
                <TouchableOpacity
                  style={styles.cancelOkButton}
                  onPress={createNewChannel}>
                  <Text style={styles.cancelOkText}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <View style={styles.content}>
          <VideoPlayer navigation={props.navigation}/>
          <ScrollView
            ref={ref => setScrollView(ref)}
            showsVerticalScrollIndicator={false}>
            <CourseIntro/>
            <LessonTabNavigator/>
          </ScrollView>
        </View>
      </View>
    </CourseDetailContext.Provider>
  )
}

export const CourseDetailContext = createContext()

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'beige',
    // opacity: 0.5,
  },
  modalView: {
    width: '95%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'white',
    // opacity: 1,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'pink',
    padding: 10,
  },
  modalText: {
    fontSize: 16,
    marginLeft: 8
  },
  modalTitle: {
    alignItems: 'center',
    // backgroundColor: 'pink',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444'
  },
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
