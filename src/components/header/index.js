import React from 'react';
import { Container, Title, Span } from './styles/header';

export default function Header({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Header.Span = function HeaderSpan({ children, ...restProps }) {
    return <Span {...restProps}>{children}</Span>
}
