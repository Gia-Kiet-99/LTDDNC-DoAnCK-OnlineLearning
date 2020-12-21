import React, {useState} from 'react'
import {Modal, Text, TouchableOpacity, View} from 'react-native'
import {Feather, Ionicons} from "@expo/vector-icons";

function ListChannelModal(props) {
  const [modalVisible, setModalVisible] = useState(false)

  const hideListChannelModal = () => {
    setModalVisible(false)
  }
  const renderCurrentChannel = (channelNames) => {
    return channelNames.map(item => <ModalButtonItem key={item.id} item={item}/>)
  }

  const ModalButtonItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.modalButton}
        onPress={() => addCurrentCourseToChannel(item)}>
        <Ionicons name="md-wifi" size={24} color="#34495e"/>
        <Text style={styles.modalText}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={props.hideModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>
            Add to channel
          </Text>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={props.onCreateChannelPressed}>
            <Feather name="plus" size={24} color="#34495e"/>
            <Text style={styles.modalText}>Create new channel</Text>
          </TouchableOpacity>
          {renderCurrentChannel(channelNames)}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'beige',
    // opacity: 0.5,
  },
  modalView: {
    width: '95%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'white',
    // opacity: 1,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'pink',
    padding: 10,
  },
  modalText: {
    fontSize: 16,
    marginLeft: 8
  },
  modalTitle: {
    alignItems: 'center',
    // backgroundColor: 'pink',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444'
  },
})

export default ListChannelModal;