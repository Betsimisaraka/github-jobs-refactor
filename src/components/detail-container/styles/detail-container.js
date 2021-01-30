import styled from 'styled-components';

export const Container = styled.div`
    @media (min-width: 1000px) {
        grid-column: 3 / 8;
    }
    
`;

export const Group = styled.div`
     @media (min-width: 1000px) {
        &:first-of-type {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
     }
    &:last-of-type {
        padding-top: 34px;
        padding-bottom: 34px;
        display: grid;
        grid-template-columns: repeat(2, 100px);
    }
`;

export const Title = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #334680;
    margin: 0;

    @media (min-width: 1000px) {
        grid-column: 1 / 2
    }
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

    @media (min-width: 1000px) {
        grid-column: 2 / 3
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
    padding-top: 10px;
    margin: 0;

    @media (min-width: 1000px) {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }
`;

export const Image = styled.img`
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    width: 50px;
    height: 50px;
`;

export const SubTitle = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #334680;
    padding-bottom: 10px;
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
`;

export const Description = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #334680;
    margin: 0;
    padding: 0;
`;

