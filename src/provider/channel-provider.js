import React, {createContext, useEffect, useState} from 'react';
import {channels} from "../localize/data";

export const ChannelContext = createContext();

const ChannelProvider = (props) => {
  const [channelList, setChannelList] = useState(channels)

  // useEffect(() => {
  //   setChannelList([...channelList])
  // }, channelList)

  const getChannelById = (id) => {
    return channelList.find(obj => obj.id === id)
  }

  const getPublicChannels = () => {
    return channelList.filter(obj => obj.type === "public")
  }

  const getPrivateChannels = () => {
    return channelList.filter(obj => obj.type === "private")
  }

  const getPrivateChannelNames = () => {
    let privateChannels = getPrivateChannels()
    return privateChannels.map(obj => ({
      id: obj.id,
      name: obj.title,
    }))
  }

  const addCourseToChannel = (channelId, course) => {
    for (let i = 0; i < channelList.length; i++) {
      if (channelList[i].id === channelId) {
        let isExists = false
        let courses = channelList[i].courses
        for (let j = 0; j < courses.length; j++) {
          if (courses[j].id === course.id) {
            isExists = true
            return
          }
        }
        if (!isExists) {
          channelList[i].courses.push(course)
          break
        }
      }
    }
    setChannelList([...channelList])
  }

  const addChannel = (channelName, owner, newCourse) => {
    let newId = "channel#" + (channelList.length + 1)
    let newChannel = {
      id: newId,
      image: require('../../assets/channel-image.png'),
      title: channelName,
      owner: owner,
      type: "private",
      courses: [newCourse],
    }

    channelList.push(newChannel)
    setChannelList([...channelList])
  }

  return (
    <ChannelContext.Provider
      value={{
        channelList,
        getChannelById,
        getPublicChannels,
        getPrivateChannels,
        getPrivateChannelNames,
        addChannel,
        addCourseToChannel
      }}>

      {props.children}
    </ChannelContext.Provider>
  );
};

export default ChannelProvider;
