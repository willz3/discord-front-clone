import React from 'react';

import { Grid } from './styles';
import ServerName from '../ServerName';
import ServerList from '../ServerList';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
//Forma de exportação de component em TS
const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList />
            <ServerName />
            <ChannelInfo />
            <ChannelList />
            <UserInfo />
        </Grid>
    )
};

export default Layout;