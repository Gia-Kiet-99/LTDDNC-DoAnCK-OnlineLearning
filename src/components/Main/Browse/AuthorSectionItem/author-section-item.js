import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import {NavigatorName, ScreenName} from "../../../../globals/constants";

const AuthorSectionItem = (props) => {
  const item = props.item

  const onItemPressed = () => {
    // props.navigation.navigate(ScreenName.authorDetail,
    //   {
    //     data: item,
    //   })
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onItemPressed}>

      <View style={styles.content}>
        <Image style={styles.image} source={{uri: item["user.avatar"]}}/>
        <View style={styles.description}>
          <Text style={styles.text}>
            {item["user.name"]}
          </Text>
        </View>
      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  content: {
    width: 90,
    // height: 150
  },
  description: {
    flex: 1,
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 90,
    width: '100%',
    borderRadius: 90/2
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default AuthorSectionItem;
