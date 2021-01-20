import React, {useContext, useEffect, useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {NavigatorName} from "../../../globals/constants";
import {AuthenticationContext} from "../../../provider/authentication-provider";
import {getAuthTokenFromStorage, removeAuthToken} from "../../../core/utils/async-storage-service";

const SplashScreen = (props) => {
  const authContext = useContext(AuthenticationContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      getAuthTokenFromStorage().then(token => {
        if (token != null) {
          authContext.getUserInfo(token).then(() => {
            // console.log("loginBySavedToken value: ", authContext.loginBySavedToken)
            if (authContext.loginBySavedToken === false) {
              removeAuthToken().then()
              props.navigation.reset({
                index: 0,
                routes: [{name: NavigatorName.authenticationStack}]
              })
            }
          })
        } else {
          props.navigation.reset({
            index: 0,
            routes: [{name: NavigatorName.authenticationStack}]
          })
        }
      }).catch(e => {
        console.log(e)
      }).finally(() => {
        setLoading(false)
      })
    }
  }, [loading])

  return <View style={styles.container}>
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Image style={styles.logo} source={require('../../../../assets/logo-without-name.png')}/>
    </View>
    <View>
      <Image style={styles.appNameImage} source={require('../../../../assets/app-name.png')}/>
    </View>
  </View>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 200,
    width: 300,

  },
  appNameImage: {
    height: 50,
    width: 150
  }
})

export default SplashScreen;
