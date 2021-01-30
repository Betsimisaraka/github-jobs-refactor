import React from 'react';
import { Container } from './styles/detail';

export default function Detail({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}
