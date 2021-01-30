import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 32px;
    margin-top: 32px;
    margin-bottom: 32px;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (min-width: 1000px) {
        margin-top: unset;
    }
`;

export const Frame = styled.div`
    grid-column: 2/ 4;

    @media (min-width: 1000px) {
        grid-column: 2/ 6;
    }
`;

export const Link = styled(ReachRouterLink)`
    text-decoration: none;
`;

export const Image = styled.img`
     grid-column: 1/ 2;
`;

export const Group = styled.li`
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    column-gap: 20px;
    padding: 12px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 17px;
    ${Image} {
        width: 100%;
        border-radius: 4px;
    }
    @media (min-width: 1000px) {
        grid-template-columns: repeat(7, 1fr);
        ${Image} {
            grid-column: 1/ 2;
        }
    }
`;

export const Company = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #334680;
    margin: 0;
    padding: 0;
`;

export const Title = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #334680;
`;

export const Type = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #334680;
    border: 1px solid #334680;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 6px 8px;
    width: 70px;
    margin: 0;
`;

export const Location = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #B9BDCF;
    background-image: url('../images/public.svg');
    background-repeat: no-repeat;
    background-size: 1rem;
    padding-left: 1.5rem;
    grid-column: 2 / 3;
    align-self: end;
    margin: 0;

    @media (min-width: 1000px) {
        grid-column: 6 / 7;
    }
`;

export const Date = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #B7BCCE;
    grid-column: 3/4;
    align-self: end;
    margin: 0;
    padding: 0;

    @media (min-width: 1000px) {
        grid-column: 7/8;
    }
`;
