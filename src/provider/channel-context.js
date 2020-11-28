import React, {createContext, useState} from 'react';
import {channels} from "../localize/data";

export const ChannelContext = createContext();

const ChannelProvider = (props) => {
    const [channelList, setChannelList] = useState(channels)

    const getChannelById = (id) => {
        return channelList.find(obj => obj.id === id)
    }

    const getPublicChannels = () => {
        return channelList.filter(obj => obj.type === "public")
    }

    const getPrivateChannels = () => {
        return channelList.filter(obj => obj.type === "private")
    }

    return (
        <ChannelContext.Provider
            value={{
                channelList,
                getChannelById,
                getPublicChannels,
                getPrivateChannels
            }}>

            {props.children}
        </ChannelContext.Provider>
    );
};

export default ChannelProvider;
