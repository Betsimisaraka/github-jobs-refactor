import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DetailContainer, DetailHeader } from '../components';
import HeaderContainer from '../containers/header';
import { GlobalContext } from '../context/globalContext';

export default function Details() {
    const { id } = useParams();

    const { state } = useContext(GlobalContext);
    const { githubJobs } = state;

    const findTheSameId = githubJobs.find(job => job.id === id);

    return (
        <>
            <HeaderContainer>
                <DetailHeader>
                    <DetailHeader.Link to="/">⬅ Back to search</DetailHeader.Link>
                    <DetailHeader.SubTitle>How to apply</DetailHeader.SubTitle>
                    <DetailHeader.Content>{findTheSameId.how_to_apply}</DetailHeader.Content>
                </DetailHeader>
                <DetailContainer>
                    <DetailContainer.Group>
                        <DetailContainer.Title>{findTheSameId.title}</DetailContainer.Title>
                        <DetailContainer.Type>{findTheSameId.type}</DetailContainer.Type>
                        <DetailContainer.Date>{findTheSameId.created_at}</DetailContainer.Date>
                    </DetailContainer.Group>
                </DetailContainer>
            </HeaderContainer>

        </>
    )
}
