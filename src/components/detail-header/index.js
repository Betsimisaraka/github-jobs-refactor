import React from 'react';
import { Container, Link, SubTitle, Content } from './styles/detail-header';

export default function DetailHeader({ children, ...restProps }) {
    return (
       <Container {...restProps}>{children}</Container>
    )
}

DetailHeader.Link = function DetailHeaderLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

DetailHeader.SubTitle = function DetailHeaderSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

DetailHeader.Content = function DetailHeaderContent({ children, ...restProps }) {
    return <Content {...restProps}>{children}</Content>
}
