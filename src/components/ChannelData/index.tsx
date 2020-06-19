import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {

    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef])

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((k) => (
                    <ChannelMessage
                        key={k}
                        author="Kuro"
                        date="19/06/2020"
                        content="Certamente é uma mensagem de testes."
                    />
                ))}

                <ChannelMessage
                    author="Não sou bot"
                    date="19/06/2020"
                    content={
                        <>
                            <Mention>@Kuro</Mention>, certamente é uma resposta de testes.
                        </>
                    }
                    hasMention
                    isBot
                /> 
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em chat_principal" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;