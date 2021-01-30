import React from 'react';
import { Container, Group, Title, Type, Date, Image, SubTitle, Company, Description } from './styles/detail-container';

export default function DetailContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

DetailContainer.Group = function DetailContainerGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

DetailContainer.Title = function DetailContainerTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

DetailContainer.Type = function DetailContainerType({ children, ...restProps }) {
    return <Type {...restProps}>{children}</Type>
}

DetailContainer.Date = function DetailContainerDate({ children, ...restProps }) {
    return <Date {...restProps}>{children}</Date>
}

DetailContainer.Image = function DetailContainerImage({ ...restProps }) {
    return <Image {...restProps} />
}

DetailContainer.SubTitle = function DetailContainerSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

DetailContainer.Company = function DetailContainerCompany({ children, ...restProps }) {
    return <Company {...restProps}>{children}</Company>
}

DetailContainer.Description = function DetailContainerDescription({ children, ...restProps }) {
    return <Description {...restProps}>{children}</Description>
}
