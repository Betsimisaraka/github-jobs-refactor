import styled from 'styled-components';

export const Container = styled.div`
    background-image: url('../images/backgroundimg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 138px;
    border-radius: 8px;
    /* display: flex; */
    text-align: center;
`;

export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
`;

export const Input = styled.input`
    width: 50%;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 48px;
    border: none;
    background-image: url('../assets/work.svg');
    background-repeat: no-repeat;
    background-size: 1rem;
    background-position: 5% 50%;
`;

export const Submit = styled.button`
    background: #1E86FF;
    border-radius: 4px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    padding: 14px 48px;
    border: none;
    margin-right: 4px;
`;