import React, {useContext, useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, ActivityIndicator, TouchableOpacity} from 'react-native';
import {AuthenticationContext} from "../../../provider/authentication-provider";

const info = {
  username: 'Kiet Dinh',
  avatar: require('../../../../assets/avatar.png'),
  totalActiveDays: 0,
  streak: 0,
  mostActiveTimeOfDay: '7:00 AM',
  mostViewedSubject: 'N/A'
}

const Profile = (props) => {
  console.log("Profile")
  const {state} = useContext(AuthenticationContext)

  // const [isLoading, setLoading] = useState(true);

  return <View style={styles.container}>
    {/*{isLoading ?*/}
    {/*  (*/}
    {/*    <View>*/}
    {/*      <ActivityIndicator color="red"/>*/}
    {/*    </View>*/}
    {/*  ) :*/}
    {/*  (*/}
    {/*    <View>*/}
    <View style={styles.mainInfo}>
      <Image style={styles.image} source={{uri: state.userInfo.avatar}}/>
      <Text style={styles.username}>{state.userInfo.name}</Text>
    </View>

    <View style={styles.activityInsight}>
      <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 40}}>Activity insights (last 30 days)</Text>
      <View style={{marginTop: '10%'}}>
        <Text style={{color: 'gray'}}>TOTAL ACTIVE DAYS</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 20}}>{info.totalActiveDays}</Text>
          <Text style={{marginLeft: 10}}>{info.streak} day streak</Text>
        </View>
      </View>
      <View style={{marginTop: 35}}>
        <Text style={{color: 'gray'}}>MOST ACTIVE TIME OF DAY</Text>
        <Text style={{fontSize: 20}}>{info.mostActiveTimeOfDay}</Text>
      </View>
      <View style={{marginTop: 35}}>
        <Text style={{color: 'gray'}}>MOST VIEWED SUBJECT</Text>
        <Text style={{fontSize: 20}}>{info.mostViewedSubject}</Text>
      </View>
    </View>
  </View>
  // )}
  // </View>

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  mainInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  activityInsight: {},
  image: {
    height: 80,
    width: 80
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15
  }
})

export default Profile;
