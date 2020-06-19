import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />

            <span>{ nickname }</span>

            { isBot && <span>bot</span> }
        </User>
    );
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>

            <UserRow nickname="Kuro" />

            <Role>Offline - 19</Role>
            <UserRow nickname="Não sou bot" isBot />
            <UserRow nickname="Teste de overflow na linha" />
            <UserRow nickname="Usuário" />
            <UserRow nickname="Usuário" />
            <UserRow nickname="Usuário" />
            <UserRow nickname="Usuário" />
            <UserRow nickname="Usuário" />
            <UserRow nickname="Usuário" />
            <UserRow nickname="Usuário" />
            <UserRow nickname="Usuário" />
            <UserRow nickname="Usuário" />
            <UserRow nickname="Usuário" />
            <UserRow nickname="Usuário" />
            <UserRow nickname="Usuário" />
            <UserRow nickname="Usuário" />
            <UserRow nickname="Usuário" />
            <UserRow nickname="Usuário" />
            <UserRow nickname="Usuário" />
            <UserRow nickname="Usuário" />
        </Container>
    )
};

export default UserList;