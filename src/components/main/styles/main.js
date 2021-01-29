import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 42px;

    @media (min-width: 1000px) {
        flex-direction: row;
        padding-top: 42px;
    }
`;