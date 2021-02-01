import styled from 'styled-components';

export const Container = styled.div`
    grid-column: 1 / 3;
`;

export const Base = styled.form`
`;

export const Group = styled.fieldset`
    padding: 0;
    margin: 0 20px 20px 0px;
     &:nth-child(2) {
        display: flex;
        flex-direction: column;
    }
`;

export const Frame = styled.div`
    ${Group} {
        display: flex;
        flex-direction: row;
    }
`;

export const Input = styled.input`
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        padding-top: 17px;
        padding-bottom: 17px;
        padding-left: 32px;
        padding-right: 14px;
        border: none;
        background-image: url('../images/public.svg');
        background-repeat: no-repeat;
        background-size: 1rem;
        background-position: 2% 50%;
`;

export const Label = styled.label`
    &:nth-of-type(1) {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;
        text-transform: uppercase;
        color: #B9BDCF;
        margin-left: 0;
    }
`;

export const Span = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #334680;
    margin-left: 12px;
    text-transform: none;
    padding-bottom: 0;
`;
