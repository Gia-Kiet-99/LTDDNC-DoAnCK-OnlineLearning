import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {LOADING} from "../../../core/configuration/loading-config";
import {apiGetCoursesByCategory} from "../../../core/services/course-service";

const SkillDetail = (props) => {
  console.log("SkillDetail")
  const skillId = props.route.params.categoryId;

  /* Use state */
  const [loading, setLoading] = useState(LOADING)

  /* Use effect */
  useEffect(() => {
    if (loading === LOADING) {
      apiGetCoursesByCategory(skillId).then(response => {
        if(response.status === 200) {

        }
      })
    }
  }, [loading])

  return <View>
    {/*<FlatList data={} renderItem={}/>*/}
  </View>
};

export default SkillDetail;
