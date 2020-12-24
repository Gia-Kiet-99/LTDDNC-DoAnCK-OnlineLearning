import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Description = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={(isExpanded === true) ? styles.description : styles.briefDescription}>
      <View style={styles.desWrapper}>
        <Text>{`${props.content.description}`}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.expandButton}
        onPress={() => setIsExpanded(!isExpanded)}>
        <Image
          style={styles.expandImage}
          source={(isExpanded === true) ?
            require('../../../assets/up-arrow.png') :
            require('../../../assets/down-arrow.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    flexDirection: 'row',
    marginTop: 20,
    // backgroundColor: 'beige'
  },
  briefDescription: {
    height: 50,
    flexDirection: 'row',
    marginTop: 20,
    // backgroundColor: 'beige',
    overflow: 'hidden',
  },
  desWrapper: {
    flex: 1,
  },
  expandButton: {
    backgroundColor: '#ddd',
    padding: 8,
    borderRadius: 5,
    justifyContent: 'center'
  },
  expandImage: {
    height: 12,
    width: 12
  },
})

export default Description;
