import styled from 'styled-components';

export const Container = styled.div`
    @media (min-width: 1000px) {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        column-gap: 22px;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;        
    }
`;