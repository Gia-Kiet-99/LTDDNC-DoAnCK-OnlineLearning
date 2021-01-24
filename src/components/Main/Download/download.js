import React, {useCallback, useEffect, useState} from 'react';
import {Alert, FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ActionBar from "../../Common/action-bar";
import {titleName} from "../../../globals/constants";
import {
  getDownloadedListFromStorage,
} from "../../../core/utils/async-storage-service";
import CourseListItem from "../../List/ListItem/course-list-item";
import {deleteAllCourses} from "../../../core/services/download-service";

const Download = (props) => {
  console.log("Download")

  /* Use state */
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = React.useState(false);

  /* Use effect */
  useEffect(() => {
    if (loading) {
      getDownloadedListFromStorage().then(data => {
        setData(data)
        setLoading(false)
      })
    }
  }, [loading])

  /* Internal function */
  const handleRemoveAll = async () => {
    await deleteAllCourses()
    setData([])
  }
  const onRemoveAllButtonClick = () => {
    Alert.alert(
      "Remove download",
      "Remove all courses?",
      [
        {
          text: "Yes",
          onPress: handleRemoveAll
        },
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
      ], {cancelable: true}
    )
  }
  const renderItem = ({item}) => {
    return <CourseListItem key={item.id} item={item} authorName={item.authorName} navigation={props.navigation}/>
  }
  const onRefresh = useCallback(() => {
    setRefreshing(true)
    getDownloadedListFromStorage().then(data => {
      setData(data)
      setRefreshing(false)
    })
  }, [refreshing])

  return (
    <View style={styles.container}>
      {/*<StatusBar translucent={false} backgroundColor="white" barStyle='dark-content' animated={true}/>*/}
      <ActionBar title={titleName.download} navigation={props.navigation}/>
      {loading ? <View/> :
        <View style={styles.content}>
          <View style={styles.overView}>
            <Text style={styles.text}>{`${data.length} courses`}</Text>
            <TouchableOpacity style={styles.button} onPress={onRemoveAllButtonClick}>
              <Text style={[styles.text, {color: '#2e97ff'}]}>REMOVE ALL</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
          />
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5'
  },
  overView: {
    marginTop: 25,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  button: {},
  courseList: {
    marginTop: 25,
  }
})

export default Download;
