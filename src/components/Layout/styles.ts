import styled from 'styled-components';

// SL - Server List
// SN - Server Name
// CI - Channel Info
// CL - Channel List
// CD - Channel Data
// UL - User List
// UI - User Info

/**
 *  A única parte responsiva da aplicação é o container responsável pelas
 *  mensagens, logo ela fica com tanho em auto para se ajustar conforme
 *  tamanho da tela
 */
export const Grid = styled.div`
    display: grid;

    grid-template-columns: 71px 240px auto 240px;
    grid-template-rows: 46px auto 52px;

    grid-template-areas: 
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL';

    height: 100vh;
`;
