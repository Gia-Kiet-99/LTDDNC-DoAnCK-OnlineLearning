import React, {useState} from 'react'
import {Text, TextInput, View} from 'react-native'
import textStyles from "../../styles/text-styles";
import textInputStyles from "../../styles/text-input-styles";

function UserInput(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <View style={{marginTop: 10}}>
        <Text style={textStyles.labelText}>Username (or email)</Text>
        <TextInput
          selectionColor={'#888'}
          style={[textInputStyles.textInput, styles.username]}
          onChangeText={(text) => setUsername(text)}
          defaultValue={username}/>
      </View>

      <View>
        <Text style={[textStyles.labelText, {marginTop: 10}]}>Password</Text>
        <TextInput
          selectionColor={'#888'}
          style={textInputStyles.textInput}
          secure={true}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          defaultValue={password}
        />
      </View>
    </View>
  )
}

export default UserInput;