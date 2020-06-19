import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="chat_principal" />
            <ChannelButton channelName="bot" />
            <ChannelButton channelName="意味わかんない" />
            <ChannelButton channelName="Tibao" />
            <ChannelButton channelName="HomeWork" />
            <ChannelButton channelName="LoL" />
            <ChannelButton channelName="Random" />
            <ChannelButton channelName="ToS" />
            <ChannelButton channelName="SALA [AFK]" />
        </Container>
    )
};

export default ChannelList;