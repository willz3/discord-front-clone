import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './styles';

const ChannelInfo: React.FC = () => {
    return (
        <Container>
            <HashtagIcon />

            <Title>chat_principal</Title>

            <Separator />

            <Description>Canal aberto para conversar</Description>
        </Container>
    )
};

export default ChannelInfo;