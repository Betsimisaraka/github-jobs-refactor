import React from 'react';
import { Container, Fieldset, Input, Submit, Base } from './styles/form';

export default function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Form.Base = function FormBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>
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
