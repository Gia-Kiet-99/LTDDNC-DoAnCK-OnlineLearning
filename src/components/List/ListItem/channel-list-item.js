import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Menu, {MenuItem} from "react-native-material-menu";
import ChannelInfo from "../../Common/channel-info";
import {NavigatorName, ScreenName} from "../../../globals/constants";

const ChannelListItem = (props) => {
  const item = props.item;
  const [menu, setMenu] = useState(null);

  const doNothing = () => {
  }
  const showMenu = () => {
    menu.show();
  }
  const onItemPressed = () => {
    // if (props.navigation !== undefined)
    //   return props.navigation.navigate(NavigatorName.channelDetailStack,
    //     {
    //       screen: ScreenName.channelDetail,
    //       params: {
    //         channelId: item.id
    //       }
    //     })
    props.navigation.navigate(ScreenName.channelDetail, {
      channelId: item.id
    })
  }

  return (
    <TouchableOpacity style={styles.container}
                      onPress={onItemPressed}
    >
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={item.image}/>
      </View>
      <ChannelInfo
        title={item.title}
        level={item.level}
        follow={item.follow}
        style={{fontSize: 16}}
        containerStyle={channelInfoStyle.container}
        titleStyle={channelInfoStyle.largerTitle}
      />
      <TouchableOpacity style={styles.menuWrapper} onPress={showMenu}>
        <Menu
          ref={ref => setMenu(ref)}
          button={
            <Image style={{height: 24, width: 24}} source={require('../../../../assets/icon-menu-vertical.png')}/>
          }>
          <MenuItem onPress={doNothing}>Share</MenuItem>
        </Menu>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const channelInfoStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
  },
  largerTitle: {
    fontSize: 16,
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 15,
  },
  imageWrapper: {
    // flex: 3,
    width: 80,
    height: 64,
    backgroundColor: '#34495e'
  },
  image: {
    height: '100%',
    width: '100%',
  },
  menuWrapper: {
    justifyContent: 'center',
  }
})

export default ChannelListItem;
