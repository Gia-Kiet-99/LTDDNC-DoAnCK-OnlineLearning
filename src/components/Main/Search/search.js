import React from 'react';
import {View} from 'react-native';
import SearchResultList from "./SearchResultList/search-result-list";

const Search = (props) => {
    return <View style={{flex: 1}}>
        <SearchResultList/>
    </View>
};

export default Search;
