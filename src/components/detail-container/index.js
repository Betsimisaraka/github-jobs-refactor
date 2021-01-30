import React from 'react';
import { Container, Group, Title, Type, Date, Image, SubTitle, Location, Description } from './styles/detail-container';

export default function DetailContent({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

DetailContent.Group = function DetailContentGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

DetailContent.Title = function DetailContentTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

DetailContent.Type = function DetailContentType({ children, ...restProps }) {
    return <Type {...restProps}>{children}</Type>
}

DetailContent.Date = function DetailContentDate({ children, ...restProps }) {
    return <Date {...restProps}>{children}</Date>
}

DetailContent.Image = function DetailContentImage({ ...restProps }) {
    return <Image {...restProps} />
}

DetailContent.SubTitle = function DetailContentSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

DetailContent.Location = function DetailContentLocation({ children, ...restProps }) {
    return <Location {...restProps}>{children}</Location>
}

DetailContent.Description = function DetailContentDescription({ children, ...restProps }) {
    return <Description {...restProps}>{children}</Description>
}
