import styled from 'styled-components';
import {Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
     @media (min-width: 1000px) {
        grid-column: 1 / 3;
     }
`;

export const Link = styled(RouterLink)`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #1E86FF;
    text-decoration: none;
`;

export const SubTitle = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    color: #B9BDCF;
    padding-top: 36px;
    padding-bottom: 16px;
    margin: 0;
`;

export const Content = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #334680;
    padding-bottom: 36px;
    margin: 0;
    max-width: 200px;
`;
