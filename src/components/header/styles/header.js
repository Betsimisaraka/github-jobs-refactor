import styled from 'styled-components';

export const Container = styled.section`
        @media (min-width: 1000px) {
            max-width: 1100px;
            margin-left: auto;
            margin-right: auto;      
        }
    grid-column: 1 / 3; 
`;

export const Title = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    color: #282538;
`;

export const Span = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: #282538;
`;
