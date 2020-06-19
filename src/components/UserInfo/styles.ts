import styled from 'styled-components';
import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
    grid-area: UI;
    display: flex;

    align-items: center;
    justify-content: space-between;

    padding: 10px;
    background-color: var(--quaternary);
    box-shadow: rgba(0, 0, 0, 2.2) 0px 1px 0px 0px;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
`;

export const Avatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;

    background-color: var(--gray);
`;

export const UserData = styled.div`
    margin-left: 8px;

    display: flex;
    flex-direction: column;

    > strong {
        color: var(--white);
        front-size: 13px;
        display: block;
    }

    > span {
        color: var(--gray);
        font-size: 13px;
    }
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;

    >svg:not(:first-child) {
        margin-left: 7px;
    }
`;

export const MicIcon = styled(Mic)`
    width: 20px;
    height: 20px;

    color: var(--white);
    opacity: .7;
    cursor: pointer;

    transation: opacity .2s;

    &:hover {
        opacity: 100%;
    }
`;

export const HeadphoneIcon = styled(Headset)`
    width: 20px;
    height: 20px;

    color: var(--white);
    opacity: .7;
    cursor: pointer;

    transation: opacity .2s;

    &:hover {
        opacity: 100%;
    }
`;

export const SettingsIcon = styled(Settings)`
    width: 20px;
    height: 20px;

    color: var(--white);
    opacity: .7;
    cursor: pointer;

    transation: opacity .2s;

    &:hover {
        opacity: 100%;
    }   
`;