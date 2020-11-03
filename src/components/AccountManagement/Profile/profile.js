import React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';

const Profile = (props) => {

    const info = {
        username: 'Kiet Dinh',
        avatar: require('../../../../assets/avatar.png'),
        totalActiveDays: 0,
        streak: 0,
        mostActiveTimeOfDay: '7:00 AM',
        mostViewedSubject: 'N/A'
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainInfo}>
                <Image style={styles.image} source={info.avatar}/>
                <Text style={styles.username}>{info.username}</Text>
            </View>

            <View style={styles.activityInsight}>
                <Text style={{fontSize: 16, fontWeight: 'bold',marginTop: 40}}>Activity insights (last 30 days)</Text>
                <View style={{marginTop: '10%'}}>
                    <Text style={{color:'gray'}}>TOTAL ACTIVE DAYS</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontSize: 20}}>{info.totalActiveDays}</Text>
                        <Text style={{marginLeft: 10}}>{info.streak} day streak</Text>
                    </View>
                </View>
                <View style={{marginTop: 35}}>
                    <Text style={{color:'gray'}}>MOST ACTIVE TIME OF DAY</Text>
                    <Text style={{fontSize: 20}}>{info.mostActiveTimeOfDay}</Text>
                </View>
                <View style={{marginTop: 35}}>
                    <Text style={{color:'gray'}}>MOST VIEWED SUBJECT</Text>
                    <Text style={{fontSize: 20}}>{info.mostViewedSubject}</Text>
                </View>
            </View>
        </View>
    );
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
    activityInsight: {

    },
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
