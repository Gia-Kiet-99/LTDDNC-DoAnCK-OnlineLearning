import React, {useContext} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {AppThemeContext} from "../../../provider/theme-provider";
import AccountInfo from "./AccountInfo/account-info";
import Options from "./Options/options";
import Detail from "./Detail/detail";

const Setting = (props) => {
  console.log("Setting")
  const {theme} = useContext(AppThemeContext)
  return (
    <View style={[styles.container, theme]}>
      <ScrollView>
        <AccountInfo navigation={props.navigation}/>
        <Options/>
        <Detail navigation={props.navigation}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Setting;
