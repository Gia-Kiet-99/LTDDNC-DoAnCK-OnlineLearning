import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {NavigatorName} from "../../../globals/constants";

class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: 0}
    }

    componentDidMount() {
        // console.log("didMount")
        this.timer = setInterval(() => {
            let newLoadingValue = this.state.loading + 1
            this.setState({loading: newLoadingValue})
        }, 20);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log("didUpdate")
        if(this.state.loading >= 100) {
            clearInterval(this.timer)
            // this.props.navigation.navigate(NavigatorName.authenticationStack)
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: NavigatorName.authenticationStack }],
            });
        }
    }

    componentWillUnmount() {
        // console.log("willUnmount")
        clearInterval(this.timer);
    }

    render() {
        return <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../../assets/pluralsight-icon.png')}/>
            <Text>{this.state.loading}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: 100,
        width: 100,
    }
})

export default SplashScreen;
