import React from 'react';
import { Container, Fieldset, Input, Submit } from './styles/form';

export default function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Form.Fieldset = function FormFieldset({ children, ...restProps }) {
    return <Fieldset {...restProps}>{children}</Fieldset>
}

Form.Input = function FormInput({...restProps }) {
    return <Input {...restProps} />
}

Form.Submit = function FormSubmit({ children, ...restProps }) {
    return <Submit {...restProps}>{children}</Submit>
}
