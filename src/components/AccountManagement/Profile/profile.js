import React, {useContext} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {AuthenticationContext} from "../../../provider/authentication-provider";
import {FontAwesome5} from '@expo/vector-icons';
import {ScreenName} from "../../../globals/constants";
import {Ionicons} from '@expo/vector-icons';

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

  const onEditButtonPressed = () => {
    props.navigation.navigate(ScreenName.editing)
  }
  const onChangePasswordPressed = () => {
    props.navigation.navigate(ScreenName.changePassword)
  }

  return <ScrollView style={styles.container}>
    <View style={styles.mainInfo}>
      <Image style={styles.image} source={{uri: state.userInfo.avatar}}/>
      <View style={styles.userInfo}>
        <Text style={styles.username}>{state.userInfo.name}</Text>
        <Text style={styles.smallText}>{state.userInfo.email}</Text>
        <Text style={styles.smallText}>{state.userInfo.phone}</Text>
      </View>
      {/*<TouchableOpacity onPress={onEditButtonPressed}>*/}
      {/*  <FontAwesome5 name="edit" size={18} color="#2980b9"/>*/}
      {/*</TouchableOpacity>*/}
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

    <View style={styles.buttonGroup}>
      <TouchableOpacity style={styles.button} onPress={onEditButtonPressed}>
        <FontAwesome5 name="edit" size={16} color="#fff"/>
        <Text style={styles.buttonText}>Update account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onChangePasswordPressed}>
        <Image source={require('../../../../assets/lock.png')} style={{width: 16, height: 16}}/>
        <Text style={styles.buttonText}>Change password</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
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
  userInfo: {
    marginLeft: 15,
    flex: 1
  },
  activityInsight: {},
  image: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 13
  },
  buttonGroup: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  button: {
    // flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    padding: 10,
    backgroundColor: '#2980b9'
  },
  buttonText: {
    textAlign: 'center',
    marginLeft: 5,
    color: '#fff'
  }
})

export default Profile;
