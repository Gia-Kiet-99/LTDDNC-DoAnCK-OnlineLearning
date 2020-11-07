import React from 'react';
import {
    StyleSheet,
    View,
    StatusBar
} from 'react-native';
import Browse from "./src/components/Main/Browse/browse";
import Search from "./src/components/Main/Search/search";
import Download from "./src/components/Main/Download/download";
import SearchResultList from "./src/components/Main/Search/SearchResultList/search-result-list";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content"/>
      <SearchResultList/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});



