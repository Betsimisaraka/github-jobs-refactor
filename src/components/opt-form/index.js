import React from 'react';
import { Container, Base, Group, Input, Label, Frame } from './styles/opt-form';

export default function OptForm({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

OptForm.Base = function OptFormBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>
}

OptForm.Group = function OptFormGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

OptForm.Frame = function OptFormFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

OptForm.Input = function OptFormInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>
}

OptForm.Label = function OptFormLabel({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>
}
