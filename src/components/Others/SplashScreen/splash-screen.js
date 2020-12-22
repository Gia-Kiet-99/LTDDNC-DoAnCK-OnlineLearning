import React, {useContext, useEffect, useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {NavigatorName, ScreenName} from "../../../globals/constants";
import {AuthenticationContext} from "../../../provider/authentication-provider";
import {getAuthTokenFromStorage} from "../../../core/services/async-storage-service";

// class SplashScreen extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {loading: 0}
//     }

// componentDidMount() {
//     // console.log("didMount")
//     this.timer = setInterval(() => {
//         let newLoadingValue = this.state.loading + 1
//         this.setState({loading: newLoadingValue})
//     }, 20);
// }
//
// componentDidUpdate(prevProps, prevState, snapshot) {
//     // console.log("didUpdate")
//     if(this.state.loading >= 100) {
//         clearInterval(this.timer)
//         // this.props.navigation.navigate(NavigatorName.authenticationStack)
//         this.props.navigation.reset({
//             index: 0,
//             routes: [{ name: NavigatorName.authenticationStack }],
//         });
//     }
// }
//
// componentWillUnmount() {
//     clearInterval(this.timer);
// }
const SplashScreen = (props) => {
  const authContext = useContext(AuthenticationContext)
  // const [isAuthenticated, setAuthenticated] = useState(false)
  //
  // const checkAvailableToken = async () => {
  //   const savedToken = await getAuthTokenFromStorage()
  //   if (savedToken != null) {
  //     setAuthenticated(true)
  //   }
  // }

  useEffect(() => {
    getAuthTokenFromStorage().then(response => {
      if (response != null) {
        authContext.getUserInfo(response).then()
        if (authContext.isAuthenticated === false) {
          props.navigation.reset({
            index: 0,
            routes: [{name: NavigatorName.authenticationStack}]
          })
        }
      } else {
        props.navigation.reset({
          index: 0,
          routes: [{name: NavigatorName.authenticationStack}]
        })
      }
    })
  })

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
