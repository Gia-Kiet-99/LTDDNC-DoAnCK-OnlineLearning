import React, {useContext, useState} from "react";
import {AppThemeContext} from "../../../../provider/theme-provider";
import {Pressable, StyleSheet, Switch, Text, TouchableOpacity, View} from "react-native";

const Options = () => {
  //use theme context
  const {isDark, toggleTheme} = useContext(AppThemeContext)

  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const [isEnabled4, setIsEnabled4] = useState(false);
  const [isEnabled5, setIsEnabled5] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(!isEnabled1);
  const toggleSwitch2 = () => setIsEnabled2(!isEnabled2);
  const toggleSwitch3 = () => setIsEnabled3(!isEnabled3);
  const toggleSwitch4 = () => setIsEnabled4(!isEnabled4);
  const toggleSwitch5 = () => setIsEnabled5(!isEnabled5);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Default caption language</Text>
        <Text style={{fontSize: 13}}>English</Text>
      </TouchableOpacity>

      <Pressable style={styles.button} onPress={toggleSwitch1}>
        <View style={styles.switchWrapper}>
          <Text style={styles.buttonText}>Require Wi-Fi for streaming</Text>
          <Switch
            trackColor={{false: "#767577", true: "#81b0ff"}}
            thumbColor={isEnabled1 ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleSwitch1}
            value={isEnabled1}
          />
        </View>
      </Pressable>

      <Pressable style={styles.button} onPress={toggleSwitch2}>
        <View style={styles.switchWrapper}>
          <Text style={styles.buttonText}>Require Wi-Fi for downloading</Text>
          <Switch
            trackColor={{false: "#767577", true: "#81b0ff"}}
            thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
      </Pressable>

      <Pressable style={styles.button} onPress={toggleSwitch3}>
        <View style={styles.switchWrapper}>
          <Text style={styles.buttonText}>Show quiz at the end of video</Text>
          <Switch
            trackColor={{false: "#767577", true: "#81b0ff"}}
            thumbColor={isEnabled3 ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleSwitch3}
            value={isEnabled3}
          />
        </View>
      </Pressable>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Download location</Text>
        <Text style={{fontSize: 13}}>Default location (8.03 GB free of 23.58 GB)</Text>
      </TouchableOpacity>

      <Pressable style={styles.button} onPress={toggleSwitch4}>
        <View style={styles.switchWrapper}>
          <View style={{flex: 6}}>
            <Text style={styles.buttonText}>Recommended content push notifications</Text>
            <Text>Receive notification about recommended content</Text>
          </View>
          <Switch style={{flex: 1}}
                  trackColor={{false: "#767577", true: "#81b0ff"}}
                  thumbColor={isEnabled4 ? "#f5dd4b" : "#f4f3f4"}
                  onValueChange={toggleSwitch4}
                  value={isEnabled4}
          />
        </View>
      </Pressable>

      <Pressable style={styles.button} onPress={toggleSwitch5}>
        <View style={styles.switchWrapper}>
          <View style={{flex: 6}}>
            <Text style={styles.buttonText}>Reminder to learn notifications</Text>
            <Text>Schedule the app to remind you to learn to skill up faster and conquer your goals</Text>
          </View>
          <Switch style={{flex: 1}}
                  trackColor={{false: "#767577", true: "#81b0ff"}}
                  thumbColor={isEnabled5 ? "#f5dd4b" : "#f4f3f4"}
                  onValueChange={toggleSwitch5}
                  value={isEnabled5}
          />
        </View>
      </Pressable>

      <Pressable style={styles.button} onPress={toggleTheme}>
        <View style={styles.switchWrapper}>
          <Text style={styles.buttonText}>Dark mode</Text>
          <Switch
            trackColor={{false: "#767577", true: "#81b0ff"}}
            thumbColor={isDark ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleTheme}
            value={isDark}
          />
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    padding: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: 'lightgray'
  },
  buttonText: {
    fontSize: 18
  },
  switchWrapper: {
    flex: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default Options;