import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import AuthorListHeader from "./ListHeader/author-list-header";
import CourseListItem from "../../List/ListItem/course-list-item";
import {LOAD_FAILED, LOAD_SUCCEEDED, LOADING} from "../../../core/configuration/loading-config";
import {apiGetInstructorDetailInfo} from "../../../core/services/course-service";
import LoadIndicator from "../../Common/load-indicator";
import ListItemSeparator from "../../Common/list-item-separator";

const AuthorDetail = (props) => {
  console.log("AuthorDetail")
  const authorId = props.route.params?.authorId;

  /* Use state */
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(LOADING)

  /* Use effect */
  useEffect(() => {
    if (loading === LOADING) {
      apiGetInstructorDetailInfo(authorId)
        .then(response => {
          if (response.status === 200) {
            setData(response.data.payload)
            setLoading(LOAD_SUCCEEDED)
          } else {
            setLoading(LOAD_FAILED)
          }
        })
        .catch(e => {
          setLoading(LOAD_FAILED)
          throw new Error()
        })
    }
  }, [loading])

  // <AuthorListHeader data={data}/>
  const renderItem = ({item}) => {
    return <CourseListItem key={item.id} item={item} authorName={data.name}
                           navigation={props.navigation}/>
  }
  const renderHeader = () => {
    return <AuthorListHeader
      authorInfo={{
        avatar: data.avatar,
        name: data.name,
        // description: data.intro
      }}/>
  }
  const renderUI = () => {
    switch (loading) {
      case LOADING:
        return <LoadIndicator/>
      case LOAD_SUCCEEDED:
        return <FlatList
          data={data.courses}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ItemSeparatorComponent={ListItemSeparator}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={renderHeader}
        />
      case LOAD_FAILED:
        return <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
          <Text>Oops... Something went wrong</Text>
        </View>
    }
  }

  return (
    <View style={styles.container}>
      {renderUI()}
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15
  },
})

export default AuthorDetail;
