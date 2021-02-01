import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 42px;

    @media (min-width: 1000px) {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        padding-top: 42px;
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;      
    }
`;