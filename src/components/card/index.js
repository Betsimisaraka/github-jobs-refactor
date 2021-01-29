import React from 'react';

import { Container, Group, Frame, Link, Image, Company, Title, Type, Location, Date } from './styles/card';

export default function Card({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Card.Group = function CardGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Card.Frame = function CardFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

Card.Link = function CardLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Card.Image = function CardImage({ children, ...restProps }) {
    return <Image {...restProps} />
}

Card.Company = function CardCompany({ children, ...restProps }) {
    return <Company {...restProps}>{children}</Company>
}

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Card.Type = function CardType({ children, ...restProps }) {
    return <Type {...restProps}>{children}</Type>
}

Card.Location = function CardLocation({ children, ...restProps }) {
    return <Location {...restProps}>{children}</Location>
}

Card.Date = function CardDate({ children, ...restProps }) {
    return <Date {...restProps}>{children}</Date>
}
