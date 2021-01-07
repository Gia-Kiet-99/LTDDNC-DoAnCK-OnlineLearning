import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native'
import {LOAD_FAILED, LOAD_SUCCEEDED, LOADING} from "../../../../core/configuration/loading-config";
import {apiGetSearchHistory} from "../../../../core/services/search-service";

function SearchHistoryList(props) {
  console.log("SearchHistoryList")

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(LOADING)

  useEffect(() => {
    if (loading === LOADING) {
      apiGetSearchHistory().then(response => {
        if (response.status === 200) {
          console.log(response.data)
          setData(response.data.payload.data)
          setLoading(LOAD_SUCCEEDED)
        } else {
          setLoading(LOAD_FAILED)
        }
      }).catch(e => {
        setLoading(LOAD_FAILED)
        console.log("Error SearchHistoryList", e)
      })
    }
  }, [loading])

  const renderListHeader = () => {
    return <View style={styles.listHeaderContainer}>
      <Text style={styles.headerText}>Recent searches</Text>
      <TouchableOpacity>
        <Text style={{...styles.headerText, color: '#2980b9', fontWeight: 'bold'}}>CLEAR ALL</Text>
      </TouchableOpacity>
    </View>
  }
  const renderListItem = ({item}) => {
    return <TouchableOpacity
      onPress={() => props.onHistoryItemPressed(item.content)}
      style={styles.listItemContainer}>
      <Image style={styles.itemImage} source={require("../../../../../assets/recent.png")}/>
      <Text style={styles.itemText}>{item.content}</Text>
    </TouchableOpacity>
  }
  const renderUI = () => {
    if (loading === LOAD_SUCCEEDED) {
      return <FlatList
        data={data}
        renderItem={renderListItem}
        keyExtractor={(item) => (item.id)}
        ListHeaderComponent={renderListHeader}
      />
    }
  }

  return <View style={styles.container}>
    {renderUI()}
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  listItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 16,
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

export default SearchHistoryList;