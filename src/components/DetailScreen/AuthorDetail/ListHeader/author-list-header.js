import React, {useState} from 'react'
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native'
import Description from "../../../Common/description";
import AuthorInfo from "../AuthorInfo/author-info";
import AuthorContact from "../AuthorContact/author-contact";

function AuthorListHeader(props) {
  const [isFollowing, setIsFollowing] = useState(false);
  return (
    <View>
      {/*Author info*/}
      <AuthorInfo authorInfo={props.authorInfo}/>
      {/*Follow button*/}
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => setIsFollowing(!isFollowing)}
        style={(isFollowing) ? styles.followingButton : styles.followButton}>
        <Text style={(isFollowing) ? styles.followingText : styles.followText}>
          {(isFollowing) ? "FOLLOWING" : "FOLLOW"}
        </Text>
      </TouchableOpacity>

      <Text style={{textAlign: 'center', marginTop: 10, fontSize: 12}}>Follow to be notified when new
        courses are published.</Text>
      {/*Author description*/}
      <View>
        <Text></Text>
      </View>

      {/*Link to fb, instagram, twitter,...*/}
      <AuthorContact/>
      <Text style={{marginTop: 35, fontSize: 16, fontWeight: 'bold'}}>Courses</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  followButton: {
    marginTop: 5,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: "#3498db",
  },
  followingButton: {
    marginTop: 5,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: "#7f8c8d"
  },
  followText: {
    color: "white",
    textAlign: 'center'
  },
  followingText: {
    color: "#bdc3c7",
    textAlign: 'center'
  },
})

export default AuthorListHeader;