import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native'

function SearchHistoryListItem(props) {
  return <TouchableOpacity style={styles.listItemContainer}>
    <Image style={styles.itemImage} source={require("../../../../assets/recent.png")}/>
    <Text style={styles.itemText}>{props.item.content}</Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  listItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  itemText: {
    fontSize: 16,
    marginLeft: 10
  },
  itemImage: {
    height: 20,
    width: 20
  }
})

export default SearchHistoryListItem;